import { printBanner } from './banner.js';
import { FLOW_DIAGRAM } from './flow-diagram.js';

const SKILLS = [
  {
    name: 'hele',
    command: '/hele',
    agent: 'Agent Lisbon, the Builder',
    artifact: 'lane → phase skills behind Options',
    question: 'THE CONDUCTOR',
    detail: `The only entry point for product work. Auto-inits when .hele/ is
missing. Detects Feature / Fast / Bugfix / Tweak / Open and runs the phase
skills. Product questions are a stop that writes nothing: investigate
first, then one pack if anything useful remains (accept all /
one by one / reply in words). After the PRD is approved (and design,
when there are new screens), the agents
write the plan, build, and check coverage plus selected E2E with no
additional sign-off. Screenshots are optional. The QA
report is your next prompt: continue to the manual walk, or fix what
you saw. The walk is tables for how to open the page, the data, and
each step. A fix goes back to the PRD on that same increment, and the
flow runs again. Flows already marked pass are not walked again. A
database change still stops. Files in chat are clickable links. Type
it once — follow-ups stay sticky.`,
  },
  {
    name: 'init',
    agent: 'the harness',
    artifact: '.hele/ settings, index, features/',
    question: 'SETUP',
    detail: `Bootstraps the harness: creates .hele/ (settings.json, index.json,
features/), installs the sticky session rule so /hele stays in force,
asks how design works, and runs hele install for beads. That command
creates the project database and leaves AGENTS.md and CLAUDE.md
untouched. The folder is always .hele/. No state file. When /hele
finds no .hele/, it runs this and continues the ask.`,
  },
  {
    name: 'feature',
    agent: 'Agent Lisbon',
    artifact: 'PRODUCT_DESCRIPTION.md + TEST_STUBS.md',
    question: 'WHAT & WHY',
    detail: `Agent Lisbon investigates first. If useful product questions
remain, one pack: accept all recommendations, answer one by one, or
reply in words. That round writes nothing. Only then does she write
or patch the PRD and dispatch Wylie for stubs in the same stop.
Emits a PRD delta and clickable file links. Option 1 goes to design,
or to build and auto-verify when design is not needed. Started by
/hele.`,
  },
  {
    name: 'design',
    agent: 'Agent Vega',
    artifact: 'DESIGN_SPEC.md',
    question: 'HOW IT LOOKS',
    detail: `Agent Vega asks which design tool and devices, then specs every
screen of the increment. Skipped when no new screens need design or
designSystem.enabled is false. Approving the spec starts the agent run.
The execution plan is not a separate sign-off.`,
  },
  {
    name: 'plan',
    agent: 'Agent Lisbon',
    artifact: 'EXECUTION_PLAN.md + beads',
    question: 'HOW TO BUILD',
    detail: `Agent Lisbon reads the real codebase before planning. Tasks with
owners and TDD criteria become beads issues. The plan is for the agents.
Build starts as soon as it is written. Database tasks bring in Agent
Hightower. DB_CHANGES.md is human-readable markdown. The same changes
are written into the plan under ## Database. Her approval is blocking
and pauses the chain.`,
  },
  {
    name: 'stubs',
    agent: 'Agent Wylie',
    artifact: 'TEST_STUBS.md + coverage recommendations',
    question: 'HOW TO VALIDATE',
    detail: `Wylie derives acceptance scenarios from the PRD, never the plan.
Then he inspects existing tests and recommends the smallest sufficient
proof: unit, component, integration, API E2E or browser E2E. An E2E
needs a real connection, a failure smaller tests miss, and a reuse
check. Runs in the PRD stop with no separate approval. QA later
checks evidence and prepares short human flows.`,
  },
  {
    name: 'build',
    agent: 'Agents Cho, Van Pelt, Jane, Rigsby',
    artifact: 'code + passing tests',
    question: 'THE CONSTRUCTION',
    extras: ['▸ --from-qa → fixes the QA report'],
    detail: `One bead per testable delivery. Background engineers use TDD and
Lisbon can review related changes together, with a verdict per bead.
Resume the original worker for fix-ups when possible. Migrations require
approved DB_CHANGES. --from-qa reuses current evidence and waits for
reviews likely to change the proof before confirming. Green final
checks start auto-verify.`,
  },
  {
    name: 'qa',
    agent: 'Agent Wylie',
    artifact: 'coverage evidence + selected E2E + QA_REPORT.md',
    question: 'BEHAVIOR PROOF',
    extras: ['▸ --generate-fixes-report → approve → --from-qa'],
    detail: `Checks assertions and current evidence for each behavior. Reuses
valid build results; smaller-test gaps return to engineers. Reuses,
extends or writes justified E2E and runs affected existing journeys,
including across features. Shared or uncertain impact broadens the
selection. Reports gaps, evidence and CI/runtime impact. Zero E2E and
zero screenshots can be valid. Useful screenshots stay readable at
1920x1080 within qa.maxScreenshots. --generate-fixes-report rebuilds
the report from evidence without reruns; unknown proof stays pending.
The report stops before the human walk. --from-qa confirms at the
right level, then refreshes the report using valid results.`,
  },
  {
    name: 'verify-work',
    agent: 'Agent Wylie + you',
    artifact: 'VERIFY.md (the QA tables, for you)',
    question: 'YOU REPLAY QA',
    detail: `One flow at a time. The chat is the QA report's Open, Data,
and Steps tables for grouped changed-experience flows. Screenshots
are optional; walks are labeled executed or prepared. No meaningful
human flow (for example backend-only work) goes to the normal close. A fix
described on a flow goes back to the PRD, then the flow runs again.
Flows already marked pass are not shown again. Close: 1 ready
PR, 2 draft PR, 3 close with no PR, 4 back to the PRD.`,
  },
  {
    name: 'fast',
    agent: 'Agent Lisbon',
    artifact: 'patched PRD + new increment + spine',
    question: 'FAST / BUGFIX LANE',
    detail: `Update lane under /hele. Investigate first. One question pack
when a rule would change, then patch the PRD, stub delta, new increment,
then plan, build, and auto-verify. A bugfix that leaves the rule text
alone does not stop to ask. A correction of the increment already in
play stays on that increment. Schema and security stay with Hightower
and Jane.`,
  },
  {
    name: 'tweak',
    agent: 'Agent Lisbon + one engineer',
    artifact: 'the edit, nothing else',
    question: 'TWEAK LANE',
    detail: `Copy, labels, typos, translations, colors, spacing: no rule, no
logic, no schema, no security. One engineer finds every place the old
text lives, edits it, updates tests that asserted it, and runs only the
checks that touch the changed files. A PRD or stub that quotes the old
text is rewritten in place, with no question pack. No new increment, no
plan, no beads, no Playwright, no QA report, no manual walk. A rule,
a condition, or a new field escalates to the Fast lane.`,
  },
  {
    name: 'fix-e2e',
    command: '/hele-fix-e2e',
    agent: 'Agent Wylie, with Rigsby for CI diagnosis',
    artifact: 'E2E_AUDIT.md',
    question: 'EXISTING SUITE AUDIT',
    detail: `Audits an existing E2E suite without changing tests or CI. Works
without Hele docs or initialization. Inspects assertions, boundaries,
existing smaller tests and CI costs. Recommends keep, consolidate,
replace, remove, optimize or investigate with linked evidence.
Every cut names surviving coverage or a prerequisite replacement.
Reports measured timing separately from estimates and unknowns;
never promises savings by adding parallel test durations. The output
is a ranked, reviewable report and an implementation sequence.
Applying the recommendations is a separate scoped request.`,
  },
  {
    name: 'run-report',
    command: '/hele-run-report',
    agent: 'Agent Lisbon',
    artifact: 'run report in chat',
    question: 'HOW HELE RAN THE BUILD',
    detail: `Run manually after a build to collect local Claude Code usage by
phase and model, compare a comparable baseline, and turn Beads, review
and QA evidence into a short list of experiments. The workflow and
project records stay unchanged. Save RUN_REPORT.md only on request.`,
  },
  {
    name: 'update',
    command: '/hele-update',
    agent: 'the harness',
    artifact: 'hele-skills@hele at the latest version',
    question: 'UPDATE',
    detail: `Refreshes the marketplace, then updates the installed plugin.
Reports the version before and after. A restart loads the new skills.
Does not touch the PRD or open a product lane.`,
  },
];

