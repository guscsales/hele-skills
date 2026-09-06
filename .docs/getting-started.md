# Getting Started

From zero to a shipped, documented, tested feature.

## Install

As a Claude Code plugin:

```bash
claude plugin marketplace add guscsales/hele-skills
claude plugin install hele-skills@hele
```

Optional but recommended — the `hele` CLI available everywhere:

```bash
cd cli && npm link        # from a clone of this repo
# once published: npm i -g hele-cli
```

## Initialize your project

```bash
/hele-init
```

This creates the harness folder (`.hele/` by default — you pick the name), asks how design works (a design system, none yet, or no design — Vega sits out), installs the sticky-lane session rule (so `/hele-fast`, `/hele-iterate`, and `/hele-yolo` keep running on follow-up prompts), and makes sure [beads](https://beads.gascity.com/) (`bd`) — the dependency-aware issue tracker the harness runs on — is installed. Run it once per project; it's idempotent and never overwrites. Already initialized? Re-run to fill the session rule if it's missing.

## Ship your first feature

The main flow is seven phases. Each one produces a document and asks for your approval. Typing `1` approves **and** starts the next phase in the same turn — you don't type a second command.

**1. Describe it** — `/hele-feature "customers can favorite products"`
Agent Hightower (PM) interviews you until scope and business rules are unambiguous, then writes the PRD: numbered rules (BR-n), mermaid flows (each with a short explanation and a Branch|Rule table), in/out of scope. He searches the feature index first — updating an existing feature beats duplicating it.

**2. Design it** — `/hele-design` (when new screens need it)
Agent Vega asks which design tool (Paper, Figma, or straight to code reference) and which devices, then specs every screen and state into a DESIGN_SPEC. If the feature reuses existing screens with no redesign, the FEATURE BRIEF skips this step and goes straight to `/hele-plan` (with a parenthetical noting why `/hele-design` will not run).

**3. Plan it** — `/hele-plan`
Agent Lisbon reads your actual codebase and writes the EXECUTION_PLAN: small dependency-ordered tasks, each with an owner agent, files, and a TDD definition of done. Every task becomes a beads issue. If the database is touched, Agent Red John writes DB_CHANGES — and your approval of it is blocking.

**4. Write the contract** — `/hele-stubs`
Agent Wylie derives plain-English Given/When/Then test stubs from the PRD (never from the plan). Every business rule gets covered, unhappy paths included. He also drafts VERIFY.md — the script for your guided manual check later.

**5. Build it** — `/hele-build`
The coordination loop: ready tasks dispatch to engineer agents in parallel (backend Cho, frontend Van Pelt, security Jane, infra Rigsby), TDD enforced, targeted tests only, Lisbon reviewing structure, Hightower checking PRD conformance. Blockers become questions to you immediately. Exit: full suite green.

**6. Validate it** — `/hele-qa`, then `/hele-verify-work`
Wylie turns the stubs into real Playwright e2e tests (installing Playwright if needed) and runs this increment's slice — not the living-file regression (that is CI). Failures are classified in a QA report and, with your approval, flow back via `/hele-build --from-qa`. Lisbon reviews each fix while Wylie confirms the affected specs; the next independent bug does not wait. Missing or stale report after a run already happened? `/hele-qa --generate-fixes-report` reconstructs it (no re-run) and opens the same gate. When automation is green, `/hele-verify-work` walks you through the main flows in the real app, step by step.

**7. Close it** — pick on the verify close gate
After verify: `1` runs `/hele-retro`, `2` freezes and closes without a retro, `3` starts `/hele-iterate`. Retro does not start itself. When you want the retro: root causes with evidence, lessons promoted to LEARNINGS.md — which every future skill loads.

## The shortcuts

- `/hele-status` — the board: every feature, doc versions, drift warnings, the next useful action.
- `/hele-fast "fix the empty-state message"` — small, low-risk changes ship with one artifact instead of four. Hard disqualifiers (schema, security, new flows) exit to the full cycle automatically. Type it once; every later prompt in that chat stays in the fast lane (same sub-agent, no beads) until you invoke a different `/hele-*`.
- `/hele-iterate` — already past build and you just found something you did not plan for. Agent Lisbon folds it back into the open increment (beads, PRD patch if the living doc would lie, stubs if the flow changed) and re-verifies only the affected surface. Complementary to `/hele-fast`, which starts a new small increment. Same stickiness: follow-ups stay in the iterate loop — you do not re-type the command.
- `/hele-yolo` — build first, paperwork after. Agent Lisbon conducts; the named hele agents (models from `settings.json`) ship on `YOLO:` beads. No PRD-first cycle. Say "that's it" to stop with no docs; say "let's formalize" for PRD, stubs, tests, review, optional draft PR. Type it once; every later prompt in that chat stays in the lane until you invoke a different `/hele-*`.
- **build until pass** — say `build til pass`, `build until pass`, `builda até passar`, or similar. Lisbon dispatches `[AGENT] Summer` to run the project compile/typecheck and fix until it exits 0. Not `/hele-build` (the increment loop). Works mid-iterate, mid-fast, mid-yolo, or on its own.
- `/clear` between phases — everything is saved on disk; a fresh context is cheaper. The reports tell you when it's safe.

The main chat is yours. Doing work (review, suite, artifacts) always runs in the background — you should never sit in a locked Thinking / Exploring / "Waiting for subagent" loop while Lisbon "just finishes the close". After a dispatch, the turn ends. Talk anytime. `/hele-fast` skips beads and resumes the same worker on follow-ups; the other lanes still track tasks in beads.

## What you end up with

```
.hele/
  settings.json            # models per agent, parallelism, design system paths
  index.json               # registry of every feature (the anti-duplicate gate)
  LEARNINGS.md             # memory promoted from retros
  features/<slug>/
    PRODUCT_DESCRIPTION.md # living PRD — markdown inside XML tags, patch versions
    TEST_STUBS.md          # living regression contract (QA runs the increment slice; CI the rest)
    increments/001-<name>/ # frozen per increment: plan, design, DB changes,
                           # QA report, verify record, retro
```

Documents a new team member — human or agent — can read and understand the product from.

Next: [Skills Reference](skills.md)
