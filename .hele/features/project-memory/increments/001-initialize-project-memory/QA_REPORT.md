---
feature: project-memory
increment: 001-initialize-project-memory
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — project-memory · increment 001 · run 1

## Summary

Assessed the current absorbed behavior described by TS-001, TS-002, TS-003, TS-004, TS-005, TS-006, TS-007, TS-008, not a new before/after implementation. All 8 scenarios remain pending because their complete assertions lack current proof. The one shared CLI run passed 27/27 tests; applicable assertions below are reused, not rerun. No E2E or human walk executed. Source workflow instructions and the reported user update/init/read exercise do not establish all live branches. No product defect was demonstrated by this assessment; missing proof keeps the verdict red.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-001 · Install the shipped Claude Code plugin | BR-1 · Install the shipped plugin and terminal companion | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-002 · Resolve explicit and nearest project memory | BR-2 · Resolve one project memory directory | pending | integration | cli/test/dir.test.js: all six resolver cases; cli/test/cli.test.js: errors with exit code 2 when no .hele exists; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-003 · Create only initial memory | BR-3 · Initialize only the project memory skeleton | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-004 · Establish task-tracking readiness | BR-4 · Make task-tracking readiness explicit | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-005 · Distinguish availability from readiness | BR-4 · Make task-tracking readiness explicit | pending | integration | Proposed installer integration test (not implemented); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-006 · Read only saved preferences | BR-5 · Read saved settings without an implicit CLI defaults merge | pending | integration | cli/test/cli.test.js: config set / get / add round-trip; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-007 · Persist values without losing unrelated settings | BR-6 · Persist configuration edits and deduplicated list additions | pending | integration | cli/test/cli.test.js: config set / get / add round-trip; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-008 · Reject invalid configuration operations | BR-6 · Persist configuration edits and deduplicated list additions | pending | integration | Proposed extension of cli/test/cli.test.js (not implemented); [shared execution](../../../../reports/absorb-cli-execution.md) |

### TS-001 · Install the shipped Claude Code plugin · pending

**Rule:** BR-1 · Install the shipped plugin and terminal companion

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: the Claude Code plugin and standalone terminal companion are available, plugin and CLI versions remain separate, and no shipped Cursor or Codex adapter is promised. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed.

### TS-002 · Resolve explicit and nearest project memory · pending

**Rule:** BR-2 · Resolve one project memory directory

**Proof:** cli/test/dir.test.js: all six resolver cases; cli/test/cli.test.js: errors with exit code 2 when no .hele exists. Real temporary directories prove current/ancestor discovery, ignored alternate folder configuration, valid explicit override and missing-memory exit 2.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: a valid explicit directory wins; an invalid explicit location never falls back; otherwise the nearest ancestor memory wins, alternate folder preferences are ignored, and absence is reported with exit code 2. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Invalid explicit overrides, file-versus-directory override, and nearest-of-multiple-ancestors cases are not asserted.

### TS-003 · Create only initial memory · pending

**Rule:** BR-3 · Initialize only the project memory skeleton

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: settings preserve the selected design choice, the feature registry starts empty with a feature-directory placeholder, no feature description is created, and a non-Git project is reported without silently initializing Git. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed.

### TS-004 · Establish task-tracking readiness · pending

**Rule:** BR-4 · Make task-tracking readiness explicit

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: the available binary is reused or installed through an available supported method, the project database is initialized without replacing agent guidance, and failures are explicit blockers. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed.

### TS-005 · Distinguish availability from readiness · pending

**Rule:** BR-4 · Make task-tracking readiness explicit

**Proof:** Proposed installer integration test (not implemented). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: it reports binary availability without initializing or claiming readiness of the project database. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** No current test distinguishes binary-only check from project database initialization; use a controlled command boundary and assert no initialization call.

### TS-006 · Read only saved preferences · pending

**Rule:** BR-5 · Read saved settings without an implicit CLI defaults merge

**Proof:** cli/test/cli.test.js: config set / get / add round-trip. Real source CLI subprocesses save and retrieve number 6 and text sonnet from temporary settings.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: saved values are returned without merging defaults; a missing value exits 1 and a missing settings document exits 2. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Missing settings/value exits and absence of implicit defaults merge are not asserted.

### TS-007 · Persist values without losing unrelated settings · pending

**Rule:** BR-6 · Persist configuration edits and deduplicated list additions

**Proof:** cli/test/cli.test.js: config set / get / add round-trip. Real source CLI saves a number and string, creates missing model/list paths and deduplicates a repeated string.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: JSON-like input is saved as its value and other input as text, missing intermediate objects are created, unrelated preferences survive, missing or null lists initialize, and serialized-equal additions occur only once with the full saved document ending in a newline. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Null lists, general JSON values, serialized object equality, preservation of unrelated values and trailing newline are not explicitly asserted.

### TS-008 · Reject invalid configuration operations · pending

**Rule:** BR-6 · Persist configuration edits and deduplicated list additions

**Proof:** Proposed extension of cli/test/cli.test.js (not implemented). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: invalid traversal and list operations exit 1, missing arguments and unsupported actions exit 2, and no extra validation of preference names, ranges or model names is implied. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects.

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

### V1 — Inspect saved preferences · TS-006 · BR-5 · Read saved settings without an implicit CLI defaults merge

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable; terminal CLI. |
| Start | `./scripts/hele config list` |
| Land | Run from this repository root; inspect `.hele/settings.json` first. |

| Data | Value |
|---|---|
| Login | None for the local CLI. |
| Seed | The existing approved project settings; no writes are required. |
| Input | Commands below, from inspected `scripts/hele` and command registration. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Run `./scripts/hele config list`. | The displayed JSON matches saved settings, without invented default values. |
| 2 | Run `./scripts/hele config get agents.maxParallel`. | The saved concurrency value is printed. |

This modest replay checks only the named visible subset; it cannot clear the remaining automated/live-session gaps. No screenshot is required.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| project-memory TS-001 · Install the shipped Claude Code plugin | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-002 · Resolve explicit and nearest project memory | coverage-gap | Invalid explicit overrides, file-versus-directory override, and nearest-of-multiple-ancestors cases are not asserted. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-003 · Create only initial memory | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-004 · Establish task-tracking readiness | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-005 · Distinguish availability from readiness | coverage-gap | No current test distinguishes binary-only check from project database initialization; use a controlled command boundary and assert no initialization call. Acceptance cannot be green. | Wylie + owning CLI engineer; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-006 · Read only saved preferences | coverage-gap | Missing settings/value exits and absence of implicit defaults merge are not asserted. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-007 · Persist values without losing unrelated settings | coverage-gap | Null lists, general JSON values, serialized object equality, preservation of unrelated values and trailing newline are not explicitly asserted. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-008 · Reject invalid configuration operations | coverage-gap | Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.3` records gap; implement or execute scoped proof in a separately assigned validation task. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Can passed source/CLI checks certify the entire workflow? | No; only explicit executed assertions are evidence. | Keep these scenarios pending and the assessment red. |
| Should this absorption implement missing tests or workflow fixes? | Not in this snapshot; no new code or test implementation was performed. | Lisbon routes a separately scoped validation/fix task with the listed owners. |

## History

- run 1 (2026-11-18): initial absorbed-snapshot assessment; reused the single shared successful CLI execution, retained all required gaps, zero E2E/screenshots and no human walk.
