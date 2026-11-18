---
feature: behavior-validation
increment: 002-guide-human-acceptance
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — behavior-validation · increment 002 · run 1

## Summary

Assessed 7 required scenarios (TS-006, TS-007, TS-008, TS-009, TS-010, TS-011, TS-012) against the approved absorbed contract. No full scenario is passing: runtime decision/enforcement proof is missing or blocked. The existing CLI suite passed 27/27 tests and is reused as adjacent regression evidence only. No live Claude evaluation, Paper/browser run or human walk occurred; zero E2E and zero screenshots were produced. The shipped design capability remains in scope despite local `designSystem.enabled: false`. This is an evidence assessment, not a product fix or successful feature execution.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-006 · Prepare honest human flow setup | BR-5 · Prepare human flows from inspected facts | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-007 · Handle work without human flows | BR-5 · Prepare human flows from inspected facts | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-008 · Collect one explicit verdict at a time | BR-6 · Keep human verdicts explicit | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-009 · Rewind issues without losing valid passes | BR-7 · Preserve unaffected passes through correction | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-010 · Prevent closure over automated gaps | BR-8 · Require evidence before normal closure | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-011 · Offer closure choices after evidence | BR-8 · Require evidence before normal closure | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |
| TS-012 · Preserve skip continuation limitation | BR-9 · Record the skipped-flow continuation limitation | pending | integration (proposed) | Required runtime proof absent; [shared CLI evidence](../../../../reports/absorb-cli-execution.md) is adjacent only. |

### TS-006 · Prepare honest human flow setup · pending

**Rule:** BR-5 · Prepare human flows from inspected facts

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: open location, inspected setup, data, steps and expected outcomes are provided and labeled executed or prepared accurately; missing setup is blocked and credentials or UI execution are never invented. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.22.

### TS-007 · Handle work without human flows · pending

**Rule:** BR-5 · Prepare human flows from inspected facts

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the absence of human flows is explained and normal closure still waits for required automated evidence. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.22.

### TS-008 · Collect one explicit verdict at a time · pending

**Rule:** BR-6 · Keep human verdicts explicit

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: one happy flow and then risky unhappy flows are shown in order; only the human verdict for the shown flow records verified, issue or skipped, without inferring other passes. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.22.

### TS-009 · Rewind issues without losing valid passes · pending

**Rule:** BR-7 · Preserve unaffected passes through correction

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the walk stops and the same increment returns to definition and delivery; unaffected passes remain verified while affected and other unverified flows refresh from current QA. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.22.

### TS-010 · Prevent closure over automated gaps · pending

**Rule:** BR-8 · Require evidence before normal closure

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the gap remains unresolved and prevents normal closure despite human acceptance. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.22.

### TS-011 · Offer closure choices after evidence · pending

**Rule:** BR-8 · Require evidence before normal closure

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: the human can choose ready PR, draft PR, no PR or correction; ready PR follows CI and no PR does not push. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.22.

### TS-012 · Preserve skip continuation limitation · pending

**Rule:** BR-9 · Record the skipped-flow continuation limitation

**Proof:** Proposed Claude workflow integration evaluation with recorded tool calls and output artifacts; no existing test path in the inspected suite. Required assertion: skip remains distinct from verified and the conflicting next-unverified versus first-pending instructions are disclosed as unresolved rather than claimed validated. The proposed check must exercise real agent decisions and resulting artifacts; no mocked boundary or source inspection substitutes for the claimed live behavior.

**Execution:** Required scenario not run. Reused adjacent command: `cd cli && npm test`; 27 passed, zero failed, no retries, 0.602 s wall-clock (runner 485.9885 ms); [TAP](../../../../reports/absorb-cli-tests.tap), [execution identity](../../../../reports/absorb-cli-execution.md). Source `7e0b5f9cd09e5a901c724de630e0019c7b64646c` on `codex/absorb-hele-skills` with concurrent documentation-only absorption; macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. The shared source hashes establish reuse; no relevant executable input was changed by this assessment.

**Expected / observed:** Expected the stated product behavior. Observed only the inspected skill/template contract and adjacent CLI regression results, not execution of this scenario.

**Limitations:** Approved contract limitation: next not-verified versus first pending may revisit skipped flows. No skip/resume run exists; skipped is not verified. Owner: Wylie / owning harness engineer; tracking: hele-skills-8yt.22.

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

### V1 — Prepare an explicit human verdict walk · TS-006, TS-007, TS-008, TS-009, TS-010, TS-011, TS-012 · BR-5 · Prepare human flows from inspected facts

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | None: terminal and Claude Code; this repository ships no application route. |
| Start | From this repository: `node cli/src/index.js ai verify-work` (command form inspected in `cli/src/ai.js` and `cli/src/index.js`; this specific human replay was not launched). Claude plugin installation syntax is documented in README; installed runtime is not verified. |
| Land | Read the printed skill guidance, then prepare a separate controlled consumer fixture before invoking a live workflow. |

| Data | Value |
|---|---|
| Login | No login for CLI help. Claude account/plugin availability is not verified; no credentials supplied. |
| Seed | Approved `behavior-validation/PRODUCT_DESCRIPTION.md` v1.0 and these acceptance scenarios are available for reading. Live consumer/evaluation fixtures are not supplied. |
| Input | A controlled QA report with pending human flows, an unaffected verified flow and a required automated gap; no real walk is started here. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Inspect the prepared flow setup and its evidence label. | Missing setup is explicit and automated proof has not supplied a human verdict. |
| 2 | In a later authorized controlled walk, provide an explicit verdict for one shown flow; inspect issue and skip handling. | Only that flow receives the verdict; issues rewind the same increment and preserve unaffected passes; skip remains distinct and the continuation ambiguity is disclosed. |
| 3 | Check normal-close readiness with an automated gap still open. | A human pass cannot clear that gap or authorize normal closure. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| behavior-validation TS-006 · Prepare honest human flow setup | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.22 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-007 · Handle work without human flows | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.22 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-008 · Collect one explicit verdict at a time | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.22 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-009 · Rewind issues without losing valid passes | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.22 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-010 · Prevent closure over automated gaps | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.22 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-011 · Offer closure choices after evidence | coverage-gap | No current live Claude workflow evaluation asserts this decision and its resulting artifacts. CLI help, template text and this absorption document do not prove enforcement. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.22 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |
| behavior-validation TS-012 · Preserve skip continuation limitation | contract-question | Approved contract limitation: next not-verified versus first pending may revisit skipped flows. No skip/resume run exists; skipped is not verified. Required behavior cannot be marked passing. | Wylie / owning harness engineer; hele-skills-8yt.22 records assessment. Conductor retains actionable follow-up with required assertion above; no fix authorized by absorption. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Do passing CLI/template checks prove live workflow decisions? | No; required scenarios stay pending or blocked. | Current QA evidence and follow-up validation. |
| Start fixes or the human walk during absorption? | No. Record current gaps and prepared flows only. | Conductor / later explicit scoped work. |
| Treat skipped as verified or choose a resume interpretation? | Neither. Approved snapshot preserves the skipped-flow ambiguity. | PRD BR-9 and future product decision. |

## History

- run 1 (2026-11-18): first absorbed assessment; shared CLI run reused, no suite rerun, no full scenario pass, missing/blocked runtime evidence retained, human flow prepared only.
