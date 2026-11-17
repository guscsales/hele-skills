# Skills Reference

**You type `/hele`.** Agent Lisbon, the Builder, detects the lane and runs the phase skills below. Real stops end in numbered options: `1` approves and starts the next phase; `2` is tell me what you need. The question stop is different: `1` accepts every recommendation, `2` answers one by one, `3` is an open reply. The execution plan is not a stop. After you approve the PRD (and the design, when there are new screens), the agents write the plan, build, and run auto-verify on their own. The QA report is the next stop: continue to the manual walk, or fix what you saw. A database change still stops. Every file in a chat table is a clickable link: the label is the file name, the target is the absolute path on one line. Say **the human**.

Jump to: [hele](#hele) · [init](#hele-init) · [update](#hele-update) · [feature](#hele-feature) · [fast](#hele-fast) · [design](#hele-design) · [plan](#hele-plan) · [stubs](#hele-stubs) · [build](#hele-build) · [qa](#hele-qa) · [fix-e2e](#hele-fix-e2e) · [verify-work](#hele-verify-work)

## /hele

The conductor. Agent Lisbon talks. Specialists work in the background.

1. Existing-suite E2E audit → `/hele-fix-e2e`, without init. For product work, **auto-init** if `.hele/` is missing.
2. **Lane table** (one row): Feature · Fast · Bugfix · Tweak · Open.
3. Runs the matching phase skills. You never type them for the pipeline.
4. Real stops end in numbered options. An open lane closes with **Work done** or **Let's formalize**. The plan and build do not stop; the QA report does, including when green.
5. A fix found in manual verify goes back to the PRD on that same increment, and the flow runs again. Flows already marked pass are not walked again.

| Lane | When | What happens |
| --- | --- | --- |
| Feature | The product does not do this yet. | Investigates first, then one question pack if anything useful remains, then PRD + stubs + increment `001`. Design when there is a new screen. The team plans, builds, and auto-verifies. You walk the result in tables. |
| Fast | A small addition to what already exists. | Investigates first, then one question pack if a rule would change, then a PRD patch and a new increment. Same spine. |
| Bugfix | Today's behavior is wrong. | Question pack only if the rule text would change. Same spine. |
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

Update lane `/hele` runs for Fast and Bugfix: investigate first, then one question pack when a rule would change, then patch the PRD, stub delta, new increment, same spine. A bugfix that leaves the rule text alone does not stop to ask. Schema and security stay with Hightower and Jane. A correction of the increment already in play does not open a new increment.

## /hele-tweak

Tweak lane `/hele` runs for text and style changes with no rule: one background engineer edits every place the old text lives (code, locales, tests), runs only the typecheck, lint, and tests that touch the changed files, and rewrites any PRD or stub quote of the old text in place. No question pack, increment, plan, beads, Playwright, QA report, or manual walk. A rule, condition, new field, schema, or security surface escalates to `/hele-fast`.

## /hele-design

Agent Vega. Skipped when there are no new screens, or when `designSystem.enabled` is false.

## /hele-plan

Agent Lisbon. `EXECUTION_PLAN` plus beads, written for the agents. No human sign-off. Coverage recommendations become engineer test tasks; planned CI changes go to Rigsby with selection/fallback validation. Build starts when the plan is ready. Hightower's schema approval pauses the chain when the database changes. `DB_CHANGES.md` is human-readable markdown, and those same changes are written into the plan under `## Database`.

## /hele-stubs

Agent Wylie derives living acceptance scenarios from the PRD only, then inspects existing tests and maps the smallest sufficient proof in a separate Coverage table. Unit, component, integration, API E2E and browser E2E are options; E2E requires a connection/failure/reuse justification. Runs inside the PRD stop, with no extra approval. Does not draft `VERIFY.md`.

## /hele-build

Coordination loop on beads. Background engineers. When the suite is green, auto-verify starts. `--from-qa` fixes only the open QA beads, then auto-verify runs again.

## /hele-qa

Agent Wylie checks assertions and current build evidence, routes missing smaller-test coverage to engineers, and reuses/extends/writes justified E2E. He executes affected existing journeys too, including across features; shared or uncertain impact broadens selection. QA_REPORT links proof per behavior, gaps, selected regressions and CI/runtime impact. Zero E2E and zero screenshots can be valid. Useful screenshots are settled 1920×1080 frames within qa.maxScreenshots, not a quota. The report stops before the human walk; failures and coverage gaps offer a fix round. `--generate-fixes-report` reconstructs from evidence without reruns; missing proof remains pending.

## /hele-fix-e2e

Standalone audit for an existing E2E suite, including projects without `.hele/` or PRDs. Wylie inspects assertions, boundaries, overlapping smaller tests and CI costs. Rigsby helps diagnose setup, retries and parallelism. Writes `.hele/reports/E2E_AUDIT.md` when initialized, otherwise `E2E_AUDIT.md` at the project root. No tests or CI are changed and no full suite is launched by default.

The report ranks keep, consolidate, replace, remove, optimize and investigate recommendations with exact coverage evidence, prerequisites, uncertainty and an implementation sequence. Removing a test requires demonstrated surviving coverage or intentional obsolete behavior; an unproven replacement is conditional. See [Testing and E2E](testing.md).

Tip: check the whole configuration in [Configuration](configuration.md).

## /hele-verify-work

One short changed-experience flow at a time. Open/Data/Steps come from the QA report in the chat language; preserve the executed/prepared label. Screenshots are optional. Backend-only work with no human flow proceeds to the normal close after the QA stop. A flow already marked pass is not shown again. A fix described on a flow goes back to the PRD, then the flow runs again. The close is the Options table from `templates/chat-reports.md`: 1 close and open a ready PR, 2 close and open a draft PR, 3 close with no PR, 4 back to the PRD.

## Output rules

See `templates/chat-reports.md`. Lane table, Options table, Files as links, PRD delta (was → now), Open these, QA shots. Chat, including those tables, follows `language.chat`. Files follow `language.artifacts` (default English, en-US). Never fence a report. Never box-drawing in chat. Never a raw path in its own column.

Next: [CLI Reference](cli.md)
