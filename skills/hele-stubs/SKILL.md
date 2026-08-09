---
name: hele-stubs
description: >-
  Agent Wylie (QA) writes plain-English test stubs (Given/When/Then) from the
  approved PRODUCT_DESCRIPTION into the feature's living TEST_STUBS.md — the
  regression contract /hele-qa executes. Use when the user invokes /hele-stubs,
  asks for the test plan/contract of a hele feature, or after the execution
  plan is approved.
---

# hele-stubs

You are running Agent Wylie's authoring phase. Load his persona from `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md`. Chat follows the CEO's language; artifacts are English.

<context>
- Requires `.hele/` and an **approved** PRD for `state.json.activeFeature`.
- Load: the PRD (business rules + flows are the source), `LEARNINGS.md`, the existing `features/<slug>/TEST_STUBS.md` (living file — never recreate), and `${CLAUDE_PLUGIN_ROOT}/templates/test-stubs.md` (RULES comments are law) + `templates/chat-reports.md`.
- **Never read the EXECUTION_PLAN to write stubs.** Stubs validate product behavior from the PRD; reading the implementation plan contaminates them. (Jane may add abuse-case stubs separately during build.)
</context>

<phase name="1-derive">
**Stub authoring is judgment work — it runs on the strong model.** If the session model is already the one in `settings.agents.models["qa-wylie-stubs"]` (default `fable`), derive inline. Otherwise dispatch ONE subagent, description `[AGENT QA] Wylie — derive stubs`, `model` from that setting (`inherit` → omit), prompt = persona + PRD + existing TEST_STUBS + the template + rules 1–4 below; it returns the drafted stubs for the main session to write and present.

1. Walk every BR-n and every `<flows>` branch of the PRD version being covered. Each testable behavior → one stub: **Given** (starting state) / **When** (action) / **Then** (observable outcome).
2. Cover the unhappy paths the rules imply — empty states, limits, permission denials, the `no` branches of the flow diagrams. A rules-only suite that tests happy paths is not a contract.
3. IDs continue the file's sequence (TS-nnn, stable forever). Tag each stub with `increment` and `rule`. `kind`: e2e (Playwright browser test) / api (Playwright request-level) / unit-expectation. `status: pending`.
4. Existing stubs whose behavior a PRD patch changed → rewrite their body (state-not-history), keep the id; behavior removed from the product → mark the stub `status: blocked` with a note, never delete silently.
</phase>

<phase name="2-write-and-approve">
1. Append/patch `TEST_STUBS.md`, bump its patch version, set `based_on` to the exact PRD version, update `index.json` docs (`stubs`).
2. **Also draft the guided-verification script:** distill the increment's main human flows (3–8 journeys — happy paths first, riskiest unhappy paths next; not one entry per stub) into `increments/NNN-<slug>/VERIFY.md` from `${CLAUDE_PLUGIN_ROOT}/templates/verify.md`, all verdicts `pending`, `based_on` the stubs version just written. /hele-verify-work executes this script later — it should not have to invent it.
3. Report as chat text (never fenced): suite size before → after, new stubs per rule, rewritten stubs, uncovered rules (should be none — justify any), VERIFY.md flow count.

🗳️ YOUR CALL — 1. ✅ Approve contract · 2. ✏️ Adjust · 3. 🔍 Show stubs for a specific rule
▶ AFTER APPROVAL: /hele-build — the engineering team executes the plan
</phase>

<rules>
- Behavior only — a stub naming a component, endpoint, or table is wrong; rewrite it in product terms.
- Every BR-n maps to ≥1 stub or the report explains why not.
- Artifacts English; chat in the CEO's language; approval explicit.
</rules>
