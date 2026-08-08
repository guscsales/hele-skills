---
feature: <slug>
doc: EXECUTION_PLAN
increment: NNN-<increment-slug>
version: "1.0"
based_on: PRODUCT_DESCRIPTION vX.Y # add DESIGN_SPEC vX.Y when one exists
status: draft # draft | approved | built
updated: YYYY-MM-DD
---

<!--
RULES FOR THIS DOCUMENT
- Per-increment and disposable: it plans THIS delivery only. After the build
  it freezes (status: built) and becomes history — never edit a built plan.
- Written for an agent with ZERO memory: name real files, real patterns,
  real constraints. "Improve the service" is not a plan.
- Every task maps to a beads issue once /hele-plan registers the epic.
- based_on MUST point at the PRD version this plan was written against —
  /hele-status uses it to detect drift.
-->

# Execution Plan — <increment title>

<objective>
What this increment delivers, in one paragraph. The observable outcome, not the activity.
</objective>

<current-state>
Facts about the codebase this plan builds on: key files (paths), existing patterns to follow, constraints, gotchas discovered during analysis.
</current-state>

<approach>
The chosen technical approach and why it beats the alternatives considered.
</approach>

<tasks>
  <task id="T1" agent="cho" beads="">
    <description>...</description>
    <files>paths this task touches</files>
    <tests>TDD — which tests prove this task done</tests>
    <depends-on></depends-on>
  </task>
  <task id="T2" agent="van-pelt" beads="">
    <description>...</description>
    <files>...</files>
    <tests>...</tests>
    <depends-on>T1</depends-on>
  </task>
</tasks>

<risks>
- R-1: <risk> → <mitigation>
</risks>

<out-of-plan>
Things this increment intentionally does not address.
</out-of-plan>

## Changelog

- v1.0 (YYYY-MM-DD) — initial version
