---
feature: guided-delivery
increment: 006-deliver-small-changes-directly
doc: QA_REPORT
run: 3
based_on: TEST_STUBS v1.1
verdict: green
updated: 2026-11-25
---

# QA Report — guided-delivery · increment 006 · run 3

## Summary

Increment 006 adds the direct path: a Bugfix, a Fast addition or a correction of the active increment that touches no excluded surface is delivered by one owning engineer with a failing-first test, only the checks that reach the change, and a close with evidence. Unreached failures are recorded as pre-existing on both paths, an unexplained reached failure stops for the human, and a previous-revision comparison happens only when the human chose it.

Run 3 confirms the last fix, TS-005. **All 34 stubs in scope are passing at contract-text level.** Nothing is failing, pending or blocked, so the verdict is green at that level.

**What green means here, and what it does not.** This repository ships markdown contracts that a model reads at runtime. The only proof that can run here is a `node:test` check reading the shipped text. These tests show that each rule is written in the contract, and Wylie's own deletion probes show that each assertion fails when its clause is removed. They do not show that an agent in a real session follows the rules. **Not run and deferred:** the runtime replay `guided-delivery/006 — direct path` mapped in Coverage. It has no runner, no CI trigger and no owner-scheduled date (owners: Lisbon for behavior, Rigsby for the runner). **Not executed:** all five human flows in VERIFY.md, including the timed V1 walk of a real small Bugfix. They are prepared only. No session could load the new contract, because the plugin installed for this project is the older 1.4.0 copy. Nothing in this report is behaviorally proven.

**Code identity correction.** `cli/test/direct-path-routing.test.js` changed at 13:29 during QA run 2: Lisbon's review fix-up made four in-test controls for TS-019 and TS-020 non-vacuous. That was after run 2's `npm test` (E6), so run 2's recorded sha1 for that file was stale. Run 3 re-probed every stub whose assertions live in that file, and in `direct-path-build.test.js`, which also changed, against the current text (E7). All were caught.

Fresh in run 3: one `npm test` (E6) and Wylie's own deletion probes (E7). Reused: bead `hele-skills-7qu.6` build checks (E2): the bundle, `cli/src`, the manifests and CHANGELOG are unchanged. E2E executed: zero, because none applies.

### Evidence runs

| Run | What | Result | Code identity / environment |
|---|---|---|---|
| E6 · fresh, run 3 | `cd cli && npm test` (pretest asset build, then `node --test "test/*.test.js"`) | exit 0 · 131 tests, 8 suites, 131 pass, 0 fail, 0 skipped, 0 retries · `duration_ms 481`. Output kept locally at `.hele/tmp/qa-006-run3-npm-test.txt` (untracked scratch) | HEAD `a65533e22beccc40d8674516a8709a77d134edb3` plus the uncommitted increment diff (same file set, porcelain sha1 `184826f3…`). Contracts unchanged: `templates/direct-path.md` `01fbd55f…`, `skills/hele-plan/SKILL.md` `10ec537e…`. `cli/dist/hele.cjs` `40f637c0…`. Test sha1s: `direct-path.test.js` `82179827…` (same as run 2), `direct-path-reports.test.js` `5cad3afd…` (same as run 1), `direct-path-build.test.js` `24c31ca6…` (two TS-005 tests added since run 2), `direct-path-routing.test.js` `8d1948db…` (control fix-up, see Summary). The modification-time scan since run 2's last write shows only `direct-path-build.test.js` and the regenerated untracked `cli/src/cursor-assets.json`. macOS (Darwin 25.5.0), Node v24.21.0 |
| E7 · fresh, run 3 | Wylie deletion probes, same method as E5: a temp copy outside the repo, one deletion per probe, the five content-test files (105 tests, baseline green), restore, copy removed | 25 probes. **24 caught, 1 missed.** Caught: TS-005 stale reconcile sentence; the whole `- Load:` line; each single input removed alone (`settings.json`, DESIGN_SPEC, `validation-strategy.md`, "including Coverage recommendations"); plan not signed; do not ask to approve; and the routing-file and build-file clauses re-probed (TS-003 ×2, TS-019, TS-020 ×3, TS-021 ×2, TS-022, TS-045, TS-013 ×2, TS-014, TS-044, TS-054, TS-056). Missed: removing `chat-reports.md` from the `- Load:` line. That file is not part of the TS-005 clause (project facts, versions, owners, dependencies, proof), so it is not a gap | Same as E6 |
| E4 · run 2 | `npm test` 129/129 | superseded by E6 for identity | run 2 tree, routing test `efe5e2e8…` |
| E5 · run 2 | 32 deletion probes, 30 caught | still valid for the stubs whose test file is unchanged since (`direct-path.test.js`, `direct-path-reports.test.js`). Repeated in E7 for the stubs in the two changed files | run 2 tree |
| E2 · reused | Bead `hele-skills-7qu.6` final checks run 2: bundle unchanged after `npm run build` (sha1 `40f637c0…`); diagram equals the README; manifests and version OK | still valid | same dist sha1 |
| E1, E3 · run 1 | `npm test` 101/101; run-1 probes | history | run 1 tree |

