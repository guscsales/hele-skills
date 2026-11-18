---
feature: guided-delivery
increment: 001-deliver-approved-features
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — guided-delivery · increment 001 · run 1

## Summary

Assessed 15 required scenarios from the approved v1.0 contract: 0 passing, 15 pending, 0 observed failing assertions and 0 scenario execution blockers established. The red verdict records coverage gaps, not a proven product failure. The shipped workflow is instruction-driven; passing CLI primitive tests do not prove live multiagent behavior. No execution plan was read, no production/test changes or fix tasks were created, and no manual walk was initiated. Historical built records remain frozen.

`cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. [Shared execution identity](../../../../reports/absorb-cli-execution.md) and [raw TAP](../../../../reports/absorb-cli-tests.tap) are reused, not rerun. Zero live workflow integrations or E2E were executed. Existing human replay prerequisites are unconfirmed; this is separate from the missing automated assertions.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-001 · Create one current capability contract | BR-1 · One living product contract per capability | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-002 · Patch current rules without losing identity | BR-1 · One living product contract per capability | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-003 · Review behavior and independent scenarios together | BR-2 · Approve product behavior together with acceptance scenarios | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-004 · Apply conditional design approval | BR-3 · Design participation is conditional | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-005 · Move from approval directly into prepared delivery | BR-4 · Planning does not add another approval stop | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-006 · Hold unapproved database changes | BR-5 · Database changes require their own decision | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-007 · Distinguish unchanged data structures and review applied changes | BR-5 · Database changes require their own decision | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-008 · Assign work to responsible specialists | BR-6 · Assign specialists by responsibility | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-009 · Expose runtime selection limitations | BR-6 · Assign specialists by responsibility | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-010 · Run only ready non-overlapping work | BR-7 · Dispatch only ready, non-overlapping work | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-011 · Keep independent work moving during review | BR-7 · Dispatch only ready, non-overlapping work | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-012 · Require current targeted engineering proof | BR-8 · Engineering supplies current and proportional proof | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-013 · Broaden verification when shared changes warrant it | BR-8 · Engineering supplies current and proportional proof | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-014 · Start independent QA after evidenced engineering | BR-9 · Completed engineering proceeds to independent validation | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-015 · Repair approved findings without changing their meaning silently | BR-10 · Repair approved QA findings in the active increment | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |

### TS-001 · Create one current capability contract · pending

**Rule:** BR-1 · One living product contract per capability

**Proof:** `cli/test/cli.test.js` — `find --list shows registered features`: real subprocess over a temporary registry asserts feature/summary display and omission of `[building]`. It does not create or patch a living contract. Proposed runtime integration replay: `guided-delivery/001 — Create one current capability contract`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: it has one meaningful English name, stable business rules, named flows, explicit scope and a first numbered delivery; its catalog lists names and document versions without a progress status. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-002 · Patch current rules without losing identity · pending

**Rule:** BR-1 · One living product contract per capability

**Proof:** `cli/test/cli.test.js` — `find --list shows registered features`: real subprocess over a temporary registry asserts feature/summary display and omission of `[building]`. It does not create or patch a living contract. Proposed runtime integration replay: `guided-delivery/001 — Patch current rules without losing identity`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: a rule edit replaces current wording with a patch version and change entry; a ground-up replacement gets its own capability. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-003 · Review behavior and independent scenarios together · pending

**Rule:** BR-2 · Approve product behavior together with acceptance scenarios

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Review behavior and independent scenarios together`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the product rules, independently derived scenarios and coverage recommendations appear together; normal implementation waits for approval without a separate coverage approval. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-004 · Apply conditional design approval · pending

**Rule:** BR-3 · Design participation is conditional

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Apply conditional design approval`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: enabled design is reconciled to the approved product and approved before engineering; explicit no-design or backend-first work records why design is skipped. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-005 · Move from approval directly into prepared delivery · pending

**Rule:** BR-4 · Planning does not add another approval stop

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Move from approval directly into prepared delivery`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the actual project, document versions, owners, dependencies and proof expectations inform the work; stale scenarios are reconciled and actionable work is tracked, without another plan approval. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-006 · Hold unapproved database changes · pending

**Rule:** BR-5 · Database changes require their own decision

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Hold unapproved database changes`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: numbered changes, risks and rollback are proposed for explicit approval; a draft holds initial engineering and unapproved migration work stays held. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-007 · Distinguish unchanged data structures and review applied changes · pending

**Rule:** BR-5 · Database changes require their own decision

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Distinguish unchanged data structures and review applied changes`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: queries against unchanged structures need no database gate; applied changes receive conformance review and update the shared database description. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-008 · Assign work to responsible specialists · pending

**Rule:** BR-6 · Assign specialists by responsibility

**Proof:** `cli/test/cli.test.js` — `config set / get / add round-trip` checks model/concurrency persistence, and `mergeCursorModels expands strings and fills missing cursor keys` checks in-process merge output. Neither dispatches workers or resolves the documented runtime contradiction. Proposed runtime integration replay: `guided-delivery/001 — Assign work to responsible specialists`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: Lisbon coordinates while engineers implement; Jane handles security participation, Hightower database participation and Rigsby CI execution policy, within configured role selection and concurrency. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence.

### TS-009 · Expose runtime selection limitations · pending

**Rule:** BR-6 · Assign specialists by responsibility

