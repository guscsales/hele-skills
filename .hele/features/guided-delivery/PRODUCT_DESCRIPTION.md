---
feature: guided-delivery
doc: PRODUCT_DESCRIPTION
version: "1.2"
status: approved
updated: 2026-11-25
---

# Guided Product Delivery

## What

Hele turns a person's product request into a living specification and a coordinated delivery by named specialists. The conversation keeps the current work in scope across questions, implementation, review, automated evidence and human feedback. Small additions, bugs, exploratory work and presentation-only changes take different paths through that process. A small code change is delivered directly by one engineer with targeted proof; larger or riskier work takes the full path through planning, review and independent validation.

This product is implemented as agent instructions and document templates. The rules below describe the shipped workflow contract; their presence in source does not prove that a model has executed them correctly. Known contradictory instructions remain explicit rather than becoming invented guarantees.

## Why

The documented purpose is to preserve product decisions between sessions while separating product ownership, engineering and independent validation. The open-channel contract keeps the person's conversation available while specialists work. Targeted verification and concurrent independent reviews avoid redundant machine work and unnecessary serialization. Database proposals expose migration risk before execution. These motives are stated in the Lisbon persona, open-channel template and build skill; other unstated motives are not recorded.

The cost of a delivery follows the size and risk of the change. In measured sessions a three-file correction was ready in under eight minutes and then spent nine more in validation, most of it on failures the correction had not caused and on test-environment setup; a one-line copy removal took seven and a half minutes, nearly all of it writing specification and plan text around a four-second test. The direct path exists so that a small change pays for its own proof and nothing else.

## Flows

### Define and deliver a feature

An idea becomes a reviewed product contract before engineering begins. Design and database decisions introduce their own applicable gates; the execution plan itself is not another approval stop.

```mermaid
flowchart TD
    A[Product request] --> B{Existing capability? BR-17}
    B -- no --> C[Resolve remaining product questions BR-18]
    B -- yes --> D[Continue existing capability BR-12]
    C --> E[Living PRD and acceptance scenarios BR-1]
    D --> E
    E --> F{Human approves contract? BR-2}
    F -- revise --> C
    F -- approve --> G{Design applies? BR-3}
    G -- yes --> H[Approve design]
    G -- no --> I[Plan from actual project BR-4]
    H --> I
    I --> J{Schema changes approved? BR-5}
    J -- pending --> K[Hold engineering]
    J -- approved or not applicable --> L[Dispatch ready specialists BR-7]
    L --> M[Review and current engineering evidence BR-8]
    M --> N[Independent QA BR-9]
```

| Branch | Rule |
|---|---|
| Resolve existing versus new work | BR-17, BR-12 |
| Answer questions before authoring | BR-18 |
| Approve or revise the product contract | BR-1, BR-2 |
| Include or skip design | BR-3 |
| Plan without an additional sign-off | BR-4 |
| Hold work for draft database changes | BR-5 |
| Dispatch and verify before QA | BR-7, BR-8, BR-9 |

### Continue or correct active work

A small code change is delivered directly. A larger correction to the active increment stays in that increment and preserves unaffected human verdicts. Larger additions use the next increment; exploration stays outside implementation until formalized.

```mermaid
flowchart TD
    A[Follow-up request] --> B{Kind of follow-up BR-11}
    B -- new addition or bug --> S{Fits the direct path? BR-22}
    B -- current increment correction --> S
    B -- exploration --> E[Research without product implementation BR-14]
    S -- yes --> T[Direct delivery BR-22]
    S -- no and it is an addition or bug --> C[Next increment in existing feature BR-12]
    S -- no and it is a correction --> D{Rule text changes? BR-13}
    D -- yes --> F[Patch contract and obtain approval]
    D -- no --> G[Keep existing rule and proceed]
    F --> H[Adjust same plan and affected checks BR-13]
    G --> H
    E -- formalize --> I[Feature definition]
```

| Branch | Rule |
|---|---|
| Classify and retain session context | BR-11 |
| Deliver a small code change directly | BR-22 |
| Add a new increment to existing work on the full path | BR-12 |
| Revise the active increment with or without changed rules | BR-13 |
| Keep exploration separate until requested | BR-14 |

### Deliver a small code change directly

One engineer investigates, proves and fixes a small code change. The engineer, not the conductor, decides whether the change fits; a rule the human's own words already decide does not wait for approval; and a failing check never starts triage on its own.

