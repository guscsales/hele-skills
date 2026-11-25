---
feature: project-memory
increment: 007-configure-chat-output
doc: QA_REPORT
run: 2
based_on: project-memory TEST_STUBS v1.1 · guided-delivery TEST_STUBS v1.2 · product-absorption TEST_STUBS v1.1
verdict: green
updated: 2026-11-25
---

# QA Report — project-memory · increment 007 · run 2

## Summary

Increment 007 lets a project choose how much of each report appears in the conversation. `.hele/settings.json` `output` holds a preset (`compact` by default, `standard`, `detailed`), `tables`, `maxTableRows` and six section values. The CLI refuses an invalid `output` write and leaves the file byte-identical. `hele config effective output` prints the one resolution, works without `.hele/` and writes nothing. `hele config unset` removes a saved key. Every skill and agent that presents a report reads that resolution. Failures, blockers, missing required coverage, questions, decisions, options and walk steps stay visible under every setting. Documents, evidence and tests do not change with the setting.

**Verdict: green at integration and contract-text level.** 52 stubs are in scope: 46 new or rewritten in project-memory, 3 in guided-delivery and 3 in product-absorption. Run 1 was red for two coverage gaps. The engineer closed both with test-only assertions, and this run 2 confirms them.

- **Passing: 52.** 19 CLI behaviors are passing at integration level: a real `node src/index.js` subprocess runs against a temporary `.hele/`, and nothing is mocked. 33 presentation behaviors are passing at contract-text level: 27 in project-memory, 3 in guided-delivery and 3 in product-absorption.
- **Pending: 0.** guided-delivery TS-032 and product-absorption TS-026 moved from pending to passing. Their unchanged clauses, inherited from increments 004 and 002, are now asserted over the shipped contract text, and Wylie's own deletion probes (E6) show that each of the six new assertions fails when its sentence is removed.
- **Failing or blocked:** none.
- **Human verification:** all six flows are still pending the human's verdict. V1 was executed by Wylie in run 1. V2–V6 are prepared, not executed. Green here does not mean the rendered chat was observed.

**What contract-text level means.** A contract-text test reads the shipped markdown and proves that each rule is written and stays written. It never proves that an agent in a live session renders the rule. Wylie's deletion probes (E3) show that the assertions catch a removed clause: 17 of 20 probes were caught, and each of the 3 missed clauses is still carried by another pinned clause. The runtime replay mapped in Coverage has no runner and was not run. The rendered behavior is what human flows V2–V6 are for. They are prepared, not executed.

Fresh in run 2: one `cd cli && npm test` (E5) and 6 deletion probes on the engineer's new assertions (E6). Fresh in run 1, still valid: the first `npm test` (E1), the hand walk of the built bundle (E2) and 20 deletion probes (E3). The product files and the bundle have not changed since run 1, so E2 and E3 still describe this tree. Reused: the final checks on bead `hele-skills-hq7.7` (E4). That covers the bundle rebuild being byte-identical, the manifests, the README flow block and the absence of lint or typecheck scripts. E2E executed: zero, because none applies.

### Evidence runs

