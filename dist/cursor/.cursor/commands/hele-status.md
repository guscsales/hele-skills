
# hele-status

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - Subagent dispatch (the "Agent tool") = spawn a Cursor subagent **in the background** (async / do not block the parent turn). Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory. The main chat stays free. Never do the sub-agent's work in this session.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

Read-only — this skill never writes anything. Chat follows the CEO's language. Load `.cursor/hele/templates/chat-reports.md` and emit the Status Board tables from it.

<phase name="1-collect">
1. Read `index.json`, `state.json`, and every feature's doc frontmatter (`features/*/PRODUCT_DESCRIPTION.md`, `TEST_STUBS.md`, `increments/*/EXECUTION_PLAN.md`, `DESIGN_SPEC.md`, `DB_CHANGES.md` — a draft DB_CHANGES on an active increment is a ⛔ blocker line).
2. Drift check per derived doc: `based_on` version < the current PRD version → STALE.
3. Index consistency: doc versions in `index.json` disagreeing with frontmatter → report as index drift (offer the fix, don't apply it here).
4. Beads: per active epic, counts by state (`bd` CLI). Stub counts by status from TEST_STUBS.md.
5. `LEARNINGS.md`: total count + newest id.
</phase>

<phase name="2-board">
Render the Status Board (chat-reports.md canonical block) as chat text — never fenced. Match the tables exactly: Report/Scope, Feature/Status (active first), Feature/Doc/Version/Health (version + ✅/⚠️ STALE + based_on; beads/stub counts on the active increment), Learnings count, Next. Never draw `─`/`═` divider lines.

Forbidden: wrapping the board in a markdown code fence; drawing box-drawing divider lines.

End with the Next table — the single most useful action given the state (e.g. stale plan → /hele-plan refresh; PRD draft → approve via /hele-feature; phase verifying with a late find → /hele-iterate; all green, no active increment → /hele-feature for the next idea).
</phase>

<rules>
- Facts only — no summaries of doc content, just versions, statuses, counts, drift.
- Fast: frontmatter + index + `bd` counts; never read full doc bodies.
</rules>
