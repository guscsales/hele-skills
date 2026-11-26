import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

// guided-delivery BR-18 (v1.3): investigate the code behind existing rules before the pack,
// ask only human-owned decisions, apply a late doubt that has a safe recommendation.

function read(rel) {
  return fs.readFileSync(new URL(`../../${rel}`, import.meta.url), 'utf8');
}

function section(text, startRe, endRe) {
  const m = startRe.exec(text);
  assert.ok(m, `section ${startRe} not found`);
  const rest = text.slice(m.index + m[0].length);
  const e = endRe.exec(rest);
  return rest.slice(0, e ? e.index : rest.length);
}

const reports = read('templates/chat-reports.md');
const pack = section(reports, /^## Question pack[^\n]*\n/m, /^## /m);
const conductor = read('skills/hele/SKILL.md');
const fast = read('skills/hele-fast/SKILL.md');
const feature = read('skills/hele-feature/SKILL.md');
const stubs = read('skills/hele-stubs/SKILL.md');
const direct = read('templates/direct-path.md');
const lisbon = read('agents/staff-lisbon.md');
const open = read('templates/open-channel.md');

describe('BR-18: investigate the code behind existing rules before the pack', () => {
  test('the Question pack dispatches a read-only specialist before the pack for a change to existing rules', () => {
    assert.match(pack, /read-only/i);
    assert.match(pack, /code behind those rules/i);
    assert.match(pack, /existing proof/i);
    assert.match(pack, /before the pack/i);
    assert.match(pack, /one pack from (its|the) (findings|report)/i);
  });

  test('no dispatch when the PRD and the human words already settle everything', () => {
    assert.match(pack, /no dispatch when the (PRD|product description)[^\n]*settle/i);
  });

  test('the conductor, Fast, Feature and the direct path carry the same read-before-pack rule', () => {
    for (const [name, t] of Object.entries({ conductor, fast, feature, direct })) {
      assert.match(t, /read-only/i, name);
      assert.match(t, /code behind (those|the changed) rules/i, name);
    }
  });

  test('Lisbon still never explores the code in the main session', () => {
    assert.match(conductor, /Do not explore the product codebase here/);
    assert.match(open, /code behind those rules/i);
    assert.match(open, /Main session must not:[\s\S]*Explore or read the product codebase/);
  });

  test('the adjust phase investigates the code before its pack', () => {
    const adjust = conductor.slice(conductor.indexOf('3. **PRD phase.**'));
    assert.match(adjust.split('\n')[0], /read-only|code behind/i);
  });
});

describe('BR-18: only human-owned decisions become questions', () => {
  test('the filter names the four non-questions and where they go', () => {
    assert.match(pack, /human-owned/i);
    assert.match(pack, /engineering default/i);
    assert.match(pack, /bookkeeping/i);
    assert.match(pack, /increment/i);
    assert.match(pack, /rule numbering/i);
    assert.match(pack, /fact an existing rule already states/i);
    assert.match(pack, /already answered (in|this) (this )?session/i);
    assert.match(pack, /Decided without a question/);
  });

  test('every lane skill and Lisbon restate the filter', () => {
    for (const [name, t] of Object.entries({ conductor, fast, feature, lisbon })) {
      assert.match(t, /human-owned|engineering default/i, name);
      assert.match(t, /Decided without a question|decided without a question/, name);
    }
  });

  test('Lisbon never asks what the filter excludes', () => {
    const never = section(lisbon, /<never>\n/, /<\/never>/);
    assert.match(never, /engineering default/i);
    assert.match(never, /bookkeeping/i);
  });
});

describe('BR-18: a late doubt rides on the approval stop when it has a safe recommendation', () => {
  test('the old "late questions are allowed" text is gone everywhere', () => {
    for (const [name, t] of Object.entries({ reports, conductor, feature, lisbon })) {
      assert.doesNotMatch(t, /Late questions are allowed/i, name);
      assert.doesNotMatch(t, /\*\*Late questions:?\*\*/, name);
      assert.doesNotMatch(t, /Late doubts that could not have been in the pack are allowed/i, name);
    }
  });

  test('a safe recommendation is applied and marked decided by Lisbon; only otherwise a smaller pack', () => {
    for (const [name, t] of Object.entries({ pack, feature })) {
      const line = t.split('\n').find((l) => /Late doubts/.test(l));
      assert.ok(line, `${name}: Late doubts paragraph`);
      assert.match(line, /safe recommendation/i, name);
      assert.match(line, /decided by Lisbon/i, name);
      assert.match(line, /smaller pack/i, name);
    }
  });

  test('Wylie returns a safe-recommendation doubt as a decision, not a question', () => {
    assert.match(stubs, /safe recommendation/i);
    assert.match(stubs, /decided without a question/i);
    assert.match(stubs, /no safe recommendation/i);
  });

  test('TS-047: the engineer on the direct path reports such a doubt as decided without a question, and stops only without a safe recommendation', () => {
    // slice at the real block: `<worker>` alone also matches a backticked mention in the conductor
    const start = direct.search(/^<worker>$/m);
    assert.ok(start >= 0, 'worker block');
    const worker = direct.slice(start, direct.search(/^<\/worker>$/m));
    assert.match(worker, /safe recommendation/i);
    assert.match(worker, /decided without a question/i);
    assert.match(worker, /no safe recommendation/i);
  });
});

describe('BR-18: the approval report and the direct close show a Decided without a question bucket', () => {
  test('the PRD + stubs and Direct close checklist rows name it', () => {
    const rows = reports.split('\n');
    for (const stop of ['| PRD + stubs |', '| Direct close |']) {
      const row = rows.find((l) => l.startsWith(stop));
      assert.match(row, /Decided without a question/, stop);
    }
  });

  test('it is always visible and never cut by output verbosity', () => {
    const out = section(reports, /^## Output\n/m, /^## /m);
    const always = out.split('\n').find((l) => l.startsWith('- **Always visible.**'));
    assert.match(always, /decisions taken without a question/i);
  });

  test('the Direct close shape has the row and the approval stop has the block', () => {
    const close = section(reports, /^## Direct close\n/m, /^## /m);
    assert.match(close, /\| Decided without a question \|/);
    assert.match(reports, /^## Decided without a question/m);
    assert.match(fast, /Decided without a question/);
    assert.match(feature, /decisions? taken without a question|Decided without a question/);
  });
});

describe('BR-18: pack shape and the Decided without a question block (TS-030, TS-069, TS-071, TS-072)', () => {
  const decided = section(reports, /^## Decided without a question\n/m, /^## /m);

  test('TS-069: when only decided points remain there is no pack and the gate invents no question', () => {
    assert.match(pack, /If those sources already decide every rule, skip this stop and write/);
    assert.match(pack, /Do not invent a question to satisfy the gate/);
    assert.match(pack, /Every remaining human-owned question/);
  });

  test('TS-071: changing a decision at the approval stop patches the PRD and stubs again', () => {
    assert.match(decided, /at the approval stop[^\n]*the PRD and stubs are patched again/);
  });

  test('TS-072: a decision can be changed on the direct path at the close, option 4', () => {
    assert.match(decided, /on the direct path at the close \(option 4\)/);
    const close = section(reports, /^## Direct close\n/m, /^## /m);
    assert.match(close, /\| 4 \| [^\n]*More to change/);
  });

  test('TS-030: the pack offers accept all, one by one and own words, and anticipates edge cases', () => {
    assert.match(pack, /\| 1 \| [^\n]*Accept all recommendations/);
    assert.match(pack, /\| 2 \| [^\n]*Answer one by one/);
    assert.match(pack, /\| 3 \| [^\n]*reply in my own words/);
    assert.match(pack, /Anticipate the edge cases of each recommendation/);
  });
});
