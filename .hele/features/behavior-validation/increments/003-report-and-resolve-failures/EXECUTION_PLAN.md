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
increment: 003-report-and-resolve-failures
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Report and Resolve Failures

<objective>
Write current evidence reports, classify findings, name their owners and route authorized corrections. Reconstruct missing reports from existing results without inventing new executions. Rules BR-10 through BR-13. This frozen plan records shipped instructions, not a successful live validation run; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
- `skills/hele-qa/SKILL.md`: --generate-fixes-report and phases 3-run-and-record and 4-report-and-route.
- `templates/qa-report.md`: coverage, findings, evidence and history.
- `agents/qa-wylie.md`: independent-evidence mission and reporting boundaries.

Initial seam: b9a201d..8e13a05 (2026-08-09 to 2026-08-10); current QA-to-walk stop includes 368c66b.
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
