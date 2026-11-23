# Validation strategy

Shared contract for stubs, planning, build, QA, and E2E audits. A behavior needs evidence; a stub does not imply a browser test. Wylie owns coverage decisions and E2E health. Engineers own unit, component, and integration tests. Rigsby implements CI execution policy.

## Choose the proof

1. Derive Given/When/Then from the PRD before inspecting implementation or tests. Keep that behavior independent of the execution plan.
2. Inspect existing tests and their assertions, fixtures, and mocked boundaries. Choose the smallest scope that can detect the actual failure: unit, component, integration, or E2E. Importance alone does not determine test level.
3. Prefer reusing or extending a test over duplicating coverage. A journey may cover several stubs, but every mapped stub needs an explicit assertion. Preserve useful failure isolation; do not concatenate unrelated flows into one giant test.
4. For each proposed E2E, record the real connection under test, the concrete failure smaller tests would miss, and why existing journeys are insufficient. Two pages or the word "critical" is not a justification.
5. E2E can enter through an API or a browser. Use the browser when UI wiring or the user's visible experience is part of the claim. Do not mock the connection the test claims to prove. Controlled external boundaries are allowed, but name what they leave unproven.

Example: disabling a product can use unit tests for eligibility, integration tests for persistence and purchase rejection, and one E2E for the administrator's change reaching the customer's storefront. A mock that always returns "unavailable" does not prove propagation.

## Record coverage, not just intent

Keep behavior in each stub body. Keep technical choices in a separate **Coverage** table in TEST_STUBS.md: stub IDs, level, owner, existing/proposed test path and title, assertions/boundaries, rationale, and execution scope. Proposed paths are labeled proposed. One stub may require several tests; one test may cover several stubs.

Canonical levels: `unit`, `component`, `integration`, `e2e-api`, `e2e-browser`. Legacy `kind="unit-expectation"` maps to unit intent; `kind="e2e"` to browser intent. Legacy `kind="api"` must be inspected: API entry alone cannot distinguish integration from E2E. Preserve stable TS IDs, bodies, and historical reports; normalize affected mappings as they are reviewed. Do not bulk rewrite existing features or delete their specs on upgrade. Intentionally removed behavior keeps its TS ID with `retired="true"` and a PRD retirement note; it is excluded from required validation. A blocked stub without that decision is still a gap.

The coverage table is the current technical mapping; an old `kind` is a hint, not an instruction to generate Playwright. For new stubs use `kind="unassigned"` until mapping is decided, then the primary canonical level. Additional levels stay in the table.

`passing` requires all mapped assertions for that behavior to have passed on the current code and relevant environment. Record test path/title, command, result artifact/output, and code revision or working-tree identity. Review and QA reuse evidence for the same covered assertion, code and relevant environment. Re-run the affected check when relevant code, fixtures, dependencies or environment changed, the proof is incomplete, or review raises a concrete question. A test file, mock response, old green CI, screenshot, or prose claim alone is not passing evidence. Missing coverage is `pending`; an environment preventing validation is `blocked`; an observed failed assertion is `failing`. Overall QA is green only when every required behavior in scope has current passing evidence and no unresolved failure/gap remains.

## Select executions separately

- Local QA scope: new/rewritten stubs **and existing journeys affected by the diff**, including journeys owned by other features. Use checked-in mappings, test dependencies, or trace evidence to explain selection. Do not infer affected tests from the increment tag alone.
- Run selected existing E2E when current evidence is missing, including when no new journey was written. Broad/shared changes or unknown impact require broader verification, not a guessed empty set.
- Keep a versioned execution map in the project's existing test configuration/docs, or `tests/TEST_EXECUTION.md` when no home exists. Record suite/test paths, covered product areas and shared dependencies, owners, triggers, blocking stage, exact commands, and measured runtime when available. Do not create a competing map if the project already has one.
- Recommended policy for new CI setup: fast tests plus a small explicitly named smoke set and affected E2E on PRs; broaden for shared auth, schema, dependency, runner/helper, configuration changes or unreliable selection. Run the wider regression before release or on a schedule as appropriate to the product's risk. A deferred suite must have an actual trigger and owner; record that failures can be discovered after merge when using a schedule.
- Existing CI stays effective until a concrete replacement is implemented and validated. Do not silently demote blocking tests, rely on an unimplemented selector, or move tests out of PRs merely to meet a time target. Lisbon plans policy changes; Rigsby implements the map and workflows and proves selection, including broad-change fallback. This is not an extra approval stop for already authorized work.
- Report test additions/removals, affected suites, execution-stage changes, and timing impact. Separate wall-clock pipeline duration, setup, retries, and summed test time; parallel test durations cannot be added to claim CI savings. Unknown timing stays unknown. Use a project's existing time budget when available; do not invent a universal budget.
- Re-run after relevant fixes; do not duplicate a successful unchanged confirmation just to produce a new report. Investigate flaky results, preserve the initial failure, and distinguish environment/test defects from product defects. Retrying green is not proof that the first failure was harmless.

## Human verification and screenshots

QA reports can be green with zero E2E and zero screenshots. A manual walk checks changed user experience, not every parameter combination. Group related stubs into short flows and name their IDs. Backend-only changes may have no meaningful human flow; record why and proceed to the normal close after the QA report stop only when required automated evidence is green. Human verification cannot override unresolved automated failures or gaps.

For each human flow provide Open, Data, and Steps tables from inspected setup and product expectations. Label it `executed` only if that exact walk was exercised; otherwise label it `prepared, not executed`. Do not imply that a unit/API test clicked through the UI. Missing setup is a named blocker, never invented credentials or data. Human verdicts remain separate from automated results.

Screenshots are optional evidence for a visible change or a failure, not one per stub. When useful, capture a settled, readable 1920×1080 frame with the relevant element visible; inspect each kept PNG and palette with Sharp without resizing. Respect `qa.maxScreenshots` as a ceiling, not a quota (missing/invalid → plugin default). Prefer a real before/after pair when it explains the change; say when no real before is available. Do not manufacture images, boot an app solely to fill a report, or treat identical screenshots as automatic proof of failure. Embed only useful kept shots; omit empty screenshot sections.
