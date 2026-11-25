---
feature: project-memory
doc: TEST_STUBS
version: "1.1"
based_on: PRODUCT_DESCRIPTION v1.1
updated: 2026-11-25
---

# Test Stubs — Project Memory and Setup

Derived from the approved PRD and its increment slice map before test inspection. New scenarios start pending; technical evidence is mapped separately below.

v1.1 (2026-11-25, increment 007-configure-chat-output, PRD v1.1): adds TS-022–TS-059 for the new BR-18–BR-26 and the two new flows (Save an output preference; Present a report under the effective output), and rewrites TS-006 (BR-5) and TS-008 (BR-6) in place. The example shapes named by GitHub issue #34 have their own scenarios: a few scenarios (TS-037), dozens of scenarios (TS-038), a green QA run (TS-041), a QA run with failures and gaps (TS-042), several required decisions (TS-051) and everything switched off (TS-047). Same version, after Lisbon's decisions on the stubs findings (PRD v1.1 draft): TS-025, TS-026, TS-032, TS-033 assert the mirrored JSON layout and `warnings` array; TS-037, TS-038 assert the feature total plus this delivery's counts; TS-039, TS-042 assert one line per item with id and cause; new TS-060–TS-065 cover always-visible items above the row limit, a one-off request that cannot hide them, and non-object or empty values at `output` and `output.sections`. No execution plan was read.

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

<stub id="TS-006" increment="001" rule="BR-5" kind="integration" status="passing">
**Title:** Read only saved preferences
**Given** saved settings contain values and omit others (including a project that never saved an output preset), or the settings document is absent
**When** the person lists or reads preferences
**Then** saved values are returned without merging defaults, so reading the output preset in a project that never saved one reports a missing value rather than `compact`; a missing value exits 1 and a missing settings document exits 2; asking for the effective output before or after does not change what list and get return.
</stub>

<stub id="TS-007" increment="001" rule="BR-6" kind="integration" status="pending">
**Title:** Persist values without losing unrelated settings
**Given** a person has existing preferences
**When** they replace a preference or append to a list
**Then** JSON-like input is saved as its value and other input as text, missing intermediate objects are created, unrelated preferences survive, missing or null lists initialize, and serialized-equal additions occur only once with the full saved document ending in a newline.
</stub>

<stub id="TS-008" increment="001" rule="BR-6" kind="integration" status="passing">
**Title:** Reject invalid configuration operations
**Given** an edit crosses a scalar, null, or array, appends to a non-list, lacks arguments, or names an unsupported action
**When** the person submits the edit
**Then** invalid traversal and list operations exit 1, missing arguments and unsupported actions exit 2, and outside the output section no validation of preference names, ranges or model names is applied: an unknown name or out-of-range value there is saved as given. The output section is the only validated exception (TS-029).
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

<stub id="TS-022" increment="007" rule="BR-18, BR-20" kind="integration" status="passing">
**Title:** Save any documented output value, alone or with others
**Given** a project with saved settings and no output section
**When** the person saves each documented output key with each of its allowed values (every preset; `auto` and `always` for tables; a positive whole number such as 1 or 12 for the row limit; every allowed value of the six sections), one at a time and also only a preset, only one override, or nothing
**Then** every save succeeds, reading the path back returns the saved value, unrelated settings are untouched, and a project that saves nothing under output is equally valid.
</stub>

<stub id="TS-023" increment="007" rule="BR-18" kind="unit" status="passing">
**Title:** Output settings change only what the conversation shows
**Given** the same delivery is run once under `compact` with every section `off` and once under `detailed`
**When** the scenarios, coverage, QA report, verification script and any audit report are produced
**Then** the documents written are the same in content, the same evidence is collected, the same tests run, the same approval stops and workflow stages occur, and work state is the same; only the amount shown in the conversation differs.
</stub>

<stub id="TS-024" increment="007" rule="BR-18, BR-16" kind="unit" status="passing">
**Title:** Language preferences hold under every output setting
**Given** chat language is Portuguese and artifact language is English
**When** reports are presented under `compact`, `standard` and `detailed`, and under any section value
**Then** every chat summary, count line, omission note and table follows the chat language and every written document follows the artifact language, at every output setting.
</stub>

<stub id="TS-025" increment="007" rule="BR-19, BR-21" kind="integration" status="passing">
**Title:** Resolve each output field by fixed precedence
**Given** a project saves preset `standard`, an override of coverage `full`, and a row limit of 5; another saves preset `detailed` with a row limit of 5; a third saves only a preset; a fourth saves nothing under output
**When** the person asks for the effective output
**Then** each field resolves from the saved override, else the saved preset's value, else the `compact` default: the first project shows coverage `full`, row limit 5 and every other field from `standard`; the second shows row limit 5 with every other field from `detailed`; the third shows exactly its preset's values; the fourth shows exactly `compact`; the result is printed as JSON with the saved layout (`preset`, `tables`, `maxTableRows`, and `sections` holding all six of `testStubs`, `coverage`, `prdDelta`, `qaResults`, `dispatch`, `screenshots`), every field resolved and none missing, plus an empty `warnings` array; saved settings are not changed by the request.
</stub>

