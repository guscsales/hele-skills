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
feature: visual-design
doc: EXECUTION_PLAN
increment: 001-specify-screens
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Specify Screens

<objective>
Obtain a design-system-aware specification for the chosen tools and devices, review its screen/state coverage and explicitly approve it before delivery. Rules BR-1 through BR-7. This frozen plan records shipped instructions, not a successful live design run; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
- `skills/hele-design/SKILL.md`: context and phases 1-design-system-map through 4-report-and-approval.
- `templates/design-spec.md`: frontmatter, principles, components, screens, interactions and accessibility.
- `agents/design-vega.md`: mission, responsibilities and approval report.
- `agents/frontend-van-pelt.md`: Implements from DESIGN_SPEC.

Initial seam: 0ee2d05..2ce7d38 (2026-08-08), with current opt-out and approval refinements included.
</current-state>

<approach>
Absorbed from the existing harness. The shipped agent instructions define the current contract recorded in PRODUCT_DESCRIPTION.md. No build tasks or source changes are introduced; runtime compliance remains subject to QA evidence.
</approach>

<tasks>
</tasks>

<out-of-plan>
No design spec. No schema change. The QA report for this slice is separate.
</out-of-plan>

## Changelog

- v1.0 (2026-11-18) — absorbed from the app. Closed with no tasks.
