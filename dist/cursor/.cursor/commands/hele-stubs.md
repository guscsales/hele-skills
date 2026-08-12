
# hele-stubs

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - Subagent dispatch (the "Agent tool") = spawn a Cursor subagent. Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

You are running Agent Wylie's authoring phase. Load his persona from `.cursor/hele/agents/qa-wylie.md`. Chat follows the CEO's language; artifacts are English.

<context>
- Requires `.hele/` and an **approved** PRD for `state.json.activeFeature`.
- Load: the PRD (business rules + flows are the source), `LEARNINGS.md`, the existing `features/<slug>/TEST_STUBS.md` (living file — never recreate), and `.cursor/hele/templates/test-stubs.md` (RULES comments are law) + `templates/chat-reports.md`.
- **Never read the EXECUTION_PLAN to write stubs.** Stubs validate product behavior from the PRD; reading the implementation plan contaminates them. (Jane may add abuse-case stubs separately during build.)
</context>

<phase name="1-derive">
**Stub authoring is judgment work — it runs on the strong model.** If the session model is already the one in `settings.agents.models["qa-wylie-stubs"]` (per-runtime object — your runtime's key; default `fable`), derive inline. Otherwise dispatch ONE subagent, description `[AGENT QA] Wylie — derive stubs`, `model` from that setting (`inherit` → omit), prompt = persona + PRD + existing TEST_STUBS + the template + rules 1–4 below; it returns the drafted stubs for the main session to write and present.

1. Walk every BR-n and every `<flows>` branch of the PRD version being covered. Each testable behavior → one stub: **Given** (starting state) / **When** (action) / **Then** (observable outcome).
2. Cover the unhappy paths the rules imply — empty states, limits, permission denials, the `no` branches of the flow diagrams. A rules-only suite that tests happy paths is not a contract.
3. IDs continue the file's sequence (TS-nnn, stable forever). Tag each stub with `increment` and `rule`. `kind`: e2e (Playwright browser test) / api (Playwright request-level) / unit-expectation. `status: pending`.
4. Existing stubs whose behavior a PRD patch changed → rewrite their body (state-not-history), keep the id; behavior removed from the product → mark the stub `status: blocked` with a note, never delete silently.
</phase>

<phase name="2-write-and-approve">
1. Append/patch `TEST_STUBS.md`, bump its patch version, set `based_on` to the exact PRD version, update `index.json` docs (`stubs`).
2. **Also draft the guided-verification script:** distill the increment's main human flows (3–8 journeys — happy paths first, riskiest unhappy paths next; not one entry per stub) into `increments/NNN-<slug>/VERIFY.md` from `.cursor/hele/templates/verify.md`, all verdicts `pending`, `based_on` the stubs version just written. /hele-verify-work executes this script later — it should not have to invent it.
3. Emit Wylie's **STUBS** signature block from his persona — as chat text, never fenced. Match the shape exactly: blank dividers, suite delta + VERIFY flow count, 📄 Files links, then the multi-line `🗳️ YOUR CALL` (never `YOUR CALL — 1. · 2. · 3.` on one line).
</phase>

<rules>
- Behavior only — a stub naming a component, endpoint, or table is wrong; rewrite it in product terms.
- Every BR-n maps to ≥1 stub or the report explains why not.
- Artifacts English; chat in the CEO's language; approval explicit.
</rules>
