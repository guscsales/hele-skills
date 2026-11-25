<!-- RULES:
- Written by /hele-qa from the latest QA_REPORT.md. Verdicts recorded
  during /hele-verify-work. Frozen when the increment closes.
- Each flow is the SAME Open, Data, and Steps tables the QA report used.
  Preserve the executed/prepared label. Group related stubs into short changed-experience flows; backend-only work may have none.
- verdict per flow: pending | verified | issue | skipped. An issue keeps the
  human's words verbatim.
- An adjust (a direct correction or a larger rewind to the PRD) keeps every
  verdict that is still verified, unless that fix touched the flow. Those sections are not replaced and are not
  shown again. After a larger rewind every other flow is refreshed from the new QA report as pending;
  after a direct correction only the touched flow returns to pending, with its expected result rewritten.
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

Use the human-flow sections of QA_REPORT, not every automated test. If no human flow applies, explain why and omit the flow template.

## V1 — <flow title> · BR-n · <rule title> · TS-nnn · verdict: pending

**Walk evidence:** executed | prepared, not executed

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

**Screenshot (optional):** `./screenshots/<journey>.png`

**Verdict:** pending

**Notes:** <human's words on an issue, verbatim>
