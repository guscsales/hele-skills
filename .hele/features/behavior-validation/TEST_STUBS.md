---
feature: behavior-validation
doc: TEST_STUBS
version: "1.1"
based_on: PRODUCT_DESCRIPTION v1.1
updated: 2026-11-25
---

# Test Stubs — behavior-validation

Derived from the approved product description and its changelog slice map before inspecting tests. All behaviors remain required unless explicitly retired. No execution plan was used.

<stub id="TS-001" increment="001" rule="BR-1" kind="integration" status="pending">
**Title:** Derive independent behavior coverage
**Given** approved product rules and named flows exist.
**When** acceptance scenarios are authored.
**Then** expectations come from those rules before implementation proof is inspected, cover unhappy branches and boundaries, and disclose any unmapped rule without deriving expectations from the execution plan.
</stub>

<stub id="TS-002" increment="001" rule="BR-2" kind="integration" status="pending">
**Title:** Preserve and revise stable scenarios
**Given** an acceptance document already contains identified behaviors.
**When** a product expectation changes.
**Then** the same identity is rewritten in place with its three-digit origin and rule; new or changed expectations remain pending current proof.
</stub>

<stub id="TS-003" increment="001" rule="BR-2" kind="integration" status="pending">
**Title:** Retire only approved removed behavior
**Given** a scenario is blocked or its behavior may have been removed.
**When** the scenario contract is reconciled.
**Then** blocked behavior remains required unless an approved product decision explicitly retires it; a retired behavior keeps its identity and retirement reference.
</stub>

<stub id="TS-004" increment="001" rule="BR-3" kind="integration" status="pending">
**Title:** Separate behavior and technical proof
**Given** behavioral scenarios have been derived.
**When** validation is recommended.
**Then** a separate mapping identifies level, owner, existing or proposed proof, assertions, boundaries, rationale and scope; shared journeys identify assertions for each behavior and inspection alone is not passing.
</stub>

<stub id="TS-005" increment="001" rule="BR-4" kind="integration" status="pending">
**Title:** Keep acceptance approval and versions aligned
**Given** a scenario document changes.
**When** it joins the product review.
**Then** its version, product basis and registry agree with approved rules, coverage adds no separate approval stop and authoring does not prematurely create a human verification artifact.
</stub>

<stub id="TS-006" increment="002" rule="BR-5" kind="integration" status="pending">
**Title:** Prepare honest human flow setup
**Given** changed human-facing experience requires review.
**When** QA prepares the replay.
**Then** open location, inspected setup, data, steps and expected outcomes are provided and labeled executed or prepared accurately; missing setup is blocked and credentials or UI execution are never invented.
</stub>

<stub id="TS-007" increment="002" rule="BR-5" kind="integration" status="pending">
**Title:** Handle work without human flows
**Given** the assessed work has no applicable human experience.
**When** verification is prepared.
**Then** the absence of human flows is explained and normal closure still waits for required automated evidence.
</stub>

<stub id="TS-008" increment="002" rule="BR-6" kind="integration" status="pending">
**Title:** Collect one explicit verdict at a time
**Given** prepared flows await human review.
**When** the human starts the walk.
**Then** one happy flow and then risky unhappy flows are shown in order; only the human verdict for the shown flow records verified, issue or skipped, without inferring other passes.
</stub>

<stub id="TS-009" increment="002" rule="BR-7" kind="integration" status="pending">
**Title:** Rewind issues without losing valid passes
**Given** some flows are verified and the human reports a defect.
**When** correction is routed.
**Then** the walk stops and the same increment returns to definition and delivery; unaffected passes remain verified while affected and other unverified flows refresh from current QA.
</stub>

<stub id="TS-010" increment="002" rule="BR-8" kind="integration" status="pending">
**Title:** Prevent closure over automated gaps
**Given** the human has accepted a flow but required automated evidence is failed or missing.
**When** normal closure is considered.
**Then** the gap remains unresolved and prevents normal closure despite human acceptance.
</stub>

