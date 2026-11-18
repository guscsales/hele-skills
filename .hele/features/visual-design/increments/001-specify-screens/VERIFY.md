---
feature: visual-design
increment: 001-specify-screens
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — visual-design · increment 001

Prepared from QA_REPORT run 1. No human walk was launched and no verdict was inferred. Automated gaps remain red independently of any later human verdict.

## V1 — Inspect design guidance and prepare a consumer design review · BR-1 · Design eligibility · TS-001, TS-002, TS-003, TS-004, TS-005, TS-006, TS-007, TS-008, TS-009, TS-010 · verdict: pending

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | None: terminal and Claude Code; this repository ships no application route. |
| Start | From this repository: `node cli/src/index.js ai design` (command form inspected in `cli/src/ai.js` and `cli/src/index.js`; this specific human replay was not launched). Claude plugin installation syntax is documented in README; installed runtime is not verified. |
| Land | Read the printed skill guidance, then prepare a separate controlled consumer fixture before invoking a live workflow. |

| Data | Value |
|---|---|
| Login | No login for CLI help. Claude account/plugin availability is not verified; no credentials supplied. |
| Seed | Approved `visual-design/PRODUCT_DESCRIPTION.md` v1.0 and these acceptance scenarios are available for reading. Live consumer/evaluation fixtures are not supplied. |
| Input | An approved consumer PRD, explicit tool/device answers and design-system sources or confirmed absence. Local design is disabled; do not change this repository setting for absorption. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Read the design help and the approved eligibility rules. | Disabled local design skips local specification; the harness still supports consumer design. |
| 2 | After a suitable consumer setup exists, review a draft with explicit tool/device answers, then request an adjustment before approval. | Draft remains unapproved; complete screen/state decisions and references are retained. Only explicit approval advances. |

**Setup blocker:** Live Claude evaluation and any required consumer fixtures are not supplied or verified. These instructions are prepared from inspected command/skill contracts, not an executed replay. Absorption stops at recording evidence; do not initiate the walk here.

**Verdict:** pending

**Notes:** No human verdict received; absorption records the prepared script only.
