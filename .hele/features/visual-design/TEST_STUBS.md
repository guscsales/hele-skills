---
feature: visual-design
doc: TEST_STUBS
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
updated: 2026-11-18
---

# Test Stubs — visual-design

Derived from the approved product description and its changelog slice map before inspecting tests. All behaviors remain required unless explicitly retired. No execution plan was used.

<stub id="TS-001" increment="001" rule="BR-1" kind="integration" status="pending">
**Title:** Gate design on product approval
**Given** project memory or approved product requirements are missing.
**When** screen design is requested.
**Then** design does not proceed and missing initialization or product approval is identified.
</stub>

<stub id="TS-002" increment="001" rule="BR-1" kind="integration" status="pending">
**Title:** Honor explicit design disablement
**Given** approved requirements exist and design is explicitly disabled.
**When** delivery reaches design.
**Then** specification is skipped, planning continues and the re-enable option is reported; an absent enabled setting instead permits design.
</stub>

<stub id="TS-003" increment="001" rule="BR-2" kind="integration" status="pending">
**Title:** Reuse or refresh design memory
**Given** design sources are configured.
**When** design starts with a missing, current or stale design-system map.
**Then** a missing map is created, a current map is reused and a changed source or reported mismatch refreshes the map.
</stub>

<stub id="TS-004" increment="001" rule="BR-2" kind="integration" status="pending">
**Title:** Handle absent design-system sources
**Given** no design-system sources are configured.
**When** design begins.
**Then** the human is asked once whether a design system exists and, if none exists, existing application patterns are used and disclosed.
</stub>

<stub id="TS-005" increment="001" rule="BR-3" kind="integration" status="pending">
**Title:** Collect tools and target devices
**Given** design is eligible.
**When** a screen specification is prepared.
**Then** both tool and device choices are obtained from the human and recorded without silent defaults.
</stub>

<stub id="TS-006" increment="001" rule="BR-4" kind="integration" status="pending">
**Title:** Specify complete screens and states
**Given** the human has selected tools and devices.
**When** the specification is drafted.
**Then** every user-facing flow and applicable default, loading, empty, error and success state has decisions, interactions and accessibility requirements; reused components are mapped and necessary new components justified.
</stub>

<stub id="TS-007" increment="001" rule="BR-5" kind="integration" status="pending">
**Title:** Preserve design references
**Given** the selected design approach is known.
**When** screen designs are specified.
**Then** visual tools supply stable screen/device references and actual visual data remains the implementation source; code references supply explicit structure, hierarchy, spacing and responsive layout prose.
</stub>

<stub id="TS-008" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Require an explicit design decision
**Given** a new specification is ready.
**When** the human reviews, requests an adjustment or asks for a walkthrough.
**Then** the specification remains a version 1.0 draft tied to its product version until explicit approval; adjustment and walkthrough do not advance delivery.
</stub>

<stub id="TS-009" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Advance approved design
**Given** the human has explicitly approved the specification.
**When** the decision is recorded.
**Then** the specification and registered version become approved and planning begins without another plan-approval stop.
</stub>

<stub id="TS-010" increment="001" rule="BR-7" kind="integration" status="pending">
**Title:** Refresh only affected stale screens
**Given** the product description changes after a specification was written.
**When** design is revisited.
**Then** staleness is disclosed, affected screens are revised and the patch version increases; the designer specifies, while the implementer reports deviations without silently replacing the design.
</stub>

<stub id="TS-011" increment="002" rule="BR-8" kind="integration" status="blocked">
**Title:** Resolve Paper references
**Given** Paper implementation is requested with required access.
**When** the implementer resolves references.
**Then** a supplied artboard is used first, otherwise the selected artboard, otherwise the human chooses from available artboards; missing paired device references are asked about and a confirmed single artboard is accepted honestly.
</stub>

<stub id="TS-012" increment="002" rule="BR-9" kind="e2e-browser" status="blocked">
**Title:** Validate raw extraction first
**Given** artboards are resolved.
**When** their design is extracted.
**Then** each full root is extracted once, temporary paths are tracked and the unmodified result is compared before transformation; a mismatch is corrected at extraction.
</stub>

