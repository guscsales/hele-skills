import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(rel) {
  return fs.readFileSync(new URL(rel, import.meta.url), 'utf8');
}

function block(text, tag) {
  const m = text.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  assert.ok(m, `missing <${tag}> block`);
  return m[1];
}

const init = read('../../skills/hele-init/SKILL.md');
function phase(name) {
  const m = init.match(new RegExp(`<phase name="${name}">([\\s\\S]*?)</phase>`));
  assert.ok(m, `missing phase ${name}`);
  return m[1];
}

describe('initialization saves only the output preset', () => {
  test('TS-054: plugin defaults carry only output.preset compact', () => {
    const cfg = JSON.parse(read('../../core/default-config.json'));
    assert.deepEqual(cfg.output, { preset: 'compact' });
  });

  test('TS-054: init states a new project gets only the compact preset', () => {
    const step1 = phase('2-create').split(/\n2\. /)[0];
    assert.match(step1, /output\.preset/);
    assert.match(step1, /`compact`/);
    assert.match(step1, /no section value, `tables` or `maxTableRows`/);
  });

  test('TS-055: reinitialization adds the preset only when missing and replaces nothing', () => {
    const migrate = phase('2-create').split(/\n3\. /)[1].split(/\n4\. /)[0];
    assert.match(migrate, /`output\.preset` is added only when `output\.preset` is missing/);
    assert.match(migrate, /also when `output` exists with other saved keys/);
    assert.match(migrate, /saved `output` value is never replaced/);
    for (const key of ['output.sections.*', 'output.tables', 'output.maxTableRows']) {
      assert.ok(migrate.includes(`\`${key}\``), `migration names ${key}`);
    }
    assert.match(migrate, /compact/);
    assert.match(migrate, /hele config set output\.preset detailed/);
  });

  test('TS-055: rules restate preset-only, only when missing', () => {
    const rules = block(init, 'rules');
    assert.match(rules, /`output\.preset`/);
    assert.match(rules, /only when missing/);
    assert.match(rules, /never writes `output\.sections`, `output\.tables` or `output\.maxTableRows`/);
  });
});