```mermaid
flowchart TD
    A[Bugfix, Fast addition or correction] --> B{Ask names an excluded surface? BR-22}
    B -- yes --> C[Full path]
    B -- no --> D[One engineer investigates BR-22]
    D --> E{Fits the direct path? BR-22}
    E -- no --> F[Stop and hand the investigation to planning BR-22]
    F --> C
    E -- yes --> G{Rule text BR-2}
    G -- product doubt remains --> H[Question pack BR-18]
    G -- unchanged or already decided by the human --> I[Targeted proof then fix BR-23]
    I --> J{Checks BR-24}
    J -- failing check the change does not reach --> K[Record as pre-existing BR-24]
    J -- reached failing check left unexplained --> L{Human chooses BR-24}
    J -- proof needs a real journey --> M[Independent validation with closed scope BR-23]
    J -- targeted proof passes --> N[Close with evidence and rule delta BR-25]
    K --> N
    L -- record and continue --> N
    L -- compare against the previous revision --> M
    M --> N
```

| Branch | Rule |
|---|---|
| Send work that names an excluded surface straight to the full path | BR-22 |
| The investigating engineer confirms the fit or escalates with findings | BR-22 |
| Resolve a real product doubt before writing | BR-18 |
| Proceed without an approval stop when the rule is unchanged or already decided | BR-2 |
| Prove with the smallest failing test; independent validation only for a real journey or a comparison the human chose | BR-23 |
| Record unreached failures and let the human choose on an unexplained one | BR-24 |
| Close with evidence, a light trace and the rule delta | BR-25 |

### Apply a small edit or repair compilation

Presentation-only edits receive proportional checks. Compilation repair has a bounded outcome and returns to the existing product conversation.

```mermaid
flowchart TD
    A[Small edit request] --> B{Presentation only? BR-19}
    B -- yes --> C[Update every affected copy BR-20]
    C --> D[Scoped checks and completion choices BR-21]
    B -- no or uncertain --> E[Fast delivery]
    F[Build-until-pass request] --> G[Repair actual project compile BR-15]
    G --> H{Outcome BR-16}
    H -- passing --> I[Report and return to current work]
    H -- decision or external blocker --> J[Report blocker]
    H -- same error after three attempts --> J
    H -- other repairable failure --> G
```

| Branch | Rule |
|---|---|
| Qualify or escalate presentation work | BR-19 |
| Update copies and perform scoped checks | BR-20, BR-21 |
| Repair compilation without adding a feature | BR-15 |
| Stop or retry with a bounded outcome | BR-16 |

## Business rules

### BR-1 — One living product contract per capability

A new capability has a meaningful English slug, one current-state product description, stable numbered business rules, named flows and explicit scope. The first delivery has a numbered increment. The registry carries names, summaries, aliases and document versions, without a feature-progress status. Changed rules replace their previous wording with a patch version and changelog entry; a ground-up replacement is a new feature folder. Removed historical commands and phase-state files are not current product surfaces.

### BR-2 — Approve product behavior together with acceptance scenarios

On the full path the human reviews the product description and its independently derived acceptance scenarios at one approval stop, and an unapproved new or changed contract does not authorize implementation. Scenario expectations come from the product contract rather than an implementation plan. Coverage recommendations accompany the scenarios without a separate strategy approval. On the direct path (BR-22) there is no approval stop when the rule text is unchanged, or when the human's own words already decide the new rule, meaning Lisbon can write it without making a product choice the human did not state (BR-18): Lisbon patches the description, delivery proceeds, and the rule delta is shown at the close, where the human can correct it. A product doubt the human's words do not settle still stops for the question pack (BR-18) on either path.

### BR-3 — Design participation is conditional

New screens or layout changes use the design workflow when the project enables it. Explicit no-design or backend-first work can skip design, with the reason recorded in the execution plan. Applicable design is approved before engineering; existing designs must match the approved contract. The detailed design contract belongs to `visual-design`.

### BR-4 — Planning does not add another approval stop

After applicable product/design approval, planning studies the actual project and records relevant files, existing patterns, approved document versions, task owners, dependencies and verification expectations. Missing or stale acceptance scenarios are reconciled before build. Each actionable delivery task on the full path has a Beads issue. The plan becomes ready and engineering starts without asking the human to approve the plan itself, subject to the database gate in BR-5. The direct path (BR-22) has no execution plan and no Beads issues; when an engineer escalates from it, his investigation is an input to this planning.