<stub id="TS-026" increment="007" rule="BR-19" kind="integration" status="passing">
**Title:** Effective output works without project memory or settings
**Given** a folder with no project memory, and separately a project memory with no settings document
**When** the person asks for the effective output
**Then** both succeed and print the plugin defaults (the `compact` values) as JSON in the same layout as TS-025, every field present, with an empty `warnings` array, nothing is created or written in either folder, and a standalone workflow such as the E2E audit receives the same values.
</stub>

<stub id="TS-027" increment="007" rule="BR-19, BR-24" kind="unit" status="passing">
**Title:** A request in the current message applies to that response only
**Given** saved preset `compact`
**When** the human asks in one message for the full scenario table, and in a later message asks for nothing special
**Then** the first response shows the full table, the next response returns to the saved presentation, and saved settings are unchanged; they change only when the human asks to save the preference, and that save goes through the normal configuration command.
</stub>

<stub id="TS-028" increment="007" rule="BR-19" kind="unit" status="passing">
**Title:** Every skill and agent presents from the one resolution
**Given** a saved output configuration that differs from the plugin default in every field
**When** stubs, coverage, product-rule delta, QA results, dispatch announcements, screenshots, absorption reports and E2E audit reports are presented by their different skills and agents
**Then** each presentation follows the same effective values, and no skill or agent applies a default or row limit of its own that contradicts them.
</stub>

<stub id="TS-029" increment="007" rule="BR-20, BR-6" kind="integration" status="passing">
**Title:** Refuse an invalid output value on write
**Given** a project with saved settings
**When** the person saves under output an unknown key, a section or preset value outside its allowed list, a table mode outside `auto`/`always`, or a row limit of zero, a negative number, a fraction or text
**Then** each save exits 1 with a message and the saved settings document is exactly as it was before.
</stub>

<stub id="TS-030" increment="007" rule="BR-20" kind="integration" status="passing">
**Title:** Accept a whole output object only when every entry is valid
**Given** a project with saved settings
**When** the person saves a whole object under output (or under its sections) once with only valid keys and values, and once with one invalid key or value among valid ones
**Then** the fully valid object is saved; the object with a single invalid entry exits 1 and nothing from it is saved, leaving the settings document unchanged.
</stub>

<stub id="TS-031" increment="007" rule="BR-20" kind="integration" status="passing">
**Title:** Refuse list additions under output
**Given** a project with or without an output section
**When** the person appends a value to any path under output
**Then** it exits 1 and the settings document is unchanged, because no output setting is a list.
</stub>

<stub id="TS-032" increment="007" rule="BR-20" kind="integration" status="passing">
**Title:** Fall back field by field from a hand-edited invalid value
**Given** a settings document edited by hand with preset `standard`, testStubs `everything`, row limit 0 and table mode `sometimes`
**When** the effective output is resolved
**Then** testStubs, row limit and table mode take the `standard` values, every other field resolves normally, the request succeeds, and the `warnings` array holds exactly three entries, each naming the invalid key, its saved value and the value used instead.
</stub>

<stub id="TS-033" increment="007" rule="BR-20" kind="integration" status="passing">
**Title:** Fall back to compact when the saved preset is invalid; ignore unknown keys
**Given** a settings document edited by hand with preset `verbose`, a valid coverage override `full`, and an unknown output key
**When** the effective output is resolved
**Then** `preset` resolves to `compact`, coverage is `full`, every other field takes the `compact` value, the unknown key does not appear in the result, and the `warnings` array holds one entry naming the invalid preset with `compact` used instead and one naming the ignored key.
</stub>

<stub id="TS-034" increment="007" rule="BR-20" kind="unit" status="passing">
**Title:** Show an invalid-setting warning once per session
**Given** a settings document with one invalid output value
**When** several reports are presented in the same session
**Then** the warning naming the key and the value used appears once in that session and is not repeated in later reports; a new session shows it once again while the value stays invalid.
</stub>

<stub id="TS-035" increment="007" rule="BR-21" kind="integration" status="passing">
**Title:** Each preset sets every field to its documented value
**Given** a project that saves only a preset, in turn `compact`, `standard` and `detailed`
**When** the effective output is resolved
**Then** `compact` gives testStubs summary, coverage summary, prdDelta summary, qaResults issues, dispatch brief, screenshots links, tables auto, row limit 8; `standard` gives the same except prdDelta full and row limit 15; `detailed` gives testStubs full, coverage full, prdDelta full, qaResults full, dispatch full, screenshots inline, tables always, row limit 30.
</stub>

