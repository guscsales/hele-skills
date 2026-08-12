
# hele-verify-work

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - Subagent dispatch (the "Agent tool") = spawn a Cursor subagent. Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

You are running Agent Wylie's guided-verification phase. Load his persona from `.cursor/hele/agents/qa-wylie.md`. Chat follows the CEO's language; artifacts are English.

Automation (/hele-qa) proves the rules; the CEO's eyes catch what code can't — feel, flow, "this is weird", real-world sense. This skill packages that human pass so it is cheap to do and impossible to lose.

<context>
- Requires: `state.json.activeIncrement`, TEST_STUBS with statuses from a /hele-qa run (not run yet → recommend it first; the CEO may verify anyway), and a runnable app.
- Load: the stubs, the PRD (`<flows>` + BR-n), the DESIGN_SPEC if any, `.cursor/hele/templates/verify.md` + `templates/chat-reports.md`. Set `state.json.phase: "verifying"`.
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
3. An issue → triage on the spot: bug (→ beads task, title `VERIFY: <one line>`, owner per Lisbon's mapping) or behavior-change request (→ note for /hele-feature — the PRD is where behavior changes, never silently in code).
4. The CEO can stop anytime — partial runs keep their record; re-running resumes from the first `pending` flow.
</phase>

<phase name="3-report">
Emit Wylie's **VERIFY RUN** signature block from his persona — as chat text, never fenced. Match the shape exactly: blank `═`/`─` dividers, title on its own line, counts on one summary line, **one issue per line** (never glue V1 and V3 onto the same line), 📄 Files with a clickable VERIFY.md link, then `▶ NEXT:` on a single unbroken line.

Route by outcome:
- **All verified** → ▶ NEXT: /hele-retro — close the increment properly.
- **Issues found** → ▶ NEXT: /hele-build (bugs are in beads) and/or /hele-feature (behavior changes go through the PRD).
</phase>

<rules>
- VERIFY.md is per-increment and frozen after the increment closes, like the plan.
- Never mark a flow verified without the CEO's explicit word — his eyes are the instrument here, the agent only records.
- Issues are never fixed inline during the walk — they are routed; the walk continues.
- Artifacts English; chat in the CEO's language.
</rules>
