---
feature: product-absorption
increment: 001-snapshot-existing-product
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v1.0
verdict: red
updated: 2026-11-18
---

# QA Report — product-absorption · increment 001 · run 1

## Summary

Assessed 20 required scenarios from the approved v1.0 contract: 0 passing, 20 pending, 0 observed failing assertions and 0 scenario execution blockers established. The red verdict records coverage gaps, not a proven product failure. The shipped workflow is instruction-driven; passing CLI primitive tests do not prove live multiagent behavior. No execution plan was read, no production/test changes or fix tasks were created, and no manual walk was initiated. Historical built records remain frozen.

`cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. [Shared execution identity](../../../../reports/absorb-cli-execution.md) and [raw TAP](../../../../reports/absorb-cli-tests.tap) are reused, not rerun. Zero live workflow integrations or E2E were executed. Existing human replay prerequisites are unconfirmed; this is separate from the missing automated assertions.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-001 · Initialize only missing prerequisites | BR-1 · Initialize prerequisites before reading the product | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-002 · Do not equate a binary check with usable task storage | BR-1 · Initialize prerequisites before reading the product | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-003 · Survey the whole product through background specialists | BR-2 · Survey the whole product through named specialists | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-004 · Keep evidence-led survey findings durable and read-only | BR-2 · Survey the whole product through named specialists | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-005 · Partition recognizable capabilities with exclusive ownership | BR-3 · Partition user capabilities into meaningful historical slices | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-006 · Group history into meaningful slices without invented motives | BR-3 · Partition user capabilities into meaningful historical slices | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-007 · Preserve existing descriptions unless refresh is requested | BR-4 · Preserve already documented capabilities by default | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-008 · Present a saved complete snapshot before feature writes | BR-5 · Present the complete snapshot before feature artifacts exist | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-009 · Treat snapshot acceptance as acceptance of its recommendations | BR-6 · Approval accepts the cut and its recommendations | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-010 · Revise only challenged areas and re-present the full snapshot | BR-6 · Approval accepts the cut and its recommendations | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-011 · Write approved current-state memory once | BR-7 · Write current-state product memory and register it once | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-012 · Refresh existing memory without duplicating it | BR-7 · Write current-state product memory and register it once | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-013 · Keep historical completion separate from executable delivery | BR-8 · Historical plans are frozen records, never build queues | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-014 · Disclose the absorbed-plan format contradiction | BR-8 · Historical plans are frozen records, never build queues | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-015 · Create shared maps only for applicable missing surfaces | BR-9 · Create shared maps only when applicable and missing | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-016 · Avoid inventing application surfaces for this harness | BR-9 · Create shared maps only when applicable and missing | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-017 · Resume open work and recover an unwritten snapshot | BR-10 · Resume durable task state instead of starting another survey | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-018 · Distinguish completed absorption from new delivery | BR-10 · Resume durable task state instead of starting another survey | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-019 · Patch wrong rules without reopening frozen history | BR-11 · Apply feedback at the affected level | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |
| TS-020 · Route feature-cut corrections and new ideas appropriately | BR-11 · Apply feedback at the affected level | pending | integration | Missing runtime assertion; [shared primitive-only result](../../../../reports/absorb-cli-execution.md) |

### TS-001 · Initialize only missing prerequisites · pending

**Rule:** BR-1 · Initialize prerequisites before reading the product

**Proof:** `cli/test/dir.test.js` checks current/ancestor memory discovery, missing memory and the environment override; `cli/test/cli.test.js` checks the missing-memory find error. No test invokes actual initialization, the one-time design decision or Beads database usability. This ongoing absorption provides partial bootstrap observation only. Proposed runtime integration replay: `product-absorption/001 — Initialize only missing prerequisites`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the one-time design participation question and settings/catalog initialization precede product reading; an existing answer is reused and task tracking is required. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-002 · Do not equate a binary check with usable task storage · pending

**Rule:** BR-1 · Initialize prerequisites before reading the product

**Proof:** `cli/test/dir.test.js` checks current/ancestor memory discovery, missing memory and the environment override; `cli/test/cli.test.js` checks the missing-memory find error. No test invokes actual initialization, the one-time design decision or Beads database usability. This ongoing absorption provides partial bootstrap observation only. Proposed runtime integration replay: `product-absorption/001 — Do not equate a binary check with usable task storage`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: binary availability alone is not claimed to prove project database usability; successful database operations provide that evidence. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-003 · Survey the whole product through background specialists · pending

**Rule:** BR-2 · Survey the whole product through named specialists

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Survey the whole product through background specialists`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: named background readers cover domain behavior, user experience, history and schema, plus design only when enabled; they respect concurrency and the conductor remains available after dispatch. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-004 · Keep evidence-led survey findings durable and read-only · pending

