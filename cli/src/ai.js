import { printBanner } from './banner.js';
import { FLOW_DIAGRAM } from './flow-diagram.js';

const SKILLS = [
  {
    name: 'yolo',
    agent: 'Agent Lisbon',
    artifact: 'lane → phase skills behind Options',
    question: 'THE CONDUCTOR',
    detail: `The only entry point for product work. Auto-inits when .hele/ is
missing. Detects Feature / Fast / Bugfix / Open, prints a Lane table,
and runs the phase skills. Every stop ends in numbered Options (Approve,
Tell me what you need, Work done, Let's formalize). Stubs ship with the
PRD; QA writes screenshots into a human-readable QA_REPORT; verify
replays that report; findings.json is written during the talk. Paths in
chat are always the full PWD. Type it once — follow-ups stay sticky.`,
  },
  {
    name: 'init',
    agent: 'the harness',
    artifact: '.hele/ skeleton + findings.json',
    question: 'SETUP',
    detail: `Bootstraps the harness: creates .hele/ (settings.json, index.json,
state.json, LEARNINGS.md, findings.json, features/), installs the sticky
session rule so /hele-yolo stays in force for follow-ups, asks how design
works, and makes sure beads (bd) is installed. Idempotent. When
/hele-yolo finds no .hele/, it runs this automatically and continues the
ask — you do not type /hele-init first.`,
  },
  {
    name: 'feature',
    agent: 'Agent Hightower',
    artifact: 'PRODUCT_DESCRIPTION.md + TEST_STUBS.md',
    question: 'WHAT & WHY',
    detail: `Agent Hightower interviews until scope and business rules are
unambiguous, then writes (or patches) the PRD and dispatches Wylie for
stubs in the SAME stop. Emits a PRD delta (New vs Added) with absolute
paths. Guards the anti-duplicate gate. Option 1 → design or plan.
Normally started by /hele-yolo Feature lane or Let's formalize.`,
  },
  {
    name: 'design',
    agent: 'Agent Vega',
    artifact: 'DESIGN_SPEC.md',
    question: 'HOW IT LOOKS',
    detail: `Agent Vega asks which design tool and devices, then specs every
screen of the increment. Skipped when no new screens need design or
designSystem.enabled is false. Started by yolo after PRD+stubs approval
when screens are new.`,
  },
  {
    name: 'plan',
    agent: 'Agent Lisbon',
    artifact: 'EXECUTION_PLAN.md + beads',
    question: 'HOW TO BUILD',
    detail: `Agent Lisbon reads the real codebase and LEARNINGS.md before
planning. Small dependency-ordered tasks with owner agents and TDD done
criteria become beads issues. Database tasks bring in Agent Red John —
DB_CHANGES approval is BLOCKING.`,
  },
  {
    name: 'stubs',
    agent: 'Agent Wylie',
    artifact: 'TEST_STUBS.md',
    question: 'HOW TO VALIDATE',
    detail: `Agent Wylie derives Given/When/Then stubs from the PRD only
(never from the plan). Runs inside the Feature / Fast stop with the PRD —
not a separate command under /hele-yolo. Does not draft VERIFY.md; QA
builds the human replay from the QA report.`,
  },
  {
    name: 'build',
    agent: 'Agents Cho, Van Pelt, Jane, Rigsby',
    artifact: 'code + passing tests',
    question: 'THE CONSTRUCTION',
    extras: ['▸ --from-qa → fixes the QA report'],
    detail: `Coordination loop: bd ready → background engineer agents, TDD,
Lisbon shape review in parallel, Hightower PRD conformance. Migrations
only against approved DB_CHANGES. --from-qa is a FIX round from the QA
report, then back to QA for the increment slice.`,
  },
  {
    name: 'qa',
    agent: 'Agent Wylie',
    artifact: 'Playwright + screenshots + QA_REPORT.md',
    question: 'SCREENSHOT PROOF',
    extras: ['▸ --generate-fixes-report → approve → --from-qa'],
    detail: `Turns stubs into Playwright tests for THIS INCREMENT only. Saves
a screenshot per stub under increments/.../screenshots/. Writes a
human-readable QA_REPORT.md (no XML) with setup, data, steps, expected
vs happened, and images. Chat uses full PWD paths. Green → verify;
red → Options → build --from-qa.`,
  },
  {
    name: 'verify-work',
    agent: 'Agent Wylie + you',
    artifact: 'VERIFY.md (replay of QA_REPORT)',
    question: 'YOU REPLAY QA',
    detail: `Walks you through the same steps and data from QA_REPORT.md,
showing the screenshot of what pass looked like. Close Options: Work
done, iterate, draft PR — no retro. Findings are written during the
/hele-yolo session, not at this gate.`,
  },
  {
    name: 'retro',
    agent: 'session findings',
    artifact: 'findings.json + LEARNINGS.md',
    question: 'DURING THE TALK',
    detail: `Not a close-gate command. /hele-yolo appends .hele/findings.json
when you correct it or name a preference, and promotes durable lessons
to LEARNINGS.md. Invoking /hele-retro only reconciles what is already
on disk.`,
  },
  {
    name: 'fast',
    agent: 'Agents Hightower & Lisbon',
    artifact: 'patched PRD + new increment + spine',
    question: 'FAST / BUGFIX LANE',
    detail: `Update lane under /hele-yolo: find the PRD, patch when needed,
stub delta, new increment, then plan → build → QA → verify. Beads on.
Schema and security stay with Red John / Jane gates — not a bounce to
another command.`,
  },
  {
    name: 'iterate',
    agent: 'Agent Lisbon',
    artifact: 'beads on the open increment',
    question: 'THE ITERATE LOOP',
    detail: `Late find after build. Lisbon classifies and dispatches the
changed slice via beads. Still under the /hele-yolo sticky session when
picked from Options. New stubs → QA; else verify.`,
  },
  {
    name: 'cut',
    agent: 'Agent Spielberg',
    artifact: 'picture now · CUT.md from the work',
    question: 'THE CUT LANE',
    detail: `Video lane (separate from the product conductor). Spielberg
conducts; Kahn edits on CUT: beads. Not routed from /hele-yolo.`,
  },
  {
    name: 'long-video-edit',
    agent: 'Agent Spielberg',
    artifact: 'Tella cut · chapters · LONG.md from the work',
    question: 'THE LONG-FORM LANE',
    detail: `Tella long-form playbook on the cut bench. Not routed from
/hele-yolo.`,
  },
  {
    name: 'status',
    agent: 'the harness',
    artifact: 'read-only board',
    question: 'WHERE ARE WE',
    detail: `Reads index, state, doc frontmatter, beads, and findings counts.
Shows versions, STALE drift, and the single most useful next action.`,
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
    console.log(boxTop(`/hele-${skill.name}`, skill.question));
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
  console.log(boxRow('living: PRD · TEST_STUBS · DATABASE · LEARNINGS · findings'));
  console.log(boxRow('frozen: PLAN · DESIGN · DB_CHANGES · QA_REPORT · VERIFY'));
  console.log(boxBottom());
  console.log('');
  console.log(` ${dim('detail per skill:')} hele ai <name> ${dim('(e.g. hele ai yolo)')}`);
}

export { SKILLS };