<stub id="TS-036" increment="007" rule="BR-21" kind="unit" status="passing">
**Title:** Presets read as short, standard and close to the earlier full reports
**Given** the same delivery report with new rules, scenarios, coverage and QA results
**When** it is presented under each preset
**Then** `compact` shows a short outcome, the relevant counts, issues and decisions, and document links; `standard` adds the full product-rule delta; `detailed` shows tables close to the earlier full-table reports while its long lists still stop at its row limit with a way to expand.
</stub>

<stub id="TS-037" increment="007" rule="BR-22" kind="unit" status="passing">
**Title:** Scenario block with a few scenarios at each level
**Given** a feature that has 23 scenarios after a delivery that adds 2 and revises 1, with the row limit at 8
**When** the scenarios are reported with testStubs `off`, `summary` and `full`
**Then** `off` shows no scenario block but the scenarios document stays linked in the delivery; `summary` shows the feature total (23) and this delivery's new (2), revised (1) and retired (0) counts with the document link; `full` shows the scenario table with all 3 rows and no omission note.
</stub>

<stub id="TS-038" increment="007" rule="BR-22, BR-24" kind="unit" status="passing">
**Title:** Scenario block with dozens of scenarios stays short or states what it omits
**Given** a feature that has 59 scenarios after a delivery with 38 new and 2 revised scenarios, with the row limit at 8
**When** the scenarios are reported with testStubs `summary` and then `full`
**Then** `summary` shows only the feature total (59) and this delivery's new (38), revised (2) and retired (0) counts with the document link; `full` shows 8 of this delivery's 40 changed scenarios, states that 32 were omitted and how to see them (the document link or the request that expands the list), and never reads as complete.
</stub>

<stub id="TS-039" increment="007" rule="BR-22, BR-23" kind="unit" status="passing">
**Title:** Coverage block levels keep missing required coverage visible
**Given** coverage recommendations for 20 behaviors across unit, integration and replay levels and two owners, two of which have no required coverage yet
**When** coverage is reported with `off`, `summary` and `full`
**Then** `off` shows no coverage block but the recommendations stay linked and the two missing required items still appear at least in summary; `summary` shows counts by level and by owner plus one line per missing item with its id and cause; `full` shows the coverage table within the row limit, with the omission note when it is shortened.
</stub>

<stub id="TS-040" increment="007" rule="BR-22" kind="unit" status="passing">
**Title:** Product-rule delta in summary and in full
**Given** a product description patch with two new rules, one rewritten rule and one retired rule
**When** the delta is reported with prdDelta `summary` and `full`
**Then** `summary` lists each of the four rules by id and title with its behavior change in one sentence, enough to approve it; `full` shows the same plus the previous and new wording of the rewritten and retired rules.
</stub>

<stub id="TS-041" increment="007" rule="BR-22" kind="unit" status="passing">
**Title:** Green QA run at each results level
**Given** a QA run in which all 24 required behaviors pass and nothing is pending, failing or blocked
**When** QA results are reported with `summary`, `issues` and `full`
**Then** `summary` shows the overall result and counts; `issues` shows passes as counts with no detail rows; `full` shows every result, limited by the row limit with the omission note; every level links the QA report.
</stub>

<stub id="TS-042" increment="007" rule="BR-22, BR-23" kind="unit" status="passing">
**Title:** QA run with failures and gaps shows every issue at every level
**Given** a QA run with 20 passing behaviors, 2 failing, 1 coverage gap, 1 blocked by the environment and 1 pending decision, with the row limit at 8
**When** QA results are reported with `summary`, `issues` and `full`, and with the QA section switched to the least detailed setting
**Then** `summary` shows the overall result and counts and one line per issue with its id and cause; `issues` shows the 20 passes as a count and the 5 issues in detail; `full` shows every result; at no setting is any of the 5 issues absent.
</stub>

<stub id="TS-043" increment="007" rule="BR-22" kind="unit" status="passing">
**Title:** Dispatch announcement brief or full
**Given** three agents are dispatched at once
**When** the dispatch is announced with dispatch `brief` and `full`
**Then** `brief` shows one line per dispatch naming the agent, the work and, in compact form, every field the execution contract needs, the model among them; `full` shows the dispatch table.
</stub>

