---
name: hele-qa
description: >-
  Agent Wylie checks acceptance coverage against current test evidence,
  writes or updates justified E2E journeys, runs affected E2E, and produces
  QA_REPORT.md plus a short human verification script. Invoked by /hele
  after build, or directly with /hele-qa / --generate-fixes-report.
---

# hele-qa

Conduct Agent Wylie's evidence review. Load `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md`, `templates/validation-strategy.md`, `templates/open-channel.md`, and `templates/chat-reports.md` (all under `${CLAUDE_PLUGIN_ROOT}`). Inspection, spec writing, and test runs are background Wylie sub-agents; this session conducts and presents results. Resolve `qa-wylie-stubs` for coverage judgment and `qa-wylie-run` for spec execution from settings, respecting `agents.maxParallel` and file overlap. Chat, including table cells, follows `language.chat`; files follow `language.artifacts` (missing settings use `core/default-config.json`). Say **the human**.

<mode name="--generate-fixes-report">
Reconstruct a missing/stale QA report from test outputs, coverage mappings, code identity, open QA beads, and available traces/screenshots. Do not run tests just to reconstruct it. Stub statuses alone cannot establish a green verdict. Missing or stale evidence is pending/blocked and must be disclosed; use the same report and routing below.
</mode>

<context>
- Requires the feature's TEST_STUBS, PRD, increment, engineer reports, and diff against the base. Load existing test/CI conventions and the project's execution map. A running app is needed only by selected tests or human flows, not by evidence review itself.
- Exclude only explicitly retired behavior backed by a PRD retirement decision; blocked or missing tests still require resolution.
- Scope includes the increment's new/rewritten stubs plus existing behaviors and journeys affected by the diff, even across features. Record why each suite was selected and what broader verification is deferred to an actual CI stage.
- Do not write state.json, NOTES.md, LEARNINGS.md, or findings.json. A QA report is always produced, including when no E2E is needed.
</context>

<phase name="1-review-coverage">
1. Dispatch background `[AGENT QA] Wylie — review coverage`, model `qa-wylie-stubs`, with PRD-derived stubs, the Coverage table, engineer evidence, relevant test code and diff, and the shared validation strategy. Inspect assertions and mocked boundaries, not just test names or pass counts.
2. Map every required behavior to current evidence. Reuse valid build results; do not repeat their suites. Reconcile provisional/legacy kinds in the affected Coverage rows. Missing unit/component/integration proof becomes a `QA: TS-nnn coverage gap` bead for the owning engineer, with the missing assertion/boundary. Wylie does not fill engineer-owned suites himself.
3. For E2E, record the real connection, failure smaller tests miss, and existing journey coverage. Prefer reuse, then extension, then a new journey. Each mapped stub needs an explicit assertion. E2E may enter through API or browser. No justified E2E gap is a valid outcome.
4. Select affected existing E2E from the execution map/dependencies/traces as well as changed mappings. Broaden for shared changes or uncertain impact. Include cross-feature coverage; never select by increment tags alone. Return the coverage decisions and exact selected tests to the conductor without a new human approval stop.
</phase>

<phase name="2-write-journeys">
1. Only if a justified E2E needs writing or updating, dispatch background `[AGENT QA] Wylie — journey <name>`, model `qa-wylie-run`. Follow the project's existing E2E runner and conventions. If no suitable runner exists, set up Playwright only when that selected journey requires it; ask Rigsby through Lisbon for environment/CI work. Do not install browsers for an API-only journey.
2. Group by coherent journey, not one test per stub. Put covered TS IDs in test titles or maintained metadata, including feature slugs where IDs collide across features. Record exact assertions in the Coverage table. Keep independent failure isolation and deterministic fixtures/waits/selectors. Do not mock the connection being proved.
3. Do not rewrite unrelated tests or delete legacy E2E as part of routine QA. Suite-wide pruning belongs to `/hele-fix-e2e` followed by explicitly requested implementation.
4. Screenshot capture is optional and follows the shared strategy. No mandatory app-up shot, per-stub image, or baseline app boot. A visual inspection can be recorded without creating a permanent E2E spec.
</phase>

