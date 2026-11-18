---
feature: project-memory
increment: 005-configure-report-language-and-evidence-limits
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — project-memory · increment 005

## V1 — Inspect independent language and evidence preferences · BR-16, BR-17 · Separate conversation and artifact language preferences; Store an evidence-image ceiling rather than a quota · TS-020, TS-021 · verdict: pending

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable; terminal CLI. |
| Start | `./scripts/hele config get language` |
| Land | Run from this repository root. |

| Data | Value |
|---|---|
| Login | None for the local CLI. |
| Seed | Use existing saved language and QA values; no edits or screenshot capture. |
| Input | Commands below, from inspected `scripts/hele` and command registration. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Run `./scripts/hele config get language`. | Saved chat and artifact preferences are separately visible. |
| 2 | Run `./scripts/hele config get qa`. | The saved screenshot maximum is visible; no quota or successful capture is implied. |

**Verdict:** pending

**Notes:** No human verdict collected. This prepared read-only replay does not cover all acceptance assertions.

Required evidence remains incomplete in QA_REPORT. Human verification cannot override those gaps.
