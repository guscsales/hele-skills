---
feature: behavior-validation
increment: 003-report-and-resolve-failures
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — behavior-validation · increment 003

Prepared from QA_REPORT run 1. No human walk was launched and no verdict was inferred. Automated gaps remain red independently of any later human verdict.

## V1 — Review a report reconstruction · BR-10 · Write current, reviewable evidence reports · TS-013, TS-014, TS-015, TS-016, TS-017, TS-018 · verdict: pending

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | None: terminal and Claude Code; this repository ships no application route. |
| Start | From this repository: `node cli/src/index.js ai qa` (command form inspected in `cli/src/ai.js` and `cli/src/index.js`; this specific human replay was not launched). Claude plugin installation syntax is documented in README; installed runtime is not verified. |
| Land | Read the printed skill guidance, then prepare a separate controlled consumer fixture before invoking a live workflow. |

| Data | Value |
|---|---|
| Login | No login for CLI help. Claude account/plugin availability is not verified; no credentials supplied. |
| Seed | Approved `behavior-validation/PRODUCT_DESCRIPTION.md` v1.0 and these acceptance scenarios are available for reading. Live consumer/evaluation fixtures are not supplied. |
| Input | A controlled current output artifact plus stale and failed/retried evidence, with known identity and unresolved findings. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Review supplied current, stale and retry evidence and request reconstruction only in a controlled fixture. | A report exists without a fabricated rerun; original failures remain visible and gaps prevent green. |
| 2 | Review finding classes, owners and next-action choices without authorizing fixes. | Missing proof and product questions keep their owners; no implementation or human walk follows from recommendations alone. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

**Verdict:** pending

**Notes:** No human verdict received; absorption records the prepared script only.
