---
feature: behavior-validation
increment: 004-select-sufficient-current-proof
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — behavior-validation · increment 004

Prepared from QA_REPORT run 1. No human walk was launched and no verdict was inferred. Automated gaps remain red independently of any later human verdict.

## V1 — Review current-proof and regression decisions · BR-14 · Choose the smallest sufficient proof · TS-019, TS-020, TS-021, TS-022, TS-023, TS-024, TS-025, TS-026, TS-027, TS-028 · verdict: pending

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
| Input | A controlled acceptance/evidence set with mixed current, stale, missing and failed results plus cross-feature dependency information. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Inspect the controlled assertions, actual dependency boundaries and identities. | Smallest sufficient proof is justified and relevant unchanged evidence is reused with its original identity; stale evidence is not passed. |
| 2 | Review selected cross-feature regressions, non-passing required results and CI policy. | Uncertain/shared impact broadens selection; required non-passes keep red, existing gates remain effective and proposals/timing unknowns are honest. |
| 3 | Review whether images would add useful evidence. | Zero useful images is acceptable; no screenshot is fabricated and no unrelated suite is pruned. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

**Verdict:** pending

**Notes:** No human verdict received; absorption records the prepared script only.
