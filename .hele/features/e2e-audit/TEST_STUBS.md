---
feature: e2e-audit
doc: TEST_STUBS
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
updated: 2026-11-18
---

# Test Stubs — Existing E2E Suite Audit

Derived from the approved PRD and its increment slice map before test inspection. New scenarios start pending; technical evidence is mapped separately below.

<stub id="TS-001" increment="001" rule="BR-1" kind="integration" status="pending">
**Title:** Audit without setup prerequisites
**Given** a person names a suite or requests the project suites, with or without project memory
**When** the audit starts directly or through the conductor
**Then** the requested scope is used, saved settings or plugin defaults apply, and no memory initialization, design interview, task setup, product description or increment is required.
</stub>

<stub id="TS-002" increment="001" rule="BR-2" kind="integration" status="pending">
**Title:** Keep audit recommendations read-only
**Given** an audit identifies candidate improvements
**When** the report is written
**Then** tests, application code, dependencies, CI, snapshots and quarantine stay unchanged, and implementation requires a separate request identifying the subset.
</stub>

<stub id="TS-003" increment="001" rule="BR-3" kind="integration" status="pending">
**Title:** Expose complete or partial scope
**Given** the requested suite has multiple journeys, configurations and matrix cases
**When** the audit inventories it
**Then** reviewed and excluded scope, revision and working-tree state, runner, known declared and expanded counts, assertions, helpers, fixtures, mocks and CI selection are accounted for; batching retains one inventory and limits explicitly name unreviewed work.
</stub>

<stub id="TS-004" increment="001" rule="BR-3" kind="integration" status="pending">
**Title:** Report an absent suite honestly
**Given** the reviewed project contains no E2E suite
**When** the audit completes discovery
**Then** a short no-suite report is produced without creating tests or describing a sample as complete coverage.
</stub>

<stub id="TS-005" increment="001" rule="BR-4" kind="integration" status="pending">
**Title:** Reuse measurements and label unknowns
**Given** existing result artifacts or logs are available but some costs are missing
**When** the audit assesses performance
**Then** available evidence is reused without starting the stack, installing packages or running an expensive suite; unknown measurements include an exact scoped follow-up command, and any benchmark requires its own agreed request.
</stub>

<stub id="TS-006" increment="001" rule="BR-5" kind="integration" status="pending">
**Title:** Compare assertions and real guarantees
**Given** tests have similar names or visit similar experiences
**When** coverage is assessed
**Then** each test or coherent group records behavior, actual connection, meaningful role/state/device/timing distinctions, real and simulated dependencies, equivalent assertions, unique failures, owner/stage and measured cost, with exact assertion references; uncertain intent stays explicit and business priorities are not invented.
</stub>

<stub id="TS-007" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Keep and optimize useful unique guarantees
**Given** a test protects a useful failure that would otherwise escape
**When** the audit ranks actions
**Then** keep names the unique coverage and escaping regression, while optimize preserves that guarantee and identifies demonstrated cost rather than removing protection.
</stub>

<stub id="TS-008" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Make replacements and consolidation conditional
**Given** a test could be covered by a smaller test or surviving journey
**When** the audit recommends replacement or consolidation
**Then** the report names surviving assertions, real boundaries and missing proof, preserves independent failure diagnosis, and requires replacement implementation and validation before removal.
</stub>

<stub id="TS-009" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Require surviving proof for removal
**Given** a proposed cut has equivalent current proof, intentionally obsolete behavior, or uncertain intent
**When** the audit chooses a primary action
**Then** removal cites surviving proof or obsolescence and targeted validation, while uncertainty leads to investigate with protection retained; conditional cuts and retained tests remain visible.
</stub>

