---
name: hele-init
description: >-
  Bootstrap the hele harness in the current project. Creates .hele/
  (settings.json, index.json, features/), installs the sticky session rule
  so /hele stays in force, asks whether the project has design work, and
  runs hele install for beads. Use when the user invokes /hele-init, says
  "set up hele", or when /hele runs in a project that has no .hele/
  directory yet.
---

# hele-init

Bootstrap the hele harness. Idempotent: it fills gaps and never overwrites an existing file.

<context>
The `.hele/` directory holds settings, the feature registry, and the per-feature documents. This skill creates the skeleton. `/hele` and the phase skills fill it.

The folder is always `.hele/`. Do not ask for another name. Do not write `.helerc`.

Do not create `state.json`, `LEARNINGS.md`, `findings.json`, or `NOTES.md`. Do not write a status for a feature. If an older project still has those files, leave them on disk and do not read them.

Plugin resources live at `${CLAUDE_PLUGIN_ROOT}`. Chat follows `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`. Say **the human**. Never "CEO".
</context>

<phase name="0-detect">
1. The hele directory is `.hele/` at the project root (walk up to the git root if needed). `$HELE_DIR` overrides it when set.
2. If `.hele/` already exists: read `settings.json`, create only missing `index.json` (`{"features": []}`) and `features/` (with `.gitkeep`). Never overwrite an existing file. Always rewrite `.claude/rules/hele-session.md` from the current templates. Then migrate model keys (phase 2, step 3) and skip to the report.
3. If the project is not a git repository, say so (`.hele/` belongs in version control). Do not run `git init` without asking.
</phase>

<phase name="1-interview">
Ask once, before creating anything, and only when `.hele/` does not exist yet:

"Does this project have design work for Agent Vega?"
- "Yes — there's a design system; I'll provide the path(s)" → collect the paths, `designSystem.enabled: true`, `designSystem.paths` is that array
- "No design system yet — Vega still specs new screens" → `enabled: true`, `paths: []`
- "This project has no design — Vega stays out" → `enabled: false`, `paths: []`

Do not ask about the folder name. Do not ask about task tracking. Beads is the standard. Do not re-ask when `settings.json` already has `designSystem.enabled`.
</phase>

<phase name="2-create">
1. Create:
   ```
   .hele/
     settings.json      ← ${CLAUDE_PLUGIN_ROOT}/templates/settings.json, with the design answer applied
     index.json         ← {"features": []}
     features/          ← empty, plus .gitkeep
   ```
2. Beads is mandatory. Run `${CLAUDE_PLUGIN_ROOT}/scripts/hele install` at the project root. That command installs `bd` when it is missing and initializes the project database. Do not run `bd` yourself. On failure, the report says `⚠️ beads missing — plan and build are blocked until installed`.
3. When `settings.json` or `index.json` already exist, migrate them in place. Do not replace either file with the template. Model keys: if `agents.models` has `dba-red-john` and not `dba-hightower`, rename that key to `dba-hightower` and keep its value. Remove `pm-hightower` (Lisbon is `staff-lisbon`). Do not change any other model value. Index: delete a `status` field on each feature when one is present. Leave slug, summary, aliases, and doc versions.
4. Session rule. Concatenate `${CLAUDE_PLUGIN_ROOT}/templates/sticky-lanes.md` then `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md` into `.claude/rules/hele-session.md`. **Always rewrite** that file. Do not create `.cursor/`.
</phase>

<phase name="3-report">
Render the Init report from chat-reports.md as chat text. Files are clickable links. Never fence the report. Never draw box-drawing.

**Started by `/hele`:** after the report, continue the original ask in the same turn. No menu.

**Typed `/hele-init` alone:** Options — `1` Continue → `/hele "<your idea>"`; `2` Tell me what you need.
</phase>

<rules>
- Idempotent. Existing files are not replaced with the template. The session rule is always rewritten. Model keys and a leftover feature `status` in `index.json` are migrated in place. Existing design answers are never re-asked.
- Artifacts are English. Chat follows the human's language.
- No feature folders and no PRDs here.
</rules>
