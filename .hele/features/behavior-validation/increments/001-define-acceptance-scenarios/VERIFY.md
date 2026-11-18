---
feature: behavior-validation
increment: 001-define-acceptance-scenarios
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — behavior-validation · increment 001

Prepared from QA_REPORT run 1. No human walk was launched and no verdict was inferred. Automated gaps remain red independently of any later human verdict.

## V1 — Review independent scenario authoring · BR-1 · Derive acceptance independently · TS-001, TS-002, TS-003, TS-004, TS-005 · verdict: pending

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | None: terminal and Claude Code; this repository ships no application route. |
| Start | From this repository: `node cli/src/index.js ai stubs` (command form inspected in `cli/src/ai.js` and `cli/src/index.js`; this specific human replay was not launched). Claude plugin installation syntax is documented in README; installed runtime is not verified. |
| Land | Read the printed skill guidance, then prepare a separate controlled consumer fixture before invoking a live workflow. |

| Data | Value |
|---|---|
| Login | No login for CLI help. Claude account/plugin availability is not verified; no credentials supplied. |
| Seed | Approved `behavior-validation/PRODUCT_DESCRIPTION.md` v1.0 and these acceptance scenarios are available for reading. Live consumer/evaluation fixtures are not supplied. |
| Input | A controlled approved PRD with a changed and an explicitly retired behavior, and its prior stable scenarios. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Review scenarios against PRD rules without using the implementation plan as expectations. | Every testable rule/flow has behavior-language coverage with stable IDs and origin increments. |
| 2 | Review changed/retired fixture behaviors and separate coverage recommendations at the shared approval stop. | IDs are preserved; retirement needs approval; proof choices are separate and no early human walk is created. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

**Verdict:** pending

**Notes:** No human verdict received; absorption records the prepared script only.
