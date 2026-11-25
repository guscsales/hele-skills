---
feature: guided-delivery
increment: 006-deliver-small-changes-directly
doc: VERIFY
version: "1.0"
based_on: QA_REPORT run 3
status: done
updated: 2026-11-25
---

# Guided Verification — guided-delivery · increment 006

These flows are copied from QA_REPORT run 3. They are unchanged since run 1, because runs 2 and 3 changed only test files. None was executed. On 2026-11-25 the human closed verification without walking them, so every flow is recorded as skipped, not verified. A Claude Code session reads the installed plugin, and the copy installed for this project is the older 1.4.0. The new contract only loads after the plugin is updated to this code (see Start in each flow). So every walk must run in a separate session after that install. V1 is the timed walk of a real small Bugfix on the direct path: run `/hele-run-report` on that session and note elapsed time and tokens with the verdict.

## V1 — Timed small Bugfix on the direct path · TS-039, TS-042, TS-045, TS-048, TS-049, TS-050, TS-051, TS-057, TS-058, TS-059, TS-061, TS-064 · BR-22 · Small code changes take the direct path · verdict: skipped

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal |
| Start | In the dogfood project: `claude plugin marketplace add /Users/guscsales/workspace/codegus/hele-skills`, then `claude plugin install hele-skills@hele -s project` (README "Working from local clone"). Restart Claude Code there and confirm the plugin version is 1.7.0 |
| Land | A clean git tree on a scratch branch. Note the start time, then type `/hele <bug description>` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login; no project credentials |
| Seed | A real, small, known bug in a project that has hele and a test runner. It must violate a rule the PRD already states and touch no excluded surface (no schema, auth, permissions, payments, personal data, shared config, CI, environment, new screen or API/event/shared-type change) |
| Input | Your bug description in plain words. Afterwards, `/hele-run-report` on that session for the timing and token figures |

| Step | Do this | You should see |
|---|---|---|
| 1 | Send `/hele <bug>` | The lane row reads `🐛 Bugfix · direct` and names the PRD. No Question pack and no PRD + stubs approval stop. One background engineer (Cho or Van Pelt) is dispatched, then "Thread is opened, you can talk" |
| 2 | Wait for the worker | No increment folder, no EXECUTION_PLAN, no new `bd` issue, no review dispatch and no Wylie dispatch |
| 3 | Read the close | A "Direct close": Changed (file links), Proof with `failing → passing` output, Related checks with the tests that reach the files and the reason they were chosen, Not run and why (whole suite), Pre-existing (or none), Rule delta `unchanged` naming the broken rule. Then Options 1 ready PR / 2 draft PR / 3 no PR / 4 more |
| 4 | Pick `3` no PR and check the tree | Only the fix and its new regression test changed. PRD and TEST_STUBS are untouched |
| 5 | Stop the clock and run `/hele-run-report` | Elapsed time and token use for the whole delivery. Record them next to your verdict |

**Verdict:** skipped — on 2026-11-25 the human closed verification without walking this flow

**Notes:**

## V2 — Escalation to the full path · TS-041, TS-043, TS-044, TS-061 · BR-22 · Small code changes take the direct path · verdict: skipped

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal |
| Start | Same install as V1 |
| Land | Clean tree; `/hele` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | (a) any bug whose ask names an API response shape. (b) a bug whose fix will turn out to need a shared configuration file, without your ask saying so |
| Input | (a) "the `/orders` response must also return `currency`". (b) a plain description of bug (b) |

| Step | Do this | You should see |
|---|---|---|
| 1 | Send ask (a) | The lane row says `· full` straight away. No engineer investigates first; the normal full-path spine starts (PRD + stubs stop when the rule text changes) |
| 2 | Undo and send ask (b) | `· direct` first, one engineer dispatched |
| 3 | Wait for his result | An Escalation line `<lane> · direct → full — <reason naming shared configuration>`. His partial edits stay in the tree |
| 4 | Let the full path reach the plan | EXECUTION_PLAN `<current-state>` uses his findings (files read, which surface, proposed split). Beads appear only now |

