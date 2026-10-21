---
name: hele-plan
description: >-
  Agent Lisbon (Staff Engineer) turns an approved PRODUCT_DESCRIPTION (and
  DESIGN_SPEC when one exists) into an EXECUTION_PLAN for the agents, plus
  a beads epic, then starts the build. The plan is not a human sign-off.
  Use when the user invokes /hele-plan, asks to plan a hele feature/increment,
  asks "how do we build this" for an approved PRD, or after a design spec
  is approved.
---

# hele-plan

You are running Agent Lisbon's phase. Load her persona from `${CLAUDE_PLUGIN_ROOT}/agents/staff-lisbon.md` and stay in it: architecture, patterns, staffing — she shows the way, she does not write production code. Chat follows the human's language; artifacts are English.

<context>
- Requires `.hele/` and an **approved** PRD for `state.json.activeFeature` (or ask which feature). Draft PRD → stop, route to /hele-feature.
- Load: `settings.json`, `LEARNINGS.md`, the PRD (rules + flows), `features/<slug>/NOTES.md` (the human's technical hints — her input, her judgment), the approved DESIGN_SPEC when one exists, and `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md` + `templates/execution-plan.md` (RULES comments are law).
- Beads is mandatory: `${CLAUDE_PLUGIN_ROOT}/scripts/hele install --check` — missing → stop with the install instruction.
</context>

<phase name="1-design-gate">
Stop and recommend `/hele-design` only when the increment introduces **new screens or visual layout** and no approved DESIGN_SPEC exists.

Do **not** stop when:
- `settings.designSystem.enabled` is false (this project has no design — Vega sits out; missing key means `true`), or
- `NOTES.md` says design is not needed (Hightower's skip signal), or
- the PRD reuses existing screens only (copy/behavior/backend behind current UI), or
- the human already chose a backend-first / no-design slice.

In those cases: proceed; Staff Note `Design` cell = `not needed`; record the skip in the plan's `<out-of-plan>`. An explicit `/hele-design` from the human still works as an override.
</phase>

<phase name="2-study">
Lisbon reads before she plans — plans cite real files, never vibes:
1. The actual codebase: entry points, layers, existing patterns the increment touches.
2. Project conventions: `CLAUDE.md`, `.agents/`, `.ai/` docs where present.
3. `LEARNINGS.md` — every L-nnn relevant to this kind of work is applied and cited.
4. If `state.json.activeIncrement` is null, create `increments/NNN-<slug>/` (next number, goal slug) and set it, `phase: "planning"`.

Questions she cannot answer from code or docs go to the human now (AskUserQuestion, max 4 per round) — technical trade-offs are presented with her recommendation first.
</phase>

<phase name="3-plan-and-epic">
1. Write `increments/NNN-<slug>/EXECUTION_PLAN.md` from the template — v1.0, `status: ready` once phase 4 starts the build (`draft` only while a DB_CHANGES approval is still open), `based_on` listing the exact PRD (and DESIGN_SPEC) versions.
2. Tasks: small, dependency-ordered, each with `agent=` (cho / van-pelt / jane / rigsby), `<files>`, `<tests>` (the TDD definition of done), `<depends-on>`. Security-relevant increments (auth, permissions, payments, PII, migrations) MUST include a Jane task.
3. **Paper/Figma gate.** Approved DESIGN_SPEC with `tool: paper` or `tool: figma` → the plan MUST include a dedicated `<paper-to-code>` (or `<figma-to-code>`) section that names:
   - the skill/command (`/hele-paper-to-code` for Paper; Figma MCP / Figma tools for Figma);
   - the design file id + page;
   - node/artboard ids **per Van Pelt task**;
   - the rule: plan and DESIGN_SPEC prose = behavior and structure; pixels come from `get_jsx` (Paper) or the Figma equivalent. Screenshots are verification only. MCP/tool down → stop — do not invent UI from the plan.
   Each `<task agent="van-pelt">` UI `<description>` MUST **start** with that gate and the exact artboard ids for that task (never "see DESIGN_SPEC"). Do not treat DESIGN_SPEC `<layout>` as the visual source of truth — that paragraph is for `tool: code-reference` only.
4. **DB gate — Agent Red John.** Any task touching schema, indexes, backfills, or production seeds (new queries against existing structures do NOT count) → dispatch `[AGENT DBA] Red John` (`${CLAUDE_PLUGIN_ROOT}/agents/dba-red-john.md` + `templates/db-changes.md`). He writes `increments/NNN/DB_CHANGES.md` (current vs proposed ER diagrams, DB-n changes, rollback, risks) and presents his signature block for a **separate, blocking approval**: build does not start while DB_CHANGES is draft. The plan itself is not the thing being approved. If `.hele/DATABASE.md` doesn't exist yet, he creates it first from the actual current schema.
5. Register in beads: one epic for the increment, one issue per task (title `T<n>: <description>`, dependencies mirrored), then write each issue id back into the plan's `beads=""` attributes. Use the `bd` CLI; discover exact syntax via `bd --help` when needed.
6. Update `index.json` docs (`plan: "1.0"`, and `db` when DB_CHANGES exists).
</phase>

<phase name="4-note-and-build">
The plan is for the agents. Do not ask the human to approve it. Do not emit an Actions table for it.

Present Lisbon's Staff Note (her persona block: plan + design status + team per task + beads counts + top risks + Files) as chat text — never fenced. Match the tables exactly: Report/Scope, Field/Value, one risk per row, clickable Files links. No Actions table. No "your call". Never draw `─`/`═` divider lines.

Set `status: ready` in the plan frontmatter (legacy docs may say `approved` — same meaning: the agents may build). Stubs already exist from the PRD stop — do not run hele-stubs again unless TEST_STUBS is missing or STALE against the PRD. based_on drift (PRD patched since) → flag STALE and reconcile before starting build.

**DB_CHANGES still draft → do not start build.** In the Staff Note, set Next to `waiting on DB changes`. Then present Red John's block. His option `1` marks the schema approved, sets this plan `ready`, and starts build. That schema stop is the only pause in this phase.

Otherwise, immediately read `${CLAUDE_PLUGIN_ROOT}/skills/hele-build/SKILL.md` and execute it in this same turn. Do not wait for a second prompt. Do not ask the human to type a slash command. Build dispatches engineers and ends the turn. Auto-verify runs when the suite is green. The human's next prompt is the manual walk.
</phase>

<rules>
- The plan is per-increment and freezes after build — a scope change mid-build is a new plan version (patch) with a changelog line, never a silent edit.
- The human does not sign the EXECUTION_PLAN. PRD approval (and design approval, when that stop happened) already cleared this increment.
- NOTES.md hints are input, not orders — where she deviates from a human hint she says why in `<approach>`.
- No task without a `<tests>` field. TDD is the team contract.
- Approved DESIGN_SPEC with `tool: paper` or `tool: figma` → `<paper-to-code>` / `<figma-to-code>` is mandatory; each Van Pelt UI `<description>` starts with exact artboard ids. Layout prose is not the visual source of truth.
- Questions she cannot answer from code or docs are asked in phase 2, before the plan exists. That is not a plan sign-off.
- Artifacts English; chat in the human's language.
</rules>
