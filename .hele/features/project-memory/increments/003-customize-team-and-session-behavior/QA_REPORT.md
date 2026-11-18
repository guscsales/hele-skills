---
feature: project-memory
increment: 003-customize-team-and-session-behavior
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — project-memory · increment 003 · run 1

## Summary

Assessed the current absorbed behavior described by TS-014, TS-015, TS-016, not a new before/after implementation. All 3 scenarios remain pending because their complete assertions lack current proof. The one shared CLI run passed 27/27 tests; applicable assertions below are reused, not rerun. No E2E or human walk executed. Source workflow instructions and the reported user update/init/read exercise do not establish all live branches. No product defect was demonstrated by this assessment; missing proof keeps the verdict red.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-014 · Collect design participation only once | BR-11 · Ask for design participation once | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-015 · Retain team preferences with runtime limits | BR-12 · Retain named-team preferences without claiming unsupported dispatch | pending | integration | cli/test/cli.test.js: mergeCursorModels expands strings and fills missing cursor keys; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-016 · Migrate memory while preserving product decisions | BR-13 · Preserve choices while applying explicit initialization migrations | pending | integration | Proposed controlled Claude Code session assessment (no test file added); [shared execution](../../../../reports/absorb-cli-execution.md) |

### TS-014 · Collect design participation only once · pending

**Rule:** BR-11 · Ask for design participation once

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: existing-system paths or future design work enable design, no-design disables it, existing choices are preserved without asking again, and no-design does not remove consumer design capabilities. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed.

### TS-015 · Retain team preferences with runtime limits · pending

**Rule:** BR-12 · Retain named-team preferences without claiming unsupported dispatch

**Proof:** cli/test/cli.test.js: mergeCursorModels expands strings and fills missing cursor keys. Pure helper assertions prove selected Claude/Cursor model normalization and default completion.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: the default concurrency is four, plain model values apply across runtimes, default mappings name Claude Code and Cursor but no Codex mapping, and conflicting fallback versus strict dispatch language is disclosed without promising unsupported dispatch. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** This parked helper is not live dispatch proof; concurrency, runtime fallback/conflicting strict wording and unsupported-runtime limitations remain unexercised.

### TS-016 · Migrate memory while preserving product decisions · pending

**Rule:** BR-13 · Preserve choices while applying explicit initialization migrations

**Proof:** Proposed controlled Claude Code session assessment (no test file added). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: missing settings and feature structures are filled without replacing chosen values or descriptions; the old database role is renamed only if the new role is absent, the retired manager role and legacy registry statuses are removed while other metadata survives, session guidance is replaced from current templates, and no Cursor directory is created. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

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

### V1 — Inspect saved team preferences · TS-015 · BR-12 · Retain named-team preferences without claiming unsupported dispatch

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable; terminal CLI. |
| Start | `./scripts/hele config get agents` |
| Land | Run from this repository root. |

| Data | Value |
|---|---|
| Login | None for the local CLI. |
| Seed | Compare the existing `.hele/settings.json` agents values; no edits. |
| Input | Commands below, from inspected `scripts/hele` and command registration. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Run `./scripts/hele config get agents`. | Saved concurrency and named-role preferences match the settings document. |
| 2 | Review the missing-runtime caveat in the feature description. | Configuration storage is not presented as proof of supported Codex dispatch. |

This modest replay checks only the named visible subset; it cannot clear the remaining automated/live-session gaps. No screenshot is required.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| project-memory TS-014 · Collect design participation only once | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.5` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-015 · Retain team preferences with runtime limits | coverage-gap | This parked helper is not live dispatch proof; concurrency, runtime fallback/conflicting strict wording and unsupported-runtime limitations remain unexercised. Acceptance cannot be green. | Wylie + owning CLI engineer; assessment bead `hele-skills-8yt.5` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-016 · Migrate memory while preserving product decisions | coverage-gap | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. Acceptance cannot be green. | Wylie + Lisbon; assessment bead `hele-skills-8yt.5` records gap; implement or execute scoped proof in a separately assigned validation task. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Can passed source/CLI checks certify the entire workflow? | No; only explicit executed assertions are evidence. | Keep these scenarios pending and the assessment red. |
| Should this absorption implement missing tests or workflow fixes? | Not in this snapshot; no new code or test implementation was performed. | Lisbon routes a separately scoped validation/fix task with the listed owners. |

## History

- run 1 (2026-11-18): initial absorbed-snapshot assessment; reused the single shared successful CLI execution, retained all required gaps, zero E2E/screenshots and no human walk.