### BR-5 — Database changes require their own decision

Schema, index, backfill and production-seed changes require Hightower's proposal and explicit approval. The numbered changes, risks and rollback appear in the plan. A draft proposal blocks initial build and unapproved migration tasks remain held. New queries against unchanged structures do not require this gate. Applied migrations receive conformance review and update the project database map.

### BR-6 — Assign specialists by responsibility

Lisbon owns the product and coordination; engineers implement. Security-relevant work includes Jane, database work includes Hightower and CI execution-policy implementation belongs to Rigsby. Named agents use the configured role/model selection and project concurrency limit. Claude Code is the shipped distribution. The strict instruction against using the session model conflicts with documented missing-key/`inherit` fallback; this Codex absorption is an adaptation, not evidence of native Codex support or resolution of that contradiction.

### BR-7 — Dispatch only ready, non-overlapping work

Workers run in the background. A dependent task waits for its dependencies to close, and tasks with overlapping declared files do not run together. In-flight workers stay within the configured limit. Independent tasks continue while Lisbon reviews completed work; review is not a global serialization barrier. Unexpected touched files are reported rather than silently broadening ownership.

### BR-8 — Engineering supplies current and proportional proof

Behavior tasks start from targeted failing proof at the smallest sufficient test level. Task contracts constrain expensive verification. Completion reports identify covered rules/scenarios, commands, outcomes, relevant code identity and environment. Final checks cover affected tests and applicable type/lint checks, broadening for shared configuration, lockfiles, setup/helpers, schema changes or uncertainty about impact. A failing check the change does not reach does not block these checks; it is handled under BR-24. A file that contains a test, an old result or an unexecuted expectation is not a passing result.

### BR-9 — Completed engineering proceeds to independent validation

On the full path engineering closes completed task records and its epic and marks the execution plan built only when the required current engineering evidence passes. It then starts independent QA without another plan/build approval. QA may still find product failures or missing proof; a built plan is not equivalent to final QA or human acceptance. On the direct path independent validation is not a phase: it joins only in the two cases of BR-23, with a closed scope. Detailed evidence and acceptance behavior belongs to `behavior-validation`.

### BR-10 — Repair approved QA findings in the active increment

The QA-fix mode processes approved actionable findings in the same increment. Fixes that alter product meaning return to product definition rather than silently changing expectations. Valid confirmations can be reused; code changes invalidate affected confirmations. The final report is refreshed after repairs and preserves unresolved gaps.

### BR-11 — Keep the conversation in its current work context

A single `/hele` request remains in force across follow-ups. New capabilities use Feature, additions use Fast, broken existing behavior uses Bugfix, investigation uses Open and qualified presentation changes use Tweak. The direct path (BR-22) is not a lane: Fast, Bugfix and corrections of the active increment keep their names, and the lane announcement shows the path being taken, for example `Bugfix · direct`. An escalation to the full path is announced with its reason. Missing memory routes through initialization; a standalone existing-suite audit can route directly without initialization. After a context reset, registry lookup and the named or newest increment plus its plan/Beads records restore context without a separate phase-state file. Reports use the chat language, explicit choices and clickable document links. Worker exploration, implementation and tests stay outside the main conversation; external notifications or publishing require the relevant authorization, including the selected PR closure.

### BR-12 — New changes to an existing capability get the next increment

Fast and new Bugfix work retain the existing feature. Work that fits the direct path (BR-22) opens no increment; work on the full path uses the feature's next increment. Changed rules patch the living product description and scenarios; a bug that violates unchanged rules retains their text and is reported as already covered by the contract. A bug that violates an unchanged rule never stops for product or scenario approval, on either path.

### BR-13 — Correct the active increment in place

A correction to work already in play keeps the same feature and increment. Only affected human-verified flows return to pending. A correction that fits the direct path (BR-22) is delivered there: the plan and the QA report of the increment are not rebuilt, the flow it touched returns to pending with the expected result of the corrected rule, and the human walks that flow again. A larger correction keeps the plan context: changed product text receives a patch version, changelog and ordinary approval, an unchanged-rule correction proceeds immediately under the existing contract, and the adjustment workflow patches the same plan rather than discarding it. This is the documented adjustment exception to the general template instruction not to edit built plans; the source inconsistency remains recorded. It never authorizes rewriting a frozen plan whose origin is `absorb`.

### BR-14 — Exploration stays unformalized until requested

