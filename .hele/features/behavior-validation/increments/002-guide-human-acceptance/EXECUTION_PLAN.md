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
increment: 002-guide-human-acceptance
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Guide Human Acceptance

<objective>
Prepare inspected user flows, collect explicit human verdicts, and preserve unaffected verified outcomes through corrections. Rules BR-5 through BR-9. Skipped-flow continuation remains a documented contract limitation. This frozen plan records shipped instructions, not a successful live validation run; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
- `skills/hele-verify-work/SKILL.md`: phases 1-load, 2-guided-walk and 3-report.
- `templates/verify.md`: flow structure and verdicts.
- `skills/hele-qa/SKILL.md`: phase 3 human-flow preparation and phase 4 handoff.

Initial seam: e8a7945..e945607 (2026-08-08); current preservation and closing choices include 368c66b..120d62c.
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
