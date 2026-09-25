# Skills Reference

**You type `/hele-yolo`.** It detects the lane and runs the phase skills below. Every stop reports with markdown tables (never box-drawing divider lines) and ends with numbered **Options**: typing `1` approves and immediately starts the next phase. Paths in chat are always the full working-directory path. Say **the human**, never "CEO".

Jump to: [yolo](#hele-yolo) · [init](#hele-init) · [feature](#hele-feature) · [fast](#hele-fast) · [design](#hele-design) · [plan](#hele-plan) · [stubs](#hele-stubs) · [build](#hele-build) · [qa](#hele-qa) · [verify-work](#hele-verify-work) · [findings](#hele-retro--session-findings) · [iterate](#hele-iterate) · [status](#hele-status)

## /hele-yolo

The conductor. Agent Lisbon talks; specialists work in the background.

1. **Auto-init** if `.hele/` is missing (runs `/hele-init`, then continues).
2. **Lane table** (one row): Feature · Fast · Bugfix · Open.
3. Runs the matching phase skills. You never type them for the pipeline.
4. Every stop → Options. Close / Open include **Work done** and **Let's formalize**.
5. Appends `.hele/findings.json` when you correct it or name a preference; promotes durable lessons to `LEARNINGS.md`.

| Lane | Meaning |
|---|---|
| Feature | New capability → PRD + stubs + `001` → spine |
| Fast | Small addition → patch PRD + new increment → spine |
| Bugfix | Wrong behavior → reconcile + new increment → spine |
| Open | Research / review / investigation / design explore — no PRD until Let's formalize |

**Sticky:** type `/hele-yolo` once. Later prompts stay here. A bare message is another ask or an Options reply.

## /hele-init

Bootstraps `.hele/` (settings, index, state, LEARNINGS, **findings.json**, features/), sticky session rule, beads. Idempotent. When started by yolo, continues the ask after the report — no skill menu.

## /hele-feature

Agent Hightower. Anti-duplicate gate, interview, then **PRD and stubs in the same stop** (Wylie, blind to the plan). Emits PRD delta (**New** vs **Added**, grouped by PRD, absolute path). Option `1` → design or plan.

## /hele-fast

Update-lane procedure yolo runs for Fast / Bugfix: find PRD, patch when needed, stub delta, new increment, then plan → build → QA → verify. Beads on. Schema / security stay with Red John / Jane — not a bounce to another command.

## /hele-design

Agent Vega. Skipped when no new screens or `designSystem.enabled: false`.

## /hele-plan

Agent Lisbon. EXECUTION_PLAN + beads. DB gate via Red John when schema is touched.

## /hele-stubs

Agent Wylie. Living TEST_STUBS from the PRD only. Normally runs inside the Feature / Fast stop — not a separate command you type under yolo. Does **not** draft VERIFY.md (QA does, from the report).

## /hele-build

Coordination loop on beads. Background engineers. `--from-qa` fixes only open QA beads.

## /hele-qa

Agent Wylie. Playwright for this increment's stubs. **Screenshot per stub** under `increments/…/screenshots/`. Human-readable **QA_REPORT.md** (no XML): setup, data, steps, expected vs happened, images. Chat shows absolute paths. Green → verify; red → Options → fix round.

## /hele-verify-work

Replays **QA_REPORT** steps and data. Shows the screenshot of what pass looked like. Verdicts in VERIFY.md. Close Options: Work done · iterate · draft PR (· Let's formalize only if PRD missing). **No retro option.**

## /hele-retro / session findings

Not a command you run at the end. `/hele-yolo` writes `findings.json` during the talk. Durable lessons → `LEARNINGS.md`. Invoking `/hele-retro` only reconciles what is already on disk.

## /hele-iterate

Late find on an open post-build increment. Lisbon classifies and dispatches the slice. Still under the yolo sticky session when you pick it from Options.

## /hele-status

Read-only board. Versions, drift, next action. Does not steal the sticky lane.

## Output rules (all stops)

See `templates/chat-reports.md`: Lane table, Options table, Files with full PWD, PRD delta, QA screenshots table. Never fence a report. Never box-drawing in chat.

Next: [CLI Reference](cli.md)
