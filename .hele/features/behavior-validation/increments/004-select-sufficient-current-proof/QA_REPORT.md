---
feature: behavior-validation
increment: 004-select-sufficient-current-proof
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — behavior-validation · increment 004 · run 1

## Summary

Assessed 10 required scenarios (TS-019, TS-020, TS-021, TS-022, TS-023, TS-024, TS-025, TS-026, TS-027, TS-028) against the approved absorbed contract. No full scenario is passing: runtime decision/enforcement proof is missing or blocked. The existing CLI suite passed 27/27 tests and is reused as adjacent regression evidence only. No live Claude evaluation, Paper/browser run or human walk occurred; zero E2E and zero screenshots were produced. The shipped design capability remains in scope despite local `designSystem.enabled: false`. This is an evidence assessment, not a product fix or successful feature execution.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-019 · Choose proof by the failure boundary | BR-14 · Choose the smallest sufficient proof | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-020 · Justify end-to-end additions | BR-15 · Justify E2E and reuse journeys | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-021 · Allow sufficient proof without new E2E | BR-15 · Justify E2E and reuse journeys | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-022 · Select regressions beyond the increment | BR-16 · Select affected regressions across features | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-023 · Reuse only unchanged relevant evidence | BR-17 · Reuse evidence only while relevant identity remains valid | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-024 · Make statuses reflect actual proof | BR-18 · Make result status follow proof | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-025 · Keep CI proposals separate from effective gates | BR-19 · Separate coverage from CI policy and measurement | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-026 · Report timing without invented savings | BR-19 · Separate coverage from CI policy and measurement | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-027 · Retain only useful bounded screenshots | BR-20 · Keep screenshots useful and bounded | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-028 · Allow zero screenshots without unrelated pruning | BR-20 · Keep screenshots useful and bounded | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |

### TS-019 · Choose proof by the failure boundary · pending

**Rule:** BR-14 · Choose the smallest sufficient proof

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the smallest sufficient level is justified by the actual failure and real versus mocked connection, rather than importance or the test label. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-020 · Justify end-to-end additions · pending

**Rule:** BR-15 · Justify E2E and reuse journeys

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the connection and failure missed by smaller tests are named; existing journeys are reused before extension or addition and the claimed connection is not mocked or combined with unrelated journeys. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-021 · Allow sufficient proof without new E2E · pending

**Rule:** BR-15 · Justify E2E and reuse journeys

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: zero new E2E is permitted while selected existing affected journeys still need valid proof. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-022 · Select regressions beyond the increment · pending

**Rule:** BR-16 · Select affected regressions across features

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: new and changed behavior plus affected cross-feature regressions are selected using mappings, dependencies or traces; shared changes or uncertainty broaden scope rather than relying only on increment tags. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-023 · Reuse only unchanged relevant evidence · pending

**Rule:** BR-17 · Reuse evidence only while relevant identity remains valid

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: unchanged relevant code, fixtures, dependencies and environment permit labeled reuse with original command, output and identity; relevant change requires a new check. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-024 · Make statuses reflect actual proof · pending

**Rule:** BR-18 · Make result status follow proof

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: only complete current assertions pass; missing proof is pending, obstacles are blocked and failed assertions fail; any required non-pass prevents green and retains an owner. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-025 · Keep CI proposals separate from effective gates · pending

**Rule:** BR-19 · Separate coverage from CI policy and measurement

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: existing blocking gates stay effective until a replacement and broad-change fallback are validated; mappings identify commands, dependencies, owners, triggers and stages, and deferred coverage has a real trigger and owner. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-026 · Report timing without invented savings · pending

**Rule:** BR-19 · Separate coverage from CI policy and measurement

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: wall-clock, setup, retries and test duration remain distinct, unknowns stay unknown and parallel test durations do not become additive savings. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-027 · Retain only useful bounded screenshots · pending

**Rule:** BR-20 · Keep screenshots useful and bounded

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: only settled, inspected, full-size paletted 1920 by 1080 captures within the configured ceiling are retained; overflow remains scratch and no before image or app run is fabricated. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

### TS-028 · Allow zero screenshots without unrelated pruning · pending

**Rule:** BR-20 · Keep screenshots useful and bounded

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: zero screenshots is valid, assertions still establish behavior and unrelated suites are not pruned as routine QA. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.24.

## Selected regressions

