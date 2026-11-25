import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ENTRY = fileURLToPath(new URL('../src/index.js', import.meta.url));

// Literal preset tables (BR-21). Never read from core/default-config.json or src/output.js.
const COMPACT = {
  preset: 'compact',
  tables: 'auto',
  maxTableRows: 8,
  sections: { testStubs: 'summary', coverage: 'summary', prdDelta: 'summary', qaResults: 'issues', dispatch: 'brief', screenshots: 'links' },
  warnings: [],
};
const STANDARD = {
  preset: 'standard',
  tables: 'auto',
  maxTableRows: 15,
  sections: { testStubs: 'summary', coverage: 'summary', prdDelta: 'full', qaResults: 'issues', dispatch: 'brief', screenshots: 'links' },
  warnings: [],
};
const DETAILED = {
  preset: 'detailed',
  tables: 'always',
  maxTableRows: 30,
  sections: { testStubs: 'full', coverage: 'full', prdDelta: 'full', qaResults: 'full', dispatch: 'full', screenshots: 'inline' },
  warnings: [],
};

function project(settings = { version: 1, agents: { maxParallel: 4, models: {} } }) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-output-test-')));
  fs.mkdirSync(path.join(root, '.hele'));
  fs.writeFileSync(path.join(root, '.hele', 'index.json'), JSON.stringify({ features: [] }));
  if (settings !== null) {
    fs.writeFileSync(path.join(root, '.hele', 'settings.json'), JSON.stringify(settings, null, 2) + '\n');
  }
  return root;
}

function run(cwd, ...args) {
  const r = spawnSync(process.execPath, [ENTRY, ...args], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, NO_COLOR: '1', HELE_DIR: '' },
  });
  return { status: r.status, stdout: r.stdout, stderr: r.stderr };
}

const settingsFile = (root) => path.join(root, '.hele', 'settings.json');
const bytes = (root) => fs.readFileSync(settingsFile(root));
const saved = (root) => JSON.parse(fs.readFileSync(settingsFile(root), 'utf8'));
const effective = (root) => {
  const r = run(root, 'config', 'effective', 'output');
  assert.equal(r.status, 0, r.stderr);
  return JSON.parse(r.stdout);
};

function refused(root, args, label = args.join(' ')) {
  const before = bytes(root);
  const r = run(root, 'config', ...args);
  assert.equal(r.status, 1, `${label}: expected exit 1, got ${r.status} (${r.stderr})`);
  assert.match(r.stderr, /^ERROR:/, label);
  assert.ok(Buffer.compare(before, bytes(root)) === 0, `${label}: settings changed`);
}

test('TS-022 every allowed output value is accepted and reads back', () => {
  const cases = [
    ['output.preset', ['compact', 'standard', 'detailed']],
    ['output.tables', ['auto', 'always']],
    ['output.maxTableRows', [1, 12]],
    ['output.sections.testStubs', ['off', 'summary', 'full']],
    ['output.sections.coverage', ['off', 'summary', 'full']],
    ['output.sections.prdDelta', ['summary', 'full']],
    ['output.sections.qaResults', ['summary', 'issues', 'full']],
    ['output.sections.dispatch', ['brief', 'full']],
    ['output.sections.screenshots', ['off', 'links', 'inline']],
  ];
  const root = project();
  for (const [key, values] of cases) {
    for (const v of values) {
      const raw = typeof v === 'number' ? String(v) : v;
      const w = run(root, 'config', 'set', key, raw);
      assert.equal(w.status, 0, `${key}=${raw}: ${w.stderr}`);
      assert.deepEqual(JSON.parse(run(root, 'config', 'get', key).stdout), v);
    }
  }
  // unrelated keys untouched
  const s = saved(root);
  assert.equal(s.version, 1);
  assert.deepEqual(s.agents, { maxParallel: 4, models: {} });
});

test('TS-022 only a preset, only one override, and nothing under output are all valid', () => {
  const onlyPreset = project({ version: 1, output: { preset: 'standard' } });
  assert.equal(effective(onlyPreset).preset, 'standard');
  const oneOverride = project({ version: 1, output: { sections: { coverage: 'off' } } });
  assert.equal(effective(oneOverride).sections.coverage, 'off');
  const nothing = project({ version: 1 });
  assert.deepEqual(effective(nothing), COMPACT);
});

