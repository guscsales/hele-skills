---
feature: guided-delivery
increment: 001-deliver-approved-features
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — guided-delivery · increment 001

These grouped CLI/chat flows are copied from QA_REPORT run 1. None was executed and no human verdict was collected. Absorption prepares this artifact without starting the walk. A future human pass cannot clear unresolved automated coverage gaps.

Setup inspected in README.md (Install / Working from local clone), .claude-plugin/plugin.json, cli/package.json and the shipped skills. Claude Code authentication, plugin activation and disposable application fixtures were not exercised; those prerequisites must be confirmed before any future walk. No website, application server, screenshots or credentials are needed for the CLI/chat entry itself. A genuine application fixture is still needed for product implementation checks. The following is a prepared replay, not a claim that those fixtures or branches ran.

## V1 — Approve and deliver a small capability · TS-001–TS-015 · verdict: pending

**Rules:** BR-1 · One living product contract per capability; BR-2 · Approve product behavior together with acceptance scenarios; BR-3 · Design participation is conditional; BR-4 · Planning does not add another approval stop; BR-5 · Database changes require their own decision; BR-6 · Assign specialists by responsibility; BR-7 · Dispatch only ready, non-overlapping work; BR-8 · Engineering supplies current and proportional proof; BR-9 · Completed engineering proceeds to independent validation; BR-10 · Repair approved QA findings in the active increment

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele` with the request below. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | A disposable existing application repository with a working compile command and a small existing behavior test; no production data. Use a new capability such as an optional local note on a saved item. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | In the disposable project, enter `/hele Add an optional local note to a saved item` and respond to useful questions. | A living contract and independent scenarios appear at one approval stop; implementation has not begun. |
| 2 | Request a wording correction before approving, then approve the corrected contract. Choose no design only if the fixture permits backend-first delivery. | Revised behavior is shown for approval; applicable design gates remain explicit and there is no separate plan sign-off. |
| 3 | If the fixture requires a schema change, leave its proposal unapproved, observe held work, then explicitly approve in the fixture. | Database risks and rollback are visible; required work waits for that decision. |
| 4 | Observe task dispatch, engineering evidence and the transition to independent QA. | Only ready non-overlapping work runs within the limit, independent work continues during review, and current checks precede a QA report. A built record is not reported as human acceptance. |
| 5 | At QA, approve a specific fixture finding only if one exists; otherwise record that repair branch as unexercised. | Repairs stay in the active increment, meaning changes return to definition and unresolved proof remains visible. |

**Verdict:** pending

**Notes:** Not executed; no human issue or acceptance was recorded.
