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
feature: project-memory
doc: EXECUTION_PLAN
increment: 005-configure-report-language-and-evidence-limits
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Configure Report Language and Evidence Limits

<objective>
Persist independent chat/artifact language preferences and a ceiling on optional retained screenshots. Covers BR-16 and BR-17. This frozen record is not a claim that all validation passed; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
core/default-config.json (language/qa); cli/src/config.js (configCommand); .docs/configuration.md (language/qa); cli/test/language.test.js.

Historical seam: eae451a..aec4241 introduced these preferences on 2026-11-02; report-format refinements are not separate increments.
</current-state>

<approach>
Absorbed from the current implementation and shipped workflow contracts. Executable CLI behavior and agent instructions are distinguished in the PRD; source inspection is not live workflow validation. The approved snapshot retains known contract limitations.
</approach>

<tasks>
</tasks>

<out-of-plan>
No design spec. No schema change. The QA report for this slice is separate.
</out-of-plan>

## Changelog

- v1.0 (2026-11-18) — absorbed from the app. Closed with no tasks.
