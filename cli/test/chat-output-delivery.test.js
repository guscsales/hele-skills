import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(rel) {
  return fs.readFileSync(new URL(`../../${rel}`, import.meta.url), 'utf8');
}

const OUTPUT_REF = /config effective output|chat-reports\.md[^\n]*Output/;

describe('delivery spine follows the effective output', () => {
  test('TS-028: spine skills and dispatch contracts read the effective output, not a fixed shape', () => {
    for (const rel of [
      'skills/hele/SKILL.md',
      'skills/hele-feature/SKILL.md',
      'skills/hele-fast/SKILL.md',
      'skills/hele-build/SKILL.md',
      'templates/open-channel.md',
      'templates/direct-path.md',
    ]) {
      const text = read(rel);
      assert.match(text, OUTPUT_REF, `${rel} points at the effective output`);
      assert.doesNotMatch(text, /stubs in full/i, `${rel} has no fixed "stubs in full"`);
      assert.doesNotMatch(text, /Tables, never/, `${rel} has no fixed "Tables, never"`);
    }
  });

  test('TS-043: open-channel names the Dispatch announcement and keeps the turn rules', () => {
    const text = read('templates/open-channel.md');
    assert.match(text, /Dispatch announcement/);
    assert.match(text, /output\.sections\.dispatch/);
    assert.match(text, /`Thread is opened, you can talk`/);
    assert.match(text, /`A thread continua aberta, pode falar\.`/);
    assert.match(text, /Any other chat language: one sentence with that meaning\./);
    assert.match(text, /\*\*END THE TURN\.\*\*/);
    assert.match(text, /Never "fio"\./);
  });

  test('TS-043: no dispatch contract still says "Dispatch table"', () => {
    for (const rel of [
      'templates/open-channel.md',
      'templates/direct-path.md',
      'templates/build-until-pass.md',
      'skills/hele/SKILL.md',
      'skills/hele-fast/SKILL.md',
      'skills/hele-tweak/SKILL.md',
    ]) {
      assert.doesNotMatch(read(rel), /Dispatch table/, `${rel} says Dispatch table`);
    }
    for (const rel of [
      'templates/direct-path.md',
      'templates/build-until-pass.md',
      'skills/hele/SKILL.md',
      'skills/hele-fast/SKILL.md',
      'skills/hele-tweak/SKILL.md',
    ]) {
      assert.match(read(rel), /Dispatch announcement/, `${rel} names the Dispatch announcement`);
    }
  });

  test('every spine consumer names the model in the dispatch it announces (brief keeps it)', () => {
    assert.match(read('skills/hele-build/SKILL.md'), /Show the chosen model in the dispatch/);
    assert.match(read('templates/direct-path.md'), /model[^\n]*settings\.agents\.models/);
    assert.match(read('templates/build-until-pass.md'), /settings\.agents\.models/);
    assert.match(read('skills/hele-tweak/SKILL.md'), /settings\.agents\.models/);
  });

  test('session rule is the exact concatenation of sticky-lanes.md and open-channel.md', () => {
    const generated = read('templates/sticky-lanes.md') + read('templates/open-channel.md');
    assert.equal(read('.claude/rules/hele-session.md'), generated);
  });

  test('TS-027, TS-052: /hele applies a request once, saves only on ask, and expansion only re-presents', () => {
    const text = read('skills/hele/SKILL.md');
    assert.match(text, /config effective output/);
    assert.match(text, /once per session[^\n]*before the first report/i);
    assert.match(text, /this response only/i);
    assert.match(text, /hele config set/);
    assert.match(text, /only when the human asks/i);
    assert.match(text, /show all TS/);
    assert.match(text, /expand TS-014/);
    assert.match(text, /show the full QA report/);
    assert.match(text, /no phase restart[^\n]*no (test )?rerun[^\n]*no approval[^\n]*work.state[^\n]*settings/i);
  });

  test('TS-032, TS-065, TS-066: feature and fast approval stops show the decision content at every level', () => {
    for (const rel of ['skills/hele-feature/SKILL.md', 'skills/hele-fast/SKILL.md']) {
      const text = read(rel);
      assert.match(text, /PRD delta, Scenarios and Coverage at the effective output/, rel);
      assert.match(text, /## Output/, rel);
      assert.match(text, /every new, rewritten and retired rule with its behavior change/, rel);
      assert.match(text, /every product question/, rel);
      assert.match(text, /required decision/, rel);
      assert.match(text, /approval option/, rel);
      assert.match(text, /links to the complete PRD and TEST_STUBS/, rel);
      assert.match(text, /at every level/i, rel);
      assert.match(text, /expansion request keeps the approval pending with the same options/, rel);
    }
    // TS-032: the question gate invents nothing, a late doubt with a safe recommendation is applied, otherwise a smaller pack, no Open questions section, no solutioning in the PRD
    const feature = read('skills/hele-feature/SKILL.md');
    assert.match(feature, /Do not invent a question to satisfy this gate\./);
    assert.match(feature, /\*{0,2}Late doubts:?\*{0,2}[^\n]*smaller pack/);
    assert.match(feature, /There is no Open questions section\./);
    assert.match(feature, /Lisbon does not put technical solutioning in the PRD\./);
  });

  test('TS-037, TS-038: the stubs handoff carries complete rows, the counts and Coverage rows', () => {
    const text = read('skills/hele-stubs/SKILL.md');
    assert.match(text, /complete stub rows/);
    assert.match(text, /feature total, new, revised and retired/);
    assert.match(text, /Coverage rows/);
    assert.match(text, /the parent decides what chat shows/i);
    // direct-path sentence asserted elsewhere stays
    assert.match(text, /direct path/i);
  });

  test('TS-045: personas keep the box-drawing ban and no longer force tables', () => {
    for (const rel of ['agents/staff-lisbon.md', 'agents/dba-hightower.md', 'agents/design-vega.md']) {
      const text = read(rel);
      assert.doesNotMatch(text, /Tables, never/, rel);
      assert.doesNotMatch(text, /Structured sections are markdown tables/, rel);
      assert.match(text, /never box-drawing/i, rel);
      assert.match(text, /output\.tables/, rel);
    }
    assert.match(read('agents/staff-lisbon.md'), /PRD delta, Scenarios and Coverage at the effective output/);
    assert.match(read('agents/dba-hightower.md'), /approval[^\n]*always shown in full/i);
  });
});
