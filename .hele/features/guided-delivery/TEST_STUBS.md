---
feature: guided-delivery
doc: TEST_STUBS
version: "1.2"
based_on: PRODUCT_DESCRIPTION v1.2
updated: 2026-11-25
---

# Test Stubs — guided-delivery

Derived from the approved v1.0 product description and its changelog slice map before inspecting tests. v1.1 adds TS-039–TS-064 for increment 006 (direct path, PRD v1.1) and rewrites TS-003, TS-005, TS-013, TS-014, TS-019, TS-020, TS-021 and TS-022 in place for the rewritten BR-2, BR-4, BR-8, BR-9, BR-12 and BR-13. No execution plan was read. Stable IDs describe behavior; technical proof belongs in Coverage.

v1.2 (2026-11-25, PRD v1.2, project-memory increment 007-configure-chat-output): rewrites TS-032 in place for the rewritten BR-18 and adds TS-065 and TS-066 for how much of the approval report appears inline under the effective chat output. The presentation levels themselves are specified in project-memory TEST_STUBS (TS-022–TS-059).

<stub id="TS-001" increment="001" rule="BR-1" kind="integration" status="pending">
**Title:** Create one current capability contract
**Given** a genuinely new capability is requested.
**When** its product definition is written.
**Then** it has one meaningful English name, stable business rules, named flows, explicit scope and a first numbered delivery; its catalog lists names and document versions without a progress status.
</stub>

<stub id="TS-002" increment="001" rule="BR-1" kind="integration" status="pending">
**Title:** Patch current rules without losing identity
**Given** a capability already has product rules.
**When** a rule changes or the capability is replaced from the ground up.
**Then** a rule edit replaces current wording with a patch version and change entry; a ground-up replacement gets its own capability.
</stub>

<stub id="TS-003" increment="001" rule="BR-2" kind="integration" status="passing">
**Title:** Review behavior and independent scenarios together on the full path
**Given** a new or changed product contract is ready on the full path.
**When** the human reviews or requests revisions.
**Then** the product rules, independently derived scenarios and coverage recommendations appear together at one approval stop; implementation waits for approval, without a separate coverage approval.
</stub>

<stub id="TS-004" increment="001" rule="BR-3" kind="integration" status="pending">
**Title:** Apply conditional design approval
**Given** a request changes a screen or layout.
**When** delivery decides whether design applies.
**Then** enabled design is reconciled to the approved product and approved before engineering; explicit no-design or backend-first work records why design is skipped.
</stub>

<stub id="TS-005" increment="001" rule="BR-4" kind="integration" status="passing">
**Title:** Move from approval directly into prepared delivery
**Given** applicable product and design approvals exist for work on the full path.
**When** delivery is prepared.
**Then** the actual project, document versions, owners, dependencies and proof expectations inform the work; stale scenarios are reconciled and each actionable task is tracked, without another plan approval.
</stub>

<stub id="TS-006" increment="001" rule="BR-5" kind="integration" status="pending">
**Title:** Hold unapproved database changes
**Given** delivery requires a structure, index, backfill or production-seed change.
**When** engineering is about to begin.
**Then** numbered changes, risks and rollback are proposed for explicit approval; a draft holds initial engineering and unapproved migration work stays held.
</stub>

<stub id="TS-007" increment="001" rule="BR-5" kind="integration" status="pending">
**Title:** Distinguish unchanged data structures and review applied changes
**Given** delivery reads existing data structures or applies an approved change.
**When** the work completes.
**Then** queries against unchanged structures need no database gate; applied changes receive conformance review and update the shared database description.
</stub>

<stub id="TS-008" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Assign work to responsible specialists
**Given** delivery contains engineering, security, database or CI-policy responsibilities.
**When** workers are assigned.
**Then** Lisbon coordinates while engineers implement; Jane handles security participation, Hightower database participation and Rigsby CI execution policy, within configured role selection and concurrency.
</stub>

<stub id="TS-009" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Expose runtime selection limitations
**Given** model inheritance or missing configuration conflicts with strict model instructions.
**When** delivery reports its runtime assumptions.
**Then** the contradiction stays explicit and the Codex adaptation is not presented as native shipped support.
</stub>

<stub id="TS-010" increment="001" rule="BR-7" kind="integration" status="pending">
**Title:** Run only ready non-overlapping work
**Given** some tasks depend on others or share declared files.
**When** background work is dispatched.
**Then** dependencies finish before dependent work starts, overlapping work does not run together and the configured worker limit is respected.
</stub>

<stub id="TS-011" increment="001" rule="BR-7" kind="integration" status="pending">
**Title:** Keep independent work moving during review
**Given** one worker completes while independent work remains.
**When** Lisbon reviews the completion.
**Then** independent ready work continues; unexpectedly touched files are reported rather than silently enlarging ownership.
</stub>

<stub id="TS-012" increment="001" rule="BR-8" kind="integration" status="pending">
**Title:** Require current targeted engineering proof
**Given** a behavior task is ready to implement.
**When** an engineer begins and completes it.
**Then** targeted failing proof precedes implementation and completion names covered behaviors, commands, results, relevant revision and environment; old or unexecuted expectations do not count as passing.
</stub>

<stub id="TS-013" increment="001" rule="BR-8" kind="integration" status="passing">
**Title:** Broaden verification when warranted without blocking on unreached failures
**Given** a change affects shared setup or its impact is uncertain, or a check fails that the change does not reach.
**When** final engineering checks are selected and run.
**Then** affected tests and applicable type/lint checks run, broader checks run for shared configuration, dependencies, helpers or schema, expensive verification stays constrained by the task contract, and a failing check the change does not reach is recorded as pre-existing instead of blocking those checks.
</stub>

<stub id="TS-014" increment="001" rule="BR-9" kind="integration" status="passing">
**Title:** Start independent QA after evidenced engineering on the full path
**Given** engineering on the full path reports completion.
**When** delivery transitions to validation.
**Then** only required current passing engineering evidence permits closing its work and marking the plan built; independent QA begins without another approval and built does not mean QA or human acceptance.
</stub>

<stub id="TS-015" increment="001" rule="BR-10" kind="integration" status="pending">
**Title:** Repair approved findings without changing their meaning silently
**Given** QA identifies actionable findings in the active increment.
**When** approved fixes are processed.
**Then** work stays in that increment; product-meaning changes return to definition, valid confirmations may be reused, changed code invalidates affected proof and the refreshed report retains unresolved gaps.
</stub>

<stub id="TS-016" increment="002" rule="BR-11" kind="integration" status="pending">
**Title:** Route follow-ups within the current conversation
**Given** a Hele request remains active.
**When** the human requests a capability, addition, bug repair, investigation or small presentation change.
**Then** the request retains context and takes Feature, Fast, Bugfix, Open or qualified Tweak respectively.
</stub>