<stub id="TS-044" increment="007" rule="BR-22, BR-17" kind="unit" status="passing">
**Title:** Screenshot presentation never changes what is captured
**Given** a QA run that keeps 3 useful captures under a saved screenshot ceiling of 10
**When** results are reported with screenshots `off`, `links` and `inline`
**Then** `off` shows no capture in chat, `links` shows a link to each of the 3, `inline` embeds the 3; under all three the same 3 captures are taken and retained, and the screenshot ceiling is unaffected.
</stub>

<stub id="TS-045" increment="007" rule="BR-22" kind="unit" status="passing">
**Title:** Table mode allows prose for small amounts and never box frames
**Given** a report block holding a single piece of information and another holding several rows
**When** it is presented with tables `auto` and `always`
**Then** `auto` may show the single item as prose or a short list instead of a one-row table; `always` presents both as tables; neither mode draws box-drawing frames.
</stub>

<stub id="TS-046" increment="007" rule="BR-22, BR-24" kind="unit" status="passing">
**Title:** E2E audit chat shows diagnosis and leading recommendations
**Given** an E2E audit of 60 tests with recommendations for many of them, with the row limit at 8
**When** the audit result is presented in the conversation
**Then** it shows the diagnosis and the leading recommendations up to 8, states how many were omitted and links the audit report, which holds the full inventory and rationale.
</stub>

<stub id="TS-047" increment="007" rule="BR-23" kind="unit" status="passing">
**Title:** Everything off still shows what needs attention
**Given** preset `compact` with every section set to its lowest value (`off` where allowed) and a delivery that has a failing check, a blocker, a missing required coverage item, an open product question, a required decision, approval options and a human verification walk
**When** each of those reports is presented
**Then** the failure, the blocker, the missing coverage item, the question, the decision, the options and approval, and the walk steps each appear at least in summary.
</stub>

<stub id="TS-048" increment="007" rule="BR-23" kind="unit" status="passing">
**Title:** Compact options, approvals and walks keep every choice and action
**Given** an approval stop with five options and a verification walk with six actions, under `compact`
**When** they are presented
**Then** the options may be shorter but all five choices appear with their meaning unchanged, the approval is still requested, and the walk lists all six actions.
</stub>

<stub id="TS-049" increment="007" rule="BR-23" kind="unit" status="passing">
**Title:** An omitted detail is not missing evidence
**Given** a green QA run reported under `compact`, where passing test details are not shown in chat
**When** the human or a later phase inspects the evidence
**Then** the QA result is still green, the complete report and evidence are inspectable through the link in the report that omitted them, and no behavior is treated as unproven because its detail was not shown.
</stub>

<stub id="TS-050" increment="007" rule="BR-24" kind="unit" status="passing">
**Title:** Row limit boundary
**Given** a row limit of 8 and informational lists of 8 and 9 items
**When** each list is presented
**Then** the 8-item list shows all 8 with no omission note; the 9-item list shows 8, states that 1 was omitted and how to see it.
</stub>

<stub id="TS-051" increment="007" rule="BR-24, BR-23" kind="unit" status="passing">
**Title:** Several required decisions are never cut by the row limit
**Given** a row limit of 8 and a stop that needs 12 product answers, or 12 items the human must approve
**When** the stop is presented
**Then** all 12 are reachable without anything silently dropped: they are grouped or explicitly paginated (for example "questions 1–8 of 12", then the rest), and the stop does not proceed as answered or approved while any remains unseen.
</stub>

<stub id="TS-052" increment="007" rule="BR-24" kind="unit" status="passing">
**Title:** Expansion re-presents without redoing work
**Given** a completed stubs report and QA report shown under `compact`
**When** the human asks "show all TS", "expand TS-014" or "show the full QA report"
**Then** the requested existing information is shown in full for that response only; no phase restarts, no test reruns, approvals, work state and saved settings are unchanged, and the next report returns to the effective presentation.
</stub>

<stub id="TS-053" increment="007" rule="BR-25" kind="integration" status="passing">
**Title:** A project without output settings presents as compact
**Given** an existing project whose settings have no output section
**When** reports are presented and the effective output is requested
**Then** presentation is `compact`; after the person saves preset `detailed`, presentation is close to the earlier full-table reports; the change of default is documented.
</stub>

<stub id="TS-054" increment="007" rule="BR-25" kind="unit" status="passing">
**Title:** Initialization saves only the compact preset for a new project
**Given** a project with no memory
**When** the person initializes it
**Then** the saved settings contain output preset `compact` and no section value, table mode or row limit under output, so a later preset change takes effect on every field.
</stub>

<stub id="TS-055" increment="007" rule="BR-25, BR-13" kind="unit" status="passing">
**Title:** Reinitialization fills only a missing preset and keeps saved output choices
**Given** one existing project without an output section, one with preset `detailed`, and one with only a coverage override `full`
**When** initialization is refreshed in each
**Then** the first gains preset `compact`; the second keeps `detailed`; the third keeps its coverage override and gains preset `compact`; none gains section values, table mode or row limit, and no saved output value is replaced.
</stub>