**Rule:** BR-2 · Survey the whole product through named specialists

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Keep evidence-led survey findings durable and read-only`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: task records contain paths, symbols or test names and conflicts; product documents, tests, visible behavior and constraints outrank names/comments, with no extra notes files or product edits. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-005 · Partition recognizable capabilities with exclusive ownership · pending

**Rule:** BR-3 · Partition user capabilities into meaningful historical slices

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Partition recognizable capabilities with exclusive ownership`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: features describe user capabilities, each product file has one owner, overlapping feature readers do not run together and slices use oldest-first three-digit numbering with English names. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-006 · Group history into meaningful slices without invented motives · pending

**Rule:** BR-3 · Partition user capabilities into meaningful historical slices

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Group history into meaningful slices without invented motives`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: independently shippable slices can group commits; over eight slices merges the smallest supporting slices with explanation, current rules follow evidence, ordering follows history and motives are recorded only when evidenced. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-007 · Preserve existing descriptions unless refresh is requested · pending

**Rule:** BR-4 · Preserve already documented capabilities by default

**Proof:** `cli/test/cli.test.js` — `find matches an accented pt-BR alias`, `find reports no matches for unrelated terms`, and `find --json returns machine-readable output`; `cli/test/find.test.js` checks normalization/scoring. Real temporary-file CLI reads and in-process helper assertions prove lookup primitives, not the runtime anti-duplicate decision or preservation of existing descriptions. Proposed runtime integration replay: `product-absorption/001 — Preserve existing descriptions unless refresh is requested`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the snapshot identifies it as already documented, ordinary approval does not rewrite it and wording differences do not create a duplicate; refresh requires the human request. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-008 · Present a saved complete snapshot before feature writes · pending

**Rule:** BR-5 · Present the complete snapshot before feature artifacts exist

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Present a saved complete snapshot before feature writes`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: every increment has a row and evidence links, material doubts carry recommendations, applicable existing capabilities are listed, consolidation is saved, read tasks close and scratch is removed; feature documents and shared maps await approval apart from initialization. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-009 · Treat snapshot acceptance as acceptance of its recommendations · pending

**Rule:** BR-6 · Approval accepts the cut and its recommendations

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Treat snapshot acceptance as acceptance of its recommendations`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the complete cut and stated recommendations are approved before feature writing starts. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-010 · Revise only challenged areas and re-present the full snapshot · pending

**Rule:** BR-6 · Approval accepts the cut and its recommendations

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Revise only challenged areas and re-present the full snapshot`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: no feature artifacts are written; only affected capabilities, partitions or challenged evidence and dependents are reread, prior valid survey work is reused and the entire revised snapshot is presented for approval. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-011 · Write approved current-state memory once · pending

**Rule:** BR-7 · Write current-state product memory and register it once

**Proof:** `cli/test/cli.test.js` — `find --list shows registered features` proves listing and omitted status display over a temporary fixture, not write-once registration or refresh semantics. This approved absorption has written product descriptions and these scenarios, but the observation is incomplete and runtime-adapted. Proposed runtime integration replay: `product-absorption/001 — Write approved current-state memory once`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: approved v1.0 current rules, flows and scope, independent scenarios, historical records and per-slice validation are produced; testable rules and a slice/rule changelog are registered once with names, summaries, aliases and document versions but no feature status. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-012 · Refresh existing memory without duplicating it · pending

**Rule:** BR-7 · Write current-state product memory and register it once