<stub id="TS-010" increment="001" rule="BR-7" kind="integration" status="pending">
**Title:** Reject misleading value proxies
**Given** a test is slow, flaky, old or rarely failing, or differs by device, role or state
**When** its value is assessed
**Then** those facts alone never justify removal; product races, test defects and environment failures are distinguished, actual boundaries determine test level, and distinct guarantees survive count-reduction proposals.
</stub>

<stub id="TS-011" increment="001" rule="BR-8" kind="integration" status="pending">
**Title:** Make cost claims dimensionally honest
**Given** measurements include concurrent jobs, setup, retries and execution
**When** the audit explains costs
**Then** pipeline time, job time, execution, startup, browser installation, retries and parallelism are separated; facts, estimates, hypotheses and unknowns are labeled with sources, parallel duration sums do not become savings, and no matrix or blocking gate is silently demoted.
</stub>

<stub id="TS-012" increment="001" rule="BR-9" kind="integration" status="pending">
**Title:** Write and refresh a durable report
**Given** memory may exist, an output may be chosen, and an older report may contain unresolved decisions
**When** the audit writes its result
**Then** the chosen output wins, otherwise initialized projects use the reports area and other projects the root; existing scope/revision history and unresolved decisions survive refresh, with diagnosis, confidence, limits, prioritized actions, complete scoped inventory, prerequisites and follow-up measurements; no safe cuts is stated when applicable.
</stub>

<stub id="TS-013" increment="001" rule="BR-10" kind="integration" status="pending">
**Title:** Order future implementation around preserved evidence
**Given** the report proposes replacement, removal or CI selection changes
**When** the follow-up sequence is presented
**Then** replacement proof precedes validation and removal/consolidation, then justified CI changes and measurement; each action has owner, commands, dependencies and rollback, selectors include mappings, broad-change fallback, blocking stage and real later trigger/owner, and existing gates remain until replacement validation.
</stub>

<stub id="TS-014" increment="001" rule="BR-11" kind="integration" status="pending">
**Title:** Keep report ownership and handoff explicit
**Given** the assessment includes optional CI investigation
**When** the report is handed to the human
**Then** Wylie owns the report and incorporates Rigsby findings within concurrency and ownership limits; the chat-language handoff links the report, ranks actions, discloses partial scope and says only the report was written; separately requested application assigns smaller tests, E2E and CI to their respective owners with proof before removal.
</stub>

## Coverage

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-001 | integration | Wylie + Lisbon | cli/test/cli.test.js: existing-suite audit help is discoverable without an initialized project; proposed live audit assessment | Real CLI help resolves three audit names and leaves its empty temporary directory unchanged. This executes help only. Remaining: The live audit was not invoked: routing, default/settings selection, no-setup behavior and report-only mutation boundary remain unproven. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-002 | integration | Wylie + Lisbon | cli/test/cli.test.js: existing-suite audit help is discoverable without an initialized project; proposed live audit assessment | Real CLI help resolves three audit names and leaves its empty temporary directory unchanged. This executes help only. Remaining: The live audit was not invoked: routing, default/settings selection, no-setup behavior and report-only mutation boundary remain unproven. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-003 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-004 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-005 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-006 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-007 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-008 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-009 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-010 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-011 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-012 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-013 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-014 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |

## Evidence

| Stub | Result | Test / command | Code identity | Result artifact / output | Limitations |
|---|---|---|---|---|---|
| TS-001 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | The live audit was not invoked: routing, default/settings selection, no-setup behavior and report-only mutation boundary remain unproven. |
| TS-002 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | The live audit was not invoked: routing, default/settings selection, no-setup behavior and report-only mutation boundary remain unproven. |
| TS-003 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-004 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-005 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-006 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-007 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-008 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-009 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-010 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-011 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-012 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-013 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-014 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |

All scenarios remain pending because no mapped behavior has every required assertion demonstrated. The shared run passed 27 tests; this is not 27 accepted product scenarios. The reported user plugin-update/init/read exercise is partial contextual evidence without a retained branch-complete trace, and is not promoted to a passing stub.