**Verdict:** skipped — on 2026-11-25 the human closed verification without walking this flow

**Notes:**

## V3 — Unexplained failure stop · TS-054, TS-055, TS-056 · BR-24 · A failure the change did not cause does not become triage · verdict: skipped

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal |
| Start | Same install as V1 |
| Land | Clean scratch branch; `/hele` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | Commit two broken tests on the scratch branch first: one that does not import the file the bug fix will change, and one that does, with an unexplainable assertion (for example, comparing against a hard-coded wrong date) |
| Input | The same small bug as V1, or another one that changes that file |

| Step | Do this | You should see |
|---|---|---|
| 1 | Send `/hele <bug>` | `Bugfix · direct`, one engineer |
| 2 | Wait | An "Unexplained failure" stop: Check, Error excerpt, Reaches (link). Exactly two rows: 1 continue (record as pre-existing) and 2 compare against the previous revision for this one check, each with a time estimate or `unknown`. No engineer or Wylie was called after his result |
| 3 | Type a free-text question | It is answered and the same two rows show again |
| 4 | Pick `1` | A "Direct close" whose Pre-existing row lists both failing tests by name with an error excerpt. No worktree, no dependency install, no second environment happened |
| 5 | Optional: repeat and pick `2` | Only Wylie is dispatched, for that one check only, and the close follows his report |

**Verdict:** skipped — on 2026-11-25 the human closed verification without walking this flow

**Notes:**

## V4 — Fast addition: rule from your words, then a doubt · TS-046, TS-047, TS-063, TS-058 · BR-2 · Approve product behavior together with acceptance scenarios · verdict: skipped

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal |
| Start | Same install as V1 |
| Land | Clean tree; `/hele` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | An existing feature with a PRD |
| Input | (a) a small addition whose rule you state completely, for example "list sorting must default to newest first". (b) one that leaves a product choice open, for example "add a discount for loyal customers" |

| Step | Do this | You should see |
|---|---|---|
| 1 | Send ask (a) | `⚡ Fast · direct`. No approval stop. The PRD is patched (patch version, changelog line) in the session. The engineer and Wylie (scenario delta) are dispatched in the same turn |
| 2 | Wait for both | The "Direct close" comes only after both report. Rule delta shows old/new wording with PRD and TEST_STUBS links, each at a patch version |
| 3 | Send ask (b) | A Question pack. No PRD write and no engineer until you answer |

**Verdict:** skipped — on 2026-11-25 the human closed verification without walking this flow

**Notes:**

## V5 — "Fix something" at manual verify goes direct · TS-060, TS-021, TS-022 · BR-13 · Correct the active increment in place · verdict: skipped

**Walk evidence:** prepared, not executed

| Open | |
|---|---|
| URL | Not applicable — Claude Code terminal |
| Start | Same install as V1 |
| Land | A project with an increment at manual verify. Its VERIFY.md has at least two flows, one already `verified` |

| Data | Value |
|---|---|
| Login | Your own Claude Code login |
| Seed | That increment's QA_REPORT.md and VERIFY.md |
| Input | A small correction to the flow being walked that touches no excluded surface |

| Step | Do this | You should see |
|---|---|---|
| 1 | Reach the verify close | Option 4 reads "✏️ Fix something…", not "Back to the PRD" |
| 2 | Pick it and describe the correction | The path is direct. One engineer; the plan and QA_REPORT are not rebuilt |
| 3 | Read the close | The active-increment "Direct close": `1` walk the touched flow now / `2` tell me what you need. No PR rows |
| 4 | Open VERIFY.md | Only the touched flow is `pending`, with the corrected expected result. The verified flow is still `verified` |
| 5 | Pick `1` | The walk shows the touched flow from VERIFY.md, not the old QA report |

**Verdict:** skipped — on 2026-11-25 the human closed verification without walking this flow

**Notes:**
