---
name: hele-qa
description: >-
  Agent Wylie turns the feature's living TEST_STUBS into real Playwright e2e
  tests, runs ONLY the active increment's stubs, captures a screenshot per
  stub, and writes a human-readable QA_REPORT.md (no XML). Invoked by
  /hele-yolo after build, after /hele-iterate added or rewrote stubs, or when
  the human types /hele-qa / --generate-fixes-report.
---

# hele-qa

You are conducting Agent Wylie's automation phase: stubs become Playwright code with proof screenshots. Load his persona from `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md` and `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md`. Writing specs and running the suite are **background** Wylie sub-agents. This session never runs Playwright or explores the e2e tree. Chat follows the human's language; artifacts are English. Load `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`.

AI driving a browser is flaky and expensive — it happens exactly once per stub, here, while WRITING the deterministic test. After this skill, the suite costs nothing to re-run forever. Human judgment is /hele-verify-work's job, after this passes — and verify replays **this** QA_REPORT.

<mode name="--generate-fixes-report">
Invoked as `/hele-qa --generate-fixes-report`: a QA run already happened but `increments/NNN/QA_REPORT.md` is missing or stale. Do NOT re-run the suite — reconstruct from stub statuses, open `QA:` beads, Playwright traces/screenshots if present. Write QA_REPORT.md from the template (human-readable, no XML), then the approval Options → fix round.
</mode>

<context>
- Requires: `features/<slug>/TEST_STUBS.md` for `state.json.activeFeature`, and a runnable app.
- Load: the stubs file, the PRD, `settings.json`, `LEARNINGS.md`, findings.json. Set `state.json.phase: "qa"`.
- **Increment set:** stubs whose `increment` attribute matches `state.json.activeIncrement` (the NNN), plus any stub rewritten this increment. That is the only set this skill writes or runs. The rest of the living file is CI.
</context>

<phase name="1-setup">
1. Detect the project's Playwright setup (`playwright.config.*`, e2e folder, npm scripts). Present → follow its conventions. Absent → INSTALL IT, no asking: packages + browsers, config with `webServer`, `e2e/` folder, `test:e2e` script. Announce what was set up in one line.
2. Ensure `increments/NNN-<slug>/screenshots/` exists, and `.hele/tmp/captures/<slug>/<increment>/` for shots that will not be committed (`.hele/tmp/` is gitignored).
3. Map stubs → spec files: one spec per flow/screen area, one `test()` per stub, the stub id ALWAYS in the title — `test('TS-012: …', ...)`.
</phase>

<phase name="2-write">
Dispatch **background** Wylie subagents to write the specs — description `[AGENT QA] Wylie — specs TS-nnn–TS-nnn`, `model` from `settings.agents.models["qa-wylie-run"]`, up to `agents.maxParallel`, grouped by flow. Announce. Stay free. Prompt = persona + **the increment-set stubs** + the PRD rules + project conventions + screenshot contract:

1. Cover every increment-set stub not yet implemented: `kind: e2e` → browser spec; `kind: api` → request-context spec; `kind: unit-expectation` → verify engineers' suite covers it.
2. The stub is the contract — Given/When/Then maps to arrange/act/assert.
3. Deterministic: proper waits, seeded data, stable selectors. Always headless.
4. **Screenshot proof.** Capture every e2e stub, pass or fail. The frame is the settled screen, not the motion that got there.
   - Wait until the thing the stub proves is in its final state (the side panel open, the dialog up, the row gone). `toBeVisible` during a slide is too early.
   - Then wait until the page is still. Call this before every `screenshot`:

     ```js
     async function waitUntilStill(page) {
       await page.waitForLoadState('networkidle');
       await page.evaluate(async () => {
         const deadline = performance.now() + 5000;
         for (;;) {
           const running = document.getAnimations({ subtree: true })
             .filter((a) => a.playState === 'running' && a.effect?.getTiming?.().iterations !== Infinity);
           if (running.length === 0) return;
           const left = deadline - performance.now();
           if (left <= 0) {
             running.forEach((a) => a.finish());
             return;
           }
           await Promise.race([
             Promise.all(running.map((a) => a.finished.catch(() => {}))),
             new Promise((r) => setTimeout(r, left)),
           ]);
         }
       });
     }
     ```

     A spinner that loops forever is ignored. A drawer, fade, or layout shift is not. Shot mid-transition → delete it and take another after `waitUntilStill`.
   - Write the PNG to `increments/NNN-<slug>/screenshots/TS-nnn.png` first. Two stubs that finish on the same screen are captured at the moment that separates them (the toggled control, the new count), never the same pixels twice.
   - When the change is visible, also capture the key screen on the base (without this increment) as `before.png` and the same screen after as `after.png` — up to 3 pairs, `before-2.png` / `after-2.png`. No real before → say why in the report; do not fake one.
   - One `00-app-up.png` once the app is serving, before the stub shots.
