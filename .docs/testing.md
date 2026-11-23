# Testing and E2E

Hele requires evidence for behavior. It does not require a browser test for every acceptance scenario. Wylie owns the validation strategy and E2E journeys; engineers own unit, component, and integration tests. Rigsby owns CI implementation.

## The delivery flow

The canonical diagram remains in [README — The flow](../README.md#the-flow), mirrored from `cli/src/flow-diagram.js`.

1. Lisbon defines the behavior in the PRD.
2. Wylie derives acceptance scenarios independently of the execution plan. Then he inspects existing tests and adds Coverage recommendations to TEST_STUBS: level, owner, test/assertion, boundary, rationale, execution scope.
3. Lisbon plans testable deliveries. Engineers build and test, then an independent review checks the diff and records a verdict per delivery. Review and QA reuse current test evidence.
4. Wylie checks assertions and current results. Smaller-test gaps return to engineers; justified E2E gaps become API or browser journeys. A journey may prove several stubs through explicit assertions. Selected existing journeys run when current evidence is missing, even when no new E2E is created.
5. QA_REPORT presents proof per behavior, remaining gaps, selected regressions, and CI/runtime impact. It can be green with zero E2E and zero screenshots; it cannot be green with missing required evidence.
6. The human checks short flows for the changed experience. The report distinguishes a walk actually executed from one prepared for the human. Backend-only work may have no human flow and proceeds to the normal close after the QA report stop.

No extra validation-plan approval is added. Design and database approvals keep their existing places. A QA fix round adds only missing confirmation at the appropriate level. It waits for reviews likely to change that proof and reuses valid results when refreshing the report.

## Compare build usage

Run `/hele-run-report` in the increment’s conversation, or name the increment and optional baseline. When more than one run fits, provide the parent JSONL paths. The collector reads only those sessions and their available subagent logs. Use the same test gates and report what review and QA found alongside the usage numbers.

Compare complete, similarly scoped builds with the same project and test gates. Hold model and effort fixed to isolate workflow changes, or record differences by phase to evaluate the new defaults. In Claude Code's local session and subagent JSONL logs, group usage entries by dispatch phase and deduplicate repeated assistant message IDs. Count starts and replacement attempts by bead ID, and report fresh input, cache writes, cache reads, and output separately. Compare review findings, QA failures and gaps, and the final CI result alongside usage. Keep raw logs local and report aggregates. Token counts and plan-quota percentages are separate measurements.

## When an E2E earns its place

For a proposed E2E, Wylie must name the real connection under test, the concrete failure smaller tests would miss, and why existing journeys do not already cover it. Neither "critical" nor "two pages" is sufficient by itself. Product importance comes from the PRD and known consequences, not an invented severity label.

For example, disabling a product can use unit tests for eligibility, integration tests for persistence and purchase rejection, and one E2E for the administrator's change reaching the customer's storefront. Mocking the storefront response to return "unavailable" does not prove that propagation. When the claim concerns backend cooperation only, the E2E can enter through an API rather than a browser.

Acceptance scenarios remain expressed in product terms. Technical mappings are separate and may use several test levels for one scenario. A passing test file alone is not sufficient evidence: QA records the actual assertion, command, result, code identity, environment and any mocked boundary. Valid current build results can be reused; relevant changes invalidate them.

## CI execution is a separate decision

Use the project's existing versioned test configuration or execution documentation. If there is no suitable home, use `tests/TEST_EXECUTION.md`. The map names suites/tests, covered areas and shared dependencies, owners, commands, triggers, blocking stages and available timing measurements.

For new setup, the recommended policy is fast checks plus a small named smoke set and affected E2E on PRs, with broader execution for shared changes or uncertain selection. The wider regression runs at an explicitly configured release or scheduled stage. A scheduled test can discover a regression after merge; the chosen policy must make that tradeoff clear.

This is guidance for the project's CI, not an automatic workflow change on plugin upgrade. Rigsby implements and verifies selectors and their broad-change fallbacks before replacing existing gates. Existing required checks stay effective until then. Moving a slow test out of PRs needs an explicit rationale, actual later trigger, and owner.

Ten minutes in CI is a reason to inspect the breakdown, not proof that tests should be removed. Report setup, execution, retries, matrix and parallelism separately. Summed test durations do not equal pipeline wall-clock. Hele does not invent a universal runtime target or promise unmeasured savings.

## Auditing an existing suite

Run:

```text
/hele-fix-e2e
/hele-fix-e2e tests/e2e — explain what we can remove and why
/hele-fix-e2e investigate why the E2E CI job takes ten minutes
```

The audit works with any existing runner and without PRDs or `.hele/`. It does not initialize Hele, launch a full suite, delete tests, update snapshots, or change CI. It reads test assertions, fixtures, real/mocked boundaries, smaller-test coverage, workflows and available execution logs. Missing measurements remain unknown.

The output is `.hele/reports/E2E_AUDIT.md` for an initialized project, or `E2E_AUDIT.md` at the project root. It contains:

- A readable diagnosis, scope/revision and measurement limits.
- Ranked keep, consolidate, replace, remove, optimize, or investigate recommendations.
- Linked evidence for each recommendation and the exact guarantee that survives.
- A complete scoped inventory, with any unreviewed portion explicitly marked.
- Prerequisite replacements, targeted validation, implementation order and rollback.

For example, five browser tests covering discount arithmetic might be replaceable by unit tests while a checkout journey retains the wiring proof. That is a conditional recommendation until the arithmetic assertions exist and pass; similar test names are not enough to justify deletion. A unique permission check stays even if it rarely fails. A slow useful test may need cheaper setup rather than removal.

Applying recommendations is a separate scoped request. Replacement proof comes before removal, and changes to CI selection must preserve coverage and verified fallback behavior.

## Existing projects and artifacts

Stable TS IDs and historical reports are preserved. Old `kind="unit-expectation"` and `kind="e2e"` values are unit/browser intent; old `kind="api"` requires inspection to distinguish integration from E2E. QA reconciles affected mappings only. There is no bulk migration, automatic deletion of existing E2E, or silent demotion of CI gates.

`qa.maxScreenshots` remains a ceiling for useful optional images. Kept frames stay readable at 1920×1080 and are paletted without resizing. A before/after comparison is useful when it explains a visible change, not a required artifact for backend work.

The executable agent contract is [validation-strategy.md](../templates/validation-strategy.md); the audit output contract is [e2e-audit.md](../templates/e2e-audit.md).

## Background reading

- [Google: Fixing a Test Hourglass (2020)](https://testing.googleblog.com/2020/11/fixing-test-hourglass.html) describes moving duplicated E2E coverage into integration tests.
- [GitLab Testing Strategy](https://docs.gitlab.com/development/testing_guide/testing_strategy/) separates test placement, progressive execution and ownership.
- [Uber: Shifting E2E Testing Left (2024)](https://www.uber.com/us/en/blog/shifting-e2e-testing-left/) describes why cross-service behavior needed E2E and how API entry points and selection helped execution.
- [Kent C. Dodds: Write tests. Not too many. Mostly integration. (2019)](https://kentcdodds.com/blog/write-tests) emphasizes confidence relative to cost.
- [Ham Vocke: The Practical Test Pyramid (2018)](https://martinfowler.com/articles/practical-test-pyramid.html) distinguishes acceptance criteria from test granularity.

These inform Hele's policy; they are not a claim that every company uses the same test mix or CI schedule.
