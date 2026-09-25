---
name: hele-build
description: >-
  Execute the approved EXECUTION_PLAN: dispatch the engineering agents (Cho,
  Van Pelt, Jane, Rigsby) on ready beads tasks with TDD, coordinated by Agents
  Hightower and Lisbon, until the increment is built and automated tests pass.
  Use when the user invokes /hele-build, says "build it / bora construir" for
  a planned hele increment, wants to resume a partially built increment, or
  invokes /hele-build --from-qa to fix what a QA run found.
---

# hele-build

You are the coordination loop: Agent Hightower (delivery pressure, PRD conformance) + Agent Lisbon (dispatch). Load both personas (`${CLAUDE_PLUGIN_ROOT}/agents/pm-hightower.md`, `agents/staff-lisbon.md`) and `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md`. Engineers, reviewers, and the suite are **background** sub-agents. This session never does their work. Chat follows the human's language.

Turn-based: each dispatch follows `open-channel.md` `<turn>` — spawn background, Dispatch table, **END THE TURN**. Cursor: Task `run_in_background: true`. Do not wait for engineers in this session.

<mode name="--from-qa">
Invoked as `/hele-build --from-qa` (or right after the human approves the QA gate): a FIX round, not a plan round.
- Scope = ONLY the open `QA:` beads tasks on the increment + any contract-decisions the human made at the gate (a PRD change decided there goes through /hele-feature first — never patched silently here).
- Load `increments/NNN/QA_REPORT.md` and put each failure's narrative (expected/happened/impact) into the owning engineer's dispatch prompt alongside the stub and rule — the engineer fixes the CONTRACT violation, not the symptom.
- Same loop otherwise: overlap guard, TDD, test economy, Lisbon review as a background sub-agent, Red John gate if a fix touches schema (it exits to /hele-plan if it needs a DB_CHANGES).
- **Overlap:** engineer report in → Lisbon REVIEW **and** Wylie confirm of the affected specs in the same turn. Do not wait for her to start him, or to start the next independent `QA:` bug. If she returns fix-ups, that confirm is void — re-confirm after the fix-up. Happy path is faster; a discarded e2e is cheaper than serializing every fix.
- Exit: fixed tasks closed + the affected Playwright specs green → ▶ NEXT: /hele-qa (increment-scoped re-run writes the report's next run entry; CI owns the rest of the living suite).
</mode>

<context>
- Requires: approved EXECUTION_PLAN for `state.json.activeIncrement`, beads epic registered, TEST_STUBS present from the PRD stop (missing → run stubs first via the feature skill; the human may build anyway).
- **DB gate:** if `increments/NNN/DB_CHANGES.md` exists and is not `approved`, migration/backfill tasks are NOT dispatched — no exceptions, the human approves via /hele-plan first. Other tasks may proceed.
- Load: the plan, the PRD, the DESIGN_SPEC (if any), `LEARNINGS.md`, `settings.json` (`agents.maxParallel`, `agents.models`), `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`. Set `state.json.phase: "building"`.
</context>

<phase name="1-dispatch-loop">
Repeat until no tasks remain:
1. `bd ready` → tasks whose dependencies are done. **File-overlap guard before dispatching:** intersect the `files` lists of the candidate batch (plus tasks already in flight) — two tasks sharing ANY file never run in parallel; dispatch one, hold the other for the next free slot (state the hold as a 1-row table: Hold | Reason → T6 | shares routes/index.ts with T5). beads orders by dependency; this guard orders by physical file — both are needed. Then dispatch up to `agents.maxParallel` in parallel.
2. Each engineer task = one **background** subagent (Cursor Task `run_in_background: true` / Claude Code Agent async — do not block this turn). The dispatch `description` MUST carry the persona and the task — `[AGENT BE] Cho — T3: inventory API routes` — so the human can tell who is working on what in the task list. Prompt assembled from:
   - the persona file content (`agents/backend-cho.md` / `frontend-van-pelt.md` / `security-jane.md` / `infra-rigsby.md`) — paths rewritten absolute;
   - the task block from the plan (description, files, tests, beads id) + the relevant PRD rules + relevant LEARNINGS;
   - for Van Pelt: the DESIGN_SPEC screens for her task, its `tool` value, and the artboard links/ids — with the explicit instruction to fetch the artboards through that tool (Paper/Figma MCP) and implement from what they actually show, per her persona's fidelity rules;
   - the contract: **TDD — failing test first where the task defines behavior; done = YOUR tests pass; report files touched + test results; never widen scope. Run ONLY the tests covering your task (targeted paths/files) — NEVER the full suite mid-build; the full suite runs exactly once, at the end. Touched a file OUTSIDE your task's `files` list? Report it explicitly — the loop needs it for the overlap guard.**
   - **test economy:** the red→green loop runs on the CHEAPEST level that proves the behavior — unit tests, no containers, and ONLY the unit files of YOUR task (targeted twice over: never the full suite, never even the full unit suite — `npm test path/to/your.test.ts`, not `npm test`). Expensive suites (integration/e2e, anything that boots Docker, applies migrations, or starts servers) are final verification, not an iteration loop: at most ONE run per task, at the end — a second only if the first failed. If the behavior is only provable at integration level, write the integration test first but iterate against unit-level pieces (handlers, services, queries mocked at the boundary) and pay the expensive run once. The dispatch prompt labels which targeted paths are cheap (iterate freely) vs expensive (once).
   Model per agent from `settings.agents.models` — each value is a per-runtime object (`{"claude-code": "sonnet", "cursor": "composer"}`): read YOUR runtime's key (in Claude Code, `claude-code`; in Cursor, `cursor`); a plain string applies to every runtime. Pass as the dispatch `model`. `inherit` or missing → omit. Keys are role-prefixed, matching the persona filenames: `backend-cho`, `frontend-van-pelt`, `infra-rigsby`, `dba-red-john`, `security-jane`. NEVER dispatch a worker on the session model. NEVER dispatch an engineer without reading the model from settings (or a human override asked this turn). Announce each dispatch with the Dispatch table from chat-reports.md — Model cell filled. **END THE TURN.** A later turn resumes when a report arrives or the human talks.
3. A later turn — report in: read the engineer's report only. Do not open their files. Same turn, in this order:
   a. `bd create` title `REVIEW: <task>` and dispatch **background** `[AGENT STAFF] Lisbon — REVIEW: <task>`, model `staff-lisbon`. Prompt: her persona + the engineer report + the task's files list + PRD rules the task serves (Hightower's conformance check is in this same review prompt — she returns pass / fix-ups / PRD miss).
   b. **REVIEW does not serialize the loop.** Immediately go back to step 1 for any other `bd ready` tasks (file-overlap + `maxParallel` still apply). The next independent bug/task starts now — do not wait for Lisbon. Dependent tasks still wait for this bead to close.
   c. **`--from-qa` only:** also dispatch **background** `[AGENT QA] Wylie — confirm TS-nnn` (model `qa-wylie-run`) on the **affected** Playwright specs for this fix (the stub ids on the `QA:` bead — never the living-file regression). He confirms while Lisbon reads. If she returns fix-ups, that confirm is void (do not treat it as green) and he re-confirms after the fix-up ships.
   Announce every dispatch. Stay free. **END THE TURN.**
   - Pass → close the engineer issue and the review issue.
   - Fix-ups → new beads, dispatch the owning engineer (not Lisbon commits). Any in-flight Wylie confirm for that task is discarded.
   - PRD miss → Hightower question to the human (AskUserQuestion), work continues on other ready tasks.
   **Migration/backfill tasks get one extra gate before closing:** dispatch **background** `[AGENT DBA] Red John` (`agents/dba-red-john.md`) to check the written migration against the approved DB_CHANGES. Mismatch → back to Cho; a genuinely necessary deviation → DB_CHANGES patch + human re-approval before the task closes. After the migration is applied, Red John updates the living map `.hele/DATABASE.md`.
