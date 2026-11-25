# Skills Reference

**You type `/hele`.** Agent Lisbon, the Builder, detects the lane and runs the phase skills below. Real stops end in numbered options: `1` approves and starts the next phase; `2` is tell me what you need. The question stop is different: `1` accepts every recommendation, `2` answers one by one, `3` is an open reply. The execution plan is not a stop. After you approve the PRD (and the design, when there are new screens), the agents write the plan, build, and run auto-verify on their own. The QA report is the next stop: continue to the manual walk, or fix what you saw. A database change still stops. Every file in a chat table is a clickable link: the label is the file name, the target is the absolute path on one line. Say **the human**.

Jump to: [hele](#hele) · [init](#hele-init) · [update](#hele-update) · [feature](#hele-feature) · [fast](#hele-fast) · [direct path](#direct-path) · [design](#hele-design) · [plan](#hele-plan) · [stubs](#hele-stubs) · [build](#hele-build) · [qa](#hele-qa) · [fix-e2e](#hele-fix-e2e) · [run-report](#hele-run-report) · [verify-work](#hele-verify-work)

## /hele

The conductor. Agent Lisbon talks. Specialists work in the background.

1. Existing-suite E2E audit → `/hele-fix-e2e`, without init. For product work, **auto-init** if `.hele/` is missing.
2. **Lane table** (one row): Feature · Fast · Bugfix · Tweak · Open.
3. Runs the matching phase skills. You never type them for the pipeline.
4. Real stops end in numbered options. An open lane closes with **Work done** or **Let's formalize**. The plan and build do not stop; the QA report does, including when green.
5. A fix found in manual verify that fits the direct path is delivered directly: the engineer sets the touched flow back to pending in `VERIFY.md` and you walk it again. A correction that does not fit (it names an excluded surface, or the engineer escalates) goes back to the PRD on that same increment, and the flow runs again. Flows already marked pass are not walked again.

| Lane | When | What happens |
| --- | --- | --- |
| Feature | The product does not do this yet. | Investigates first, then one question pack if anything useful remains, then PRD + stubs + increment `001`. Design when there is a new screen. The team plans, builds, and auto-verifies. You walk the result in tables. |
| Fast | A small addition to what already exists. | Investigates first, then one question pack if a rule would change. Direct path by default: one engineer, targeted proof, close with evidence, no increment, plan or beads. The full path (PRD patch, new increment, plan, build, QA) runs when an excluded surface is named or found. |
| Bugfix | Today's behavior is wrong. | Question pack only if the rule text would change. Direct path by default, like Fast; the full path when an excluded surface is named or found. |
| Tweak | Copy, labels, typos, colors, spacing. No rule, no logic. | One engineer edits, runs only the checks that touch the change, and syncs PRD quotes of the old text. No plan, QA, or manual walk. Escalates to Fast if a rule shows up. |
| Open | Research, review, investigation, design exploration. | A conversation, until you pick **Let's formalize** or say you're done. |

**Sticky:** type `/hele` once. Later prompts stay here.

## /hele-init

Bootstraps `.hele/` (settings, index, features/), the sticky session rule, and beads via `hele install`. The folder is always `.hele/`. Idempotent. When `/hele` starts it, the original ask continues. No skill menu.

## /hele-update

Updates the installed plugin to the latest version. Refreshes the `hele` marketplace, then runs `claude plugin update hele-skills@hele`. Reports the version before and after. A restart loads the new skills. It does not touch the PRD. After the restart, `/hele-init` once when `.hele/` already exists.

## /hele-feature

Agent Lisbon. Anti-duplicate gate, then she investigates. If useful questions remain, one pack (accept all / one by one / open reply). That round writes nothing. Only then **PRD and stubs in the same stop** (Wylie, blind to the plan). Emits a PRD delta and clickable links. Option `1` goes to design, or to build and auto-verify when design is not needed.

## /hele-fast

Update lane `/hele` runs for Fast and Bugfix: investigate first, then one question pack when a rule would change. The [direct path](#direct-path) is the default. The full path (patch the PRD, stub delta, new increment, then plan, build and auto-verify) runs when the ask names an excluded surface or the engineer escalates; TDD and the named agents never shrink, beads and the increment belong to the full path. A bugfix that violates a rule that stays unchanged never stops to ask, on either path. A failing check the change does not reach is recorded as pre-existing; one the change reaches that nobody can explain stops at the Unexplained failure stop. Schema and security stay with Hightower and Jane. A correction of the increment already in play does not open a new increment.

## Direct path

`templates/direct-path.md` is the contract for a small code change on Fast, Bugfix, or a correction of the active increment. It is not a lane: the lane keeps its name and the announcement shows the path (`Bugfix · direct`, `Fast · direct`, or `· full`). A new capability stays on the Feature lane and the full path, whatever its size. There is no file-count limit and no other size test.

**Excluded surfaces** send the work to the full path: schema or production data; security (authentication, permissions, payments, personal data); shared configuration; CI; environment; a new screen; and a contract between modules (an API request or response shape, an event or a shared public type). Lisbon escalates up front only when your words name one; otherwise the engineer's investigation decides the fit.

**What runs.** Lisbon dispatches one background engineer (Cho for server and CLI, Van Pelt for UI). There is no increment, no `EXECUTION_PLAN`, no `bd create`, and no review dispatch. The engineer writes the smallest failing test first, makes it pass, and runs only the checks that reach the changed files, never the whole suite and never Playwright. A rule your words already decide is patched in the PRD without a stop; real doubt is one question pack; a bug that violates an unchanged rule never stops to ask. When a rule changed, Wylie derives the scenario delta in the same turn, and the close waits for it.

**Three exits.** `DONE` goes to the Direct close. `ESCALATE` (an excluded surface turned up) announces the escalation with its reason and runs the full path, with the engineer's findings as input to planning. `UNEXPLAINED` shows the Unexplained failure stop.

**Unexplained failure.** A check the change does not reach that fails is recorded as pre-existing, with its name and an error excerpt, and never triaged. A check the change reaches that the engineer cannot explain stops the delivery before anyone else is called, with two choices: continue and record it as pre-existing, or compare that one check against the previous revision. Each carries an estimate, or `unknown`. Hele never orders a previous-revision comparison, a worktree, a dependency install or a second environment unless you chose compare for that delivery. The full-path build follows the same rule.

**Direct close.** One block: what changed, the proof (failing, then passing), the related checks run, what was not run and why, pre-existing failures, and the rule delta (`unchanged` when no rule changed), with the files as links. A new bug or addition closes with ready PR, draft PR, no PR, or more to change. A correction of the active increment offers no PR choices: it returns to the touched flow in manual verify.

## /hele-tweak

Tweak lane `/hele` runs for text and style changes with no rule: one background engineer edits every place the old text lives (code, locales, tests), runs only the typecheck, lint, and tests that touch the changed files, and rewrites any PRD or stub quote of the old text in place. No question pack, increment, plan, beads, Playwright, QA report, or manual walk. A rule, condition, new field, schema, or security surface escalates to `/hele-fast`.

## /hele-design

Agent Vega. Skipped when there are no new screens, or when `designSystem.enabled` is false.

## /hele-plan

Agent Lisbon. `EXECUTION_PLAN` plus beads, written for the agents. No human sign-off. Coverage recommendations become engineer test tasks; planned CI changes go to Rigsby with selection/fallback validation. Build starts when the plan is ready. Hightower's schema approval pauses the chain when the database changes. `DB_CHANGES.md` is human-readable markdown, and those same changes are written into the plan under `## Database`.

## /hele-stubs

Agent Wylie derives living acceptance scenarios from the PRD only, then inspects existing tests and maps the smallest sufficient proof in a separate Coverage table. Unit, component, integration, API E2E and browser E2E are options; E2E requires a connection/failure/reuse justification. Runs inside the PRD stop, with no extra approval. Does not draft `VERIFY.md`.

## /hele-build

On the full path, background engineers work from one bead per testable delivery (the direct path has none). Related deliveries can share an independent review, with results recorded per bead. Fix-ups stay on the original bead and resume its worker when possible. A failing final check the increment does not reach is recorded as pre-existing and does not block green; a reached failure nobody can explain stops at the Unexplained failure stop before anyone else is called, and no previous-revision comparison runs unless you chose it. Green final checks start auto-verify. `--from-qa` fixes approved findings on their delivery or QA beads and confirms affected proofs after any review likely to change them.

## /hele-qa

Agent Wylie checks assertions and current build evidence, routes missing smaller-test coverage to engineers, and reuses/extends/writes justified E2E. He executes affected existing journeys too, including across features; shared or uncertain impact broadens selection. QA_REPORT links proof per behavior, gaps, selected regressions and CI/runtime impact. Zero E2E and zero screenshots can be valid. Useful screenshots are settled 1920×1080 frames within qa.maxScreenshots, not a quota. The report stops before the human walk; failures and coverage gaps offer a fix round. `--generate-fixes-report` reconstructs from evidence without reruns; missing proof remains pending.

## /hele-run-report

Run manually to review a build’s local Claude Code usage by phase and model, connect rework and QA findings to their evidence, and choose up to three changes to test next. Pass an increment or session log, and optionally a baseline. The result stays in chat unless you ask for `RUN_REPORT.md`. See [Compare build usage](testing.md#compare-build-usage).

## /hele-fix-e2e

Standalone audit for an existing E2E suite, including projects without `.hele/` or PRDs. Wylie inspects assertions, boundaries, overlapping smaller tests and CI costs. Rigsby helps diagnose setup, retries and parallelism. Writes `.hele/reports/E2E_AUDIT.md` when initialized, otherwise `E2E_AUDIT.md` at the project root. No tests or CI are changed and no full suite is launched by default.

The report ranks keep, consolidate, replace, remove, optimize and investigate recommendations with exact coverage evidence, prerequisites, uncertainty and an implementation sequence. Removing a test requires demonstrated surviving coverage or intentional obsolete behavior; an unproven replacement is conditional. See [Testing and E2E](testing.md).

Tip: check the whole configuration in [Configuration](configuration.md).

## /hele-verify-work

One short changed-experience flow at a time. Open/Data/Steps come from the QA report in the chat language; preserve the executed/prepared label. The exception is a flow corrected on the direct path: it is pending with an expected result rewritten in `VERIFY.md`, and it is shown from `VERIFY.md` because the QA report was deliberately not rebuilt. Screenshots are optional. Backend-only work with no human flow proceeds to the normal close after the QA stop. A flow already marked pass is not shown again. A fix described on a flow that fits the direct path is delivered directly and that flow is walked again; a larger one goes back to the PRD, then the flow runs again. The close is the Options table from `templates/chat-reports.md`: 1 close and open a ready PR, 2 close and open a draft PR, 3 close with no PR, 4 fix something (delivered directly when it fits the direct path, back to the PRD when it does not).

## Output rules

See `templates/chat-reports.md`. Lane table, Options table, Files as links, PRD delta, Open these, QA shots. How much of each report shows follows the `output` setting (default `compact`; see [Configuration](configuration.md#output)); failures, gaps, questions and decisions always show. Chat, including those tables, follows `language.chat`. Files follow `language.artifacts` (default English, en-US). Never fence a report. Never box-drawing in chat. Never a raw path in its own column.

Next: [CLI Reference](cli.md)