<stub id="TS-017" increment="002" rule="BR-11" kind="integration" status="pending">
**Title:** Restore work after lost context
**Given** memory is absent or a conversation restarts.
**When** delivery resumes.
**Then** missing memory routes through initialization except a standalone existing-suite audit; existing work restores the named or newest increment from durable project and task records without separate phase-state storage.
</stub>

<stub id="TS-018" increment="002" rule="BR-11" kind="integration" status="pending">
**Title:** Keep communication available and publication authorized
**Given** workers are performing delivery.
**When** the human receives a report or requests publication.
**Then** worker work stays outside the main conversation; reports use the chat language, clear choices and clickable documents, and external notification or publishing follows the relevant authorization.
</stub>

<stub id="TS-019" increment="002" rule="BR-12" kind="integration" status="passing">
**Title:** Keep the feature and choose the increment by path
**Given** an existing capability needs a new addition or bug repair.
**When** the next delivery is defined.
**Then** it retains the feature; full-path work takes the next increment while direct-path work opens none; changed rules and scenarios are patched, while an unchanged violated rule keeps its text and the bug is reported as already covered by the contract.
</stub>

<stub id="TS-020" increment="002" rule="BR-12" kind="integration" status="passing">
**Title:** An unchanged-rule bug never stops for approval
**Given** a bug violates a rule whose text does not change.
**When** delivery proceeds on either the direct or the full path.
**Then** no product or scenario approval stop is shown; the rule text stays as it is and the bug is reported as already covered by the contract.
</stub>

<stub id="TS-021" increment="002" rule="BR-13" kind="integration" status="passing">
**Title:** Correct changed behavior in the active increment on the full path
**Given** feedback changes product meaning in active work and the correction does not fit the direct path.
**When** the correction is prepared.
**Then** the same feature, increment and plan context remain active, product wording receives a patch and changelog with ordinary approval, the same plan is adjusted rather than discarded, and only affected verified flows return to pending.
</stub>

<stub id="TS-022" increment="002" rule="BR-13" kind="integration" status="passing">
**Title:** Apply an unchanged-rule correction without restarting
**Given** feedback corrects active work without changing its approved rule and the correction does not fit the direct path.
**When** the correction proceeds.
**Then** it proceeds immediately under the existing approval in the same increment and plan context; unaffected human verdicts remain verified.
</stub>

<stub id="TS-023" increment="002" rule="BR-13" kind="integration" status="pending">
**Title:** Respect the adjustment exception and frozen absorption
**Given** a correction concerns a built ordinary plan or an absorbed historical plan.
**When** its planning record is considered.
**Then** the documented same-plan adjustment exception stays explicit alongside the general built-plan restriction; an absorbed historical plan is never rewritten.
</stub>

<stub id="TS-024" increment="002" rule="BR-14" kind="integration" status="pending">
**Title:** Keep exploration outside product implementation
**Given** the human asks to investigate or explore.
**When** research is performed.
**Then** no product contract, delivery increment or product implementation is created; only an explicit formalization choice enters ordinary definition and research alone is not approval.
</stub>

<stub id="TS-025" increment="003" rule="BR-15" kind="integration" status="pending">
**Title:** Repair the actual compilation command only
**Given** build-until-pass is requested during another product lane.
**When** Summer performs repair.
**Then** the actual compile/typecheck is discovered and run; only necessary compile, type, import or build-script issues are repaired, without unrelated features or refactors or replacing the current lane.
</stub>

<stub id="TS-026" increment="003" rule="BR-15" kind="integration" status="pending">
**Title:** Avoid an unrelated full test run during compile repair
**Given** the discovered build command may include tests.
**When** compilation repair selects checks.
**Then** a full test suite runs only when already part of that build command.
</stub>

<stub id="TS-027" increment="003" rule="BR-16" kind="integration" status="pending">
**Title:** Report successful compilation and return
**Given** compilation becomes successful.
**When** repair ends.
**Then** the command, attempts, files touched and final exit are reported and coordination returns to the active product context.
</stub>

<stub id="TS-028" increment="003" rule="BR-16" kind="integration" status="pending">
**Title:** Stop compilation repair at honest boundaries
**Given** repair encounters missing environment, a product decision or the same error repeatedly.
**When** the stopping condition is reached.
**Then** the blocker is reported with command, attempts, touched files and final exit; the same error stops after three honest attempts rather than retrying indefinitely.
</stub>

<stub id="TS-029" increment="004" rule="BR-17" kind="integration" status="pending">
**Title:** Surface possible duplicate capabilities
**Given** a new capability is proposed.
**When** existing product memory is searched.
**Then** two or three probes in English and the human language inform an explicit update-versus-new question for a match; content-only matches lead to alias repair without claiming guaranteed uniqueness.
</stub>

<stub id="TS-030" increment="004" rule="BR-18" kind="integration" status="pending">
**Title:** Investigate facts and batch useful questions
**Given** product decisions are unresolved.
**When** definition gathers context.
**Then** matching product descriptions and unknown project facts are investigated first, then remaining questions and foreseeable edge cases appear together with recommendations and accept-all, individual or free-answer choices.
</stub>

<stub id="TS-031" increment="004" rule="BR-18" kind="integration" status="pending">
**Title:** Wait for answers without creating premature artifacts
**Given** a useful product question remains unanswered.
**When** the human has not accepted or answered the proposal.
**Then** recommendations remain proposals and no new feature folder, catalog entry, product description or scenarios are written.
</stub>

<stub id="TS-032" increment="004" rule="BR-18" kind="integration" status="passing">
**Title:** Skip unnecessary questions and expose every rule change for an informed approval
**Given** all useful questions are answered or none remain.
**When** the approval contract is presented.
**Then** no invented question gate is added; newly discovered facts may justify a smaller later pack; the report names every new, rewritten and retired rule with the behavior change an informed approval needs, relevant unchanged rules, and the scenario and proof-recommendation changes, and links the complete product description and scenarios; the product description holds no unresolved questions and no implementation plan.
</stub>

<stub id="TS-033" increment="005" rule="BR-19" kind="integration" status="pending">
**Title:** Accept only presentation work into Tweak
**Given** a small text or style change is requested.
**When** its scope is classified.
**Then** Tweak accepts only presentation work without new logic, rules, branches, fields, screens, schema, security, CI or environment changes.
</stub>

<stub id="TS-034" increment="005" rule="BR-19" kind="integration" status="pending">
**Title:** Escalate behavioral or uncertain text edits
**Given** displayed text expresses a price, threshold or time window rule, or scope is uncertain.
**When** the request is classified.
**Then** it routes automatically to Fast rather than asking the human to choose an engineering lane.
</stub>

<stub id="TS-035" increment="005" rule="BR-20" kind="integration" status="pending">
**Title:** Synchronize affected presentation copies
**Given** a qualified Tweak has affected wording in several places.
**When** one engineer applies it.
**Then** affected source, translations, assertions, stories and documents are searched and synchronized; quoted contract text gets appropriate patch versions and changelogs, and untouched locales are disclosed.
</stub>

