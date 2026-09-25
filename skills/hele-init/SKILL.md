---
name: hele-init
description: >-
  Bootstrap the hele harness in the current project — creates the .hele/
  directory (settings.json, index.json, state.json, LEARNINGS.md,
  findings.json, features/), installs the sticky-lane session rule so
  /hele-yolo stays in force for follow-up prompts and "build until pass"
  phrases dispatch [AGENT] Summer, interviews the human about design system
  and beads, initializes the beads database, and reports readiness.
  Use when the user invokes /hele-init, says "set up hele", "initialize
  hele", or when /hele-yolo (or any hele skill) runs in a project that has
  no .hele directory yet — yolo auto-runs this before lane detection.
---

# hele-init

Bootstrap the hele harness. Idempotent: safe to run on an already-initialized project — it reports state and fills gaps, it never overwrites existing files.

<context>
hele's core belief: agents have no memory, so every project carries its own. The `.hele/` directory is that memory — settings, feature registry, learnings, findings, and per-feature docs. This skill creates the skeleton; `/hele-yolo` and the phase skills fill it.

Plugin resources live at `${CLAUDE_PLUGIN_ROOT}`. Chat output follows `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`: chat in the human's language, artifacts always in English. Say **the human**, never "CEO".
</context>

<phase name="0-detect">
1. Resolve the hele directory: `$HELE_DIR` env var if set, else `.hele/` at the project root (walk up to the git root if needed).
2. If it already exists: read `settings.json`, check which standard files are missing (`index.json`, `state.json`, `LEARNINGS.md`, `findings.json`, `features/`), create ONLY the missing ones, then skip to phase 3 and report what was found vs. filled. Never overwrite an existing `.hele/` file. Exception: always rewrite the harness-owned session rule in step 5 (`.claude/rules/hele-session.md` only) from the current templates.
3. If the project is not a git repository, note it in the report (recommend git — `.hele/` is memory and belongs in version control) but do not run `git init` without asking.
</phase>

<phase name="1-interview">
Ask the human before creating anything (AskUserQuestion — one call, both questions):

1. "What should the harness folder be called?" (skip when the directory already exists)
   - ".hele (Recommended)" — the default; the CLI and docs assume it
   - ".harness"
   - ".memory"
   (the human can always type another name via Other)
2. "Does this project have design work for Agent Vega?"
   - "Yes — there's a design system; I'll provide the path(s)" (follow up: collect the path(s), store as array in `designSystem.paths`, `designSystem.enabled: true`)
   - "No design system yet — Vega still specs new screens" (`enabled: true`, `paths: []`)
   - "This project has no design — Vega stays out" (`enabled: false`, `paths: []`)

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
     findings.json      ← []
     features/          ← empty dir (add .gitkeep)
   ```
   Use the chosen folder name everywhere `.hele/` appears; set `settings.dirName` to it. **Name other than `.hele`** → also write `.helerc` at the project root: `{"dirName": "<name>"}`. The sticky-lane rule in step 5 lives at the project root (`.claude/rules/` only).
2. `LEARNINGS.md` header:
   ```markdown
   # Learnings

   Promoted from session findings by /hele-yolo (and any explicit promote).
   Every hele skill loads this file at start. Stable IDs, one learning per
   line, never delete — supersede with a new entry referencing the old one.
   ```
3. `findings.json`: `[]` — append-only session findings (`F-nnn`) written during `/hele-yolo`.
4. Beads is mandatory. Check with `${CLAUDE_PLUGIN_ROOT}/scripts/hele install --check`:
   - Present → run `bd init --quiet` at the project root if no beads database exists yet.
   - Missing → offer to install now (AskUserQuestion): run `${CLAUDE_PLUGIN_ROOT}/scripts/hele install` on yes; on no, give the command (`hele install`, or `brew install beads`) and mark the report `⚠️ beads missing — plan and build are blocked until installed`.
5. Design setting from the interview, written into `settings.designSystem` (same as before). Missing `enabled` on an old settings file means `true`.
6. Session rule — sticky yolo + open channel. Concatenate `${CLAUDE_PLUGIN_ROOT}/templates/sticky-lanes.md` then `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md` into `.claude/rules/hele-session.md` (create parent dirs). **Always rewrite** that file. Claude Code only: do **not** create `.cursor/` or write a Cursor session rule.
</phase>

<phase name="3-report">
Render the Init report (chat-reports.md) as chat text — never fenced. Files table uses **full absolute PWD paths**. Never draw box-drawing divider lines.

**Started by `/hele-yolo`:** after the report, continue the original ask (lane detection) in the same turn. Do not offer a menu of skills.

**Typed `/hele-init` alone:** Options table — `1` Continue → `/hele-yolo "<your idea>"`; `2` Tell me what you need.
</phase>

<rules>
- Idempotent, always: existing files are never overwritten, existing answers never re-asked.
- All created artifacts are English; chat follows the human's language.
- No feature folders, no PRDs here — this skill only builds the skeleton.
</rules>
