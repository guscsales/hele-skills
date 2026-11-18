---
feature: behavior-validation
increment: 002-guide-human-acceptance
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — behavior-validation · increment 002

Prepared from QA_REPORT run 1. No human walk was launched and no verdict was inferred. Automated gaps remain red independently of any later human verdict.

## V1 — Prepare an explicit human verdict walk · BR-5 · Prepare human flows from inspected facts · TS-006, TS-007, TS-008, TS-009, TS-010, TS-011, TS-012 · verdict: pending

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | None: terminal and Claude Code; this repository ships no application route. |
| Start | From this repository: `node cli/src/index.js ai verify-work` (command form inspected in `cli/src/ai.js` and `cli/src/index.js`; this specific human replay was not launched). Claude plugin installation syntax is documented in README; installed runtime is not verified. |
| Land | Read the printed skill guidance, then prepare a separate controlled consumer fixture before invoking a live workflow. |

| Data | Value |
|---|---|
| Login | No login for CLI help. Claude account/plugin availability is not verified; no credentials supplied. |
| Seed | Approved `behavior-validation/PRODUCT_DESCRIPTION.md` v1.0 and these acceptance scenarios are available for reading. Live consumer/evaluation fixtures are not supplied. |
| Input | A controlled QA report with pending human flows, an unaffected verified flow and a required automated gap; no real walk is started here. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Inspect the prepared flow setup and its evidence label. | Missing setup is explicit and automated proof has not supplied a human verdict. |
| 2 | In a later authorized controlled walk, provide an explicit verdict for one shown flow; inspect issue and skip handling. | Only that flow receives the verdict; issues rewind the same increment and preserve unaffected passes; skip remains distinct and the continuation ambiguity is disclosed. |
| 3 | Check normal-close readiness with an automated gap still open. | A human pass cannot clear that gap or authorize normal closure. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

**Verdict:** pending

**Notes:** No human verdict received; absorption records the prepared script only.
