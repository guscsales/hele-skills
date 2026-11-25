import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(rel) {
  return fs.readFileSync(new URL(`../../${rel}`, import.meta.url), 'utf8');
}

function contractFiles() {
  const out = [];
  for (const dir of fs.readdirSync(new URL('../../skills/', import.meta.url))) {
    if (dir === 'hele-run-report') continue;
    const rel = `skills/${dir}/SKILL.md`;
    if (fs.existsSync(new URL(`../../${rel}`, import.meta.url))) out.push(rel);
  }
  for (const f of fs.readdirSync(new URL('../../agents/', import.meta.url))) {
    if (f.endsWith('.md')) out.push(`agents/${f}`);
  }
  for (const f of fs.readdirSync(new URL('../../templates/', import.meta.url))) {
    if (f.endsWith('.md')) out.push(`templates/${f}`);
  }
  return out;
}

function sentences(text) {
  return text
    .split(/\n+|(?<=[.!?;])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

describe('full path keeps its gates and stops triage', () => {
  const build = read('skills/hele-build/SKILL.md');
  const plan = read('skills/hele-plan/SKILL.md');
  const qa = read('skills/hele-qa/SKILL.md');
  const wylie = read('agents/qa-wylie.md');

  test('TS-013: build records an unreached failing check as pre-existing and does not block', () => {
    assert.match(build, /do(es)? not reach/i);
    assert.match(build, /pre-existing/i);
    assert.match(build, /name and an error excerpt/i);
    assert.match(build, /does not block/i);
    assert.match(build, /never routed|not routed|never route/i);
  });

  test('TS-013/TS-056: a reached unexplained failure stops for the human before anyone else is called', () => {
    assert.match(build, /Unexplained failure/);
    assert.match(build, /templates\/chat-reports\.md/);
    assert.match(build, /before (anyone|nobody) else is called|before calling anyone/i);
  });

  test('TS-056: build orders a previous-revision comparison only when the human chose it', () => {
    assert.match(build, /previous revision/i);
    assert.match(build, /worktree/i);
    assert.match(build, /human chose "compare"/);
    assert.match(build, /only Wylie|Wylie[^.]*that one check/i);
  });

  test('TS-014: plan built, epic closed and QA start are stated for the full path', () => {
    assert.match(build, /full path[^.\n]*(mark|plan built|built)/i);
    assert.match(build, /On green on the full path|full path[^.\n]*green/i);
    assert.match(build, /independent QA|hele-qa/);
  });

  test('TS-044/TS-005: plan takes escalated direct-path findings and keeps one bead per task on the full path', () => {
    assert.match(plan, /escalated from the direct path/i);
    assert.match(plan, /findings/i);
    assert.match(plan, /<current-state>/);
    assert.match(plan, /left no plan or beads to reuse/i);
    assert.match(plan, /one bead per delivery task[^.\n]*full path|full path[^.\n]*one bead per delivery task/i);
  });

  test('TS-056: QA dispatch and Wylie never order an unrequested previous-revision comparison', () => {
    assert.match(qa, /previous revision/i);
    assert.match(qa, /worktree/i);
    assert.match(qa, /human chose it for this delivery/i);
    assert.match(wylie, /previous revision/i);
    assert.match(wylie, /worktree/i);
    assert.match(wylie, /human chose/i);
  });

  test('every previous-commit or previous-revision mention is conditioned on the human choosing it (Options-table rows exempt: the numbered row is where the human chooses, not an instruction to an agent)', () => {
    const optionRow = /^\|\s*\d+\s*\|/;
    const offenders = [];
    for (const rel of contractFiles()) {
      for (const s of sentences(read(rel))) {
        if (optionRow.test(s)) continue;
        if (/previous (commit|revision)/i.test(s) && !/human (chose|chooses|said so)/i.test(s)) {
          offenders.push(`${rel}: ${s.slice(0, 160)}`);
        }
      }
    }
    assert.deepEqual(offenders, []);
  });

  test('no contract instructs a worktree at a previous commit or revision', () => {
    const offenders = [];
    for (const rel of contractFiles()) {
      for (const s of sentences(read(rel))) {
        if (/worktree (at|of) the previous (commit|revision)/i.test(s) && !/human (chose|chooses|said so)/i.test(s)) {
          offenders.push(`${rel}: ${s.slice(0, 160)}`);
        }
      }
    }
    assert.deepEqual(offenders, []);
  });
});

describe('full path gates: each clause has an assertion that fails when the clause is removed', () => {
  // Each case asserts the clause, then deletes that clause from the text and asserts the
  // same check now fails (negative control), so the assertion cannot pass vacuously.
  function proves(text, clause, removal) {
    assert.match(text, clause);
    const stripped = text.replace(removal, '');
    assert.notEqual(stripped, text, 'removal pattern must match the text');
    assert.doesNotMatch(stripped, clause);
  }

  const plan = read('skills/hele-plan/SKILL.md');
  const build = read('skills/hele-build/SKILL.md');
  const verify = build.slice(
    build.indexOf('<phase name="2-verify">'),
    build.indexOf('</phase>', build.indexOf('<phase name="2-verify">')),
  );

  test('TS-005: the human does not sign the plan (rules line)', () => {
    proves(plan, /The human does not sign the EXECUTION_PLAN/, /The human does not sign the EXECUTION_PLAN\./);
  });

  test('TS-005: the conductor does not ask the human to approve the plan (phase 4 line)', () => {
    proves(plan, /Do not ask the human to approve it/, /Do not ask the human to approve it\./);
  });

  test('TS-013: final checks run affected tests plus typecheck and lint', () => {
    proves(
      verify,
      /affected engineer-owned tests, typecheck and lint/,
      /Collect increment changes against the base, then run affected engineer-owned tests, typecheck and lint\./,
    );
  });

  test('TS-013: final checks run the whole suite for shared config, lockfile, test setup or schema changes', () => {
    proves(
      verify,
      /whole engineer-owned suite for shared config, lockfile, test setup(\/helper)? or schema changes/,
      /Run the whole engineer-owned suite for shared config, lockfile, test setup\/helper or schema changes[^.]*\./,
    );
  });

  test('TS-014: a built plan is engineering evidence only, not QA or human acceptance', () => {
    proves(
      verify,
      /Built is engineering evidence only[^.]*does not mean QA or human acceptance/,
      /Built is engineering evidence only; it does not mean QA or human acceptance\./,
    );
  });

  const block = (text, name) => {
    const start = text.indexOf(`<${name}`);
    const closer = name === 'context' ? '</context>' : '</phase>';
    return text.slice(start, text.indexOf(closer, start));
  };
  const planContext = block(plan, 'context');
  const planPhase4 = block(plan, 'phase name="4-note-and-build"');

  test('TS-005: stale scenarios are reconciled before build starts (phase 4)', () => {
    proves(
      planPhase4,
      /based_on drift[^.\n]*flag STALE and reconcile before starting build/,
      /based_on drift[^.\n]*flag STALE and reconcile before starting build\./,
    );
  });

  test('TS-005: the plan reads settings, PRD, TEST_STUBS with Coverage, validation strategy, DESIGN_SPEC and the plan template (context)', () => {
    const inputs = new RegExp(
      [
        '- Load:',
        '(?=[^\\n]*settings\\.json)',
        '(?=[^\\n]*the PRD)',
        '(?=[^\\n]*TEST_STUBS including Coverage recommendations)',
        '(?=[^\\n]*validation-strategy\\.md)',
        '(?=[^\\n]*approved DESIGN_SPEC)',
        '(?=[^\\n]*execution-plan\\.md)',
      ].join(''),
    );
    proves(planContext, inputs, /^- Load:.*$/m);
  });
});
