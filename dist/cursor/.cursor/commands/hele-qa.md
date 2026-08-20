
# hele-qa

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - Subagent dispatch (the "Agent tool") = spawn a Cursor subagent **in the background** (async / do not block the parent turn). Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory. The main chat stays free. Never do the sub-agent's work in this session.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

You are conducting Agent Wylie's automation phase: stubs become Playwright code. Load his persona from `.cursor/hele/agents/qa-wylie.md` and `.cursor/hele/templates/open-channel.md`. Writing specs and running the suite are **background** Wylie sub-agents. This session never runs Playwright or explores the e2e tree. Chat follows the CEO's language; artifacts are English.

AI driving a browser is flaky and expensive — it happens exactly once per stub, here, while WRITING the deterministic test. After this skill, the suite costs nothing to re-run forever. Human judgment is /hele-verify-work's job, after this passes.

<mode name="--generate-fixes-report">
Invoked as `/hele-qa --generate-fixes-report`: a QA run already happened but `increments/NNN/QA_REPORT.md` is missing or stale (older skill version, interrupted session). Do NOT re-run the suite — reconstruct:
1. Gather what exists: stub statuses in TEST_STUBS.md, open `QA:`-titled beads tasks (`bd list`), the last Playwright results/traces if present.
2. Classify every failing/blocked stub per phase-3 rules (product-bug / contract-question / polish / blocked). Evidence missing for a classification → ask the CEO, never guess.
3. Failing stubs with no beads task → create them now (product-bugs only), phase-3 format.
4. Write QA_REPORT.md from the template (this counts as the run's record), then run the phase-4 approval gate → `/hele-build --from-qa`.
</mode>

<context>
- Requires: `features/<slug>/TEST_STUBS.md` for `state.json.activeFeature`, and a runnable app.
- Load: the stubs file, the PRD (to interpret expected behavior), `settings.json`, `LEARNINGS.md`, `.cursor/hele/templates/chat-reports.md`. Set `state.json.phase: "qa"`.
- Second-layer validator by design: engineers already own unit/integration tests; the e2e suite catches what slipped through integration cracks.
</context>

<phase name="1-setup">
1. Detect the project's Playwright setup (`playwright.config.*`, e2e folder, npm scripts). Present → follow its conventions (folders, fixtures, auth helpers, naming). Absent → INSTALL IT, no asking: packages + browsers via the project's package manager (`npm init playwright@latest` equivalent), a `playwright.config` pointing at the project's dev server (`webServer` so the suite boots the app itself), an `e2e/` folder per project convention, and an `npm run test:e2e` script. Announce what was set up in one line.
2. Map stubs → spec files: one spec per flow/screen area, one `test()` per stub, the stub id ALWAYS in the title — `test('TS-012: seller cannot see other org inventory', ...)`. That title is the contract between the suite and TEST_STUBS.md.
</phase>

<phase name="2-write">
Dispatch **background** Wylie subagents to write the specs — description `[AGENT QA] Wylie — specs TS-nnn–TS-nnn`, `model` from `settings.agents.models["qa-wylie-run"]` (per-runtime object — your runtime's key; default `sonnet` in Claude Code; `inherit` → omit), up to `agents.maxParallel` in parallel, grouped by flow. Announce. Stay free. Prompt = persona + the stubs + the PRD rules + project conventions. Rules:
1. Cover every stub not yet implemented as a test: `kind: e2e` → browser spec; `kind: api` → Playwright request-context spec; `kind: unit-expectation` → NOT Playwright's job — verify the engineers' suite covers it and record which test does.
2. The stub is the contract — Given/When/Then maps to arrange/act/assert. Test what the stub says, not what the code does.
3. Deterministic by construction: proper waits (no sleeps), test data seeded/cleaned per test, no cross-test state leaks, stable selectors (roles/test-ids per project convention). Always headless — never `--headed`/`--ui`; failures explain themselves through traces and screenshots, not through a human watching a window.
4. Stubs already implemented (title `TS-nnn` exists in the e2e folder) are NOT rewritten — the suite accumulates like the stubs file does; a stub whose body changed → rewrite its test to match.
</phase>

<phase name="3-run-and-record">
1. `bd create` title `QA: full suite`. Dispatch **background** `[AGENT QA] Wylie — QA: full suite`, model `qa-wylie-run`. He runs the FULL Playwright suite — every spec, all increments, regression included (Playwright parallelizes itself; never a subagent per test at runtime) — and returns the per-stub results. You do not run Playwright in this session.
2. From his payload, echo results one line per stub: 🧪 TS-012 ✅ · 🧪 TS-013 ❌ expected empty-state, got blank screen.
3. Flaky on first pass → he retries once; still flaky → the TEST is wrong, fix the test, not the retry count.
4. He updates every stub's `status` in TEST_STUBS.md from the run results — the file is the record. A stub whose test cannot run (missing env, data, dependency) → `status: blocked` with the blocker named — never skipped silently.
5. **Classify every failure** — the class decides where it goes:
   - `product-bug` — the app breaks the stub's contract → beads task on the increment's epic: title `QA: TS-nnn <one line>`, body with the spec path, failure output, stub + rule ids. Owner per Lisbon's task mapping; unclear → tag for Lisbon to route.
   - `contract-question` — stub and product disagree and neither is obviously wrong → NO beads task yet; the CEO decides in phase 4.
   - `polish` — real observation, breaks no stub → listed for the CEO's now-or-backlog call.
   - `blocked` — couldn't run; the blocker named.
   Wylie never fixes product code — routing is his fix.
6. He writes `increments/NNN-<slug>/QA_REPORT.md` from `.cursor/hele/templates/qa-report.md` — EVERY run, green or red. Prose in product terms, no code: expected vs happened vs impact per failure, the classification, beads ids. State-not-history: latest run is the content, previous runs shrink to one line in `<history>`. You emit the chat signature from his payload — do not rewrite the report here.
</phase>

<phase name="4-report-and-route">
Emit Wylie's **QA RUN** signature block from his persona — as chat text, never fenced. Match the tables exactly: Report/Scope, counts, **one failure/blocked stub per row**, Files with a clickable QA_REPORT.md link, then route. Never draw `─`/`═` divider lines.

Forbidden: wrapping the report in a markdown code fence; drawing box-drawing divider lines.

Route by outcome:
- **All passing** → Next table: `/hele-verify-work` — guided human verification of the main flows.
- **Failures** → approval gate, never silent hand-back. Use the canonical `Actions` table from `chat-reports.md` — never fenced, never one line. One option per row. Never emit a separate After approval / Next table — option 1 is the next command:

  1. ✅ Approve fixes → /hele-build --from-qa
  2. ⚖️ Decide the contract-questions first (each: fix product, or PRD change via /hele-feature + stub rewrite)
  3. 🔍 Walk me through a failure

  Forbidden: wrapping the Actions table in a markdown code fence; drawing box-drawing divider lines.

  On `1`: immediately read `.cursor/hele/skills/hele-build/SKILL.md` and execute `/hele-build --from-qa` in this same turn. Do not wait for a second prompt; do not ask the CEO to type the slash command.

  Contract-questions MUST be decided before or together with approval — a build dispatched on an undecided contract builds the wrong thing.
- **Blocked stubs** → name what the CEO must unblock (real-world actions are his job).
</phase>

<rules>
- Open channel: this session never writes specs, runs Playwright, or explores the e2e tree. Wylie does that in the background.
- The e2e suite lives in the PROJECT (committed code, runnable in CI) — hele generates it, the repo owns it.
- A stub is `passing` only if its Playwright test ran green THIS run — stale statuses are lies.
- PRD/stubs drift (`based_on` older than the PRD) → warn before running; the CEO decides run-anyway or fix the contract first.
- Artifacts English; chat in the CEO's language.
</rules>
