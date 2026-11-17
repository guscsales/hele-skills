---
feature: <slug>
doc: TEST_STUBS
version: "1.0"
based_on: PRODUCT_DESCRIPTION vX.Y
updated: YYYY-MM-DD
---

<!--
RULES
- Living acceptance contract: preserve stable TS IDs while behavior exists.
  Behavior intentionally removed → retired="true" plus the PRD retirement note, not an executable
  requirement. Stubs are not a list of E2E that CI must run on every PR.
- Given/When/Then comes from the PRD, never from the execution plan or tests.
- Every stub names its business rule and originating increment. Technical
  decisions belong in Coverage, separate from the product language.
- Follow templates/validation-strategy.md for levels, legacy kinds, execution
  selection, current evidence, and status semantics. Normalize affected rows
  only; preserve historical reports and existing IDs.
- New/changed behavior starts pending. Passing requires current execution
  evidence for every mapped assertion, not merely an existing test file.
-->

# Test Stubs — <Feature Title>

<stub id="TS-001" increment="001" rule="BR-1" kind="unassigned" status="pending">
**Title:** <observable behavior>
**Given** <starting state>
**When** <action>
**Then** <observable outcome>
</stub>

## Coverage

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-001 | <unit / component / integration / e2e-api / e2e-browser> | <engineer / Wylie> | <existing path + title, or explicitly proposed> | <what detects the failure; what stays unproven> | <smallest sufficient proof; E2E: connection, unique failure, reuse decision> | <PR smoke / affected / broader stage; link execution map> |

One stub may have multiple rows. One journey may cover multiple stubs with explicit assertions. These are recommendations until QA checks the actual evidence. No universal one-stub/one-test rule.

## Evidence

| Stub | Result | Test / command | Code identity | Result artifact / output | Limitations |
|---|---|---|---|---|---|
| TS-001 | pending | <not yet run> | <revision or working tree identity> | <link when available> | <missing assertions, dependencies, or environment> |

<!-- status: pending | passing | failing | blocked. Historical evidence is
not a claim of a current run. QA_REPORT holds each increment's assessment. -->
