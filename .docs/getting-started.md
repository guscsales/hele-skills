# Getting Started

From zero to a shipped, documented, tested feature — with one command.

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

## Initialize (or just start)

You can type `/hele-init` once, or skip it: the first `/hele-yolo` in a repo that has no `.hele/` runs init by itself (folder name, design question, beads), then continues your ask.

Init creates the harness folder (`.hele/` by default), `findings.json`, installs the sticky session rule so `/hele-yolo` stays in force for follow-ups, and makes sure [beads](https://beads.gascity.com/) (`bd`) is installed. Idempotent — never overwrites.

## Ship with one command

```bash
/hele-yolo "customers can favorite products"
```

Lisbon detects the lane and runs the phase skills. You never type `/hele-feature`, `/hele-stubs`, `/hele-plan`, … for the pipeline. Every stop ends in numbered options:

| # | Typical meaning |
|---|---|
| 1 | Approve — and that starts the next phase in the same turn |
| 2 | Tell me what you need (or Let's formalize on close / open lane) |
| 3+ | Extras for that stop |

**Lanes**

- **Feature** — product does not do this today → new PRD + stubs (same stop) + increment `001` → design if needed → plan → build → QA (screenshots) → you replay the QA steps.
- **Fast / Bugfix** — small addition or wrong behavior → patch PRD + stub delta + new increment → same spine. Schema and security stay in the lane with their gates.
- **Open** — research, PR review, investigation, design explore → no PRD until you pick **Let's formalize**.

Paths in chat are always the full working-directory path. A PRD change always prints what is **New** vs **Added**, grouped by PRD.

**Close options:** Work done · fold a late find back in (iterate) · draft PR. Findings are written during the talk into `.hele/findings.json` — there is no separate retro command to remember.

## Also useful

- `/hele-status` — the board: every feature, doc versions, drift, next action.
- **build until pass** — say `build til pass` / `builda até passar`. Lisbon dispatches `[AGENT] Summer` for the project compile. Not the increment build loop.
- `/clear` between phases when a report says it is safe — everything is on disk.

The main chat is yours. Doing work always runs in the background. After a dispatch, the turn ends. Talk anytime.

## What you end up with

```
.hele/
  settings.json
  index.json
  LEARNINGS.md
  findings.json
  features/<slug>/
    PRODUCT_DESCRIPTION.md
    TEST_STUBS.md
    increments/001-<name>/
      EXECUTION_PLAN.md, DESIGN_SPEC.md?, DB_CHANGES.md?
      QA_REPORT.md, screenshots/, VERIFY.md
```

Documents a new team member — human or agent — can read and understand the product from.

Next: [Skills Reference](skills.md)
