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
feature: <slug>
doc: EXECUTION_PLAN
increment: NNN-<slice>
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: YYYY-MM-DD
---

# Execution Plan — <slice title>

<objective>
What this slice is in the product today. Observable behavior. No work remains.
</objective>

<current-state>
The files that implement this slice today, from the evidence list.
</current-state>

<approach>
Absorbed from the existing app. The code already behaves as the PRD states.
</approach>

<tasks>
</tasks>

<out-of-plan>
No design spec. No schema change. The QA report for this slice is separate.
</out-of-plan>

## Changelog

- v1.0 (YYYY-MM-DD) — absorbed from the app. Closed with no tasks.
