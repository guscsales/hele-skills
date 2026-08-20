import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mergeCursorModels } from '../src/cursor.js';

const ENTRY = fileURLToPath(new URL('../src/index.js', import.meta.url));
const DEFAULT_MODELS = JSON.parse(
  fs.readFileSync(new URL('../../templates/settings.json', import.meta.url), 'utf8')
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
  assert.match(out, /\[building\]/);
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

test('mergeCursorModels expands strings and fills missing cursor keys', () => {
  const { models, touched } = mergeCursorModels(
    {
      'backend-cho': 'sonnet',
      'security-jane': { 'claude-code': 'fable' },
      'design-vega': { 'claude-code': 'opus', cursor: 'opus' },
    },
    DEFAULT_MODELS
  );

  assert.deepEqual(models['backend-cho'], { 'claude-code': 'sonnet', cursor: 'grok' });
  assert.deepEqual(models['security-jane'], { 'claude-code': 'fable', cursor: 'fable' });
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