| Run | What | Result | Code identity / environment |
|---|---|---|---|
| E1 · fresh (run 1) | `cd cli && npm test`: the pretest asset build, then `node --test "test/*.test.js"` | exit 0 · 215 tests, 13 suites, 215 pass, 0 fail, 0 skipped, 0 retries · `duration_ms 3422`, wall 3.57 s. Output kept locally at `.hele/tmp/qa-007-npm-test.txt` (untracked scratch). Per file: config-output 22, chat-output 23, chat-output-validation 12, chat-output-delivery 9, output-surfaces 12, init-output 4, cli 11, direct-path 50, direct-path-routing 29, direct-path-build 15, direct-path-reports 9, find 10, dir 6, language 2, run-report 1 | HEAD `d27fe709dcad2b2470c3ee783b303b3bcdafac2e` plus the uncommitted increment tree: 35 product files changed outside `.hele/` (+611/−103) and 7 new files. sha256 of that product diff plus the new files: `296c7683…4018`. `cli/dist/hele.cjs` `67cb3fc4…1e3a`, `cli/src/output.js` `927ef5a3…`, `cli/src/config.js` `a9f9299a…`, `templates/chat-reports.md` `147dd2bb…`. macOS (Darwin 25.5.0), Node v24.21.0 |
| E2 · fresh (run 1) | Hand walk of the built bundle `node cli/dist/hele.cjs` in `/tmp/hele-qa-007-*`, outside the repo, with `HELE_DIR` cleared. Ten steps: bare folder; nothing saved; preset `standard`; coverage override; invalid `qaResults` and `maxTableRows 0` and `add`, each with a hash check; unset and a repeat unset; hand-edited invalid values; unset of the whole `output` then `detailed`; `.hele` without `settings.json`; `config --help`. Plus `config get toString` / `version.constructor` | Every step matched the PRD (details in V1 and V2). The file hash was unchanged after the three refusals. A bare folder and `.hele` without settings both print `compact`, exit 0, and create nothing. The hand edit gives three warnings, and `get` of an inherited key exits 1. Wall 0.45 s. Output at `.hele/tmp/qa-007-cli-walk.txt` | Same bundle sha256 `67cb3fc4…1e3a` |
| E3 · fresh (run 1) | Wylie deletion probes. Method: an rsync copy of the tree without `.git` in `/tmp/hele-qa-007-probe-r1` (baseline 215/215), one deletion per probe (a one-token edit for P17 and P18), the full suite, then a restore | 20 probes: **17 caught, 3 missed**. The missed clauses are P4 (Scenarios `off` keeps TEST_STUBS linked), P5 (Coverage `off` still lists missing items) and P7 (the Dispatch `brief` prose names the model). Each is still carried by a pinned clause: the generic "complete document stays linked" rule, the always-visible rule with "`off` included", and the pinned example line with the model plus the open-channel "agent tag, its model and its work" sentence. Wall 71.5 s. List at `.hele/tmp/qa-007-probes.txt` | Same as E1 |
| E4 · reused | Bead `hele-skills-hq7.7` final checks: `npm test` 215/215, and `npm run build` leaves `cli/dist/hele.cjs` byte-identical (sha256 `67cb3fc4…1e3a`). The manifests are valid JSON, the README flow block equals `FLOW_DIAGRAM`, there is no `dist/cursor`, and no lint or typecheck script is defined | Still valid: the bundle sha256 is the same today, and no product file has changed since. E1 re-confirms the suite | HEAD `d27fe70` plus the same tree |
| E5 · fresh (run 2) | `cd /Users/guscsales/workspace/codegus/hele-skills/cli && npm test`: the pretest asset build, then `node --test "test/*.test.js"`, after the engineer's test-only fix | exit 0 · 215 tests, 13 suites, 215 pass, 0 fail, 0 cancelled, 0 skipped, 0 retries · `duration_ms 3711`, wall 4.20 s. The count equals run 1 because the engineer added assertions inside two existing tests, not new tests. Output kept locally at `.hele/tmp/qa-007-npm-test-r2.txt` (untracked scratch) | HEAD `d27fe709dcad2b2470c3ee783b303b3bcdafac2e` plus the same uncommitted increment tree (42 product files outside `.hele/`, the same count as run 1). sha256 `cli/test/chat-output-delivery.test.js` `d697920a9672b7617b12e57da60d7bb5cdf70b6a3c5732ab7d637bce0f672ff3`, `cli/test/chat-output-validation.test.js` `9fcb186db4d7888de37bb97f5cbb1a2cfa0a84797156dec3a456fec11c21cb7d`, `cli/dist/hele.cjs` `67cb3fc4b75e2ecc19da10e7620240cedc00d2e29dc04935c57b8e98588c1e3a` (unchanged from run 1). macOS (Darwin 25.5.0), Node v24.21.0 |
| E6 · fresh (run 2) | Wylie deletion probes on the six new assertions. Method: an rsync copy of the tree without `.git` in `/tmp/hele-qa-007-probe-r2`, outside the repo (baseline: the two test files pass), one sentence deleted from the shipped skill per probe, `node --test test/chat-output-delivery.test.js test/chat-output-validation.test.js`, then a restore (the restored copy passes again) | **6 of 6 caught**, each with exactly 1 failing test. P-A deletes "Do not invent a question to satisfy this gate."; P-B deletes "uses the same pack." and "Do not restart a drip interview."; P-C deletes "There is no Open questions section."; P-D deletes "Lisbon does not put technical solutioning in the PRD."; P-E deletes "When the index bead and every QA bead are closed, close the write epic and run phase 7."; P-F deletes "do not open build/fix tasks … or mark unproven behavior passing". The working tree was not touched | Same as E5 |

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| project-memory TS-006 · Read only saved preferences | BR-5 · Read saved settings without an implicit CLI defaults merge | passing | integration | `cli/test/cli.test.js` — "TS-006 config get and list return saved values only; effective changes nothing" (E1) |
| project-memory TS-008 · Reject invalid configuration operations | BR-6 · Persist configuration edits and deduplicated list additions | passing | integration | `cli/test/cli.test.js` — "TS-008 keys outside output keep the unvalidated write behavior and exit codes" (E1) |
| project-memory TS-022 · Save any documented output value, alone or with others | BR-18 · Output settings control chat presentation only; BR-20 · Refuse invalid output values on write; fall back on read | passing | integration | `cli/test/config-output.test.js` — two TS-022 tests (E1, E2) |
| project-memory TS-023 · Output settings change only what the conversation shows | BR-18 · Output settings control chat presentation only | passing | unit (contract text) | `chat-output.test.js` — "TS-023/BR-18"; `chat-output-validation.test.js` — "TS-049 / TS-023", "artifact templates describe files, not chat" (E1) |
| project-memory TS-024 · Language preferences hold under every output setting | BR-18 · Output settings control chat presentation only; BR-16 · Separate conversation and artifact language preferences | passing | unit (contract text) | `chat-output.test.js` — "TS-024", "language section keeps the shape…" (E1; E3 P19 caught) |
| project-memory TS-025 · Resolve each output field by fixed precedence | BR-19 · Resolve the effective output in one place and in a fixed order; BR-21 · Presets set every section, the table mode and the row limit | passing | integration | `config-output.test.js` — "TS-025 saved overrides beat the preset; the result shape is fixed; nothing is written" (E1) |
| project-memory TS-026 · Effective output works without project memory or settings | BR-19 · Resolve the effective output in one place and in a fixed order | passing | integration | `config-output.test.js` — "TS-026 …"; `chat-output-validation.test.js` — "TS-028 / TS-026" and "TS-046" for the E2E audit (E1, E2) |
| project-memory TS-027 · A request in the current message applies to that response only | BR-19 · Resolve the effective output…; BR-24 · Limited lists say so, and expansion only re-presents | passing | unit (contract text) | `chat-output.test.js` — "TS-028/BR-19: … one-off never saved"; `chat-output-delivery.test.js` — "TS-027, TS-052" (E1; E3 P10 caught) |
| project-memory TS-028 · Every skill and agent presents from the one resolution | BR-19 · Resolve the effective output… | passing | unit (contract text) | `chat-output.test.js` — "TS-028/BR-19" ×2; `chat-output-delivery.test.js` — "TS-028"; `chat-output-validation.test.js` — "TS-028 / TS-026", "no consumer restates…"; `output-surfaces.test.js` — "TS-028 negative scan", "TS-028 positive" (E1) |
| project-memory TS-029 · Refuse an invalid output value on write | BR-20 · Refuse invalid output values on write…; BR-6 · Persist configuration edits… | passing | integration | `config-output.test.js` — "TS-029 …" (17 refusals, each byte-compared) (E1; E2; E3 P18 caught) |
| project-memory TS-030 · Accept a whole output object only when every entry is valid | BR-20 · Refuse invalid output values on write… | passing | integration | `config-output.test.js` — "TS-030 …" (E1) |
| project-memory TS-031 · Refuse list additions under output | BR-20 · Refuse invalid output values on write… | passing | integration | `config-output.test.js` — "TS-031 …" (E1, E2) |
| project-memory TS-032 · Fall back field by field from a hand-edited invalid value | BR-20 · Refuse invalid output values on write… | passing | integration | `config-output.test.js` — "TS-032 …" (E1, E2) |
| project-memory TS-033 · Fall back to compact when the saved preset is invalid; ignore unknown keys | BR-20 · Refuse invalid output values on write… | passing | integration | `config-output.test.js` — "TS-033 …" (E1) |
| project-memory TS-034 · Show an invalid-setting warning once per session | BR-20 · Refuse invalid output values on write… | passing | unit (contract text) | `chat-output.test.js` — "TS-034/TS-065"; `chat-output-delivery.test.js` — "TS-027, TS-052" (E1; E3 P15 caught) |
| project-memory TS-035 · Each preset sets every field to its documented value | BR-21 · Presets set every section… | passing | integration | `config-output.test.js` — "TS-035 a preset alone resolves to its exact table" (literal tables) (E1; E3 P17 caught) |
| project-memory TS-036 · Presets read as short, standard and close to the earlier full reports | BR-21 · Presets set every section… | passing | unit (contract text) | `chat-output.test.js` — "TS-049/TS-036" and the per-section block tests; `output-surfaces.test.js` — "TS-028 positive" (E1) |
| project-memory TS-037 · Scenario block with a few scenarios at each level | BR-22 · Section values decide how much of each block appears | passing | unit (contract text) | `chat-output.test.js` — "TS-037/TS-038"; `chat-output-delivery.test.js` — "TS-037, TS-038" (E1; E3 P4 missed, see the stub section) |
| project-memory TS-038 · Scenario block with dozens of scenarios stays short or states what it omits | BR-22 · Section values…; BR-24 · Limited lists say so… | passing | unit (contract text) | `chat-output.test.js` — "TS-037/TS-038", "TS-038/TS-046/TS-050" (E1) |
| project-memory TS-039 · Coverage block levels keep missing required coverage visible | BR-22 · Section values…; BR-23 · Some content is visible under every setting | passing | unit (contract text) | `chat-output.test.js` — "TS-039/TS-061", "TS-047/TS-060/TS-061/TS-062" (E1; E3 P5 missed, see the stub section) |
| project-memory TS-040 · Product-rule delta in summary and in full | BR-22 · Section values… | passing | unit (contract text) | `chat-output.test.js` — "TS-040/guided-delivery TS-032/TS-065" (E1) |
| project-memory TS-041 · Green QA run at each results level | BR-22 · Section values… | passing | unit (contract text) | `chat-output.test.js` — "TS-041/TS-042/TS-060"; `chat-output-validation.test.js` — "TS-041 / TS-042 / TS-060 / TS-062" (E1) |
| project-memory TS-042 · QA run with failures and gaps shows every issue at every level | BR-22 · Section values…; BR-23 · Some content is visible… | passing | unit (contract text) | same two tests (E1; E3 P6, P12 caught) |
| project-memory TS-043 · Dispatch announcement brief or full | BR-22 · Section values… | passing | unit (contract text) | `chat-output.test.js` — "TS-043"; `chat-output-delivery.test.js` — "TS-043" ×2, "every spine consumer names the model…"; `output-surfaces.test.js` — "cross-surface carry-overs" (E1; E3 P7 missed, see the stub section) |
| project-memory TS-044 · Screenshot presentation never changes what is captured | BR-22 · Section values…; BR-17 · Store an evidence-image ceiling rather than a quota | passing | unit (contract text) | `chat-output.test.js` — "TS-044"; `chat-output-validation.test.js` — "TS-044" (E1; E3 P11 caught) |
| project-memory TS-045 · Table mode allows prose for small amounts and never box frames | BR-22 · Section values… | passing | unit (contract text) | `chat-output.test.js` — "TS-045"; `chat-output-delivery.test.js` — "TS-045" (E1) |
| project-memory TS-046 · E2E audit chat shows diagnosis and leading recommendations | BR-22 · Section values…; BR-24 · Limited lists say so… | passing | unit (contract text) | `chat-output.test.js` — "TS-046"; `chat-output-validation.test.js` — "TS-046" (E1) |
| project-memory TS-047 · Everything off still shows what needs attention | BR-23 · Some content is visible under every setting | passing | unit (contract text) | `chat-output.test.js` — "TS-047/TS-060/TS-061/TS-062" (E1; E3 P1–P3 caught) |
| project-memory TS-048 · Compact options, approvals and walks keep every choice and action | BR-23 · Some content is visible… | passing | unit (contract text) | `chat-output.test.js` — "TS-048"; `chat-output-validation.test.js` — "TS-048" (E1; E3 P16 caught) |
| project-memory TS-049 · An omitted detail is not missing evidence | BR-23 · Some content is visible… | passing | unit (contract text) | `chat-output.test.js` — "TS-049/TS-036"; `chat-output-validation.test.js` — "TS-049 / TS-023" (E1) |
| project-memory TS-050 · Row limit boundary | BR-24 · Limited lists say so… | passing | unit (contract text) | `chat-output.test.js` — "TS-038/TS-046/TS-050"; the omission line is left out when everything is shown (Output, Expansion) (E1) |
| project-memory TS-051 · Several required decisions are never cut by the row limit | BR-24 · Limited lists say so…; BR-23 · Some content is visible… | passing | unit (contract text) | `chat-output.test.js` — "TS-051"; `output-surfaces.test.js` — "absorb Snapshot rows…" (E1; E3 P8 caught) |
| project-memory TS-052 · Expansion re-presents without redoing work | BR-24 · Limited lists say so… | passing | unit (contract text) | `chat-output.test.js` — "TS-052/guided-delivery TS-066"; `chat-output-delivery.test.js` — "TS-027, TS-052" (E1; E3 P9 caught) |
| project-memory TS-053 · A project without output settings presents as compact | BR-25 · Existing projects move to the compact default without losing saved choices | passing | integration | `config-output.test.js` — "TS-053 …", "TS-022 only a preset…"; `output-surfaces.test.js` — "TS-053" (docs and CHANGELOG) (E1, E2) |
| project-memory TS-054 · Initialization saves only the compact preset for a new project | BR-25 · Existing projects move to the compact default… | passing | unit (contract text) | `init-output.test.js` — two TS-054 tests (defaults deep-equal `{ preset: 'compact' }`) (E1) |
| project-memory TS-055 · Reinitialization fills only a missing preset and keeps saved output choices | BR-25 · Existing projects move to the compact default…; BR-13 · Preserve choices while applying explicit initialization migrations | passing | unit (contract text) | `init-output.test.js` — two TS-055 tests (E1; E3 P20 caught) |
| project-memory TS-056 · Unset removes one saved key and keeps everything else | BR-26 · Remove a saved setting with unset | passing | integration | `config-output.test.js` — "TS-056 …" (E1, E2) |
| project-memory TS-057 · Unset of a path that is not saved, or an incomplete request | BR-26 · Remove a saved setting with unset; BR-5; BR-6 | passing | integration | `config-output.test.js` — "TS-057 …", "BR-26: unset of an inherited key…" (E1, E2) |
| project-memory TS-058 · Unset clears an invalid or unknown output key left by a hand edit | BR-26 · Remove a saved setting with unset; BR-20 | passing | integration | `config-output.test.js` — "TS-058 …" (E1) |
| project-memory TS-059 · After unset, a field follows the preset again | BR-26 · Remove a saved setting with unset; BR-21 | passing | integration | `config-output.test.js` — "TS-059 …" (E1, E2) |
| project-memory TS-060 · More failures and blockers than the row limit are all listed | BR-23 · Some content is visible…; BR-24 · Limited lists say so… | passing | unit (contract text) | `chat-output.test.js` — "TS-047/TS-060/TS-061/TS-062", "TS-041/TS-042/TS-060"; `chat-output-validation.test.js` — "TS-041 / TS-042 / TS-060 / TS-062" (E1; E3 P1, P6 caught) |
| project-memory TS-061 · More missing required coverage items than the row limit are all listed | BR-23; BR-24 | passing | unit (contract text) | `chat-output.test.js` — "TS-047/…/TS-061…", "TS-039/TS-061" (E1; E3 P1 caught) |
| project-memory TS-062 · A request in the message cannot hide always-visible content | BR-19; BR-23 | passing | unit (contract text) | `chat-output.test.js` — "TS-047/…/TS-062"; `chat-output-validation.test.js` — "TS-041 / … / TS-062"; `output-surfaces.test.js` — "cross-surface carry-overs" (E1; E3 P2 caught) |
| project-memory TS-063 · Refuse a non-object value at output or output.sections | BR-20 · Refuse invalid output values on write… | passing | integration | `config-output.test.js` — "TS-063 …" (8 refusals, byte-compared) (E1) |
| project-memory TS-064 · An empty object at output or output.sections means nothing saved there | BR-20 | passing | integration | `config-output.test.js` — "TS-064 an empty object…", "TS-064 resolution…" (E1) |
| project-memory TS-065 · A hand-edited non-object at output or output.sections is treated as absent | BR-20 | passing | integration | `config-output.test.js` — "TS-065 resolution…"; `chat-output.test.js` — "TS-034/TS-065" for once per session (E1) |
| guided-delivery TS-032 · Skip unnecessary questions and expose every rule change for an informed approval | BR-18 · Resolve useful questions before writing the contract | passing | unit (contract text) | `chat-output-delivery.test.js` — "TS-032, TS-065, TS-066" (approval content at every level, and now the four `skills/hele-feature/SKILL.md` clauses on the question gate, late questions, no Open questions section and no solutioning); `chat-output.test.js` — "TS-040/guided-delivery TS-032/TS-065" (E5; E6 P-A–P-D caught; run 1 E3 P13 caught) |
| guided-delivery TS-065 · Approval report detail follows the effective chat output, decisions always shown | BR-18 · Resolve useful questions before writing the contract | passing | unit (contract text) | `chat-output-delivery.test.js` — "TS-032, TS-065, TS-066"; `chat-output.test.js` — "TS-040/guided-delivery TS-032/TS-065" (E1; E3 P13 caught) |
| guided-delivery TS-066 · Omitted approval detail can be expanded without changing the approval | BR-18 · Resolve useful questions before writing the contract | passing | unit (contract text) | `chat-output-delivery.test.js` — "TS-032, TS-065, TS-066" (the expansion request keeps the approval pending); `chat-output.test.js` — "TS-052/guided-delivery TS-066" (E1) |
| product-absorption TS-026 · Close writing and report gaps separately from completion | BR-15 · Report completed writing separately from validation success | passing | unit (contract text) | `chat-output-validation.test.js` — "product-absorption TS-026 / TS-028 / TS-029" (the Written counts and gap lines, and now the write-epic close order and the never-mark-unproven-passing clause in `skills/hele-absorb/SKILL.md`) (E5; E6 P-E, P-F caught; run 1 E3 P14 caught) |
| product-absorption TS-028 · A long written-file list follows the row limit and says what it omits | BR-15 · Report completed writing separately from validation success | passing | unit (contract text) | `chat-output-validation.test.js` — "product-absorption TS-026 / TS-028 / TS-029", "hele-absorb names the Dispatch announcement…" (E1) |
| product-absorption TS-029 · More gaps and blocked items than the row limit are all listed | BR-15 · Report completed writing separately from validation success | passing | unit (contract text) | same test (E1; E3 P14 caught) |

