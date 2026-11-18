---
feature: project-memory
increment: 004-update-installed-plugin
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — project-memory · increment 004 · run 1

## Summary

Assessed the current absorbed behavior described by TS-017, TS-018, TS-019, not a new before/after implementation. All 3 scenarios remain pending because their complete assertions lack current proof. The one shared CLI run passed 27/27 tests; applicable assertions below are reused, not rerun. No E2E or human walk executed. Source workflow instructions and the reported user update/init/read exercise do not establish all live branches. No product defect was demonstrated by this assessment; missing proof keeps the verdict red.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-017 · Select the existing installation scope | BR-14 · Choose the applicable plugin installation before updating | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-018 · Refresh installation in the required order | BR-15 · Update in order and report restart requirements | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-019 · Report update outcome and refresh requirements | BR-15 · Update in order and report restart requirements | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |

### TS-017 · Select the existing installation scope · pending

**Rule:** BR-14 · Choose the applicable plugin installation before updating

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: the current project installation wins over user scope; absent either, installation instructions are shown and updating stops, without inventing another marketplace or target. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed.

### TS-018 · Refresh installation in the required order · pending

**Rule:** BR-15 · Update in order and report restart requirements

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: local source is pulled first where applicable, the existing marketplace refresh precedes plugin update at the chosen scope, no automatic yes option is passed, and any CLI confirmation returns control to the human with the command. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed.

### TS-019 · Report update outcome and refresh requirements · pending

**Rule:** BR-15 · Update in order and report restart requirements

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: scope and both versions appear, unchanged means already current, changed means restart then one initialization refresh for existing memory, and updating creates no product description or product commit. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

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

The installation/update workflow needs a controlled installed Claude Code session, explicit scope fixtures and a retained before/after version trace. The Claude binary exists at `/Users/guscsales/.local/bin/claude`, and README installation commands were inspected; plugin scope/authentication and a reproducible session fixture were not verified here. No truthful complete human replay is prepared from that incomplete setup. Owner: Wylie with Lisbon. This is a manual-setup gap, not a completed walk; all underlying scenarios remain pending. No live session or manual verification was started.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| project-memory TS-017 · Select the existing installation scope | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.6` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-018 · Refresh installation in the required order | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.6` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-019 · Report update outcome and refresh requirements | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.6` records gap; implement or execute scoped proof in a separately assigned validation task. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Can passed source/CLI checks certify the entire workflow? | No; only explicit executed assertions are evidence. | Keep these scenarios pending and the assessment red. |
| Should this absorption implement missing tests or workflow fixes? | Not in this snapshot; no new code or test implementation was performed. | Lisbon routes a separately scoped validation/fix task with the listed owners. |

## History

- run 1 (2026-11-18): initial absorbed-snapshot assessment; reused the single shared successful CLI execution, retained all required gaps, zero E2E/screenshots and no human walk.
