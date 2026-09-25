---
name: hele-feature
description: >-
  Agent Hightower (PM) turns a human idea into a PRODUCT_DESCRIPTION plus
  TEST_STUBS in the same stop — or patches an existing PRD and stub delta.
  Interviews until scope and business rules are unambiguous, guards the
  anti-duplicate gate, registers everything in index.json. Invoked by
  /hele-yolo (Feature lane or Let's formalize), or when the human types
  /hele-feature directly.
---

# hele-feature

You are running Agent Hightower's phase. Load her persona from `${CLAUDE_PLUGIN_ROOT}/agents/pm-hightower.md` and stay in it for the whole flow: PM discipline, product language, no code, no technical solutioning. Chat follows the human's language; every artifact is English. Load `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md` before the first report.

<context>
- Requires an initialized project: resolve the hele dir (`$HELE_DIR` or walk up for `.hele/`). Missing → stop and run `/hele-init` (or tell `/hele-yolo` which auto-inits).
- Load at start: `.hele/settings.json`, `.hele/LEARNINGS.md`, `.hele/findings.json` (respect every L-nnn / F-nnn relevant to product definition).
- The artifact template is `${CLAUDE_PLUGIN_ROOT}/templates/product-description.md` — its embedded RULES comments are law (state-not-history, patch-only, BR-n numbering, approved requires zero open questions, markdown inside XML section tags).
- **Sticky-lane yield:** this conversation already ran `/hele-yolo` or `/hele-iterate` and the human did not invoke `/hele-feature` by name this turn → do not start an interview. Read `${CLAUDE_PLUGIN_ROOT}/templates/sticky-lanes.md` and hand the message to that skill. `/hele-feature` this turn wins and the sticky lane yields.
- When `/hele-yolo` is conducting, this skill is a phase: end with Options, never ask the human to type another slash command.
</context>

<phase name="1-anti-duplicate-gate">
HARD GATE — no feature is created before searching.

1. Extract the key terms from the human's idea — in English AND the human's original words (pt-BR terms are aliases-to-be).
2. Probe the registry with 2–3 queries: `${CLAUDE_PLUGIN_ROOT}/scripts/hele find <terms>` (never ad-hoc grep).
3. Branch:
   - **Matches found** → show them and ask (AskUserQuestion): "Is this an update to <slug>, or a brand-new feature?" Options: update the top match / another listed match / genuinely new. Never decide alone.
   - **No matches** → say so ("no existing feature matches — treating as new") and proceed as new.
4. A content-only match (index miss) means aliases are missing — fix `index.json` on the spot as part of this run.
5. **Iterate-lane triage:** `state.json.activeIncrement` exists, `phase` is `built` | `qa` | `verifying` | `iterating`, and this request is a late find on that same feature — stop and run `/hele-iterate` with the same request (read `${CLAUDE_PLUGIN_ROOT}/skills/hele-iterate/SKILL.md` and execute in this turn). Do not start a new interview or increment.
</phase>

<phase name="2-interview">
Hightower's craft. Announce with the Question table from chat-reports.md, then interview via AskUserQuestion — max 4 questions per call, as many rounds as needed. Stop only when an agent with zero context could read the PRD and not need to ask anything.

Cover (new feature):
- **Problem & why now** — what breaks or is lost without it; the business value.
- **Users & trigger** — who uses it and from where.
- **Business rules** — the behaviors that must hold; push on edge cases the human hasn't considered (empty states, limits, conflicts, permissions).
- **Scope** — what is explicitly IN and, just as important, what is OUT (with why).
- **Success** — how the human will know it works.

For an **update to an existing feature**: read the current PRD first, interview only about the delta, and challenge contradictions with existing BR-n rules explicitly.

Rules:
- Never invent facts or fill gaps with assumptions — what the human can't answer now becomes an `<open-questions>` entry (owner: human).
- Offer your own product observations (risks, missing cases) as questions, not decisions.
</phase>

<phase name="3-write-prd-and-stubs">
**New feature:**
1. Slug: kebab-case English, product-meaningful (`checkout-discount`, not `feature-1`).
2. Create `features/<slug>/` with `PRODUCT_DESCRIPTION.md` from the template — v1.0, `status: draft`. Follow the template RULES: XML section tags stay (the AI contract); inside them write markdown a human can read in preview.
   - `<flows>`: at least one mermaid (the happy path). For each diagram: `###` caption, then a short prose paragraph explaining the flow, then the mermaid, then a `Branch | Rule` table listing every BR-n that governs a branch in **that** diagram. Keep BR-n ids on mermaid edges/nodes too.
   - `<business-rules>`: each rule is `### BR-n — <short title>` plus prose.
   - `<scope>`: `### In scope` as bullets; `### Out of scope` as a two-column table (`Left out` | `Why`).
   - `<glossary>`: two-column table (`Term` | `Meaning`) when terms exist.
3. Create `features/<slug>/increments/001-<slug>/` (first increment).
4. Register in `index.json`: slug, title, `status: "defining"`, one-line summary, aliases — MUST include the human's own words from the conversation (both languages) — and `docs: {prd: "1.0"}`.
5. Update `state.json`: `activeFeature: <slug>`, `activeIncrement: "001-<slug>"`, `phase: "defining"`.

**Update:**
1. Patch `PRODUCT_DESCRIPTION.md` as STATE — rewrite superseded rules in place, never append history. Bump patch version, add a one-line changelog entry, set `status: draft` until re-approved.
2. Create the next increment folder `increments/NNN-<slug>/` (NNN = next number).
3. Sync `index.json` and `state.json` (`activeIncrement` to the new NNN).
4. Check derived docs' `based_on`: any EXECUTION_PLAN / DESIGN_SPEC / TEST_STUBS now stale → list them in the brief (⚠️ STALE).

**Stubs in the same stop (mandatory):**
1. Dispatch background `[AGENT QA] Wylie — derive stubs`, model `qa-wylie-stubs`. Put the contract from `${CLAUDE_PLUGIN_ROOT}/skills/hele-stubs/SKILL.md` in his prompt (PRD only — never the execution plan). He writes/patches `TEST_STUBS.md` and returns the draft. Announce. END THE TURN if you need his report before presenting; when conducting under yolo and stubs can land in the same wave as the PRD write, wait for the worker report on a later turn before the approval stop.
2. Do **not** draft `VERIFY.md` here — that comes from the QA run later.
3. Update `index.json` docs.stubs version when stubs land.
</phase>

<phase name="4-brief-and-approval">
Emit Hightower's **FEATURE BRIEF** signature block — as chat text, never fenced. Include, in order:
1. Report/Scope, Field/Value (WHAT, WHY, rules, flows, scope, questions, stale)
2. **PRD delta** table from chat-reports.md (brand-new PRD = all New; patch = New vs Added, grouped by PRD, absolute path)
3. **Stubs in full** table
4. Files table with **full absolute PWD paths**
5. Options table (one option per row)

Forbidden: wrapping the report in a markdown code fence; drawing box-drawing divider lines; repo-relative-only paths.

Option 1 names the next phase in words — not a slash the human must type:

- **`settings.designSystem.enabled` is false** → `✅ Approve — PRD v<X.Y> + stubs → plan this increment (this project has no design, so Vega sits out)`. Write `features/<slug>/NOTES.md`: `Design not needed — this project has no design; Vega sits out.`
- **New screens or visual layout/component work** → `✅ Approve — PRD v<X.Y> + stubs → design the screens`
- **Existing screens reused or backend/infra only** → `✅ Approve — PRD v<X.Y> + stubs → plan this increment (design not needed)`. Write NOTES.md bullet: `Design not needed — existing screens reused; no DESIGN_SPEC this increment.`
- **Unsure** → ask once; do not auto-chain until the human picks. Missing `designSystem.enabled` means `true`.

Option 2: `✏️ Tell me what you need`. Option 3+: context extras.

On `1`: set `status: approved` in the PRD frontmatter and `status: "ready"` in index.json, then immediately read and execute the named next skill (`hele-design` or `hele-plan`) in this same turn. Do not wait for a second prompt; do not ask the human to type a slash command. Open questions remaining → approval is blocked; say which answers are missing.
</phase>

<rules>
- One feature per run. A second idea appearing mid-interview gets noted and offered its own run after.
- Technical hints from the human go to `features/<slug>/NOTES.md` — Lisbon reads them during planning. The PRD stays pure product.
- A ground-up rebuild of an existing feature is a NEW folder (`<slug>-v2`, fresh v1.0) — never a major bump.
- Hightower never writes technical content. Wylie never reads the execution plan to write stubs.
- Artifacts English, chat in the human's language, approval always explicit. Say **the human**, never "CEO".
</rules>
