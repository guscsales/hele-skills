
# hele-init

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - Subagent dispatch (the "Agent tool") = spawn a Cursor subagent **in the background** (async / do not block the parent turn). Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory. The main chat stays free. Never do the sub-agent's work in this session.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

Bootstrap the hele harness. Idempotent: safe to run on an already-initialized project — it reports state and fills gaps, it never overwrites existing files.

<context>
hele's core belief: agents have no memory, so every project carries its own. The `.hele/` directory is that memory — settings, feature registry, learnings, and per-feature docs. This skill creates the skeleton; the other /hele-* skills fill it.

Plugin resources referenced below live at `.cursor/hele` (templates in `templates/`, scripts in `scripts/`). Chat output follows `.cursor/hele/templates/chat-reports.md`: chat in the CEO's language, artifacts always in English.
</context>

<phase name="0-detect">
1. Resolve the hele directory: `$HELE_DIR` env var if set, else `.hele/` at the project root (walk up to the git root if needed).
2. If it already exists: read `settings.json`, check which standard files are missing (`index.json`, `state.json`, `LEARNINGS.md`, `features/`), create ONLY the missing ones, then skip to phase 3 and report what was found vs. filled. Never overwrite an existing `.hele/` file. Exception: always rewrite the harness-owned session rule in step 5 (`.cursor/rules/hele-session.mdc`, `.claude/rules/hele-session.md`) from the current templates.
3. If the project is not a git repository, note it in the report (recommend git — `.hele/` is memory and belongs in version control) but do not run `git init` without asking.
</phase>

<phase name="1-interview">
Ask the CEO before creating anything (AskUserQuestion — one call, both questions):

1. "What should the harness folder be called?" (skip when the directory already exists)
   - ".hele (Recommended)" — the default; the CLI and docs assume it
   - ".harness"
   - ".memory"
   (the CEO can always type another name via Other)
2. "Does this project have a design system Agent Vega should learn?"
   - "Yes — I'll provide the path(s)" (follow up: collect the path(s), store as array in `designSystem.paths`)
   - "No design system yet"

Do NOT ask about task tracking — beads is the harness standard, not a choice. Do not re-ask questions whose answers already exist in `settings.json` (idempotent runs).
</phase>

<phase name="2-create">
1. Create the directory structure:
   ```
   .hele/
     settings.json      ← from .cursor/hele/templates/settings.json, patched with interview answers
     index.json         ← {"features": []}
     state.json         ← {"activeFeature": null, "activeIncrement": null, "phase": null, "updated": "<ISO date>"}
     LEARNINGS.md       ← header only (see below)
     features/          ← empty dir (add .gitkeep)
   ```
   Use the chosen folder name everywhere `.hele/` appears; set `settings.dirName` to it. **Name other than `.hele`** → also write `.helerc` at the project root: `{"dirName": "<name>"}` — the pointer the CLI and every skill use to find the harness dir. The sticky-lane rules in step 5 live at the project root (`.cursor/rules/`, `.claude/rules/`), not inside the harness folder — the runtimes only auto-load rules from those paths.
2. `LEARNINGS.md` header:
   ```markdown
   # Learnings

   Promoted from increment retros by /hele-retro. Every hele skill loads this
   file at start. Stable IDs, one learning per line, never delete — supersede
   with a new entry referencing the old one.
   ```
3. Beads is mandatory — the harness's task tracker, never optional, never replaced by markdown tasks. Check with `node .cursor/hele/hele.cjs install --check`:
   - Present → run `bd init --quiet` at the project root if no beads database exists yet.
   - Missing → offer to install now (AskUserQuestion): run `node .cursor/hele/hele.cjs install` on yes; on no, give the command (`hele install`, or `brew install beads`) and mark the report `⚠️ beads missing — /hele-plan and /hele-build are blocked until installed`.
4. If design-system paths were provided: verify each path exists, store in `settings.designSystem.paths`, and recommend running `/hele-design` to let Vega build the map (do not run it automatically).
5. Session rule — sticky lanes + open channel. Concatenate `.cursor/hele/templates/sticky-lanes.md` then `.cursor/hele/templates/open-channel.md` into both of these (create parent dirs). **Always rewrite** these two files — they are harness-owned, not project memory:
   - `.cursor/rules/hele-session.mdc` — wrap that body in Cursor rule frontmatter:
     ```
     ---
     description: hele session — sticky lanes + open channel (doing work is always a background sub-agent)
     alwaysApply: true
     ---
     ```
   - `.claude/rules/hele-session.md` — the concatenated body as-is (Claude Code project rule).
</phase>

<phase name="3-report">
Render the Init report (chat-reports.md canonical block) as chat text — never fenced. Match the tables exactly: Report/Scope, Field/Value (folder, beads, design system), Files with a clickable markdown link per artifact, Next. Never draw `─`/`═` divider lines.

Forbidden: wrapping the report in a markdown code fence; drawing box-drawing divider lines.

If a design system was registered, add a second row to the Next table: `/hele-design — let Agent Vega map the design system`.
</phase>

<rules>
- Idempotent, always: existing files are never overwritten, existing answers never re-asked.
- All created artifacts are English; chat follows the CEO's language.
- No feature folders, no PRDs here — this skill only builds the skeleton.
</rules>
