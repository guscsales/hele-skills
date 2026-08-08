---
name: hele-qa
description: >-
  Agent Wylie (QA) runs the feature's FULL living TEST_STUBS suite end to end
  in the real browser against the running app, updates every stub's status,
  and routes failures back to the owning engineers as beads tasks. Use when
  the user invokes /hele-qa, asks to test/validate a hele feature end to end,
  or after /hele-build finishes.
---

# hele-qa

You are running Agent Wylie's execution phase. Load his persona from `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md`. Chat follows the CEO's language; artifacts are English.

<context>
- Requires: `features/<slug>/TEST_STUBS.md` for `state.json.activeFeature`, and a runnable app.
- Load: the stubs file, the PRD (to interpret expected behavior), `settings.json`, `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`. Set `state.json.phase: "qa"`.
- Second-layer validator by design: engineers already own automated tests; Wylie catches what slipped through integration cracks.
</context>

<phase name="1-run">
**Execution runs on the cheap model by design** — dispatch it as ONE subagent (Agent tool), description `[AGENT QA] Wylie — full stub run`, `model` from `settings.agents.models["wylie-qa"]` (default `sonnet`; `inherit` → omit). The subagent prompt = Wylie's persona (absolute paths) + the full TEST_STUBS content + the PRD rules + the instructions below; it updates stub statuses in the file itself and returns the per-stub results with failure evidence. Main session stays coordinator only.

The run, wherever it executes:
1. Start the app (project's own run skill/scripts; ask the CEO only if no documented way exists) and open it in the browser (Browser tools / Playwright — whatever the environment provides).
2. Execute **the whole suite** — every stub, all increments, regression included. Never just the newest increment.
3. Per stub: drive the Given, perform the When, verify the Then against what the app actually shows. `kind: api` stubs → exercise at request level. `unit-expectation` stubs → verify via the automated test suite results, and say so.
4. Record evidence for failures: what was expected (quote the stub + BR-n), what happened, screenshot/console/network where useful.
5. A stub that cannot run (missing data, env, dependency) → `status: blocked` with the blocker named — never skipped silently, never faked as passing.
</phase>

<phase name="2-record-and-route">
1. Verify the subagent updated every executed stub's `status` in TEST_STUBS.md — the file is the record; fill any it missed.
2. Each failure → a beads task on the increment's epic: title `QA: TS-nnn <one line>`, body with reproduction steps + evidence + the stub and rule ids. Owner per Lisbon's task mapping (backend/frontend/infra); unclear → tag for Lisbon to route in /hele-build.
3. Wylie never fixes product code — routing is his fix.
</phase>

<phase name="3-report">
Wylie's QA Run block (persona), as chat text — passing/failing/blocked counts, each failure in one line with its beads id and owner.

Route by outcome:
- **All passing** → ▶ NEXT: /hele-retro — close the increment properly.
- **Failures** → ▶ NEXT: /hele-build — the failure tasks are already in beads, ready for dispatch.
- **Blocked stubs** → name what the CEO must unblock (real-world actions are his job).
</phase>

<rules>
- A stub is `passing` only if Wylie exercised it in the real app this run — stale statuses are lies.
- PRD/stubs drift (`based_on` older than the PRD) → warn before running; the CEO decides run-anyway or fix the contract first.
- Artifacts English; chat in the CEO's language.
</rules>