test('TS-029 unknown keys and invalid values are refused with exit 1 and the file untouched', () => {
  const root = project({ version: 1, output: { preset: 'standard' }, agents: { maxParallel: 4 } });
  const bad = [
    ['set', 'output.colors', 'red'],
    ['set', 'output.preset', 'verbose'],
    ['set', 'output.tables', 'sometimes'],
    ['set', 'output.sections.testStubs', 'everything'],
    ['set', 'output.sections.prdDelta', 'off'],
    ['set', 'output.sections.qaResults', 'issues-only'],
    ['set', 'output.sections.dispatch', 'table'],
    ['set', 'output.sections.screenshots', 'embed'],
    ['set', 'output.sections.unknownSection', 'full'],
    ['set', 'output.sections.coverage.deeper', 'full'],
    ['set', 'output.maxTableRows', '0'],
    ['set', 'output.maxTableRows', '--', '-3'],
    ['set', 'output.maxTableRows', '1.5'],
    ['set', 'output.maxTableRows', 'ten'],
    ['set', 'output.maxTableRows', '"8"'],
    ['set', 'output.maxTableRows', 'true'],
    ['set', 'output.maxTableRows', 'null'],
  ];
  for (const args of bad) refused(root, args);
});

test('TS-030 a whole output or sections object is validated entry by entry', () => {
  const root = project();
  const ok = run(root, 'config', 'set', 'output', '{"preset":"standard","sections":{"coverage":"full"}}');
  assert.equal(ok.status, 0, ok.stderr);
  assert.deepEqual(saved(root).output, { preset: 'standard', sections: { coverage: 'full' } });

  refused(root, ['set', 'output', '{"preset":"standard","sections":{"coverage":"huge"}}']);
  refused(root, ['set', 'output', '{"preset":"standard","tables":"sometimes"}']);
  refused(root, ['set', 'output', '{"preset":"standard","extra":1}']);
  refused(root, ['set', 'output.sections', '{"coverage":"full","qaResults":"nope"}']);
  refused(root, ['set', 'output.sections', '{"nothing":"full"}']);
  const good = run(root, 'config', 'set', 'output.sections', '{"coverage":"off","dispatch":"full"}');
  assert.equal(good.status, 0, good.stderr);
  assert.deepEqual(saved(root).output.sections, { coverage: 'off', dispatch: 'full' });
});

test('an unrelated hand-edited invalid value never blocks a valid write', () => {
  const root = project({ version: 1, output: { preset: 'verbose', maxTableRows: 0 } });
  const r = run(root, 'config', 'set', 'output.tables', 'always');
  assert.equal(r.status, 0, r.stderr);
  assert.equal(saved(root).output.tables, 'always');
  assert.equal(saved(root).output.preset, 'verbose');
});

test('TS-031 add under output is refused with exit 1 and the file untouched', () => {
  const root = project({ version: 1, output: { preset: 'standard' } });
  refused(root, ['add', 'output.sections.testStubs', 'full']);
  refused(root, ['add', 'output.preset', 'x']);
  refused(root, ['add', 'output', '"x"']);
});

test('TS-063 a non-object at output or output.sections is refused', () => {
  const root = project({ version: 1, output: { preset: 'standard' } });
  for (const target of ['output', 'output.sections']) {
    for (const v of ['5', '"text"', 'null', '[]']) refused(root, ['set', target, v], `${target} ${v}`);
  }
});

test('TS-064 an empty object at output or output.sections is accepted', () => {
  const root = project({ version: 1, output: { preset: 'standard' } });
  const a = run(root, 'config', 'set', 'output.sections', '{}');
  assert.equal(a.status, 0, a.stderr);
  assert.deepEqual(saved(root).output, { preset: 'standard', sections: {} });
  const b = run(root, 'config', 'set', 'output', '{}');
  assert.equal(b.status, 0, b.stderr);
  assert.deepEqual(saved(root).output, {});
});

test('TS-035 a preset alone resolves to its exact table', () => {
  for (const [name, expected] of [['compact', COMPACT], ['standard', STANDARD], ['detailed', DETAILED]]) {
    assert.deepEqual(effective(project({ version: 1, output: { preset: name } })), expected, name);
  }
});

test('TS-025 saved overrides beat the preset; the result shape is fixed; nothing is written', () => {
  const a = project({ version: 1, output: { preset: 'standard', maxTableRows: 5, sections: { coverage: 'full' } } });
  const before = bytes(a);
  assert.deepEqual(effective(a), {
    ...STANDARD,
    maxTableRows: 5,
    sections: { ...STANDARD.sections, coverage: 'full' },
  });
  assert.ok(Buffer.compare(before, bytes(a)) === 0);

  const b = project({ version: 1, output: { preset: 'detailed', maxTableRows: 5 } });
  assert.deepEqual(effective(b), { ...DETAILED, maxTableRows: 5 });

  const c = project({ version: 1, output: { preset: 'detailed' } });
  assert.deepEqual(effective(c), DETAILED);

  const d = project({ version: 1 });
  const out = effective(d);
  assert.deepEqual(out, COMPACT);
  assert.deepEqual(Object.keys(out).sort(), ['maxTableRows', 'preset', 'sections', 'tables', 'warnings']);
  assert.deepEqual(Object.keys(out.sections).sort(), ['coverage', 'dispatch', 'prdDelta', 'qaResults', 'screenshots', 'testStubs']);
});

