// Canonical harness flow diagram. Printed by `hele ai` and mirrored in README.md.
// If you change this, update README.md "The flow" in the same change — see .agents/RULES.md.

export const FLOW_DIAGRAM = `
 ╭─ You ──────────────────────────────────────── START ─╮
 │ /hele-yolo "what you need"                           │
 │ One command. It picks the lane and runs the rest.    │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ It detects the lane ────────────────────────────────╮
 │ Feature   questions, then PRD + stubs + 001          │
 │ Fast      questions when a rule would change         │
 │ Bugfix    questions only when the rule changes       │
 │ Open      research, review, investigation, design    │
 ╰──────────────────────────────────────────────────────╯
    │  feature / fast / bugfix — yolo runs these
    ▼
 ╭─ questions ─────────────────────────────────── STOP ─╮
 │ Agent Hightower                                      │
 │ ▸ answer every product question before a write       │
 │ ▸ a recommendation is an option, not a rule          │
 ╰──────────────────────────────────────────────────────╯
    │  zero unanswered product questions
    ▼
 ╭─ PRD + stubs ──────────────────────────── SAME STOP ─╮
 │ Agent Hightower + Agent Wylie                        │
 │ ▸ PRODUCT_DESCRIPTION.md + TEST_STUBS.md             │
 │ ▸ PRD delta: was → now, full PWD paths               │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ design (only if new screens) ──────────────── STOP ─╮
 │ Agent Vega · skipped when no new screens / no design │
 │ ▸ DESIGN_SPEC.md                                     │
 ╰──────────────────────────────────────────────────────╯
    │  approved PRD, and design when this stop happened
    ▼
 ╭─ agents ─────────── plan · build · auto-verify ──────╮
 │ Lisbon · EXECUTION_PLAN.md + beads · no sign-off     │
 │ Cho, Van Pelt, Jane, Rigsby · code + passing tests   │◄──┐
 │ Wylie · Playwright + screenshots + QA_REPORT.md      │   │
 ╰──────────────────────────────────────────────────────╯   │
    │ green                                                 │
    │     ╭─ QA red / generate-fixes-report ───────────╮    │
    │     │ approve fixes → build + auto-verify again  │────┘
    │     ╰────────────────────────────────────────────╯
    ▼
 ╭─ manual verify ─────────────── YOUR NEXT PROMPT ─────╮
 │ Agent Wylie + you                                    │
 │ ▸ same steps + data from QA_REPORT → VERIFY.md       │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ close ────────────────────────────────────────────╮
 │ Options: Work done · iterate · draft PR            │
 │ Findings written during the talk → findings.json   │
 ╰────────────────────────────────────────────────────╯

 ╭─ always ───────────────────────────────────────────╮
 │ First time in a repo → init runs by itself         │
 │ Stops: questions, PRD, design, DB schema,          │
 │ QA red, verify, close. The plan is for agents.     │
 │ Open lane stays a conversation until formalize     │
 │ /hele-status — the board (read-only)               │
 ╰────────────────────────────────────────────────────╯
`.replace(/^\n/, '').replace(/\n$/, '');
