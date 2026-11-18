---
feature: project-memory
increment: 003-customize-team-and-session-behavior
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — project-memory · increment 003

## V1 — Inspect saved team preferences · BR-12 · Retain named-team preferences without claiming unsupported dispatch · TS-015 · verdict: pending

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable; terminal CLI. |
| Start | `./scripts/hele config get agents` |
| Land | Run from this repository root. |

| Data | Value |
|---|---|
| Login | None for the local CLI. |
| Seed | Compare the existing `.hele/settings.json` agents values; no edits. |
| Input | Commands below, from inspected `scripts/hele` and command registration. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Run `./scripts/hele config get agents`. | Saved concurrency and named-role preferences match the settings document. |
| 2 | Review the missing-runtime caveat in the feature description. | Configuration storage is not presented as proof of supported Codex dispatch. |

**Verdict:** pending

**Notes:** No human verdict collected. This prepared read-only replay does not cover all acceptance assertions.

Required evidence remains incomplete in QA_REPORT. Human verification cannot override those gaps.