**Proof:** `cli/test/cli.test.js` — `find --list shows registered features` proves listing and omitted status display over a temporary fixture, not write-once registration or refresh semantics. This approved absorption has written product descriptions and these scenarios, but the observation is incomplete and runtime-adapted. Proposed runtime integration replay: `product-absorption/001 — Refresh existing memory without duplicating it`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: its living product description and version are patched rather than registering another capability; unsupported motives remain explicitly unrecorded. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-013 · Keep historical completion separate from executable delivery · pending

**Rule:** BR-8 · Historical plans are frozen records, never build queues

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Keep historical completion separate from executable delivery`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: it is built and marked as absorption with an empty task list, never ready or assigned a build queue; existing absorbed plans stay frozen and later slices append at the next number without implying green QA. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved format contradiction: absorb template prohibits XML section tags while containing them; this assessment does not inspect or rewrite historical plans.

### TS-014 · Disclose the absorbed-plan format contradiction · pending

**Rule:** BR-8 · Historical plans are frozen records, never build queues

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Disclose the absorbed-plan format contradiction`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: the existing template body is preserved and the inconsistency remains explicit rather than silently claiming a corrected format. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved format contradiction: absorb template prohibits XML section tags while containing them; this assessment does not inspect or rewrite historical plans.

### TS-015 · Create shared maps only for applicable missing surfaces · pending

**Rule:** BR-9 · Create shared maps only when applicable and missing

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Create shared maps only for applicable missing surfaces`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: only an existing application schema with a missing map or enabled design with a missing map creates one; existing maps remain intact and no design specification or database-change proposal is created. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-016 · Avoid inventing application surfaces for this harness · pending

**Rule:** BR-9 · Create shared maps only when applicable and missing

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Avoid inventing application surfaces for this harness`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: task storage is not treated as the application schema, neither shared map is created and shipped design capabilities remain inventoried. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior.

### TS-017 · Resume open work and recover an unwritten snapshot · pending

**Rule:** BR-10 · Resume durable task state instead of starting another survey

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Resume open work and recover an unwritten snapshot`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: ready work continues without a duplicate survey, or the saved full snapshot returns to approval/correction; every task in an epic closes before leaving it. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-018 · Distinguish completed absorption from new delivery · pending

**Rule:** BR-10 · Resume durable task state instead of starting another survey

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Distinguish completed absorption from new delivery`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: completed writing leads to the final report; after closure a new idea enters ordinary Hele delivery instead of another survey. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-019 · Patch wrong rules without reopening frozen history · pending

**Rule:** BR-11 · Apply feedback at the affected level

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Patch wrong rules without reopening frozen history`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: only the living rule, version/changelog, affected scenarios and increment evidence refresh; frozen plans remain untouched and the whole app is not resurveyed. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

### TS-020 · Route feature-cut corrections and new ideas appropriately · pending

**Rule:** BR-11 · Apply feedback at the affected level

**Proof:** No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. Proposed runtime integration replay: `product-absorption/001 — Route feature-cut corrections and new ideas appropriately`; assert the complete expected outcome below using real runtime, worker dispatch and disposable project/task persistence without mocking that connection. No such test file exists.

**Execution:** `cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; source hashes and environment are in the [execution record](../../../../reports/absorb-cli-execution.md). Runtime replay not executed; no fresh run for this scenario.

**Expected / observed:** Expected: a wrong cut returns to affected reading and a complete revised snapshot before writes; new product work follows ordinary delivery. Observed: no complete runtime execution trace establishes those assertions. Existing evidence is limited to the boundaries described above.

**Limitations:** Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof.

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

### V1 — Review, correct and approve a product snapshot · TS-001–TS-020

