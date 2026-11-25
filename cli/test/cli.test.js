import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mergeCursorModels } from '../src/cursor.js';
import { FLOW_DIAGRAM } from '../src/flow-diagram.js';

const ENTRY = fileURLToPath(new URL('../src/index.js', import.meta.url));
const DEFAULT_MODELS = JSON.parse(
  fs.readFileSync(new URL('../../core/default-config.json', import.meta.url), 'utf8')
).agents.models;

function fixtureProject() {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-cli-test-')));
  const hele = path.join(root, '.hele');
  fs.mkdirSync(hele);
  fs.writeFileSync(
    path.join(hele, 'index.json'),
    JSON.stringify({
      features: [
        {
          slug: 'inventory-control',
          title: 'Inventory Control',
          aliases: ['controle de estoque', 'inventário'],
          summary: 'Track stock levels',
          status: 'building',
          docs: { prd: '1.0' },
        },
      ],
    })
  );
  fs.writeFileSync(
    path.join(hele, 'settings.json'),
    JSON.stringify({ version: 1, agents: { maxParallel: 4, models: {} } }, null, 2)
  );
  return root;
}

function hele(cwd, ...args) {
  return execFileSync(process.execPath, [ENTRY, ...args], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, NO_COLOR: '1', HELE_DIR: '' },
  });
}

test('find --list shows registered features', () => {
  const out = hele(fixtureProject(), 'find', '--list');
  assert.match(out, /inventory-control/);
  assert.match(out, /Track stock levels/);
  assert.doesNotMatch(out, /\[building\]/);
});

test('find matches an accented pt-BR alias', () => {
  const out = hele(fixtureProject(), 'find', 'inventário');
  assert.match(out, /INDEX MATCHES/);
  assert.match(out, /inventory-control/);
});

test('find reports no matches for unrelated terms', () => {
  const out = hele(fixtureProject(), 'find', 'payment', 'gateway');
  assert.match(out, /NO MATCHES/);
});

test('find --json returns machine-readable output', () => {
  const out = hele(fixtureProject(), 'find', '--json', 'estoque');
  const parsed = JSON.parse(out);
  assert.equal(parsed.index_matches[0].slug, 'inventory-control');
});

test('config set / get / add round-trip', () => {
  const root = fixtureProject();
  hele(root, 'config', 'set', 'agents.maxParallel', '6');
  assert.equal(JSON.parse(hele(root, 'config', 'get', 'agents.maxParallel')), 6);

  hele(root, 'config', 'set', 'agents.models.backend-cho', 'sonnet');
  assert.equal(JSON.parse(hele(root, 'config', 'get', 'agents.models.backend-cho')), 'sonnet');

  hele(root, 'config', 'add', 'designSystem.paths', 'src/design');
  hele(root, 'config', 'add', 'designSystem.paths', 'src/design'); // dedupe
  assert.deepEqual(JSON.parse(hele(root, 'config', 'get', 'designSystem.paths')), ['src/design']);
});

function heleRaw(cwd, ...args) {
  const r = spawnSync(process.execPath, [ENTRY, ...args], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, NO_COLOR: '1', HELE_DIR: '' },
  });
  return { status: r.status, stdout: r.stdout, stderr: r.stderr };
}

test('TS-006 config get and list return saved values only; effective changes nothing', () => {
  const root = fixtureProject();
  assert.equal(heleRaw(root, 'config', 'get', 'output.preset').status, 1);
  assert.notEqual(heleRaw(root, 'config', 'get', 'output.preset').stdout.trim(), '"compact"');
  assert.equal(heleRaw(root, 'config', 'get', 'output').status, 1);
  const before = heleRaw(root, 'config', 'list').stdout;
  assert.equal(heleRaw(root, 'config', 'effective', 'output').status, 0);
  assert.equal(heleRaw(root, 'config', 'list').stdout, before);
  assert.deepEqual(JSON.parse(before), { version: 1, agents: { maxParallel: 4, models: {} } });
  assert.equal(heleRaw(root, 'config', 'get', 'agents.nothing').status, 1);

  const bare = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-cli-nosettings-')));
  fs.mkdirSync(path.join(bare, '.hele'));
  assert.equal(heleRaw(bare, 'config', 'list').status, 2);
  assert.equal(heleRaw(bare, 'config', 'get', 'x').status, 2);
});

