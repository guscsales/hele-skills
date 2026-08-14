# Skills Reference

Every `/hele-*` command, in pipeline order. Each skill reports in chat with markdown tables (never box-drawing divider lines), ends with an explicit approval when a decision is yours, and always names the next command.

Jump to: [init](#hele-init) · [feature](#hele-feature) · [design](#hele-design) · [plan](#hele-plan) · [stubs](#hele-stubs) · [build](#hele-build) · [qa](#hele-qa) · [verify-work](#hele-verify-work) · [retro](#hele-retro) · [fast](#hele-fast) · [status](#hele-status) · [paper-to-code](#hele-paper-to-code)

## /hele-init

Bootstraps the harness in a project. Run once; idempotent — re-running reports state and fills gaps, never overwrites.

- Asks the harness folder name (`.hele` recommended; a custom name writes a `.helerc` pointer) and whether a design system exists.
- Creates `settings.json`, `index.json`, `state.json`, `LEARNINGS.md`, `features/`.
- Verifies the beads CLI (`bd`) and initializes its database. beads is the harness's task tracker — mandatory, not a choice.

## /hele-feature

Agent Hightower (PM) turns your idea into an approved PRODUCT_DESCRIPTION — or patches an existing one.

- **Anti-duplicate gate first:** searches the index (`hele find`) with your own words before creating anything. Matches found → you decide: update or genuinely new.
- Interviews you in short rounds (max 4 questions each) until scope and business rules are unambiguous.
- Writes the PRD: WHAT/WHY, numbered business rules (each `BR-n` as a heading with prose — tables for matrices), named mermaid flows, in/out of scope, glossary. XML section tags stay so agents can find sections; the markdown inside is for you. Technical hints you drop go to NOTES.md for the planner — the PRD stays pure product.
- Living document: patch versions only (1.0 → 1.1), written as current state, superseded rules rewritten not appended. A ground-up rebuild is a new feature folder, never a major bump.
- Suggests the [fast lane](#hele-fast) when your request smells small.

## /hele-design

Agent Vega (UI/UX) turns an approved PRD into a DESIGN_SPEC for the increment.

- Two mandatory questions before any design work: which tool (Paper / Figma / other / code reference) and which devices (mobile / desktop / tablet).
- Primes `.hele/DESIGN_SYSTEM.md` once from your configured design-system paths — the project's design memory.
- Specs every screen with all applicable states (default, loading, empty, error, success) per device. Components reused from the design system; NEW components flagged, never silent.
- `tool: paper`/`figma` → creates real artboards and records their ids. `code-reference` → a written layout precise enough to implement without asking.

## /hele-plan

Agent Lisbon (Staff Engineer) writes the EXECUTION_PLAN — how to build the increment, grounded in your real codebase.

- Reads the actual code, your conventions, NOTES.md, and LEARNINGS.md before planning. The plan cites real files.
- Small dependency-ordered tasks, each with an owner agent, files, and a TDD definition of done. Every task becomes a beads issue; ids are written back into the plan, making builds resumable.
- **Database gate:** any task touching schema, indexes, migrations, or production data brings in Agent Red John (DBA). He writes DB_CHANGES.md — current vs proposed schema, rollback plan, risks — and its approval is SEPARATE and BLOCKING: the plan cannot be approved while DB_CHANGES is a draft.
- **Paper/Figma gate:** an approved DESIGN_SPEC with `tool: paper` or `tool: figma` requires a `<paper-to-code>` / `<figma-to-code>` section and Van Pelt task descriptions that start with the exact artboard ids. Pixels come from the design tool (`get_jsx`); plan prose is behavior and structure only.
- Frozen after the build — per-increment history, not a living doc.

## /hele-stubs

Agent Wylie (QA) writes the feature's test contract from the PRD — deliberately blind to the implementation plan.

- Plain-English Given/When/Then stubs, one per testable behavior. Every BR-n maps to at least one stub; unhappy paths (limits, permissions, empty states) included.
- Stable TS-nnn ids, tagged with increment and rule. The file is living: stubs accumulate across increments into a regression contract.
- Also drafts `VERIFY.md` — the 3–8 main human flows for your guided verification later.
- Behavior only: a stub naming a component, endpoint, or table is wrong by definition.

## /hele-build

The coordination loop — Agent Hightower (PRD conformance) + Agent Lisbon (dispatch, structural review) driving the engineer agents through the plan.

- `bd ready` → dispatches up to `maxParallel` tasks to engineer subagents (backend Cho, frontend Van Pelt, security Jane, infra Rigsby), each with its persona, task, relevant PRD rules, and learnings.
- **File-overlap guard:** tasks sharing a declared file never run in parallel.
- **Test economy:** engineers iterate red→green on their task's unit files only; expensive suites (containers, migrations) run once per task; the FULL suite runs exactly once, at the end.
- **DB gate enforced:** migration tasks don't dispatch without an approved DB_CHANGES, and Red John checks the written migration against it before the task closes.
- Blockers and product ambiguities become questions to you immediately; work continues on other tasks meanwhile.
- Resumable: interrupted sessions pick up from beads state.

### /hele-build --from-qa

A fix round, not a plan round. Scope = only the open `QA:` beads tasks plus the contract decisions you made at the QA gate. Each engineer's dispatch carries the QA report's narrative — they fix the contract violation, not the symptom. Exits back to `/hele-qa` for the confirming re-run.

## /hele-qa

Agent Wylie turns the stubs into real Playwright e2e tests and runs the whole suite. AI touches a browser exactly once per stub — while writing its deterministic test. After that, the suite is free forever.

- Playwright missing → installs and configures it (packages, browsers, config with `webServer`, `e2e/` folder, `test:e2e` script). No questions asked.
- One test per stub, `TS-nnn` in the title — the link between suite and contract. Always headless; failures explain themselves through traces and screenshots.
- Runs the ENTIRE suite — all increments, regression included — echoing one line per stub live.
- **Failures are classified**, and the class decides the route: `product-bug` → beads task for the build; `contract-question` (stub and product disagree) → your decision; `polish` → your now-or-backlog call; `blocked` → what you must unblock.
- Writes `QA_REPORT.md` in the increment after every run — prose in product terms, no code. Red runs end in an approval gate; contract-questions must be decided before fixes dispatch.

### /hele-qa --generate-fixes-report

The run already happened but the report is missing (older version, interrupted session)? Reconstructs QA_REPORT.md from stub statuses, open beads tasks, and Playwright traces — without re-running the suite — then presents the same approval gate.

## /hele-verify-work

Guided human verification. Automation proves the rules; your eyes catch what code can't.

- Loads the increment's VERIFY.md (drafted at stub time): 3–8 main human flows with numbered steps and expected results.
- Preps the ground — app running, logins and test data listed — then walks you through one flow at a time. You act, you report; Wylie records every verdict verbatim.
- Issues triage on the spot: bug → beads task; behavior-change request → PRD note (behavior never changes silently in code).
- Stop anytime — partial runs keep their record and resume from the first pending flow.

## /hele-retro

Closes the increment with evidence, not vibes.

- What went well, what must improve, root causes dug past the symptom.
- Lessons worth keeping are promoted to `.hele/LEARNINGS.md` with stable L-nnn ids — every skill loads that file at start, so retros actually change future behavior.
- Freezes the increment's documents and closes the beads epic.

## /hele-fast

The fast lane: small, low-risk changes with proportional ceremony — one artifact (FAST.md) instead of four.

- **Triage with hard disqualifiers:** touches DB schema, security surface (auth/payments/PII), introduces a new user-facing flow, or has cross-feature impact → refused and routed to the full cycle. Deliberately no file-count limit.
- Classifies the change: bugfix (docs stay untouched) vs behavior change (the PRD rule and stubs are patched — living docs never lie, no matter the lane).
- 1–3 beads tasks, TDD build with the same discipline as `/hele-build`, full suite once, affected e2e specs re-run.
- FAST.md records what/why, files, tests, memory sync, and evidence.

## /hele-status

The read-only board. Every feature with its doc versions and status, STALE drift flags (a plan written against an older PRD), active increment progress from beads, and the single most useful next action. Changes nothing.

## /hele-paper-to-code

Pixel-perfect rebuild of UI from Paper artboards into your codebase — the method Agent Van Pelt follows when a DESIGN_SPEC says `tool: paper`. Five mandatory phases: extract & validate (raw `get_jsx`, rendered and compared before any transformation), make it work (merge mobile+desktop), make it right (tokens, project components), browser verify, final review.

Next: [CLI Reference](cli.md)