Open work can investigate, review or explore without creating a product description or increment and without implementing a product change. The human's choice to formalize moves the result into ordinary definition. A research result alone is not product approval.

### BR-15 — Build repair targets compilation only

A build-until-pass request temporarily routes to Summer with a build task. She discovers and runs the actual project compile/typecheck, fixing compile, type, import or build-script errors needed for that outcome. She does not invent features or perform unrelated refactors. A full test suite runs only when it is already part of that build command. The repair does not replace the current product lane.

### BR-16 — Bound and report compilation repair

Repair ends on success, a missing environment/secret, a required product decision, or the same error after three honest attempts. The report names the command, attempts, files touched, final exit and remaining blockers. An unresolved repeated failure is reported instead of retrying forever, and coordination returns to the active product context.

### BR-17 — Search existing memory before creating a feature

Definition uses two or three search probes in English and the human's language. A matching capability becomes an explicit update-versus-new decision in the question pack. A content-only match triggers registry alias repair. Search is an anti-duplicate aid, not a database-enforced uniqueness guarantee. Lookup behavior itself belongs to `project-memory`.

### BR-18 — Resolve useful questions before writing the contract

Read matching product descriptions and investigate unknown code facts before asking the human. When no useful question remains, do not invent a gate. Otherwise present the remaining questions and foreseeable edge cases together with recommendations: accept all, answer individually or reply freely. Recommendations remain proposals until answered. No new feature folder, registry entry, product description or scenarios are written while those product questions remain unanswered. Newly discovered facts can justify a smaller later question pack. The approval report exposes every new, rewritten and retired rule with the behavior change an informed approval needs, unchanged existing rules where relevant, the scenario and proof-recommendation changes, and links to the complete product description and scenarios. How much appears inline (previous and new wording, the scenario table, the coverage table) follows the effective chat output owned by `project-memory`; an omitted detail stays in the linked documents and can be expanded on request, and product questions, required decisions and the approval options are always shown. Product descriptions contain no unresolved-question section or disguised implementation plan.

### BR-19 — Qualify presentation-only edits narrowly

Tweak is limited to small text/style work without logic, rules, branches, fields, new screens, schema, security, CI or environment changes. A price, threshold or window that expresses a business rule is behavior even if displayed as text. Scope beyond this boundary or uncertainty automatically routes to Fast rather than asking the human to choose an engineering lane.

### BR-20 — Keep affected presentation copies consistent

One engineer searches affected source, locales, assertions, stories and documentation, changes only the requested presentation, adjusts existing assertions and synchronizes quoted product/scenario text with patch versions and changelogs. Untouched locales are disclosed. The lane does not create a new feature plan, increment, Beads graph, QA report or human walk. It does not require new tests, a full suite, browser sessions, screenshots or containers solely for the edit.

### BR-21 — Verify and close presentation work proportionally

Run applicable scoped type/lint checks and directly related tests, explicitly reporting when no related tests exist. If a rule or other disallowed scope emerges, stop further Tweak edits and escalate; retain partial work for that flow rather than silently reverting it. Report the result and offer ready PR, draft PR, no PR or further edits. The selection determines the publication action.

### BR-22 — Small code changes take the direct path

A code change in the Bugfix lane, in the Fast lane or correcting the active increment is delivered directly by one engineer, the one who owns the area of the change (BR-6), unless it touches an excluded surface: schema or production data, a security surface (authentication, permissions, payments, personal data), shared configuration, CI, environment, a new screen, or a contract between modules. A new capability stays in the Feature lane and takes the full path (BR-11). There is no file-count limit and no other size test: the lane and the excluded surfaces decide. The conductor sends the work to the full path only when the ask itself names an excluded surface; otherwise the engineer who investigates decides. When the change turns out to touch an excluded surface, he stops, keeps any partial work and reports what he found; that investigation becomes an input to planning on the full path.

### BR-23 — The direct path proves the change with targeted evidence

The engineer first reproduces the problem or the new behavior with the smallest test able to fail for it, sees it fail, makes the change and sees it pass. He then runs the tests that reach the changed files and the applicable type and lint checks; the whole suite is not run. There is no separate code review. His report names the proof, its failing and passing results, the related checks that ran, and what was deliberately not run and why. Independent validation joins only in two cases: the proof needs a real journey across parts that no smaller test can fail for, or the human chose to compare an unexplained failing check against the previous revision (BR-24). Wylie then works with a closed scope, that journey or that one check, never the whole suite.

