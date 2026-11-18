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
increment: 001-deliver-approved-features
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Deliver approved features

<objective>
Approve a living product contract and receive a planned, reviewed delivery from named specialists, with conditional design and database gates and current engineering evidence.

Covered rules: BR-1–BR-10. This is a record of shipped agent instructions, not proof that all runtime validation passed; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
skills/hele-feature/SKILL.md phases 3–4; skills/hele-plan/SKILL.md phases 1–4; skills/hele-build/SKILL.md dispatch-loop, verify and --from-qa; templates/execution-plan.md; templates/db-changes.md; templates/open-channel.md; agents/staff-lisbon.md; agents/backend-cho.md; agents/security-jane.md; agents/dba-hightower.md; agents/infra-rigsby.md.

Historical seam: Initial capability 0ee2d05..3892ad8 (2026-08-08), with current overlap, review, schema and affected-test refinements.
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