<phase name="3-run-and-record">
1. Create `CHECK: QA increment NNN` in beads; keep assessment tracking separate from the actionable `QA:` fix beads. Dispatch background `[AGENT QA] Wylie — selected journeys`, model `qa-wylie-run`, only when executions are needed. Run the selected E2E and any required Wylie-owned confirmation not already supported by current evidence. No E2E selected → skip this dispatch. Report exact commands, code identity, outputs, initial failures/retries, timing, data sources, and covered assertions.
2. Inspect failures before a targeted retry. A flaky result is not automatically a test bug. Distinguish product, test, and environment causes; no blanket retries to get green. Wylie may fix his E2E code; product and engineer-suite changes route to their owners.
3. Update stub statuses only for behaviors assessed with current evidence under `validation-strategy.md`. Existing unaffected statuses remain historical, not a claim that they ran now. Missing coverage is pending, blocked execution is blocked, failed assertions are failing. A failed selected regression prevents green even if all new stubs passed.
4. Classify unresolved findings: `product-bug`, `coverage-gap`, `test-defect`, `contract-question`, `polish`, or `blocked`. Record exact evidence, impact, owner, and required validation in QA beads. Contract questions go to Lisbon/the human, never silently weaken an assertion to match the code. Keep the report available even if a question or blocker remains; pending decisions prevent green.
5. Write `increments/NNN-<slug>/QA_REPORT.md` from `templates/qa-report.md` every assessment, green or red. Include each required stub's title/rule title, level, test path/title, assertions/boundaries, command/result/code identity, and gaps. Include selected regressions, reuse decisions, E2E added/extended/removed counts, CI stage/selection changes, and measured timing or explicitly unknown impact. Rigsby implements any planned execution-map/CI updates; do not claim a proposed workflow already runs.
6. For user-visible changes, prepare short grouped human flows with Open/Data/Steps tables. Label each as executed or prepared, not executed. Backend-only changes can explain that no human flow applies. Write VERIFY.md from these sections, independent of whether Playwright ran. Preserve verified flows unless their behavior or setup changed. Never invent a replay or mark a human flow verified from automated evidence.
7. Inspect and palette useful screenshots if any, retain at most qa.maxScreenshots, and embed only kept images. Remove only superseded images owned by this increment's report; do not delete project baseline assets. Report optional screenshots without turning their absence into a coverage gap. Close the CHECK bead when the report is recorded; unresolved QA fix beads stay open.
</phase>

<phase name="4-report-and-route">
Emit Wylie's **QA RUN** signature — chat text, never fenced. Order:
1. Report/Scope, Field/Value (behaviors evidenced, gaps, selected E2E, reused build runs, CI impact)
2. Test results table. Stub and Rule cells carry the title (`TS-008 · <title>`, `BR-9 · <title>`). The Evidence cell names the level and links the test/result; screenshots are optional.
3. If screenshots were useful, show the kept images inline. This is the same look you already did before the file was written: the proven element is in the frame. A shot that fails that look is recaptured, not shown.
4. Shots table from chat-reports.md only when there are shots (kept vs chat only). Each screenshot cell is a markdown link.
5. Files table. QA_REPORT.md is a markdown link (file name, absolute path on one line).
6. Open these table (project root + QA report)
7. Options table. Every ready report stops here. Do not start the manual walk in this turn.

Forbidden: wrapping the report in a markdown code fence; drawing box-drawing divider lines; XML in QA_REPORT.

Then the Options table, and end the turn. The report is the stop. Do not open the first manual-verify flow until they pick continue. The menu below is the English contract. Render it in the chat language.

| Actions | Your call |
|---|---|
| 1 | ✅ Continue to manual verify |
| 2 | ✏️ Fix something I saw in the QA report |

On `1`: read and run `hele-verify-work`. Present its first applicable flow, or the normal close when none apply and required automated evidence is green. A human walk cannot clear unresolved automated gaps or failures.
On `2`: if their words already say what to fix, read `skills/hele/SKILL.md` and run its adjust phase on this increment (rewind to the PRD). If they only picked `2`, ask what they saw. Question table, write nothing, end the turn. Their answer is the change.

When the assessment has failures or coverage gaps, add rows under those two. Do not drop the two above.

| 3 | ✅ Approve fixes for failures or coverage gaps |
| 4 | ✏️ Decide the contract-questions first |

On `3`: read and run `hele-build --from-qa` in this same turn. Do not start the manual walk.
On `4`: ask the contract questions before any fix.

**Blocked stubs** → name what the human must unblock, in the report, above the same Options table.
</phase>

<rules>
- No green verdict with missing required coverage, stale evidence, unresolved selected failures, or blocked validation. No E2E needed does not mean no evidence needed.
- `--from-qa` confirms affected evidence at the proper level; reuse a current successful confirmation when refreshing the report.
- The project's execution map governs CI. A living TEST_STUBS file is not a command to run every E2E on every PR.
- Every file in chat is a clickable markdown link. Reports are never fenced.
- Mid-run build-until-pass → read `templates/build-until-pass.md`, dispatch Summer, then resume QA and invalidate evidence affected by those changes.
</rules>
