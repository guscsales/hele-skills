---
name: hele-init
description: >-
  Bootstrap the hele harness in the current project — creates the .hele/
  directory (settings.json, index.json, state.json, LEARNINGS.md, features/),
  interviews the CEO about design system and beads, initializes the beads
  database, and reports readiness. Use when the user invokes /hele-init, says
  "set up hele", "initialize hele", or when any hele skill runs in a project
  that has no .hele directory yet.
---

# hele-init

Bootstrap the hele harness. Idempotent: safe to run on an already-initialized project — it reports state and fills gaps, it never overwrites existing files.

<context>
hele's core belief: agents have no memory, so every project carries its own. The `.hele/` directory is that memory — settings, feature registry, learnings, and per-feature docs. This skill creates the skeleton; the other /hele-* skills fill it.

Plugin resources referenced below live at `${CLAUDE_PLUGIN_ROOT}` (templates in `templates/`, scripts in `scripts/`). Chat output follows `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`: chat in the CEO's language, artifacts always in English.
</context>

<phase name="0-detect">
1. Resolve the hele directory: `$HELE_DIR` env var if set, else `.hele/` at the project root (walk up to the git root if needed).
2. If it already exists: read `settings.json`, check which standard files are missing (`index.json`, `state.json`, `LEARNINGS.md`, `features/`), create ONLY the missing ones, then skip to phase 3 and report what was found vs. filled. Never overwrite an existing file.
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
     settings.json      ← from ${CLAUDE_PLUGIN_ROOT}/templates/settings.json, patched with interview answers
     index.json         ← {"features": []}
     state.json         ← {"activeFeature": null, "activeIncrement": null, "phase": null, "updated": "<ISO date>"}
     LEARNINGS.md       ← header only (see below)
     features/          ← empty dir (add .gitkeep)
   ```
   Use the chosen folder name everywhere `.hele/` appears; set `settings.dirName` to it. **Name other than `.hele`** → also write `.helerc` at the project root: `{"dirName": "<name>"}` — the pointer the CLI and every skill use to find the harness dir.
2. `LEARNINGS.md` header:
   ```markdown
   # Learnings

   Promoted from increment retros by /hele-retro. Every hele skill loads this
   file at start. Stable IDs, one learning per line, never delete — supersede
   with a new entry referencing the old one.
   ```
3. Beads is mandatory — the harness's task tracker, never optional, never replaced by markdown tasks. Check with `${CLAUDE_PLUGIN_ROOT}/scripts/hele install --check`:
   - Present → run `bd init --quiet` at the project root if no beads database exists yet.
   - Missing → offer to install now (AskUserQuestion): run `${CLAUDE_PLUGIN_ROOT}/scripts/hele install` on yes; on no, give the command (`hele install`, or `brew install beads`) and mark the report `⚠️ beads missing — /hele-plan and /hele-build are blocked until installed`.
4. If design-system paths were provided: verify each path exists, store in `settings.designSystem.paths`, and recommend running `/hele-design` to let Vega build the map (do not run it automatically).
</phase>

<phase name="3-report">
Report using the shared visual language:

```
══════════════════════════════════════════
🏗️ HELE INIT — <project name>
══════════════════════════════════════════
📁 .hele/             created | already existed
⚙️ settings.json      created (defaults + interview) | kept
🗂️ index.json         created (0 features) | kept (<n> features)
🧭 state.json         created | kept
🧠 LEARNINGS.md       created | kept (<n> learnings)
🧿 beads              ✅ bd <version> · db ready | ⚠️ not installed → <install hint>
🎨 design system      <n> path(s) registered | none
══════════════════════════════════════════
▶ NEXT: /hele-feature "<your idea>" — Agent Hightower takes it from there
```

Render each created/kept file line's name as a clickable markdown link to its path (e.g. `[settings.json](.hele/settings.json)`), per the Files rule in chat-reports.md.

If a design system was registered, add a second NEXT line: `▶ ALSO: /hele-design — let Agent Vega map the design system`.
</phase>

<rules>
- Idempotent, always: existing files are never overwritten, existing answers never re-asked.
- All created artifacts are English; chat follows the CEO's language.
- No feature folders, no PRDs here — this skill only builds the skeleton.
</rules>
