---
feature: project-memory
increment: 005-configure-report-language-and-evidence-limits
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — project-memory · increment 005 · run 1

## Summary

Assessed the current absorbed behavior described by TS-020, TS-021, not a new before/after implementation. All 2 scenarios remain pending because their complete assertions lack current proof. The one shared CLI run passed 27/27 tests; applicable assertions below are reused, not rerun. No E2E or human walk executed. Source workflow instructions and the reported user update/init/read exercise do not establish all live branches. No product defect was demonstrated by this assessment; missing proof keeps the verdict red.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-020 · Keep conversation and artifact language independent | BR-16 · Separate conversation and artifact language preferences | pending | integration | cli/test/language.test.js: language defaults split chat from artifacts; chat templates render tables in the session language; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-021 · Treat evidence-image preference as a ceiling | BR-17 · Store an evidence-image ceiling rather than a quota | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |

### TS-020 · Keep conversation and artifact language independent · pending

**Rule:** BR-16 · Separate conversation and artifact language preferences

**Proof:** cli/test/language.test.js: language defaults split chat from artifacts; chat templates render tables in the session language. Default JSON values auto/en and required source-template strings are asserted.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: chat defaults to the session language or the explicit tag, artifacts default to English with en and en-US equivalent, labels and prose follow chat preferences while filenames, commands, identifiers and formal agent tags stay unchanged; CLI output remains English and existing choices survive missing-key migration. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Actual multilingual agent reports, invariant identifiers, en-US equivalence and preservation during initialization are not executed; source-text matches do not prove rendered behavior.

### TS-021 · Treat evidence-image preference as a ceiling · pending

**Rule:** BR-17 · Store an evidence-image ceiling rather than a quota

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: ten is the default maximum, zero useful images is allowed, saving a value does not impose CLI range validation or prove capture, and the maximum is a ceiling rather than a required image count. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed.

## Selected regressions

| Journey / test | Feature / stubs | Why affected | Result / evidence |
|---|---|---|---|
| All four `cli/test/*.test.js` files | project-memory TS-002, TS-006–TS-007, TS-009–TS-010, TS-012–TS-013, TS-015, TS-020; e2e-audit TS-001–TS-002 (partial mappings) | Shared CLI/configuration/help/template surface spans absorbed features; full existing suite selected because no maintained finer selector was found. | 27/27 tests pass; [shared execution](../../../../reports/absorb-cli-execution.md). Product scenarios remain pending. |

## E2E and CI impact

| Decision | Details |
|---|---|
| E2E changes | Zero added, extended, removed or executed. No application/browser stack started. |
| Justification | Current executable product surface is a terminal CLI plus agent instructions. Existing tests prove selected CLI and helper boundaries; live agent compliance needs retained session evidence. A browser journey would not prove those missing boundaries. |
| Execution map | Existing `cli/package.json` selects all `test/*.test.js`; `.github/workflows/ci.yml` is the current execution policy. No separate selector was invented. Full-suite fallback used locally. |
| CI stages | Existing PR/main-push CLI test, build/freshness and manifest gates remain; PR version/changelog gate remains. No workflow changes. Other CI stages were not executed by this QA run. |
| Timing | Shared local npm wall-clock 0.602 s; Node runner 485.9885 ms. Includes pretest/startup; zero retries. CI setup, parallel wall-clock and live-session cost unknown. |
| Deferred verification | Required live/workflow and missing CLI assertions remain pending, owned per Findings. No scheduled or release trigger for these absent checks exists; this report does not claim deferred coverage will run automatically. Discovery can therefore occur later until an owner implements proof. |

## Human verification

### V1 — Inspect independent language and evidence preferences · TS-020, TS-021 · BR-16, BR-17 · Separate conversation and artifact language preferences; Store an evidence-image ceiling rather than a quota

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable; terminal CLI. |
| Start | `./scripts/hele config get language` |
| Land | Run from this repository root. |

| Data | Value |
|---|---|
| Login | None for the local CLI. |
| Seed | Use existing saved language and QA values; no edits or screenshot capture. |
| Input | Commands below, from inspected `scripts/hele` and command registration. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Run `./scripts/hele config get language`. | Saved chat and artifact preferences are separately visible. |
| 2 | Run `./scripts/hele config get qa`. | The saved screenshot maximum is visible; no quota or successful capture is implied. |

This modest replay checks only the named visible subset; it cannot clear the remaining automated/live-session gaps. No screenshot is required.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| project-memory TS-020 · Keep conversation and artifact language independent | coverage-gap | Actual multilingual agent reports, invariant identifiers, en-US equivalence and preservation during initialization are not executed; source-text matches do not prove rendered behavior. Acceptance cannot be green. | Wylie + owning CLI engineer; assessment bead `hele-skills-8yt.7` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-021 · Treat evidence-image preference as a ceiling | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.7` records gap; implement or execute scoped proof in a separately assigned validation task. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Can passed source/CLI checks certify the entire workflow? | No; only explicit executed assertions are evidence. | Keep these scenarios pending and the assessment red. |
| Should this absorption implement missing tests or workflow fixes? | Not in this snapshot; no new code or test implementation was performed. | Lisbon routes a separately scoped validation/fix task with the listed owners. |

## History

- run 1 (2026-11-18): initial absorbed-snapshot assessment; reused the single shared successful CLI execution, retained all required gaps, zero E2E/screenshots and no human walk.
