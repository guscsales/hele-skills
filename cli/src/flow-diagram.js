// Canonical harness flow diagram. Printed by `hele ai` and mirrored in README.md.
// If you change this, update README.md "The flow" in the same change — see AGENTS.md.

export const FLOW_DIAGRAM = `
 ╭─ You ──────────────────────────────────────── START ─╮
 │ /hele "what you need"                                │
 │ One command. It picks the lane and runs the rest.    │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ It detects the lane ────────────────────────────────╮
 │ Feature   questions, then PRD + stubs + 001          │
 │ Fast      questions when a rule would change         │
 │ Bugfix    questions only when the rule changes       │
 │ Tweak     copy/style only: no PRD, plan or QA        │
 │ Open      research, review, investigation, design    │
 ╰──────────────────────────────────────────────────────╯
    │  feature / fast / bugfix — /hele runs these
    │  tweak: one engineer, related checks only → close
    ▼
 ╭─ questions ─────────────────────────────────── STOP ─╮
 │ Agent Lisbon                                         │
 │ ▸ investigate first; ask only what files cannot      │
 │ ▸ 1 accept all · 2 one by one · 3 reply in words     │
 │ ▸ a recommendation is an option, not a rule          │
 ╰──────────────────────────────────────────────────────╯
    │  zero unanswered product questions
    ▼
 ╭─ PRD + stubs ──────────────────────────── SAME STOP ─╮
 │ Agent Lisbon + Agent Wylie                           │
 │ ▸ PRODUCT_DESCRIPTION.md + TEST_STUBS.md             │
 │ ▸ behavior first, then coverage recommendations     │
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
 │ Wylie · coverage review + justified E2E journeys    │   │
 │ ▸ reuse build evidence; run affected regressions    │   │
 │ ▸ gaps → owning engineer; optional screenshots      │   │
 ╰──────────────────────────────────────────────────────╯   │
    │ report ready                                          │
    │     ╭─ QA red / generate-fixes-report ───────────╮    │
    │     │ approve fixes → build + auto-verify again  │────┘
    │     ╰────────────────────────────────────────────╯
    ▼
 ╭─ QA report ─────────────────── YOUR NEXT PROMPT ─────╮
 │ Evidence + CI impact; continue or fix gaps/bugs      │
 ╰──────────────────────────────────────────────────────╯
    │ continue
    ▼
 ╭─ manual verify ──────────────────────────────────────╮
 │ Agent Wylie + you                                    │
 │ ▸ tables: how to open, the data, each step           │
 │ ▸ QA_REPORT → short flows in VERIFY.md               │
 │ ▸ no human flow applies → normal close              │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ close ────────────────────────────────────────────╮
 │ 1 ready PR · 2 draft PR · 3 close, no PR           │
 │ 4 back to the PRD                                  │
 ╰────────────────────────────────────────────────────╯

 ╭─ existing-suite audit (standalone) ─────────────────╮
 │ /hele-fix-e2e → Wylie → E2E_AUDIT.md               │
 │ Keep / replace / remove / optimize, with evidence  │
 │ Audit writes a report; no tests or CI changed      │
 ╰────────────────────────────────────────────────────╯

 ╭─ always ───────────────────────────────────────────╮
 │ Product work in a new repo → init runs itself     │
 │ Stops: questions, PRD, design, DB schema,          │
 │ QA report, verify, close. Plan is for agents.      │
 │ A verify fix goes back to the PRD phase            │
 │ Flow runs again. Passed walks stay passed          │
 │ Open lane stays a conversation until formalize     │
 ╰────────────────────────────────────────────────────╯
`.replace(/^\n/, '').replace(/\n$/, '');