**Proof:** `cli/test/cli.test.js` — `config set / get / add round-trip` checks model/concurrency persistence, and `mergeCursorModels expands strings and fills missing cursor keys` checks in-process merge output. Neither dispatches workers or resolves the documented runtime contradiction. Proposed runtime integration replay: `guided-delivery/001 — Expose runtime selection limitations`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the contradiction stays explicit and the Codex adaptation is not presented as native shipped support. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence.

### TS-010 · Run only ready non-overlapping work · pending

**Rule:** BR-7 · Dispatch only ready, non-overlapping work

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Run only ready non-overlapping work`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: dependencies finish before dependent work starts, overlapping work does not run together and the configured worker limit is respected. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-011 · Keep independent work moving during review · pending

**Rule:** BR-7 · Dispatch only ready, non-overlapping work

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Keep independent work moving during review`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: independent ready work continues; unexpectedly touched files are reported rather than silently enlarging ownership. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-012 · Require current targeted engineering proof · pending

**Rule:** BR-8 · Engineering supplies current and proportional proof

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Require current targeted engineering proof`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: targeted failing proof precedes implementation and completion names covered behaviors, commands, results, relevant revision and environment; old or unexecuted expectations do not count as passing. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-013 · Broaden verification when shared changes warrant it · pending

**Rule:** BR-8 · Engineering supplies current and proportional proof

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Broaden verification when shared changes warrant it`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: affected tests and applicable type/lint checks run, with broader checks for shared configuration, dependencies, helpers or schema and with expensive verification constrained by the task contract. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-014 · Start independent QA after evidenced engineering · pending

**Rule:** BR-9 · Completed engineering proceeds to independent validation

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Start independent QA after evidenced engineering`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: only required current passing engineering evidence permits closing its work and marking the plan built; independent QA begins without another approval and built does not mean QA or human acceptance. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-015 · Repair approved findings without changing their meaning silently · pending

**Rule:** BR-10 · Repair approved QA findings in the active increment

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `guided-delivery/001 — Repair approved findings without changing their meaning silently`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: work stays in that increment; product-meaning changes return to definition, valid confirmations may be reused, changed code invalidates affected proof and the refreshed report retains unresolved gaps. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

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

### V1 — Approve and deliver a small capability · TS-001–TS-015

**Rules:** BR-1 · One living product contract per capability; BR-2 · Approve product behavior together with acceptance scenarios; BR-3 · Design participation is conditional; BR-4 · Planning does not add another approval stop; BR-5 · Database changes require their own decision; BR-6 · Assign specialists by responsibility; BR-7 · Dispatch only ready, non-overlapping work; BR-8 · Engineering supplies current and proportional proof; BR-9 · Completed engineering proceeds to independent validation; BR-10 · Repair approved QA findings in the active increment

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele` with the request below. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | A disposable existing application repository with a working compile command and a small existing behavior test; no production data. Use a new capability such as an optional local note on a saved item. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | In the disposable project, enter `/hele Add an optional local note to a saved item` and respond to useful questions. | A living contract and independent scenarios appear at one approval stop; implementation has not begun. |
| 2 | Request a wording correction before approving, then approve the corrected contract. Choose no design only if the fixture permits backend-first delivery. | Revised behavior is shown for approval; applicable design gates remain explicit and there is no separate plan sign-off. |
| 3 | If the fixture requires a schema change, leave its proposal unapproved, observe held work, then explicitly approve in the fixture. | Database risks and rollback are visible; required work waits for that decision. |
| 4 | Observe task dispatch, engineering evidence and the transition to independent QA. | Only ready non-overlapping work runs within the limit, independent work continues during review, and current checks precede a QA report. A built record is not reported as human acceptance. |
| 5 | At QA, approve a specific fixture finding only if one exists; otherwise record that repair branch as unexercised. | Repairs stay in the active increment, meaning changes return to definition and unresolved proof remains visible. |

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| guided-delivery TS-001 · Create one current capability contract | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-002 · Patch current rules without losing identity | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-003 · Review behavior and independent scenarios together | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-004 · Apply conditional design approval | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-005 · Move from approval directly into prepared delivery | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-006 · Hold unapproved database changes | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-007 · Distinguish unchanged data structures and review applied changes | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-008 · Assign work to responsible specialists | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-009 · Expose runtime selection limitations | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-010 · Run only ready non-overlapping work | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-011 · Keep independent work moving during review | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-012 · Require current targeted engineering proof | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-013 · Broaden verification when shared changes warrant it | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-014 · Start independent QA after evidenced engineering | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| guided-delivery TS-015 · Repair approved findings without changing their meaning silently | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Does built history mean validated acceptance? | No. All required runtime scenarios here remain pending and the report is red. | Keep explicit in final absorption counts. |
| May this assessment repair the shipped workflow or start a manual walk? | No; approved scope records existing behavior and gaps. | Later independently authorized delivery/verification. |
| Runtime support and instruction contradictions | Approved snapshot preserves the strict-model/inheritance contradiction and this Codex adaptation. Guided-delivery also preserves unchanged-rule Bugfix approval inconsistency and the built-plan adjustment exception; origin-absorb plans remain frozen. Product-absorption preserves its template format inconsistency. None is resolved by CLI tests. | Lisbon/the human in later product decisions; no silent contract weakening. |

## History

- Run 1 (2026-11-18): initial absorbed-slice assessment; current shared CLI result reused once; all complete workflow assertions remain pending; no manual walk, screenshots, product changes or remediation tasks.