**Rules:** BR-1 · Initialize prerequisites before reading the product; BR-2 · Survey the whole product through named specialists; BR-3 · Partition user capabilities into meaningful historical slices; BR-4 · Preserve already documented capabilities by default; BR-5 · Present the complete snapshot before feature artifacts exist; BR-6 · Approval accepts the cut and its recommendations; BR-7 · Write current-state product memory and register it once; BR-8 · Historical plans are frozen records, never build queues; BR-9 · Create shared maps only when applicable and missing; BR-10 · Resume durable task state instead of starting another survey; BR-11 · Apply feedback at the affected level

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele-absorb`. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | Disposable clone of this repository at the recorded revision, initially without project memory or task storage; a separate pre-documented copy is needed for preservation/refresh and resume branches. Retain a saved snapshot for the resume check. Fixtures were not created. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | In the disposable clone enter `/hele-absorb`; answer the one-time design question if memory is absent and ensure actual task database operations succeed. | Initialization precedes product reading; a binary check alone is not presented as proof of usable task storage. Existing design answers are reused. |
| 2 | Observe read-only background survey and the complete saved snapshot. | User capabilities and chronological slices have evidence and exclusive ownership; read tasks close before presentation and feature artifacts/shared maps do not appear before approval. |
| 3 | Correct one named capability before approval. | Only affected evidence/partitions are revisited, with a complete revised snapshot and no premature feature writes. |
| 4 | Approve that full snapshot including recommendations, then inspect written memory. | Current descriptions, independent scenarios and historical records appear; already documented features are preserved unless refresh was requested, absorbed plans remain frozen and maps are created only when applicable and missing. |
| 5 | In separate saved fixture copies, resume open work and a saved unwritten snapshot after conversation reset; submit a wrong rule, wrong feature cut and new idea in their appropriate completed contexts. | Resume reuses durable work; rule feedback refreshes affected living artifacts without frozen-plan edits, cut changes require a new full snapshot and new product ideas enter ordinary delivery. Unexercised branches remain pending. |

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| product-absorption TS-001 · Initialize only missing prerequisites | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-002 · Do not equate a binary check with usable task storage | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-003 · Survey the whole product through background specialists | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-004 · Keep evidence-led survey findings durable and read-only | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-005 · Partition recognizable capabilities with exclusive ownership | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-006 · Group history into meaningful slices without invented motives | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-007 · Preserve existing descriptions unless refresh is requested | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-008 · Present a saved complete snapshot before feature writes | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-009 · Treat snapshot acceptance as acceptance of its recommendations | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-010 · Revise only challenged areas and re-present the full snapshot | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-011 · Write approved current-state memory once | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-012 · Refresh existing memory without duplicating it | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-013 · Keep historical completion separate from executable delivery | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved format contradiction: absorb template prohibits XML section tags while containing them; this assessment does not inspect or rewrite historical plans. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-014 · Disclose the absorbed-plan format contradiction | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved format contradiction: absorb template prohibits XML section tags while containing them; this assessment does not inspect or rewrite historical plans. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-015 · Create shared maps only for applicable missing surfaces | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-016 · Avoid inventing application surfaces for this harness | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-017 · Resume open work and recover an unwritten snapshot | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-018 · Distinguish completed absorption from new delivery | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-019 · Patch wrong rules without reopening frozen history | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |
| product-absorption TS-020 · Route feature-cut corrections and new ideas appropriately | coverage-gap | Expected complete scenario outcome; no current runtime assertion. Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. The ongoing approved absorption provides partial read/write observation, not exhaustive approval, correction, resume or closure proof. | Lisbon owns workflow behavior; Wylie owns coverage, Rigsby runner prerequisites. Record in the absorption QA task only; no fix/build task or frozen-plan edit. Later implementation requires normal authorized delivery. |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Does built history mean validated acceptance? | No. All required runtime scenarios here remain pending and the report is red. | Keep explicit in final absorption counts. |
| May this assessment repair the shipped workflow or start a manual walk? | No; approved scope records existing behavior and gaps. | Later independently authorized delivery/verification. |
| Runtime support and instruction contradictions | Approved snapshot preserves the strict-model/inheritance contradiction and this Codex adaptation. Guided-delivery also preserves unchanged-rule Bugfix approval inconsistency and the built-plan adjustment exception; origin-absorb plans remain frozen. Product-absorption preserves its template format inconsistency. None is resolved by CLI tests. | Lisbon/the human in later product decisions; no silent contract weakening. |

## History

- Run 1 (2026-11-18): initial absorbed-slice assessment; current shared CLI result reused once; all complete workflow assertions remain pending; no manual walk, screenshots, product changes or remediation tasks.
