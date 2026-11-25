import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(rel) {
  return fs.readFileSync(new URL(rel, import.meta.url), 'utf8');
}

const reports = read('../../templates/chat-reports.md');

// The text of one `## ` block: from its heading line to the next `## ` heading.
function block(headingPattern) {
  const lines = reports.split('\n');
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

const output = block(/^## Output$/);
const rules = reports.slice(reports.indexOf('<rules>'), reports.indexOf('</rules>'));
const checklist = reports.slice(reports.indexOf('## Per-stop checklist'), reports.indexOf('<rules>'));
const BOX = /[┌┐└┘│─├┤]/;

describe('chat output contract', () => {
  test('## Output sits right after ## Language, outside the canonical blocks (T3)', () => {
    const headings = reports.split('\n').filter((l) => /^## /.test(l));
    assert.equal(headings[headings.indexOf('## Language') + 1], '## Output');
    assert.ok(reports.indexOf('## Output') < reports.indexOf('<canonical-blocks>'));
  });

  test('TS-028/BR-19: resolution comes from the CLI, in a fixed order, one-off never saved', () => {
    assert.match(output, /config effective output/);
    assert.match(output, /once per session/i);
    assert.match(output, /current message[\s\S]*override[\s\S]*preset[\s\S]*plugin default/i);
    assert.match(output, /this response only/i);
    assert.match(output, /never saved unless the human asks/i);
    assert.match(output, /hele config set/);
    assert.match(output, /hele config unset/);
  });

  test('TS-028/BR-19: the file carries no preset value, row-limit number or private default', () => {
    assert.doesNotMatch(reports, /maxTableRows`?\s*(=|:|is|of)?\s*\d/);
    assert.doesNotMatch(output, /\b(8|15|30)\b/);
    assert.doesNotMatch(reports, /`(compact|standard|detailed)`[^\n]*`(summary|issues|brief|links|inline|off)`/);
    assert.doesNotMatch(reports, /`(summary|issues|brief|links|inline|off)`[^\n]*`(compact|standard|detailed)`/);
    assert.match(output, /never carry a default/i);
  });

  test('TS-034/TS-065: warnings name the key and the value used, once per session', () => {
    assert.match(output, /warnings/);
    assert.match(output, /naming each key/i);
    assert.match(output, /value (now )?used|value used/i);
    assert.match(output, /once per session[^\n]*not repeated|not repeated[^\n]*later reports/i);
  });

  test('TS-023/BR-18: output is chat presentation only', () => {
    assert.match(output, /documents, evidence, tests run, approval criteria, workflow stages and work state/i);
    assert.match(output, /same under every setting/i);
  });

  test('TS-024: chat and artifact language hold under every setting, summaries and omission lines included', () => {
    assert.match(output, /language\.chat/);
    assert.match(output, /language\.artifacts/);
    assert.match(output, /summaries, count lines and omission lines/i);
  });

  test('TS-047/TS-060/TS-061/TS-062: seven always-visible kinds, off included, never cut by the row limit', () => {
    for (const kind of [
      'failures',
      'blockers',
      'missing required coverage',
      'product questions',
      'required decisions',
      'workflow options and approvals',
      'steps of a verification walk',
    ]) {
      assert.ok(output.toLowerCase().includes(kind), `always-visible kind: ${kind}`);
    }
    assert.match(output, /`off` included/);
    assert.match(output, /whatever the current message asks/i);
    assert.match(output, /outside `maxTableRows`/);
    assert.match(output, /one line per item[^\n]*id and (its )?cause/i);
    assert.match(output, /less detail, never fewer items/i);
    assert.match(output, /cannot hide always-visible content/);
  });

  test('retired rules reach the Direct close, the Open these Moved cell and the localized labels', () => {
    assert.match(reports, /\(New \/ Rewritten \/ Already the rule \/ Retired\)/);
    assert.match(reports, /PRD delta block \(prdDelta\) above/);
    assert.match(reports, /`new BR-4 · rewritten BR-1 · retired BR-3`/);
    assert.match(reports, /render `new`, `rewritten` and `retired` in the chat language/);
    assert.match(reports, /section labels \(`New`, `Rewritten`, `Already the rule`, `Retired`\)/);
    assert.match(output, /show-all request lifts the row limit for that response/i);
    assert.doesNotMatch(output, /\b(8|15|30)\b/);
  });

  test('TS-038/TS-046/TS-050: the omission line has a count, a link and a show-all request, and never implies completeness', () => {
    assert.match(
      output,
      /<shown> of <total> shown · <omitted> more in \[<document>\]\(<absolute path>\) or ask "show all <thing>"/,
    );
    assert.match(output, /[Nn]ever imply a limited list is complete/);
    assert.match(output, /`maxTableRows` limits informational lists, `full` levels included/);
  });

  test('TS-051: questions and approvals are paginated or grouped, and the stop does not proceed while any is unseen', () => {
    assert.match(output, /questions <from>–<to> of <total>/);
    assert.match(output, /group or paginate/i);
    assert.match(output, /does not proceed as answered or approved while any is unseen/i);
    assert.match(block(/^## Question pack/), /paginated or grouped, never cut/i);
  });

  test('TS-052/guided-delivery TS-066: expansion only re-presents, for that response', () => {
    assert.match(output, /"show all TS"/);
    assert.match(output, /"expand TS-014"/);
    assert.match(output, /"show the full QA report"/);
    for (const forbidden of [
      /no phase restart/i,
      /no test rerun/i,
      /no approval change/i,
      /no work-state change/i,
      /no settings change/i,
    ]) {
      assert.match(output, forbidden);
    }
    assert.match(output, /next report returns to the effective output/i);
  });

  test('TS-045: tables auto/always are defined and box-drawing is forbidden', () => {
    assert.match(output, /`auto`/);
    assert.match(output, /`always`/);
    assert.doesNotMatch(rules, /Tables, never lines/);
    assert.match(rules, /\*\*Never box-drawing\.\*\*/);
    assert.match(rules, /`output\.tables`/);
    assert.match(rules, /\*\*One item per table row\.\*\*/);
    assert.doesNotMatch(reports, BOX, 'no box-drawing characters anywhere in the file');
    const canonical = reports.slice(reports.indexOf('<canonical-blocks>'));
    for (const heading of canonical.split('\n').filter((l) => /^## /.test(l))) {
      const text = block(new RegExp(`^${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`));
      assert.doesNotMatch(text, BOX, heading);
    }
  });

  test('TS-049/TS-036: an omitted detail is not missing evidence, and the document stays linked', () => {
    assert.match(output, /omitted detail is not missing evidence/i);
    assert.match(output, /complete document stays linked/i);
  });

  test('TS-037/TS-038: Scenarios (testStubs) has off, summary and full; Stubs in full is gone', () => {
    assert.doesNotMatch(reports, /## Stubs in full/);
    const text = block(/^## Scenarios \(testStubs\)$/);
    assert.match(text, /`off`/);
    assert.match(text, /`summary`[^\n]*feature's total[^\n]*new[^\n]*revised[^\n]*retired[^\n]*link/i);
    assert.match(text, /`full`[^\n]*scenario table[^\n]*row limit[^\n]*omission line/i);
    assert.match(text, /TEST_STUBS\.md/);
    assert.match(text, /\| Stub \| Kind \| Rule \| Given \| When \| Then \|/);
  });

  test('TS-039/TS-061: Coverage recommendations (coverage) levels, missing required items at every level', () => {
    const text = block(/^## Coverage recommendations \(coverage\)$/);
    assert.match(text, /`off`/);
    assert.match(text, /`summary`[^\n]*counts by level and by owner[^\n]*one line per missing required/i);
    assert.match(text, /`full`[^\n]*row limit[^\n]*every missing required item regardless of the limit/i);
    assert.match(text, /\| Stubs \| Level \| Owner \|/);
  });

  test('TS-040/guided-delivery TS-032/TS-065: PRD delta (prdDelta) summary and full, with a Retired bucket', () => {
    const text = block(/^## PRD delta \(prdDelta\)$/);
    assert.match(text, /`summary`[^\n]*id[^\n]*title[^\n]*one sentence/i);
    assert.match(text, /`full`[^\n]*previous and new wording/i);
    assert.match(text, /Retired/);
    assert.match(text, /Already the rule/);
    assert.match(text, /\| Rule \| Was \| Now \|/);
    assert.match(checklist, /PRD delta \(prdDelta\)/);
    assert.match(checklist, /Scenarios \(testStubs\)/);
    assert.match(checklist, /Coverage \(coverage\)/);
    assert.match(checklist, /always-visible items/);
    assert.match(checklist, /Files \(links\)/);
    assert.match(checklist, /Open these/);
    assert.match(checklist, /Options/);
    assert.match(rules, /only when the PRD delta was printed at `full`/);
  });

  test('TS-041/TS-042/TS-060: Test results (qaResults) three levels, issues never limited, QA_REPORT.md linked', () => {
    const text = block(/^## Test results \(qaResults\)$/);
    assert.match(text, /`summary`/);
    assert.match(text, /`issues`/);
    assert.match(text, /`full`/);
    assert.match(text, /issues (are )?never limited/i);
    assert.match(text, /[Ee]very level links \[?QA_REPORT\.md/);
    assert.match(text, /\| Stub \| Rule \| Result \| Level \| Evidence \|/);
  });

  test('TS-043: Dispatch announcement (dispatch) brief line and full table, both end the turn', () => {
    const text = block(/^## Dispatch announcement \(dispatch\)$/);
    assert.match(text, /🏗️ \[AGENT\] Lisbon · opus · plan increment 002-coupon-stacking/);
    assert.match(text, /\| Dispatch \| Agent \| Model \| Work \|/);
    assert.match(text, /Dispatch closer/);
    assert.match(text, /\*\*End the turn\.\*\*/);
    assert.match(text, /Model rule/);
    assert.match(checklist, /Dispatch announcement \(dispatch\)/);
  });

  test('TS-044: Shots (screenshots) three values, independent of qa.maxScreenshots', () => {
    const text = block(/^## Shots \(screenshots\)$/);
    assert.match(text, /`off`/);
    assert.match(text, /`links`/);
    assert.match(text, /`inline`/);
    assert.match(text, /`qa\.maxScreenshots`/);
    assert.match(text, /presentation only/i);
  });

  test('TS-048: Options keep every choice and a verification walk keeps every step', () => {
    const options = block(/^## Options table$/);
    assert.match(options, /every choice/i);
    assert.match(options, /meaning/i);
    const verify = block(/^## Manual verify — one flow$/);
    assert.match(verify, /every step row is shown under every setting/i);
    assert.match(checklist, /Verify — each flow \| Open table · Data table · Steps table/);
  });

  test('TS-046: E2E audit (chat) has diagnosis, leading recommendations within the row limit, omission line and link', () => {
    const text = block(/^## E2E audit \(chat\)$/);
    assert.match(text, /Report frame/);
    assert.match(text, /diagnosis/i);
    assert.match(text, /leading recommendations/i);
    assert.match(text, /row limit/i);
    assert.match(text, /omission line/i);
    assert.match(text, /E2E_AUDIT\.md/);
    assert.match(text, /only the audit report was written/i);
    assert.match(checklist, /\| E2E audit \|/);
    assert.match(checklist, /\| Absorb — written \|/);
  });

  test('per-stop checklist names blocks and points levels at ## Output', () => {
    assert.match(checklist, /names blocks[^\n]*`## Output`/);
    assert.match(checklist, /Test results \(qaResults\)/);
    assert.match(checklist, /Shots \(screenshots\)/);
    assert.doesNotMatch(checklist, /Stubs in full/);
  });

  test('language section keeps the shape the effective output chose', () => {
    const language = block(/^## Language$/);
    assert.doesNotMatch(language, /Do not collapse a table into a paragraph/);
    assert.match(language, /never changes the shape the effective output chose/i);
  });
});
