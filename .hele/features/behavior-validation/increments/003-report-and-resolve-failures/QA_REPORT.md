---
feature: behavior-validation
increment: 003-report-and-resolve-failures
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — behavior-validation · increment 003 · run 1

## Summary

Assessed 6 required scenarios (TS-013, TS-014, TS-015, TS-016, TS-017, TS-018) against the approved absorbed contract. No full scenario is passing: runtime decision/enforcement proof is missing or blocked. The existing CLI suite passed 27/27 tests and is reused as adjacent regression evidence only. No live Claude evaluation, Paper/browser run or human walk occurred; zero E2E and zero screenshots were produced. The shipped design capability remains in scope despite local `designSystem.enabled: false`. This is an evidence assessment, not a product fix or successful feature execution.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-013 · Report every assessment with current proof | BR-10 · Write current, reviewable evidence reports | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-014 · Reject unsupported green reports | BR-10 · Write current, reviewable evidence reports | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-015 · Classify findings and route owners | BR-11 · Classify findings and preserve ownership | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-016 · Separate assessment and fix tracking | BR-11 · Classify findings and preserve ownership | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-017 · Reconstruct without invented reruns | BR-12 · Reconstruct reports without fabricated reruns | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-018 · Keep fixes subject to authorization | BR-13 · Route authorized fixes and retain the QA decision | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |

### TS-013 · Report every assessment with current proof · pending

**Rule:** BR-10 · Write current, reviewable evidence reports

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: each required behavior has titled scenario/rule mapping, proof or explicit gap, assertions, boundaries, command/result, identity, environment and outputs; reused and fresh results remain distinct. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.23.

### TS-014 · Reject unsupported green reports · pending

**Rule:** BR-10 · Write current, reviewable evidence reports

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the report does not present that claim as a newly executed pass or derive green from it. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.23.

### TS-015 · Classify findings and route owners · pending

**Rule:** BR-11 · Classify findings and preserve ownership

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: each has its class, evidence, impact, owner and required confirmation; engineers own product and smaller-test gaps, QA owns its journeys, and product ambiguity returns to the human without weakening expectations. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.23.

### TS-016 · Separate assessment and fix tracking · pending

**Rule:** BR-11 · Classify findings and preserve ownership

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the assessment can close while actionable fix records stay open until resolved. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.23.

### TS-017 · Reconstruct without invented reruns · pending

**Rule:** BR-12 · Reconstruct reports without fabricated reruns

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the report uses available outputs, mappings and identity without running tests merely to recreate it; stale or missing proof stays non-passing and original failures and retries remain visible. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.23.

### TS-018 · Keep fixes subject to authorization · pending

**Rule:** BR-13 · Route authorized fixes and retain the QA decision

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: human verification and correction remain choices, applicable fix and contract-decision choices are added, and only authorized corrections enter delivery with affected confirmation scope; absorption itself does not start fixes or a walk. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.23.

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

### V1 — Review a report reconstruction · TS-013, TS-014, TS-015, TS-016, TS-017, TS-018 · BR-10 · Write current, reviewable evidence reports

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
| Input | A controlled current output artifact plus stale and failed/retried evidence, with known identity and unresolved findings. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Review supplied current, stale and retry evidence and request reconstruction only in a controlled fixture. | A report exists without a fabricated rerun; original failures remain visible and gaps prevent green. |
| 2 | Review finding classes, owners and next-action choices without authorizing fixes. | Missing proof and product questions keep their owners; no implementation or human walk follows from recommendations alone. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| behavior-validation TS-013 · Report every assessment with current proof | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.23 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-014 · Reject unsupported green reports | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.23 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-015 · Classify findings and route owners | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.23 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-016 · Separate assessment and fix tracking | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.23 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-017 · Reconstruct without invented reruns | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.23 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-018 · Keep fixes subject to authorization | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.23 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Do passing CLI/template checks prove live workflow decisions? | No; required scenarios stay pending or blocked. | Current QA evidence and follow-up validation. |
| Start fixes or the human walk during absorption? | No. Record current gaps and prepared flows only. | Conductor / later explicit scoped work. |
| Treat skipped as verified or choose a resume interpretation? | Neither. Approved snapshot preserves the skipped-flow ambiguity. | PRD BR-9 and future product decision. |

## History

- run 1 (2026-11-18): first absorbed assessment; shared CLI run reused, no suite rerun, no full scenario pass, missing/blocked runtime evidence retained, human flow prepared only.
