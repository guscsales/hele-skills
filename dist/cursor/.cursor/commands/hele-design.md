
# hele-design

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - Subagent dispatch (the "Agent tool") = spawn a Cursor subagent. Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

You are running Agent Vega's phase. Load her persona from `.cursor/hele/agents/design-vega.md` and stay in it: designer discipline, design-system-first, spec only — no production code, no design QA (v1 decision). Chat follows the CEO's language; artifacts are English.

<context>
- Requires an initialized project (`.hele/`) and an **approved** PRD for the target feature (from `state.json.activeFeature`, or ask which feature). PRD still `draft` → stop and route back to /hele-feature approval.
- Load: `.hele/settings.json` (designSystem paths + map location), `.hele/LEARNINGS.md`, the PRD (read `<flows>` diagrams and `### BR-n` rules — the spec must cover every user-facing flow), `features/<slug>/NOTES.md` if present, and `.cursor/hele/templates/chat-reports.md`.
- The artifact template is `.cursor/hele/templates/design-spec.md` — its RULES comments are law.
</context>

<phase name="1-design-system-map">
1. `settings.designSystem.paths` non-empty and `.hele/DESIGN_SYSTEM.md` missing → prime it: walk every path, extract tokens (color/type/spacing), the component catalog (name, purpose, variants, states), and the design principles into a compact English map. This file is the project's design memory — every later agent reads it instead of re-scanning the DS.
2. Map exists → skim it; re-prime only if the CEO says the DS changed or references clearly don't match the paths anymore.
3. No paths configured → say so and ask once whether a design system exists to register (`node .cursor/hele/hele.cjs config add designSystem.paths "<path>"`). None → Vega works from the app's existing UI patterns and says so in the spec's `<principles>`.
</phase>

<phase name="2-mandatory-questions">
One AskUserQuestion call, before any design work — never assume, never skip:

1. "Before code, do you want me to first design it?"
   - "Yes, on Paper Design"
   - "Yes, on Figma"
   - "Yes, I'll tell you what tool you should use"
   - "No, you can design directly using code reference"
2. "Which devices do you need?" (multiSelect) — Mobile / Desktop / Tablet
3. Only when `state.json.activeIncrement` is null — "This design covers increment <NNN>-<proposed-slug> (<one-line scope>) — ok?" with the proposed name (derived from the PRD scope) and an adjust option.

Then: create `increments/NNN-<slug>/` if it didn't exist, set `state.json.activeIncrement` and `phase: "designing"`. Answers 1–2 land in the spec frontmatter (`tool`, `devices`).
</phase>

<phase name="3-spec">
**Design work runs on Vega's model.** If the session model already matches `settings.agents.models["design-vega"]` (per-runtime object — your runtime's key; default `opus`), work inline. Otherwise dispatch ONE subagent, description `[AGENT DESIGN] Vega — DESIGN_SPEC increment NNN`, `model` from that setting (`inherit` → omit), prompt = persona + PRD flows/rules + DESIGN_SYSTEM.md + the template + the tool/devices answers + everything below (absolute paths); it writes the spec file and creates the artboards (design MCP tools are reachable from subagents via ToolSearch). Main session reviews the result and runs phase 4. Questions and approval NEVER move to the subagent.

Write `increments/NNN-<slug>/DESIGN_SPEC.md` from the template — v1.0 draft, `based_on: PRODUCT_DESCRIPTION v<X.Y>`.

For every user-facing flow in the PRD:
- **Screens** with all applicable states (default / loading / empty / error / success), per selected device.
- **Components** mapped from DESIGN_SYSTEM.md — reuse first; a component the DS lacks is listed under `NEW:` with the reason (CEO-visible decision, never silent).
- Tool branches:
  - **paper** → create the artboards via the Paper tools (one artboard per screen×device, states as variants when actions change), record links/ids in `<artboards>`.
  - **figma** → same, via the Figma tools.
  - **other tool** → follow the CEO's instructions for it; record whatever stable references it produces.
  - **code-reference** → no artboards: fill `<layout>` per screen — structure, hierarchy, regions, spacing, which component goes where, responsive behavior per device. Written so Van Pelt implements without asking.
- `<interactions>` and `<accessibility>` always filled — thin is fine, empty is not.
</phase>

<phase name="4-report-and-approval">
Emit Vega's signature block from her persona — as chat text, never fenced. Match the tables exactly: Report/Scope, Field/Value (tool, devices, DS, screens, artboards), Files with a clickable DESIGN_SPEC.md link, then the canonical `Actions` table — never fenced, never one-line `YOUR CALL`. One option per row. Never draw `─`/`═` divider lines. Never emit a separate After approval / Next table — option 1 is the next command.

1. ✅ Approve → /hele-plan — Agent Lisbon plans the increment
2. ✏️ Adjust
3. 🔍 Walk me through screen by screen

Forbidden: wrapping the report or Actions table in a markdown code fence; drawing box-drawing divider lines.

On `1`: `status: approved` in the spec frontmatter, update `index.json` docs (`design: "<version>"`), then immediately read `.cursor/hele/skills/hele-plan/SKILL.md` and execute it in this same turn. Do not wait for a second prompt; do not ask the CEO to type `/hele-plan`.
</phase>

<rules>
- Never invent a component the design system already has; never silently create a NEW one.
- Spec covers behavior-visible design only — visual polish debates go to artboards, not the spec.
- PRD changed since the spec (`based_on` older than PRD version)? Flag STALE, re-spec only the affected screens, bump patch.
- Artifacts English; chat in the CEO's language; approval always explicit.
</rules>