### CLI behaviors (integration): TS-006, TS-008, TS-022, TS-025, TS-026, TS-029–TS-033, TS-035, TS-053, TS-056–TS-059, TS-063–TS-065 · passing

**Rule:** BR-5 · Read saved settings without an implicit CLI defaults merge; BR-6 · Persist configuration edits and deduplicated list additions; BR-18 · Output settings control chat presentation only; BR-19 · Resolve the effective output in one place and in a fixed order; BR-20 · Refuse invalid output values on write; fall back on read; BR-21 · Presets set every section, the table mode and the row limit; BR-25 · Existing projects move to the compact default without losing saved choices; BR-26 · Remove a saved setting with unset

**Proof:** `cli/test/config-output.test.js` (22 tests) and two new tests in `cli/test/cli.test.js`. Every call is a real `spawnSync(process.execPath, [cli/src/index.js, …])` in a fresh `mkdtemp` project, with `HELE_DIR` cleared. Nothing is mocked: the file system, exit codes, stdout and stderr are all real. The assertions, per stub:

- **TS-006:** `get output.preset` exits 1 and its stdout is not `"compact"`. `get output` exits 1. `list` is byte-equal before and after `effective output`. A missing value exits 1. `.hele` without settings exits 2 for both `list` and `get`.
- **TS-008:** an unknown non-output key and `qa.maxScreenshots -5` are saved as given. Traversal through a scalar, null or array exits 1 with the file byte-equal. `add` to a scalar exits 1. A missing path or value, or an unknown action, exits 2.
- **TS-022:** every allowed value of all 9 keys is set and read back with `get`, and unrelated keys are deep-equal. Only a preset, only one override, and nothing under output all resolve.
- **TS-029:** 17 invalid writes each exit 1, stderr starts with `ERROR:`, and `Buffer.compare` of the file before and after equals 0. The cases are: unknown keys at both levels, a bad enum for every field, a nested path under a section, and `maxTableRows` 0, −3, 1.5, `ten`, `"8"`, `true` and `null`.
- **TS-030:** a valid whole object is saved. Five objects with one bad entry are refused byte-identically, both at `output` and at `output.sections`.
- **TS-031:** `add` exits 1 at three output paths.
- **TS-063:** `5`, `"text"`, `null` and `[]` are refused at both `output` and `output.sections`.
- **TS-064:** `{}` is accepted at both levels and resolves with no warning.
- **TS-025 and TS-035:** whole-object `deepEqual` against literal preset tables written in the test, not read from the product. The exact key sets are checked. A saved `maxTableRows` beats `detailed`, and the settings bytes are unchanged by `effective`.
- **TS-026:** a bare temp folder and `.hele` without settings both exit 0 with `compact`, and the directory listings are unchanged.
- **TS-032, TS-033 and TS-065:** the fallback values and the exact `warnings` entries (`key`, `saved`, `used`, `reason`) and their counts: 3, 2, 1 and 1.
- **TS-053:** a project without `output` resolves to `compact`.
- **TS-056:** after unset, the exact serialized text (`JSON.stringify(…, null, 2) + '\n'`) and the listing of `.hele/` are unchanged apart from the removed key.
- **TS-057:** seven missing or traversal paths exit 1 byte-identically, including inherited `toString` and `constructor`. No path exits 2, and no settings exits 2.
- **TS-058:** unset of an invalid key and an unknown key, after which the warnings are empty.
- **TS-059:** the unset chain gives `standard`, then `compact` with the overrides kept, then all `compact`.