**Why the evidence for stubs not re-probed in run 3 is current.** Their contract files and their test file (`direct-path.test.js` or `direct-path-reports.test.js`) are byte-identical to run 2, and all of them passed again in E6.

## Coverage and evidence

| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-003 · Review behavior and independent scenarios together on the full path | BR-2 · Approve product behavior together with acceptance scenarios | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "TS-003: one approval stop, no separate validation-plan or coverage approval", plus the run-1 full-path stop tests (E6; E5 killed both deletions) |
| TS-005 · Move from approval directly into prepared delivery | BR-4 · Planning does not add another approval stop | passing | unit (contract text) | [direct-path-build.test.js](../../../../../cli/test/direct-path-build.test.js) — "TS-005: stale scenarios are reconciled before build starts (phase 4)", "TS-005: the plan reads settings, PRD, TEST_STUBS with Coverage, validation strategy, DESIGN_SPEC and the plan template (context)", "TS-005: the human does not sign the plan (rules line)", "…(phase 4 line)", "TS-044/TS-005…" (E6; E7 caught every deletion, including single inputs) |
| TS-013 · Broaden verification when warranted without blocking on unreached failures | BR-8 · Engineering supplies current and proportional proof | passing | unit (contract text) | [direct-path-build.test.js](../../../../../cli/test/direct-path-build.test.js) — "TS-013: final checks run affected tests plus typecheck and lint", "TS-013: final checks run the whole suite for shared config…", "TS-013: build records an unreached failing check…" (E6; E5 killed) |
| TS-014 · Start independent QA after evidenced engineering on the full path | BR-9 · Completed engineering proceeds to independent validation | passing | unit (contract text) | [direct-path-build.test.js](../../../../../cli/test/direct-path-build.test.js) — "TS-014: a built plan is engineering evidence only, not QA or human acceptance", "TS-014: plan built, epic closed and QA start…" (E6; E5 killed) |
| TS-019 · Keep the feature and choose the increment by path | BR-12 · New changes to an existing capability get the next increment | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "TS-019: a changed rule patches the PRD in the Fast skill", "TS-020, TS-045: … Already the rule", "Fast opens the next increment only on the full path (TS-019)" (E6; E5 killed) |
| TS-020 · An unchanged-rule bug never stops for approval | BR-12 · New changes to an existing capability get the next increment | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "TS-020, TS-045: an unchanged rule leaves the PRD text alone and is reported as Already the rule", plus the run-1 no-stop tests (E6; E5 killed all 3 deletions) |
| TS-021 · Correct changed behavior in the active increment on the full path | BR-13 · Correct the active increment in place | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "TS-021: verified verdicts are kept unless the fix touched the flow (larger correction)", "adjust keeps patch-the-same-plan…" (E6; E5 killed all 3 deletions) |
| TS-022 · Apply an unchanged-rule correction without restarting | BR-13 · Correct the active increment in place | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "TS-022: an unchanged-rule correction proceeds at once and keeps the same verdicts" (E6; E5 killed) |
| TS-039 · Deliver a small code change through one engineer | BR-22 · Small code changes take the direct path | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-039/TS-062: applies to Bugfix, Fast and active-increment correction…", "conductor dispatches one background owning engineer", "TS-057: no increment, no EXECUTION_PLAN, no bd create…", "TS-051/TS-052/TS-053…", "TS-039: the drawing shows the direct path…" (E6) |
| TS-040 · Size does not force the full path | BR-22 · Small code changes take the direct path | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-040: no file-count limit and no other size test" (E6; run-1 E3 killed) |
| TS-041 · Send a request that names an excluded surface straight to the full path | BR-22 · Small code changes take the direct path | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — 13 × "TS-041: excluded-surface list contains …" scoped to the list; [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — conductor pre-escalation (E6; E5 killed `environment`, `an event`, `permissions`, `CI`) |
| TS-042 · The investigating engineer, not the conductor, decides the fit | BR-22 · Small code changes take the direct path | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "conductor and Fast skill route to templates/direct-path.md (TS-042)", "conductor pre-escalates only when the ask names an excluded surface; the engineer decides otherwise (TS-041, TS-042)" (E6) |
| TS-043 · Stop and hand over findings when an excluded surface appears | BR-22 · Small code changes take the direct path | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-043: the line that returns ESCALATE says stop and keep partial work" (E6; E5 killed) |
| TS-044 · An escalated investigation feeds full-path planning | BR-4 · Planning does not add another approval stop | passing | unit (contract text) | [direct-path-build.test.js](../../../../../cli/test/direct-path-build.test.js) — "TS-044/TS-005…"; [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-043…" (findings to planning) (E6) |
| TS-045 · Proceed without an approval stop when no rule changes | BR-2 · Approve product behavior together with acceptance scenarios | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-045: an unchanged rule leaves the PRD untouched, with no stop"; [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "TS-020, TS-045…" (E6; E5 killed) |
| TS-046 · Proceed when the human's own words decide the new rule | BR-2 · Approve product behavior together with acceptance scenarios | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "no approval stop on the direct path for an unchanged rule or one the human decided (TS-045, TS-046)"; [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "rule handling per BR-2" (E6) |
| TS-047 · Stop for a question pack when product doubt remains | BR-2 · Approve product behavior together with acceptance scenarios | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "Question pack on doubt, on both paths (TS-047)"; [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "fix-up N2: product doubt…" (E6) |
| TS-048 · Prove the change with a failing test first | BR-23 · The direct path proves the change with targeted evidence | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-048: failing-first sequence" (E6; run-1 E3 killed) |
| TS-049 · Run only the checks the change reaches | BR-23 · The direct path proves the change with targeted evidence | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-049: type and lint checks are named next to the tests that reach the changed files", "TS-049: reach is defined…" (E6; E5 killed) |
| TS-050 · Report the proof and what was deliberately not run | BR-23 · The direct path proves the change with targeted evidence | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-050: DONE report fields" (E6) |
| TS-051 · No independent validation without a signal | BR-9 · Completed engineering proceeds to independent validation | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-051/TS-052/TS-053: Wylie only for a real journey or a human-chosen comparison, closed scope" (E6) |
| TS-052 · Validate a needed real journey with a closed scope | BR-23 · The direct path proves the change with targeted evidence | passing | unit (contract text) | Same test as TS-051 and "fix-up S1: a flagged journey is dispatched first; the close waits for Wylie" (E6) |
| TS-053 · Run the comparison the human chose for one check | BR-23 · The direct path proves the change with targeted evidence | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-053: the comparison the human chose ends in the close", "TS-051/TS-052/TS-053…" (E6; E5 killed) |
| TS-054 · Record an unreached failure without blocking | BR-24 · A failure the change did not cause does not become triage | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-054: pre-existing failure recorded with name and error excerpt"; [direct-path-build.test.js](../../../../../cli/test/direct-path-build.test.js) — "TS-013: build records an unreached failing check…"; [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "a failing check the change does not reach is recorded as pre-existing, never triaged" (E6) |
| TS-055 · Let the human choose on an unexplained reached failure | BR-24 · A failure the change did not cause does not become triage | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-055: UNEXPLAINED returns two estimates or unknown…"; [direct-path-reports.test.js](../../../../../cli/test/direct-path-reports.test.js) — "Unexplained failure stop has exactly two choices with an estimate (TS-055)" (E6) |
| TS-056 · Compare against a previous revision only when the human says so | BR-24 · A failure the change did not cause does not become triage | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-056…"; [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "conductor rules forbid an unordered previous-revision comparison…"; [direct-path-build.test.js](../../../../../cli/test/direct-path-build.test.js) — "every previous-commit or previous-revision mention is conditioned…", "no contract instructs a worktree at a previous commit or revision" (E6) |
| TS-057 · Leave a light trace | BR-25 · The direct path leaves a light trace and closes with evidence | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-057: the trace names the regression test that stays in the project", "TS-057: no increment…" (E6; E5 killed) |
| TS-058 · Close with evidence and the rule delta | BR-25 · The direct path leaves a light trace and closes with evidence | passing | unit (contract text) | [direct-path-reports.test.js](../../../../../cli/test/direct-path-reports.test.js) — "Direct close lists what changed, proof, checks, pre-existing and rule delta (TS-058)" (E6) |
| TS-059 · Offer publication choices for a new bug or addition | BR-25 · The direct path leaves a light trace and closes with evidence | passing | unit (contract text) | [direct-path-reports.test.js](../../../../../cli/test/direct-path-reports.test.js) — "Direct close offers ready PR, draft PR, no PR and more edits (TS-059)"; [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "fix-up N8…" (E6) |
| TS-060 · Correct the active increment directly and walk the touched flow again | BR-13 · Correct the active increment in place | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-060…"; [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "adjust routes a fitting correction to the direct path… (TS-060)", "a human walk after a direct correction is shown from VERIFY.md…"; [direct-path-reports.test.js](../../../../../cli/test/direct-path-reports.test.js) — "Direct close for the active increment returns to the touched flow, no PR (TS-060)" (E6) |
| TS-061 · Announce the path taken and any escalation | BR-11 · Keep the conversation in its current work context | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "lane announcement shows the path and escalation is announced with its reason (TS-061)"; [direct-path-reports.test.js](../../../../../cli/test/direct-path-reports.test.js) — "lane announcement marks the path and shows the escalation shape (TS-061)"; [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-061: hele and fast help…" (E6) |
| TS-062 · A new capability takes the full path | BR-22 · Small code changes take the direct path | passing | unit (contract text) | [direct-path-routing.test.js](../../../../../cli/test/direct-path-routing.test.js) — "a new capability stays on the Feature lane and the full path regardless of size (TS-062)"; [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-039/TS-062…" (E6) |
| TS-063 · Derive the scenario delta alongside the fix when a rule changed | BR-25 · The direct path leaves a light trace and closes with evidence | passing | unit (contract text) | [direct-path.test.js](../../../../../cli/test/direct-path.test.js) — "TS-063/TS-064: scenario delta with the engineer when a rule changed; nobody otherwise" (E6) |
| TS-064 · Call nobody for scenarios when no rule changed | BR-25 · The direct path leaves a light trace and closes with evidence | passing | unit (contract text) | Same test as TS-063 (E6; run-1 E3 killed) |

Limitation shared by every row: contract text only. No row proves that a model in a session follows the rule. The runtime replay `guided-delivery/006 — direct path` (TEST_STUBS Coverage) is proposed, not run, and has no runner.

### TS-003 · Review behavior and independent scenarios together on the full path · passing

**Rule:** BR-2 · Approve product behavior together with acceptance scenarios

**Proof:** `direct-path-routing.test.js`. "TS-003: one approval stop, no separate validation-plan or coverage approval" matches "No separate validation-plan approval" inside the `2-spine` phase of `skills/hele/SKILL.md`, and "do not present a separate approval gate" in `skills/hele-stubs/SKILL.md`. Each has a control that drops the sentence and requires a failure. It also asserts that "parent stop presents PRD + stubs together" (no control). The run-1 tests still pin the stop as full-path behavior.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** One approval stop on the full path, with rules, scenarios and coverage together and no separate coverage approval. E5: deleting either sentence fails the test.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-005 · Move from approval directly into prepared delivery · passing

**Rule:** BR-4 · Planning does not add another approval stop

**Proof:** `direct-path-build.test.js`. "TS-005: stale scenarios are reconciled before build starts (phase 4)" matches "based_on drift … flag STALE and reconcile before starting build" inside hele-plan phase 4, with a control that removes the sentence. "TS-005: the plan reads settings, PRD, TEST_STUBS with Coverage, validation strategy, DESIGN_SPEC and the plan template (context)" requires the `- Load:` line inside `<context>` to contain `settings.json`, the PRD, "TEST_STUBS including Coverage recommendations", `validation-strategy.md`, "approved DESIGN_SPEC" and `execution-plan.md`, in any order, with a control that removes the line. The two plan-signature tests from run 2 and "TS-044/TS-005" (one bead per task on the full path) remain.

**Execution:** E6 fresh, E7 fresh probes.

**Expected / observed:** Planning starts from approval with no plan approval, reads the real project inputs, reconciles stale scenarios and tracks every task. E7 caught the stale-sentence deletion, the whole-line deletion, and each of four single-input deletions. Removing `chat-reports.md` from that line is not caught; it is outside the stub's clause.

**Limitations:** the test proves that the inputs are listed, not that a planner actually reads them; that needs the runtime replay. "The actual project" (code facts gathered for `<current-state>`) is covered only through the listed documents and the TS-044 `<current-state>` assertion. Contract text only; the runtime replay was not run.

### TS-013 · Broaden verification when warranted without blocking on unreached failures · passing

**Rule:** BR-8 · Engineering supplies current and proportional proof

**Proof:** `direct-path-build.test.js`. "TS-013: final checks run affected tests plus typecheck and lint" and "TS-013: final checks run the whole suite for shared config, lockfile, test setup or schema changes" are both scoped to the `2-verify` phase of hele-build, each with a removal control. The run-1 tests pin the pre-existing-failure clause.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Every clause routed in run 1 is pinned. E5 killed both deletions.

**Limitations:** Contract text only; the runtime replay was not run. The "expensive verification stays constrained by the task contract" clause is not asserted separately; run 1 did not raise it as a gap.

### TS-014 · Start independent QA after evidenced engineering on the full path · passing

**Rule:** BR-9 · Completed engineering proceeds to independent validation

**Proof:** `direct-path-build.test.js`. "TS-014: a built plan is engineering evidence only, not QA or human acceptance" is scoped to `2-verify` with a removal control. The run-1 test pins mark-built and the QA start on the full path.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the deletion.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-019 · Keep the feature and choose the increment by path · passing

**Rule:** BR-12 · New changes to an existing capability get the next increment

**Proof:** `direct-path-routing.test.js`. "TS-019: a changed rule patches the PRD in the Fast skill" checks step 2 of Fast phase 2 for the patch clause, with a sentence-drop control. "TS-020, TS-045" pins "leave the PRD" and the **Already the rule** bucket. The run-1 test pins increment-by-path.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the PRD-patch, leave-the-PRD and Already-the-rule deletions.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-020 · An unchanged-rule bug never stops for approval · passing

**Rule:** BR-12 · New changes to an existing capability get the next increment

**Proof:** `direct-path-routing.test.js`. "TS-020, TS-045: an unchanged rule leaves the PRD text alone and is reported as Already the rule" checks step 2 (leave the PRD; Already the rule bucket) and step 5 ("bugfix whose rule text is unchanged has no stop: the PRD is left alone"), each with a control. The run-1 tests pin no stop on either path.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed all three deletions.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-021 · Correct changed behavior in the active increment on the full path · passing

**Rule:** BR-13 · Correct the active increment in place

**Proof:** `direct-path-routing.test.js`. "TS-021: verified verdicts are kept unless the fix touched the flow (larger correction)" pins four sentences with controls: verify-work "A flow that is still `verified`… keeps its section and its verdict" and "keeps those verdicts unless that fix touched the flow", and adjust "Every flow with verdict `verified` stays verified, except a flow this fix touches" and "Passed walks stay passed".

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the three deletions it tried.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-022 · Apply an unchanged-rule correction without restarting · passing

**Rule:** BR-13 · Correct the active increment in place

**Proof:** `direct-path-routing.test.js`. "TS-022: an unchanged-rule correction proceeds at once and keeps the same verdicts" pins "**Already the rule** does not wait" and "Start the flow in that same turn" in adjust, plus the verdict-keeping sentences. It also asserts that the verify-work clause is not conditioned on a rule change.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the "does not wait" deletion and both verdict deletions.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-039 · Deliver a small code change through one engineer · passing

**Rule:** BR-22 · Small code changes take the direct path

**Proof:** `cli/test/direct-path.test.js`. "TS-039/TS-062" checks that the conductor block names Bugfix, Fast and a correction of the active increment. "conductor dispatches one background owning engineer" checks background, Cho and Van Pelt, and `settings.agents.models`. "TS-057" checks no EXECUTION_PLAN and no review. "TS-051/052/053" checks "no Wylie run" without a signal. The drawing tests check the lane boxes `Fast direct` and `Bugfix direct`.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** One owning engineer; no plan, no separate review, no validation phase. All of these are stated and asserted.

**Limitations:** contract text only. Whether a session dispatches exactly one engineer is unproven until the runtime replay runs.

### TS-040 · Size does not force the full path · passing

**Rule:** BR-22 · Small code changes take the direct path

**Proof:** `direct-path.test.js` — "TS-040: no file-count limit and no other size test". Deleting the sentence fails it (E3 killed; repeated in E5, killed).

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-041 · Send a request that names an excluded surface straight to the full path · passing

**Rule:** BR-22 · Small code changes take the direct path

**Proof:** `direct-path.test.js`. Thirteen tests "TS-041: excluded-surface list contains …" match each term inside the slice between `**Excluded surfaces.**` and `**Entry.**`, so other text can no longer satisfy them. `- CI;` and `- environment;` are matched as whole list lines. Each has a removal control. The routing test still pins up-front escalation only when the ask names a surface.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed `- environment;` (the run-1 survivor), `an event`, `permissions` and `- CI;`.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-042 · The investigating engineer, not the conductor, decides the fit · passing

**Rule:** BR-22 · Small code changes take the direct path

**Proof:** `direct-path-routing.test.js` — phase `1-lane` of `skills/hele/SKILL.md` must say "only when the ask names an excluded surface", "owning engineer", and that the engineer decides or confirms the fit.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only. Whether the conductor refrains from pre-escalating on its own judgment needs the replay.

### TS-043 · Stop and hand over findings when an excluded surface appears · passing

**Rule:** BR-22 · Small code changes take the direct path

**Proof:** `direct-path.test.js`. "TS-043: the line that returns ESCALATE says stop and keep partial work" selects the worker line containing ``return `ESCALATE` `` and requires "stop, keep partial work" on it, with a removal control.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned to the ESCALATE exit. E5 killed the deletion.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-044 · An escalated investigation feeds full-path planning · passing

**Rule:** BR-4 · Planning does not add another approval stop

**Proof:** `direct-path-build.test.js` — hele-plan states "escalated from the direct path", findings, `<current-state>` and "left no plan or beads to reuse". `direct-path.test.js` checks that the conductor passes findings to planning.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-045 · Proceed without an approval stop when no rule changes · passing

**Rule:** BR-2 · Approve product behavior together with acceptance scenarios

**Proof:** `direct-path.test.js`. "TS-045: an unchanged rule leaves the PRD untouched, with no stop" checks the `- Rule unchanged` line for "no PRD touch, no stop". The routing test "TS-020, TS-045" covers the Fast side.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the deletion.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-046 · Proceed when the human's own words decide the new rule · passing

**Rule:** BR-2 · Approve product behavior together with acceptance scenarios

**Proof:** `direct-path-routing.test.js` — the spine says "human's words already decide", "patch … PRD … (patch bump, changelog)" and "delta … close". `direct-path.test.js` — "rule handling per BR-2".

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only. Whether Lisbon correctly notices that she would be making an unstated product choice is only observable in a session.

### TS-047 · Stop for a question pack when product doubt remains · passing

**Rule:** BR-2 · Approve product behavior together with acceptance scenarios

**Proof:** `direct-path-routing.test.js` — "Question pack on doubt, on both paths", "nothing is written". `direct-path.test.js` — "fix-up N2" asserts "Question pack … until the human answers" and that the worker stops on product doubt.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-048 · Prove the change with a failing test first · passing

**Rule:** BR-23 · The direct path proves the change with targeted evidence

**Proof:** `direct-path.test.js` — "TS-048: failing-first sequence" checks the order: failing output, then make the change, then green. Deleting "Record the failing output." fails it (E3 killed; repeated in E5, killed).

**Execution:** E6 fresh (run 3); E3 run 1 probe repeated in E5 where listed.

**Expected / observed:** Stated and asserted.

**Limitations:** whether an engineer actually saw the test fail first can only be shown by a session transcript.

### TS-049 · Run only the checks the change reaches · passing

**Rule:** BR-23 · The direct path proves the change with targeted evidence

**Proof:** `direct-path.test.js`. "TS-049: type and lint checks are named next to the tests that reach the changed files" requires the reach definition and "type and lint checks that apply, scoped to the changed files" on worker step 4, with a removal control.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the deletion.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-050 · Report the proof and what was deliberately not run · passing

**Rule:** BR-23 · The direct path proves the change with targeted evidence

**Proof:** `direct-path.test.js` — "TS-050: DONE report fields" checks changed files, proof, failing and passing output, related checks, "not run and why" and pre-existing.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-051 · No independent validation without a signal · passing

**Rule:** BR-9 · Completed engineering proceeds to independent validation

**Proof:** `direct-path.test.js` — "TS-051/TS-052/TS-053" checks "no Wylie run" and "unless the human chose".

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-052 · Validate a needed real journey with a closed scope · passing

**Rule:** BR-23 · The direct path proves the change with targeted evidence

**Proof:** `direct-path.test.js` — "real journey", "that journey only", "never the whole suite", "no smaller test". "fix-up S1" checks that the close waits for Wylie's report.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-053 · Run the comparison the human chose for one check · passing

**Rule:** BR-23 · The direct path proves the change with targeted evidence

**Proof:** `direct-path.test.js`. "TS-053: the comparison the human chose ends in the close" requires, on the conductor's `UNEXPLAINED` line, `On "compare"` … `qa-wylie-run` … `closed scope; then close.`, with a removal control.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the deletion.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-054 · Record an unreached failure without blocking · passing

**Rule:** BR-24 · A failure the change did not cause does not become triage

**Proof:** Three tests. `direct-path.test.js` "TS-054" covers the worker. `direct-path-build.test.js` "TS-013" covers the build: "name and an error excerpt", "does not block", "never routed". `direct-path-routing.test.js` covers the conductor rules: "does not reach … pre-existing … never triaged".

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-055 · Let the human choose on an unexplained reached failure · passing

**Rule:** BR-24 · A failure the change did not cause does not become triage

**Proof:** `direct-path.test.js` — "TS-055" checks the worker's UNEXPLAINED with estimates or `unknown`, and that the conductor "calls nobody". `direct-path-reports.test.js` — the "Unexplained failure" block has exactly two numbered rows, continue → pre-existing and compare → previous revision for this one check, each with `<estimate or unknown>`, plus "Nobody else is called before the human answers" and end the turn.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-056 · Compare against a previous revision only when the human says so · passing

**Rule:** BR-24 · A failure the change did not cause does not become triage

**Proof:** `direct-path.test.js` — "TS-056": Never order, worktree, dependency install, second environment, and every "previous revision" sentence conditioned. `direct-path-routing.test.js` — the conductor `<rules>` forbid it in any dispatch prompt, on both paths. `direct-path-build.test.js` scans all of skills/, agents/ and templates/: every "previous commit/revision" sentence must be conditioned on the human's choice, and no worktree at a previous revision may be instructed.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted, with the strongest negative coverage in the increment.

**Limitations:** contract text only. The measured cost driver (an unasked baseline) can only be shown absent in a session.

### TS-057 · Leave a light trace · passing

**Rule:** BR-25 · The direct path leaves a light trace and closes with evidence

**Proof:** `direct-path.test.js`. "TS-057: the trace names the regression test that stays in the project" checks the `**Trace.**` line, with a removal control. The run-1 test pins no increment, no plan, no `bd create`, and the patch and changelog.

**Execution:** E6 fresh (run 3); E5 probes (run 2), repeated in E7 where the test file changed.

**Expected / observed:** Pinned. E5 killed the deletion.

**Limitations:** Contract text only; the runtime replay was not run.

### TS-058 · Close with evidence and the rule delta · passing

**Rule:** BR-25 · The direct path leaves a light trace and closes with evidence

**Proof:** `direct-path-reports.test.js` — "Direct close lists…" checks the fields Changed, Proof, Related checks, Not run, Pre-existing and Rule delta; `failing → passing`; links; PRODUCT_DESCRIPTION/TEST_STUBS; and no box-drawing.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only. Whether the close is rendered with real evidence is a session observation (V1).

### TS-059 · Offer publication choices for a new bug or addition · passing

**Rule:** BR-25 · The direct path leaves a light trace and closes with evidence

**Proof:** `direct-path-reports.test.js` — rows 1 ready PR, 2 draft PR, 3 no PR, 4 more. `direct-path.test.js` "fix-up N8" checks that the rows defer to hele-verify-work phase 3 without copying `gh pr create`.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-060 · Correct the active increment directly and walk the touched flow again · passing

**Rule:** BR-13 · Correct the active increment in place

**Proof:** `direct-path.test.js` — the worker checks VERIFY.md `pending`, expected result, no other flow, no plan, QA_REPORT. The conductor checks touched flow only and verify-work. `direct-path-routing.test.js` — adjust says "plan and QA report not rebuilt" and "walk that flow"; verify-work phase 2 shows the flow from VERIFY.md, not the old QA report. `direct-path-reports.test.js` — the active-increment close offers "walk the touched flow now" and no PR rows.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-061 · Announce the path taken and any escalation · passing

**Rule:** BR-11 · Keep the conversation in its current work context

**Proof:** `direct-path-routing.test.js` — lane phase `Bugfix · direct`, `Fast · direct`, `· full`, and an Escalation with its reason. `direct-path-reports.test.js` — Lane rows `⚡ Fast · direct`, `🐛 Bugfix · direct`, the full variants, and `<lane> · direct → full — <reason>`. `direct-path.test.js` — help text and drawing. `cli.test.js` — "ai overview and README use the canonical flow diagram" (selected regression).

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-062 · A new capability takes the full path · passing

**Rule:** BR-22 · Small code changes take the direct path

**Proof:** `direct-path-routing.test.js` — "new capability … full path … regardless … size" in the lane phase, and "brand-new capability … Feature lane" in Fast. `direct-path.test.js` — the conductor block says a new capability stays on Feature / the full path.

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-063 · Derive the scenario delta alongside the fix when a rule changed · passing

**Rule:** BR-25 · The direct path leaves a light trace and closes with evidence

**Proof:** `direct-path.test.js` — "TS-063/TS-064" checks `qa-wylie-stubs`, hele-stubs, "same turn", "fix does not wait" and "close waits". It also checks that hele-stubs mentions the direct path with "no gate on the fix".

**Execution:** E6 fresh (run 3); E2 reused.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

### TS-064 · Call nobody for scenarios when no rule changed · passing

**Rule:** BR-25 · The direct path leaves a light trace and closes with evidence

**Proof:** `direct-path.test.js` — "no rule change … nobody". Deleting the sentence fails it (E3 killed; repeated in E5, killed).

**Execution:** E6 fresh (run 3); E3 run 1 probe repeated in E5 where listed.

**Expected / observed:** Stated and asserted.

**Limitations:** contract text only.

## Selected regressions

| Journey / test | Feature / stubs | Why affected | Result / evidence |
|---|---|---|---|
| `cli/test/cli.test.js` — "ai overview and README use the canonical flow diagram" | guided-delivery · TS-039, TS-061 | `cli/src/flow-diagram.js`, `cli/src/ai.js` and `README.md` changed (conditional regression named in Coverage; CLAUDE.md sync rule) | pass (E6; E2 also checked `FLOW_DIAGRAM` equals the README block and the built CLI prints it) |
| `cli/test/language.test.js` — "chat templates render tables in the session language", "language defaults split chat from artifacts" | guided-delivery chat shapes (TS-018 area), shared language contract | `templates/chat-reports.md` changed | pass (E6) |
| Whole CLI suite `cd cli && npm test` (131 tests, including `cli.test.js` find/config/help subprocess tests and the run-report test) | all features with CLI tests, including project-memory | Shared contract files and the CLI bundle changed. The suite takes under a second, so the whole set is cheaper than selecting | pass (E6 fresh) |
| CI `version` and `manifests` jobs (`.github/workflows/ci.yml`) | release metadata | manifests bumped to 1.7.0, CHANGELOG heading added | pass, reused from E2; `direct-path.test.js` "plugin.json and marketplace.json versions equal the newest CHANGELOG heading" passes in E6 |

No E2E journeys exist in this repository, so there are no E2E regressions to select.

## E2E and CI impact

| Decision | Details |
|---|---|
| E2E changes | 0 reused, 0 extended, 0 added, 0 removed |
| Justification | None applies. The real connection is a Claude Code session loading these contracts and dispatching workers. No API or browser surface exists, and the repository has no session runner. The runtime integration replay in Coverage stays proposed and is not a mandate for this increment |
| Execution map | No separate execution map. `.github/workflows/ci.yml` job `cli` runs `npm test` (`node --test "test/*.test.js"`), which picks up the four new files with no CI change |
| CI stages | Unchanged: `cli` (npm test, build, stale-bundle check), `manifests`, `version`, `release`. No stage or trigger added, demoted or moved |
| Timing | Suite growth: 4 files and 104 tests (27 at absorption, 101 at QA run 1, 129 at run 2, 131 now). E6 measured `duration_ms 481` for the whole suite on one local machine (runs 1–2: 869, 561; local noise, not a trend). CI wall-clock impact was not measured |
| Deferred verification | Runtime replay `guided-delivery/006 — direct path`: no trigger, no runner. Owners: Lisbon (behavior), Rigsby (runner), Wylie (coverage). Until it exists, a model ignoring these rules would surface only in real sessions. The closest real evidence is the timed human walk V1 below |

## Human verification

All flows are **prepared, not executed**. A Claude Code session reads skills and templates from the installed plugin, and the plugin installed for this project is the older 1.4.0 copy. The new contract loads only after the plugin is updated to this code. So no walk could run from the QA session, and nothing below describes something observed. Run the walks in a separate project after installing from this checkout, as in Open.

### V1 — Timed small Bugfix on the direct path · TS-039, TS-042, TS-045, TS-048, TS-049, TS-050, TS-051, TS-057, TS-058, TS-059, TS-061, TS-064 · BR-22 · Small code changes take the direct path

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

### V2 — Escalation to the full path · TS-041, TS-043, TS-044, TS-061 · BR-22 · Small code changes take the direct path

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

### V3 — Unexplained failure stop · TS-054, TS-055, TS-056 · BR-24 · A failure the change did not cause does not become triage

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

### V4 — Fast addition: rule from your words, then a doubt · TS-046, TS-047, TS-063, TS-058 · BR-2 · Approve product behavior together with acceptance scenarios

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

### V5 — "Fix something" at manual verify goes direct · TS-060, TS-021, TS-022 · BR-13 · Correct the active increment in place

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

## Findings and routing

No open findings. All 14 coverage gaps from run 1, including the two TS-005 clauses run 1 failed to route, have assertions that Wylie's own deletion probes fail (E5, E7).

| Stub / journey | Class | Expected / observed and impact | Owner / next action |
|---|---|---|---|
| guided-delivery TS-039–TS-064 and the rewritten stubs · runtime behavior | deferred (not a finding against this increment) | No runner exists, so the replay `guided-delivery/006 — direct path` was not run. Contract text cannot show that a model obeys the rules: a conductor that pre-escalates, an engineer who skips the failing-first step, or an unasked baseline would only show up in real sessions | Lisbon / Rigsby: replay runner when authorized. Human: V1 timed walk as the closest real evidence |
| VERIFY.md V1–V5 | not executed | All five flows are prepared, not walked. They need a session with the plugin installed from this code | The human, at manual verify |

## Decisions

| Question | Answer / pending | Where it goes |
|---|---|---|
| Is contract-text proof enough for `passing` in this increment, with the runtime replay deferred? | Yes, per TEST_STUBS v1.1 Coverage ("not a mandate for this increment"). Results are labeled contract-text level throughout and never as behavioral proof | Recorded here and in TEST_STUBS Evidence |
| Do v1.0 clauses of rewritten stubs need contract-text pins now? | Yes (Wylie's coverage call, fixes approved by the human after run 1). Done: 13 in run 2, TS-005 in run 3 | Closed |

## History

- run 3 (2026-11-25): verdict green at contract-text level. 34 of 34 passing. Fresh: `npm test` 131/131 (E6) and 25 deletion probes, 24 caught; the 1 miss is outside the TS-005 clause (E7). Corrected run 2's stale identity for `direct-path-routing.test.js` and re-probed its stubs. Reused: E2. 0 E2E. Runtime replay not run; VERIFY.md unchanged, 5 flows prepared, none executed.
- run 2 (2026-11-25): verdict red. 34 stubs assessed after the approved coverage fixes. Only test files changed; contracts and bundle are unchanged. 33 passing and 1 pending (TS-005), all at contract-text level. 0 failing, 0 blocked. Fresh: `npm test` 129/129 (E6) and 32 deletion probes, 30 killed and 2 survived, both TS-005 (E5). Reused: E2. 0 E2E. VERIFY.md unchanged: 5 flows prepared, none executed.
- run 1 (2026-11-24): verdict red, coverage gaps. 34 stubs assessed. 20 passing and 14 pending, all at contract-text level. 0 failing, 0 blocked. Reused bead `7qu.6` final checks (101/101). Fresh: one `npm test` (101/101) and mutation probes (5 killed, 16 survived across 14 stubs). 0 E2E. 5 human flows prepared, none executed.
