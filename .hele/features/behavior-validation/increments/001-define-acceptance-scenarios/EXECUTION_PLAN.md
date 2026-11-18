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
feature: behavior-validation
doc: EXECUTION_PLAN
increment: 001-define-acceptance-scenarios
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Define Acceptance Scenarios

<objective>
Derive independent product-language scenarios, retain stable identifiers and map rules to proposed technical proof without copying expected behavior from the implementation plan. Rules BR-1 through BR-4. This frozen plan records shipped instructions, not a successful live validation run; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
- `skills/hele-stubs/SKILL.md`: context, 1-derive and 2-write.
- `templates/test-stubs.md`: rules, scenario attributes and Coverage.

Initial seam: 2ce7d38..ecaa401 (2026-08-08). Current proof-mapping and retirement refinements are included.
</current-state>

<approach>
Absorbed from the existing harness. The shipped skills and templates define the current contract recorded in PRODUCT_DESCRIPTION.md. No build tasks or product changes are introduced; runtime compliance remains subject to evidence.
</approach>

<tasks>
</tasks>

<out-of-plan>
No design spec. No schema change. The QA report for this slice is separate.
</out-of-plan>

## Changelog

- v1.0 (2026-11-18) — absorbed from the app. Closed with no tasks.
