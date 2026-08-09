---
feature: <slug>
doc: DESIGN_SPEC
increment: NNN-<increment-slug>
version: "1.0"
based_on: PRODUCT_DESCRIPTION vX.Y
tool: paper # paper | figma | code-reference | <other tool the CEO named>
devices: [mobile, desktop] # subset of: mobile, desktop, tablet
status: draft # draft | approved
updated: YYYY-MM-DD
---

<!--
RULES FOR THIS DOCUMENT
- Owned by [AGENT DESIGN] Vega. Created only after her two mandatory
  questions (design tool + target devices) were answered by the CEO.
- Vega NEVER invents a component the design system already has —
  <components> maps DS components to their usage here.
- tool = paper/figma → <artboards> holds the links/ids per device.
- tool = code-reference → <layout> is filled instead: the layout written
  out in text (an EXECUTION_PLAN for frontend layout only), and Van Pelt
  implements from it plus the design-system map.
- v1 scope: spec only. Vega does not do design QA after implementation.
-->

# Design Spec — <increment title>

<principles>
Which design-system principles, tokens, and patterns govern this work (cite .hele/DESIGN_SYSTEM.md sections).
</principles>

<components>
- <DS component> → <how it is used here>
- NEW: <component that must be created> — <why the DS doesn't cover it>
</components>

<screens>
  <screen id="S1" name="<screen name>">
    <purpose>...</purpose>
    <states>default | loading | empty | error | success</states>
    <devices>mobile, desktop</devices>
    <artboards>
    <!-- tool = paper/figma -->
    - mobile: <artboard link/id>
    - desktop: <artboard link/id>
    </artboards>
    <layout>
    <!-- tool = code-reference: structure, hierarchy, regions, spacing,
         which component goes where, responsive behavior per device -->
    </layout>
  </screen>
</screens>

<interactions>
Motion, transitions, feedback rules (loading indicators, optimistic updates, error toasts).
</interactions>

<accessibility>
Contrast, focus order, keyboard navigation, labels/aria requirements.
</accessibility>

## Changelog

- v1.0 (YYYY-MM-DD) — initial version