<stub id="TS-056" increment="007" rule="BR-26" kind="integration" status="passing">
**Title:** Unset removes one saved key and keeps everything else
**Given** saved settings with an output coverage override, an agent model preference and other values
**When** the person unsets the coverage override, and separately unsets the agent model preference
**Then** each named key is removed, every other saved value is identical, the document keeps the same serialization with a trailing newline, nothing outside the settings document changes, and work state, documents and approvals are untouched.
</stub>

<stub id="TS-057" increment="007" rule="BR-26, BR-5, BR-6" kind="integration" status="passing">
**Title:** Unset of a path that is not saved, or an incomplete request
**Given** saved settings, and separately a project memory without a settings document
**When** the person unsets a path that does not exist, a path that passes through a text, number, null or list value, gives no path, or unsets anything in the project without settings
**Then** the missing path and the traversal cases exit 1 and write nothing; no path exits 2; no settings document exits 2.
</stub>

<stub id="TS-058" increment="007" rule="BR-26, BR-20" kind="integration" status="passing">
**Title:** Unset clears an invalid or unknown output key left by a hand edit
**Given** a hand-edited settings document with an invalid row limit and an unknown key under output
**When** the person unsets each of them
**Then** both are removed without any value validation, and the invalid-setting warnings for them no longer appear.
</stub>

<stub id="TS-059" increment="007" rule="BR-26, BR-21" kind="integration" status="passing">
**Title:** After unset, a field follows the preset again
**Given** preset `standard` with saved overrides for coverage, table mode and row limit
**When** the person unsets each override, then unsets the preset, then (from the original state) unsets the whole output section
**Then** each unset field takes the `standard` value; after the preset is removed every field not overridden takes the `compact` value; after the whole section is removed every field is `compact`.
</stub>

<stub id="TS-060" increment="007" rule="BR-23, BR-24" kind="unit" status="passing">
**Title:** More failures and blockers than the row limit are all listed
**Given** a QA run with 30 passing behaviors, 12 failing and 3 blocked, with the row limit at 8
**When** QA results are reported with `summary`, `issues` and `full`
**Then** at every level all 12 failures and all 3 blockers appear, each with at least one line giving its id and cause, with no omission note on them; only the detail per item grows with the level; at `full` the passing rows alone follow the row limit and state how many were omitted.
</stub>

<stub id="TS-061" increment="007" rule="BR-23, BR-24" kind="unit" status="passing">
**Title:** More missing required coverage items than the row limit are all listed
**Given** coverage recommendations with 11 missing required coverage items, with the row limit at 8
**When** coverage is reported with `off`, `summary` and `full`
**Then** at every level all 11 missing items appear, one line each with id and cause, never shortened or replaced by an omitted count; at `full` the remaining recommendation rows follow the row limit with an omission note.
</stub>

<stub id="TS-062" increment="007" rule="BR-19, BR-23" kind="unit" status="passing">
**Title:** A request in the message cannot hide always-visible content
**Given** a QA report with 2 failures, 1 blocker, 1 missing coverage item and an open decision, under any preset
**When** the human asks in the current message to "hide the failures" or to show only the result
**Then** the response gives less detail but still shows each failure, the blocker and the missing coverage item with id and cause, the open decision and the options; saved settings are unchanged.
</stub>

<stub id="TS-063" increment="007" rule="BR-20" kind="integration" status="passing">
**Title:** Refuse a non-object value at output or output.sections
**Given** a project with saved settings
**When** the person saves a number, text, null or a list at `output`, and separately at `output.sections`
**Then** each save exits 1 and the settings document is byte-for-byte unchanged.
</stub>

<stub id="TS-064" increment="007" rule="BR-20" kind="integration" status="passing">
**Title:** An empty object at output or output.sections means nothing saved there
**Given** a project with preset `standard` saved
**When** the person saves `{}` at `output.sections`, and in another project saves `{}` at `output`
**Then** both saves succeed; in the first every section follows `standard`; in the second every field is `compact`; neither produces a warning.
</stub>

<stub id="TS-065" increment="007" rule="BR-20" kind="integration" status="passing">
**Title:** A hand-edited non-object at output or output.sections is treated as absent
**Given** one settings document edited by hand with preset `detailed` and `output.sections` set to text, and another with `output` itself set to a number
**When** the effective output is resolved and reports are presented in one session
**Then** the first resolves every section from `detailed` and keeps the other `detailed` fields; the second resolves every field to `compact`; each request succeeds with one `warnings` entry naming the key, its saved value and the value used, and the conversation shows that warning once per session.
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