test('TS-008 keys outside output keep the unvalidated write behavior and exit codes', () => {
  const root = fixtureProject();
  assert.equal(heleRaw(root, 'config', 'set', 'questions.unknownName', '7').status, 0);
  assert.equal(JSON.parse(hele(root, 'config', 'get', 'questions.unknownName')), 7);
  assert.equal(heleRaw(root, 'config', 'set', 'qa.maxScreenshots', '--', '-5').status, 0);
  assert.equal(JSON.parse(hele(root, 'config', 'get', 'qa.maxScreenshots')), -5);

  const file = path.join(root, '.hele', 'settings.json');
  hele(root, 'config', 'set', 'scalar', '3');
  hele(root, 'config', 'set', 'nothing', 'null');
  hele(root, 'config', 'set', 'arr', '[1]');
  for (const target of ['scalar.x', 'nothing.x', 'arr.x']) {
    const before = fs.readFileSync(file);
    assert.equal(heleRaw(root, 'config', 'set', target, '1').status, 1, target);
    assert.ok(before.equals(fs.readFileSync(file)), target);
  }
  assert.equal(heleRaw(root, 'config', 'add', 'scalar', '1').status, 1);

  assert.equal(heleRaw(root, 'config', 'set').status, 2);
  assert.equal(heleRaw(root, 'config', 'set', 'a.b').status, 2);
  assert.equal(heleRaw(root, 'config', 'frob', 'x').status, 2);
});

test('mergeCursorModels expands strings and fills missing cursor keys', () => {
  const { models, touched } = mergeCursorModels(
    {
      'backend-cho': 'sonnet',
      'security-jane': { 'claude-code': 'fable' },
      'design-vega': { 'claude-code': 'opus', cursor: 'opus' },
    },
    DEFAULT_MODELS
  );

  assert.deepEqual(models['backend-cho'], { 'claude-code': 'sonnet', cursor: 'composer' });
  assert.deepEqual(models['security-jane'], { 'claude-code': 'fable', cursor: 'grok' });
  assert.deepEqual(models['design-vega'], { 'claude-code': 'opus', cursor: 'opus' });
  assert.deepEqual(models['frontend-van-pelt'], DEFAULT_MODELS['frontend-van-pelt']);
  assert.deepEqual(DEFAULT_MODELS['staff-lisbon-run'], { 'claude-code': 'sonnet', cursor: 'composer' });
  assert.deepEqual(models['staff-lisbon-run'], DEFAULT_MODELS['staff-lisbon-run']);
  assert.ok(touched.includes('backend-cho'));
  assert.ok(touched.includes('security-jane'));
  assert.ok(touched.includes('frontend-van-pelt'));
  assert.ok(!touched.includes('design-vega'));
});

test('errors with exit code 2 when no .hele exists', () => {
  const empty = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-empty-')));
  assert.throws(
    () => hele(empty, 'find', '--list'),
    (err) => err.status === 2
  );
});

test('ai overview and README use the canonical flow diagram', () => {
  const readme = fs.readFileSync(new URL('../../README.md', import.meta.url), 'utf8');
  const section = readme.slice(readme.indexOf('## The flow'));
  const diagram = section.match(/```[^\n]*\n([\s\S]*?)\n```/)?.[1];
  assert.equal(diagram, FLOW_DIAGRAM);
  assert.ok(hele(os.tmpdir(), 'ai').includes(FLOW_DIAGRAM));
});

test('existing-suite audit help is discoverable without an initialized project', () => {
  const empty = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-audit-help-')));
  try {
    const output = hele(empty, 'ai', 'fix-e2e');
    assert.match(output, /E2E_AUDIT\.md/);
    assert.equal(hele(empty, 'ai', '/hele-fix-e2e'), output);
    assert.equal(hele(empty, 'ai', 'hele-fix-e2e'), output);
    assert.deepEqual(fs.readdirSync(empty), []);
  } finally {
    fs.rmSync(empty, { recursive: true, force: true });
  }
});