**Execution:** E1 fresh, `npm test` exit 0, 215/215, on the code identity above. E2 fresh: the hand walk of the built bundle repeated each claim by hand outside the repo. E3 P17 (compact row limit 8 → 9) failed 9 tests, and P18 (accepting `maxTableRows` 0) failed 3.

**Expected / observed:** as in the PRD. Observed in E2:

- A bare folder prints the `compact` JSON with exit 0, and `ls -A` stays empty.
- `get output.preset` gives `ERROR: path not found`, exit 1.
- `set output.sections.qaResults everything` gives `ERROR: output.sections.qaResults must be summary | issues | full`, exit 1, with the hash unchanged.
- A second `unset` gives `ERROR: path not found`, exit 1.

**Limitations:** these tests drive `cli/src/index.js`, not the bundle. Bundle parity rests on E4, where the rebuild is byte-identical, and on E2, which ran the bundle by hand. TS-026's clause that "a standalone workflow such as the E2E audit receives the same values" and TS-053's "presentation is compact" are contract text and human flows V3 and V6. TS-065's "the conversation shows the warning once per session" is contract text and human flow V2.

### Presentation behaviors (contract text): project-memory TS-023, TS-024, TS-027, TS-028, TS-034, TS-036–TS-052, TS-054, TS-055, TS-060–TS-062; guided-delivery TS-032, TS-065, TS-066; product-absorption TS-026, TS-028, TS-029 · passing at contract-text level

