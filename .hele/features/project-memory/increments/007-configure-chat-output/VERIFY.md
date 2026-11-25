---
feature: project-memory
increment: 007-configure-chat-output
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 2
status: done
updated: 2026-11-25
---

# Guided Verification — project-memory · increment 007

These are the human-flow sections of [QA_REPORT](QA_REPORT.md) run 2. The QA verdict is green at integration and contract-text level: the two coverage gaps of run 1 (guided-delivery TS-032 and product-absorption TS-026) are closed. The flows below check the rendered chat output that no automated runner can prove.

**Close (2026-11-25).** The human closed verification without walking the flows and asked for the pull request. Every flow is recorded as `skipped`: none was verified by the human. Rendered agent behavior under the new output settings therefore has no human evidence in this increment.

V1 was executed by Wylie from the terminal, outside the repo (E2), and was not marked by the human. V2–V6 are **prepared, not executed**. They need a Claude Code session that loads this branch's contracts, and the plugin installed for this session is 1.7.0, the version before this increment.

**Session setup for V2–V6 (do once).**

1. Make a scratch project: `mkdir -p /tmp/hele-walk-007-session && cd /tmp/hele-walk-007-session && git init -q && cp -R /Users/guscsales/workspace/codegus/hele-skills/.hele .hele && printf 'A teh README.\n' > README.md`. This gives a copy of this repo's memory: project-memory has 65 scenarios. The copy's `settings.json` has no `output`, so it starts as `compact`, and this repo's settings are never touched.
2. Install the plugin from this checkout, from inside that folder, as README "Working from local clone (contributors)" documents: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project`.
3. Start Claude Code there and check that the installed hele-skills version reads **1.8.0**. If it reads 1.7.0, for example because the `hele` marketplace is already registered from GitHub, the walk is not valid. Wait for the merge and run `/hele-update`.

Make output changes inside the session ("save output.sections.qaResults full"), so the agent runs `hele config set` and reads the effective output again. Its contract reads it once per session and again after a saved change.

## V1 — Configure output from the terminal · BR-19 · Resolve the effective output in one place and in a fixed order · TS-006, TS-022, TS-025, TS-026, TS-029, TS-031, TS-035, TS-053, TS-056, TS-057, TS-059 · verdict: skipped

**Walk evidence:** executed (Wylie, E2, from the terminal. The human did not mark it)

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

**Verdict:** skipped — closed by the human without a walk (2026-11-25)

**Notes:**

## V2 — A hand-edited invalid value falls back and warns once · BR-20 · Refuse invalid output values on write; fall back on read · TS-032, TS-033, TS-034, TS-058, TS-065 · verdict: skipped

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

**Verdict:** skipped — closed by the human without a walk (2026-11-25)

**Notes:**

## V3 — Compact approval report with dozens of scenarios, then "show all TS" · BR-22 · Section values decide how much of each block appears · project-memory TS-027, TS-037, TS-038, TS-039, TS-040, TS-049, TS-052, TS-053 · guided-delivery TS-065, TS-066 · verdict: skipped

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

**Verdict:** skipped — closed by the human without a walk (2026-11-25)

**Notes:**

## V4 — QA results with more issues than the row limit · BR-23 · Some content is visible under every setting · project-memory TS-041, TS-042, TS-049, TS-060, TS-062, TS-027 · verdict: skipped

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

**Verdict:** skipped — closed by the human without a walk (2026-11-25)

**Notes:**

## V5 — Dispatch brief versus full · BR-22 · Section values decide how much of each block appears · project-memory TS-043, TS-045 · verdict: skipped

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

**Verdict:** skipped — closed by the human without a walk (2026-11-25)

**Notes:**

## V6 — Preset detailed restores the earlier full presentation · BR-21 · Presets set every section, the table mode and the row limit · project-memory TS-036, TS-050, TS-053, TS-059 · guided-delivery TS-065 · verdict: skipped

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

**Verdict:** skipped — closed by the human without a walk (2026-11-25)

**Notes:**
