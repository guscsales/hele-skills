---
feature: project-memory
increment: 002-find-memory-and-workflow-guidance
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — project-memory · increment 002

## V1 — Discover workflow help · BR-10 · Provide workflow help without initialized memory · TS-013 · verdict: pending

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable; terminal CLI. |
| Start | `./scripts/hele ai` |
| Land | Run from this repository root. |

| Data | Value |
|---|---|
| Login | None for the local CLI. |
| Seed | No login or application server; use the bundled CLI. |
| Input | Commands below, from inspected `scripts/hele` and command registration. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Run `./scripts/hele ai`. | The overview shows the canonical documented flow. |
| 2 | Run `./scripts/hele ai fix-e2e`, then `./scripts/hele ai /hele-fix-e2e`. | Both explain the same audit workflow; neither runs an audit. |

**Verdict:** pending

**Notes:** No human verdict collected. This prepared read-only replay does not cover all acceptance assertions.

Required evidence remains incomplete in QA_REPORT. Human verification cannot override those gaps.
