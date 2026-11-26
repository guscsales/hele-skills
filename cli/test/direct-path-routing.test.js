import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (rel) => fs.readFileSync(new URL(`../../${rel}`, import.meta.url), 'utf8');

// Contract-text proof: the instruction exists and the removed wording is gone.
// It never proves a model obeys it.

const conductor = read('skills/hele/SKILL.md');
const fast = read('skills/hele-fast/SKILL.md');
const sticky = read('templates/sticky-lanes.md');
const lisbon = read('agents/staff-lisbon.md');
const openChannel = read('templates/open-channel.md');
const verifyWork = read('skills/hele-verify-work/SKILL.md');

// Slice a <phase name="..."> block out of a skill.
function phase(text, name) {
  const m = text.match(new RegExp(`^<phase name="${name}">([\\s\\S]*?)^</phase>`, 'm'));
  assert.ok(m, `phase ${name} exists`);
  return m[1];
}

function rulesBlock(text) {
  const m = text.match(/<rules>([\s\S]*?)<\/rules>/);
  assert.ok(m, 'rules block exists');
  return m[1];
}

describe('direct path routing', () => {
  test('conductor and Fast skill route to templates/direct-path.md (TS-042)', () => {
    assert.match(conductor, /templates\/direct-path\.md/);
    assert.match(fast, /templates\/direct-path\.md/);
    const lane = phase(conductor, '1-lane');
    assert.match(lane, /templates\/direct-path\.md/);
  });

  test('conductor pre-escalates only when the ask names an excluded surface; the engineer decides otherwise (TS-041, TS-042)', () => {
    const lane = phase(conductor, '1-lane');
    assert.match(lane, /only when the ask (itself )?names an excluded surface/i);
    assert.match(lane, /excluded surface/i);
    assert.match(lane, /owning engineer/i);
    assert.match(lane, /(engineer|worker) (decides|judges|confirms)[^.\n]*(fit|escalat)/i);
    assert.match(fast, /only when the ask (itself )?names an excluded surface/i);
  });

  test('a new capability stays on the Feature lane and the full path regardless of size (TS-062)', () => {
    const lane = phase(conductor, '1-lane');
    assert.match(lane, /Feature lane/);
    assert.match(lane, /new capability[^.\n]*(full path)[^.\n]*(regardless|whatever|no matter)[^.\n]*size/i);
    assert.match(fast, /brand-new capability[^.\n]*Feature lane/i);
  });

  test('lane announcement shows the path and escalation is announced with its reason (TS-061)', () => {
    const lane = phase(conductor, '1-lane');
    assert.match(lane, /Bugfix · direct/);
    assert.match(lane, /Fast · direct/);
    assert.match(lane, /· full/);
    assert.match(lane, /escalat[^.\n]*(announce|reason)|(announce|reason)[^.\n]*escalat/i);
    assert.match(lane, /Escalation/);
  });

  test('no approval stop on the direct path for an unchanged rule or one the human decided (TS-045, TS-046)', () => {
    const spine = phase(conductor, '2-spine');
    assert.match(spine, /direct path[^.\n]*no (approval )?stop[^.\n]*(rule is )?unchanged/i);
    assert.match(spine, /human's (own )?words (already )?decide/i);
    assert.match(spine, /patch(es)?[^.\n]*(PRD|PRODUCT_DESCRIPTION)[^.\n]*(patch bump|changelog)/i);
    assert.match(spine, /delta[^.\n]*(close)/i);
  });

  test('Question pack on doubt, on both paths (TS-047)', () => {
    const spine = phase(conductor, '2-spine');
    assert.match(spine, /doubt[^.\n]*Question pack|Question pack[^.\n]*doubt/i);
    assert.match(spine, /both paths/i);
    assert.match(spine, /nothing (is )?written|writes nothing|no (file|PRD) (is )?written/i);
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    assert.match(fastPhase2, /Question pack/);
  });

  test('TS-047: a late doubt with a safe recommendation is decided by Lisbon; only without one is it a smaller pack', () => {
    const spine = phase(conductor, '2-spine');
    assert.match(spine, /late doubt[^\n]*safe recommendation[^\n]*decided by Lisbon/i);
    assert.match(spine, /no safe recommendation[^.\n]*smaller pack/i);
  });

  test('an unchanged-rule bug never stops for approval on either path (TS-020)', () => {
    const spine = phase(conductor, '2-spine');
    assert.match(spine, /(bug|bugfix)[^.\n]*(unchanged|leaves the rule)[^.\n]*never stops[^.\n]*either path/i);
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    assert.match(fastPhase2, /never stops for approval on either path/i);
  });

  test('the PRD + stubs approval stop applies only when the rule text changed (TS-020, BR-12)', () => {
    // Fast phase 2 step 5 is the stop itself; it must carry the exception.
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    const step5 = fastPhase2.split('\n').find((l) => /^5\. /.test(l));
    assert.ok(step5, 'step 5 exists');
    assert.match(step5, /only when (the|a) (rule|PRD)[^.\n]*(text )?(changed|changes)|(rule|PRD) text (changed|changes)/i);
    assert.match(step5, /unchanged[^.\n]*(no stop|without (an? )?(approval )?stop|straight (on )?to|go(es)? (straight )?on)/i);
    assert.match(step5, /hele-plan/);
    assert.match(step5, /hele-design/);
    // Conductor spine item 1 carries "Option `1` on the PRD"; the exception must sit in that item.
    const spine = phase(conductor, '2-spine');
    const item1 = spine.split('\n').find((l) => /^1\. /.test(l));
    assert.ok(item1, 'spine item 1 exists');
    const optIdx = item1.indexOf('Option `1` on the PRD');
    assert.ok(optIdx >= 0, 'Option 1 on the PRD is present');
    assert.match(item1.slice(optIdx), /only when the rule text changed|unchanged[^.\n]*(no stop|without (an? )?(approval )?stop|straight on)/i);
    assert.match(item1.slice(optIdx), /hele-plan|plan/i);
  });

  test('an escalation after a PRD patch reuses the already patched PRD (N3)', () => {
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    assert.match(fastPhase2, /already patched[^.\n]*(reuse|reused|not patch|does not patch|never patch)|(reuse|reused)[^.\n]*already patched/i);
    assert.match(fastPhase2, /already patched[^.\n]*(approval stop|shows?|delta)|(approval stop|delta)[^.\n]*already patched/i);
    assert.match(fastPhase2, /escalat/i);
  });

  test('a human walk after a direct correction is shown from VERIFY.md, not the old QA report (S2, BR-13)', () => {
    const walk = phase(verifyWork, '2-guided-walk');
    assert.match(walk, /VERIFY\.md/);
    assert.match(walk, /pending[^.\n]*(expected result|corrected)[^.\n]*direct path|direct path[^.\n]*(expected result|corrected)/i);
    assert.match(walk, /(shown|show|take|taken|facts)[^.\n]*from `?VERIFY\.md`?/i);
    assert.match(walk, /not (from )?the (old |stale )?QA report|instead of the (old |stale )?QA report/i);
  });

  test('verify-work points at the adjust phase instead of an unconditional rewind (BR-13)', () => {
    assert.doesNotMatch(verifyWork, /That is a rewind to the PRD\./);
    assert.doesNotMatch(verifyWork, /stops the walk and rewinds to the PRD/);
    assert.match(verifyWork, /run its adjust phase on this same increment/i);
    assert.match(verifyWork, /stops the walk and goes to `\/hele`'s adjust phase/);
    assert.match(verifyWork, /fits the direct path[^.\n]*delivered there/i);
    assert.match(verifyWork, /larger one rewinds to the PRD/i);
  });

  test('no contract says a verify fix or correction always goes back to the PRD (BR-13, whole tree scan)', () => {
    const root = new URL('../../', import.meta.url);
    const files = [];
    for (const dir of ['skills', 'agents', 'templates']) {
      const walk = (rel) => {
        for (const e of fs.readdirSync(new URL(`${rel}/`, root), { withFileTypes: true })) {
          const child = `${rel}/${e.name}`;
          if (e.isDirectory()) walk(child);
          else if (e.name.endsWith('.md')) files.push(child);
        }
      };
      walk(dir);
    }
    assert.ok(files.length > 20, 'scan reads the contract tree');
    // A sentence that sends a fix back to the PRD, or calls it a rewind, must name the branch it is
    // true for: a larger correction, the full path, or "when it does not [fit]". Pointing at the
    // adjust phase alone does not condition the wording; the sentence must still not say "always".
    // The bare noun "rewind" ("unless this rewind changed that flow") is a pointer to the verdict rule, not a
    // routing claim, so only the routing phrasings are scanned.
    const sends = /back to the PRD|rewinds? (through|to) |\(rewind/i;
    const conditioned = /\blarger\b|does not fit|when it does not|on the full path|\bfeature lane\b|Only a /i;
    const bad = [];
    for (const rel of files) {
      const text = fs.readFileSync(new URL(rel, root), 'utf8');
      for (const sentence of text.split(/(?<=[.!?])\s+|\n/)) {
        if (sends.test(sentence) && !conditioned.test(sentence)) bad.push(`${rel}: ${sentence.trim().slice(0, 160)}`);
      }
    }
    assert.deepEqual(bad, []);
  });

  test('verify menus match the chat-reports rows: Fix something, no Back to the PRD', () => {
    const chat = read('templates/chat-reports.md');
    const rows = chat.split('\n').filter((l) => /^\| \d \| ✏️ Fix something/.test(l));
    assert.ok(rows.length >= 2, 'chat-reports has the Fix something rows');
    for (const row of rows.filter((r) => /tell me what's wrong|start the fix/.test(r))) {
      assert.ok(verifyWork.includes(row), `verify-work carries the row: ${row}`);
    }
    assert.doesNotMatch(verifyWork, /\| ✏️ Back to the PRD/);
  });

  test('open-channel scopes the beads trace to the full path', () => {
    assert.match(openChannel, /Beads are the task trace for the full path/i);
    assert.match(openChannel, /Tweak lane and the direct path have none/i);
  });

  test('the approval stop is still stated for the full path (TS-003)', () => {
    const spine = phase(conductor, '2-spine');
    assert.match(spine, /full path[^.\n]*approval stop|approval stop[^.\n]*full path/i);
    assert.match(spine, /PRD \+ stubs/);
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    assert.match(fastPhase2, /full path[^.\n]*PRD \+ stubs stop|PRD \+ stubs stop[^.\n]*full path/i);
  });

  test('full path keeps plan, beads, build and QA stated (TS-003, TS-021, TS-022)', () => {
    const spine = phase(conductor, '2-spine');
    assert.match(spine, /Plan[^\n]*EXECUTION_PLAN \+ beads/);
    assert.match(spine, /Build[^\n]*beads/i);
    assert.match(spine, /Auto-verify/);
    assert.match(spine, /QA_REPORT\.md/);
    assert.match(sticky, /Beads stay on the full path/);
    const spineFast = phase(fast, '3-spine');
    assert.match(spineFast, /Beads on every plan task/);
  });

  test('adjust routes a fitting correction to the direct path without rebuilding plan or QA report (TS-060)', () => {
    const adjust = phase(conductor, 'adjust');
    assert.match(adjust, /templates\/direct-path\.md/);
    assert.match(adjust, /fits the direct path/i);
    assert.match(adjust, /plan and (the )?QA report (are )?not rebuilt/i);
    assert.match(adjust, /pending/);
    assert.match(adjust, /walk that flow/i);
  });

  test('adjust keeps patch-the-same-plan for a correction on the full path (TS-021, TS-022)', () => {
    const adjust = phase(conductor, 'adjust');
    assert.match(adjust, /full path[^.\n]*(existing steps|steps below|steps apply)|(existing steps|steps below|steps apply)[^.\n]*full path/i);
    assert.match(adjust, /patches the plan/i);
    assert.match(adjust, /same epic, do not throw the plan away/i);
    assert.match(adjust, /Already the rule/);
  });

  test('Fast opens the next increment only on the full path (TS-019)', () => {
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    assert.match(fastPhase2, /increment[^.\n]*full path|full path[^.\n]*increment/i);
    assert.match(fast, /direct path[^.\n]*opens? no increment|no increment[^.\n]*direct path/i);
    assert.match(fastPhase2, /create `features\/<slug>\/increments\/NNN-<kind>-<slug>\/`/);
  });

  test('conductor rules forbid an unordered previous-revision comparison in any dispatch prompt (TS-056)', () => {
    const rules = rulesBlock(conductor);
    assert.match(rules, /never order[^.\n]*dispatch prompt[^.\n]*previous revision/i);
    assert.match(rules, /worktree/i);
    assert.match(rules, /dependency install/i);
    assert.match(rules, /second environment/i);
    assert.match(rules, /unless the human chose it for this delivery/i);
    assert.match(rules, /both paths|direct and the full path|direct or the full path/i);
  });

  test('a failing check the change does not reach is recorded as pre-existing, never triaged', () => {
    const rules = rulesBlock(conductor);
    assert.match(rules, /does not reach[^.\n]*pre-existing[^.\n]*never triaged/i);
  });

  test('Lisbon persona carries the direct-path conductor role and the comparison prohibition', () => {
    assert.match(lisbon, /templates\/direct-path\.md/);
    assert.match(lisbon, /direct path/i);
    const never = lisbon.match(/<never>([\s\S]*?)<\/never>/)[1];
    assert.match(never, /previous[- ]revision comparison[^.\n]*human did not choose/i);
    assert.match(lisbon, /fits the direct path[^.\n]*(delivered|delivers) there|correction[^.\n]*direct path/i);
  });

  test('sticky text scopes beads to the full path; the Tweak lane and direct path have none', () => {
    assert.match(sticky, /Beads stay on the full path of Feature, Fast and Bugfix/);
    assert.match(sticky, /Tweak lane and the direct path have none/);
    assert.match(conductor, /<sticky>[\s\S]*full path[\s\S]*<\/sticky>/);
  });

  test('removed wording does not return', () => {
    assert.doesNotMatch(fast, /What never shrinks is the named agent team, TDD, beads/);
    assert.doesNotMatch(fast, /Beads and the full spine apply\. There is no FAST\.md shortcut\./);
    assert.doesNotMatch(conductor, /Never drop beads on Feature \/ Fast \/ Bugfix\./);
    assert.doesNotMatch(sticky, /Beads stay on Feature, Fast, and Bugfix \(the Tweak lane has none\)/);
    assert.doesNotMatch(openChannel, /Beads are the task trace for Feature, Fast, Bugfix, and an adjustment of the current increment\. The Tweak lane has none/);
  });
});

// QA coverage: each assertion below is paired with a negative control. The control deletes the
// sentence that carries the clause from the text and requires the very same assertion to fail, so
// the assertion cannot pass on unrelated wording.
const sentencesOf = (text) => text.split(/(?<=[.!?])\s+|\n/);
// Remove the matching sentences in place. Line breaks, list numbers and every other sentence stay
// where they are, so a control can only fail because the clause is gone, never because the
// structure around it moved.
function dropSentences(text, re) {
  let out = text;
  for (const sentence of sentencesOf(text)) {
    if (sentence && re.test(sentence)) out = out.replace(sentence, '');
  }
  return out;
}
const NO_SUCH_CLAUSE = /zzz no such clause zzz/;
function proven(check, text, clauseRe) {
  check(text);
  assert.ok(sentencesOf(text).some((x) => clauseRe.test(x)), `clause present: ${clauseRe}`);
  // Guard: removing a clause that is not in the text must change nothing, and the check must still pass.
  const noop = dropSentences(text, NO_SUCH_CLAUSE);
  assert.equal(noop, text, 'no-op removal leaves the text identical');
  check(noop);
  // Real control: removing the clause must make the same check fail.
  const without = dropSentences(text, clauseRe);
  assert.notEqual(without, text, `control removed something for ${clauseRe}`);
  assert.throws(() => check(without), undefined, `control: assertion still passes without ${clauseRe}`);
}
const line = (text, re) => {
  const l = text.split('\n').find((x) => re.test(x));
  assert.ok(l, `line present: ${re}`);
  return l;
};
const stubs = read('skills/hele-stubs/SKILL.md');

describe('direct path routing, clause-level coverage with negative controls', () => {
  test('TS-003: one approval stop, no separate validation-plan or coverage approval', () => {
    const spine = phase(conductor, '2-spine');
    const noPlanApproval = /No separate validation-plan approval/;
    proven((t) => assert.match(t, noPlanApproval), spine, noPlanApproval);
    const noGate = /do not present a separate approval gate/;
    proven((t) => assert.match(t, noGate), stubs, noGate);
    const together = /parent stop presents PRD \+ stubs together/;
    proven((t) => assert.match(t, together), stubs, together);
  });

  test('TS-019: a changed rule patches the PRD in the Fast skill', () => {
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    const clause = /patch `PRODUCT_DESCRIPTION\.md` \(rewrite in place, patch bump, changelog\)/;
    const check = (t) => assert.match(line(t, /^2\. /), /Fast, or a bugfix that changes the rule:\*\*[^\n]*patch `PRODUCT_DESCRIPTION\.md` \(rewrite in place, patch bump, changelog\)/);
    proven(check, fastPhase2, clause);
  });

  test('TS-020, TS-045: an unchanged rule leaves the PRD text alone and is reported as Already the rule', () => {
    const fastPhase2 = phase(fast, '2-reconcile-prd-and-stubs');
    const leave = /leave the PRD/;
    proven((t) => assert.match(line(t, /^2\. /), /Bugfix that does not change the rule text:\*\* leave the PRD/), fastPhase2, leave);
    const bucket = /Already the rule\*\* bucket names the rule the code broke/;
    proven((t) => assert.match(line(t, /^2\. /), /Already the rule\*\* bucket names the rule the code broke/), fastPhase2, bucket);
    // The step-5 side: no stop, the PRD is left alone.
    const noStop = /bugfix whose rule text is unchanged has no stop: the PRD is left alone/i;
    proven((t) => assert.match(line(t, /^5\. /), noStop), fastPhase2, noStop);
  });

  test('TS-021: verified verdicts are kept unless the fix touched the flow (larger correction)', () => {
    const keepsSection = /A flow that is still `verified`, and that this fix did not touch, keeps its section and its verdict/;
    proven((t) => assert.match(t, keepsSection), verifyWork, keepsSection);
    const keepsVerdicts = /keeps those verdicts unless that fix touched the flow/;
    proven((t) => assert.match(t, keepsVerdicts), verifyWork, keepsVerdicts);
    const adjust = phase(conductor, 'adjust');
    const stays = /Every flow with verdict `verified` stays verified, except a flow this fix touches/;
    proven((t) => assert.match(t, stays), adjust, stays);
    const passed = /Passed walks stay passed/;
    proven((t) => assert.match(t, passed), adjust, passed);
  });

  test('TS-022: an unchanged-rule correction proceeds at once and keeps the same verdicts', () => {
    const adjust = phase(conductor, 'adjust');
    proven((t) => assert.match(t, /Already the rule\*\* does not wait/), adjust, /Already the rule\*\* does not wait/);
    proven((t) => assert.match(t, /Start the flow in that same turn/), adjust, /Start the flow in that same turn/);
    // Verdict preservation holds for this branch too: the verify-work clause is not conditioned on a rule change.
    const keepsVerdicts = /keeps those verdicts unless that fix touched the flow/;
    proven((t) => assert.match(t, keepsVerdicts), verifyWork, keepsVerdicts);
    assert.doesNotMatch(line(verifyWork, /keeps those verdicts unless/), /rule (text )?(changed|changes)/i);
    const stays = /Every flow with verdict `verified` stays verified/;
    proven((t) => assert.match(t, stays), adjust, stays);
  });
});
