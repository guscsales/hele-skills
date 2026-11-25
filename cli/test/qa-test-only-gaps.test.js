import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(rel) {
  return fs.readFileSync(new URL(`../../${rel}`, import.meta.url), 'utf8');
}

// The text of one `<phase name="...">` element of a skill.
function phase(text, name) {
  const open = text.indexOf(`<phase name="${name}">`);
  assert.ok(open >= 0, `phase ${name} not found`);
  return text.slice(open, text.indexOf('</phase>', open));
}

describe('behavior-validation BR-21: QA closes test-only gaps without a stop', () => {
  const qa = read('skills/hele-qa/SKILL.md');
  const run = phase(qa, '3-run-and-record');
  const route = phase(qa, '4-report-and-route');
  const wylie = read('agents/qa-wylie.md');

  test('Wylie closes a test-only coverage-gap or test-defect in the same run, engineer suites included, running only that file', () => {
    assert.match(run, /test-only/i);
    assert.match(run, /coverage-gap/);
    assert.match(run, /test-defect/);
    assert.match(run, /engineer-owned suites?/i);
    assert.match(run, /only that test file/i);
    assert.match(run, /no product code/i);
  });

  test('a new assertion that fails on current code becomes a product-bug routed to its engineer', () => {
    assert.match(run, /fails? (on|against) current code[^.]*product-bug/i);
  });

  test('the report lists closed gaps with test and result, and offers no approval for them', () => {
    assert.match(route, /gaps? closed/i);
    assert.match(route, /no (approval )?option|never (adds?|offers?)/i);
  });

  test('option 3 is only for product bugs or failures that need product code; option 4 stays for contract questions', () => {
    const opt3 = route.split('\n').find((l) => /^\| 3 \|/.test(l));
    assert.ok(opt3, 'option 3 row missing');
    assert.doesNotMatch(opt3, /coverage gaps/i);
    assert.match(route, /product code/i);
    assert.match(route, /\| 4 \|[^\n]*contract-questions/);
    assert.match(route, /Blocked stubs/);
  });

  test('Wylie may add or correct assertions in engineer suites (test files only) and never touches product code', () => {
    assert.doesNotMatch(wylie, /engineer-suite gaps to Lisbon/i);
    assert.match(wylie, /engineer suites?[^.]*test files? only/i);
    assert.match(wylie, /never product code/i);
  });
});

describe('behavior-validation BR-22: scenario coverage is checked before QA', () => {
  const build = read('skills/hele-build/SKILL.md');
  const verify = phase(build, '2-verify');
  const loop = phase(build, '1-dispatch-loop');
  const text = `${loop}\n${verify}`;

  test('Lisbon compares returned TS IDs and assertions with the required stubs, as a list comparison', () => {
    assert.match(text, /required stubs?/i);
    assert.match(text, /list comparison/i);
    assert.match(text, /no test run/i);
  });

  test('a missing stub goes back to its owning engineer alone before QA; QA starts on assertion or recorded reason', () => {
    assert.match(text, /only that stub/i);
    assert.match(text, /recorded reason/i);
  });
});

describe('the QA stop surfaces match the rule', () => {
  const reports = read('templates/chat-reports.md');
  const qaReport = read('templates/qa-report.md');
  const hele = read('skills/hele/SKILL.md');
  const docs = read('.docs/skills.md');

  test('chat-reports shows closed gaps one line each and drops the coverage-gap approval row', () => {
    assert.match(reports, /gaps? closed/i);
    assert.doesNotMatch(reports, /approve fixes for failures or coverage gaps/i);
  });

  test('qa-report template has a closed-gaps place', () => {
    assert.match(qaReport, /closed/i);
  });

  test('conductor and docs no longer say coverage gaps offer the fix round', () => {
    assert.doesNotMatch(hele, /Failures or coverage gaps offer/i);
    assert.doesNotMatch(docs, /failures and coverage gaps offer a fix round/i);
  });
});

describe('flow diagram and README stay identical and do not send gaps through the fix loop', () => {
  const diagram = read('cli/src/flow-diagram.js');
  const readme = read('README.md');

  test('the diagram no longer routes gaps to engineers or fix gaps/bugs', () => {
    assert.doesNotMatch(diagram, /continue or fix gaps\/bugs/);
    assert.doesNotMatch(diagram, /gaps → owning engineer/);
  });

  test('README carries the same two lines', () => {
    assert.doesNotMatch(readme, /continue or fix gaps\/bugs/);
    assert.doesNotMatch(readme, /gaps → owning engineer/);
  });
});
