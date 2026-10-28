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
| Feature | The product does not do this yet. | Questions until none remain, then PRD + stubs + increment `001`. Design when there is a new screen. The team plans, builds, and auto-verifies. |
| Fast | A small addition to what already exists. | Questions if a rule would change, then a PRD patch and a new increment. |
| Bugfix | Today's behavior is wrong. | Questions only if the rule text changes. Same spine as Fast. |
| Open | Research, review, investigation, design exploration. | A conversation, until you pick **Let's formalize** or say you're done. |

### Stops

Real stops end in numbered options: `1` approves and starts the next phase; `2` is tell me what you need.

After you approve the PRD (and the design, when there are new screens), the agents write the plan, build, and run auto-verify on their own. The QA report is your next prompt. You choose to continue to the manual walk, or to fix something you saw in the report. The walk is one flow at a time, in three tables: how to open the page, the data the run used, and the steps. The screenshot of what pass looked like is a link. If it is correct, you move to the next flow. If it needs a fix, you say so. Lisbon goes back to the PRD on that same increment, updates it, and the flow runs again. A flow you already marked pass is not shown again, unless that fix changed it. A database change still stops and asks.

Every file in a chat table is a clickable link. The label is the file name. The target is the absolute path.

### A fix during the walk goes back to the PRD

You are in the manual walk and something needs a fix. Lisbon goes back to the PRD on that same increment, updates it, and the flow runs again. A flow you already marked pass is not shown again, unless that fix changed it. She does not open a new feature for that correction.

You talk to Lisbon. Review, the suite, and reading code go to background subagents. The roster is in [The agent team](introduction.md#the-agent-team).

## Also useful

- **build until pass**: say `build til pass` or `builda até passar`. Lisbon dispatches Summer for the project compile. That is not the increment build loop.
- `/clear` between phases when a report says it is safe. The documents and the beads are on disk.

The main chat is yours. Doing work runs in the background. After a dispatch, the turn ends. Talk anytime.

## What you end up with

```
.hele/
  settings.json
  index.json
  DESIGN_SYSTEM.md         # when a design system exists
  DATABASE.md              # Hightower's schema map
  features/
    <slug>/
      PRODUCT_DESCRIPTION.md
      TEST_STUBS.md
      increments/
        001-<name>/
          EXECUTION_PLAN.md
          DESIGN_SPEC.md
          DB_CHANGES.md
          QA_REPORT.md
          VERIFY.md
          screenshots/
```

Documents a new team member, human or agent, can read and understand the product from.

Next: [Skills Reference](skills.md)