<stub id="TS-011" increment="002" rule="BR-8" kind="integration" status="pending">
**Title:** Offer closure choices after evidence
**Given** required proof passes and human flow handling is complete.
**When** the work is ready to close.
**Then** the human can choose ready PR, draft PR, no PR or correction; ready PR follows CI and no PR does not push.
</stub>

<stub id="TS-012" increment="002" rule="BR-9" kind="integration" status="pending">
**Title:** Preserve skip continuation limitation
**Given** the human skips a verification flow.
**When** continuation or resumption is assessed.
**Then** skip remains distinct from verified and the conflicting next-unverified versus first-pending instructions are disclosed as unresolved rather than claimed validated.
</stub>

<stub id="TS-013" increment="003" rule="BR-10" kind="integration" status="pending">
**Title:** Report every assessment with current proof
**Given** QA assesses required behaviors including a zero-E2E, failing or blocked run.
**When** the report is written.
**Then** each required behavior has titled scenario/rule mapping, proof or explicit gap, assertions, boundaries, command/result, identity, environment and outputs; reused and fresh results remain distinct.
</stub>

<stub id="TS-014" increment="003" rule="BR-10" kind="integration" status="pending">
**Title:** Reject unsupported green reports
**Given** only historical status, a test file, screenshot, mock or old CI result supports a required claim.
**When** QA assesses current proof.
**Then** the report does not present that claim as a newly executed pass or derive green from it.
</stub>

<stub id="TS-015" increment="003" rule="BR-11" kind="integration" status="pending">
**Title:** Classify findings and route owners
**Given** QA finds a defect, missing proof, ambiguity or environmental blocker.
**When** findings are recorded.
**Then** each has its class, evidence, impact, owner and required confirmation; product defects and any gap or test defect that needs product code belong to the relevant engineer, a gap or test defect that needs only test-file changes and raises no contract question is test-only and closed by QA in the same run, QA owns its journeys, and product ambiguity returns to the human without weakening expectations.
</stub>

<stub id="TS-016" increment="003" rule="BR-11" kind="integration" status="pending">
**Title:** Separate assessment and fix tracking
**Given** a report is recorded with unresolved actionable findings.
**When** tracking is updated.
**Then** the assessment can close while actionable fix records stay open until resolved.
</stub>

<stub id="TS-017" increment="003" rule="BR-12" kind="integration" status="pending">
**Title:** Reconstruct without invented reruns
**Given** a QA report is missing or stale and prior outputs exist.
**When** reconstruction is requested.
**Then** the report uses available outputs, mappings and identity without running tests merely to recreate it; stale or missing proof stays non-passing and original failures and retries remain visible.
</stub>

<stub id="TS-018" increment="003" rule="BR-13" kind="integration" status="pending">
**Title:** Keep fixes subject to authorization
**Given** a QA report contains product defects, contract questions or test-only gaps it already closed.
**When** next actions are presented.
**Then** human verification and correction remain choices; a fix choice is added only for product defects and a decision choice only for contract questions; closed test-only gaps are listed as closed and add no choice; only authorized corrections enter delivery with affected confirmation scope; absorption itself does not start fixes or a walk.
</stub>

<stub id="TS-019" increment="004" rule="BR-14" kind="integration" status="pending">
**Title:** Choose proof by the failure boundary
**Given** a scenario needs validation.
**When** QA inspects available assertions, fixtures and dependencies.
**Then** the smallest sufficient level is justified by the actual failure and real versus mocked connection, rather than importance or the test label.
</stub>

<stub id="TS-020" increment="004" rule="BR-15" kind="integration" status="pending">
**Title:** Justify end-to-end additions
**Given** a proposed journey crosses a real product connection.
**When** QA decides how to prove the behavior.
**Then** the connection and failure missed by smaller tests are named; existing journeys are reused before extension or addition and the claimed connection is not mocked or combined with unrelated journeys.
</stub>

