# Skills Reference

**You type `/hele-yolo`.** It detects the lane and runs the phase skills below. Real stops report with markdown tables (never box-drawing divider lines) and end with numbered **Options**: typing `1` approves and immediately starts the next phase. The execution plan is not a stop. After you approve the PRD (and the design, when there are new screens), the agents write the plan, build, and run auto-verify on their own. Your next prompt is the manual walk. A database change or a red auto-verify still stops. Paths in chat are always the full working-directory path. Say **the human**, never "CEO".

Jump to: [yolo](#hele-yolo) · [init](#hele-init) · [feature](#hele-feature) · [fast](#hele-fast) · [design](#hele-design) · [plan](#hele-plan) · [stubs](#hele-stubs) · [build](#hele-build) · [qa](#hele-qa) · [verify-work](#hele-verify-work) · [findings](#hele-retro--session-findings) · [iterate](#hele-iterate) · [status](#hele-status)

## /hele-yolo

The conductor. Agent Lisbon talks; specialists work in the background.

1. **Auto-init** if `.hele/` is missing (runs `/hele-init`, then continues).
2. **Lane table** (one row): Feature · Fast · Bugfix · Open.
3. Runs the matching phase skills. You never type them for the pipeline.
4. Real stops → Options. Close / Open include **Work done** and **Let's formalize**. The plan, the build, and a green auto-verify do not stop.
5. Appends `.hele/findings.json` when you correct it or name a preference; promotes durable lessons to `LEARNINGS.md`.

| Lane | Meaning |
|---|---|
| Feature | New capability → questions, then PRD + stubs + `001` → spine |
| Fast | Small addition → questions when a rule changes, then patch PRD + new increment → spine |
| Bugfix | Wrong behavior → questions only when the rule changes, then reconcile + new increment → spine |
| Open | Research / review / investigation / design explore — no PRD until Let's formalize |

**Sticky:** type `/hele-yolo` once. Later prompts stay here. A bare message is another ask or an Options reply.

## /hele-init

Bootstraps `.hele/` (settings, index, state, LEARNINGS, **findings.json**, features/), sticky session rule, beads. Idempotent. When started by yolo, continues the ask after the report — no skill menu.

## /hele-feature

Agent Hightower. Anti-duplicate gate, then questions until none remain. That round writes nothing — a recommendation is an option, not a rule already in a file. Only then **PRD and stubs in the same stop** (Wylie, blind to the plan). PRD is human-readable markdown (no XML) — same rule as QA_REPORT. Emits a PRD delta (new rules, and was → now on rewrites, grouped by PRD, absolute path) plus an Open these table. Option `1` → design, or build and auto-verify when design is not needed.

## /hele-fast

Update-lane procedure yolo runs for Fast / Bugfix: questions first when a rule would change, then find the PRD, patch when needed, stub delta, new increment, then the same spine. A bugfix that leaves the rule text alone does not stop to ask. The plan is for the agents. Beads on. Schema / security stay with Red John / Jane — not a bounce to another command.

## /hele-design

Agent Vega. Skipped when no new screens or `designSystem.enabled: false`.

## /hele-plan

Agent Lisbon. EXECUTION_PLAN + beads, written for the agents. No human sign-off. Build starts as soon as the plan is ready. DB gate via Red John when schema is touched — that approval pauses the chain.

## /hele-stubs

Agent Wylie. Living TEST_STUBS from the PRD only. Normally runs inside the Feature / Fast stop — not a separate command you type under yolo. Does **not** draft VERIFY.md (QA does, from the report).

## /hele-build

Coordination loop on beads. Background engineers. When the suite is green, auto-verify starts without another approval. `--from-qa` fixes only open QA beads, then auto-verify runs again.

## /hele-qa

Agent Wylie. Playwright for this increment's stubs. Screenshots wait until the page is still. At most **10** stay under `increments/…/screenshots/`; the rest are chat only. Human-readable **QA_REPORT.md** (no XML) leads with the screen before and after this increment, then setup, data, steps, expected vs happened. Questions are asked before the file is written. Chat shows absolute paths. Green → the manual walk starts immediately. Red → Options → fix round.

## /hele-verify-work

Replays **QA_REPORT** steps and data. Shows the screenshot of what pass looked like. Verdicts in VERIFY.md. Close Options: Work done · iterate · draft PR (· Let's formalize only if PRD missing). **No retro option.**

## /hele-retro / session findings

Not a command you run at the end. `/hele-yolo` writes `findings.json` during the talk. Durable lessons → `LEARNINGS.md`. Invoking `/hele-retro` only reconciles what is already on disk.

## /hele-iterate

Late find on an open post-build increment. Lisbon classifies and dispatches the slice. Still under the yolo sticky session when you pick it from Options.

## /hele-status

Read-only board. Versions, drift, next action. Does not steal the sticky lane.

## Output rules (all stops)

See `templates/chat-reports.md`: Lane table, Options table, Files with full PWD, PRD delta (was → now), Open these, QA shots table. Never fence a report. Never box-drawing in chat.

Next: [CLI Reference](cli.md)
