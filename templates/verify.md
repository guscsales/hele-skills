<!-- RULES:
- Written by /hele-qa from the latest QA_REPORT.md. Verdicts recorded
  during /hele-verify-work. Frozen when the increment closes.
- Each flow is the SAME Open, Data, and Steps tables the QA report used.
  The human replays that proof. Do not invent a shorter script.
- verdict per flow: pending | verified | issue | skipped. An issue keeps the
  human's words verbatim.
- A rewind to the PRD keeps every verdict that is still verified, unless
  that fix touched the flow. Those sections are not replaced and are not
  shown again. Every other flow is refreshed from the new QA report as pending.
- Written in English.
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

Same URL, same data, same steps as the QA run. One section per flow.

## V1 — <goal> · BR-n · TS-nnn · verdict: pending

| Open | |
|---|---|
| URL | <from QA_REPORT> |
| Start | <command> |
| Land | <clicks> |

| Data | Value |
|---|---|
| Login | <from QA_REPORT> |
| Seed | <from QA_REPORT> |
| Input | <from QA_REPORT> |

| Step | Do this | You should see |
|---|---|---|
| 1 | <from QA_REPORT> | <expected> |

**Screenshot:** `./screenshots/TS-nnn.png`

**Verdict:** pending

**Notes:** <human's words on an issue, verbatim>
