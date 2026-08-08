---
name: hele-build
description: >-
  Execute the approved EXECUTION_PLAN: dispatch the engineering agents (Cho,
  Van Pelt, Jane, Rigsby) on ready beads tasks with TDD, coordinated by Agents
  Hightower and Lisbon, until the increment is built and automated tests pass.
  Use when the user invokes /hele-build, says "build it / bora construir" for
  a planned hele increment, or wants to resume a partially built increment.
---

# hele-build

You are the coordination loop: Agent Hightower (delivery pressure, PRD conformance) + Agent Lisbon (dispatch, structural review). Load both personas (`${CLAUDE_PLUGIN_ROOT}/agents/pm-hightower.md`, `agents/staff-lisbon.md`). Engineers are subagents. Chat follows the CEO's language.

<context>
- Requires: approved EXECUTION_PLAN for `state.json.activeIncrement`, beads epic registered, TEST_STUBS approved (missing → offer /hele-stubs first; the CEO may build anyway).
- **DB gate:** if `increments/NNN/DB_CHANGES.md` exists and is not `approved`, migration/backfill tasks are NOT dispatched — no exceptions, the CEO approves via /hele-plan first. Other tasks may proceed.
- Load: the plan, the PRD, the DESIGN_SPEC (if any), `LEARNINGS.md`, `settings.json` (`agents.maxParallel`, `agents.models`). Set `state.json.phase: "building"`.
</context>

<phase name="1-dispatch-loop">
Repeat until no tasks remain:
1. `bd ready` → tasks whose dependencies are done. Dispatch up to `agents.maxParallel` in parallel.
2. Each engineer task = one subagent (Agent tool). The dispatch `description` MUST carry the persona and the task — `[AGENT BE] Cho — T3: inventory API routes` — so the CEO can tell who is working on what in the task list. Prompt assembled from:
   - the persona file content (`agents/backend-cho.md` / `frontend-van-pelt.md` / `security-jane.md` / `infra-rigsby.md`) — paths rewritten absolute;
   - the task block from the plan (description, files, tests, beads id) + the relevant PRD rules + relevant LEARNINGS;
   - for Van Pelt: the DESIGN_SPEC screens for her task, its `tool` value, and the artboard links/ids — with the explicit instruction to fetch the artboards through that tool (Paper/Figma MCP) and implement from what they actually show, per her persona's fidelity rules;
   - the contract: **TDD — failing test first where the task defines behavior; done = YOUR tests pass; report files touched + test results; never widen scope. Run ONLY the tests covering your task (targeted paths/files) — NEVER the full suite mid-build; the full suite runs exactly once, at the end.**
   Model per agent from `settings.agents.models` — values are Agent-tool model names (`fable` / `opus` / `sonnet` / `haiku`); pass as the dispatch `model`. `inherit` or missing → omit. Cost discipline: engineers (cho, van-pelt, rigsby) and red-john default to `sonnet`; jane defaults to `fable` — NEVER dispatch an engineer without reading the model from settings. Announce each dispatch in one line (chat-reports.md style).
3. On return: Lisbon reviews shape (placement, patterns, simplicity — fix-ups become follow-up dispatches, not her commits); Hightower checks the output against the PRD rules the task serves. Task done → close the beads issue.
   **Migration/backfill tasks get one extra gate before closing:** dispatch `[AGENT DBA] Red John` (`agents/dba-red-john.md`) to check the written migration against the approved DB_CHANGES. Mismatch → back to Cho; a genuinely necessary deviation → DB_CHANGES patch + CEO re-approval before the task closes. After the migration is applied, Red John updates the living map `.hele/DATABASE.md`.
4. Blocked or product-ambiguous → the question comes to the CEO immediately (AskUserQuestion), work continues on other ready tasks meanwhile.
</phase>

<phase name="2-verify">
1. NOW — and only now — run the project's full automated test suite + linter, once. Everything green is the exit condition; failures route back to the owning engineer as new dispatches (which again run targeted tests; re-run the full suite only when they all return).
2. Mark the plan `status: built`, close the epic if all tasks are done, set `state.json.phase: "built"`.
</phase>

<phase name="3-pm-report">
Hightower's PM Report (persona block), as chat text — outcome, what was verified how (test counts per task), what the CEO should try manually, remaining/blocked items with owners.

▶ NEXT: /hele-qa — Agent Wylie runs the full stub suite in the browser
</phase>

<rules>
- Engineers never mark a beads task done with failing or skipped tests — the loop enforces it by re-checking, not by trusting.
- **Full suite discipline:** targeted tests per task, full suite exactly once in phase 2. An engineer running the whole suite mid-task is burning the machine — the loop tells them the targeted paths in the dispatch prompt.
- Scope creep discovered mid-build → new beads issue + CEO visibility, never silently absorbed.
- Nothing here edits `.hele/` docs except statuses — plans and PRDs change via their own skills.
- Interrupted session? Re-run /hele-build: beads state + plan `beads=` ids make the loop resumable.
</rules>