<stub id="TS-013" increment="002" rule="BR-10" kind="e2e-browser" status="blocked">
**Title:** Preserve behavior while adapting layouts
**Given** an existing product and one or two device references are available.
**When** the design is integrated.
**Then** properties, events, references, navigation, state and localization remain functional; annotation frames and viewport wrappers are omitted and paired references form one responsive layout without constraining desktop to mobile width.
</stub>

<stub id="TS-014" increment="002" rule="BR-11" kind="e2e-browser" status="blocked">
**Title:** Apply the consumer design system
**Given** the consumer project has established styles and components.
**When** the implementation is integrated and refactored.
**Then** tokens and fonts are mapped early, matching values and components are reused, suitable repeats extracted and remaining off-scale pixels become rem except one-pixel borders; affected checks preserve behavior.
</stub>

<stub id="TS-015" increment="002" rule="BR-12" kind="e2e-browser" status="blocked">
**Title:** Require verification and cleanup
**Given** Paper implementation reaches completion review.
**When** all five implementation phases are assessed.
**Then** completion requires source comparison, supplied interaction states, responsive and interactive behavior, passing applicable checks and removal of artboard artifacts and temporary extraction files; progress names completed and next phases.
</stub>

<stub id="TS-016" increment="002" rule="BR-12" kind="e2e-browser" status="blocked">
**Title:** Correct mismatches before completion
**Given** visual verification detects a mismatch.
**When** completion is requested.
**Then** the mismatch returns to correction and completion is withheld until required checks pass.
</stub>

<stub id="TS-017" increment="002" rule="BR-13" kind="integration" status="blocked">
**Title:** Keep source artboards unchanged
**Given** the human requests implementation from Paper.
**When** the implementer reads the source.
**Then** the original artboards remain unchanged; implementation permission does not authorize redesigning them.
</stub>

<stub id="TS-018" increment="002" rule="BR-14" kind="integration" status="pending">
**Title:** Disclose unavailable visual-tool ambiguity
**Given** Paper or browser access is unavailable.
**When** the implementation path is assessed.
**Then** conflicting stop, fallback and verification instructions remain an explicit contract limitation; no successful fallback or unobserved visual parity is claimed.
</stub>

<stub id="TS-019" increment="002" rule="BR-15" kind="integration" status="blocked">
**Title:** Report implementation evidence honestly
**Given** implementation checks have run or been skipped.
**When** the implementer reports results.
**Then** each behavior claim identifies scenario assertions, command/result, relevant identity and mocked boundaries; skipped or unproven checks remain non-passing and screenshots or instructions alone do not establish success.
</stub>

## Coverage