// ── box rendering ────────────────────────────────────────────────────────────
const INNER = 52; // content width inside the box

const tty = () => process.stdout.isTTY && !process.env.NO_COLOR;
const bold = (s) => (tty() ? `\x1b[1m${s}\x1b[0m` : s);
const dim = (s) => (tty() ? `\x1b[2m${s}\x1b[0m` : s);

function boxTop(left, right = '') {
  const raw = right
    ? `─ ${left} ${'─'.repeat(Math.max(1, INNER - left.length - right.length - 4))} ${right} ─`
    : `─ ${left} ${'─'.repeat(Math.max(1, INNER - left.length - 2))}─`;
  return ` ╭${raw}╮`;
}

function boxRow(text, style = (s) => s) {
  return ` │ ${style(text.padEnd(INNER))} │`;
}

function boxBottom() {
  return ` ╰${'─'.repeat(INNER + 2)}╯`;
}

// ── commands ─────────────────────────────────────────────────────────────────
export function aiCommand(skillName) {
  printBanner();

  if (skillName) {
    const skill = SKILLS.find((s) => s.name === skillName.replace(/^\/?(hele-)?/, ''));
    if (!skill) {
      console.error(`unknown skill "${skillName}" — try: ${SKILLS.map((s) => s.name).join(', ')}`);
      process.exit(1);
    }
    console.log(boxTop(skill.command ?? `/hele-${skill.name}`, skill.question));
    console.log(boxRow(skill.agent, bold));
    console.log(boxRow(`▸ ${skill.artifact}`, dim));
    for (const extra of skill.extras ?? []) console.log(boxRow(extra, dim));
    console.log(boxBottom());
    console.log('');
    for (const line of skill.detail.split('\n')) console.log(`  ${line}`);
    console.log('');
    return;
  }

  console.log(` ${dim('Agents have no memory — every feature leaves docs behind,')}`);
  console.log(` ${dim('so future sessions read instead of guessing.')}`);
  console.log('');
  console.log(FLOW_DIAGRAM);
  console.log('');
  console.log(boxTop('memory', ''));
  console.log(boxRow('living: PRD · TEST_STUBS · DATABASE'));
  console.log(boxRow('frozen: PLAN · DESIGN · DB_CHANGES · QA_REPORT · VERIFY'));
  console.log(boxBottom());
  console.log('');
  console.log(` ${dim('detail per skill:')} hele ai <name> ${dim('(e.g. hele ai plan)')}`);
}

export { SKILLS };
