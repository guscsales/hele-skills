---
feature: project-memory
increment: 002-find-memory-and-workflow-guidance
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — project-memory · increment 002 · run 1

## Summary

Assessed the current absorbed behavior described by TS-009, TS-010, TS-011, TS-012, TS-013, not a new before/after implementation. All 5 scenarios remain pending because their complete assertions lack current proof. The one shared CLI run passed 27/27 tests; applicable assertions below are reused, not rerun. No E2E or human walk executed. Source workflow instructions and the reported user update/init/read exercise do not establish all live branches. No product defect was demonstrated by this assessment; missing proof keeps the verdict red.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-009 · List registry state without inventing progress | BR-7 · List registered features without a feature-status board | pending | integration | cli/test/cli.test.js: find --list shows registered features; find --json returns machine-readable output; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-010 · Rank registry matches consistently | BR-8 · Rank matching registry entries consistently | pending | integration | cli/test/find.test.js: norm/fuzzy/scoreFeature cases; cli/test/cli.test.js: accented alias and JSON search cases; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-011 · Fall back only after registry search fails | BR-9 · Use document fallback only after registry matching fails | pending | integration | Proposed extension of cli/test/cli.test.js (not implemented); [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-012 · Report no match and incomplete search requests | BR-9 · Use document fallback only after registry matching fails | pending | integration | cli/test/cli.test.js: find reports no matches for unrelated terms; [shared execution](../../../../reports/absorb-cli-execution.md) |
| TS-013 · Explain supported workflows without memory | BR-10 · Provide workflow help without initialized memory | pending | integration | cli/test/cli.test.js: ai overview and README use the canonical flow diagram; existing-suite audit help is discoverable without an initialized project; [shared execution](../../../../reports/absorb-cli-execution.md) |

### TS-009 · List registry state without inventing progress · pending

**Rule:** BR-7 · List registered features without a feature-status board

**Proof:** cli/test/cli.test.js: find --list shows registered features; find --json returns machine-readable output. Real CLI fixture returns slug/summary without the legacy building badge; search JSON returns the expected match.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: registered summaries and description versions are returned, a missing registry yields an empty list, malformed JSON exits 2, and tolerated legacy fields do not become a progress board or integrity guarantee. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Missing/malformed registry, list JSON, PRD version output, arbitrary tolerated fields and absence of integrity enforcement are not asserted.

### TS-010 · Rank registry matches consistently · pending

**Rule:** BR-8 · Rank matching registry entries consistently

**Proof:** cli/test/find.test.js: norm/fuzzy/scoreFeature cases; cli/test/cli.test.js: accented alias and JSON search cases. Direct scoring assertions prove normalization, exact slug 100, exact alias 95, title substring 80, typo above threshold and unrelated score below it; CLI returns one accented alias match.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: each receives its best score, exact slug scores 100, exact alias 95, name substring 80, alias substring 78, approximate similarity at most 75 and summary overlap at most 55; scores below 40 are excluded and remaining results descend by score in human or machine-readable form without creating work. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Alias-substring 78, summary 55/fuzzy 75 ceilings, best-score competition, multiple-match descending order and exact threshold boundary are not all asserted.

### TS-011 · Fall back only after registry search fails · pending

**Rule:** BR-9 · Use document fallback only after registry matching fails

**Proof:** Proposed extension of cli/test/cli.test.js (not implemented). No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: only normalized query tokens longer than two characters participate, matching documents are grouped by feature, content-only hits prompt alias repair, and lowercased document content does not acquire the registry accent-folding guarantee. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects.

### TS-012 · Report no match and incomplete search requests · pending

**Rule:** BR-9 · Use document fallback only after registry matching fails

**Proof:** cli/test/cli.test.js: find reports no matches for unrelated terms. Real CLI with a temporary registry emits NO MATCHES.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: no match advises confirmation before creating a feature, while missing search terms without a list request exits 2. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Confirmation advice and missing-query exit 2 are not asserted; content fallback branch is absent from the fixture.

### TS-013 · Explain supported workflows without memory · pending

**Rule:** BR-10 · Provide workflow help without initialized memory

**Proof:** cli/test/cli.test.js: ai overview and README use the canonical flow diagram; existing-suite audit help is discoverable without an initialized project. Real source CLI overview contains the exact README canonical diagram; fix-e2e short and two prefixed names produce identical help without creating files.

**Execution:** Reused `cd cli && npm test`: exit 0, 27 passed, no failures/skips/retries; [shared execution](../../../../reports/absorb-cli-execution.md), [raw output](../../../../reports/absorb-cli-tests.tap). Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with source hashes in that record; Node v22.22.2, npm 10.9.7, macOS arm64; local wall-clock 0.602 s. Proposed assessments were not run.

**Expected / observed:** Expected: the canonical README flow appears in overview, supported short and prefixed names resolve, unknown names exit 1 with supported choices, absorb and paper-to-code remain absent from the catalog, and no workflow is executed. Observed: only the explicit partial assertions under Proof, where present; no broader user/session outcome observed.

**Limitations:** Other supported names, unknown-name exit/choices, absent absorb/paper-to-code entries and all nonexecution side effects are not fully asserted.

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

### V1 — Discover workflow help · TS-013 · BR-10 · Provide workflow help without initialized memory

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable; terminal CLI. |
| Start | `./scripts/hele ai` |
| Land | Run from this repository root. |

| Data | Value |
|---|---|
| Login | None for the local CLI. |
| Seed | No login or application server; use the bundled CLI. |
| Input | Commands below, from inspected `scripts/hele` and command registration. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Run `./scripts/hele ai`. | The overview shows the canonical documented flow. |
| 2 | Run `./scripts/hele ai fix-e2e`, then `./scripts/hele ai /hele-fix-e2e`. | Both explain the same audit workflow; neither runs an audit. |

This modest replay checks only the named visible subset; it cannot clear the remaining automated/live-session gaps. No screenshot is required.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| project-memory TS-009 · List registry state without inventing progress | coverage-gap | Missing/malformed registry, list JSON, PRD version output, arbitrary tolerated fields and absence of integrity enforcement are not asserted. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.4` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-010 · Rank registry matches consistently | coverage-gap | Alias-substring 78, summary 55/fuzzy 75 ceilings, best-score competition, multiple-match descending order and exact threshold boundary are not all asserted. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.4` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-011 · Fall back only after registry search fails | coverage-gap | Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.4` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-012 · Report no match and incomplete search requests | coverage-gap | Confirmation advice and missing-query exit 2 are not asserted; content fallback branch is absent from the fixture. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.4` records gap; implement or execute scoped proof in a separately assigned validation task. |
| project-memory TS-013 · Explain supported workflows without memory | coverage-gap | Other supported names, unknown-name exit/choices, absent absorb/paper-to-code entries and all nonexecution side effects are not fully asserted. Acceptance cannot be green. | Owning CLI engineer; Wylie reviews evidence; assessment bead `hele-skills-8yt.4` records gap; implement or execute scoped proof in a separately assigned validation task. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Can passed source/CLI checks certify the entire workflow? | No; only explicit executed assertions are evidence. | Keep these scenarios pending and the assessment red. |
| Should this absorption implement missing tests or workflow fixes? | Not in this snapshot; no new code or test implementation was performed. | Lisbon routes a separately scoped validation/fix task with the listed owners. |

## History

- run 1 (2026-11-18): initial absorbed-snapshot assessment; reused the single shared successful CLI execution, retained all required gaps, zero E2E/screenshots and no human walk.