Technical mapping was added after PRD-first derivation. The inspected existing suite is `cli/test/*.test.js`; it exercises CLI subprocesses, local helper functions and source-text assertions, not Claude agent choices or consumer UI fidelity. Proposed evaluations below are recommendations, not installed tests or a new execution policy.

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-001 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Gate design on product approval | Assert: design does not proceed and missing initialization or product approval is identified. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-002 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Honor explicit design disablement | Assert: specification is skipped, planning continues and the re-enable option is reported; an absent enabled setting instead permits design. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-003 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Reuse or refresh design memory | Assert: a missing map is created, a current map is reused and a changed source or reported mismatch refreshes the map. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-004 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Handle absent design-system sources | Assert: the human is asked once whether a design system exists and, if none exists, existing application patterns are used and disclosed. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-005 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Collect tools and target devices | Assert: both tool and device choices are obtained from the human and recorded without silent defaults. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-006 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Specify complete screens and states | Assert: every user-facing flow and applicable default, loading, empty, error and success state has decisions, interactions and accessibility requirements; reused components are mapped and necessary new components justified. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-007 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Preserve design references | Assert: visual tools supply stable screen/device references and actual visual data remains the implementation source; code references supply explicit structure, hierarchy, spacing and responsive layout prose. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-008 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Require an explicit design decision | Assert: the specification remains a version 1.0 draft tied to its product version until explicit approval; adjustment and walkthrough do not advance delivery. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-009 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Advance approved design | Assert: the specification and registered version become approved and planning begins without another plan-approval stop. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-010 | integration | Vega / Wylie | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Refresh only affected stale screens | Assert: staleness is disclosed, affected screens are revised and the patch version increases; the designer specifies, while the implementer reports deviations without silently replacing the design. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-011 | integration | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Resolve Paper references | Assert: a supplied artboard is used first, otherwise the selected artboard, otherwise the human chooses from available artboards; missing paired device references are asked about and a confirmed single artboard is accepted honestly. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-012 | e2e-browser | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Validate raw extraction first | Assert: each full root is extracted once, temporary paths are tracked and the unmodified result is compared before transformation; a mismatch is corrected at extraction. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | Actual Paper extraction through consumer rendering can fail despite text and unit checks; no existing browser journey covers it. Reuse a future consumer journey before adding one. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-013 | e2e-browser | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Preserve behavior while adapting layouts | Assert: properties, events, references, navigation, state and localization remain functional; annotation frames and viewport wrappers are omitted and paired references form one responsive layout without constraining desktop to mobile width. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | Actual Paper extraction through consumer rendering can fail despite text and unit checks; no existing browser journey covers it. Reuse a future consumer journey before adding one. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-014 | e2e-browser | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Apply the consumer design system | Assert: tokens and fonts are mapped early, matching values and components are reused, suitable repeats extracted and remaining off-scale pixels become rem except one-pixel borders; affected checks preserve behavior. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | Actual Paper extraction through consumer rendering can fail despite text and unit checks; no existing browser journey covers it. Reuse a future consumer journey before adding one. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-015 | e2e-browser | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Require verification and cleanup | Assert: completion requires source comparison, supplied interaction states, responsive and interactive behavior, passing applicable checks and removal of artboard artifacts and temporary extraction files; progress names completed and next phases. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | Actual Paper extraction through consumer rendering can fail despite text and unit checks; no existing browser journey covers it. Reuse a future consumer journey before adding one. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-016 | e2e-browser | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Correct mismatches before completion | Assert: the mismatch returns to correction and completion is withheld until required checks pass. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | Actual Paper extraction through consumer rendering can fail despite text and unit checks; no existing browser journey covers it. Reuse a future consumer journey before adding one. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-017 | integration | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Keep source artboards unchanged | Assert: the original artboards remain unchanged; implementation permission does not authorize redesigning them. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-018 | integration | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Disclose unavailable visual-tool ambiguity | Assert: conflicting stop, fallback and verification instructions remain an explicit contract limitation; no successful fallback or unobserved visual parity is claimed. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-019 | integration | Van Pelt / Wylie | Proposed controlled Paper-to-consumer journey; no test path or executable fixture exists in the inspected suite / Report implementation evidence honestly | Assert: each behavior claim identifies scenario assertions, command/result, relevant identity and mocked boundaries; skipped or unproven checks remain non-passing and screenshots or instructions alone do not establish success. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |

## Evidence

| Stub | Result | Test / command | Code identity | Result artifact / output | Limitations |
|---|---|---|---|---|---|
| TS-001 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-002 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-003 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-004 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-005 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-006 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-007 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-008 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-009 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-010 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-011 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |
| TS-012 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |
| TS-013 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |
| TS-014 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |
| TS-015 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |
| TS-016 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |
| TS-017 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |
| TS-018 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | Approved contract limitation: Paper pre-flight stop versus persona text fallback, and browser skip versus mandatory comparison remain unresolved. Neither branch was executed; no parity claim is possible. |
| TS-019 | blocked | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No consumer application, selected artboard pair, inspected application startup or authorized live Paper/browser run is supplied for this absorption. The real design-to-render boundary and behavior preservation remain unproven. |

The shared CLI run passed 27/27 tests (0 failures, no retries), 0.602 s wall-clock; it gives **zero full behavioral passes** for these scenarios. All business rules and named flow branches map above. No scenario is retired. Scenario status reflects missing or blocked runtime proof, not an assertion failure.
