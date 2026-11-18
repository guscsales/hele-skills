---
feature: guided-delivery
doc: TEST_STUBS
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
updated: 2026-11-18
---

# Test Stubs — guided-delivery

Derived from the approved v1.0 product description and its changelog slice map before inspecting tests. No execution plan was read. Stable IDs describe behavior; technical proof belongs in Coverage.

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

<stub id="TS-003" increment="001" rule="BR-2" kind="integration" status="pending">
**Title:** Review behavior and independent scenarios together
**Given** a new or changed product contract is ready.
**When** the human reviews or requests revisions.
**Then** the product rules, independently derived scenarios and coverage recommendations appear together; normal implementation waits for approval without a separate coverage approval.
</stub>

<stub id="TS-004" increment="001" rule="BR-3" kind="integration" status="pending">
**Title:** Apply conditional design approval
**Given** a request changes a screen or layout.
**When** delivery decides whether design applies.
**Then** enabled design is reconciled to the approved product and approved before engineering; explicit no-design or backend-first work records why design is skipped.
</stub>

<stub id="TS-005" increment="001" rule="BR-4" kind="integration" status="pending">
**Title:** Move from approval directly into prepared delivery
**Given** applicable product and design approvals exist.
**When** delivery is prepared.
**Then** the actual project, document versions, owners, dependencies and proof expectations inform the work; stale scenarios are reconciled and actionable work is tracked, without another plan approval.
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

<stub id="TS-013" increment="001" rule="BR-8" kind="integration" status="pending">
**Title:** Broaden verification when shared changes warrant it
**Given** a change affects shared setup or its impact is uncertain.
**When** final engineering checks are selected.
**Then** affected tests and applicable type/lint checks run, with broader checks for shared configuration, dependencies, helpers or schema and with expensive verification constrained by the task contract.
</stub>

<stub id="TS-014" increment="001" rule="BR-9" kind="integration" status="pending">
**Title:** Start independent QA after evidenced engineering
**Given** engineering reports completion.
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

<stub id="TS-019" increment="002" rule="BR-12" kind="integration" status="pending">
**Title:** Add increments to an existing capability
**Given** an existing capability needs a new addition or bug repair.
**When** the next delivery is defined.
**Then** it retains the feature and takes the next increment; changed rules and scenarios are patched while unchanged violated rules retain their text.
</stub>

<stub id="TS-020" increment="002" rule="BR-12" kind="integration" status="pending">
**Title:** Disclose unresolved unchanged-rule bugfix approval
**Given** a bug violates an unchanged rule.
**When** its approval path is assessed.
**Then** the conflict between immediate conductor continuation and the unconditional Fast approval stop is disclosed; one consistent validated approval outcome is not claimed.
</stub>

<stub id="TS-021" increment="002" rule="BR-13" kind="integration" status="pending">
**Title:** Correct changed behavior in the active increment
**Given** feedback changes product meaning in active work.
**When** the correction is prepared.
**Then** the same feature and increment remain active, product wording receives a patch and changelog with ordinary approval, and only affected verified flows return to pending.
</stub>

<stub id="TS-022" increment="002" rule="BR-13" kind="integration" status="pending">
**Title:** Apply an unchanged-rule correction without restarting
**Given** feedback corrects work without changing its approved rule.
**When** the correction proceeds.
**Then** existing approval is reused in the same increment and plan context; unaffected human verdicts remain verified.
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

<stub id="TS-032" increment="004" rule="BR-18" kind="integration" status="pending">
**Title:** Skip unnecessary questions and expose changes clearly
**Given** all useful questions are answered or none remain.
**When** the approval contract is presented.
**Then** no invented question gate is added; newly discovered facts may justify a smaller later pack, and the report shows new and changed rules, old/new wording, relevant unchanged rules, complete scenarios and coverage recommendations without unresolved questions or an implementation plan in the product description.
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

## Coverage

