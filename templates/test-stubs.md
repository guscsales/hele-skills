---
feature: <slug>
doc: TEST_STUBS
version: "1.0"
based_on: PRODUCT_DESCRIPTION vX.Y
updated: YYYY-MM-DD
---

<!--
RULES FOR THIS DOCUMENT
- LIVING regression contract: stubs accumulate across increments and are
  never deleted while the behavior exists. Wylie runs the WHOLE suite,
  not just the newest increment.
- Stubs are written in plain English from the PRODUCT_DESCRIPTION —
  they validate BEHAVIOR, never implementation details.
- Every stub cites the business rule (BR-n) it protects and the increment
  that introduced it. IDs (TS-nnn) are stable forever.
- status is updated by Wylie after each /hele-qa run (from Playwright results).
-->

# Test Stubs — <Feature Title>

<stub id="TS-001" increment="001" rule="BR-1" kind="e2e" status="pending">
**Given** <starting state>
**When** <action>
**Then** <observable outcome>
</stub>

<stub id="TS-002" increment="001" rule="BR-2" kind="api" status="pending">
**Given** ...
**When** ...
**Then** ...
</stub>

<!--
kind: e2e (Playwright browser test) | api (Playwright request-level) | unit-expectation (engineers' TDD anchor)
status: pending | passing | failing | blocked
-->