| Journey / test | Feature / stubs | Why affected | Result / evidence |
|---|---|---|---|
| `cli/test/cli.test.js` — `ai overview and README use the canonical flow diagram` | Project memory / shared guidance; adjacent to these scenarios | Workflow guidance is a shared entry surface. The assertion checks README equality and real CLI output inclusion, not agent behavior. | Reused passing result in shared TAP. |
| `cli/test/language.test.js` — `chat templates render tables in the session language` | Project memory / shared reports; adjacent only | Shared report surfaces are relevant to these artifacts. Assertions check source phrases and table examples, not live language or evidence enforcement. | Reused passing result in shared TAP. |
| All four `cli/test/*.test.js` files | Cross-feature CLI discovery/configuration helpers | Broad existing suite reused because the absorbed snapshot crosses product areas; no increment-only selection. Real CLI subprocess/temp fixtures and in-process helpers; no agent runtime. | 27/27 passed; [execution](../../../../reports/absorb-cli-execution.md). |

No existing agent-runtime or consumer-browser journey was found in the inspected suite. Their absence is a coverage gap, not evidence that the behavior is safe. No automated failure was observed in the selected CLI suite.

## E2E and CI impact

| Decision | Details |
|---|---|
| E2E changes | Added 0, extended 0, removed 0; existing live E2E reused 0. Shared CLI regression result reused once, never rerun for this report. |
| Justification | Live workflow-to-artifact decisions remain unproven by source assertions. Paper slices additionally require real source-to-consumer rendering and interaction comparison. No existing journey supplies those boundaries; proposed targeted evaluations are recorded in Coverage, not implemented. |
| Execution map | Existing `cli/package.json` commands and `.github/workflows/ci.yml` are the current execution policy. No competing map or selector was installed. |
| CI stages | PR/main push CLI tests, bundle build/freshness and manifest gates remain; PR version/changelog gate remains. Only local npm tests were observed here; remote CI/build gates were not run by this assessment. |
| Timing | Shared local command 0.602 s wall-clock including pretest/startup; runner 485.9885 ms; no retries. Setup decomposition, remote CI cost and future evaluation cost unknown. |
| Deferred verification | Existing CI checks run at their actual PR/main triggers, owned by Rigsby/maintainers. Proposed Claude/Paper evaluations have no implemented CI trigger and remain open gaps owned by Wylie plus the relevant engineer; no promised scheduled safety net. |

## Human verification

### V1 — Review current-proof and regression decisions · TS-019, TS-020, TS-021, TS-022, TS-023, TS-024, TS-025, TS-026, TS-027, TS-028 · BR-14 · Choose the smallest sufficient proof

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | None: terminal and Claude Code; this repository ships no application route. |
| Start | From this repository: `node cli/src/index.js ai qa` (command form inspected in `cli/src/ai.js` and `cli/src/index.js`; this specific human replay was not launched). Claude plugin installation syntax is documented in README; installed runtime is not verified. |
| Land | Read the printed skill guidance, then prepare a separate controlled consumer fixture before invoking a live workflow. |

| Data | Value |
|---|---|
| Login | No login for CLI help. Claude account/plugin availability is not verified; no credentials supplied. |
| Seed | Approved `behavior-validation/PRODUCT_DESCRIPTION.md` v1.0 and these acceptance scenarios are available for reading. Live consumer/evaluation fixtures are not supplied. |
| Input | A controlled acceptance/evidence set with mixed current, stale, missing and failed results plus cross-feature dependency information. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Inspect the controlled assertions, actual dependency boundaries and identities. | Smallest sufficient proof is justified and relevant unchanged evidence is reused with its original identity; stale evidence is not passed. |
| 2 | Review selected cross-feature regressions, non-passing required results and CI policy. | Uncertain/shared impact broadens selection; required non-passes keep red, existing gates remain effective and proposals/timing unknowns are honest. |
| 3 | Review whether images would add useful evidence. | Zero useful images is acceptable; no screenshot is fabricated and no unrelated suite is pruned. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| behavior-validation TS-019 · Choose proof by the failure boundary | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-020 · Justify end-to-end additions | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-021 · Allow sufficient proof without new E2E | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-022 · Select regressions beyond the increment | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-023 · Reuse only unchanged relevant evidence | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-024 · Make statuses reflect actual proof | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-025 · Keep CI proposals separate from effective gates | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-026 · Report timing without invented savings | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-027 · Retain only useful bounded screenshots | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-028 · Allow zero screenshots without unrelated pruning | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.24 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Do passing CLI/template checks prove live workflow decisions? | No; required scenarios stay pending or blocked. | Current QA evidence and follow-up validation. |
| Start fixes or the human walk during absorption? | No. Record current gaps and prepared flows only. | Conductor / later explicit scoped work. |
| Treat skipped as verified or choose a resume interpretation? | Neither. Approved snapshot preserves the skipped-flow ambiguity. | PRD BR-9 and future product decision. |

## History

- run 1 (2026-11-18): first absorbed assessment; shared CLI run reused, no suite rerun, no full scenario pass, missing/blocked runtime evidence retained, human flow prepared only.