**Rule:** BR-16 · Separate conversation and artifact language preferences; BR-17 · Store an evidence-image ceiling rather than a quota; BR-18 · Output settings control chat presentation only; BR-19 · Resolve the effective output in one place and in a fixed order; BR-20 · Refuse invalid output values on write; fall back on read; BR-21 · Presets set every section, the table mode and the row limit; BR-22 · Section values decide how much of each block appears; BR-23 · Some content is visible under every setting; BR-24 · Limited lists say so, and expansion only re-presents; BR-25 · Existing projects move to the compact default without losing saved choices

**Proof:** the tests read shipped markdown with `fs.readFileSync`, slice the block under test (by `## ` heading, `<phase>` element or line) and use regex assertions. No model runs. Where each group of rules is pinned:

- **`templates/chat-reports.md` `## Output`:** the CLI source and precedence order, the one-off never saved, the once-per-session warning, the seven always-visible kinds with "`off` included", "outside `maxTableRows`", "one line per item … id and cause" and "cannot hide always-visible content". Also the omission-line contract, the paginate-or-group rule with "does not proceed … while any is unseen", the five "no …" expansion guarantees, and "an omitted detail is not missing evidence".
- **`templates/chat-reports.md` blocks:** each block (`Scenarios (testStubs)`, `Coverage recommendations (coverage)`, `PRD delta (prdDelta)`, `Test results (qaResults)`, `Dispatch announcement (dispatch)`, `Shots (screenshots)`, `E2E audit (chat)`) has its levels and table shape asserted. A box-drawing scan covers the whole file and every canonical block.
- **Negative scans:** no preset value, level default or row-limit number appears in any of the 41 `.md` files under `skills/`, `agents/` or `templates/`.
- **Consumers:** each reads `config effective output` and points at `## Output`. The consumers are hele, hele-feature, hele-fast, hele-build, hele-stubs, hele-qa, hele-verify-work, hele-absorb, hele-fix-e2e, open-channel, direct-path, qa-wylie, staff-lisbon, dba-hightower and design-vega.
- **Session rule:** `.claude/rules/hele-session.md` is byte-equal to `sticky-lanes.md` + `open-channel.md`.
- **Init:** `core/default-config.json` `output` deep-equals `{ preset: 'compact' }`, and the init migration wording is checked.

**Execution:** E1 and E5 fresh, 215/215. E3 probes: deleting P1–P3, P6, P8–P16, P19 or P20 each failed the named test. E6 probes: all six new clause deletions (P-A–P-F) each failed their test.

**Expected / observed:** each rule is written in the contract the agents load and is pinned by an assertion that fails when the clause is removed. Nothing about rendered chat was observed.

**Limitations:**

- No runtime replay exists, and no agent session was observed. Whether a model obeys the text is unproven. Human flows V2–V6 are the closest real evidence, and they are prepared, not executed.
- Three clauses were not caught by deletion (E3). P4 is the Scenarios `off` line "TEST_STUBS.md stays in Files and Open these" (TS-037). P5 is the Coverage `off` line "Missing required coverage still appears" (TS-039). P7 is the Dispatch `brief` prose "the model" (TS-043). Each behavior is still pinned by a broader clause: the Output rule "The complete document stays linked from the report that omitted it", the always-visible rule with "`off` included" (P3 caught), and the brief example line with the model plus open-channel "agent tag, its model and its work". This is recorded as polish, not a gap.
- TS-023 ("same documents, same tests") is pinned as the stated rule, and the artifact templates carry no `output` reference. No two-run document diff was made.

### guided-delivery TS-032 · Skip unnecessary questions and expose every rule change for an informed approval · passing at contract-text level

**Rule:** BR-18 · Resolve useful questions before writing the contract

**Proof:** every clause of the stub now has an assertion over the shipped contract text.

| Clause of the Then | Assertion | Sentence it matches |
|---|---|---|
| No invented question gate | `chat-output-delivery.test.js` "TS-032, TS-065, TS-066": `/Do not invent a question to satisfy this gate\./` | `skills/hele-feature/SKILL.md` step 4 of the question phase |
| Newly discovered facts justify only a later pack, not a drip interview | same test: `/\*{0,2}Late questions:?\*{0,2}[^\n]*uses the same pack/` | "**Late questions:** … uses the same pack. Do not restart a drip interview." |
| Every new, rewritten and retired rule named with its behavior change | same test, on feature and fast: `/every new, rewritten and retired rule with its behavior change/` | the approval stop paragraph |
| Relevant unchanged rules | `chat-output.test.js` "TS-040/guided-delivery TS-032/TS-065": the `Already the rule` bucket of the PRD delta | `templates/chat-reports.md` PRD delta |
| Scenario and proof-recommendation changes | same test on feature and fast: `/PRD delta, Scenarios and Coverage at the effective output/`; the Scenarios and Coverage block tests | the approval stop paragraph |
| Links to the complete PRD and TEST_STUBS | same test, on feature and fast: `/links to the complete PRD and TEST_STUBS/` | the approval stop paragraph |
| No unresolved questions in the PRD | same test: `/There is no Open questions section\./` | `skills/hele-feature/SKILL.md` |
| No implementation plan in the PRD | same test: `/Lisbon does not put technical solutioning in the PRD\./` | `skills/hele-feature/SKILL.md` |

**Execution:** E5 fresh, 215/215. E6 probes P-A–P-D caught, each failing exactly one test. Run 1 E3 P13 caught.

**Expected / observed:** pinned in the shipped text. Not rendered.

**Limitations:** contract text only. The assertion proves each sentence is written and stays written, not that a model obeys it. Runtime replay not run.

### product-absorption TS-026 · Close writing and report gaps separately from completion · passing at contract-text level

**Rule:** BR-15 · Report completed writing separately from validation success

**Proof:** every clause of the stub now has an assertion over the shipped contract text.

| Clause of the Then | Assertion | Sentence it matches |
|---|---|---|
| The index and every QA task close before the write epic | `chat-output-validation.test.js` "product-absorption TS-026 / TS-028 / TS-029": `/When the index bead and every QA bead are closed, close the write epic and run phase 7\./` | `skills/hele-absorb/SKILL.md` phase 6 |
| The final report counts features, increments, scenarios, evidence and gaps or blocked items | same test: the `Features`, `Increments`, `Stubs` and `QA` rows, `gaps/blocked`, `Evidence` in `templates/absorb-report.md` `## Written` | `templates/absorb-report.md` |
| The written files are linked | same test: the Files table with the row limit, `<shown> of <total> shown` and `index.json`; the `hele-absorb names the Dispatch announcement…` test checks the closing line | `templates/absorb-report.md`, `skills/hele-absorb/SKILL.md` |
| Every gap and blocked item has one line with id and cause, under any setting | same test: `one line each`, `id and cause`, `outside the row limit\|never cut`, and the RULES comment | `templates/absorb-report.md` |
| Built history never hides incomplete validation | same test: `/do not [^.\n]*mark unproven behavior passing/i` | "do not open build/fix tasks against frozen absorbed plans or mark unproven behavior passing" |