Existing tests were inspected only after all Given/When/Then bodies were written. Each proposed runtime integration replay connects the real Claude Code skill selection, background workers and durable project/task records in an isolated repository. A text/help check cannot detect an agent bypassing a gate or corrupting resumed state. No existing runtime journey or suitable workflow runner was found among the four CLI test files; reuse their primitive assertions, then add a grouped runtime replay only in separately authorized validation work. No API/browser E2E is selected for this terminal/chat product. All proposed assertions below remain missing.

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-001 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Create one current capability contract (no test file exists) | Assert: it has one meaningful English name, stable business rules, named flows, explicit scope and a first numbered delivery; its catalog lists names and document versions without a progress status. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `find --list shows registered features`: real subprocess over a temporary registry asserts feature/summary display and omission of `[building]`. It does not create or patch a living contract. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-002 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Patch current rules without losing identity (no test file exists) | Assert: a rule edit replaces current wording with a patch version and change entry; a ground-up replacement gets its own capability. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `find --list shows registered features`: real subprocess over a temporary registry asserts feature/summary display and omission of `[building]`. It does not create or patch a living contract. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-003 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Review behavior and independent scenarios together (no test file exists) | Assert: the product rules, independently derived scenarios and coverage recommendations appear together; normal implementation waits for approval without a separate coverage approval. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-004 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Apply conditional design approval (no test file exists) | Assert: enabled design is reconciled to the approved product and approved before engineering; explicit no-design or backend-first work records why design is skipped. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-005 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Move from approval directly into prepared delivery (no test file exists) | Assert: the actual project, document versions, owners, dependencies and proof expectations inform the work; stale scenarios are reconciled and actionable work is tracked, without another plan approval. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-006 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Hold unapproved database changes (no test file exists) | Assert: numbered changes, risks and rollback are proposed for explicit approval; a draft holds initial engineering and unapproved migration work stays held. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-007 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Distinguish unchanged data structures and review applied changes (no test file exists) | Assert: queries against unchanged structures need no database gate; applied changes receive conformance review and update the shared database description. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-008 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Assign work to responsible specialists (no test file exists) | Assert: Lisbon coordinates while engineers implement; Jane handles security participation, Hightower database participation and Rigsby CI execution policy, within configured role selection and concurrency. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `config set / get / add round-trip` checks model/concurrency persistence, and `mergeCursorModels expands strings and fills missing cursor keys` checks in-process merge output. Neither dispatches workers or resolves the documented runtime contradiction. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-009 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Expose runtime selection limitations (no test file exists) | Assert: the contradiction stays explicit and the Codex adaptation is not presented as native shipped support. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `config set / get / add round-trip` checks model/concurrency persistence, and `mergeCursorModels expands strings and fills missing cursor keys` checks in-process merge output. Neither dispatches workers or resolves the documented runtime contradiction. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-010 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Run only ready non-overlapping work (no test file exists) | Assert: dependencies finish before dependent work starts, overlapping work does not run together and the configured worker limit is respected. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-011 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Keep independent work moving during review (no test file exists) | Assert: independent ready work continues; unexpectedly touched files are reported rather than silently enlarging ownership. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-012 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Require current targeted engineering proof (no test file exists) | Assert: targeted failing proof precedes implementation and completion names covered behaviors, commands, results, relevant revision and environment; old or unexecuted expectations do not count as passing. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-013 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Broaden verification when shared changes warrant it (no test file exists) | Assert: affected tests and applicable type/lint checks run, with broader checks for shared configuration, dependencies, helpers or schema and with expensive verification constrained by the task contract. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-014 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Start independent QA after evidenced engineering (no test file exists) | Assert: only required current passing engineering evidence permits closing its work and marking the plan built; independent QA begins without another approval and built does not mean QA or human acceptance. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-015 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/001 — Repair approved findings without changing their meaning silently (no test file exists) | Assert: work stays in that increment; product-meaning changes return to definition, valid confirmations may be reused, changed code invalidates affected proof and the refreshed report retains unresolved gaps. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-016 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Route follow-ups within the current conversation (no test file exists) | Assert: the request retains context and takes Feature, Fast, Bugfix, Open or qualified Tweak respectively. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `existing-suite audit help is discoverable without an initialized project` proves help rendering and no created files; `errors with exit code 2 when no .hele exists` proves a find-command error. `cli/test/language.test.js` asserts language defaults/template text. These do not exercise lane routing, initialization, resume, conversation availability or publication authorization. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-017 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Restore work after lost context (no test file exists) | Assert: missing memory routes through initialization except a standalone existing-suite audit; existing work restores the named or newest increment from durable project and task records without separate phase-state storage. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `existing-suite audit help is discoverable without an initialized project` proves help rendering and no created files; `errors with exit code 2 when no .hele exists` proves a find-command error. `cli/test/language.test.js` asserts language defaults/template text. These do not exercise lane routing, initialization, resume, conversation availability or publication authorization. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-018 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Keep communication available and publication authorized (no test file exists) | Assert: worker work stays outside the main conversation; reports use the chat language, clear choices and clickable documents, and external notification or publishing follows the relevant authorization. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `existing-suite audit help is discoverable without an initialized project` proves help rendering and no created files; `errors with exit code 2 when no .hele exists` proves a find-command error. `cli/test/language.test.js` asserts language defaults/template text. These do not exercise lane routing, initialization, resume, conversation availability or publication authorization. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-019 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Add increments to an existing capability (no test file exists) | Assert: it retains the feature and takes the next increment; changed rules and scenarios are patched while unchanged violated rules retain their text. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-020 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Disclose unresolved unchanged-rule bugfix approval (no test file exists) | Assert: the conflict between immediate conductor continuation and the unconditional Fast approval stop is disclosed; one consistent validated approval outcome is not claimed. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-021 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Correct changed behavior in the active increment (no test file exists) | Assert: the same feature and increment remain active, product wording receives a patch and changelog with ordinary approval, and only affected verified flows return to pending. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-022 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Apply an unchanged-rule correction without restarting (no test file exists) | Assert: existing approval is reused in the same increment and plan context; unaffected human verdicts remain verified. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-023 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Respect the adjustment exception and frozen absorption (no test file exists) | Assert: the documented same-plan adjustment exception stays explicit alongside the general built-plan restriction; an absorbed historical plan is never rewritten. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-024 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/002 — Keep exploration outside product implementation (no test file exists) | Assert: no product contract, delivery increment or product implementation is created; only an explicit formalization choice enters ordinary definition and research alone is not approval. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-025 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Repair the actual compilation command only (no test file exists) | Assert: the actual compile/typecheck is discovered and run; only necessary compile, type, import or build-script issues are repaired, without unrelated features or refactors or replacing the current lane. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-026 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Avoid an unrelated full test run during compile repair (no test file exists) | Assert: a full test suite runs only when already part of that build command. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-027 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Report successful compilation and return (no test file exists) | Assert: the command, attempts, files touched and final exit are reported and coordination returns to the active product context. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-028 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/003 — Stop compilation repair at honest boundaries (no test file exists) | Assert: the blocker is reported with command, attempts, touched files and final exit; the same error stops after three honest attempts rather than retrying indefinitely. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-029 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Surface possible duplicate capabilities (no test file exists) | Assert: two or three probes in English and the human language inform an explicit update-versus-new question for a match; content-only matches lead to alias repair without claiming guaranteed uniqueness. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: `cli/test/cli.test.js` — `find matches an accented pt-BR alias`, `find reports no matches for unrelated terms`, and `find --json returns machine-readable output`; `cli/test/find.test.js` checks normalization/scoring. Real temporary-file CLI reads and in-process helper assertions prove lookup primitives, not the runtime anti-duplicate decision or preservation of existing descriptions. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-030 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Investigate facts and batch useful questions (no test file exists) | Assert: matching product descriptions and unknown project facts are investigated first, then remaining questions and foreseeable edge cases appear together with recommendations and accept-all, individual or free-answer choices. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-031 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Wait for answers without creating premature artifacts (no test file exists) | Assert: recommendations remain proposals and no new feature folder, catalog entry, product description or scenarios are written. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-032 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/004 — Skip unnecessary questions and expose changes clearly (no test file exists) | Assert: no invented question gate is added; newly discovered facts may justify a smaller later pack, and the report shows new and changed rules, old/new wording, relevant unchanged rules, complete scenarios and coverage recommendations without unresolved questions or an implementation plan in the product description. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-033 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Accept only presentation work into Tweak (no test file exists) | Assert: Tweak accepts only presentation work without new logic, rules, branches, fields, screens, schema, security, CI or environment changes. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-034 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Escalate behavioral or uncertain text edits (no test file exists) | Assert: it routes automatically to Fast rather than asking the human to choose an engineering lane. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-035 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Synchronize affected presentation copies (no test file exists) | Assert: affected source, translations, assertions, stories and documents are searched and synchronized; quoted contract text gets appropriate patch versions and changelogs, and untouched locales are disclosed. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-036 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Keep presentation work proportional (no test file exists) | Assert: it creates no new feature plan, increment, task graph, QA report or human walk and does not require new tests, a full suite, browser sessions, screenshots or containers solely for the edit. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-037 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Report scoped checks and honor publication choice (no test file exists) | Assert: applicable scoped type/lint and directly related tests are reported, including absent related tests; ready PR, draft PR, no PR and further-edit choices determine the next action. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |
| TS-038 | integration | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime integration replay: guided-delivery/005 — Stop and retain partial work when scope expands (no test file exists) | Assert: further Tweak edits stop and work escalates while preserving partial changes for the next flow rather than silently reverting them. Real Claude runtime and disposable project/task persistence; operator decisions recorded, not mocked. Existing partial proof: No existing automated assertion exercises this complete workflow. The shared CLI suite checks lookup/configuration/help/text primitives only; no Claude runtime, live agent dispatch, product implementation or human walk was executed. | Detect runtime violation beyond static instruction presence; grouped replay reuses shared setup but asserts this outcome independently. | Proposed affected-skill validation; no configured CI trigger. Current CLI regressions stay under `.github/workflows/ci.yml`. |

