<!-- RULES:
- Written after every QA assessment, including zero E2E. Follow validation-strategy.md.
- Every required behavior gets current evidence or an explicit gap. Selected
  existing regressions are included even when they belong to another feature.
- Green only with current passing evidence and no required gap/failure/blocker.
- Human-readable markdown. Stub and rule labels always include their titles.
- Reuse valid build/confirmation results and name their source; never claim a
  rerun occurred. State evidence code identity and relevant environment.
- Screenshots and before/after pairs are optional. Omit empty image sections.
  Useful kept shots follow the screenshot contract and qa.maxScreenshots ceiling.
- Human flows are distinct from automated evidence. Group related behaviors;
  label executed versus prepared, not executed. No forced flow for backend-only work.
- Latest assessment replaces the body; previous assessments shrink to History.
- Files follow language.artifacts. Do not commit credentials or secrets.
-->
---
feature: <slug>
increment: NNN-<slug>
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v<X.Y>
verdict: green | red
updated: <YYYY-MM-DD>
---

# QA Report — <feature> · increment NNN · run <N>

## Summary

Explain the delivered behavior, what is proven, and any remaining gaps in product terms. Name assessed behaviors, reused build results, and E2E executed (zero is valid). Do not imply the whole living contract was rerun.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-001 · <title> | BR-1 · <title> | <passing / failing / pending / blocked> | <level> | <test path/title and result link> |

### TS-001 · <title> · <status>

**Rule:** BR-1 · <title>

**Proof:** <test path/title, explicit assertions, real boundaries and mocks>

**Execution:** <command, result/output artifact, code revision or working-tree identity, environment, run time; reused build evidence or fresh run>

**Expected / observed:** <behavior and result; do not fabricate UI observations from an API/unit test>

**Limitations:** <unproven boundary, missing test, stale evidence, or none>

Repeat per required stub. All mapped assertions must have valid results for passing.

## Selected regressions

| Journey / test | Feature / stubs | Why affected | Result / evidence |
|---|---|---|---|
| <path + title> | <feature + IDs> | <execution map / dependencies / traces> | <current result link or failure/blocker> |

Say explicitly when none apply and why. Unknown impact requires broader verification, not a guessed empty set.

## E2E and CI impact

| Decision | Details |
|---|---|
| E2E changes | <reused / extended / added / removed counts and paths; zero is valid> |
| Justification | <real connection, failure smaller tests miss, existing coverage considered> |
| Execution map | <project map/config path; selection and fallback> |
| CI stages | <current triggers and blocking stages; distinguish proposals from implemented changes> |
| Timing | <measured wall-clock, setup, retries; source; or unknown> |
| Deferred verification | <suite, actual trigger, owner, risk of later discovery; or none> |

## Human verification

Only changed user-facing journeys worth a human check. Backend-only: explain why none apply. Do not create a permanent E2E just to supply this section.

### V1 — <flow title> · TS-001 · BR-1 · <rule title>

**Walk evidence:** executed | prepared, not executed

| Open | |
|---|---|
| URL | <verified route> |
| Start | <inspected startup command> |
| Land | <navigation> |

| Data | Value |
|---|---|
| Login | <role and local credentials source, no secret> |
| Seed | <fixture or reproducible data setup> |
| Input | <values> |

| Step | Do this | You should see |
|---|---|---|
| 1 | <action> | <expected outcome from the PRD> |

Optional: embed a useful kept screenshot, or a real before/after pair, with a sentence explaining what it shows. No image is required. Missing setup is an explicit blocker.

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| <feature + TS/title> | <product-bug / coverage-gap / test-defect / contract-question / polish / blocked> | <evidence and consequence> | <beads ID, owning engineer/Wylie, or decision needed> |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| <question> | <human answer or explicit pending decision> | <PRD patch / fix task / backlog> |

## History

- run <N> (<date>): <evidence summary, failures/gaps, reused versus fresh runs>