<stub id="TS-036" increment="005" rule="BR-20" kind="integration" status="pending">
**Title:** Keep presentation work proportional
**Given** a qualified Tweak stays within presentation scope.
**When** the edit is completed.
**Then** it creates no new feature plan, increment, task graph, QA report or human walk and does not require new tests, a full suite, browser sessions, screenshots or containers solely for the edit.
</stub>

<stub id="TS-037" increment="005" rule="BR-21" kind="integration" status="pending">
**Title:** Report scoped checks and honor publication choice
**Given** a presentation edit is complete.
**When** verification and closure are offered.
**Then** applicable scoped type/lint and directly related tests are reported, including absent related tests; ready PR, draft PR, no PR and further-edit choices determine the next action.
</stub>

<stub id="TS-038" increment="005" rule="BR-21" kind="integration" status="pending">
**Title:** Stop and retain partial work when scope expands
**Given** a Tweak discovers a business rule or other excluded scope.
**When** the discovery is made.
**Then** further Tweak edits stop and work escalates while preserving partial changes for the next flow rather than silently reverting them.
</stub>

<stub id="TS-039" increment="006" rule="BR-22" kind="unassigned" status="passing">
**Title:** Deliver a small code change through one engineer
**Given** a code change in the Bugfix lane, in the Fast lane or correcting the active increment touches no excluded surface.
**When** it is delivered.
**Then** one engineer, the one who owns the area of the change, investigates, proves and fixes it, with no execution plan, no separate code review and no validation phase.
</stub>

<stub id="TS-040" increment="006" rule="BR-22" kind="unassigned" status="passing">
**Title:** Size does not force the full path
**Given** a Bugfix, a Fast addition or a correction of the active increment is large, touching many files, but touches no excluded surface.
**When** its path is decided.
**Then** it stays on the direct path; no file-count limit or other size test sends it to the full path.
</stub>

<stub id="TS-041" increment="006" rule="BR-22" kind="unassigned" status="passing">
**Title:** Send a request that names an excluded surface straight to the full path
**Given** the request itself names schema or production data, authentication, permissions, payments, personal data, shared configuration, CI, environment, a new screen or a contract between modules (an interface other parts of the product depend on: an API request or response shape, an event or a shared public type).
**When** the conductor classifies it.
**Then** it goes to the full path without a direct-path investigation.
</stub>

<stub id="TS-042" increment="006" rule="BR-22" kind="unassigned" status="passing">
**Title:** The investigating engineer, not the conductor, decides the fit
**Given** a Bugfix, Fast or active-increment correction request that names no excluded surface.
**When** the conductor routes it.
**Then** the conductor does not send it to the full path on its own judgment; the engineer who investigates confirms whether it fits the direct path.
</stub>

<stub id="TS-043" increment="006" rule="BR-22" kind="unassigned" status="passing">
**Title:** Stop and hand over findings when an excluded surface appears
**Given** an engineer on the direct path finds that the change touches an excluded surface.
**When** he discovers it.
**Then** he stops, keeps any partial work and reports what he found, and the work moves to the full path.
</stub>

<stub id="TS-044" increment="006" rule="BR-4" kind="unassigned" status="passing">
**Title:** An escalated investigation feeds full-path planning
**Given** work escalated from the direct path with the engineer's findings.
**When** full-path planning prepares the delivery.
**Then** planning uses those findings as input and the work receives the full-path plan and tracked tasks; the direct-path attempt itself left no plan and no tracked tasks.
</stub>

<stub id="TS-045" increment="006" rule="BR-2" kind="unassigned" status="passing">
**Title:** Proceed without an approval stop when no rule changes
**Given** a direct-path change leaves every rule text unchanged.
**When** delivery proceeds.
**Then** no approval stop is shown and the product description is not patched.
</stub>

<stub id="TS-046" increment="006" rule="BR-2" kind="unassigned" status="passing">
**Title:** Proceed when the human's own words decide the new rule
**Given** a direct-path change needs a new or changed rule, and Lisbon can write that rule from the human's words without making a product choice the human did not state.
**When** delivery proceeds.
**Then** Lisbon patches the product description without an approval stop, delivery continues, and the rule delta is shown at the close, where the human can correct it.
</stub>

<stub id="TS-047" increment="006" rule="BR-2" kind="unassigned" status="passing">
**Title:** Stop for a question pack when product doubt remains
**Given** on either path, writing the needed rule would require a product choice the human did not state.
**When** delivery reaches that decision.
**Then** the question pack is shown, and the rule is not written and the change is not implemented until the human answers.
</stub>

<stub id="TS-048" increment="006" rule="BR-23" kind="unassigned" status="passing">
**Title:** Prove the change with a failing test first
**Given** a direct-path change is ready to be made.
**When** the engineer works on it.
**Then** he first reproduces the problem or the new behavior with the smallest test able to fail for it, sees it fail, makes the change and sees that test pass.
</stub>

<stub id="TS-049" increment="006" rule="BR-23" kind="unassigned" status="passing">
**Title:** Run only the checks the change reaches
**Given** the targeted proof of a direct-path change passes.
**When** the engineer runs the follow-up checks.
**Then** he runs the tests that reach the changed files, meaning tests that import them directly or through other files, and the applicable type and lint checks; the project's test runner makes that selection when it can, otherwise he names the tests he selected and why; the whole suite is not run and no separate code review takes place.
</stub>

<stub id="TS-050" increment="006" rule="BR-23" kind="unassigned" status="passing">
**Title:** Report the proof and what was deliberately not run
**Given** a direct-path change is done.
**When** the engineer reports.
**Then** the report names the proof, its failing and passing results, the related checks that ran, and what was deliberately not run and why.
</stub>

<stub id="TS-051" increment="006" rule="BR-9" kind="unassigned" status="passing">
**Title:** No independent validation without a signal
**Given** a direct-path change whose proof needs no real journey and for which the human did not choose a comparison against the previous revision.
**When** it completes.
**Then** no independent validation runs and delivery goes straight to the close.
</stub>

<stub id="TS-052" increment="006" rule="BR-23" kind="unassigned" status="passing">
**Title:** Validate a needed real journey with a closed scope
**Given** the proof of a direct-path change needs a real journey across parts that no smaller test can fail for.
**When** independent validation joins.
**Then** Wylie validates that journey only, never the whole suite.
</stub>

<stub id="TS-053" increment="006" rule="BR-23" kind="unassigned" status="passing">
**Title:** Run the comparison the human chose for one check
**Given** on a direct-path change, the human chose to compare an unexplained failing check the change reaches against the previous revision.
**When** independent validation joins.
**Then** Wylie runs that comparison for that one check only, never the whole suite, and delivery then goes to the close.
</stub>