### v1.1 delta (increment 007-configure-chat-output)

Inspected after the bodies above were written: `cli/test/cli.test.js` (real `node src/index.js` subprocesses over a temporary `.hele/`, including `config set / get / add round-trip`), `cli/test/language.test.js` and `cli/test/direct-path-reports.test.js` (contract-text checks over `templates/chat-reports.md` with a `block()` heading slicer and a box-drawing negative assertion), and `.github/workflows/ci.yml` (one `npm test` job plus the stale `cli/dist/` check on every PR). No execution map file exists; the CI workflow is the map.

Two kinds of behavior are in this delta. CLI behaviors (BR-5, BR-6, BR-19 resolution command, BR-20, BR-21 values, BR-25 default, BR-26) have a real executable seam: a subprocess against a temporary project proves exit codes, printed JSON and that the settings file is byte-identical after a refusal. Presentation behaviors (BR-19 one-off request and single resolution, BR-20 once-per-session warning, BR-22, BR-23, BR-24, BR-21/BR-25 presentation, BR-18 non-interference) are carried by templates, skills and agent prompts; the only proof the repository can run is a contract-text check, which proves the rule is written and stays written, never that an agent renders it. The runtime proof is a replay (no runner exists) or the human walk at QA. No API or browser E2E applies; no Playwright.

