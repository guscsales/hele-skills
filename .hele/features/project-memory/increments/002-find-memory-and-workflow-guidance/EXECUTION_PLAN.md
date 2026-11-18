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
increment: 002-find-memory-and-workflow-guidance
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
status: built
origin: absorb
updated: 2026-11-18
---

# Execution Plan — Find Memory and Workflow Guidance

<objective>
List and search existing feature memory through ranked registry matches and document fallback, and read workflow guidance without initializing a project for help. Covers BR-7–BR-10. This frozen record is not a claim that all validation passed; see QA_REPORT.md for evidence and gaps.
</objective>

<current-state>
cli/src/find.js (findCommand/scoreFeature/contentFallback); cli/src/ai.js (aiCommand/SKILLS); cli/src/flow-diagram.js (FLOW_DIAGRAM); README.md (The flow).

Historical seam: 9026376..f266c52 introduced lookup/help on 2026-08-08. Later diagram and help additions refine this same capability.
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