<stub id="TS-054" increment="006" rule="BR-24" kind="unassigned" status="passing">
**Title:** Record an unreached failure without blocking
**Given** a check fails that the change does not reach.
**When** the delivery reports its checks.
**Then** the failure is recorded as pre-existing with its name and an excerpt of the error, and the delivery is not blocked.
</stub>

<stub id="TS-055" increment="006" rule="BR-24" kind="unassigned" status="passing">
**Title:** Let the human choose on an unexplained reached failure
**Given** a check the change reaches fails and the engineer cannot explain it.
**When** the failure is found.
**Then** delivery stops before anyone else is called and the human sees two choices, each with an estimated time, or `unknown` when there is no basis for one: continue, which records the failure as pre-existing and moves to the close; or compare against the previous revision, which Wylie runs for that one check.
</stub>

<stub id="TS-056" increment="006" rule="BR-24" kind="unassigned" status="passing">
**Title:** Compare against a previous revision only when the human says so
**Given** the cause of a failing check is uncertain, on the direct or the full path.
**When** attribution of the failure is considered.
**Then** no comparison against a previous revision (a separate working copy, a dependency install or a second environment) happens unless the human said so for this delivery; the conductor never orders it on its own.
</stub>

<stub id="TS-057" increment="006" rule="BR-25" kind="unassigned" status="passing">
**Title:** Leave a light trace
**Given** a direct-path delivery completes.
**When** its trace is inspected.
**Then** there is no new increment, execution plan or tracked task; the regression proof remains in the project, and when a rule changed the product description and its acceptance scenarios each carry a patch version and a changelog line.
</stub>

<stub id="TS-058" increment="006" rule="BR-25" kind="unassigned" status="passing">
**Title:** Close with evidence and the rule delta
**Given** a direct-path delivery reaches its close.
**When** the close is shown.
**Then** it shows what changed, the proof with its failing and passing results and the related checks, any pre-existing failures and, when a rule changed, the rule delta.
</stub>

<stub id="TS-059" increment="006" rule="BR-25" kind="unassigned" status="passing">
**Title:** Offer publication choices for a new bug or addition
**Given** the direct-path delivery was a new bug or a new addition.
**When** the close is shown.
**Then** ready PR, draft PR, no PR and further edits are offered and the human's choice determines the next action.
</stub>

<stub id="TS-060" increment="006" rule="BR-13" kind="unassigned" status="passing">
**Title:** Correct the active increment directly and walk the touched flow again
**Given** a correction of the active increment fits the direct path.
**When** it is delivered.
**Then** the increment's plan and QA report are not rebuilt; the flow it touched returns to pending with the expected result of the corrected rule while other verdicts stay as they were, and the close returns the human to walking that flow.
</stub>

<stub id="TS-061" increment="006" rule="BR-11" kind="unassigned" status="passing">
**Title:** Announce the path taken and any escalation
**Given** a Fast, Bugfix or active-increment correction request.
**When** the lane is announced, or the work later escalates.
**Then** the lane keeps its name and the announcement shows the path, for example `Bugfix · direct`; an escalation to the full path is announced with its reason.
</stub>

<stub id="TS-062" increment="006" rule="BR-22" kind="unassigned" status="passing">
**Title:** A new capability takes the full path
**Given** the human requests a new capability that touches no excluded surface.
**When** it is classified.
**Then** it stays in the Feature lane and takes the full path, not the direct path.
</stub>

<stub id="TS-063" increment="006" rule="BR-25" kind="unassigned" status="passing">
**Title:** Derive the scenario delta alongside the fix when a rule changed
**Given** a direct-path change whose rule was patched in the product description.
**When** the engineer works on the fix.
**Then** Wylie derives the scenario delta from the patched description at the same time; the fix does not wait for it, and the close waits until the delta exists.
</stub>

<stub id="TS-064" increment="006" rule="BR-25" kind="unassigned" status="passing">
**Title:** Call nobody for scenarios when no rule changed
**Given** a direct-path change that leaves every rule unchanged.
**When** it is delivered and closed.
**Then** nobody is called to write or update acceptance scenarios and the scenarios are not patched.
</stub>

<stub id="TS-065" increment="project-memory/007" rule="BR-18" kind="unit" status="passing">
**Title:** Approval report detail follows the effective chat output, decisions always shown
**Given** a product description patch with two new rules, one rewritten and one retired rule, 30 new scenarios, coverage changes, two open product questions and the approval options
**When** the approval report is presented under `compact` and then under `detailed`
**Then** under `compact` each of the four rules appears by id with its behavior change, scenario and coverage changes appear as counts with links to the complete documents, and previous/new wording and the full tables do not appear inline; under `detailed` the previous and new wording and the scenario and coverage tables appear, long tables within the row limit with an omission note; under both, the two product questions, every required decision and every approval option are shown.
</stub>

<stub id="TS-066" increment="project-memory/007" rule="BR-18" kind="unit" status="passing">
**Title:** Omitted approval detail can be expanded without changing the approval
**Given** an approval report under `compact` that omitted the previous and new wording and the scenario table
**When** the human asks to see the full wording of a rewritten rule or all scenarios before answering
**Then** that detail is shown from the linked documents for that response, the approval is still pending with the same options, nothing is rewritten, and saved settings are unchanged.
</stub>

## Coverage

Existing tests were inspected only after all Given/When/Then bodies were written. Each proposed runtime integration replay connects the real Claude Code skill selection, background workers and durable project/task records in an isolated repository. A text/help check cannot detect an agent bypassing a gate or corrupting resumed state. No existing runtime journey or suitable workflow runner was found among the four CLI test files; reuse their primitive assertions, then add a grouped runtime replay only in separately authorized validation work. No API/browser E2E is selected for this terminal/chat product. All proposed assertions below remain missing.