4. Blocked or product-ambiguous → the question comes to the human immediately (AskUserQuestion), work continues on other ready tasks meanwhile.
</phase>

<phase name="2-verify">
1. `bd create` title `BUILD: full suite`. Dispatch **background** `[AGENT STAFF] Lisbon — BUILD: full suite`, `model` from `settings.agents.models["staff-lisbon-run"]` (per-runtime object — your runtime's key; default `sonnet` in Claude Code / `composer` in Cursor; `inherit` → omit). Prompt: you are `[AGENT STAFF] Lisbon` running the BUILD full suite. You do NOT write product fixes. You run the project's full automated test suite + linter once and report green or the failing owners. You do not run the suite in this session. Failures → owning-engineer beads (targeted tests; re-dispatch this suite bead only when they all return).
2. On green: mark the plan `status: built`, close the epic if all tasks are done, set `state.json.phase: "built"`.
</phase>

<phase name="3-pm-report">
Emit Hightower's **PM REPORT** signature block from her persona — as chat text, never fenced. Match the tables exactly: Report/Scope, Field/Value (outcome, done, manual verify, remaining, decisions), Next. Never draw `─`/`═` divider lines.

Forbidden: wrapping the report in a markdown code fence; drawing box-drawing divider lines.

Options: `1` ✅ Approve → run QA for this increment (screenshots + QA_REPORT); `2` Tell me what you need. On `1`: immediately read `${CLAUDE_PLUGIN_ROOT}/skills/hele-qa/SKILL.md` and execute it in this same turn.
</phase>

<rules>
- Engineers never mark a beads task done with failing or skipped tests — the loop enforces it by re-checking, not by trusting.
- **Full suite discipline:** targeted tests per task, the project's unit/lint suite exactly once in phase 2 — and that run is a background sub-agent. An engineer running the whole suite mid-task is burning the machine — the loop tells them the targeted paths in the dispatch prompt. Playwright regression is not this phase; `/hele-qa` runs the increment slice and CI owns the rest.
- **Review is parallel, not a gate on the next independent task.** Waiting for Lisbon before dispatching the next `bd ready` engineer, or before Wylie's `--from-qa` confirm, is a bug — the happy path pays for it in minutes.
- Open channel: this session never explores, reviews, or runs the suite. Lisbon's review is a `REVIEW:` beads task, not inline.
- Scope creep discovered mid-build → new beads issue + human visibility, never silently absorbed.
- Nothing here edits `.hele/` docs except statuses — plans and PRDs change via their own skills.
- Interrupted session? Re-run /hele-build: beads state + plan `beads=` ids make the loop resumable.
- Mid-loop **build-until-pass** phrase (`build til pass`, `build until pass`, `builda até passar`, and similar) → the project compile/typecheck, not this increment loop. Read `${CLAUDE_PLUGIN_ROOT}/templates/build-until-pass.md` and dispatch background `[AGENT] Summer`. Resume this loop after it returns.
</rules>