| Stubs | Level | Owner | Test path / title | Assertions and real / mocked boundaries | Rationale | Execution scope |
|---|---|---|---|---|---|---|
| TS-006, TS-008 | integration | Owning CLI engineer; Wylie reviews evidence | Extend existing `cli/test/cli.test.js` — proposed "config get never merges output defaults" and "config edits outside output stay unvalidated" | Real CLI subprocess, temporary project. Assert: `config get output.preset` in a project with no output exits 1 (not `compact`); `config list` equals the saved file before and after `config effective output`; set of an unknown non-output key and an out-of-range `qa.maxScreenshots` succeeds and is saved as given. Close the gaps already recorded for TS-006/TS-008 in the same change: missing settings exit 2, traversal through scalar/null/array exit 1, unsupported action exit 2. | The existing round-trip test is the natural home and already uses the subprocess helper; the negative assertion is what detects the validation leaking outside `output`. | Existing `npm test` job, every PR. |
| TS-022, TS-029, TS-030, TS-031, TS-063, TS-064 (write part) | integration | Owning CLI engineer; Wylie reviews evidence | Proposed new `cli/test/config-output.test.js` — "output writes are validated" | Real subprocess, real temp file system, nothing mocked. Table-driven: every allowed value of every key accepted and read back with `get`; each invalid case (unknown key; bad enum per field; `maxTableRows` 0, -3, 1.5, `ten`, quoted `"8"`); whole object valid vs. one invalid entry; `add` under output; a number, text, null and list at `output` and at `output.sections` (TS-063); `{}` at both accepted (TS-064). For every refusal assert exit 1 and a byte-for-byte identical settings file (Buffer compare), not just an unchanged parsed value. | The claim is exit code plus no write, which only the process boundary proves. A pure validator unit test may be added by the engineer for speed but does not replace this. | Existing `npm test` job, every PR. |
| TS-025, TS-026, TS-032, TS-033, TS-035, TS-053 (effective value part), TS-064, TS-065 (resolution part) | integration | Owning CLI engineer; Wylie reviews evidence | Proposed `cli/test/config-output.test.js` — "effective output resolution" | Subprocess `hele config effective output`, parse JSON. Assert the exact key set (`preset`, `tables`, `maxTableRows`, `sections` with the six fields, `warnings`) with deep-equal on the whole object, so a missing or extra field fails; `warnings` is an array, empty when nothing is invalid, otherwise one entry per invalid saved value naming key, saved value and value used (exact count asserted). Hand-edited non-object at `output.sections` and at `output` resolve as absent with one warning each; `{}` resolves with no warning. Assert the three preset columns as literal values written in the test (not read from the plugin defaults file, or a wrong default would pass); override beats preset, including a saved `maxTableRows` under `detailed`; no-output project equals `compact`; hand-edited invalid section value, table mode, row limit, unknown key and invalid preset each fall back as stated with one warning naming the key and the value used; folder with no `.hele` (with `HELE_DIR` cleared, as the existing helper does) and `.hele` without `settings.json` both exit 0 with defaults; directory listing and settings bytes unchanged after the call. | Only a subprocess proves the command does not inherit the "no `.hele` exits 2" behavior and writes nothing. | Existing `npm test` job, every PR. |
| TS-056, TS-057, TS-058, TS-059 | integration | Owning CLI engineer; Wylie reviews evidence | Proposed `cli/test/config-output.test.js` — "config unset" | Subprocess: removed key gone, all other values deep-equal, 2-space JSON with trailing newline, no other file under `.hele/` changed; non-output path works too; missing path and traversal through scalar/null/array exit 1 with identical bytes; no path exits 2; no settings document exits 2; invalid and unknown output keys removable; then `config effective output` shows the preset value, `compact` after removing the preset, all `compact` after removing `output`. | Same seam as above; the unset-then-resolve chain is the flow "Save an output preference" end to end without an agent. | Existing `npm test` job, every PR. Rebuild `cli/dist/hele.cjs` in the same change (CI stale-bundle check). |
| TS-054, TS-055 | unit (contract text) | Owning engineer of the init skill and the plugin defaults; Wylie (coverage) | Proposed new `cli/test/chat-output.test.js` — "initialization saves only the output preset" | Read the shipped init contract and plugin defaults with `fs.readFileSync`, as `cli/test/language.test.js` does. Assert: a new project gets `output.preset` `compact`; refresh adds it only when missing and never replaces a saved output value; neither writes section values, `tables` or `maxTableRows`. Because initialization copies missing keys from the plugin defaults, also assert those defaults carry no output field other than the preset that a refresh would copy into saved settings. | Init is an agent workflow with no CLI seam; text is the only cheap guard. Whether an agent obeys it stays a runtime gap. | Existing `npm test` job, every PR. |
| TS-027, TS-028, TS-034, TS-036, TS-037–TS-052, TS-060–TS-062 | unit (contract text) | Owning engineer of `templates/chat-reports.md` and of each skill/agent that presents a report (stubs, coverage, PRD delta, QA, dispatch, screenshots, absorb report, E2E audit); Wylie (coverage) | Proposed `cli/test/chat-output.test.js` — one test per behavior group, reusing the `block()` heading-slice pattern of `cli/test/direct-path-reports.test.js` | Assert in the shipped text: each report block names its output section and the shape of every allowed value (BR-22 table); the always-visible list (BR-23) is stated unconditionally, not inside any section value and not overridable by a request in the message; failures, blockers and missing required coverage are stated as outside the row limit with one line per item (id and cause); the testStubs summary names the feature total plus the delivery's new/revised/retired counts; the omission line carries a count and a link or expansion request; question packs, approvals and Options are exempt from the row limit and grouped or paginated instead; expansion is stated to re-present only (no phase restart, rerun, approval, work-state or settings change); a one-off request is not saved; the warning shows once per session; screenshots value is independent of `qa.maxScreenshots`; no box-drawing frames (reuse the existing `[┌┐└┘│─├┤]` negative assert). Negative scan across `skills/`, `agents/` and `templates/`: no presentation default or row-limit number outside the one resolution, and every presenting skill points at `hele config effective output`. | Cheapest check that fails when a later edit drops a section, hides a failure behind `off`, or reintroduces a private default. Cannot detect a model ignoring the text. | Existing `npm test` job, every PR. Affected existing regressions: `cli/test/direct-path-reports.test.js` and `cli/test/language.test.js` assert on the same template blocks (Direct close fields, Options rows, Unexplained failure two rows, language sentences) and must keep passing; the full suite is selected (sub-second). |
| TS-023, TS-024, TS-027, TS-034, TS-036–TS-049, TS-051, TS-052, TS-053 (presentation part), TS-060–TS-062, TS-065 (once-per-session part) | integration (runtime replay) | Lisbon (runtime behavior), Wylie (coverage), Rigsby (runner) | Proposed runtime replay — project-memory/007 (no runner exists) | Same disposable project run under `compact` with every section at its lowest value and under `detailed`; seeded shapes: 3 scenarios, 40 scenarios, green QA of 24, QA with 2 failures + 1 gap + 1 blocked + 1 pending decision, QA with 12 failures + 3 blocked over a limit of 8, 11 missing coverage items, a "hide the failures" request, 12 required decisions, a long E2E audit. Assert written documents identical between runs, same tests run, same stops; chat contains every always-visible item; omission notes carry counts; expansion produces no new tool runs. Real Claude runtime, nothing mocked. | Only a real session can show an agent dropping a failure, cutting a question, or rerunning tests on "show all TS". Not a mandate for this increment. | Not scheduled. Until a runner exists, the closest real evidence is the human walk Wylie prepares at QA, one flow per shape above. |
| TS-020, TS-021 | — | — | No change | Regression only: TS-024 and TS-044 restate that language and the screenshot ceiling are unaffected by output. | Rules BR-16 and BR-17 are unchanged. | Covered by the rows above. |

## Evidence