v1.1 delta (increment 006): the only proof the repository can run today for TS-039–TS-064 and the rewritten stubs is a check of contract text, a `node:test` file reading the shipped markdown like `cli/test/language.test.js`. It proves the rule is written down and that removed wording (the old Fast approval conflict, automatic baselines) does not return; it does not prove an agent follows it. The runtime replay remains the real proof and has no runner. No API or browser E2E applies. All rows below for v1.1 are proposed; nothing was run for this delta.

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-001 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Create one current capability contract (no test file exists) | Assert: it has one meaningful English name, stable business rules, named flows, explicit scope and a first numbered delivery; its catalog lists names and document versions without a progress status. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `find --list shows registered features`: real subprocess over a temporary registry asserts feature/summary display and omission of `[building]`. It does not create or patch a living contract. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-002 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Patch current rules without losing identity (no test file exists) | Assert: a rule edit replaces current wording with a patch version and change entry; a ground-up replacement gets its own capability. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `find --list shows registered features`: real subprocess over a temporary registry asserts feature/summary display and omission of `[building]`. It does not create or patch a living contract. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-003 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Review behavior and independent scenarios together on the full path (no test file exists) | Assert: the product rules, independently derived scenarios and coverage recommendations appear together at one approval stop; implementation waits for approval, without a separate coverage approval. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-004 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Apply conditional design approval (no test file exists) | Assert: enabled design is reconciled to the approved product and approved before engineering; explicit no-design or backend-first work records why design is skipped. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-005 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Move from approval directly into prepared delivery (no test file exists) | Assert: the actual project, document versions, owners, dependencies and proof expectations inform the work; stale scenarios are reconciled and each actionable task is tracked, without another plan approval. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-006 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Hold unapproved database changes (no test file exists) | Assert: numbered changes, risks and rollback are proposed for explicit approval; a draft holds initial engineering and unapproved migration work stays held. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-007 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Distinguish unchanged data structures and review applied changes (no test file exists) | Assert: queries against unchanged structures need no database gate; applied changes receive conformance review and update the shared database description. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-008 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Assign work to responsible specialists (no test file exists) | Assert: Lisbon coordinates while engineers implement; Jane handles security participation, Hightower database participation and Rigsby CI execution policy, within configured role selection and concurrency. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `config set / get / add round-trip` checks model/concurrency persistence, and `mergeCursorModels expands strings and fills missing cursor keys` checks in-process merge output. Neither dispatches workers or resolves the documented runtime contradiction. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-009 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Expose runtime selection limitations (no test file exists) | Assert: the contradiction stays explicit and the Codex adaptation is not presented as native shipped support. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `config set / get / add round-trip` checks model/concurrency persistence, and `mergeCursorModels expands strings and fills missing cursor keys` checks in-process merge output. Neither dispatches workers or resolves the documented runtime contradiction. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-010 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Run only ready non-overlapping work (no test file exists) | Assert: dependencies finish before dependent work starts, overlapping work does not run together and the configured worker limit is respected. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-011 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Keep independent work moving during review (no test file exists) | Assert: independent ready work continues; unexpectedly touched files are reported rather than silently enlarging ownership. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-012 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Require current targeted engineering proof (no test file exists) | Assert: targeted failing proof precedes implementation and completion names covered behaviors, commands, results, relevant revision and environment; old or unexecuted expectations do not count as passing. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-013 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Broaden verification when warranted without blocking on unreached failures (no test file exists) | Assert: affected tests and applicable type/lint checks run, broader checks run for shared configuration, dependencies, helpers or schema, expensive verification stays constrained by the task contract, and a failing check the change does not reach is recorded as pre-existing instead of blocking those checks. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-014 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Start independent QA after evidenced engineering on the full path (no test file exists) | Assert: only required current passing engineering evidence permits closing its work and marking the plan built; independent QA begins without another approval and built does not mean QA or human acceptance. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-015 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Repair approved findings without changing their meaning silently (no test file exists) | Assert: work stays in that increment; product-meaning changes return to definition, valid confirmations may be reused, changed code invalidates affected proof and the refreshed report retains unresolved gaps. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-016 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Route follow-ups within the current conversation (no test file exists) | Assert: the request retains context and takes Feature, Fast, Bugfix, Open or qualified Tweak respectively. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `existing-suite audit help is discoverable without an initialized project` proves help rendering and no created files; `errors with exit code 2 when no .hele exists` proves a find-command error. `cli/test/language.test.js` asserts language defaults/template text. These do not exercise lane routing, initialization, resume, conversation availability or publication authorization. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-017 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Restore work after lost context (no test file exists) | Assert: missing memory routes through initialization except a standalone existing-suite audit; existing work restores the named or newest increment from durable project and task records without separate phase-state storage. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `existing-suite audit help is discoverable without an initialized project` proves help rendering and no created files; `errors with exit code 2 when no .hele exists` proves a find-command error. `cli/test/language.test.js` asserts language defaults/template text. These do not exercise lane routing, initialization, resume, conversation availability or publication authorization. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-018 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Keep communication available and publication authorized (no test file exists) | Assert: worker work stays outside the main conversation; reports use the chat language, clear choices and clickable documents, and external notification or publishing follows the relevant authorization. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `existing-suite audit help is discoverable without an initialized project` proves help rendering and no created files; `errors with exit code 2 when no .hele exists` proves a find-command error. `cli/test/language.test.js` asserts language defaults/template text. These do not exercise lane routing, initialization, resume, conversation availability or publication authorization. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-019 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Keep the feature and choose the increment by path (no test file exists) | Assert: it retains the feature; full-path work takes the next increment while direct-path work opens none; changed rules and scenarios are patched, while an unchanged violated rule keeps its text and the bug is reported as already covered by the contract. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-020 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — An unchanged-rule bug never stops for approval (no test file exists) | Assert: no product or scenario approval stop is shown; the rule text stays as it is and the bug is reported as already covered by the contract. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-021 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Correct changed behavior in the active increment on the full path (no test file exists) | Assert: the same feature, increment and plan context remain active, product wording receives a patch and changelog with ordinary approval, the same plan is adjusted rather than discarded, and only affected verified flows return to pending. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-022 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Apply an unchanged-rule correction without restarting (no test file exists) | Assert: it proceeds immediately under the existing approval in the same increment and plan context; unaffected human verdicts remain verified. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-023 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Respect the adjustment exception and frozen absorption (no test file exists) | Assert: the documented same-plan adjustment exception stays explicit alongside the general built-plan restriction; an absorbed historical plan is never rewritten. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-024 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Keep exploration outside product implementation (no test file exists) | Assert: no product contract, delivery increment or product implementation is created; only an explicit formalization choice enters ordinary definition and research alone is not approval. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-025 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Repair the actual compilation command only (no test file exists) | Assert: the actual compile/typecheck is discovered and run; only necessary compile, type, import or build-script issues are repaired, without unrelated features or refactors or replacing the current lane. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-026 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Avoid an unrelated full test run during compile repair (no test file exists) | Assert: a full test suite runs only when already part of that build command. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-027 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Report successful compilation and return (no test file exists) | Assert: the command, attempts, files touched and final exit are reported and coordination returns to the active product context. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-028 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Stop compilation repair at honest boundaries (no test file exists) | Assert: the blocker is reported with command, attempts, touched files and final exit; the same error stops after three honest attempts rather than retrying indefinitely. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-029 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Surface possible duplicate capabilities (no test file exists) | Assert: two or three probes in English and the human language inform an explicit update-versus-new question for a match; content-only matches lead to alias repair without claiming guaranteed uniqueness. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `find matches an accented pt-BR alias`, `find reports no matches for unrelated terms`, and `find --json returns machine-readable output`; `cli/test/find.test.js` checks normalization/scoring. Real temporary-file CLI reads and in-process helper assertions prove lookup primitives, not the runtime anti-duplicate decision or preservation of existing descriptions. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-030 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Investigate facts and batch useful questions (no test file exists) | Assert: matching product descriptions and unknown project facts are investigated first, then remaining questions and foreseeable edge cases appear together with recommendations and accept-all, individual or free-answer choices. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-031 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Wait for answers without creating premature artifacts (no test file exists) | Assert: recommendations remain proposals and no new feature folder, catalog entry, product description or scenarios are written. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-032 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Skip unnecessary questions and expose every rule change for an informed approval (no test file exists) | Assert: no invented question gate is added; newly discovered facts may justify a smaller later pack; every new, rewritten and retired rule appears with its behavior change, plus relevant unchanged rules, scenario and proof-recommendation changes and links to the complete documents (inline amount per TS-065); no unresolved questions or implementation plan in the product description. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-033 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Accept only presentation work into Tweak (no test file exists) | Assert: Tweak accepts only presentation work without new logic, rules, branches, fields, screens, schema, security, CI or environment changes. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-034 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Escalate behavioral or uncertain text edits (no test file exists) | Assert: it routes automatically to Fast rather than asking the human to choose an engineering lane. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-035 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Synchronize affected presentation copies (no test file exists) | Assert: affected source, translations, assertions, stories and documents are searched and synchronized; quoted contract text gets appropriate patch versions and changelogs, and untouched locales are disclosed. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-036 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Keep presentation work proportional (no test file exists) | Assert: it creates no new feature plan, increment, task graph, QA report or human walk and does not require new tests, a full suite, browser sessions, screenshots or containers solely for the edit. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-037 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Report scoped checks and honor publication choice (no test file exists) | Assert: applicable scoped type/lint and directly related tests are reported, including absent related tests; ready PR, draft PR, no PR and further-edit choices determine the next action. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-038 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Stop and retain partial work when scope expands (no test file exists) | Assert: further Tweak edits stop and work escalates while preserving partial changes for the next flow rather than silently reverting them. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-039–TS-064, TS-003, TS-005, TS-013, TS-014, TS-019–TS-022 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/006 — direct path (no test file and no runner exist) | Assert each stub's Then separately in a disposable repo seeded with: a one-file bug under an unchanged rule; a multi-file bug touching no excluded surface; a new-capability request touching no excluded surface; a request naming a schema change or an API response shape; a bug whose fix turns out to touch shared configuration; a Fast addition whose rule the human states completely and one that leaves a product choice open; an unrelated failing test the change does not reach; a failing test that imports a changed file, with no explanation, walked once with each human choice; a correction of an increment that has a QA report and a passed flow. Assert also who was called and when: nobody before the human's choice, Wylie for scenarios only when a rule changed, the close after the scenario delta. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. | Only a real session can fail when the conductor pre-escalates, the engineer skips the failing-first step, a baseline is ordered unasked, or a plan/increment/Beads issue is created anyway. Same gap as TS-001–TS-038: no replay runner exists, so this stays proposed and is not a mandate for this increment. | Proposed affected-skill validation; no CI trigger. Until a runner exists, the closest real evidence is a human-walked dogfood session of one direct Bugfix, timed with `skills/hele-run-report` (QA prepares that walk). |
| TS-039, TS-040, TS-041, TS-042, TS-043, TS-044, TS-062 | unit (contract text) | Owning engineer of the edited conductor/Fast skill files; Wylie (coverage) | Proposed `cli/test/direct-path.test.js` — "direct path entry and escalation are stated in the conductor and Fast contracts" | Assert the conductor and Fast/Bugfix contracts state: the direct path applies to Bugfix, Fast and active-increment corrections only, and a new capability stays in Feature on the full path; one owning engineer; no file-count limit and no other size test; the full excluded-surface list, with a contract between modules defined as an API request or response shape, an event or a shared public type; conductor escalates only when the ask names one; engineer stops, keeps partial work and reports findings; planning consumes the escalated findings. Reads the shipped markdown with `fs.readFileSync`, as `cli/test/language.test.js` does; no model runs. Proves the instruction is present and the removed wording is gone, never that an agent obeys it. | Smallest check that fails when a later edit drops or contradicts the routing text. Cannot detect a model ignoring it; that remains the replay row. | Runs in the existing `npm test` job of `.github/workflows/ci.yml` on every PR. |
| TS-045, TS-046, TS-047, TS-020 | unit (contract text) | Owning engineer of the edited skill files; Wylie (coverage) | Proposed `cli/test/direct-path.test.js` — "approval stops only on real product doubt" | Assert: no approval stop on the direct path for unchanged rules or for a rule Lisbon can write without making a product choice the human did not state; rule delta shown at the close; question pack still required, on both paths, when writing the rule would need a product choice the human did not state; unchanged-rule bug never stops on either path. Negative assert: the Fast contract no longer contains an unconditional product/scenario approval stop (the conflict recorded by the old TS-020). Reads the shipped markdown with `fs.readFileSync`, as `cli/test/language.test.js` does; no model runs. Proves the instruction is present and the removed wording is gone, never that an agent obeys it. | The negative assertion is the useful part: it fails if the v1.0 contradiction reappears. Text cannot show whether a model notices that it is about to make a product choice the human did not state. | Existing `npm test` job, every PR. |
| TS-048, TS-049, TS-050, TS-051, TS-052, TS-053 | unit (contract text) | Owning engineer of the edited build/QA skill files; Wylie (coverage) | Proposed `cli/test/direct-path.test.js` — "direct path proves with targeted evidence and calls Wylie only on a signal" | Assert: failing-first smallest test; related tests plus type/lint, never the whole suite, where related means importing a changed file directly or through other files, selected by the project's runner when it can, otherwise named by the engineer with the reason; no separate review; report fields (proof, fail/pass, related checks, not run and why); Wylie joins only in two cases, a needed real journey or a comparison the human chose for one check, scoped to that journey or that check. Reads the shipped markdown with `fs.readFileSync`, as `cli/test/language.test.js` does; no model runs. Proves the instruction is present and the removed wording is gone, never that an agent obeys it. | Catches text regressions. Whether an engineer actually saw the test fail first is only provable from a session transcript (replay row). | Existing `npm test` job, every PR. |
| TS-054, TS-055, TS-056, TS-013 | unit (contract text) | Owning engineer of the edited build/QA skill and template files; Wylie (coverage) | Proposed `cli/test/direct-path.test.js` — "unreached failures are recorded, baselines only on the human's word" | Assert: pre-existing record with name and error excerpt; an unexplained reached failure stops the delivery before anyone else is called and offers two choices, each with an estimated time or `unknown`; continuing records it as pre-existing; the comparison goes to Wylie for that one check; baseline comparison only when the human said so for this delivery, never ordered by the conductor, stated for both paths. Negative assert: no contract instructs an automatic baseline worktree/install. Reads the shipped markdown with `fs.readFileSync`, as `cli/test/language.test.js` does; no model runs. Proves the instruction is present and the removed wording is gone, never that an agent obeys it. | The negative assertion detects a reintroduced automatic baseline step, the measured cost driver in the PRD. Does not prove a model refrains from it. | Existing `npm test` job, every PR. |
| TS-057, TS-058, TS-059, TS-060, TS-061, TS-063, TS-064, TS-019, TS-021, TS-022 | unit (contract text) | Owning engineer of the edited skill and `templates/chat-reports.md`; Wylie (coverage) | Proposed `cli/test/direct-path.test.js` — "direct path close and trace"; extend the pattern of `cli/test/language.test.js` — "chat templates render tables in the session language" for any new close block | Assert: no increment/plan/Beads on the direct path; patch version and changelog line when a rule changed; when a rule changed Wylie derives the scenario delta in parallel with the fix, the fix does not wait and the close does; when no rule changed nobody is called for scenarios; close fields (changed, evidence, pre-existing, rule delta); PR choices for new bug/addition; active-increment correction returns to the touched flow without rebuilding plan or QA report; announcement shows the path (e.g. `· direct`) and escalation reason. Reads the shipped markdown with `fs.readFileSync`, as `cli/test/language.test.js` does; no model runs. Proves the instruction is present and the removed wording is gone, never that an agent obeys it. | Template presence is checkable cheaply; whether the close is actually rendered with real evidence is not. | Existing `npm test` job, every PR. |
| TS-039, TS-061 | unit | Owning engineer of `cli/src/`; Wylie (coverage) | Existing `cli/test/cli.test.js` — "ai overview and README use the canonical flow diagram" (conditional regression) | Real in-process `FLOW_DIAGRAM` compared to the README block and to `hele ai` subprocess output. Selected only if the build changes the flow diagram or a `hele ai` deep-dive to show the direct path (CLAUDE.md requires them to stay in sync). | Reuse, no new test: it already fails on a stale copy of the diagram. | Existing `npm test` job; affected only when `cli/src/flow-diagram.js`, `cli/src/ai.js` or `README.md` change. |
| TS-003, TS-005, TS-014 | unit (contract text) | Owning engineer of the edited skill files; Wylie (coverage) | Proposed `cli/test/direct-path.test.js` — "full-path gates are scoped to the full path" | Assert the approval stop, plan/Beads tracking and the QA phase are stated as full-path behavior and not removed for full-path work. Reads the shipped markdown with `fs.readFileSync`, as `cli/test/language.test.js` does; no model runs. Proves the instruction is present and the removed wording is gone, never that an agent obeys it. | Guards against the direct-path edit accidentally weakening the full path. Runtime proof stays with the replay rows. | Existing `npm test` job, every PR. |
| TS-032, TS-065, TS-066 | unit (contract text) | Owning engineer of the feature/fast skills and the PRD delta, Stubs and Coverage blocks of `templates/chat-reports.md`; Wylie (coverage) | Proposed in `cli/test/chat-output.test.js` (project-memory 007) — "approval report follows the effective output", reusing the `block()` pattern of `cli/test/direct-path-reports.test.js` | Assert the approval stop text: every new, rewritten and retired rule with its behavior change at every level; previous/new wording only at prdDelta `full`; scenario and coverage tables governed by their section values; links to the complete documents always present; product questions, required decisions and approval options stated as always shown; expansion keeps the approval pending. Reads shipped markdown; no model runs. | Fails when an edit makes the approval report hide a rule change or a decision under a compact setting. Cannot show that a model renders it. | Existing `npm test` job, every PR. |
| TS-032, TS-065, TS-066 | integration (runtime replay) | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime replay — guided-delivery/004 approval stop under `compact` and `detailed` (no runner exists) | Same seeded patch (4 rule changes, 30 scenarios, 2 open questions) presented under both presets; assert rule list and decisions present in both, tables only in `detailed`, expansion produces no rewrite and no new tool run. | Same gap as TS-030–TS-031: only a session proves the rendered stop. | Not scheduled; human walk prepared at QA of project-memory 007 is the closest real evidence. |

