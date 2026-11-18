---
feature: product-absorption
increment: 002-report-current-validation-and-gaps
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — product-absorption · increment 002 · run 1

## Summary

Assessed 7 required scenarios from the approved v1.0 contract: 0 passing, 7 pending, 0 observed failing assertions and 0 scenario execution blockers established. The red verdict records coverage gaps, not a proven product failure. The shipped workflow is instruction-driven; passing CLI primitive tests do not prove live multiagent behavior. No execution plan was read, no production/test changes or fix tasks were created, and no manual walk was initiated. Historical built records remain frozen.

`cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. [Shared execution identity](../../../../reports/absorb-cli-execution.md) and [raw TAP](../../../../reports/absorb-cli-tests.tap) are reused, not rerun. Zero live workflow integrations or E2E were executed. Existing human replay prerequisites are unconfirmed; this is separate from the missing automated assertions.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-021 · Derive independent acceptance behavior before proof mapping | BR-12 · Derive acceptance behavior before mapping existing tests | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-022 · Assess each slice while reusing valid current proof | BR-13 · Evaluate proof per slice without duplicating valid executions | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-023 · Distinguish missing, blocked and failing proof honestly | BR-13 · Evaluate proof per slice without duplicating valid executions | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-024 · Prepare validation artifacts without triggering remediation | BR-14 · Record the product today without starting remediation or a manual walk | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-025 · Use optional honest current-state visuals | BR-14 · Record the product today without starting remediation or a manual walk | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-026 · Close writing and report gaps separately from completion | BR-15 · Report completed writing separately from validation success | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-027 · Respect language and disclose the adapted runtime | BR-15 · Report completed writing separately from validation success | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |

### TS-021 · Derive independent acceptance behavior before proof mapping · pending

**Rule:** BR-12 · Derive acceptance behavior before mapping existing tests

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/002 — Derive independent acceptance behavior before proof mapping`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: product expectations are derived without reading implementation plans, each has a stable identity, originating three-digit increment and rule reference, and only afterward are existing tests mapped separately; new scenarios remain pending until current proof supports them. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-022 · Assess each slice while reusing valid current proof · pending

**Rule:** BR-13 · Evaluate proof per slice without duplicating valid executions

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/002 — Assess each slice while reusing valid current proof`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: each slice is assessed under the shared policy, valid shared runs are reused rather than repeated per folder and selection follows behavior and actual evidence even without production changes. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-023 · Distinguish missing, blocked and failing proof honestly · pending

**Rule:** BR-13 · Evaluate proof per slice without duplicating valid executions

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/002 — Distinguish missing, blocked and failing proof honestly`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: missing proof is pending with an owner, prevented validation is blocked and failed assertions are failing; source inspection and historical results alone never become passing evidence. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-024 · Prepare validation artifacts without triggering remediation · pending

**Rule:** BR-14 · Record the product today without starting remediation or a manual walk

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/002 — Prepare validation artifacts without triggering remediation`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: each slice receives a QA report and prepared verification artifact without ordinary QA routing, implementation/fix tasks against frozen plans or starting the human walk. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-025 · Use optional honest current-state visuals · pending

**Rule:** BR-14 · Record the product today without starting remediation or a manual walk

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/002 — Use optional honest current-state visuals`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: useful current-state screenshots follow quality and retention rules, no fictional before/after is produced and justified zero new E2E or screenshots leaves unresolved proof explicit. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-026 · Close writing and report gaps separately from completion · pending

**Rule:** BR-15 · Report completed writing separately from validation success

**Proof:** `cli/test/language.test.js` — `language defaults split chat from artifacts` and `chat templates render tables in the session language` inspect configuration and text. They do not execute final-report ordering, completeness or runtime language compliance. Proposed runtime integration replay: `product-absorption/002 — Close writing and report gaps separately from completion`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the index and every increment QA task close before the write epic, and the final report counts features, historical increments, scenarios, evidence and gaps or blockers with file links; built history never hides incomplete validation. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-027 · Respect language and disclose the adapted runtime · pending

**Rule:** BR-15 · Report completed writing separately from validation success

**Proof:** `cli/test/language.test.js` — `language defaults split chat from artifacts` and `chat templates render tables in the session language` inspect configuration and text. They do not execute final-report ordering, completeness or runtime language compliance. Proposed runtime integration replay: `product-absorption/002 — Respect language and disclose the adapted runtime`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: files follow artifact language and reports follow chat language; strict-model versus inheritance remains a limitation and Claude Code remains the shipped distribution, without claiming native Codex support. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

## Selected regressions

