// Canonical harness flow diagram. Printed by `hele ai` and mirrored in README.md.
// If you change this, update README.md "The flow" in the same change — see .agents/RULES.md.

export const FLOW_DIAGRAM = `
 ╭─ Human idea ───────────────────────────────── START ─╮
 │ You bring the input; the agents own the middle.      │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-feature ───────────────────────── WHAT & WHY ─╮
 │ Agent Hightower                                      │
 │ ▸ PRODUCT_DESCRIPTION.md                             │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-design ──────────────────────── HOW IT LOOKS ─╮
 │ Agent Vega · skip when no new screens                │
 │ ▸ DESIGN_SPEC.md                                     │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-plan ────────────────────────── HOW TO BUILD ─╮
 │ Agent Lisbon                                         │
 │ ▸ EXECUTION_PLAN.md + beads                          │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-stubs ────────────────────── HOW TO VALIDATE ─╮
 │ Agent Wylie                                          │
 │ ▸ TEST_STUBS.md                                      │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-build ───────────────────── THE CONSTRUCTION ─╮
 │ Agents Cho, Van Pelt, Jane, Rigsby                   │◄──┐
 │ ▸ code + passing tests                               │   │
 │ ▸ --from-qa → fixes the QA report                    │   │
 ╰──────────────────────────────────────────────────────╯   │
    │                                                       │
    ▼                                                       │
 ╭─ /hele-qa ──────────────────── SECOND LAYER ─╮           │
 │ Agent Wylie                                  │           │
 │ ▸ Playwright e2e suite                       │──┐        │
 ╰──────────────────────────────────────────────╯  │        │
    │                                              │        │
    │     ╭─ /hele-qa --generate-fixes-report ─╮   │        │
    │     │ reconstruct QA_REPORT → approve    │◄──┘        │
    │     ╰──────────────────┬─────────────────╯            │
    │                        └──────────────────────────────┘
    ▼
 ╭─ /hele-verify-work ───────────────────── HUMAN EYES ─╮
 │ Agent Wylie + you                                    │
 │ ▸ VERIFY.md                                          │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-retro ────────────────────── WHAT TO IMPROVE ─╮
 │ Agent Hightower                                      │
 │ ▸ RETRO.md + LEARNINGS.md                            │
 ╰──────────────────────────────────────────────────────╯

 ╭─ anytime ────────────────────────────────────────────╮
 │ /hele-init    bootstraps .hele/ (run once)           │
 │ /hele-status  the board: versions, drift, next       │
 │ /hele-fast    small low-risk change, one artifact    │
 ╰──────────────────────────────────────────────────────╯
`.replace(/^\n/, '').replace(/\n$/, '');