<stub id="TS-021" increment="004" rule="BR-15" kind="integration" status="pending">
**Title:** Allow sufficient proof without new E2E
**Given** sufficient smaller proof exists and affected journeys are known.
**When** QA selects execution.
**Then** zero new E2E is permitted while selected existing affected journeys still need valid proof.
</stub>

<stub id="TS-022" increment="004" rule="BR-16" kind="integration" status="pending">
**Title:** Select regressions beyond the increment
**Given** behavior changes have shared dependencies or uncertain impact.
**When** execution scope is selected.
**Then** new and changed behavior plus affected cross-feature regressions are selected using mappings, dependencies or traces; shared changes or uncertainty broaden scope rather than relying only on increment tags.
</stub>

<stub id="TS-023" increment="004" rule="BR-17" kind="integration" status="pending">
**Title:** Reuse only unchanged relevant evidence
**Given** a prior engineering or confirmation result is available.
**When** QA evaluates reuse.
**Then** unchanged relevant code, fixtures, dependencies and environment permit labeled reuse with original command, output and identity; relevant change requires a new check.
</stub>

<stub id="TS-024" increment="004" rule="BR-18" kind="integration" status="pending">
**Title:** Make statuses reflect actual proof
**Given** required assertions have current results, missing proof, an environmental obstacle or a failed execution.
**When** QA assigns status.
**Then** only complete current assertions pass; missing proof is pending, obstacles are blocked and failed assertions fail; any required non-pass prevents green and retains an owner.
</stub>

<stub id="TS-025" increment="004" rule="BR-19" kind="integration" status="pending">
**Title:** Keep CI proposals separate from effective gates
**Given** coverage selection or a faster CI policy is proposed.
**When** execution policy is recorded.
**Then** existing blocking gates stay effective until a replacement and broad-change fallback are validated; mappings identify commands, dependencies, owners, triggers and stages, and deferred coverage has a real trigger and owner.
</stub>

<stub id="TS-026" increment="004" rule="BR-19" kind="integration" status="pending">
**Title:** Report timing without invented savings
**Given** test or pipeline cost is reported.
**When** QA explains performance impact.
**Then** wall-clock, setup, retries and test duration remain distinct, unknowns stay unknown and parallel test durations do not become additive savings.
</stub>

<stub id="TS-027" increment="004" rule="BR-20" kind="integration" status="pending">
**Title:** Retain only useful bounded screenshots
**Given** visible evidence could help a finding.
**When** screenshots are selected.
**Then** only settled, inspected, full-size paletted 1920 by 1080 captures within the configured ceiling are retained; overflow remains scratch and no before image or app run is fabricated.
</stub>

<stub id="TS-028" increment="004" rule="BR-20" kind="integration" status="pending">
**Title:** Allow zero screenshots without unrelated pruning
**Given** no image adds useful evidence.
**When** routine QA completes its assessment.
**Then** zero screenshots is valid, assertions still establish behavior and unrelated suites are not pruned as routine QA.
</stub>

<stub id="TS-029" increment="direct" rule="BR-21" kind="unassigned" status="pending">
**Title:** Close a test-only gap inside the same QA run
**Given** QA finds a coverage gap or test defect that needs only test-file changes, no product code and no contract question, including one in a suite another engineer owns.
**When** QA assesses the evidence.
**Then** QA adds or corrects the assertion in the owning test file during the same run and executes only that test file; other evidence is reused when current, and no separate worktree, dependency install or full-suite run is ordered for it.
</stub>

<stub id="TS-030" increment="direct" rule="BR-21" kind="unassigned" status="pending">
**Title:** Report closed gaps without an approval choice
**Given** QA closed one or more test-only gaps and the new assertions pass on current code.
**When** the QA report and its next actions are presented.
**Then** each closed gap is listed with its test and result, and no approval or fix choice is offered for it.
</stub>