**Execution:** E5 fresh, 215/215. E6 probes P-E and P-F caught, each failing exactly one test. Run 1 E3 P14 caught.

**Expected / observed:** pinned in the shipped text. Not rendered.

**Limitations:** contract text only. Runtime replay not run. The earlier limitations still apply: strict-model versus inheritance, and the adapted Codex run.

### guided-delivery TS-065, TS-066 and product-absorption TS-028, TS-029 · passing at contract-text level

**Rule:** guided-delivery BR-18 · Resolve useful questions before writing the contract; product-absorption BR-15 · Report completed writing separately from validation success

**Proof:** the tests named in the table. TS-065: decision content at every level, Was/Now only at `prdDelta` `full`, and scenario and coverage tables governed by their section values. TS-066: the expansion keeps the approval pending with the same options, and expansion re-presents only. TS-028: the Files table follows the effective row limit with the `<shown> of <total> shown` omission line, and the counts cover every written artifact. TS-029: every gap or blocked item gets one line with id and cause, outside the row limit.

**Execution:** E1 and E5 fresh. E3 P13 and P14 caught.

**Expected / observed:** pinned in the shipped text. Not rendered.

**Limitations:** runtime replay not run. TS-065 and TS-066 are walked in V3 and V6. No absorption run was walked for TS-028 and TS-029, because an absorption needs an unabsorbed app and that cost is out of proportion here.

## Selected regressions

| Journey / test | Feature / stubs | Why affected | Result / evidence |
|---|---|---|---|
| `cli/test/direct-path.test.js` (50), `direct-path-routing.test.js` (29), `direct-path-build.test.js` (15), `direct-path-reports.test.js` (9) | guided-delivery TS-003, TS-005, TS-013, TS-014, TS-019–TS-022, TS-039–TS-064 (increment 006) | They assert on files this diff changed: `templates/chat-reports.md` (Direct close, Options rows, Unexplained failure, lane rows), `templates/direct-path.md`, `templates/open-channel.md`, `skills/hele/SKILL.md`, `skills/hele-fast/SKILL.md`, `skills/hele-build/SKILL.md` and `skills/hele-tweak/SKILL.md` | 103/103 pass (E1) |
| `cli/test/language.test.js` (2) | project-memory TS-020; product-absorption TS-026, TS-027 (partial) | It asserts the language sentences in `templates/chat-reports.md` and the language defaults in `core/default-config.json`. Both files changed | 2/2 pass (E1) |
| `cli/test/cli.test.js`, its 9 tests that predate this increment | project-memory TS-006, TS-007, TS-009–TS-013; guided-delivery TS-029, TS-039, TS-061 | `cli/src/config.js`, `cli/src/index.js`, `cli/src/ai.js` and `README.md` changed. "ai overview and README use the canonical flow diagram" guards the README copy | 9/9 pass (E1) |
| `cli/test/find.test.js` (10), `dir.test.js` (6), `run-report.test.js` (1) | project-memory TS-002, TS-010; guided-delivery hele-run-report | They are not touched by the diff (`cli/src/dir.js` is unchanged, and `config.js` only imports `resolveHeleDir` from it). They ran anyway as part of the full suite, so no selection was guessed | 17/17 pass (E1) |

The whole suite was selected because it runs in under 4 s and the CI execution map runs it on every PR.

## E2E and CI impact

| Decision | Details |
|---|---|
| E2E changes | 0 reused, 0 extended, 0 added, 0 removed |
| Justification | The product is a CLI and markdown contracts. It has no API or browser surface. The one real connection that can be proven here, the CLI process writing to the file system, is already proven by the subprocess integration tests, with nothing mocked. The connection that remains unproven is a model reading the contracts and rendering chat. No runner exists for it. It is covered by the human walk and, later, the proposed runtime replay. A Playwright test would prove nothing extra |
| Execution map | `.github/workflows/ci.yml` (unchanged by this diff): one `npm test` job runs every `cli/test/*.test.js`, plus the stale `cli/dist/` check and the version/changelog check, on every PR. The six new test files are picked up by the existing glob with no map change |
| CI stages | No stage, trigger or blocking change. Nothing is proposed |
| Timing | E1 on the local machine: `npm test` wall 3.57 s (`duration_ms` 3422, user 4.69 s) for 215 tests. E5 (run 2) measured wall 4.20 s (`duration_ms` 3711) for the same 215 tests; the two runs differ by machine noise, since only assertions inside existing tests were added. No earlier wall time for this machine is recorded, so the growth is unknown. The test count went from 131 at increment 006 run 3 to 215 (+84: 70 in the six new files and 14 elsewhere), and run 2 added none. CI wall time was not measured |
| Deferred verification | The runtime replays of project-memory/007 and guided-delivery/004 have no runner, no trigger and no scheduled owner date. Lisbon owns behavior and Rigsby the runner. Until one exists, rendered behavior is found only through human walks and real use |

## Human verification

V1 was executed by Wylie from the terminal, outside the repo (E2), and still needs the human's verdict. V2–V6 are **prepared, not executed**. They need a Claude Code session that loads this branch's contracts, and the plugin installed for this session is 1.7.0, the version before this increment.

**Session setup for V2–V6 (do once).**