## Evidence

`cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Source revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with documentation-only absorption in progress. [Execution identity and hashes](../../reports/absorb-cli-execution.md); [raw result](../../reports/absorb-cli-tests.tap). No suite was rerun for this feature.

v1.1 (increment 006, QA run 1, 2026-11-24): TS-039–TS-064 and the rewritten TS-003, TS-005, TS-013, TS-014, TS-019–TS-022 were assessed against `cli/test/direct-path.test.js`, `direct-path-routing.test.js`, `direct-path-build.test.js` and `direct-path-reports.test.js`. `cd cli && npm test` rerun once: exit 0, 101/101, macOS, Node v24.21.0. Bead `hele-skills-7qu.6` final checks reused. Mutation probes showed which clauses no assertion pins. 20 passing and 14 pending, all at contract-text level; no runtime replay ran. Details in [QA_REPORT](increments/006-deliver-small-changes-directly/QA_REPORT.md). QA run 2 (2026-11-25), after the approved coverage fixes (test files only): `npm test` 129/129, and Wylie's own deletion probes killed every routed clause. 33 passing and 1 pending (TS-005: stale-scenario reconciliation and plan inputs unpinned), all at contract-text level. QA run 3 (2026-11-25): TS-005 pinned; `npm test` 131/131; 34 of 34 passing at contract-text level, so the report is green at that level. Runtime replay not run; human flows not executed.

| Stub | Result | Test / command | Code identity | Result artifact / output | Limitations |
|---|---|---|---|---|---|
| TS-001 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-002 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-003 | passing | `cli/test/direct-path-routing.test.js` — TS-003: one approval stop, no separate validation-plan or coverage approval; run-1 full-path stop tests — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-004 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-005 | passing | `cli/test/direct-path-build.test.js` — TS-005 stale scenarios reconciled (phase 4); TS-005 plan inputs on the `- Load:` line (context); TS-005 plan not signed (rules line, phase 4 line); TS-044/TS-005 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-3 test files); dist sha1 `40f637c0…` | [QA_REPORT run 3](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E6 fresh `npm test` 131/131; E7 Wylie deletion probes, single-input removals caught) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-006 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-007 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-008 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. |
| TS-009 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. |
| TS-010 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-011 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-012 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-013 | passing | `cli/test/direct-path-build.test.js` — TS-013: affected tests plus typecheck and lint; whole suite for shared config; unreached failure pre-existing — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-014 | passing | `cli/test/direct-path-build.test.js` — TS-014: built plan is engineering evidence only; plan built and QA start on the full path — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-015 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-016 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-017 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-018 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-019 | passing | `cli/test/direct-path-routing.test.js` — TS-019: changed rule patches the PRD in Fast; TS-020/TS-045; Fast increment only on the full path — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-020 | passing | `cli/test/direct-path-routing.test.js` — TS-020/TS-045: PRD left alone, Already the rule, step-5 no stop; run-1 no-stop tests — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-021 | passing | `cli/test/direct-path-routing.test.js` — TS-021: verified verdicts kept unless the fix touched the flow; adjust same plan — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-022 | passing | `cli/test/direct-path-routing.test.js` — TS-022: unchanged-rule correction proceeds at once and keeps verdicts — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-023 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved limitation: same-plan adjustment is a documented exception to the built-plan restriction; frozen origin-absorb plans are never rewritten. |
| TS-024 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-025 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-026 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-027 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-028 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-029 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-030 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-031 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-032 | passing (contract-text level) | `cli/test/chat-output-delivery.test.js` — "TS-032, TS-065, TS-066: feature and fast approval stops show the decision content at every level": the approval report names every new, rewritten and retired rule with its behavior change, every product question, required decision and approval option, and the links to the complete PRD and TEST_STUBS at every level; `skills/hele-feature/SKILL.md` "Do not invent a question to satisfy this gate.", "Late questions … uses the same pack", "There is no Open questions section.", "Lisbon does not put technical solutioning in the PRD.". `cli/test/chat-output.test.js` — "TS-040/guided-delivery TS-032/TS-065" (PRD delta levels, "Already the rule") — unit (contract text) | HEAD `d27fe70` + uncommitted project-memory increment 007 tree; `cli/dist/hele.cjs` sha256 `67cb3fc4…1e3a`; `chat-output-delivery.test.js` sha256 `d697920a…2ff3` | [QA_REPORT run 2](../project-memory/increments/007-configure-chat-output/QA_REPORT.md) (E5 fresh `npm test` 215/215; E6 Wylie deletion probes: each of the four new assertions caught); run 1 had recorded a coverage gap on the unchanged clauses, resolved by the test-only fix | Rendered approval stop not observed; human flows V3 and V6 prepared, not executed. Runtime replay not run. |
| TS-065, TS-066 | passing (contract-text level) | `cli/test/chat-output-delivery.test.js` — "TS-032, TS-065, TS-066: feature and fast approval stops show the decision content at every level"; `cli/test/chat-output.test.js` — "TS-040/guided-delivery TS-032/TS-065", "TS-052/guided-delivery TS-066" — unit (contract text) | HEAD `d27fe70` + uncommitted project-memory increment 007 tree; `cli/dist/hele.cjs` sha256 `67cb3fc4…1e3a` | [QA_REPORT run 1](../project-memory/increments/007-configure-chat-output/QA_REPORT.md) (E1 fresh `npm test` 215/215); deletion probe P13 caught | Rendered approval stop not observed; human flows V3 and V6 prepared, not executed. Runtime replay not run. |
| TS-033 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-034 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-035 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-036 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-037 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-038 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-039 | passing | `cli/test/direct-path.test.js` — TS-039/TS-062; one background owning engineer; TS-057; TS-051/052/053; drawing tests — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-040 | passing | `cli/test/direct-path.test.js` — TS-040 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-041 | passing | `cli/test/direct-path.test.js` — 13 × TS-041 excluded-surface list terms scoped to the list; `direct-path-routing.test.js` — pre-escalation — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-042 | passing | `cli/test/direct-path-routing.test.js` — routes to direct-path.md; engineer decides the fit — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-043 | passing | `cli/test/direct-path.test.js` — TS-043: the ESCALATE line says stop and keep partial work — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-044 | passing | `cli/test/direct-path-build.test.js` — TS-044/TS-005; `direct-path.test.js` — TS-043 (findings to planning) — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-045 | passing | `cli/test/direct-path.test.js` — TS-045: no PRD touch, no stop; `direct-path-routing.test.js` — TS-020/TS-045 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-046 | passing | `cli/test/direct-path-routing.test.js` — TS-045/TS-046; `direct-path.test.js` — rule handling per BR-2 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-047 | passing | `cli/test/direct-path-routing.test.js` — Question pack on doubt, both paths; `direct-path.test.js` — fix-up N2 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-048 | passing | `cli/test/direct-path.test.js` — TS-048 failing-first sequence — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-049 | passing | `cli/test/direct-path.test.js` — TS-049: type and lint checks next to the tests that reach the changed files — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-050 | passing | `cli/test/direct-path.test.js` — TS-050 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-051 | passing | `cli/test/direct-path.test.js` — TS-051/TS-052/TS-053 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-052 | passing | `cli/test/direct-path.test.js` — TS-051/TS-052/TS-053; fix-up S1 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-053 | passing | `cli/test/direct-path.test.js` — TS-053: the chosen comparison ends in the close; TS-051/052/053 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-054 | passing | `cli/test/direct-path.test.js` — TS-054; `direct-path-build.test.js` — TS-013; `direct-path-routing.test.js` — unreached failure never triaged — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-055 | passing | `cli/test/direct-path.test.js` — TS-055; `direct-path-reports.test.js` — Unexplained failure stop — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-056 | passing | `cli/test/direct-path.test.js` — TS-056; `direct-path-routing.test.js` — conductor rules; `direct-path-build.test.js` — tree scans — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-057 | passing | `cli/test/direct-path.test.js` — TS-057: trace names the regression test; TS-057 no increment/plan/bead — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff (run-2 test files); dist sha1 `40f637c0…` | [QA_REPORT run 2](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E4 fresh `npm test` 129/129; E5 Wylie deletion probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-058 | passing | `cli/test/direct-path-reports.test.js` — Direct close fields (TS-058) — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-059 | passing | `cli/test/direct-path-reports.test.js` — Direct close PR options (TS-059); `direct-path.test.js` — fix-up N8 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-060 | passing | `cli/test/direct-path.test.js` — TS-060; `direct-path-routing.test.js` — adjust direct, walk from VERIFY.md; `direct-path-reports.test.js` — active-increment close — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-061 | passing | `cli/test/direct-path-routing.test.js` — lane announcement; `direct-path-reports.test.js` — lane rows; `direct-path.test.js` — help/drawing; `cli.test.js` — canonical flow diagram — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-062 | passing | `cli/test/direct-path-routing.test.js` — new capability full path regardless of size; `direct-path.test.js` — TS-039/TS-062 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-063 | passing | `cli/test/direct-path.test.js` — TS-063/TS-064 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
| TS-064 | passing | `cli/test/direct-path.test.js` — TS-063/TS-064 — unit (contract text) | HEAD `a65533e` + uncommitted increment 006 diff; dist sha1 `40f637c0…` | [QA_REPORT run 1](increments/006-deliver-small-changes-directly/QA_REPORT.md) (E1 fresh `npm test` 101/101; E2 bead `hele-skills-7qu.6`; E3 mutation probes) | Contract text only: proves the rule is written, not that an agent follows it. Runtime replay proposed, not run (no runner). |
