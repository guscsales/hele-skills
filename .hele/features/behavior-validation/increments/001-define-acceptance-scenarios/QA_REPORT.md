---
feature: behavior-validation
increment: 001-define-acceptance-scenarios
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — behavior-validation · increment 001 · run 1

## Summary

Assessed 5 required scenarios (TS-001, TS-002, TS-003, TS-004, TS-005) against the approved absorbed contract. No full scenario is passing: runtime decision/enforcement proof is missing or blocked. The existing CLI suite passed 27/27 tests and is reused as adjacent regression evidence only. No live Claude evaluation, Paper/browser run or human walk occurred; zero E2E and zero screenshots were produced. The shipped design capability remains in scope despite local `designSystem.enabled: false`. This is an evidence assessment, not a product fix or successful feature execution.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-001 · Derive independent behavior coverage | BR-1 · Derive acceptance independently | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-002 · Preserve and revise stable scenarios | BR-2 · Preserve scenario identity and meaning | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-003 · Retire only approved removed behavior | BR-2 · Preserve scenario identity and meaning | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-004 · Separate behavior and technical proof | BR-3 · Separate scenarios from coverage recommendations | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-005 · Keep acceptance approval and versions aligned | BR-4 · Keep acceptance documents aligned with the product | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |

### TS-001 · Derive independent behavior coverage · pending

**Rule:** BR-1 · Derive acceptance independently

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: expectations come from those rules before implementation proof is inspected, cover unhappy branches and boundaries, and disclose any unmapped rule without deriving expectations from the execution plan. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.21.

### TS-002 · Preserve and revise stable scenarios · pending

**Rule:** BR-2 · Preserve scenario identity and meaning

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the same identity is rewritten in place with its three-digit origin and rule; new or changed expectations remain pending current proof. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.21.

### TS-003 · Retire only approved removed behavior · pending

**Rule:** BR-2 · Preserve scenario identity and meaning

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: blocked behavior remains required unless an approved product decision explicitly retires it; a retired behavior keeps its identity and retirement reference. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.21.

### TS-004 · Separate behavior and technical proof · pending

**Rule:** BR-3 · Separate scenarios from coverage recommendations

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: a separate mapping identifies level, owner, existing or proposed proof, assertions, boundaries, rationale and scope; shared journeys identify assertions for each behavior and inspection alone is not passing. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.21.

### TS-005 · Keep acceptance approval and versions aligned · pending

**Rule:** BR-4 · Keep acceptance documents aligned with the product

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: its version, product basis and registry agree with approved rules, coverage adds no separate approval stop and authoring does not prematurely create a human verification artifact. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.21.

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

### V1 — Review independent scenario authoring · TS-001, TS-002, TS-003, TS-004, TS-005 · BR-1 · Derive acceptance independently

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | None: terminal and Claude Code; this repository ships no application route. |
| Start | From this repository: `node cli/src/index.js ai stubs` (command form inspected in `cli/src/ai.js` and `cli/src/index.js`; this specific human replay was not launched). Claude plugin installation syntax is documented in README; installed runtime is not verified. |
| Land | Read the printed skill guidance, then prepare a separate controlled consumer fixture before invoking a live workflow. |

| Data | Value |
|---|---|
| Login | No login for CLI help. Claude account/plugin availability is not verified; no credentials supplied. |
| Seed | Approved `behavior-validation/PRODUCT_DESCRIPTION.md` v1.0 and these acceptance scenarios are available for reading. Live consumer/evaluation fixtures are not supplied. |
| Input | A controlled approved PRD with a changed and an explicitly retired behavior, and its prior stable scenarios. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Review scenarios against PRD rules without using the implementation plan as expectations. | Every testable rule/flow has behavior-language coverage with stable IDs and origin increments. |
| 2 | Review changed/retired fixture behaviors and separate coverage recommendations at the shared approval stop. | IDs are preserved; retirement needs approval; proof choices are separate and no early human walk is created. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| behavior-validation TS-001 · Derive independent behavior coverage | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.21 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-002 · Preserve and revise stable scenarios | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.21 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-003 · Retire only approved removed behavior | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.21 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-004 · Separate behavior and technical proof | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.21 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-005 · Keep acceptance approval and versions aligned | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.21 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Do passing CLI/template checks prove live workflow decisions? | No; required scenarios stay pending or blocked. | Current QA evidence and follow-up validation. |
| Start fixes or the human walk during absorption? | No. Record current gaps and prepared flows only. | Conductor / later explicit scoped work. |
| Treat skipped as verified or choose a resume interpretation? | Neither. Approved snapshot preserves the skipped-flow ambiguity. | PRD BR-9 and future product decision. |

## History

- run 1 (2026-11-18): first absorbed assessment; shared CLI run reused, no suite rerun, no full scenario pass, missing/blocked runtime evidence retained, human flow prepared only.
