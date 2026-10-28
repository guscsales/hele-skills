# Getting Started

From zero to a shipped, documented, tested feature, with one command.

## Install

As a Claude Code plugin:

```bash
claude plugin marketplace add guscsales/hele-skills
claude plugin install hele-skills@hele -s project   # this repo, shared with the team
```

Later, `/hele-update` brings that install to the latest version.

## Initialize (or just start)

You can type `/hele-init` once, or skip it. The first `/hele` in a repo that has no `.hele/` runs init by itself (the design question, then beads), then continues your ask.

Init creates `.hele/` (settings, the feature index, `features/`), installs the sticky session rule so `/hele` stays in force, and runs `hele install` for [beads](https://beads.gascity.com/) (`bd`). That command creates the project database and leaves `AGENTS.md` and `CLAUDE.md` untouched. The folder is always `.hele/`. Idempotent. It never overwrites an existing file.

## Ship with one command

```bash
/hele "customers can favorite products"
```

Agent Lisbon, the Builder, detects the lane and runs the rest. You never type `/hele-feature`, `/hele-stubs`, `/hele-plan`, and the rest, for the pipeline.

| Lane | When | What happens |
| --- | --- | --- |
| The Feature Lane | The product does not do this yet. This part of the app doesn't exist. | Questions until none remain, then PRD + stubs + increment `001`, design when there is a new screen (optional), and the team plans, builds, and auto-verifies on its own providing you screenshots of the result. |
| The Fast Lane | A small addition to what already exists, a product increment. | Asks questions if necessary, then a PRD patch an update and create a new increment for your feature. |
| The Bugfix Lane | Today's behavior is wrong. | Asks questions if necessary, reconciles the docs, and follows the same spine of the fast lane. |
| The Open Lane | Research, review, investigation, design exploration, anything else. | A conversation, with no PRD, until you pick **Let's formalize or say you're done.** |

### Output is everything: instead of skills you have "stops"

All the outputs are well defined, you're not walking blindly, you know what's happening. It can be a question, it can be reviewing the PRD or the QA Report. Most importantly, you know what your next decision is.

Real stops end in numbered options: `1` approves and starts the next phase; `2` is tell me what you need; and other dynamic options are generated according the context. When you finish an open lane the close stops include **Work done**, in case you don't want to continue, or **Let's formalize in a real PRD**, in case you want to transform that research in something real.

After you approve the PRD (and the design, when there are new screens), the agents write the execution plan, build, and run auto-verify on their own. The QA report is your next prompt. You choose: continue to the manual walk, or fix something you saw. You replay those same steps, in tables, using clear data with clear instructions. If it's correct, you move to the next verification. If it needs a fix, you tell and verify again, until the loop is completed. A flow you already marked pass is not shown again. A database change or a red auto-verify still stops and asks.

The QA agent writes a human-readable `QA_REPORT.md`: the screen before this increment and after it, then the replay. The proof of validation using screenshots for each necessary use case.

Every file in a chat table is a clickable link. The label is the file name. The target is the absolute path, on one line.

### "hmm, I forgot this actually"

Already past build and you found something you did not plan for? You can open a new PR, but sometimes you just want to fix at the time.

Still under `/hele`, Agent Lisbon goes back to the PRD on that same increment, updates it, and the flow runs again. Not a new Feature lane, but a complement, even when you discover this in the middle of the manual verification. What you already marked pass stays passed, unless that fix changed it.

You talk to Lisbon. Review, the suite, and reading code go to background subagents. The roster is in [The agent team](introduction.md#the-agent-team).

## Also useful

- **build until pass**: say `build til pass` or `builda até passar`. Lisbon dispatches Summer for the project compile. That is not the increment build loop.
- `/clear` between phases when a report says it is safe. The documents and the beads are on disk.

The main chat is yours. Doing work runs in the background. After a dispatch, the turn ends. Talk anytime.

## What you end up with

```
.hele/
  settings.json            # models, max agents, design system paths, everything
  index.json               # registry of ALL features (slug, aliases, versions)
  DESIGN_SYSTEM.md         # Vega's compact map of the design system (when one exists)
  DATABASE.md              # Hightower's living schema map (mermaid ER, kept current)
  features/
    <slug>/
      PRODUCT_DESCRIPTION.md   # living doc, current state, patch versions only
      TEST_STUBS.md            # living doc, written with the PRD; QA runs the increment slice
      increments/
        001-<name>/
          EXECUTION_PLAN.md    # per-increment, for the agents
          DESIGN_SPEC.md       # per-increment, when UI is involved
          DB_CHANGES.md        # per-increment, when the DB is touched, blocking approval
          QA_REPORT.md         # human-readable QA run + screenshots/
          VERIFY.md            # guided replay of the QA report
          screenshots/         # up to 10 settled PNGs, compressed with sharp; overflow is chat-only under .hele/tmp/captures/
```

Documents a new team member, human or agent, can read and understand the product from.

Next: [Skills Reference](skills.md)