<stub id="TS-031" increment="direct" rule="BR-21" kind="unassigned" status="pending">
**Title:** A failing new assertion becomes a product defect
**Given** QA adds an assertion to close a test-only gap.
**When** that assertion fails against current code.
**Then** the finding is reported as a product defect routed to its owning engineer with the fix choice kept, the assertion is not weakened to pass, and QA does not change product code.
</stub>

<stub id="TS-032" increment="direct" rule="BR-22" kind="unassigned" status="pending">
**Title:** Check returned scenario coverage before QA
**Given** the build finished and engineers returned the scenario IDs and assertions they covered.
**When** the delivery lead prepares to start QA.
**Then** the returned list is compared with the increment's required scenarios without running tests, and QA starts only when every required scenario has a returned assertion or a recorded reason.
</stub>

<stub id="TS-033" increment="direct" rule="BR-22" kind="unassigned" status="pending">
**Title:** Send back only the missing scenario
**Given** a required scenario has neither a returned assertion nor a recorded reason at the end of the build.
**When** the coverage comparison runs.
**Then** that scenario alone goes back to its owning engineer before QA starts; scenarios already covered are not reassigned and QA does not start while the gap remains.
</stub>

## Coverage

Technical mapping was added after PRD-first derivation. The inspected existing suite is `cli/test/*.test.js`; it exercises CLI subprocesses, local helper functions and source-text assertions, not Claude agent choices or consumer UI fidelity. Proposed evaluations below are recommendations, not installed tests or a new execution policy.

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-001 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Derive independent behavior coverage | Assert: expectations come from those rules before implementation proof is inspected, cover unhappy branches and boundaries, and disclose any unmapped rule without deriving expectations from the execution plan. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-002 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Preserve and revise stable scenarios | Assert: the same identity is rewritten in place with its three-digit origin and rule; new or changed expectations remain pending current proof. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-003 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Retire only approved removed behavior | Assert: blocked behavior remains required unless an approved product decision explicitly retires it; a retired behavior keeps its identity and retirement reference. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-004 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Separate behavior and technical proof | Assert: a separate mapping identifies level, owner, existing or proposed proof, assertions, boundaries, rationale and scope; shared journeys identify assertions for each behavior and inspection alone is not passing. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-005 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Keep acceptance approval and versions aligned | Assert: its version, product basis and registry agree with approved rules, coverage adds no separate approval stop and authoring does not prematurely create a human verification artifact. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-006 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Prepare honest human flow setup | Assert: open location, inspected setup, data, steps and expected outcomes are provided and labeled executed or prepared accurately; missing setup is blocked and credentials or UI execution are never invented. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-007 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Handle work without human flows | Assert: the absence of human flows is explained and normal closure still waits for required automated evidence. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-008 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Collect one explicit verdict at a time | Assert: one happy flow and then risky unhappy flows are shown in order; only the human verdict for the shown flow records verified, issue or skipped, without inferring other passes. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-009 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Rewind issues without losing valid passes | Assert: the walk stops and the same increment returns to definition and delivery; unaffected passes remain verified while affected and other unverified flows refresh from current QA. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-010 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Prevent closure over automated gaps | Assert: the gap remains unresolved and prevents normal closure despite human acceptance. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-011 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Offer closure choices after evidence | Assert: the human can choose ready PR, draft PR, no PR or correction; ready PR follows CI and no PR does not push. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-012 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Preserve skip continuation limitation | Assert: skip remains distinct from verified and the conflicting next-unverified versus first-pending instructions are disclosed as unresolved rather than claimed validated. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-013 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Report every assessment with current proof | Assert: each required behavior has titled scenario/rule mapping, proof or explicit gap, assertions, boundaries, command/result, identity, environment and outputs; reused and fresh results remain distinct. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-014 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Reject unsupported green reports | Assert: the report does not present that claim as a newly executed pass or derive green from it. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-015 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Classify findings and route owners | Assert: each has its class, evidence, impact, owner and required confirmation; product defects and gaps needing product code go to the relevant engineer, test-only gaps are closed by QA in the same run, QA owns its journeys, and product ambiguity returns to the human without weakening expectations. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-015 | unit | Cho (harness contract text); Wylie reviews | `cli/test/qa-test-only-gaps.test.js` (new, untracked, being written by Cho in this delivery) / Wylie may add or correct assertions in engineer suites (test files only) and never touches product code | Asserts the QA persona no longer routes engineer-suite gaps to Lisbon, allows test-file-only edits in engineer suites and says never product code. Gap: no assertion that a gap needing product code still routes to the owning engineer. Unproven: live classification. | Smallest proof that the rewritten ownership is in the contract; live row above stays the behavioral proof. | Targeted: `cd cli && node --test test/qa-test-only-gaps.test.js`; PR CI runs it through the existing `npm test` step in `.github/workflows/ci.yml`. |
| TS-016 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Separate assessment and fix tracking | Assert: the assessment can close while actionable fix records stay open until resolved. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-017 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Reconstruct without invented reruns | Assert: the report uses available outputs, mappings and identity without running tests merely to recreate it; stale or missing proof stays non-passing and original failures and retries remain visible. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-018 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Keep fixes subject to authorization | Assert: human verification and correction remain choices; a fix choice only for product defects and a decision choice only for contract questions; closed test-only gaps are listed and add no choice; only authorized corrections enter delivery with affected confirmation scope; absorption itself does not start fixes or a walk. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-018 | unit | Cho (harness contract text); Wylie reviews | `cli/test/qa-test-only-gaps.test.js` (new, untracked, being written by Cho in this delivery) / option 3 is only for product bugs or failures that need product code; option 4 stays for contract questions; conductor and docs no longer say coverage gaps offer the fix round; diagram and README tests | Asserts QA route option 3 drops coverage gaps and names product code, option 4 keeps contract questions, `skills/hele/SKILL.md`, `.docs/skills.md`, `cli/src/flow-diagram.js` and `README.md` no longer offer a gap fix round. Unproven: live menu rendering. | Choice wording lives in contract text and the diagram; a text assertion is the smallest check that detects a regression. | Targeted: `cd cli && node --test test/qa-test-only-gaps.test.js`; PR CI runs it through the existing `npm test` step in `.github/workflows/ci.yml`. |
| TS-019 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Choose proof by the failure boundary | Assert: the smallest sufficient level is justified by the actual failure and real versus mocked connection, rather than importance or the test label. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-020 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Justify end-to-end additions | Assert: the connection and failure missed by smaller tests are named; existing journeys are reused before extension or addition and the claimed connection is not mocked or combined with unrelated journeys. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-021 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Allow sufficient proof without new E2E | Assert: zero new E2E is permitted while selected existing affected journeys still need valid proof. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-022 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Select regressions beyond the increment | Assert: new and changed behavior plus affected cross-feature regressions are selected using mappings, dependencies or traces; shared changes or uncertainty broaden scope rather than relying only on increment tags. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-023 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Reuse only unchanged relevant evidence | Assert: unchanged relevant code, fixtures, dependencies and environment permit labeled reuse with original command, output and identity; relevant change requires a new check. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-024 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Make statuses reflect actual proof | Assert: only complete current assertions pass; missing proof is pending, obstacles are blocked and failed assertions fail; any required non-pass prevents green and retains an owner. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-025 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Keep CI proposals separate from effective gates | Assert: existing blocking gates stay effective until a replacement and broad-change fallback are validated; mappings identify commands, dependencies, owners, triggers and stages, and deferred coverage has a real trigger and owner. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-026 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Report timing without invented savings | Assert: wall-clock, setup, retries and test duration remain distinct, unknowns stay unknown and parallel test durations do not become additive savings. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-027 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Retain only useful bounded screenshots | Assert: only settled, inspected, full-size paletted 1920 by 1080 captures within the configured ceiling are retained; overflow remains scratch and no before image or app run is fabricated. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-028 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Allow zero screenshots without unrelated pruning | Assert: zero screenshots is valid, assertions still establish behavior and unrelated suites are not pruned as routine QA. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | A controlled live workflow must show the decision and resulting artifacts; source-presence assertions cannot detect noncompliant agent behavior. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-029 | unit | Cho (harness contract text); Wylie reviews | `cli/test/qa-test-only-gaps.test.js` (new, untracked, being written by Cho in this delivery) / Wylie closes a test-only coverage-gap or test-defect in the same run, engineer suites included, running only that file; Wylie may add or correct assertions in engineer suites (test files only) | Asserts `skills/hele-qa/SKILL.md` phase `3-run-and-record` names test-only, coverage-gap, test-defect, engineer-owned suites, only that test file and no product code; persona allows test-file-only edits. Gap: nothing asserts that no worktree, dependency install or full-suite run is ordered for the closure, nor that other evidence is reused; recommend one assertion each. Unproven: a live run actually editing and running only that file. | Contract text is the smallest detectable proof in this harness; one test file can cover TS-029..TS-031 with one assertion group each. | Targeted: `cd cli && node --test test/qa-test-only-gaps.test.js`; PR CI runs it through the existing `npm test` step in `.github/workflows/ci.yml`. |
| TS-030 | unit | Cho (harness contract text); Wylie reviews | `cli/test/qa-test-only-gaps.test.js` (new, untracked, being written by Cho in this delivery) / the report lists closed gaps with test and result, and offers no approval for them; chat-reports shows closed gaps one line each and drops the coverage-gap approval row; qa-report template has a closed-gaps place | Asserts `gaps closed` and a no-option statement in phase `4-report-and-route`, the chat-reports row removal and a closed place in `templates/qa-report.md`. Gap: the `/closed/i` template check would pass on any use of the word, and nothing asserts the closed entry carries its test and result; recommend asserting a closed-gaps heading or column with test and result. Unproven: rendered report. | Same file; tightening the two loose matches keeps it the smallest sufficient proof. | Targeted: `cd cli && node --test test/qa-test-only-gaps.test.js`; PR CI runs it through the existing `npm test` step in `.github/workflows/ci.yml`. |
| TS-031 | unit | Cho (harness contract text); Wylie reviews | `cli/test/qa-test-only-gaps.test.js` (new, untracked, being written by Cho in this delivery) / a new assertion that fails on current code becomes a product-bug routed to its engineer; option 3 is only for product bugs or failures that need product code | Asserts the fail-on-current-code to product-bug sentence in phase `3-run-and-record`, the product-code fix option and the persona's never product code. Gap: no assertion that the failing assertion is kept, not weakened. Unproven: live routing. | Same file and group as TS-029; no separate test needed. | Targeted: `cd cli && node --test test/qa-test-only-gaps.test.js`; PR CI runs it through the existing `npm test` step in `.github/workflows/ci.yml`. |
| TS-029, TS-030, TS-031 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Close test-only gaps inside the same QA run | Assert on a fixture increment with one test-only gap and one gap whose new assertion fails: the run edits only the test file, executes only that file, lists the closed gap with test and result and no choice, and routes the failing one as a product defect with the fix choice. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | Contract text cannot detect a noncompliant agent run; a controlled live workflow must show the decision and resulting artifacts. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |
| TS-032 | unit | Cho (harness contract text); Wylie reviews | `cli/test/qa-test-only-gaps.test.js` (new, untracked, being written by Cho in this delivery) / Lisbon compares returned TS IDs and assertions with the required stubs, as a list comparison | Asserts `skills/hele-build/SKILL.md` phases `1-dispatch-loop` and `2-verify` name required stubs, a list comparison and no test run. Unproven: live comparison on a real build return. | Contract text is the smallest proof that the check exists and is not a test run. | Targeted: `cd cli && node --test test/qa-test-only-gaps.test.js`; PR CI runs it through the existing `npm test` step in `.github/workflows/ci.yml`. |
| TS-033 | unit | Cho (harness contract text); Wylie reviews | `cli/test/qa-test-only-gaps.test.js` (new, untracked, being written by Cho in this delivery) / a missing stub goes back to its owning engineer alone before QA; QA starts on assertion or recorded reason | Asserts `only that stub` and `recorded reason` in the same phases. Gap: the title claims owning engineer and before QA but neither is asserted; recommend matching both. Unproven: live re-dispatch. | Same describe group as TS-032. | Targeted: `cd cli && node --test test/qa-test-only-gaps.test.js`; PR CI runs it through the existing `npm test` step in `.github/workflows/ci.yml`. |
| TS-032, TS-033 | integration | Wylie / owning harness engineer | Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite / Check scenario coverage before QA | Assert on a fixture build where one engineer omits a required scenario: the conductor runs no tests for the check, re-dispatches only that scenario to its owner, and QA starts only after an assertion or recorded reason returns. Real runtime decisions and relevant artifacts must be observed; mocked tool output cannot prove external fidelity. | Contract text cannot detect a noncompliant agent run; a controlled live workflow must show the decision and resulting artifacts. | Proposed targeted fixture evaluation; not in CI. Existing broader CLI smoke follows `.github/workflows/ci.yml`. |

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
| TS-011 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-012 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | Approved contract limitation: next not-verified versus first pending may revisit skipped flows. No skip/resume run exists; skipped is not verified. |
| TS-013 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-014 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-015 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-016 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-017 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-018 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-019 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-020 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-021 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-022 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-023 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-024 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-025 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-026 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-027 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-028 | pending | Required scenario not executed; shared `cd cli && npm test` reused only as adjacent regression | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` plus documentation-only absorption work | [Shared execution](../../reports/absorb-cli-execution.md), [TAP](../../reports/absorb-cli-tests.tap) | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. |
| TS-029 | pending | Not yet run; mapped assertions are being written in this delivery | Working tree on `qa-auto-close-test-gaps` (uncommitted) | none yet | Contract-text assertions only; no live workflow evaluation. Wylie did not run tests in this scenario pass. |
| TS-030 | pending | Not yet run; mapped assertions are being written in this delivery | Working tree on `qa-auto-close-test-gaps` (uncommitted) | none yet | Contract-text assertions only; no live workflow evaluation. Wylie did not run tests in this scenario pass. |
| TS-031 | pending | Not yet run; mapped assertions are being written in this delivery | Working tree on `qa-auto-close-test-gaps` (uncommitted) | none yet | Contract-text assertions only; no live workflow evaluation. Wylie did not run tests in this scenario pass. |
| TS-032 | pending | Not yet run; mapped assertions are being written in this delivery | Working tree on `qa-auto-close-test-gaps` (uncommitted) | none yet | Contract-text assertions only; no live workflow evaluation. Wylie did not run tests in this scenario pass. |
| TS-033 | pending | Not yet run; mapped assertions are being written in this delivery | Working tree on `qa-auto-close-test-gaps` (uncommitted) | none yet | Contract-text assertions only; no live workflow evaluation. Wylie did not run tests in this scenario pass. |

The shared CLI run passed 27/27 tests (0 failures, no retries), 0.602 s wall-clock; it gives **zero full behavioral passes** for these scenarios. All business rules and named flow branches map above. No scenario is retired. Scenario status reflects missing or blocked runtime proof, not an assertion failure.

## Changelog

- v1.1 (2026-11-25) — PRD v1.1 delta, delivered on the direct path (no increment; new stubs carry `increment="direct"`). Rewritten in place: TS-015 (BR-11), TS-018 (BR-13). Added: TS-029, TS-030, TS-031 (BR-21), TS-032, TS-033 (BR-22). Coverage rows added for contract-text tests in `cli/test/qa-test-only-gaps.test.js`.
- v1.0 (2026-11-18) — absorbed from the app.
