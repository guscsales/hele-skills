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
increment: 001-initialize-project-memory
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Initialize Project Memory

<objective>
Install the shipped plugin, initialize persistent project memory and task tracking, and read or edit saved preferences. Covers BR-1–BR-6. This frozen record is not a claim that all validation passed; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
skills/hele-init/SKILL.md (phases 0-detect and 2-create); cli/src/install.js (installCommand/initBeadsProject); cli/src/dir.js (resolveHeleDir); cli/src/config.js (configCommand); scripts/hele; .claude-plugin/plugin.json.

Historical seam: cfd92fb, 9026376 and 2ce7d38 introduced this capability on 2026-08-08. Later initialization safeguards remain current refinements.
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
