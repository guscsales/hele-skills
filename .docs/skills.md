# Skills Reference

**You type `/hele`.** Agent Lisbon, the Builder, detects the lane and runs the phase skills below. Real stops end in numbered options: `1` approves and starts the next phase; `2` is tell me what you need. The execution plan is not a stop. After you approve the PRD (and the design, when there are new screens), the agents write the plan, build, and run auto-verify on their own. The QA report is the next stop: continue to the manual walk, or fix what you saw. A database change still stops. Every file in a chat table is a clickable link: the label is the file name, the target is the absolute path on one line. Say **the human**.

Jump to: [hele](#hele) · [init](#hele-init) · [update](#hele-update) · [feature](#hele-feature) · [fast](#hele-fast) · [design](#hele-design) · [plan](#hele-plan) · [stubs](#hele-stubs) · [build](#hele-build) · [qa](#hele-qa) · [verify-work](#hele-verify-work)

## /hele

The conductor. Agent Lisbon talks. Specialists work in the background.

1. **Auto-init** if `.hele/` is missing.
2. **Lane table** (one row): Feature · Fast · Bugfix · Open.
3. Runs the matching phase skills. You never type them for the pipeline.
4. Real stops end in numbered options. An open lane closes with **Work done** or **Let's formalize**. The plan, the build, and a green auto-verify do not stop.
5. A fix found in manual verify goes back to the PRD on that same increment, and the flow runs again. Flows already marked pass are not walked again.

| Lane | When | What happens |
| --- | --- | --- |
| Feature | The product does not do this yet. | Questions until none remain, then PRD + stubs + increment `001`. Design when there is a new screen. The team plans, builds, and auto-verifies. You walk the result in tables. |
| Fast | A small addition to what already exists. | Questions if a rule would change, then a PRD patch and a new increment. Same spine. |
| Bugfix | Today's behavior is wrong. | Questions only if the rule text changes. Same spine. |
| Open | Research, review, investigation, design exploration. | A conversation, until you pick **Let's formalize** or say you're done. |

**Sticky:** type `/hele` once. Later prompts stay here.

## /hele-init

Bootstraps `.hele/` (settings, index, features/), the sticky session rule, and beads via `hele install`. The folder is always `.hele/`. Idempotent. When `/hele` starts it, the original ask continues. No skill menu.

## /hele-update

Updates the installed plugin to the latest version. Refreshes the `hele` marketplace, then runs `claude plugin update hele-skills@hele`. Reports the version before and after. A restart loads the new skills. It does not touch the PRD. After the restart, `/hele-init` once when `.hele/` already exists.

## /hele-feature

Agent Lisbon. Anti-duplicate gate, then questions until none remain. That round writes nothing. Only then **PRD and stubs in the same stop** (Wylie, blind to the plan). Emits a PRD delta and clickable links. Option `1` goes to design, or to build and auto-verify when design is not needed.

## /hele-fast

Update lane `/hele` runs for Fast and Bugfix: questions first when a rule would change, then patch the PRD, stub delta, new increment, same spine. A bugfix that leaves the rule text alone does not stop to ask. Schema and security stay with Hightower and Jane. A correction of the increment already in play does not open a new increment.

## /hele-design

Agent Vega. Skipped when there are no new screens, or when `designSystem.enabled` is false.

## /hele-plan

Agent Lisbon. `EXECUTION_PLAN` plus beads, written for the agents. No human sign-off. Build starts when the plan is ready. Hightower's schema approval pauses the chain when the database changes.

## /hele-stubs

Agent Wylie. Living `TEST_STUBS` from the PRD only. Runs inside the Feature or Fast stop. Does not draft `VERIFY.md`.

## /hele-build

Coordination loop on beads. Background engineers. When the suite is green, auto-verify starts. `--from-qa` fixes only the open QA beads, then auto-verify runs again.

## /hele-qa

Agent Wylie. Playwright for this increment's stubs. Screenshots wait until the page is still. At most **10** stay in the increment. `QA_REPORT.md` leads with the screen before and after, then, per stub, tables for how to open the page, the data, and the steps. The report stops with two choices: continue to the manual walk, or fix something you saw. A red run also offers to approve the failing tests.

## /hele-verify-work

One flow at a time. The message is those three tables, copied from the QA report, plus the screenshot of what pass looked like. A flow already marked pass is not shown again. A fix described on a flow goes back to the PRD, then the flow runs again. Close options: Work done · adjust this increment · draft PR.

## Output rules

See `templates/chat-reports.md`. Lane table, Options table, Files as links, PRD delta (was → now), Open these, QA shots. Never fence a report. Never box-drawing in chat. Never a raw path in its own column.

Next: [CLI Reference](cli.md)
