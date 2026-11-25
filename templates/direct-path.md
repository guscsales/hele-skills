# Direct path

The direct path delivers a small code change with one engineer, targeted proof and a close with evidence. It is not a lane: Fast, Bugfix and corrections of the active increment keep their names, and the lane announcement shows the path (`Bugfix · direct`). Agent Lisbon conducts; the owning engineer works. Chat shapes (Lane row, Escalation line, Unexplained failure stop, Direct close) are in `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`.

<conductor>
**Applies to.** A Bugfix, a Fast addition, or a correction of the active increment. A new capability stays on the Feature lane and takes the full path, whatever its size. There is no file-count limit and no other size test: the lane and the excluded surfaces decide.

**Excluded surfaces.** The work leaves the direct path when it touches any of these:
- schema or production data;
- a security surface: authentication, permissions, payments, personal data;
- shared configuration;
- CI;
- environment;
- a new screen;
- a contract between modules: an interface other parts of the product depend on, meaning an API request or response shape, an event or a shared public type.

**Entry.** Escalate to the full path up front only when the human's own words name an excluded surface. Otherwise dispatch the engineer and let his investigation decide the fit.

**Rule handling (BR-2), before dispatch.**
- Rule unchanged (a bug that violates an unchanged rule): no PRD touch, no stop.
- Rule fully decided by the human's words (writing it needs no product choice the human did not state): Lisbon patches the PRD in this session with a patch version and a changelog line, dispatches without a stop, and shows the delta at the close.
- Product doubt the human's words do not settle: one Question pack, nothing written, nothing dispatched until the human answers.

**Dispatch.**
1. One **background** engineer who owns the area: `[AGENT BE] Cho` for server, CLI and contracts, `[AGENT FE] Van Pelt` for UI. `model` from `settings.agents.models` for this runtime (`inherit` omits it). Prompt = his persona + the human's ask + the `<worker>` block below + the repo root. For a correction of the active increment, add the increment folder.
2. No increment, no EXECUTION_PLAN, no `bd create`, no review dispatch. A direct delivery leaves no bead.
3. When a rule changed, dispatch Wylie (`qa-wylie-stubs`, contract `${CLAUDE_PLUGIN_ROOT}/skills/hele-stubs/SKILL.md`) for the scenario delta in the same turn as the engineer. The fix does not wait for him; the close waits for both. When there is no rule change, nobody is called for scenarios.
4. Announce with the Dispatch announcement (`chat-reports.md`, `## Output`, at the effective `output.sections.dispatch` level) and **END THE TURN**. Do not wait.

**Worker exits.**
- `DONE` with no real-journey flag → print the "Direct close" block; no Wylie run happens.
- `DONE` that flags a real journey → dispatch Wylie (`qa-wylie-run`) for that journey only, never the whole suite, end the turn, and print the "Direct close" block when his report arrives.
- Product doubt: when the engineer's result reports a product doubt, show the Question pack. Nothing more is written until the human answers (BR-2, BR-18).
- `ESCALATE` → announce the escalation with its reason (the Escalation line), then run `${CLAUDE_PLUGIN_ROOT}/skills/hele-fast/SKILL.md` on the full path. Pass the engineer's findings to planning (`skills/hele-plan/SKILL.md`) as `<current-state>` input; his partial work stays in the tree.
- `UNEXPLAINED` → print the "Unexplained failure" stop and call nobody. The free-text reply stays on that stop. On "continue", record the failure as pre-existing and close. On "compare", which the human chose for this delivery, dispatch Wylie (`qa-wylie-run`) to compare that one check against the previous revision, closed scope; then close.

**Never order** a comparison against a previous revision, a separate worktree, a dependency install or a second environment unless the human chose "compare" for this delivery.

**Close.** Print the "Direct close" block. A new bug or addition offers the ready PR, draft PR and no PR choices from the "Direct close" block; they follow the same PR steps as the close in `${CLAUDE_PLUGIN_ROOT}/skills/hele-verify-work/SKILL.md` phase 3 (that phase owns them; do not restate them here). A correction of the active increment returns to `${CLAUDE_PLUGIN_ROOT}/skills/hele-verify-work/SKILL.md` for the touched flow only; plan and QA_REPORT are not rebuilt.

**Trace.** The regression test in the project. When a rule changed, also the patched PRD and TEST_STUBS, each with a patch version and a changelog line. Nothing else.
</conductor>

<worker>
You are the owning engineer on the direct path. You write the test, the fix and the report. You do not invent requirements.

1. **Investigate and confirm the fit.** Read only what the change needs. If the change turns out to touch an excluded surface (see the conductor list), stop, keep partial work, change nothing more and return `ESCALATE` with findings: files read, what touches which surface, and a proposed split.
   Product doubt found while investigating (a rule the conductor's check did not settle): stop, keep any partial work, change nothing more, and report the doubt in your result as a question for the human. The conductor shows the Question pack; nothing more is written until the human answers (BR-2, BR-18). This is not a fourth result name.
2. **Reproduce.** Write the smallest test able to fail for the problem or the new behavior. Run it. Record the failing output.
3. **Make the change.** Edit the minimum. Run the test again until it is green.
4. **Run only the checks that reach the changed files.** A test reaches a file when it imports it, directly or through other files. Use the runner's related mode when it exists (`vitest related`, `jest --findRelatedTests`, matched `pytest`); otherwise name the selected tests and why. Add the type and lint checks that apply, scoped to the changed files. Never the whole suite. The engineer never runs Playwright; step 6 only flags a journey and Wylie runs it.
5. **Failures.**
   - A failing check the change does not reach: record it as pre-existing with its name and an error excerpt, and continue.
   - A failing check the change reaches that you cannot explain: stop, leave the change in place, and return `UNEXPLAINED` with the check name, an error excerpt, an estimated time to continue (record as pre-existing) and an estimated time to compare against the previous revision (only if the human chooses it), each a number or `unknown`.
6. **Real journey.** You only flag a real journey, you never run it, and only when no smaller test can fail for it: parts that only fail together. Say which journey. Otherwise do not flag one.
7. **Correction of the active increment.** In that increment's `VERIFY.md`, set the touched flow to `pending` and rewrite its expected result from the corrected rule. Touch no other flow, no plan and no QA_REPORT.
8. **Report `DONE`:** changed files; proof, with the failing and passing output; related checks run; what was deliberately not run and why (not run and why); pre-existing failures with name and error excerpt; the journey flag when step 6 applies. Never paste whole files.

Do not commit, branch or push. Do not run the whole suite.
</worker>