test('TS-026 effective output works without .hele and without settings.json, writing nothing', () => {
  const bare = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-output-bare-')));
  const r1 = run(bare, 'config', 'effective', 'output');
  assert.equal(r1.status, 0, r1.stderr);
  assert.deepEqual(JSON.parse(r1.stdout), COMPACT);
  assert.deepEqual(fs.readdirSync(bare), []);

  const noSettings = project(null);
  const listing = fs.readdirSync(path.join(noSettings, '.hele')).sort();
  const r2 = run(noSettings, 'config', 'effective', 'output');
  assert.equal(r2.status, 0, r2.stderr);
  assert.deepEqual(JSON.parse(r2.stdout), COMPACT);
  assert.deepEqual(fs.readdirSync(path.join(noSettings, '.hele')).sort(), listing);
  assert.deepEqual(fs.readdirSync(noSettings), ['.hele']);
});

test('TS-053 a project without output resolves to compact', () => {
  assert.deepEqual(effective(project({ version: 1, qa: { maxScreenshots: 3 } })), COMPACT);
});

test('TS-032 invalid saved values fall back to the preset and warn per key', () => {
  const root = project({
    version: 1,
    output: { preset: 'standard', tables: 'sometimes', maxTableRows: 0, sections: { testStubs: 'everything' } },
  });
  const out = effective(root);
  assert.deepEqual({ ...out, warnings: undefined }, { ...STANDARD, warnings: undefined });
  assert.equal(out.warnings.length, 3);
  const byKey = Object.fromEntries(out.warnings.map((w) => [w.key, w]));
  assert.deepEqual(byKey['output.sections.testStubs'], { key: 'output.sections.testStubs', saved: 'everything', used: 'summary', reason: 'invalid' });
  assert.deepEqual(byKey['output.maxTableRows'], { key: 'output.maxTableRows', saved: 0, used: 15, reason: 'invalid' });
  assert.deepEqual(byKey['output.tables'], { key: 'output.tables', saved: 'sometimes', used: 'auto', reason: 'invalid' });
});

test('TS-033 an invalid preset resolves to compact; an unknown key is ignored with a warning', () => {
  const root = project({ version: 1, output: { preset: 'verbose', sections: { coverage: 'full' }, foo: 1 } });
  const out = effective(root);
  assert.deepEqual({ ...out, warnings: undefined }, {
    ...COMPACT,
    sections: { ...COMPACT.sections, coverage: 'full' },
    warnings: undefined,
  });
  assert.ok(!('foo' in out));
  assert.equal(out.warnings.length, 2);
  const byKey = Object.fromEntries(out.warnings.map((w) => [w.key, w]));
  assert.deepEqual(byKey['output.preset'], { key: 'output.preset', saved: 'verbose', used: 'compact', reason: 'invalid' });
  assert.deepEqual(byKey['output.foo'], { key: 'output.foo', saved: 1, used: null, reason: 'unknown' });
});

test('TS-064 resolution: empty sections and empty output raise no warning', () => {
  assert.deepEqual(effective(project({ version: 1, output: { preset: 'standard', sections: {} } })), STANDARD);
  assert.deepEqual(effective(project({ version: 1, output: {} })), COMPACT);
});

test('TS-065 resolution: a non-object at output.sections or output warns once and falls back', () => {
  const a = effective(project({ version: 1, output: { preset: 'detailed', sections: 'text' } }));
  assert.deepEqual({ ...a, warnings: undefined }, { ...DETAILED, warnings: undefined });
  assert.deepEqual(a.warnings, [{ key: 'output.sections', saved: 'text', used: 'detailed', reason: 'not-object' }]);

  const b = effective(project({ version: 1, output: 5 }));
  assert.deepEqual({ ...b, warnings: undefined }, { ...COMPACT, warnings: undefined });
  assert.deepEqual(b.warnings, [{ key: 'output', saved: 5, used: 'compact', reason: 'not-object' }]);
});

