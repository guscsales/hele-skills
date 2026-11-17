<!--
Output contract for /hele-fix-e2e. Fill with evidence, not generic testing advice.
Files follow language.artifacts. No product/CI changes during the audit.
Use relative links in the report, absolute clickable links in chat.
Omit empty recommendations; explicitly state when no safe cuts were found.
-->
# E2E Audit — <project / suite>

## Assessment

Explain the dominant cost and coverage problem in plain language, the most useful actions, what should remain, and the limits of the evidence. Distinguish measured facts from hypotheses. State whether the audit is complete for its declared scope or partial.

## Scope and baseline

| Item | Evidence |
|---|---|
| Date / code identity | <date, revision and working-tree state> |
| Reviewed | <paths, runner, declared tests/groups and expanded cases when known> |
| Excluded / unreviewed | <paths and reasons, or none> |
| Existing coverage | <unit/component/integration paths, PRDs if present> |
| Pipeline / job wall-clock | <measured value + run/log link, or unknown> |
| Setup / execution / retries | <measured breakdown, or unknown> |
| Parallelism / matrix | <workers, shards, browsers/devices, source config> |

Do not equate summed test duration with CI wall-clock savings.

## Recommended actions

| Priority | Test / group | Recommendation | Why | Surviving proof / prerequisite | Expected effect and confidence |
|---|---|---|---|---|---|
| 1 | <linked path + title> | <keep / consolidate / replace / remove / optimize / investigate> | <specific finding> | <exact test/assertion or prerequisite> | <measured / estimate / unknown; no unsupported time claim> |

## Evidence behind each recommendation

### A1 — <specific action and behavior>

**Current guarantee:** Explain what the test asserts, roles/states covered, real dependencies and mocks. Link the relevant test/assertion locations.

**Finding:** Explain the duplication, missing boundary, obsolete behavior, or performance bottleneck. Link the evidence. Similar names/screens alone are not duplication.

**What remains protected:** Name the surviving test and exact assertions. If a replacement does not yet exist or has no current run, explicitly say removal is conditional. List any unique guarantee that must be preserved.

**Proposed change and owner:** Describe the concrete edit in product/testing terms and the appropriate owner.

**Validation before removal:** Give the targeted commands and the behavior/boundary they must prove. Existing assertions must be checked against current code before an actual cut.

**Cost and uncertainty:** State the measured cost with its source, expected direction of change, and unknowns. Explain risk and reversal if applied.

Repeat per recommendation; retain findings that advise keeping tests.

## Complete scoped inventory

| Test path + title / group | Behavior / unique connection | Real / mocked boundaries | Coverage overlap | Decision / finding |
|---|---|---|---|---|
| <link> | <specific behavior> | <boundaries> | <exact references or none> | <A1 / keep / unreviewed with reason> |

List parameterized cases and matrix distinctions when they change the guarantee. State how counts reconcile to the scope; do not hide unreviewed files.

## Implementation sequence

| Order | Change | Prerequisite | Verification | Owner |
|---|---|---|---|---|
| 1 | <replacement/optimization> | <evidence needed> | <targeted assertions and command> | <owner> |

Describe which candidates can be applied independently, which require replacement proof, and how to restore removed tests if the replacement is insufficient. CI selection changes must name mappings, broad-change fallback, blocking stage, actual scheduled/release trigger and owner; preserve existing gates until the replacement is validated.

## Open questions and follow-up measurements

| Unknown | Why it matters | How to resolve |
|---|---|---|
| <intent / timing / flaky cause> | <decision affected> | <source, owner, or exact scoped command> |

## Audit history

- <date / revision>: <scope, findings, decisions carried forward; no tests or CI changed>
