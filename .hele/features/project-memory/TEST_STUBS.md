---
feature: project-memory
doc: TEST_STUBS
version: "1.0"
based_on: PRODUCT_DESCRIPTION v1.0
updated: 2026-11-18
---

# Test Stubs — Project Memory and Setup

Derived from the approved PRD and its increment slice map before test inspection. New scenarios start pending; technical evidence is mapped separately below.

<stub id="TS-001" increment="001" rule="BR-1" kind="integration" status="pending">
**Title:** Install the shipped Claude Code plugin
**Given** a person chooses the published marketplace or contributor clone
**When** they install the plugin and invoke its terminal companion
**Then** the Claude Code plugin and standalone terminal companion are available, plugin and CLI versions remain separate, and no shipped Cursor or Codex adapter is promised.
</stub>

<stub id="TS-002" increment="001" rule="BR-2" kind="integration" status="pending">
**Title:** Resolve explicit and nearest project memory
**Given** an explicit memory location, nested project, or missing memory
**When** a memory-dependent command runs
**Then** a valid explicit directory wins; an invalid explicit location never falls back; otherwise the nearest ancestor memory wins, alternate folder preferences are ignored, and absence is reported with exit code 2.
</stub>

<stub id="TS-003" increment="001" rule="BR-3" kind="integration" status="pending">
**Title:** Create only initial memory
**Given** a project has no memory
**When** the person initializes it
**Then** settings preserve the selected design choice, the feature registry starts empty with a feature-directory placeholder, no feature description is created, and a non-Git project is reported without silently initializing Git.
</stub>

<stub id="TS-004" increment="001" rule="BR-4" kind="integration" status="pending">
**Title:** Establish task-tracking readiness
**Given** task tracking is present, absent, or cannot initialize
**When** installation runs
**Then** the available binary is reused or installed through an available supported method, the project database is initialized without replacing agent guidance, and failures are explicit blockers.
</stub>

<stub id="TS-005" increment="001" rule="BR-4" kind="integration" status="pending">
**Title:** Distinguish availability from readiness
**Given** a person only requests an installation check
**When** the check finishes
**Then** it reports binary availability without initializing or claiming readiness of the project database.
</stub>

<stub id="TS-006" increment="001" rule="BR-5" kind="integration" status="pending">
**Title:** Read only saved preferences
**Given** saved settings contain values and omit others, or the settings document is absent
**When** the person lists or reads preferences
**Then** saved values are returned without merging defaults; a missing value exits 1 and a missing settings document exits 2.
</stub>

<stub id="TS-007" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Persist values without losing unrelated settings
**Given** a person has existing preferences
**When** they replace a preference or append to a list
**Then** JSON-like input is saved as its value and other input as text, missing intermediate objects are created, unrelated preferences survive, missing or null lists initialize, and serialized-equal additions occur only once with the full saved document ending in a newline.
</stub>

<stub id="TS-008" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Reject invalid configuration operations
**Given** an edit crosses a scalar, null, or array, appends to a non-list, lacks arguments, or names an unsupported action
**When** the person submits the edit
**Then** invalid traversal and list operations exit 1, missing arguments and unsupported actions exit 2, and no extra validation of preference names, ranges or model names is implied.
</stub>

<stub id="TS-009" increment="002" rule="BR-7" kind="integration" status="pending">
**Title:** List registry state without inventing progress
**Given** the registry is populated, missing, or malformed
**When** the person lists features in human or machine-readable form
**Then** registered summaries and description versions are returned, a missing registry yields an empty list, malformed JSON exits 2, and tolerated legacy fields do not become a progress board or integrity guarantee.
</stub>

<stub id="TS-010" increment="002" rule="BR-8" kind="integration" status="pending">
**Title:** Rank registry matches consistently
**Given** several registered features match with differing case, separators, accents, names, aliases or summaries
**When** the person searches
**Then** each receives its best score, exact slug scores 100, exact alias 95, name substring 80, alias substring 78, approximate similarity at most 75 and summary overlap at most 55; scores below 40 are excluded and remaining results descend by score in human or machine-readable form without creating work.
</stub>

<stub id="TS-011" increment="002" rule="BR-9" kind="integration" status="pending">
**Title:** Fall back only after registry search fails
**Given** registry matching finds no qualifying match and feature documents may contain query words
**When** the person searches
**Then** only normalized query tokens longer than two characters participate, matching documents are grouped by feature, content-only hits prompt alias repair, and lowercased document content does not acquire the registry accent-folding guarantee.
</stub>

<stub id="TS-012" increment="002" rule="BR-9" kind="integration" status="pending">
**Title:** Report no match and incomplete search requests
**Given** neither registry nor document text matches, or no query/list choice was supplied
**When** search runs
**Then** no match advises confirmation before creating a feature, while missing search terms without a list request exits 2.
</stub>