## Evidence

`cd cli && npm test` reused once: exit 0, 27/27 passing, no failures/skips or retries; 0.602 s wall-clock including pretest/startup. macOS 26.5.2 arm64, Node v22.22.2, npm 10.9.7. Source revision `7e0b5f9cd09e5a901c724de630e0019c7b64646c` with documentation-only absorption in progress. [Execution identity and hashes](../../reports/absorb-cli-execution.md); [raw result](../../reports/absorb-cli-tests.tap). No suite was rerun for this feature.

| Stub | Result | Test / command | Code identity | Result artifact / output | Limitations |
|---|---|---|---|---|---|
| TS-001 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-002 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-003 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-004 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-005 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-006 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-007 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-008 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. |
| TS-009 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Strict session-model prohibition conflicts with missing-key/inherit fallback. This Codex run is adapted, not native support evidence. |
| TS-010 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-011 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-012 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-013 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-014 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-015 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-016 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-017 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-018 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-019 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved limitation: unchanged-rule Bugfix approval conflicts between conductor and Fast; Lisbon/the human must resolve it in later authorized product work before claiming a uniform outcome. |
| TS-020 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved limitation: unchanged-rule Bugfix approval conflicts between conductor and Fast; Lisbon/the human must resolve it in later authorized product work before claiming a uniform outcome. |
| TS-021 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved limitation: same-plan adjustment is a documented exception to the built-plan restriction; frozen origin-absorb plans are never rewritten. |
| TS-022 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved limitation: same-plan adjustment is a documented exception to the built-plan restriction; frozen origin-absorb plans are never rewritten. |
| TS-023 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. Approved limitation: same-plan adjustment is a documented exception to the built-plan restriction; frozen origin-absorb plans are never rewritten. |
| TS-024 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-025 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-026 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-027 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-028 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-029 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-030 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-031 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-032 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-033 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-034 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-035 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-036 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-037 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
| TS-038 | pending | Runtime replay not run; shared CLI evidence is partial only | `7e0b5f9cd09e5a901c724de630e0019c7b64646c` | [Shared run](../../reports/absorb-cli-execution.md) | Missing current runtime assertions for this scenario; source instructions, this document and CLI primitive results do not prove the complete behavior. |
