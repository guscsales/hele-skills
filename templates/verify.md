<!-- RULES:
- Written/refreshed by /hele-qa from the latest QA_REPORT.md. Verdicts recorded
  during /hele-verify-work. Frozen when the increment closes.
- Flows are the SAME steps and data the QA run used — the human replays the
  proof, not a reinvented script.
- verdict per flow: pending | verified | issue | skipped. An issue keeps the
  human's words verbatim and points at its beads task or PRD note.
- Written in English, like every artifact. Prefer plain markdown over XML for
  human readability; keep flow markers only if agents need them.
-->
---
feature: <slug>
increment: NNN-<slug>
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run <N>
status: pending | done
updated: <YYYY-MM-DD>
---

# Guided Verification — <feature> · increment NNN

Replays the QA run. Same data, same steps, screenshot of what "pass" looked like.

## Setup

| Item | Value |
|---|---|
| App | <how it was started / URL — from QA_REPORT> |
| Login(s) | <from QA_REPORT> |
| Data | <from QA_REPORT> |
| QA report | <absolute path to QA_REPORT.md> |

## V1 — <goal from QA stub/flow> · covers BR-n, TS-nnn · verdict: pending

**QA screenshot (what pass looked like):** `<absolute or ./screenshots/TS-nnn.png>`

| # | Step | Expect |
|---|---|---|
| 1 | <from QA_REPORT steps> | <expected> |
| 2 | <…> | <…> |

**Verdict:** pending
**Notes:** <human's words on issue, verbatim> → beads <id> | PRD note

*(One section per flow / stub group distilled from QA_REPORT — 3–8 journeys.)*
