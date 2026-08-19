import { printBanner } from './banner.js';
import { FLOW_DIAGRAM } from './flow-diagram.js';

const SKILLS = [
  {
    name: 'init',
    agent: 'the harness',
    artifact: '.hele/ skeleton',
    question: 'SETUP',
    detail: `Bootstraps the harness in a project: creates .hele/ (settings.json,
index.json, state.json, LEARNINGS.md, features/), asks about your design
system, and makes sure the beads CLI (bd) is installed and initialized.
Idempotent — safe to re-run, never overwrites.`,
  },
  {
    name: 'feature',
    agent: 'Agent Hightower',
    artifact: 'PRODUCT_DESCRIPTION.md',
    question: 'WHAT & WHY',
    detail: `Agent Hightower (PM) interviews you until scope and business rules
are unambiguous, then writes (or patches) the PRD: what the feature is, why
it exists, numbered business rules (each BR-n as a heading with prose),
named mermaid flows (each with a short explanatory paragraph and a
Branch|Rule table of the BR-n ids that diagram covers), in/out of scope.
Markdown inside stable XML section tags — humans read it in preview, agents
still find <business-rules>. Guards the anti-duplicate gate: searches the
index before creating anything. The PRD is a LIVING doc — written as current
state, patch versions only. Your technical hints go to NOTES.md for Agent
Lisbon; the PRD stays pure product.`,
  },
  {
    name: 'design',
    agent: 'Agent Vega',
    artifact: 'DESIGN_SPEC.md',
    question: 'HOW IT LOOKS',
    detail: `Agent Vega (UI/UX) asks two mandatory questions first: which design
tool (Paper / Figma / other / straight to code reference) and which devices
(mobile / desktop / tablet). Then she maps your design system into
DESIGN_SYSTEM.md (once) and specs every screen of the increment: states,
components reused from the DS, NEW components flagged, artboard links — or
a written layout when no tool was chosen. Skipped when the FEATURE BRIEF
decides no new screens need design (option 1 goes to /hele-plan instead).
Agent Van Pelt implements from this, never invents.`,
  },
  {
    name: 'plan',
    agent: 'Agent Lisbon',
    artifact: 'EXECUTION_PLAN.md + beads',
    question: 'HOW TO BUILD',
    detail: `Agent Lisbon (Staff Engineer) reads the real codebase, your
conventions, and LEARNINGS.md before planning. The plan cites real files:
current state, chosen approach, and small dependency-ordered tasks — each
with an owner agent, files, and a TDD definition of done. Every task becomes
a beads issue; the issue ids are written back into the plan, which makes
builds resumable. Per-increment and disposable: it freezes after the build.
Tasks touching the database bring in Agent Red John (DBA): he writes
DB_CHANGES.md — current vs proposed schema, rollback, risks — and your
approval of it is BLOCKING before the plan can be approved.`,
  },
  {
    name: 'stubs',
    agent: 'Agent Wylie',
    artifact: 'TEST_STUBS.md',
    question: 'HOW TO VALIDATE',
    detail: `Agent Wylie (QA) derives plain-English Given/When/Then stubs from
the PRD only (never from the plan — behavior, not implementation). Every
business rule maps to at least one stub, unhappy paths included. Stable
TS-nnn ids. The file is the LIVING regression contract: stubs accumulate
across increments and /hele-qa always runs the whole suite.`,
  },
  {
    name: 'build',
    agent: 'Agents Cho, Van Pelt, Jane, Rigsby',
    artifact: 'code + passing tests',
    question: 'THE CONSTRUCTION',
    extras: ['▸ --from-qa → fixes the QA report'],
    detail: `The coordination loop: bd ready → dispatch Agent Cho (backend),
Agent Van Pelt (frontend), Agent Jane (security), Agent Rigsby (infra) in
parallel on ready tasks, TDD enforced, Agent Lisbon reviews structure,
Agent Hightower checks PRD conformance. Blockers become questions to you
immediately. Migrations only run against an approved DB_CHANGES, and Agent
Red John checks the written migration against it before the task closes.
Exit condition: the full automated suite is green. Resumable via beads
state.

/hele-build --from-qa is a FIX round, not a plan round: scope = open QA:
beads tasks + contract decisions from the QA gate. Engineers fix the
contract violation (report narrative in the prompt), then ▶ NEXT: /hele-qa
to confirm.`,
  },
  {
    name: 'qa',
    agent: 'Agent Wylie',
    artifact: 'Playwright e2e suite',
    question: 'SECOND LAYER',
    extras: ['▸ --generate-fixes-report → approve → --from-qa'],
    detail: `Agent Wylie turns the stubs into real Playwright tests — one test
per stub, TS-nnn in the title, deterministic by construction. Missing
Playwright? He installs and configures it. Then he runs the ENTIRE suite,
regression included, updates every stub's status in the file, classifies
failures into QA_REPORT.md, and (on red) runs the approval gate →
/hele-build --from-qa. AI touches the browser once — while writing the
test; after that the suite is free forever.

/hele-qa --generate-fixes-report: the run already happened but the report
is missing or stale — reconstruct QA_REPORT from stub statuses, beads, and
traces (no re-run), then the same approval gate back to build.`,
  },
  {
    name: 'verify-work',
    agent: 'Agent Wylie + you',
    artifact: 'VERIFY.md',
    question: 'HUMAN EYES',
    detail: `Automation proves the rules; your eyes catch what code can't.
Wylie distills the increment's main flows (3–8 human journeys, not one per
stub) into VERIFY.md, preps the app and test data, then walks you through
it step by step — you act, you report, he records every verdict verbatim.
Issues become beads tasks (bugs) or PRD notes (behavior changes). Partial
runs keep their record and resume where you stopped.`,
  },
  {
    name: 'retro',
    agent: 'Agent Hightower',
    artifact: 'RETRO.md + LEARNINGS.md',
    question: 'WHAT TO IMPROVE',
    detail: `Closes the increment with evidence, not vibes: what went well, what
must improve, root causes dug past the symptom. Lessons worth keeping are
promoted to .hele/LEARNINGS.md with stable L-nnn ids — every skill loads
that file at start, so retros actually change future behavior.`,
  },
  {
    name: 'fast',
    agent: 'Agents Hightower & Lisbon',
    artifact: 'FAST.md (one artifact)',
    question: 'THE FAST LANE',
    detail: `Small, low-risk change? The fast lane ships it with proportional
ceremony: triage (hard disqualifiers: DB schema, security surface, new
user-facing flow, cross-feature impact — any of those exits to the full
flow), a 1–3 task micro-plan in beads, TDD build, memory sync (a behavior
change still patches the PRD and stubs — living docs never lie), full test
suite once, affected stubs in the browser, and a single FAST.md instead of
four documents. /hele-feature suggests it automatically when a request
smells fast-lane sized.`,
  },
  {
    name: 'status',
    agent: 'the harness',
    artifact: 'read-only board',
    question: 'WHERE ARE WE',
    detail: `Reads index, state, doc frontmatter, and beads counts. Shows every
feature's doc versions, STALE drift (a plan written against an older PRD),
active increment progress, and the single most useful next action.`,
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
  console.log(boxRow('living: PRD · TEST_STUBS · DATABASE · LEARNINGS'));
  console.log(boxRow('frozen: PLAN · DESIGN · DB_CHANGES · VERIFY · RETRO'));
  console.log(boxBottom());
  console.log('');
  console.log(` ${dim('detail per skill:')} hele ai <name> ${dim('(e.g. hele ai plan)')}`);
}

export { SKILLS };
