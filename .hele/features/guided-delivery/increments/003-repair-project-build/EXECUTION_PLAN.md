<!-- RULES:
- Written by /hele-absorb only, one file per slice, after the human
  approves the snapshot. Copy this file. Fill the angle brackets.
- status stays built. origin stays absorb. <tasks> stays empty.
  Do not register a beads epic for this file.
- This is a record of behavior that already exists. It is not a plan
  the build loop runs.
- No ## Database section. No design spec. The QA report for this slice
  is a separate file, from templates/qa-report.md.
- Human-readable markdown. No XML section tags.
-->
---
feature: guided-delivery
doc: EXECUTION_PLAN
increment: 003-repair-project-build
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Repair the project build

<objective>
Repair the actual compile/typecheck with a bounded loop, report success or an explicit blocker, and return to the ongoing product work.

Covered rules: BR-15, BR-16. This is a record of shipped agent instructions, not proof that all runtime validation passed; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
templates/build-until-pass.md conductor and worker; agents/summer.md responsibilities; templates/sticky-lanes.md build-until-pass routing.

Historical seam: Introduced in 240992f (2026-08-21), with the named Summer role in e8a2105 (2026-09-03).
</current-state>

<approach>
Absorbed from the existing harness at 7e0b5f9. The source instructions specify the current behavior recorded in PRODUCT_DESCRIPTION v1.0. No implementation task is opened. Known contract conflicts and unexecuted paths remain explicit; source inspection is not a runtime pass.
</approach>

<tasks>
</tasks>

<out-of-plan>
No design spec. No schema change. The QA report for this slice is separate.
</out-of-plan>

## Changelog

- v1.0 (2026-11-18) — absorbed from the app. Closed with no tasks.
