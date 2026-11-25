---
name: hele-fix-e2e
description: >-
  Audit an existing project's E2E suite and CI cost. Agent Wylie explains
  which tests to keep, consolidate, replace with smaller tests, remove,
  optimize, or investigate, with coverage evidence and prerequisites.
  Use for slow or overgrown E2E suites, including projects without Hele docs.
  Produces a written report; does not delete tests or change CI during the audit.
---

# hele-fix-e2e

This is a standalone suite audit, not a product increment. A request to audit E2E through `/hele` routes here without creating a PRD. The name means finding the fix; the default deliverable is a reviewable report. Do not edit tests, production code, dependencies, workflows, snapshots, or quarantine settings during the audit.

Load `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md`, `templates/validation-strategy.md`, `templates/e2e-audit.md`, and `templates/open-channel.md` under the same root. Read project settings if present, otherwise plugin defaults. Run `${CLAUDE_PLUGIN_ROOT}/scripts/hele config effective output` once per session before the first report; the audit runs without `.hele/`, so it then prints the plugin defaults, which is intended. Present the chat result under `## Output` in `templates/chat-reports.md`. Chat follows `language.chat` (`auto` = this conversation), files follow `language.artifacts`. No `.hele/` initialization, design questions, beads setup, or feature documents are required.

Dispatch background `[AGENT QA] Wylie — audit existing E2E`, model `qa-wylie-stubs` from settings/defaults. Announce and end the turn per open-channel. Keep product questions with the conductor. If CI needs separate investigation, dispatch background Rigsby with `infra-rigsby`; respect maxParallel and report-file ownership. Wylie writes the final report after incorporating his findings.

## Establish the scope and baseline

Resolve the requested suite or default to the project's E2E suites. Inspect repository guidance, runner configuration, test files, helpers, fixtures, mocks, project/browser matrices, CI workflows and existing test-selection rules. Use existing result artifacts and accessible CI logs for timing, retries, flakes, and setup costs. Do not boot the stack, install packages, or launch a full expensive suite just to audit it. If measurements are missing, report unknowns and provide the exact follow-up command; a separately requested benchmark can run within its agreed scope.

Record the revision/working-tree state, inspected paths, runner, number of declared tests versus expanded cases when known, configurations, and exclusions. For a large suite, work in batches by journey and maintain one inventory; do not infer the whole suite from a sample. If time or access limits coverage, explicitly mark the report partial and identify what remains unreviewed. No E2E found is a valid short report, not a reason to generate tests.

Separate pipeline wall-clock, job time, test execution, environment startup, browser installation, retries and parallelism. Ten minutes may be setup or a serial bottleneck rather than too many tests. Never sum parallel test durations to promise CI savings. Historical failure rates are context, not proof of test value: a rarely failing test may protect a costly regression.

## Evaluate coverage before recommending cuts

Read assertions and the exercised code/fixtures, not just names. Use PRDs where available; otherwise use product docs, actual behavior, test contracts and incident history available in the repository. Do not invent business priorities. Record uncertain intent as an open question.

For each test or coherent parameterized group, identify:

- The behavior and real connection it proves, including role, state, browser/device and timing distinctions that matter.
- Dependencies exercised versus mocked. Does it test the actual connection claimed?
- Existing smaller tests and E2E with equivalent assertions. Cite exact paths, test titles and assertion locations. Merely visiting the same screen is not equivalent coverage.
- Unique remaining failure modes, ownership, execution stage, and measured cost if available.

Choose one primary recommendation:

| Recommendation | Required justification |
|---|---|
| Keep | Unique useful coverage; explain the regression that would escape without it. |
| Consolidate | Name the surviving journey and assertions to preserve. Retain independent failure diagnosis; no giant unrelated flows. |
| Replace at a lower level | Name the unit/component/integration scope, real boundary and missing assertions. Implement and validate the replacement before removing the E2E. |
| Remove | Show equivalent current surviving coverage, or evidence the behavior is intentionally obsolete. An unexecuted replacement is not a ready removal. |
| Optimize | Coverage is useful; cost comes from setup, waits, fixtures, retries, repeated login, serialization, or runner configuration. Keep its guarantees. |
| Investigate | Intent, equivalent coverage, failure cause, or timing is uncertain. Keep protection until resolved. |

Use the shared E2E criteria: connection, failure smaller tests miss, existing coverage. Do not remove solely because a test is slow, flaky, old, or has never failed. Separate test defects from product races and environment failures. Do not label all API tests integration or all browser tests E2E; describe the actual boundaries.

## Write the decision report

Write `.hele/reports/E2E_AUDIT.md` when `.hele/` exists, otherwise `E2E_AUDIT.md` at the project root (or the user's chosen output). Read an existing report first; refresh the same report for the same scope/revision history, preserving unresolved decisions. Use `templates/e2e-audit.md`. Report prose should let an engineer understand the proposal without reconstructing the investigation.

Lead with the diagnosis, confidence/limits, and the highest-value actions. Include a complete scoped inventory and per-recommendation evidence. Distinguish:

- Ready candidates with demonstrated surviving coverage, still requiring targeted validation when applied.
- Conditional cuts that require replacement tests, assertion moves, or a product decision.
- Tests to retain and unknowns that must be resolved.

Describe a phased implementation order: establish replacements → validate guarantees → remove/consolidate → adjust CI selection if justified → measure again. Specify checks for each step, broad-change fallbacks for any selector, and rollback. Do not invent savings, flatten browser matrices, or demote blocking checks as an automatic optimization. Cite sources for measured claims and distinguish aggregate test effort from wall-clock estimates.

Present the `## E2E audit (chat)` block of `templates/chat-reports.md` in the chat language: the diagnosis in a few lines and the leading recommendations within the effective row limit, then the omission line pointing at E2E_AUDIT.md (shown count, total, omitted count, and "show all recommendations"), the report link, and the statement that only the audit report was written. The row limit applies to the chat table only: E2E_AUDIT.md holds the full inventory and the rationale for every recommendation, complete under every setting, and an omitted recommendation is not a dropped finding. Explain any partial scope. A follow-up to apply the findings should name the approved subset and use owning engineers for smaller tests, Wylie for E2E, and Rigsby for CI, with replacement proof before removal. That implementation is separate from this audit; do not start it because the report contains a recommendation.
