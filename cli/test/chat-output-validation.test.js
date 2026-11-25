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
  const close = text.indexOf('</phase>', open);
  return text.slice(open, close);
}

// The text of one `## ` block: from its heading line to the next `## ` heading.
function block(text, headingPattern) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => /^## /.test(l) && headingPattern.test(l));
  assert.ok(start >= 0, `block ${headingPattern} not found`);
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^## /.test(lines[i])) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join('\n');
}

// The text of one line that matches.
function line(text, pattern) {
  const found = text.split('\n').find((l) => pattern.test(l));
  assert.ok(found, `no line matches ${pattern}`);
  return found;
}

const qa = read('skills/hele-qa/SKILL.md');
const verify = read('skills/hele-verify-work/SKILL.md');
const absorb = read('skills/hele-absorb/SKILL.md');
const fixE2e = read('skills/hele-fix-e2e/SKILL.md');
const wylie = read('agents/qa-wylie.md');
const absorbReport = read('templates/absorb-report.md');
const written = block(absorbReport, /^## Written$/);
const report = phase(qa, '4-report-and-route');
const run = phase(qa, '3-run-and-record');
const walk = phase(verify, '2-guided-walk');
const BOX = /[┌┐└┘│─├┤]/;

describe('validation reports follow the effective output', () => {
  test('TS-028 / TS-026: every validation report reads the effective output', () => {
    for (const [name, text] of [
      ['hele-qa', qa],
      ['hele-verify-work', verify],
      ['hele-absorb', absorb],
      ['hele-fix-e2e', fixE2e],
    ]) {
      assert.match(text, /config effective output/, `${name} reads the effective output`);
      assert.match(text, /## Output/, `${name} points at ## Output`);
    }
  });

  test('TS-041 / TS-042 / TS-060 / TS-062: QA presents Test results at the effective qaResults level, issues always shown', () => {
    assert.match(report, /## Test results \(qaResults\)/);
    assert.match(report, /`qaResults`/);
    assert.doesNotMatch(report, /^2\. Test results table/m);
    const rule = line(report, /always shown/i);
    for (const issue of ['failures', 'coverage gaps', 'blockers', 'pending decisions']) {
      assert.match(rule, new RegExp(issue, 'i'), `the always-shown rule names ${issue}`);
    }
    assert.match(rule, /one line each/i);
    assert.match(rule, /id and (the )?cause/i);
    assert.match(rule, /outside the row limit|never cut by the row limit|never limited by the row limit/i);
    assert.match(rule, /request[^.\n]*hide/i);
    assert.match(rule, /never fewer items/i);
    assert.match(report, /\[QA_REPORT\.md\]|QA_REPORT\.md is a markdown link|QA_REPORT\.md[^.\n]*link/i);
  });

  test('TS-044: the Shots level is presentation only and qa.maxScreenshots stays the retention ceiling', () => {
    assert.match(report, /## Shots \(screenshots\)/);
    assert.match(report, /`screenshots`/);
    const step7 = line(run, /^7\./);
    assert.match(step7, /qa\.maxScreenshots/);
    assert.match(step7, /retention ceiling|ceiling/i);
    assert.match(run, /chat level never changes what is captured or kept/i);
  });

  test('TS-049 / TS-023: QA_REPORT.md is written complete at every setting and an omitted detail stays linked', () => {
    assert.match(qa, /QA_REPORT\.md[^.\n]*complete[^.\n]*(every|any|under every) (setting|level|output)/i);
    assert.match(qa, /omitted detail[^.\n]*(not missing evidence|stays linked|linked)/i);
    assert.match(qa, /## Output/);
  });

  test('TS-048: the verification walk keeps every Open, Data and Steps row and every option under every setting', () => {
    assert.match(walk, /every Open, Data and Steps row/i);
    assert.match(walk, /under every setting/i);
    assert.match(walk, /Proof[^.\n]*`screenshots`/);
    const close = phase(verify, '3-report');
    assert.match(close, /every option|every choice/i);
    assert.match(verify, /## Output/);
    // the three menus keep every row
    for (const row of ['| 1 | ✅ Pass — mark verified |', '| 2 | ❌ Issue — tell me what\'s wrong |', '| 3 | ⏭️ Skip this flow |']) {
      assert.ok(walk.includes(row), `walk keeps ${row}`);
    }
    for (const n of ['| 1 | 🚀 Work done', '| 2 | 📝 Work done', '| 3 | ✅ Work done', '| 4 | ✏️ Fix something']) {
      assert.ok(close.includes(n), `close keeps ${n}`);
    }
  });

  test('TS-046: the E2E audit presents the E2E audit (chat) block under the row limit and keeps the inventory in the report', () => {
    assert.match(fixE2e, /## E2E audit \(chat\)/);
    assert.match(fixE2e, /row limit/i);
    assert.match(fixE2e, /omission line/i);
    assert.match(fixE2e, /E2E_AUDIT\.md[^.\n]*(full inventory|inventory)|full inventory[^.\n]*E2E_AUDIT\.md|inventory and (the )?rationale/i);
    assert.match(fixE2e, /without `?\.hele\/`?|no `?\.hele\/`?|`\.hele\/` (is )?(missing|absent)/i);
    assert.match(fixE2e, /plugin defaults|defaults/i);
  });

  test('product-absorption TS-026 / TS-028 / TS-029: the Written report counts everything, lists gaps outside the row limit and limits the Files table', () => {
    for (const w of ['Features', 'Increments', 'Stubs', 'QA']) {
      assert.match(written, new RegExp(`\\| ${w} \\|`), `Written keeps the ${w} count`);
    }
    assert.match(written, /gaps\/blocked/);
    assert.match(written, /Evidence|evidenced/i);
    assert.match(written, /effective row limit/i);
    assert.match(written, /omission line/i);
    assert.match(written, /<shown> of <total> shown/);
    assert.match(written, /index\.json/);
    assert.match(written, /gaps? and blocked|gaps\/blocked/i);
    assert.match(written, /one line each/i);
    assert.match(written, /id and cause/i);
    assert.match(written, /outside the row limit|never cut/i);
    assert.match(written, /## Output/);
    // the RULES comment of the template says it too
    const rules = absorbReport.slice(0, absorbReport.indexOf('-->'));
    assert.match(rules, /row limit/i);
    assert.match(rules, /gaps|blocked/i);
    // Snapshot approval rows are never cut
    const snapshot = block(absorbReport, /^## Snapshot$/);
    assert.match(rules + snapshot, /(approv\w+|increment rows?)[^.\n]*(paginat|never cut)|(paginat|never cut)[^.\n]*approv/i);
    // TS-026: the skill closes the write epic only when the index and QA beads are closed, and never marks unproven behavior passing
    assert.match(absorb, /When the index bead and every QA bead are closed, close the write epic and run phase 7\./);
    assert.match(absorb, /do not [^.\n]*mark unproven behavior passing/i);
  });

  test('hele-absorb names the Dispatch announcement and no longer says "Dispatch table" or an unlimited "One file per row"', () => {
    assert.match(absorb, /Dispatch announcement/);
    assert.doesNotMatch(absorb, /Dispatch table/);
    assert.doesNotMatch(absorb, /One file per row\./);
    const closing = line(absorb, /Print the \*\*Written\*\* section/);
    assert.match(closing, /row limit/i);
    assert.match(closing, /gaps? (and|or) blocked/i);
  });

  test('qa-wylie returns complete rows to the parent and presents Test results and Shots at the effective output', () => {
    assert.doesNotMatch(wylie, /full scenarios and Coverage recommendations/);
    const stubs = line(wylie, /^\*\*STUBS:\*\*/);
    assert.match(stubs, /complete (scenario )?rows/i);
    assert.match(stubs, /counts/i);
    assert.match(stubs, /parent/i);
    const qaRun = line(wylie, /^\*\*QA RUN:\*\*/);
    assert.match(qaRun, /effective output/i);
    assert.match(qaRun, /Test results/);
    assert.match(qaRun, /Shots/);
    assert.match(qaRun, /(failures|issues)[^.\n]*always/i);
    assert.match(wylie, /## Output/);
  });

  test('no consumer restates a preset, a level default or a row-limit number', () => {
    for (const [name, text] of [
      ['hele-qa', qa],
      ['hele-verify-work', verify],
      ['hele-absorb', absorb],
      ['hele-fix-e2e', fixE2e],
      ['qa-wylie', wylie],
      ['absorb-report', absorbReport],
    ]) {
      assert.doesNotMatch(text, /maxTableRows\W{0,4}\d/, `${name}: no row-limit number`);
      assert.doesNotMatch(
        text,
        /`(compact|standard|detailed)`[^\n]*`(summary|issues|brief|links|inline|off)`/,
        `${name}: no preset paired with a section value`,
      );
      assert.doesNotMatch(text, /row limit (of|is) \d+|\d+ rows? (limit|max)/i, `${name}: no row-limit number`);
    }
  });

  test('no new box-drawing frames in the edited reports', () => {
    for (const [name, text] of [
      ['hele-qa', report],
      ['hele-verify-work', walk],
      ['hele-fix-e2e', fixE2e],
      ['absorb-report', written],
    ]) {
      assert.doesNotMatch(text, BOX, `${name} has no box-drawing`);
    }
  });

  test('artifact templates describe files, not chat: no output reference', () => {
    for (const rel of ['templates/qa-report.md', 'templates/verify.md', 'templates/e2e-audit.md']) {
      assert.doesNotMatch(read(rel), /\boutput\./, `${rel} has no output. reference`);
      assert.doesNotMatch(read(rel), /effective output/, `${rel} does not read the effective output`);
    }
  });
});
