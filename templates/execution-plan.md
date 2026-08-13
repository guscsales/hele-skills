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
- Required when DESIGN_SPEC.tool is paper: include <paper-to-code>
  (skill /hele-paper-to-code, file id + page, artboard ids per Van Pelt
  task). Pixels from get_jsx; plan/DESIGN_SPEC prose is behavior and
  structure only. Screenshots = verification. MCP down → stop.
  Figma twin: <figma-to-code> when tool is figma (same rule, Figma MCP).
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

<paper-to-code>
<!-- required when DESIGN_SPEC.tool is paper -->
skill: /hele-paper-to-code
file: <paper file id>
page: <page>
<!-- per Van Pelt task: exact node/artboard ids — never "see DESIGN_SPEC" -->
T2: mobile <id> · desktop <id>
rule: plan/DESIGN_SPEC prose = behavior and structure; pixels from get_jsx. Screenshots = verification only. MCP/tool down → stop, do not invent UI from the plan.
</paper-to-code>

<figma-to-code>
<!-- required when DESIGN_SPEC.tool is figma -->
file: <figma file id>
page: <page>
T2: mobile <node id> · desktop <node id>
rule: plan/DESIGN_SPEC prose = behavior and structure; pixels from Figma MCP. Screenshots = verification only. MCP/tool down → stop, do not invent UI from the plan.
</figma-to-code>

<tasks>
  <task id="T1" agent="cho" beads="">
    <description>...</description>
    <files>paths this task touches</files>
    <tests>TDD — which tests prove this task done</tests>
    <depends-on></depends-on>
  </task>
  <task id="T2" agent="van-pelt" beads="">
    <description><paper-to-code> file <id> · page <page> · artboards mobile:<id> desktop:<id> — ...</description>
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
