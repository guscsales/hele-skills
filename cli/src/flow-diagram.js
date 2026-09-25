// Canonical harness flow diagram. Printed by `hele ai` and mirrored in README.md.
// If you change this, update README.md "The flow" in the same change — see .agents/RULES.md.

export const FLOW_DIAGRAM = `
 ╭─ You ──────────────────────────────────────── START ─╮
 │ /hele-yolo "what you need"                           │
 │ One command. It picks the lane and runs the rest.   │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ It detects the lane ────────────────────────────────╮
 │ Feature   new PRD + stubs + increment 001            │
 │ Fast      patch the PRD + a new increment            │
 │ Bugfix    patch the PRD + a new increment            │
 │ Open      research, review, investigation, design    │
 ╰──────────────────────────────────────────────────────╯
    │  feature / fast / bugfix — yolo runs these
    ▼
 ╭─ PRD + stubs ─────────────────────────── SAME STOP ─╮
 │ Agent Hightower + Agent Wylie                        │
 │ ▸ PRODUCT_DESCRIPTION.md + TEST_STUBS.md             │
 │ ▸ PRD delta: New vs Added (full PWD paths)           │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ design (only if new screens) ───────────────────────╮
 │ Agent Vega · skipped when no new screens / no design │
 │ ▸ DESIGN_SPEC.md                                     │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ plan ───────────────────────────────────────────────╮
 │ Agent Lisbon                                         │
 │ ▸ EXECUTION_PLAN.md + beads                          │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ build ──────────────────────────────────────────────╮
 │ Agents Cho, Van Pelt, Jane, Rigsby                   │◄──┐
 │ ▸ code + passing tests                               │   │
 │ ▸ from-qa → fixes the QA report                      │   │
 ╰──────────────────────────────────────────────────────╯   │
    │                                                       │
    ▼                                                       │
 ╭─ QA ─────────────────────────── SCREENSHOT PROOF ─╮      │
 │ Agent Wylie                                       │      │
 │ ▸ Playwright + screenshots + QA_REPORT.md         │──┐   │
 ╰───────────────────────────────────────────────────╯  │   │
    │                                                   │   │
    │     ╭─ QA generate-fixes-report ──────────────╮   │   │
    │     │ reconstruct QA_REPORT → approve fixes   │◄──┘   │
    │     ╰──────────────────┬──────────────────────╯       │
    │                        └──────────────────────────────┘
    ▼
 ╭─ verify ────────────────────────── YOU REPLAY QA ─╮
 │ Agent Wylie + you                                  │
 │ ▸ same steps + data from QA_REPORT → VERIFY.md     │
 ╰────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ close ────────────────────────────────────────────╮
 │ Options: Work done · iterate · draft PR            │
 │ Findings written during the talk → findings.json   │
 ╰────────────────────────────────────────────────────╯

 ╭─ always ───────────────────────────────────────────╮
 │ First time in a repo → init runs by itself         │
 │ Every stop ends with numbered options              │
 │ Open lane stays a conversation until formalize     │
 │ /hele-status — the board (read-only)               │
 ╰────────────────────────────────────────────────────╯
`.replace(/^\n/, '').replace(/\n$/, '');
