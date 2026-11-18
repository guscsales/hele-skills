---
feature: guided-delivery
increment: 004-decide-informed-specifications
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — guided-delivery · increment 004 · run 1

## Summary

Assessed 4 required scenarios from the approved v1.0 contract: 0 passing, 4 pending, 0 observed failing assertions and 0 scenario execution blockers established. The red verdict records coverage gaps, not a proven product failure. The shipped workflow is instruction-driven; passing CLI primitive tests do not prove live multiagent behavior. No execution plan was read, no production/test changes or fix tasks were created, and no manual walk was initiated. Historical built records remain frozen.

`cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. [Shared execution identity](../../../../reports/absorb-cli-execution.md) and [raw TAP](../../../../reports/absorb-cli-tests.tap) are reused, not rerun. Zero live workflow integrations or E2E were executed. Existing human replay prerequisites are unconfirmed; this is separate from the missing automated assertions.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-029 · Surface possible duplicate capabilities | BR-17 · Search existing memory before creating a feature | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-030 · Investigate facts and batch useful questions | BR-18 · Resolve useful questions before writing the contract | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-031 · Wait for answers without creating premature artifacts | BR-18 · Resolve useful questions before writing the contract | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-032 · Skip unnecessary questions and expose changes clearly | BR-18 · Resolve useful questions before writing the contract | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |

### TS-029 · Surface possible duplicate capabilities · pending

**Rule:** BR-17 · Search existing memory before creating a feature

**Proof:** `cli/test/cli.test.js` — `find matches an accented pt-BR alias`, `find reports no matches for unrelated terms`, and `find --json returns machine-readable output`; `cli/test/find.test.js` checks normalization/scoring. Real temporary-file CLI reads and in-process helper assertions prove lookup primitives, not the runtime anti-duplicate decision or preservation of existing descriptions. Proposed runtime integration replay: `guided-delivery/004 — Surface possible duplicate capabilities`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: two or three probes in English and the human language inform an explicit update-versus-new question for a match; content-only matches lead to alias repair without claiming guaranteed uniqueness. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-030 · Investigate facts and batch useful questions · pending

**Rule:** BR-18 · Resolve useful questions before writing the contract

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/004 — Investigate facts and batch useful questions`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: matching product descriptions and unknown project facts are investigated first, then remaining questions and foreseeable edge cases appear together with recommendations and accept-all, individual or free-answer choices. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-031 · Wait for answers without creating premature artifacts · pending

**Rule:** BR-18 · Resolve useful questions before writing the contract

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/004 — Wait for answers without creating premature artifacts`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: recommendations remain proposals and no new feature folder, catalog entry, product description or scenarios are written. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-032 · Skip unnecessary questions and expose changes clearly · pending

**Rule:** BR-18 · Resolve useful questions before writing the contract

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/004 — Skip unnecessary questions and expose changes clearly`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: no invented question gate is added; newly discovered facts may justify a smaller later pack, and the report shows new and changed rules, old/new wording, relevant unchanged rules, complete scenarios and coverage recommendations without unresolved questions or an implementation plan in the product description. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

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

### V1 — Resolve duplicate capabilities and useful questions · TS-029–TS-032

**Rules:** BR-17 · Search existing memory before creating a feature; BR-18 · Resolve useful questions before writing the contract

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele` with the request below. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | Disposable initialized project with a documented saved-items capability and English/Portuguese aliases; a content-only match in a separate fixture and one genuinely new capability. Use an ambiguous request such as sharing saved items. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Enter `/hele Add sharing for saved items` with enough ambiguity to require a product decision. | Existing memory and unknown facts are investigated; matching capability versus new work is included in one useful question pack with recommendations. |
| 2 | Leave one decision unanswered and inspect the project for premature feature artifacts. | No new feature contract, scenarios or catalog entry is written while useful questions remain open. |
| 3 | Answer the pack or accept all recommendations, then inspect the approval report. | New/rewritten rules, old/new wording, relevant unchanged rules, complete scenarios and proof recommendations are visible; content-only matches lead to alias repair. |
| 4 | Repeat with a fully specified request in a separate fixture. | No unnecessary question gate is invented; later packs require genuinely new facts. |

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| guided-delivery TS-029 · Surface possible duplicate capabilities | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-030 · Investigate facts and batch useful questions | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-031 · Wait for answers without creating premature artifacts | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-032 · Skip unnecessary questions and expose changes clearly | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Does built history mean validated acceptance? | No. All required runtime scenarios here remain pending and the report is red. | Keep explicit in final absorption counts. |
| May this assessment repair the shipped workflow or start a manual walk? | No; approved scope records existing behavior and gaps. | Later independently authorized delivery/verification. |
| Runtime support and instruction contradictions | Approved snapshot preserves the strict-model/inheritance contradiction and this Codex adaptation. Guided-delivery also preserves unchanged-rule Bugfix approval inconsistency and the built-plan adjustment exception; origin-absorb plans remain frozen. Product-absorption preserves its template format inconsistency. None is resolved by CLI tests. | Lisbon/the human in later product decisions; no silent contract weakening. |

## History

- Run 1 (2026-11-18): initial absorbed-slice assessment; current shared CLI result reused once; all complete workflow assertions remain pending; no manual walk, screenshots, product changes or remediation tasks.
