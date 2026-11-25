---
name: hele-build
description: >-
  Execute the EXECUTION_PLAN (status ready — the human does not sign it):
  dispatch the engineering agents (Cho,
  Van Pelt, Jane, Rigsby) on ready beads tasks with TDD, coordinated by
  Agent Lisbon, until the increment is built and automated tests pass.
  Use when the user invokes /hele-build, says "build it / bora construir" for
  a planned hele increment, wants to resume a partially built increment, or
  invokes /hele-build --from-qa to fix what a QA run found.
---

# hele-build

Coordinate as Lisbon. Use the persona in `${CLAUDE_PLUGIN_ROOT}/agents/staff-lisbon.md` and the background dispatch and reporting contract in `templates/open-channel.md`. Keep the main conversation open and follow the project's chat and artifact languages.

<mode name="--from-qa">
Use `QA_REPORT.md` and bead notes to identify approved unresolved findings. Reopen the increment epic and affected delivery beads as needed. Include legacy `QA:` beads linked by the report. Route product and smaller-test gaps to their owners, E2E defects to Wylie, and CI selection to Rigsby. Send the failure and affected stub from `QA_REPORT.md`. Changed product expectations go through `/hele-feature`; fixes needing a new or changed `DB_CHANGES.md` go through `/hele-plan`.

Wylie (`qa-wylie-run`) confirms affected TS IDs only where current evidence falls short. Run in parallel only when the review is unlikely to change the behavior or its proof. Otherwise wait for review and any fix-ups. Reuse a parallel confirmation unless the fix changes what it proved. Keep the bead open if confirmation is blocked; route a failed check back to its owner on that bead. Close each bead after review and proof pass. Pass the evidence to `/hele-qa` after the final checks.
</mode>

<context>
- Use the increment's registered epic, TEST_STUBS and ready plan (legacy `approved` counts as ready; `--from-qa` also accepts `built`). Missing stubs go through the feature skill. The plan needs no human sign-off.
- A draft DB_CHANGES blocks build startup. During an active build, hold migration/backfill tasks until approval.
- Read `agents.maxParallel` and `agents.models` in project settings. Use `templates/validation-strategy.md` for evidence and consult only the relevant PRD, DESIGN_SPEC and report sections.
</context>

<phase name="1-dispatch-loop">
1. Start with `bd ready` for this epic and the active build scope. Dispatch a ready bead only after `bd update <id> --if-status open --status in_progress` succeeds. Keep tasks with overlapping declared files apart and stay within `agents.maxParallel`. Report holds in the dispatch. On restart, reconcile existing in-progress beads and recorded agent IDs before opening new work.
2. Dispatch one background engineer per delivery. Use the persona and task ID in the description. Send the bead ID, relevant PRD rules, files and test assertions, with references to the source documents. Include approved DB-n rows for migrations. For applicable frontend work, include the design tool and artboard IDs and require fetching those artboards.
   - Start with a failing test when changing behavior. Iterate on the smallest targeted tests that prove it; run required expensive checks at the end of the task. Return TS IDs, assertions, changed paths (including any outside the plan), command, outcome, code identity, relevant environment and evidence link. Keep full logs accessible and include the relevant excerpt on failure.
   - Resolve the model by role from `agents.models`, preferring project choices over plugin defaults. An explicit human override applies to that dispatch. Read the runtime key or plain value; `inherit` omits the model. Engineers use their persona key; E2E fixes use `qa-wylie-run`. Show the chosen model in the dispatch. Each dispatch is announced with the Dispatch announcement of `templates/chat-reports.md` at the effective output (`## Output`).
3. When an engineer reports, record the agent ID, code identity and evidence in the same bead. Dispatch independent background Lisbon review for that delivery. For low-risk work, batch a related delivery already in flight only if no dependent is waiting. Review the ready subset when the other worker reports or blocks, and return a verdict per bead. Keep a dedicated review for auth, permissions, tenant isolation, payments, PII, or migrations. Use `staff-lisbon-run` for routine reviews and `staff-lisbon` for dedicated high-risk reviews. Review code and PRD conformance; reuse current evidence under the validation strategy. Start other ready engineers without waiting for review.
4. Record each review verdict and its code identity on the delivery bead. Close only passing beads with current proof and any required specialist or QA confirmation. Keep a failed delivery in progress; reopen its original bead if already closed. Send fix-ups to the original engineer by agent ID when resumable, otherwise hand off the latest diff and evidence to a replacement on the same bead. Review fixes on the changed code and recheck affected evidence. Create a new bead for independent work. Surface PRD misses and blockers to the human while other ready work continues.
5. Before closing migration or backfill work, have Hightower (`dba-hightower`) check the implementation against the approved DB_CHANGES and plan. Route mismatches to the owner. A necessary change to the agreed schema updates both docs and requires re-approval. After application, Hightower updates `.hele/DATABASE.md`.

Record dispatch IDs and the pending step in bead notes as work starts. On restart, reconcile live agents and saved results before retrying that step. Finish any existing review or fix beads from older builds in place; open no new review bead for a delivery. Follow the open-channel dispatch contract and end the turn.
</phase>

<phase name="2-verify">
1. Use one `BUILD: affected checks` bead and background Lisbon (`staff-lisbon-run`) for the final checks. Collect increment changes against the base, then run affected engineer-owned tests, typecheck and lint. Run the whole engineer-owned suite for shared config, lockfile, test setup/helper or schema changes, or when affected selection is unavailable. Record the scope and reusable evidence.
2. A failing check the increment's changes do not reach is recorded on the `BUILD: affected checks` bead as pre-existing, with its name and an error excerpt. It does not block green and it is never routed to a delivery bead or triaged. A failing check the changes do reach goes to the owning delivery bead, and the final checks rerun after the fix. A reached failing check its owner cannot explain stops for the "Unexplained failure" stop in `templates/chat-reports.md` before anyone else is called; nobody is dispatched until the human answers.
3. Never build a worktree at a previous revision, install dependencies for one, or start a second environment to attribute a failure unless the human chose "compare" for this delivery. Then dispatch only Wylie (`qa-wylie-run`), for that one check.
4. On green on the full path, close the check bead, mark the plan built, and close the epic when its work is done. Built is engineering evidence only; it does not mean QA or human acceptance.
</phase>

<phase name="3-pm-report">
When the suite is green on the full path (phase 2 already set the plan `built`):
1. Emit a short report — Report/Scope and Field/Value only (outcome, done, decisions needed: none). Files, if any, are clickable links. No Actions table. Never draw `─`/`═` divider lines. Never wrap the report in a markdown code fence.
2. Immediately read `${CLAUDE_PLUGIN_ROOT}/skills/hele-qa/SKILL.md` and execute it in this same turn. Auto-verify is not a sign-off.

If the increment is blocked on a human decision, do not start QA. Ask that question and keep other ready tasks moving.
</phase>

<rules>
- Persist build progress in Beads. Plan and PRD changes go through their own skills.
- Mid-loop build-until-pass requests use `templates/build-until-pass.md` to dispatch Summer, then resume the increment.
</rules>