<stub id="TS-013" increment="002" rule="BR-10" kind="integration" status="pending">
**Title:** Explain supported workflows without memory
**Given** the project has no initialized memory
**When** the person requests overview or named workflow help
**Then** the canonical README flow appears in overview, supported short and prefixed names resolve, unknown names exit 1 with supported choices, absorb and paper-to-code remain absent from the catalog, and no workflow is executed.
</stub>

<stub id="TS-014" increment="003" rule="BR-11" kind="integration" status="pending">
**Title:** Collect design participation only once
**Given** a new project needs a design choice or an existing project already has one
**When** initialization asks about design
**Then** existing-system paths or future design work enable design, no-design disables it, existing choices are preserved without asking again, and no-design does not remove consumer design capabilities.
</stub>

<stub id="TS-015" increment="003" rule="BR-12" kind="integration" status="pending">
**Title:** Retain team preferences with runtime limits
**Given** a person saves concurrency and named-role model preferences
**When** those preferences are retained and explained
**Then** the default concurrency is four, plain model values apply across runtimes, default mappings name Claude Code and Cursor but no Codex mapping, and conflicting fallback versus strict dispatch language is disclosed without promising unsupported dispatch.
</stub>

<stub id="TS-016" increment="003" rule="BR-13" kind="integration" status="pending">
**Title:** Migrate memory while preserving product decisions
**Given** existing memory has missing keys, legacy role preferences and registry statuses
**When** initialization refreshes memory
**Then** missing settings and feature structures are filled without replacing chosen values or descriptions; the old database role is renamed only if the new role is absent, the retired manager role and legacy registry statuses are removed while other metadata survives, session guidance is replaced from current templates, and no Cursor directory is created.
</stub>

<stub id="TS-017" increment="004" rule="BR-14" kind="integration" status="pending">
**Title:** Select the existing installation scope
**Given** project, user or no applicable installation is available
**When** the person requests an update
**Then** the current project installation wins over user scope; absent either, installation instructions are shown and updating stops, without inventing another marketplace or target.
</stub>

<stub id="TS-018" increment="004" rule="BR-15" kind="integration" status="pending">
**Title:** Refresh installation in the required order
**Given** an installed plugin uses a local or remote marketplace
**When** the person updates it
**Then** local source is pulled first where applicable, the existing marketplace refresh precedes plugin update at the chosen scope, no automatic yes option is passed, and any CLI confirmation returns control to the human with the command.
</stub>

<stub id="TS-019" increment="004" rule="BR-15" kind="integration" status="pending">
**Title:** Report update outcome and refresh requirements
**Given** an update has known before and after versions
**When** the result is reported
**Then** scope and both versions appear, unchanged means already current, changed means restart then one initialization refresh for existing memory, and updating creates no product description or product commit.
</stub>

<stub id="TS-020" increment="005" rule="BR-16" kind="integration" status="pending">
**Title:** Keep conversation and artifact language independent
**Given** language preferences are missing or explicitly configured
**When** reports and artifacts are produced and initialization is refreshed
**Then** chat defaults to the session language or the explicit tag, artifacts default to English with en and en-US equivalent, labels and prose follow chat preferences while filenames, commands, identifiers and formal agent tags stay unchanged; CLI output remains English and existing choices survive missing-key migration.
</stub>

<stub id="TS-021" increment="005" rule="BR-17" kind="integration" status="pending">
**Title:** Treat evidence-image preference as a ceiling
**Given** the default or a saved screenshot preference is available
**When** QA chooses useful evidence
**Then** ten is the default maximum, zero useful images is allowed, saving a value does not impose CLI range validation or prove capture, and the maximum is a ceiling rather than a required image count.
</stub>

