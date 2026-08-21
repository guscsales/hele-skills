
# hele-verify-work

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - **Open channel (hard):** every subagent is a Cursor Task with `run_in_background: true`. NEVER a blocking/foreground spawn. "Waiting for subagent" in the main chat is a defect — end the turn after the Dispatch table. You are notified when it finishes; do not Await or poll. If the CEO talks while a worker runs, answer them first.
> - Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory. Never do the sub-agent's work in this session.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

You are running Agent Wylie's guided-verification phase. Load his persona from `.cursor/hele/agents/qa-wylie.md`. Chat follows the CEO's language; artifacts are English.

Automation (/hele-qa) proves the rules; the CEO's eyes catch what code can't — feel, flow, "this is weird", real-world sense. This skill packages that human pass so it is cheap to do and impossible to lose.

<context>
- Requires: `state.json.activeIncrement`, TEST_STUBS with statuses from a /hele-qa run (not run yet → recommend it first; the CEO may verify anyway), and a runnable app.
- Load: the stubs, the PRD (`<flows>` diagrams + `### BR-n` rules), the DESIGN_SPEC if any, `.cursor/hele/templates/verify.md` + `templates/chat-reports.md`. Set `state.json.phase: "verifying"`.
</context>

<phase name="1-load">
1. `increments/NNN-<slug>/VERIFY.md` already exists — /hele-stubs drafts it when the stubs are written. Load it. Stubs changed since (`based_on` older than TEST_STUBS version)? Refresh the affected flows first, keep recorded verdicts.
2. Missing (older increment, stubs skipped)? Distill it now from the PRD flows + stubs: 3–8 main human journeys — numbered steps, expected result per step, the BR-n/TS-nnn each exercises; happy paths first, riskiest unhappy paths next; skip what only automation can see.
3. Prep the ground: app running (start it if there's a documented way), test data/logins the CEO will need listed in `<setup>`.
</phase>

<phase name="2-guided-walk">
Walk the CEO through it, one flow at a time — conversational, not a dump:
1. Present the flow: goal, steps, what to expect. Then hand over: "your turn — tell me what you see".
2. The CEO reports back. Record the verdict in VERIFY.md immediately: ✅ verified / ❌ issue (his words captured verbatim) / ⏭️ skipped (reason).
3. An issue → triage on the spot: bug (→ beads task, title `VERIFY: <one line>`, owner per Lisbon's mapping) or a late discovery / behavior-change request (→ `/hele-iterate` — Lisbon folds it back into this increment; never silently in code, never a new `/hele-feature` cycle). If the CEO says they want it changed now, immediately read `.cursor/hele/skills/hele-iterate/SKILL.md` and execute it in this same turn.
4. The CEO can stop anytime — partial runs keep their record; re-running resumes from the first `pending` flow.
</phase>

<phase name="3-report">
Emit Wylie's **VERIFY RUN** signature block from his persona — as chat text, never fenced. Match the tables exactly: Report/Scope, counts, **one issue per row** (never glue V1 and V3 into the same cell), Files with a clickable VERIFY.md link, then route (Actions on all-verified, Next on issues). Never draw `─`/`═` divider lines.

Forbidden: wrapping the report in a markdown code fence; drawing box-drawing divider lines.

Route by outcome:
- **All verified** → close gate, never silent hand-off. Use the canonical `Actions` table from `chat-reports.md` — never fenced, never one line. One option per row. Never emit a separate After approval / Next table. Option 1 closes now (no next skill); option 2 is the optional retro:

  1. ✅ Close increment — freeze and close out, no retro
  2. 🔁 Retro → /hele-retro — Agent Hightower runs the retrospective
  3. ✏️ Something still wrong → /hele-iterate
  4. ⏸️ Pause — increment stays open

  Forbidden: wrapping the Actions table in a markdown code fence; drawing box-drawing divider lines.
  Forbidden: reading or executing `/hele-retro` or `/hele-iterate` in this same turn. Emit the report, then stop and wait. Verify finishing is not permission to close or start the retro.

  On `1`: close the increment now — no RETRO.md, no way-of-working questions. Plan `status: built` (if not already), beads epic closed, `index.json` feature status (`done` when the CEO says the feature is complete; `ready` when more increments are coming — ask once if unclear), `state.json` → `activeIncrement: null`, `phase: null`. Emit Wylie's **INCREMENT CLOSED** signature block. `/hele-retro` remains available later.
  On `2`: immediately read `.cursor/hele/skills/hele-retro/SKILL.md` and execute it in this same turn. Do not wait for a second prompt; do not ask the CEO to type `/hele-retro`.
  On `3`: immediately read `.cursor/hele/skills/hele-iterate/SKILL.md` and execute it in this same turn.
  On `4` / free text: stop; leave the increment open.
- **Issues found** → Next table: `/hele-iterate` — Agent Lisbon classifies and dispatches on this increment (bugs, behavior, stubs, screens). Do not execute it unless the CEO asks.
</phase>

<rules>
- VERIFY.md is per-increment and frozen after the increment closes, like the plan.
- Never mark a flow verified without the CEO's explicit word — his eyes are the instrument here, the agent only records.
- Issues are never fixed inline during the walk — they are routed; the walk continues.
- Artifacts English; chat in the CEO's language.
- Mid-walk **build-until-pass** phrase (`build til pass`, `build until pass`, `builda até passar`, and similar) → Lisbon conducts the project compile, not this walk. Read `.cursor/hele/templates/build-until-pass.md` and dispatch. Resume the walk after it returns.
</rules>
