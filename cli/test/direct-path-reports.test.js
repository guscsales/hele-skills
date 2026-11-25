import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(rel) {
  return fs.readFileSync(new URL(rel, import.meta.url), 'utf8');
}

const reports = read('../../templates/chat-reports.md');

// The text of one canonical block: from its `## <heading>` line to the next `## ` heading.
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

// Numbered option rows of every Options table in a block: `| 1 | ... |`
function optionRows(text) {
  return text.split('\n').filter((l) => /^\| [1-9] \|/.test(l));
}

describe('direct path chat shapes', () => {
  test('lane announcement marks the path and shows the escalation shape (TS-061)', () => {
    const lane = block(/Lane announcement/);
    assert.match(lane, /\| ⚡ Fast · direct \|/);
    assert.match(lane, /\| 🐛 Bugfix · direct \|/);
    assert.match(lane, /\| ⚡ Fast · full \|/);
    assert.match(lane, /\| 🐛 Bugfix · full \|/);
    assert.match(lane, /<lane> · direct → full — <reason>/);
    // The lane marker is the only change: Feature still has no path marker.
    assert.match(lane, /\| 🆕 Feature \|/);
  });

  test('Unexplained failure stop has exactly two choices with an estimate (TS-055)', () => {
    const text = block(/Unexplained failure/);
    assert.match(text, /\| Check \|/);
    assert.match(text, /\| Error \|/);
    assert.match(text, /\| Reaches \|/);
    const rows = optionRows(text);
    assert.equal(rows.length, 2, 'exactly two numbered option rows');
    assert.match(rows[0], /^\| 1 \|.*continue.*pre-existing.*(<estimate or unknown>|unknown)/i);
    assert.match(rows[1], /^\| 2 \|.*compare.*previous revision.*this one check.*(<estimate or unknown>|unknown)/i);
    assert.doesNotMatch(rows.join('\n'), /Tell me what you need/i);
    assert.match(text, /[Nn]obody else is called before the human answers/);
    assert.match(text, /[Ff]ree text (stays|keeps) on this stop/);
    assert.match(text, /end the turn/i);
    // Nothing after the Options table.
    const lastRow = text.split('\n').filter((l) => l.startsWith('|')).pop();
    assert.match(lastRow, /^\| 2 \|/);
  });

  test('the rules name the Unexplained failure exception to option 2', () => {
    const rules = reports.slice(reports.indexOf('<rules>'), reports.indexOf('</rules>'));
    assert.match(rules, /Option `2` is tell me what you need, except where a block below names a different row 2/);
    assert.match(rules, /Question pack/);
    assert.match(rules, /Unexplained failure/);
  });

  test('Direct close lists what changed, proof, checks, pre-existing and rule delta (TS-058)', () => {
    const text = block(/Direct close/);
    for (const field of ['Changed', 'Proof', 'Related checks', 'Not run', 'Pre-existing', 'Rule delta']) {
      assert.match(text, new RegExp(`\\| ${field}[^|]* \\|`), `field ${field}`);
    }
    assert.match(text, /failing → passing/);
    assert.match(text, /unchanged/);
    assert.match(text, /\[[^\]]+\]\(\/Users\/you\/project\/[^)\s]+\)/, 'files are links');
    assert.match(text, /PRODUCT_DESCRIPTION\.md/);
    assert.match(text, /TEST_STUBS\.md/);
    assert.doesNotMatch(text, /[┌┐└┘│─├┤]/, 'no box-drawing');
  });

  test('Direct close offers ready PR, draft PR, no PR and more edits (TS-059)', () => {
    const text = block(/Direct close/);
    const rows = optionRows(text);
    const pr = rows.filter((r) => /^\| [1-4] \|.*(ready PR|draft PR|no PR|more)/i.test(r));
    assert.ok(pr.length >= 4, 'four PR options');
    assert.match(text, /\| 1 \|.*ready PR/i);
    assert.match(text, /\| 2 \|.*draft PR/i);
    assert.match(text, /\| 3 \|.*no PR/i);
    assert.match(text, /\| 4 \|.*(more to change|more)/i);
  });

  test('Direct close for the active increment returns to the touched flow, no PR (TS-060)', () => {
    const text = block(/Direct close/);
    const variant = text.slice(text.search(/active increment/i));
    assert.match(variant, /\| 1 \|.*walk the touched flow now/i);
    assert.match(variant, /\| 2 \|.*Tell me what you need/i);
    assert.doesNotMatch(variant, /ready PR|draft PR|no PR/i);
  });

  test('a verify or QA fix is decided by the adjust phase, never always back to the PRD (BR-13)', () => {
    // No Options row says a fix goes back to the PRD.
    const rows = reports.split('\n').filter((l) => /^\| [1-9] \|/.test(l));
    for (const row of rows) {
      assert.doesNotMatch(row, /Back to the PRD/i, `Options row: ${row}`);
    }
    // No sentence rewinds to the PRD unconditionally after a verify or QA fix.
    assert.doesNotMatch(reports, /Verify close option 4[^\n]*rewind to the PRD on this increment and run the flow again/);
    assert.doesNotMatch(reports, /if they already said what to fix, rewind to the PRD/);
    assert.doesNotMatch(reports, /`Back to the PRD`/);
    // Verify close and Issues still open: option "fix something", adjust phase decides.
    const close = reports.slice(reports.indexOf('### Verify close'), reports.indexOf('## Manual verify'));
    assert.ok(close.length > 100, 'Verify close section found');
    assert.match(close, /\| 4 \| ✏️ Fix something/);
    assert.match(close, /\| 1 \| ✏️ Fix something/);
    assert.match(close, /adjust phase/);
    assert.match(close, /direct when it fits/i);
    assert.match(close, /back to the PRD when it does not/i);
    assert.match(close, /touched flow[^\n]*pending/i);
    assert.match(close, /already marked pass/i);
    // Option numbers and emoji-first row shape are kept.
    assert.match(close, /\| 1 \| 🚀 Work done/);
    assert.match(close, /\| 2 \| 📝 Work done/);
    assert.match(close, /\| 3 \| ✅ Work done/);
    assert.match(close, /\| 2 \| ✏️ Tell me what you need/);
    // QA report stop: same routing.
    const qa = block(/QA report — your call/);
    assert.match(qa, /adjust phase/);
  });

  test('the per-stop checklist lists both new stops', () => {
    const checklist = reports.slice(reports.indexOf('## Per-stop checklist'), reports.indexOf('<rules>'));
    assert.match(checklist, /\| Direct close \|/);
    assert.match(checklist, /\| Unexplained failure \|/);
    assert.match(checklist, /Report frame/);
  });

  test('language contract sentences stay intact', () => {
    assert.match(reports, /\| Campo \| Valor \|/);
    assert.match(reports, /not text to paste/);
    assert.match(reports, /language\.chat/);
    assert.match(reports, /Do not paste the English words when chat is not English/);
  });
});