## Coverage

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-001 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-002 | integration | Owning CLI engineer; Wylie reviews evidence | cli/test/dir.test.js: all six resolver cases; cli/test/cli.test.js: errors with exit code 2 when no .hele exists | Real temporary directories prove current/ancestor discovery, ignored alternate folder configuration, valid explicit override and missing-memory exit 2. Remaining: Invalid explicit overrides, file-versus-directory override, and nearest-of-multiple-ancestors cases are not asserted. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-003 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-004 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-005 | integration | Wylie + owning CLI engineer | Proposed installer integration test (not implemented) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: No current test distinguishes binary-only check from project database initialization; use a controlled command boundary and assert no initialization call. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-006 | integration | Owning CLI engineer; Wylie reviews evidence | cli/test/cli.test.js: config set / get / add round-trip | Real source CLI subprocesses save and retrieve number 6 and text sonnet from temporary settings. Remaining: Missing settings/value exits and absence of implicit defaults merge are not asserted. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-007 | integration | Owning CLI engineer; Wylie reviews evidence | cli/test/cli.test.js: config set / get / add round-trip | Real source CLI saves a number and string, creates missing model/list paths and deduplicates a repeated string. Remaining: Null lists, general JSON values, serialized object equality, preservation of unrelated values and trailing newline are not explicitly asserted. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-008 | integration | Owning CLI engineer; Wylie reviews evidence | Proposed extension of cli/test/cli.test.js (not implemented) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-009 | integration | Owning CLI engineer; Wylie reviews evidence | cli/test/cli.test.js: find --list shows registered features; find --json returns machine-readable output | Real CLI fixture returns slug/summary without the legacy building badge; search JSON returns the expected match. Remaining: Missing/malformed registry, list JSON, PRD version output, arbitrary tolerated fields and absence of integrity enforcement are not asserted. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-010 | integration | Owning CLI engineer; Wylie reviews evidence | cli/test/find.test.js: norm/fuzzy/scoreFeature cases; cli/test/cli.test.js: accented alias and JSON search cases | Direct scoring assertions prove normalization, exact slug 100, exact alias 95, title substring 80, typo above threshold and unrelated score below it; CLI returns one accented alias match. Remaining: Alias-substring 78, summary 55/fuzzy 75 ceilings, best-score competition, multiple-match descending order and exact threshold boundary are not all asserted. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-011 | integration | Owning CLI engineer; Wylie reviews evidence | Proposed extension of cli/test/cli.test.js (not implemented) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-012 | integration | Owning CLI engineer; Wylie reviews evidence | cli/test/cli.test.js: find reports no matches for unrelated terms | Real CLI with a temporary registry emits NO MATCHES. Remaining: Confirmation advice and missing-query exit 2 are not asserted; content fallback branch is absent from the fixture. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-013 | integration | Owning CLI engineer; Wylie reviews evidence | cli/test/cli.test.js: ai overview and README use the canonical flow diagram; existing-suite audit help is discoverable without an initialized project | Real source CLI overview contains the exact README canonical diagram; fix-e2e short and two prefixed names produce identical help without creating files. Remaining: Other supported names, unknown-name exit/choices, absent absorb/paper-to-code entries and all nonexecution side effects are not fully asserted. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-014 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-015 | integration | Wylie + owning CLI engineer | cli/test/cli.test.js: mergeCursorModels expands strings and fills missing cursor keys | Pure helper assertions prove selected Claude/Cursor model normalization and default completion. Remaining: This parked helper is not live dispatch proof; concurrency, runtime fallback/conflicting strict wording and unsupported-runtime limitations remain unexercised. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-016 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-017 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-018 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-019 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-020 | integration | Wylie + owning CLI engineer | cli/test/language.test.js: language defaults split chat from artifacts; chat templates render tables in the session language | Default JSON values auto/en and required source-template strings are asserted. Remaining: Actual multilingual agent reports, invariant identifiers, en-US equivalence and preservation during initialization are not executed; source-text matches do not prove rendered behavior. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |
| TS-021 | integration | Wylie + Lisbon | Proposed controlled Claude Code session assessment (no test file added) | No current executable assertion or session trace covers this scenario. The PRD/source establishes the contract only. Remaining: Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. | Use existing CLI/helper checks where executable; agent behavior needs a controlled live-session trace. No browser test is justified by source prose alone. | Full CLI suite reused; see [execution evidence](../../reports/absorb-cli-execution.md). Proposed live checks are not scheduled CI. |

## Evidence

| Stub | Result | Test / command | Code identity | Result artifact / output | Limitations |
|---|---|---|---|---|---|
| TS-001 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-002 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Invalid explicit overrides, file-versus-directory override, and nearest-of-multiple-ancestors cases are not asserted. |
| TS-003 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-004 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-005 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | No current test distinguishes binary-only check from project database initialization; use a controlled command boundary and assert no initialization call. |
| TS-006 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Missing settings/value exits and absence of implicit defaults merge are not asserted. |
| TS-007 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Null lists, general JSON values, serialized object equality, preservation of unrelated values and trailing newline are not explicitly asserted. |
| TS-008 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects. |
| TS-009 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Missing/malformed registry, list JSON, PRD version output, arbitrary tolerated fields and absence of integrity enforcement are not asserted. |
| TS-010 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Alias-substring 78, summary 55/fuzzy 75 ceilings, best-score competition, multiple-match descending order and exact threshold boundary are not all asserted. |
| TS-011 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Missing temporary-project CLI assertions for all conditions in this scenario, including success/error outputs and persistence effects. |
| TS-012 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Confirmation advice and missing-query exit 2 are not asserted; content fallback branch is absent from the fixture. |
| TS-013 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Other supported names, unknown-name exit/choices, absent absorb/paper-to-code entries and all nonexecution side effects are not fully asserted. |
| TS-014 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-015 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | This parked helper is not live dispatch proof; concurrency, runtime fallback/conflicting strict wording and unsupported-runtime limitations remain unexercised. |
| TS-016 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-017 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-018 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-019 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-020 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Actual multilingual agent reports, invariant identifiers, en-US equivalence and preservation during initialization are not executed; source-text matches do not prove rendered behavior. |
| TS-021 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |

All scenarios remain pending because no mapped behavior has every required assertion demonstrated. The shared run passed 27 tests; this is not 27 accepted product scenarios. The reported user plugin-update/init/read exercise is partial contextual evidence without a retained branch-complete trace, and is not promoted to a passing stub.