1. Make a scratch project: `mkdir -p /tmp/hele-walk-007-session && cd /tmp/hele-walk-007-session && git init -q && cp -R /Users/guscsales/workspace/codegus/hele-skills/.hele .hele && printf 'A teh README.\n' > README.md`. This gives a copy of this repo's memory: project-memory has 65 scenarios. The copy's `settings.json` has no `output`, so it starts as `compact`, and this repo's settings are never touched.
2. Install the plugin from this checkout, from inside that folder, as README "Working from local clone (contributors)" documents: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`.
3. Start Claude Code there and check that the installed hele-skills version reads **1.8.0**. If it reads 1.7.0, for example because the `hele` marketplace is already registered from GitHub, the walk is not valid. Wait for the merge and run `/hele-update`.

Make output changes inside the session ("save output.sections.qaResults full"), so the agent runs `hele config set` and reads the effective output again. Its contract reads it once per session and again after a saved change.

### V1 — Configure output from the terminal · TS-006, TS-022, TS-025, TS-026, TS-029, TS-031, TS-035, TS-053, TS-056, TS-057, TS-059 · BR-19 · Resolve the effective output in one place and in a fixed order

**Walk evidence:** executed (Wylie, E2, from the terminal. The human's verdict is still pending)

| Open | |
|---|---|
| URL | Not applicable: terminal |
| Start | `alias h='node /Users/guscsales/workspace/codegus/hele-skills/cli/dist/hele.cjs'` (the built bundle the plugin ships). Make sure `HELE_DIR` is not set |
| Land | `mkdir -p /tmp/hele-walk-007 && cd /tmp/hele-walk-007` |

| Data | Value |
|---|---|
| Login | None |
| Seed | Step 2 creates `p/.hele` with `index.json` and a `settings.json` holding only `"version": 1` |
| Input | The commands in Steps |

| Step | Do this | You should see |
|---|---|---|
| 1 | `h config effective output; echo $?; ls -A` | JSON with `preset` `compact`, `tables` `auto`, `maxTableRows` 8 and sections testStubs `summary`, coverage `summary`, prdDelta `summary`, qaResults `issues`, dispatch `brief`, screenshots `links`, plus `"warnings": []`. Exit 0. `ls -A` prints nothing |
| 2 | `mkdir -p p/.hele && cd p && echo '{"features":[]}' > .hele/index.json && printf '{\n  "version": 1\n}\n' > .hele/settings.json && h config effective output && h config get output.preset; echo $?` | The same `compact` JSON. Then `ERROR: path not found` and `1`: `get` never invents `compact` |
| 3 | `h config set output.preset standard && h config effective output` | `maxTableRows` 15 and prdDelta `full`. Every other field as in step 1 |
| 4 | `h config set output.sections.coverage full && h config effective output` | coverage `full`. Everything else stays at `standard` |
| 5 | `shasum .hele/settings.json; h config set output.sections.qaResults everything; echo $?; h config set output.maxTableRows 0; echo $?; h config add output.preset x; echo $?; shasum .hele/settings.json` | `ERROR: output.sections.qaResults must be summary \| issues \| full`, then `ERROR: output.maxTableRows must be a positive integer`, then `ERROR: no output setting is a list`. Each exits `1`. The two hashes are identical |
| 6 | `h config unset output.sections.coverage && h config effective output; h config unset output.sections.coverage; echo $?` | `OK: unset output.sections.coverage`, then coverage back to `summary` (the `standard` value). The second unset prints `ERROR: path not found` and `1` |
| 7 | `h config unset output && h config effective output` | All `compact` again |
| 8 | `rm .hele/settings.json && h config effective output; echo $?; ls -A .hele` | `compact` JSON, exit 0. `.hele` still holds only `index.json` |

### V2 — A hand-edited invalid value falls back and warns once · TS-032, TS-033, TS-034, TS-058, TS-065 · BR-20 · Refuse invalid output values on write; fall back on read

**Walk evidence:** prepared, not executed. Steps 1 and 4 match what Wylie ran in E2, steps 7 and 6. Steps 2 and 3 need the live session.

| Open | |
|---|---|
| URL | Not applicable: terminal and a Claude Code session |
| Start | Session setup above (plugin 1.8.0 in `/tmp/hele-walk-007-session`), plus the `h` alias from V1 |
| Land | A terminal in `/tmp/hele-walk-007-session`, and Claude Code open in the same folder |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | Step 1 hand-edits the scratch copy's `.hele/settings.json` |
| Input | The commands and messages in Steps |

| Step | Do this | You should see |
|---|---|---|
| 1 | In the terminal: `node -e 'const f=".hele/settings.json",s=require("./"+f);s.output={preset:"standard",sections:{testStubs:"everything"},maxTableRows:0,foo:1};require("fs").writeFileSync(f,JSON.stringify(s,null,2)+"\n")' && h config effective output; echo $?` | Exit 0. testStubs `summary`, `maxTableRows` 15, everything else `standard`. `warnings` holds exactly 3 entries: `output.maxTableRows` saved 0 used 15; `output.foo` saved 1 used null (`unknown`); `output.sections.testStubs` saved `everything` used `summary` |
| 2 | Start a **new** Claude Code session and send `/hele show the PRD + stubs approval report of project-memory increment 007 as it would be presented now` | Before the report, one short line naming the three keys and the value used for each. The report itself follows `standard` |
| 3 | In the same session send `show it again` | The report again, with **no** warning line |
| 4 | In the terminal: `h config unset output.maxTableRows && h config unset output.foo && h config unset output.sections.testStubs && h config effective output` | Each prints `OK: unset …` and `warnings` is `[]`. Leave `output.preset` `standard`, or unset it to go back to `compact` |

### V3 — Compact approval report with dozens of scenarios, then "show all TS" · project-memory TS-027, TS-037, TS-038, TS-039, TS-040, TS-049, TS-052, TS-053 · guided-delivery TS-065, TS-066 · BR-22 · Section values decide how much of each block appears

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable: Claude Code session |
| Start | Session setup above. `output` is unset in the scratch copy (`h config effective output` shows `compact`) |
| Land | A new Claude Code session in `/tmp/hele-walk-007-session` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | The copied project-memory feature: PRD v1.1 with 9 new rules (BR-18–BR-26) and 2 rewritten (BR-5, BR-6), and 65 scenarios, of which increment 007 added 44 and revised 2 |
| Input | The messages in Steps. Run `git status --short` in the terminal before step 1, then again after step 2 |

| Step | Do this | You should see |
|---|---|---|
| 1 | `/hele show the PRD + stubs approval report of project-memory increment 007 as it would be presented now` | **PRD delta:** a count line and one row per rule, 9 new and 2 rewritten, each with a one-sentence behavior change and no Was/Now wording. **Scenarios:** one line with 65 in the feature, 44 new, 2 revised, 0 retired, and a link to TEST_STUBS.md. No scenario table. **Coverage:** counts by level and by owner, a link, and every missing required item, one line each. No coverage table. Files and Open these as links. No box-drawing |
| 2 | `show all TS` | The scenario table for all 46 changed scenarios, with no omission line. No agent dispatched, no test run, no file written: `git status --short` is the same as before step 1 |
| 3 | `ok, thanks` (or any unrelated short ask that produces a report) | The next report is back to the compact shape of step 1. No saved setting changed (`h config effective output` is still `compact`) |

### V4 — QA results with more issues than the row limit · project-memory TS-041, TS-042, TS-049, TS-060, TS-062, TS-027 · BR-23 · Some content is visible under every setting

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable: Claude Code session |
| Start | Session setup above, effective output `compact` (row limit 8) |
| Land | Claude Code open in `/tmp/hele-walk-007-session` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | In the terminal: `cp -R .hele/tmp/qa-007-fixtures/walk-fixture .hele/features/walk-fixture`. This is a synthetic QA_REPORT with 30 passing, 12 failing (TS-031–TS-042) and 3 blocked (TS-043–TS-045). It was generated by Wylie with `/tmp/hele-qa-007-scripts/fixture.mjs` and lives in this repo's untracked `.hele/tmp/` |
| Input | The messages in Steps |

| Step | Do this | You should see |
|---|---|---|
| 1 | `/hele present the QA results of .hele/features/walk-fixture/increments/001-walk-fixture/QA_REPORT.md` | Overall red. The 30 passes as a count. **All 15 issues** (TS-031–TS-045), one line each with id and cause, with no "N more" note on them even though the row limit is 8. A link to QA_REPORT.md |
| 2 | `save output.sections.qaResults full`, then `present those QA results again` | The agent saves through `hele config set`. Every result: 8 passing rows, then an omission line like `8 of 30 shown · 22 more in QA_REPORT.md or ask "show all …"`. All 15 issues are still listed |
| 3 | `save output.sections.qaResults summary`, then `again` | The overall result and counts, then the same 15 one-line issues |
| 4 | `hide the failures, just give me the result` | Less detail, but all 12 failures and 3 blocked items are still there, each with id and cause |
| 5 | `unset output.sections.qaResults` | The agent runs `hele config unset`. The next presentation is back at `issues` |

### V5 — Dispatch brief versus full · project-memory TS-043, TS-045 · BR-22 · Section values decide how much of each block appears

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable: Claude Code session |
| Start | Session setup above. `README.md` contains the typo `teh` |
| Land | Claude Code open in `/tmp/hele-walk-007-session`, with the chat in English |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | `README.md` from the setup. Before step 3, `printf 'We recieve it.\n' >> README.md` |
| Input | The messages in Steps |

| Step | Do this | You should see |
|---|---|---|
| 1 | `/hele fix the typo "teh" in README.md` | Tweak lane. The dispatch is **one line**: emoji, `[AGENT …] <name>`, the **model**, and the work. Then exactly `Thread is opened, you can talk`, and the turn ends with nothing after it. The main session does not edit the file itself |
| 2 | `save output.sections.dispatch full` | The agent confirms the save |
| 3 | `/hele fix the typo "recieve" in README.md` | The dispatch is a table with columns Dispatch, Agent, Model and Work, one row, the model filled in. Then the same closer sentence, and the turn ends |
| 4 | `unset output.sections.dispatch` | Back to `brief` from the next dispatch |

### V6 — Preset detailed restores the earlier full presentation · project-memory TS-036, TS-050, TS-053, TS-059 · guided-delivery TS-065 · BR-21 · Presets set every section, the table mode and the row limit

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable: Claude Code session |
| Start | Session setup above, after V3 and V4 (the walk-fixture is copied) |
| Land | Claude Code open in `/tmp/hele-walk-007-session` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | The same project-memory data as V3 and the same walk-fixture as V4 |
| Input | The messages in Steps |

| Step | Do this | You should see |
|---|---|---|
| 1 | `save output.preset detailed` | The agent runs `hele config set output.preset detailed`, and `h config effective output` shows `detailed` with row limit 30 |
| 2 | `/hele show the PRD + stubs approval report of project-memory increment 007 again` | The PRD delta has Was/Now wording for BR-5 and BR-6, a scenario table with 30 rows then `30 of 46 shown · 16 more in TEST_STUBS.md or ask "show all TS"`, and a coverage table. Structured content is in tables. Close to the reports before 1.8.0 |
| 3 | `present the QA results of the walk-fixture again` | Every result. Exactly 30 passing rows fit the limit of 30, so there is **no** omission line. All 15 issues are listed |
| 4 | `unset output.preset` | The next report is compact again (V3 step 1 shape) |

## Findings and routing

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| guided-delivery TS-032 · Skip unnecessary questions and expose every rule change for an informed approval | coverage-gap · **resolved** | The unchanged clauses (no invented question gate, late questions reuse the pack, no Open questions section, no solutioning in the PRD) had no assertion. The engineer added four assertions over `skills/hele-feature/SKILL.md` to "TS-032, TS-065, TS-066" in `cli/test/chat-output-delivery.test.js`. Evidence: E5 215/215, and E6 P-A–P-D each caught with exactly one failing test. TS-032 is passing | Closed in run 2. Fixed under `hele-skills-hq7.4` |
| product-absorption TS-026 · Close writing and report gaps separately from completion | coverage-gap · **resolved** | The unchanged clauses (write epic closes after the index and QA beads, built history never marks unproven behavior passing) had no assertion. The engineer added two assertions over `skills/hele-absorb/SKILL.md` to "product-absorption TS-026 / TS-028 / TS-029" in `cli/test/chat-output-validation.test.js`. Evidence: E5 215/215, and E6 P-E and P-F each caught. TS-026 is passing | Closed in run 2. Fixed under `hele-skills-hq7.5` |
| project-memory TS-037, TS-039, TS-043 (per-block clauses) | polish | E3 missed P4, P5 and P7: the Scenarios `off` line's "TEST_STUBS.md stays in Files and Open these", the Coverage `off` line's "Missing required coverage still appears", and the Dispatch `brief` prose "the model". The behavior is still pinned by broader clauses, so no stub is unproven. Not blocking | `hele-skills-hq7.3` (T3, Van Pelt). Optional polish, not a gap and not blocking: pin the three per-block sentences in `cli/test/chat-output.test.js` whenever convenient. It stays listed |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| None | No contract question arose. The two gaps were missing test assertions over contract text that already existed, now added | Not applicable |

**Notes, not findings.**

- `hele config get` of an inherited key (`toString`, `version.constructor`) has no dedicated test. It is correct by hand: `ERROR: path not found`, exit 1 (E2).
- `hele config set __proto__.x 1` walks the prototype. That behavior predates this increment, was ruled out of scope, and is to be filed separately.
- `unset output.sections.coverage` on the last section key leaves `"sections": {}` in the file. That matches BR-26 (only the named key is deleted) and TS-064 (`{}` means nothing saved, with no warning).
- The `warnings` entries are not sorted by key, and no rule asks for an order.

## History

- run 1 (2026-11-25): fresh `npm test` 215/215 (E1), a hand walk of the bundle (E2) and 20 deletion probes, 17 caught (E3). Reused: bead `hele-skills-hq7.7` final checks (E4). 50 of 52 in-scope stubs passing: 19 at integration and 31 at contract-text level. 2 pending coverage gaps (guided-delivery TS-032, product-absorption TS-026), 1 polish item. E2E 0/0/0. V1 executed by Wylie. V2–V6 prepared, not executed. Verdict red.
- run 2 (2026-11-25): confirmation after the approved test-only fixes. The engineer added six assertions: four over `skills/hele-feature/SKILL.md` (guided-delivery TS-032) and two over `skills/hele-absorb/SKILL.md` (product-absorption TS-026). Wylie checked every clause of both stubs against an assertion, ran `npm test` once (E5: 215/215, 4.20 s wall, bundle sha256 unchanged) and ran 6 deletion probes on a scratch copy outside the repo (E6: 6 of 6 caught). 52 of 52 in-scope stubs passing: 19 at integration and 33 at contract-text level. 0 pending. Both coverage gaps resolved, 1 polish item still listed as optional. E2E 0/0/0. VERIFY.md unchanged: V1 executed by Wylie, V2–V6 prepared, all six flows still pending the human's verdict. Verdict green.
