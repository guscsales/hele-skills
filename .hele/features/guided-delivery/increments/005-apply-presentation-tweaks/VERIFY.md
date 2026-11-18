---
feature: guided-delivery
increment: 005-apply-presentation-tweaks
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — guided-delivery · increment 005

These grouped CLI/chat flows are copied from QA_REPORT run 1. None was executed and no human verdict was collected. Absorption prepares this artifact without starting the walk. A future human pass cannot clear unresolved automated coverage gaps.

Setup inspected in README.md (Install / Working from local clone), .claude-plugin/plugin.json, cli/package.json and the shipped skills. Claude Code authentication, plugin activation and disposable application fixtures were not exercised; those prerequisites must be confirmed before any future walk. No website, application server, screenshots or credentials are needed for the CLI/chat entry itself. A genuine application fixture is still needed for product implementation checks. The following is a prepared replay, not a claim that those fixtures or branches ran.

## V1 — Apply a scoped presentation edit and escalate behavior · TS-033–TS-038 · verdict: pending

**Rules:** BR-19 · Qualify presentation-only edits narrowly; BR-20 · Keep affected presentation copies consistent; BR-21 · Verify and close presentation work proportionally

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele` with the request below. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | Disposable application with a visible label, two translations, a related assertion and a quoted product/scenario label. Separate input changes a rule-bearing threshold. No fixture was created. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Enter `/hele Rename the Save label to Save item without changing behavior`. | One engineer chooses Tweak, searches related copies and synchronizes the requested presentation, including quotes and version/changelog updates when applicable. |
| 2 | Inspect its completion report and select no PR for this future fixture walk. | Scoped applicable checks and absent related tests are reported; untouched locales are disclosed and publication follows the selected choice. No new increment, task graph, QA report or human walk is created by Tweak. |
| 3 | In a separate fixture, ask to change a rule-bearing threshold or introduce excluded scope during the edit. | The work routes or escalates to Fast automatically, stops further Tweak edits and retains partial work; no engineering-lane selection is offloaded to the human. |

**Verdict:** pending

**Notes:** Not executed; no human issue or acceptance was recorded.