### BR-24 — A failure the change did not cause does not become triage

A failing check the change does not reach is recorded as pre-existing in the report, with its name and an excerpt of the error, and does not block the delivery. A failing check the change does reach and the engineer cannot explain stops the delivery before anyone else is called: the human is shown two choices with an estimated time for each, or `unknown` when there is no basis for an estimate. Continue, and the failure is recorded as pre-existing. Or compare against the previous revision, and Wylie runs that comparison for that one check (BR-23). Attributing a failure by comparing against a previous revision, which means a separate working copy, a dependency install or a second environment, is an expensive step: it happens only when the human has said so for this delivery. The conductor never orders it on its own, on either path. How a pre-existing failure is represented inside a full QA report belongs to `behavior-validation`.

### BR-25 — The direct path leaves a light trace and closes with evidence

The direct path creates no increment, no execution plan and no Beads issues. What remains is the regression proof in the project and, when the rule changed, the patched product description and its acceptance scenarios, each with a patch version and changelog line. When the rule changed, Wylie derives the scenario delta from the patched description while the engineer works; it does not gate the fix, and the close waits for it. When no rule changed, nobody is called for scenarios. The close shows what changed, the evidence from BR-23, any pre-existing failures from BR-24 and the rule delta when a rule changed. A new bug or addition then offers ready PR, draft PR, no PR or further edits; a correction of the active increment returns to the human walk of the flow it touched (BR-13).

## Scope

### In scope

- Living product definition, informed questions, incremental changes and exploratory work.
- Conditional design/database gates, named-agent planning, parallel execution and engineering evidence.
- Same-increment feedback, approved QA fixes, bounded compile repair and small presentation changes.
- Direct delivery of small code changes with targeted proof and a light trace.
- Explicit preservation of observed instruction conflicts and unproven runtime behavior.

### Out of scope

| Left out | Why |
|---|---|
| Installation, configuration and lookup algorithms | Owned by `project-memory` |
| Design-tool execution and artboard fidelity rules | Owned by `visual-design` |
| Detailed scenario authoring, QA evidence selection and human verdicts | Owned by `behavior-validation` |
| Existing-product snapshots and suite-wide E2E audits | Separate capabilities `product-absorption` and `e2e-audit` |
| Native Codex/Cursor adapter or a deterministic workflow engine | Not shipped by this repository |
| Fixing contradictory instructions during absorption | This snapshot records existing behavior, not new product implementation |
| Pre-existing failure status inside a full QA report | Owned by `behavior-validation`; planned as its own run |
| Keeping installed harness versions current across projects | Owned by `project-memory`; planned as its own run |

## Glossary

| Term | Meaning |
|---|---|
| Feature | One named product capability with a living description |
| Increment | A numbered deliverable slice within a feature |
| Built plan | Engineering record whose execution completed; not proof of final QA acceptance |
| Absorbed plan | Frozen historical record with `origin: absorb`, never a new build task list |
| Direct path | Delivery of a small code change by one engineer with targeted proof, without a plan, a separate review or a validation phase |
| Full path | Delivery through planning, review and independent validation |
| Excluded surface | Schema or production data, security, shared configuration, CI, environment, a new screen or a contract between modules |
| Small code change | A Bugfix, a Fast addition or a correction of the active increment that touches no excluded surface |
| Contract between modules | An interface other parts of the product depend on: an API request or response shape, an event or a shared public type |
| Reach | A test or check reaches a changed file when it imports it, directly or through other files. The project's test runner makes the selection when it can; otherwise the engineer names the tests he selected and why |
| Pre-existing failure | A failing check recorded as not caused by the change: one the change does not reach, or a reached one the human chose to record |

## Changelog

- v1.0 (2026-11-18) — absorbed from the app. Slices: 001-deliver-approved-features (BR-1–BR-10); 002-continue-and-revise-work (BR-11–BR-14); 003-repair-project-build (BR-15, BR-16); 004-decide-informed-specifications (BR-17, BR-18); 005-apply-presentation-tweaks (BR-19–BR-21).
- v1.1 (2026-11-24) — direct path for small code changes. Slice: 006-deliver-small-changes-directly (new BR-22–BR-25; rewritten BR-2, BR-4, BR-8, BR-9, BR-11, BR-12, BR-13).
- v1.2 (2026-11-25) — approval report presentation follows the configurable chat output of project-memory (increment 007-configure-chat-output). Rewritten BR-18.
