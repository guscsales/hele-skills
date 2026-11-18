---
feature: product-absorption
increment: 001-snapshot-existing-product
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — product-absorption · increment 001

These grouped CLI/chat flows are copied from QA_REPORT run 1. None was executed and no human verdict was collected. Absorption prepares this artifact without starting the walk. A future human pass cannot clear unresolved automated coverage gaps.

Setup inspected in README.md (Install / Working from local clone), .claude-plugin/plugin.json, cli/package.json and the shipped skills. Claude Code authentication, plugin activation and disposable application fixtures were not exercised; those prerequisites must be confirmed before any future walk. No website, application server, screenshots or credentials are needed for the CLI/chat entry itself. A genuine application fixture is still needed for product implementation checks. The following is a prepared replay, not a claim that those fixtures or branches ran.

## V1 — Review, correct and approve a product snapshot · TS-001–TS-020 · verdict: pending

**Rules:** BR-1 · Initialize prerequisites before reading the product; BR-2 · Survey the whole product through named specialists; BR-3 · Partition user capabilities into meaningful historical slices; BR-4 · Preserve already documented capabilities by default; BR-5 · Present the complete snapshot before feature artifacts exist; BR-6 · Approval accepts the cut and its recommendations; BR-7 · Write current-state product memory and register it once; BR-8 · Historical plans are frozen records, never build queues; BR-9 · Create shared maps only when applicable and missing; BR-10 · Resume durable task state instead of starting another survey; BR-11 · Apply feedback at the affected level

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele-absorb`. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | Disposable clone of this repository at the recorded revision, initially without project memory or task storage; a separate pre-documented copy is needed for preservation/refresh and resume branches. Retain a saved snapshot for the resume check. Fixtures were not created. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | In the disposable clone enter `/hele-absorb`; answer the one-time design question if memory is absent and ensure actual task database operations succeed. | Initialization precedes product reading; a binary check alone is not presented as proof of usable task storage. Existing design answers are reused. |
| 2 | Observe read-only background survey and the complete saved snapshot. | User capabilities and chronological slices have evidence and exclusive ownership; read tasks close before presentation and feature artifacts/shared maps do not appear before approval. |
| 3 | Correct one named capability before approval. | Only affected evidence/partitions are revisited, with a complete revised snapshot and no premature feature writes. |
| 4 | Approve that full snapshot including recommendations, then inspect written memory. | Current descriptions, independent scenarios and historical records appear; already documented features are preserved unless refresh was requested, absorbed plans remain frozen and maps are created only when applicable and missing. |
| 5 | In separate saved fixture copies, resume open work and a saved unwritten snapshot after conversation reset; submit a wrong rule, wrong feature cut and new idea in their appropriate completed contexts. | Resume reuses durable work; rule feedback refreshes affected living artifacts without frozen-plan edits, cut changes require a new full snapshot and new product ideas enter ordinary delivery. Unexercised branches remain pending. |

**Verdict:** pending

**Notes:** Not executed; no human issue or acceptance was recorded.
