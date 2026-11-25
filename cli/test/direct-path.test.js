import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { FLOW_DIAGRAM } from '../src/flow-diagram.js';
import { SKILLS } from '../src/ai.js';

function read(rel) {
  return fs.readFileSync(new URL(rel, import.meta.url), 'utf8');
}

function block(text, name) {
  const m = text.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  assert.ok(m, `missing <${name}> block`);
  return m[1];
}

function sentences(text) {
  return text.split(/(?<=[.!?])\s+|\n+/).filter(Boolean);
}

describe('direct path contract', () => {
  const direct = read('../../templates/direct-path.md');
  const conductor = () => block(direct, 'conductor');
  const worker = () => block(direct, 'worker');

  test('has conductor and worker blocks', () => {
    assert.match(direct, /<conductor>/);
    assert.match(direct, /<\/conductor>/);
    assert.match(direct, /<worker>/);
    assert.match(direct, /<\/worker>/);
  });

  test('TS-039/TS-062: applies to Bugfix, Fast and active-increment correction; new capability stays on the full path', () => {
    const c = conductor();
    assert.match(c, /Bugfix/);
    assert.match(c, /Fast/);
    assert.match(c, /correction of the active increment/i);
    assert.match(c, /new capability[^.\n]*(stays|remains)[^.\n]*(Feature|full path)/i);
    assert.match(c, /full path/);
  });

  test('TS-041: every excluded surface is listed, with the module contract defined', () => {
    for (const term of [
      /schema or production data/i,
      /authentication/i,
      /permissions/i,
      /payments/i,
      /personal data/i,
      /shared configuration/i,
      /\bCI\b/,
      /environment/i,
      /new screen/i,
      /contract between modules/i,
      /API request or response shape/i,
      /\bevent\b/i,
      /shared public type/i,
    ]) {
      assert.match(direct, term);
    }
  });

  test('TS-040: no file-count limit and no other size test', () => {
    assert.match(direct, /no file-count limit/i);
    assert.match(direct, /no other size test/i);
  });

  test('TS-043: ESCALATE keeps partial work and reports findings', () => {
    const w = worker();
    assert.match(w, /ESCALATE/);
    assert.match(w, /partial work/i);
    assert.match(w, /findings/i);
    assert.match(w, /files read/i);
    assert.match(w, /proposed split/i);
    const c = conductor();
    assert.match(c, /ESCALATE/);
    assert.match(c, /skills\/hele-fast\/SKILL\.md/);
    assert.match(c, /Escalation/);
    assert.match(c, /findings[^.\n]*(planning|hele-plan)/i);
  });

  test('TS-048: failing-first sequence', () => {
    const w = worker();
    assert.match(w, /smallest test/i);
    assert.match(w, /run it/i);
    assert.match(w, /failing output/i);
    const fail = w.search(/failing output/i);
    const change = w.search(/make the change/i);
    const pass = w.search(/green|passes/i);
    assert.ok(fail >= 0 && change > fail && pass > change, 'fail, then change, then pass');
  });

  test('TS-049: reach is defined; whole suite only appears negated', () => {
    const w = worker();
    assert.match(w, /imports it, directly or through other files/i);
    assert.match(w, /vitest related/);
    assert.match(w, /jest --findRelatedTests/);
    assert.match(w, /pytest/);
    assert.match(w, /name the (selected )?tests/i);
    for (const s of sentences(direct).filter((x) => /whole suite/i.test(x))) {
      assert.match(s, /\b(never|not|no)\b/i, `whole suite must be negated: ${s}`);
    }
    assert.match(w, /never runs? Playwright/i);
  });

  test('TS-050: DONE report fields', () => {
    const w = worker();
    assert.match(w, /DONE/);
    assert.match(w, /changed files/i);
    assert.match(w, /proof/i);
    assert.match(w, /failing and passing output/i);
    assert.match(w, /related checks/i);
    assert.match(w, /not run and why/i);
    assert.match(w, /pre-existing/i);
  });

  test('TS-051/TS-052/TS-053: Wylie only for a real journey or a human-chosen comparison, closed scope', () => {
    const c = conductor();
    assert.match(c, /qa-wylie-run/);
    assert.match(c, /real journey/i);
    assert.match(c, /that journey only/i);
    assert.match(c, /never the whole suite/i);
    assert.match(c, /that one check/i);
    assert.match(c, /unless the human chose/i);
    assert.match(c, /no Wylie run|nobody else is called|never called otherwise/i);
    const w = worker();
    assert.match(w, /real journey/i);
    assert.match(w, /no smaller test/i);
  });

  test('TS-054: pre-existing failure recorded with name and error excerpt', () => {
    const w = worker();
    assert.match(w, /does not reach/i);
    assert.match(w, /pre-existing/i);
    assert.match(w, /name and (an )?error excerpt/i);
    assert.match(w, /continue/i);
  });

  test('TS-055: UNEXPLAINED returns two estimates or unknown; conductor calls nobody before the choice', () => {
    const w = worker();
    assert.match(w, /UNEXPLAINED/);
    assert.match(w, /estimate/i);
    assert.match(w, /`unknown`/);
    assert.match(w, /leave the change in place/i);
    const c = conductor();
    assert.match(c, /UNEXPLAINED/);
    assert.match(c, /Unexplained failure/);
    assert.match(c, /calls? nobody/i);
    assert.match(c, /continue[^.\n]*pre-existing/i);
    assert.match(c, /compare[^.\n]*qa-wylie-run|qa-wylie-run[^.\n]*compar/i);
  });

  test('TS-056: no previous-revision comparison unless the human chose it', () => {
    const c = conductor();
    assert.match(c, /never order/i);
    assert.match(c, /previous revision/i);
    assert.match(c, /worktree/i);
    assert.match(c, /dependency install/i);
    assert.match(c, /second environment/i);
    for (const s of sentences(direct).filter((x) => /previous revision/i.test(x))) {
      assert.match(s, /human (chose|chooses|said so)|never|not/i, `unconditioned: ${s}`);
    }
  });

  test('TS-057: no increment, no EXECUTION_PLAN, no bd create; trace on rule change', () => {
    const c = conductor();
    assert.match(c, /no increment/i);
    assert.match(c, /no EXECUTION_PLAN/);
    assert.match(c, /no `bd create`/);
    assert.match(c, /no review/i);
    assert.match(c, /patch version/i);
    assert.match(c, /changelog/i);
    assert.match(c, /TEST_STUBS/);
  });

  test('TS-063/TS-064: scenario delta with the engineer when a rule changed; nobody otherwise', () => {
    const c = conductor();
    assert.match(c, /qa-wylie-stubs/);
    assert.match(c, /skills\/hele-stubs\/SKILL\.md/);
    assert.match(c, /same turn/i);
    assert.match(c, /fix does not wait/i);
    assert.match(c, /close waits/i);
    assert.match(c, /no rule change[^.\n]*(nobody|no one)/i);
  });

  test('rule handling per BR-2', () => {
    const c = conductor();
    assert.match(c, /unchanged[^.\n]*no stop/i);
    assert.match(c, /human's words/i);
    assert.match(c, /Question pack/);
    assert.match(c, /nothing (is )?written/i);
  });

  test('TS-060: correction of the active increment sets the touched flow pending', () => {
    const w = worker();
    assert.match(w, /VERIFY\.md/);
    assert.match(w, /`pending`/);
    assert.match(w, /expected result/i);
    assert.match(w, /no other flow/i);
    assert.match(w, /no plan/i);
    assert.match(w, /QA_REPORT/);
    const c = conductor();
    assert.match(c, /skills\/hele-verify-work\/SKILL\.md/);
    assert.match(c, /touched flow only/i);
    assert.match(c, /Direct close/);
  });

  test('conductor dispatches one background owning engineer', () => {
    const c = conductor();
    assert.match(c, /background/i);
    assert.match(c, /Cho/);
    assert.match(c, /Van Pelt/);
    assert.match(c, /settings\.agents\.models/);
  });

  test('fix-up S1: a flagged journey is dispatched first; the close waits for Wylie', () => {
    const c = conductor();
    assert.match(c, /flags a real journey[^\n]*dispatch Wylie[^\n]*end the turn[^\n]*print the "Direct close"[^\n]*(report|returns?|arrives?)/i);
  });

  test('fix-up N1: the engineer never runs Playwright; step 6 only flags', () => {
    const w = worker();
    assert.match(w, /never runs? Playwright/i);
    assert.doesNotMatch(w, /no Playwright unless/i);
    assert.match(w, /only flags/i);
  });

  test('fix-up N2: product doubt found while investigating stops the engineer without a fourth result', () => {
    const w = worker();
    assert.match(w, /product doubt/i);
    assert.match(w, /question for the human/i);
    assert.match(w, /BR-2/);
    assert.match(w, /BR-18/);
    const c = conductor();
    assert.match(c, /Question pack[^\n]*until the human answers/i);
    assert.doesNotMatch(direct, /\bDOUBT\b|`QUESTION`/);
  });

  test('fix-up N8: PR choices follow the verify close PR steps without copying them', () => {
    const c = conductor();
    assert.match(c, /ready PR, draft PR and no PR[^\n]*skills\/hele-verify-work\/SKILL\.md[^\n]*phase 3/i);
    assert.doesNotMatch(c, /gh pr create/);
  });

  test('skills/hele-stubs mentions the direct path with no gate on the fix', () => {
    const stubs = read('../../skills/hele-stubs/SKILL.md');
    assert.match(stubs, /direct path/i);
    assert.match(stubs, /templates\/direct-path\.md/);
    assert.match(stubs, /no gate on the fix/i);
  });

  test('both engineer personas reference templates/direct-path.md', () => {
    for (const f of ['backend-cho', 'frontend-van-pelt']) {
      const text = read(`../../agents/${f}.md`);
      assert.match(text, /templates\/direct-path\.md/);
      assert.match(text, /direct path/i);
      assert.match(text, /replaces the plan task and the bead/i);
    }
  });
});

describe('direct path in the drawing and help', () => {
  const skill = (name) => {
    const found = SKILLS.find((s) => s.name === name);
    assert.ok(found, `missing SKILLS entry ${name}`);
    return `${found.artifact}\n${found.detail}`;
  };

  test('TS-039: the drawing shows the direct path and the lane box names it for Fast and Bugfix', () => {
    assert.match(FLOW_DIAGRAM, /direct/);
    assert.match(FLOW_DIAGRAM, /│ Fast\s+direct/);
    assert.match(FLOW_DIAGRAM, /│ Bugfix\s+direct/);
    assert.match(FLOW_DIAGRAM, /fast \/ bugfix \/ fix: direct → one engineer, targeted proof → close/);
    assert.doesNotMatch(FLOW_DIAGRAM, /feature \/ fast \/ bugfix — \/hele runs these\n/);
  });

  test('TS-039: the drawing shows the escalation to the full spine and the no-comparison rule', () => {
    assert.match(FLOW_DIAGRAM, /excluded surface[^\n]*full spine/i);
    assert.match(FLOW_DIAGRAM, /no plan, no beads/);
    assert.match(FLOW_DIAGRAM, /Never compares against an older revision[\s│]+unless you choose it/);
  });

  test('TS-039: a verify fix goes direct when it fits and back to the PRD when larger', () => {
    assert.doesNotMatch(FLOW_DIAGRAM, /A verify fix goes back to the PRD phase/);
    assert.doesNotMatch(FLOW_DIAGRAM, /│ 4 back to the PRD\s+│/);
    assert.match(FLOW_DIAGRAM, /small fix goes direct/i);
    assert.match(FLOW_DIAGRAM, /larger one goes back to the PRD/i);
  });

  test('TS-061: hele and fast help describe the direct path, escalation and the failure rule', () => {
    for (const name of ['hele', 'fast']) {
      const text = skill(name);
      assert.match(text, /direct path/i, name);
      assert.match(text, /escalat/i, name);
      assert.match(text, /full path/i, name);
    }
    const fast = skill('fast');
    assert.match(fast, /pre-existing/i);
    assert.match(fast, /unexplained/i);
    assert.match(fast, /unchanged rule[^.]*(does not|never) stop/i);
    assert.doesNotMatch(fast, /patched PRD \+ new increment \+ spine/);
  });

  test('help for build and verify-work covers the failure rule and the VERIFY.md exception', () => {
    const build = skill('build');
    assert.match(build, /pre-existing/i);
    assert.match(build, /Unexplained failure/i);
    assert.match(build, /previous revision[^.]*chose/i);
    assert.match(skill('verify-work'), /VERIFY\.md/);
  });

  test('the verify close option 4 is "fix something", not an unconditional back to the PRD', () => {
    const help = skill('verify-work');
    assert.doesNotMatch(help, /4 back to the PRD/i);
    assert.match(help, /4 fix something/i);
    const docs = read('../../.docs/skills.md');
    assert.doesNotMatch(docs, /4 back to the PRD/i);
    assert.match(docs, /4 fix something/i);
  });

  test('the changelog says an unchanged-rule bugfix does not stop for approval on either path', () => {
    const v17 = read('../../CHANGELOG.md').match(/## v1\.7\.0[\s\S]*?(?=\n## v)/)[0];
    assert.match(v17, /unchanged[^\n]*(no longer|does not|never) stops? for approval[^\n]*either path/i);
  });

  test('prose docs and README describe both paths', () => {
    for (const f of ['../../README.md', '../../.docs/introduction.md', '../../.docs/getting-started.md', '../../.docs/skills.md']) {
      const text = read(f);
      assert.match(text, /direct path/i, f);
      assert.doesNotMatch(text, /follows the same spine of the fast lane/, f);
    }
    const skills = read('../../.docs/skills.md');
    assert.match(skills, /## Direct path/);
    assert.match(skills, /Unexplained failure/);
    assert.match(skills, /Direct close/);
    assert.match(skills, /VERIFY\.md/);
    assert.match(read('../../.docs/introduction.md'), /full path/i);
  });

  test('plugin.json and marketplace.json versions equal the newest CHANGELOG heading', () => {
    const newest = read('../../CHANGELOG.md').match(/^## v(\d+\.\d+\.\d+)/m)[1];
    assert.equal(JSON.parse(read('../../.claude-plugin/plugin.json')).version, newest);
    assert.match(read('../../.claude-plugin/marketplace.json'), new RegExp(`"version": "${newest.replace(/\./g, '\\.')}"`));
  });
});

// QA coverage fixes: each check runs on a text and throws when its clause is
// missing. The negative control runs the same check on the contract with that
// one clause removed and requires the check to fail.
describe('direct path clause-level assertions with negative controls', () => {
  const direct = read('../../templates/direct-path.md');

  function section(text, from, to) {
    const a = text.indexOf(from);
    const b = text.indexOf(to, a);
    assert.ok(a >= 0 && b > a, `missing section ${from}`);
    return text.slice(a, b);
  }
  function lineWith(text, re) {
    const line = text.split('\n').find((l) => re.test(l));
    assert.ok(line, `no line matches ${re}`);
    return line;
  }
  function removeClause(text, clause) {
    assert.ok(text.includes(clause), `clause not written in the contract: ${clause}`);
    return text.replace(clause, '');
  }
  function proves(check, clause) {
    check(direct);
    assert.throws(() => check(removeClause(direct, clause)), `check is vacuous without: ${clause}`);
  }

  // TS-041: terms must sit inside the excluded-surfaces list, not anywhere in the file.
  const excludedTerms = [
    [/schema or production data/i, 'schema or production data'],
    [/authentication/i, 'authentication'],
    [/permissions/i, 'permissions'],
    [/payments/i, 'payments'],
    [/personal data/i, 'personal data'],
    [/shared configuration/i, 'shared configuration'],
    [/^- CI;$/m, '- CI;'],
    [/^- environment;$/m, '- environment;'],
    [/new screen/i, 'new screen'],
    [/contract between modules/i, 'contract between modules'],
    [/API request or response shape/i, 'API request or response shape'],
    [/\bevent\b/i, 'an event'],
    [/shared public type/i, 'shared public type'],
  ];
  for (const [re, clause] of excludedTerms) {
    test(`TS-041: excluded-surface list contains "${clause}"`, () => {
      const list = (t) => section(t, '**Excluded surfaces.**', '**Entry.**');
      const check = (t) => assert.match(list(t), re);
      proves(check, clause);
    });
  }

  test('TS-043: the line that returns ESCALATE says stop and keep partial work', () => {
    const check = (t) => assert.match(lineWith(t, /return `ESCALATE`/), /stop, keep partial work/);
    proves(check, 'stop, keep partial work, ');
  });

  test('TS-045: an unchanged rule leaves the PRD untouched, with no stop', () => {
    const check = (t) => assert.match(lineWith(t, /^- Rule unchanged/), /no PRD touch, no stop/);
    proves(check, 'no PRD touch, ');
  });

  test('TS-049: type and lint checks are named next to the tests that reach the changed files', () => {
    const check = (t) =>
      assert.match(
        lineWith(t, /^4\. \*\*Run only the checks that reach/),
        /imports it, directly or through other files[^\n]*type and lint checks that apply, scoped to the changed files/,
      );
    proves(check, 'Add the type and lint checks that apply, scoped to the changed files. ');
  });

  test('TS-053: the comparison the human chose ends in the close', () => {
    const check = (t) =>
      assert.match(lineWith(t, /^- `UNEXPLAINED`/), /On "compare"[^\n]*qa-wylie-run[^\n]*closed scope; then close\./);
    proves(check, '; then close');
  });

  test('TS-057: the trace names the regression test that stays in the project', () => {
    const check = (t) => assert.match(lineWith(t, /^\*\*Trace\.\*\*/), /The regression test in the project\./);
    proves(check, 'The regression test in the project.');
  });
});
