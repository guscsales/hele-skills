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
increment: 004-select-sufficient-current-proof
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Select Sufficient Current Proof

<objective>
Choose sufficient test levels, reuse valid execution evidence, justify E2E and select affected regressions across features while reporting CI and timing limits honestly. Rules BR-14 through BR-20. This frozen plan records shipped instructions, not a successful live validation run; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
- `templates/validation-strategy.md`: proof choice, execution selection, current evidence and human verification.
- `skills/hele-qa/SKILL.md`: phases 1-review-coverage through 3-run-and-record.
- `.docs/testing.md`: delivery, CI and existing-artifact guidance.
- `agents/qa-wylie.md`: evidence selection and ownership.

Initial seam: 7e0b5f9 (2026-11-17). This supersedes blanket browser-per-scenario and screenshot assumptions.
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
