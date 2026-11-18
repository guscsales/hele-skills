---
feature: guided-delivery
increment: 004-decide-informed-specifications
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 1
status: pending
updated: 2026-11-18
---

# Guided Verification — guided-delivery · increment 004

These grouped CLI/chat flows are copied from QA_REPORT run 1. None was executed and no human verdict was collected. Absorption prepares this artifact without starting the walk. A future human pass cannot clear unresolved automated coverage gaps.

Setup inspected in README.md (Install / Working from local clone), .claude-plugin/plugin.json, cli/package.json and the shipped skills. Claude Code authentication, plugin activation and disposable application fixtures were not exercised; those prerequisites must be confirmed before any future walk. No website, application server, screenshots or credentials are needed for the CLI/chat entry itself. A genuine application fixture is still needed for product implementation checks. The following is a prepared replay, not a claim that those fixtures or branches ran.

## V1 — Resolve duplicate capabilities and useful questions · TS-029–TS-032 · verdict: pending

**Rules:** BR-17 · Search existing memory before creating a feature; BR-18 · Resolve useful questions before writing the contract

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal/chat |
| Start | In a disposable project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`; launch Claude Code there. Commands are documented in README; not executed in this assessment. |
| Land | Enter `/hele` with the request below. |

| Data | Value |
|---|---|
| Login | Existing authenticated Claude Code session; availability not verified and no secret recorded. |
| Seed | Disposable initialized project with a documented saved-items capability and English/Portuguese aliases; a content-only match in a separate fixture and one genuinely new capability. Use an ambiguous request such as sharing saved items. |
| Input | Use the requests and branches below; do not run this replay against the absorbed historical records in the current working tree. |

| Step | Do this | You should see |
|---|---|---|
| 1 | Enter `/hele Add sharing for saved items` with enough ambiguity to require a product decision. | Existing memory and unknown facts are investigated; matching capability versus new work is included in one useful question pack with recommendations. |
| 2 | Leave one decision unanswered and inspect the project for premature feature artifacts. | No new feature contract, scenarios or catalog entry is written while useful questions remain open. |
| 3 | Answer the pack or accept all recommendations, then inspect the approval report. | New/rewritten rules, old/new wording, relevant unchanged rules, complete scenarios and proof recommendations are visible; content-only matches lead to alias repair. |
| 4 | Repeat with a fully specified request in a separate fixture. | No unnecessary question gate is invented; later packs require genuinely new facts. |

**Verdict:** pending

**Notes:** Not executed; no human issue or acceptance was recorded.
