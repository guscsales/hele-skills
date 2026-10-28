# Getting Started

From zero to a shipped, documented, tested feature, with one command.

## Install

As a Claude Code plugin:

```bash
claude plugin marketplace add guscsales/hele-skills
claude plugin install hele-skills@hele -s project   # this repo, shared with the team
```

## Initialize (or just start)

You can type `/hele-init` once, or skip it: the first `/hele-yolo` in a repo that has no `.hele/` runs init by itself (folder name, design question, beads), then continues your ask.

Init creates the harness folder (`.hele/` by default), `findings.json`, installs the sticky session rule so `/hele-yolo` stays in force for follow-ups, and runs `hele install` for [beads](https://beads.gascity.com/) (`bd`). That command creates the project database and leaves `AGENTS.md` and `CLAUDE.md` untouched. Idempotent. It never overwrites an existing file.

## Ship with one command

```bash
/hele-yolo "customers can favorite products"
```

One command called `/hele-yolo <your prompt>`. The Agent Lisbon detects the lane and runs the rest. You never type `/hele-feature`, `/hele-stubs`, `/hele-plan`, and the rest, for the pipeline.

| Lane | When | What happens |
| --- | --- | --- |
| The Feature Lane | The product does not do this yet. This part of the app doesn't exist. | Questions until none remain, then PRD + stubs + increment `001`, design when there is a new screen (optional), and the team plans, builds, and auto-verifies on its own providing you screenshots of the result. |
| The Fast Lane | A small addition to what already exists, a product increment. | Asks questions if necessary, then a PRD patch an update and create a new increment for your feature. |
| The Bugfix Lane | Today's behavior is wrong. | Asks questions if necessary, reconciles the docs, and follows the same spine of the fast lane. |
| The Open Lane | Research, review, investigation, design exploration, anything else. | A conversation, with no PRD, until you pick **Let's formalize or say you're done.** |

### Output is everything: instead of skills you have "stops"

All the outputs are well defined, you're not walking blindly, you know what's happening. It can be a question, it can be reviewing the PRD or the QA Report. Most importantly, you know what your next decision is.

Real stops end in numbered options: `1` approves and starts the next phase; `2` is tell me what you need; and other dynamic options are generated according the context. When you finish an open lane the close stops include **Work done**, in case you don't want to continue, or **Let's formalize in a real PRD**, in case you want to transform that research in something real.

After you approve the PRD (and the design, when there are new screens), the agents write the execution plan, build, and run auto-verify on their own. Your next prompt is the manual walk. You replay those same steps, using clear data with clear instructions. If it's correct, you move to the next verification. If it needs a fix, you tell and verify again, until the loop is completed. A database change or a red auto-verify still stops and asks.

Each session learns something and iterates it in a `LEARNINGS.md` file. The QA agent writes a human-readable `QA_REPORT.md`: the screen before this increment and after it, then the replay. The proof of validation using screenshots for each necessary use case.

Every file path in chat is the full working-directory path. A PRD change always prints what is **New** vs **Added**, grouped by PRD.

### "hmm, I forgot this actually": the iterate loop

Already past build and you found something you did not plan for? You can open a new PR, but sometimes you just want to fix at the time.

Still under the `/hele-yolo` session, Agent Lisbon folds it back into the open increment via beads, not a new Feature lane, but a complement, even when you discover this in the middle of the manual verification.

```
you: "wait, I forgot this", or pick iterate on the close Options
        │
        ▼
  iterate   (Agent Lisbon)
        │
        ├─ bug / behavior / tests / new screen / schema / security
        ▼
  re-verify only the affected surface
```

You talk to Lisbon (staff) and Hightower (PM) in the main session. The heavy work like review, the suite, artifacts, reading code goes to background subagents. The roster and the default models are in [The agent team](introduction.md#the-agent-team).

## Also useful

- `/hele-status`: the board. Every feature, doc versions, drift, next action.
- **build until pass**: say `build til pass` or `builda até passar`. Lisbon dispatches `[AGENT] Summer` for the project compile. Not the increment build loop.
- `/clear` between phases when a report says it is safe. Everything is on disk.

The main chat is yours. Doing work always runs in the background. After a dispatch, the turn ends. Talk anytime.

## What you end up with

```
.hele/
  settings.json            # models, max agents, design system paths, everything
  state.json               # active feature + increment + phase
  index.json               # registry of ALL features (slug, aliases, versions, status)
  LEARNINGS.md             # memory promoted from session findings, every skill loads it
  findings.json            # append-only session findings written during /hele-yolo
  DESIGN_SYSTEM.md         # Vega's compact map of the design system (when one exists)
  DATABASE.md              # Red John's living schema map (mermaid ER, kept current)
  features/
    <slug>/
      PRODUCT_DESCRIPTION.md   # living doc, current state, patch versions only
      TEST_STUBS.md            # living doc, written with the PRD; QA runs the increment slice
      increments/
        001-<name>/
          EXECUTION_PLAN.md    # per-increment, frozen after build
          DESIGN_SPEC.md       # per-increment, when UI is involved
          DB_CHANGES.md        # per-increment, when the DB is touched, blocking approval
          QA_REPORT.md         # human-readable QA run + screenshots/
          VERIFY.md            # guided replay of the QA report
          screenshots/         # up to 10 settled PNGs, compressed with sharp; overflow is chat-only under .hele/tmp/captures/
```

Documents a new team member, human or agent, can read and understand the product from.

Next: [Skills Reference](skills.md)