| Stub | Result | Test / command | Code identity | Result artifact / output | Limitations |
|---|---|---|---|---|---|
| TS-001 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-002 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Invalid explicit overrides, file-versus-directory override, and nearest-of-multiple-ancestors cases are not asserted. |
| TS-003 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-004 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Run the complete Given/When/Then in controlled session fixtures and retain observable outputs, branch decisions and resulting artifact/diff evidence. No such live assessment was executed. |
| TS-005 | pending | Not yet run for this behavior | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | No current test distinguishes binary-only check from project database initialization; use a controlled command boundary and assert no initialization call. |
| TS-006 | passing | `cli/test/cli.test.js` — "TS-006 config get and list return saved values only; effective changes nothing" — integration (real CLI subprocess) | HEAD `d27fe70` + uncommitted increment 007 tree; `cli/dist/hele.cjs` sha256 `67cb3fc4…1e3a`, `cli/src/output.js` `927ef5a3…`, `templates/chat-reports.md` `147dd2bb…` | [QA_REPORT run 1](increments/007-configure-chat-output/QA_REPORT.md) (E1 fresh `npm test` 215/215) | None for the CLI claim. |
| TS-007 | pending | `cd cli && npm test` (partial evidence) | `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; relevant hashes in execution record | [Shared run](../../reports/absorb-cli-execution.md), [raw output](../../reports/absorb-cli-tests.tap) | Null lists, general JSON values, serialized object equality, preservation of unrelated values and trailing newline are not explicitly asserted. |
| TS-008 | passing | `cli/test/cli.test.js` — "TS-008 keys outside output keep the unvalidated write behavior and exit codes" — integration (real CLI subprocess) | HEAD `d27fe70` + uncommitted increment 007 tree; `cli/dist/hele.cjs` sha256 `67cb3fc4…1e3a`, `cli/src/output.js` `927ef5a3…`, `templates/chat-reports.md` `147dd2bb…` | [QA_REPORT run 1](increments/007-configure-chat-output/QA_REPORT.md) (E1 fresh `npm test` 215/215) | None for the CLI claim. |
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
| TS-022, TS-025, TS-026, TS-029–TS-033, TS-035, TS-053, TS-056–TS-059, TS-063–TS-065 | passing | `cli/test/config-output.test.js` (22 tests) — integration (real `node src/index.js` subprocess, temporary `.hele/`, byte-compare of `settings.json` on every refusal) | HEAD `d27fe70` + uncommitted increment 007 tree; `cli/dist/hele.cjs` sha256 `67cb3fc4…1e3a`, `cli/src/output.js` `927ef5a3…`, `templates/chat-reports.md` `147dd2bb…` | [QA_REPORT run 1](increments/007-configure-chat-output/QA_REPORT.md) (E1 fresh `npm test` 215/215); hand walk of the built bundle E2 | TS-026's E2E-audit clause, TS-053's documentation clause and TS-065's once-per-session clause are contract text (`chat-output-validation.test.js`, `output-surfaces.test.js`, `chat-output.test.js`); the rendered warning in a live session is the human walk V2. |
| TS-023, TS-024, TS-027, TS-028, TS-034, TS-036–TS-052, TS-054, TS-055, TS-060–TS-062 | passing (contract-text level) | `cli/test/chat-output.test.js`, `chat-output-delivery.test.js`, `chat-output-validation.test.js`, `init-output.test.js`, `output-surfaces.test.js` — unit (contract text, shipped markdown read with `fs.readFileSync`) | HEAD `d27fe70` + uncommitted increment 007 tree; `cli/dist/hele.cjs` sha256 `67cb3fc4…1e3a`, `cli/src/output.js` `927ef5a3…`, `templates/chat-reports.md` `147dd2bb…` | [QA_REPORT run 1](increments/007-configure-chat-output/QA_REPORT.md) (E1 fresh `npm test` 215/215); Wylie deletion probes E3 (17 of 20 caught; the 3 missed clauses have a surviving pinned clause) | Proves the rule is written and stays written, never that an agent renders it. Runtime replay not run (no runner). Human flows V3–V6 prepared, not executed. |

v1.1 (increment 007, QA run 1, 2026-11-25): TS-006, TS-008 and TS-022–TS-065 are passing on the code identity above: CLI behaviors at integration level through the real subprocess, presentation behaviors at contract-text level only. Details in [QA_REPORT](increments/007-configure-chat-output/QA_REPORT.md). TS-001–TS-005, TS-007 and TS-009–TS-021 keep their earlier status: no mapped behavior there has every required assertion demonstrated. The shared run passed 27 tests; this is not 27 accepted product scenarios. The reported user plugin-update/init/read exercise is partial contextual evidence without a retained branch-complete trace, and is not promoted to a passing stub.