| Journey / test | Feature / stubs | Why affected | Result / evidence |
|---|---|---|---|
| `cli/test/cli.test.js`, `cli/test/dir.test.js`, `cli/test/find.test.js`, `cli/test/language.test.js` | `project-memory` lookup/configuration; `guided-delivery` help/language; `product-absorption` indirect lookup/report defaults; `e2e-audit` help discovery | Shared bootstrap/configuration/lookup/help dependencies and uncertain workflow impact justify reusing the full small existing suite, not selecting solely by increment tag. No production diff. | 27/27 pass, reused [TAP](../../../../reports/absorb-cli-tests.tap); no claim these tests fully cover this slice. |

No existing live workflow regression was found in the inspected test inventory. Missing runtime coverage remains required; it is not an empty affected set inferred from absorption alone.

## E2E and CI impact

| Decision | Details |
|---|---|
| E2E changes | 0 added, extended, removed or executed. No existing browser/API workflow E2E to reuse. |
| Justification | This product enters through CLI/chat. Proposed integration replay would connect actual skill decisions, workers and filesystem/task persistence; CLI text assertions miss approval bypass, overlapping execution and incorrect resume/correction. No browser runner is justified solely to test prose. |
| Execution map | Existing `cli/package.json` selects four `cli/test/*.test.js` files; `.github/workflows/ci.yml` runs that suite. No dedicated workflow execution map or affected selector is present. No CI/map changes made. |
| CI stages | Existing PR/main-push jobs run CLI tests, build/freshness and manifest checks; PRs also require plugin version/changelog changes. Those unexecuted stages are not claimed passed by this local run. |
| Timing | Shared local suite 0.602 s wall-clock including pretest/startup; no retries. Workflow runtime, CI wall-clock/setup and timing impact unknown. |
| Deferred verification | Runtime replay has no implemented CI trigger. Lisbon owns future authorized product/validation scheduling; Wylie owns coverage and Rigsby runner integration. It remains an explicit gap, not a claimed scheduled suite. Existing CI checks will run on PR/main triggers; CI environment differences can still fail. |

## Human verification

Setup inspected in README.md (Install / Working from local clone), .claude-plugin/plugin.json, cli/package.json and the shipped skills. Claude Code authentication, plugin activation and disposable application fixtures were not exercised; those prerequisites must be confirmed before any future walk. No website, application server, screenshots or credentials are needed for the CLI/chat entry itself. A genuine application fixture is still needed for product implementation checks. The following is a prepared replay, not a claim that those fixtures or branches ran.

### V1 — Inspect honest per-slice evidence and closure · TS-021–TS-027

**Rules:** BR-12 · Derive acceptance behavior before mapping existing tests; BR-13 · Evaluate proof per slice without duplicating valid executions; BR-14 · Record the product today without starting remediation or a manual walk; BR-15 · Report completed writing separately from validation success

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele-absorb`. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | Disposable fixture with an approved absorption snapshot, two slices sharing one valid current test run and one deliberately unproven behavior; preserve initial failed/blocked outputs if they exist, never invent them. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Continue the approved `/hele-absorb` write phase in the disposable fixture. | Scenarios derive from approved behavior before test mapping and retain stable IDs, rules and originating increments. |
| 2 | Inspect both slices' QA reports and prepared verification artifacts alongside shared execution evidence. | Valid results are reused without duplicate runs; missing, blocked and failed proof are distinguished with owners and human walks remain pending, not silently initiated. |
| 3 | Inspect the final writing report and durable task closure. | Index and increment QA work close before the write epic; file links and counts separate completed historical records from validation gaps. No repair tasks, invented before/after images or native Codex support claim appear. |

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| product-absorption TS-021 · Derive independent acceptance behavior before proof mapping | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-022 · Assess each slice while reusing valid current proof | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-023 · Distinguish missing, blocked and failing proof honestly | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-024 · Prepare validation artifacts without triggering remediation | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-025 · Use optional honest current-state visuals | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-026 · Close writing and report gaps separately from completion | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-027 · Respect language and disclose the adapted runtime | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Does built history mean validated acceptance? | No. All required runtime scenarios here remain pending and the report is red. | Keep explicit in final absorption counts. |
| May this assessment repair the shipped workflow or start a manual walk? | No; approved scope records existing behavior and gaps. | Later independently authorized delivery/verification. |
| Runtime support and instruction contradictions | Approved snapshot preserves the strict-model/inheritance contradiction and this Codex adaptation. Guided-delivery also preserves unchanged-rule Bugfix approval inconsistency and the built-plan adjustment exception; origin-absorb plans remain frozen. Product-absorption preserves its template format inconsistency. None is resolved by CLI tests. | Lisbon/the human in later product decisions; no silent contract weakening. |

## History

- Run 1 (2026-11-18): initial absorbed-slice assessment; current shared CLI result reused once; all complete workflow assertions remain pending; no manual walk, screenshots, product changes or remediation tasks.