test('effective with no path or another path is a usage error (exit 2)', () => {
  const root = project();
  assert.equal(run(root, 'config', 'effective').status, 2);
  assert.equal(run(root, 'config', 'effective', 'agents').status, 2);
  assert.equal(run(root, 'config', 'effective', 'output.sections').status, 2);
});

test('TS-056 unset removes one saved key and keeps everything else, formatted like set', () => {
  const original = {
    version: 1,
    agents: { maxParallel: 4, models: { 'backend-cho': 'sonnet', 'design-vega': 'opus' } },
    output: { preset: 'standard', sections: { coverage: 'full', dispatch: 'full' } },
  };
  const root = project(original);
  const listing = fs.readdirSync(path.join(root, '.hele')).sort();

  const r1 = run(root, 'config', 'unset', 'output.sections.coverage');
  assert.equal(r1.status, 0, r1.stderr);
  assert.match(r1.stdout, /^OK: unset output\.sections\.coverage/);
  const expected1 = structuredClone(original);
  delete expected1.output.sections.coverage;
  assert.equal(fs.readFileSync(settingsFile(root), 'utf8'), JSON.stringify(expected1, null, 2) + '\n');

  const r2 = run(root, 'config', 'unset', 'agents.models.backend-cho');
  assert.equal(r2.status, 0, r2.stderr);
  delete expected1.agents.models['backend-cho'];
  assert.deepEqual(saved(root), expected1);
  assert.ok(fs.readFileSync(settingsFile(root), 'utf8').endsWith('}\n'));
  assert.deepEqual(fs.readdirSync(path.join(root, '.hele')).sort(), listing);
});

test('TS-057 unset on a path that is not saved exits 1; no path or no settings exits 2', () => {
  const root = project({ version: 1, output: { preset: 'standard' }, name: 'x', n: 3, z: null, list: [1] });
  for (const p of ['output.sections', 'output.sections.coverage', 'nope', 'name.deeper', 'n.deeper', 'z.deeper', 'list.0.deeper']) {
    refused(root, ['unset', p]);
  }
  assert.equal(run(root, 'config', 'unset').status, 2);
  const noSettings = project(null);
  assert.equal(run(noSettings, 'config', 'unset', 'output.preset').status, 2);
});

test('TS-058 unset needs no value validation and clears the warnings it caused', () => {
  const root = project({ version: 1, output: { preset: 'standard', maxTableRows: 0, foo: 1 } });
  assert.equal(effective(root).warnings.length, 2);
  assert.equal(run(root, 'config', 'unset', 'output.maxTableRows').status, 0);
  assert.equal(run(root, 'config', 'unset', 'output.foo').status, 0);
  assert.deepEqual(effective(root), STANDARD);
});

test('TS-059 unsetting hands the field back to the preset, then to compact', () => {
  const original = {
    version: 1,
    output: { preset: 'standard', tables: 'always', maxTableRows: 5, sections: { coverage: 'full' } },
  };
  const root = project(original);
  assert.equal(run(root, 'config', 'unset', 'output.sections.coverage').status, 0);
  assert.equal(effective(root).sections.coverage, STANDARD.sections.coverage);
  assert.equal(run(root, 'config', 'unset', 'output.tables').status, 0);
  assert.equal(effective(root).tables, STANDARD.tables);
  assert.equal(run(root, 'config', 'unset', 'output.maxTableRows').status, 0);
  assert.equal(effective(root).maxTableRows, STANDARD.maxTableRows);

  const withOverride = project({ version: 1, output: { preset: 'detailed', maxTableRows: 5, sections: { coverage: 'off' } } });
  assert.equal(run(withOverride, 'config', 'unset', 'output.preset').status, 0);
  assert.deepEqual(effective(withOverride), {
    ...COMPACT,
    maxTableRows: 5,
    sections: { ...COMPACT.sections, coverage: 'off' },
  });

  const whole = project(original);
  assert.equal(run(whole, 'config', 'unset', 'output').status, 0);
  assert.deepEqual(effective(whole), COMPACT);
});

test('BR-26: unset of an inherited key (toString, constructor) exits 1 and leaves the file byte-identical', () => {
  const root = project({ version: 1, output: { preset: 'standard' } });
  const file = path.join(root, '.hele', 'settings.json');
  const before = fs.readFileSync(file);
  for (const target of ['toString', 'constructor', 'output.toString', 'output.sections.constructor', 'output.__proto__']) {
    const r = run(root, 'config', 'unset', target);
    assert.equal(r.status, 1, target);
    assert.match(r.stderr, /path not found/, target);
    assert.deepEqual(fs.readFileSync(file), before, `${target}: file untouched`);
  }
});