5. Stubs already implemented are NOT rewritten unless the stub body changed.
</phase>

<phase name="3-run-and-record">
1. Compute the run set — never the living file. `--from-qa` uses the same set.
2. `bd create` title `QA: increment NNN`. Dispatch **background** `[AGENT QA] Wylie — QA: increment NNN`, model `qa-wylie-run`. He runs ONLY those specs. Returns per-stub results + screenshot paths + the data used (logins, seed, inputs) + the steps he executed.
3. Echo results one line per stub in the run set.
4. Flaky on first pass → retry once; still flaky → the TEST is wrong, fix the test.
5. Update `status` in TEST_STUBS.md only for stubs in the run set.
6. Classify every failure: `product-bug` → beads `QA: TS-nnn …`; `contract-question` → no beads yet; `polish`; `blocked`. Wylie never fixes product code.
7. **Ask before the report exists.** Gather every question the run raised — a contract the stub and the product disagree on, a PRD line that no longer matches, a behavior no stub covers — and ask them in one AskUserQuestion batch. Each answer is a Decisions row and a route: PRD patch through Hightower, a fix task, or backlog. Do not leave a question inside the report.
8. **Keep 10 shots in the increment, shrink them, park the rest.** Priority for the files that stay in `screenshots/`: side-by-side pair, main journey, failures, `00-app-up.png`. Move the overflow to `.hele/tmp/captures/<slug>/<increment>/`. Then, in `screenshots/` only:

   ```bash
   npx -y sharp-cli -i 'screenshots/*.png' -o screenshots -c 9 --palette
   test "$(ls screenshots/*.png 2>/dev/null | wc -l)" -le 10
   shasum screenshots/*.png | awk '{print $1}' | sort | uniq -d
   ```

   The checksum list must be empty. A duplicate means recapture, not a second copy of the same frame.
9. Write `increments/NNN-<slug>/QA_REPORT.md` from `${CLAUDE_PLUGIN_ROOT}/templates/qa-report.md` — EVERY run, green or red. **Human-readable markdown, no XML tags.** Side by side first, then Setup, results, a replay per stub, Decisions, failures, History. Embed only kept shots (`./screenshots/TS-nnn.png`). A PNG in `screenshots/` that the report does not embed gets deleted. Also draft/refresh `VERIFY.md` from this report's steps and data so verify can replay them (see hele-verify-work).
</phase>

<phase name="4-report-and-route">
Emit Wylie's **QA RUN** signature — chat text, never fenced. Order:
1. Report/Scope, Field/Value (ran vs living file)
2. Test results table with **absolute PWD screenshot paths** (`chat only` when the shot was not kept)
3. Show the kept screenshots inline (Read the PNGs)
4. Shots table from chat-reports.md (kept vs chat only, full PWD)
5. Files table with the absolute path of QA_REPORT.md
6. Open these table (project root + QA report)
7. Options table only when the run is not fully green. A fully green run has no Options of its own — the manual walk's Options follow immediately.

Forbidden: wrapping the report in a markdown code fence; drawing box-drawing divider lines; XML in QA_REPORT.

Route by outcome:
- **All passing** (nothing failing, nothing blocked) → print the QA RUN results and screenshots. No Actions table. No "approve verify". Immediately read and run `hele-verify-work` in this same turn. The Options the human answers are the first manual-verify flow (pass / issue / skip). That walk is their next prompt.
- **Failures** → Options: `1` ✅ Approve fixes → build from QA report; `2` Decide the contract-questions first; `3` Walk me through a failure; `4` Tell me what you need. On `1`: read and run `hele-build --from-qa` in this same turn. Do not start the manual walk.
- **Blocked stubs** → name what the human must unblock. Do not start the manual walk.
</phase>

<rules>
- Open channel: this session never writes specs, runs Playwright, or explores the e2e tree. Wylie does that in the background.
- The e2e suite lives in the PROJECT. `/hele-qa` runs the increment slice; CI runs the living-file regression.
- A stub is `passing` only if its Playwright test ran green THIS run.
- Artifacts English; chat in the human's language. Say **the human**, never "CEO".
- Every path in chat is the full absolute PWD path.
- Mid-run build-until-pass → read `build-until-pass.md` and dispatch Summer; resume QA after.
</rules>
