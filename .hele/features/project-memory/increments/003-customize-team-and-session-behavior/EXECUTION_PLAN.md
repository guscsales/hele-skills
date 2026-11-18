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
increment: 003-customize-team-and-session-behavior
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Customize Team and Session Behavior

<objective>
Choose design participation, retain named-agent preferences and refresh the session rule and legacy settings without resetting existing choices. Covers BR-11–BR-13. This frozen record is not a claim that all validation passed; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
skills/hele-init/SKILL.md (phases 1-interview and 2-create); core/default-config.json (agents/designSystem); .docs/configuration.md (models and design).

Historical seam: 98507b0..d9f0304 introduced role preferences; 7364377 added sticky-session behavior; 757ca9b refined no-design choices. These are grouped as project customization.
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
