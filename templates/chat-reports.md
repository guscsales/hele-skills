# Chat Report Visual Language

Every hele skill reports in chat using this shared visual language. Reports must be scannable. Content stays king.

## Language

Read `.hele/settings.json` → `language`. A missing key uses `${CLAUDE_PLUGIN_ROOT}/core/default-config.json`.

- `language.chat` is `auto` unless the project set a tag (`pt-BR`, `en`). `auto` is the language of the human's messages in this session. One session, one chat language.
- `language.artifacts` is the language of every file hele writes (PRD, plan, stubs, QA report, verify, design spec). Default `en` is English (en-US). `en-US` is the same language.

The fenced tables in this file are the shape: column count, order, emoji, one item per row. The English words inside them are the contract names. They are not text to paste.

When chat is not English, write every word the human reads in the chat language: column headers, row labels, section labels (`New`, `Rewritten`, `Already the rule`, `Retired`), option sentences, and every cell that is a sentence. Leave file names, slugs, ids (`BR-4`, `TS-001`), versions, commands, code, model names, and agent tags (`[AGENT] Lisbon`) as written.

A fact that lives in an artifact is restated in the chat language. The file on disk stays in `language.artifacts`. Do not paste the artifact sentence into the table. Do not change the fact. Translating never changes the shape the effective output chose (see Output): a table stays a table, a list stays a list, a one-line summary stays one line.

The human writes in Portuguese. `| Field | Value |` is the wrong table. `| Campo | Valor |` is that table. `| Actions | Your call |` is the wrong menu. `| Ações | Sua escolha |` is that menu. `New (7)` is the wrong bucket. `Novas (7)` is that bucket. `not needed` is the wrong cell. `não entra` is that cell. The same rule applies to any other chat language.

The Dispatch closer is one copied sentence. English: `Thread is opened, you can talk`. Portuguese: `A thread continua aberta, pode falar.` Any other chat language: one sentence with that meaning. Never "fio".

Read this file before the first report of a `/hele` session. `/hele` is the only command the human types for product work. Real stops end in numbered options. The execution plan and the build do not stop. After the PRD is approved (and design, when that stop happened), those run on their own. The QA report is the next stop: continue to the manual walk, or fix what you saw.

## Output

How much of each report appears in chat comes from the effective output, never from this file. The blocks below name sections and levels; the values live in `hele config effective output`.

- Read the effective output once per session, before the first report, with `${CLAUDE_PLUGIN_ROOT}/scripts/hele config effective output` (it works without `.hele/`), and again after the human saves an output change. Every block below takes its level from that JSON. Never carry a default, a preset value or a row-limit number of your own. This file names none.
- Precedence, strongest first: an explicit request in the current message, a saved override, the saved preset, the plugin default. A request in the message applies to this response only and is never saved unless the human asks to save it. Saving goes through `hele config set` (or `hele config unset` to follow the preset again). A request changes the level of detail only: it cannot hide always-visible content.
- When `warnings` is not empty, print one short line naming each key and the value used instead, once per session. It is not repeated in later reports.
- Output is chat presentation only. Documents, evidence, tests run, approval criteria, workflow stages and work state are the same under every setting. Chat text follows `language.chat` and files follow `language.artifacts` under every setting, including summaries, count lines and omission lines.
- **Always visible.** Under every preset, every section value (`off` included) and whatever the current message asks, the chat still shows at least a summary of: failures, blockers, missing required coverage, product questions, required decisions, decisions taken without a question, workflow options and approvals, and the steps of a verification walk. This content is outside the section levels. Failures, blockers and missing required coverage are outside `maxTableRows`: one line per item with its id and cause, however many there are. Only the detail per item follows the section level. A request to hide them gives less detail, never fewer items.
- **Row limit.** `maxTableRows` limits informational lists, `full` levels included. A limited list ends with the omission line. English contract: `<shown> of <total> shown · <omitted> more in [<document>](<absolute path>) or ask "show all <thing>"`. Render it in the chat language. Never imply a limited list is complete. Questions that need an answer and items the human must approve are never cut: group or paginate them explicitly (English contract `questions <from>–<to> of <total>`), and the stop does not proceed as answered or approved while any is unseen.
- **Expansion.** "show all TS", "expand TS-014" and "show the full QA report" re-present information that already exists, for that response only: no phase restart, no test rerun, no approval change, no work-state change, no settings change. A show-all request lifts the row limit for that response, and the omission line is left out when everything is shown. The next report returns to the effective output.
- **Tables.** `auto` allows prose or a short list for a small amount of information instead of a one-row table. `always` presents structured information as tables. Neither allows box-drawing.
- An omitted detail is not missing evidence. The complete document stays linked from the report that omitted it.

## Per-stop checklist

The checklist names blocks. Each block's level comes from `## Output`; the order below does not change with the level.

| Stop | Must print, in this order |
|---|---|
| Lane | Lane table (one row) · then continue into that lane |
| Init | Report frame · Field/Value · Files (links) · continue the ask already in flight |
| Questions | Question pack (investigate first, code behind existing rules included) · Options 1/2/3 · no files · end the turn |
| PRD + stubs | Report frame · Field/Value · PRD delta (prdDelta) · Scenarios (testStubs) · Coverage (coverage) · Decided without a question · always-visible items · Files (links) · Open these · Options |
| Design | Report frame · Field/Value · Files (links) · Options |
| Plan | Staff note · Files (links) · no Options — start build (draft DB_CHANGES → Hightower's Options instead) |
| Build green | short report · no Options — start auto-verify |
| Unexplained failure | Report frame · Field/Value (check, error, what it reaches) · the two-choice Options table, and nothing after it · call nobody · end the turn |
| Direct close | Report frame · Field/Value (changed, proof, related checks, not run, pre-existing, Decided without a question, rule delta) · Files (links) · Options (PR choices, or walk the touched flow) |
| Dispatch | Dispatch announcement (dispatch) · one canned line (`Thread is opened, you can talk` / `A thread continua aberta, pode falar.`) · end the turn |
| QA report | Report frame · Test results (qaResults) with evidence · CI impact · Shots (screenshots) · always-visible items · Files (links) · Open these · Options (continue to manual verify / fix what I saw) |
| Verify — each flow | Open table · Data table · Steps table (every step row, always) · optional screenshot · Options |
| Verify — close | Report frame · counts · Files (links) · the Options table below, and nothing after it |
| Absorb — written | Report frame · counts · gaps and blocked, one line each · Files within the row limit with the omission line · Options |
| E2E audit | E2E audit (chat): Report frame · diagnosis · leading recommendations within the row limit · omission line · report link |
| Open lane | Report frame · relay · Files if any (links) · Options (Work done / Let's formalize / keep going) |

<rules>
- **NEVER wrap a report in a code fence.** Reports are chat text: prose plus markdown tables. The fences in this file only delimit the shape. Code fences in chat are for actual code, commands, and file contents.
- **Never box-drawing.** Never emit box-drawing characters to frame a report. Tables or prose for small amounts follow `output.tables` (see Output).
- One emoji per section header cell.
- **One item per table row.**
- Agent tags are formal identifiers: `[AGENT] Lisbon`, `[AGENT DBA] Hightower`. In prose: "Agent Lisbon", "Agent Hightower".
- **Every file is a markdown link.** The visible text is the file name. The target is the absolute path, on one line, with no space and no line break inside the URL. Do not put the raw path in a Path column. A path that wraps in a cell is not a link. One file per row.

  `[PRODUCT_DESCRIPTION.md](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md)`

- **PRD and QA stops print an Open these table immediately before Options.** Each row is a link. A patched PRD gets a **Moved** cell with ids only. The English contract is `new BR-4 · rewritten BR-1 · retired BR-3`; render `new`, `rewritten` and `retired` in the chat language. A first version says the chat-language rendering of `first version`. Under the table, one line in the chat language, only when the PRD delta was printed at `full`: was / now for each rule is in the delta above. The English contract is `> 📌 **Was / now for each rule is in the delta above.**`
- **Every interactive stop ends with the Options table, and that table is the only menu.** The two columns are the Actions column and the Your call column. Render those headers in the chat language. The first cell is the number. The second cell starts with one emoji, then the words. One option per row. Option `1` advances and starts that work in the same turn. Option `2` is tell me what you need, except where a block below names a different row 2 (the Question pack and the Unexplained failure stop are those exceptions). Free text stays in the current phase. At the Question pack, free text is option 3. At the Unexplained failure stop, free text stays on that stop and is not a third choice. Nothing is printed after the table. Do not print a line `Options: 1 … 2 … 3 …`. Do not print a second table whose first column is the option name (`Work done`, `iterate`, `draft PR`, `Fix something`). That shape is not a menu.
- **Open channel.** After the dispatch announcement, end the turn. The one line is the Dispatch closer from Language. Never "fio". "Waiting for subagent" is a bug. If the human talks while a worker runs, answer them.
- **Models from settings.** Every dispatch announcement carries the model, as a Model cell in `full` and inside the line in `brief`. Resolve `settings.agents.models[<key>]` for this runtime (`cursor` or `claude-code`). A plain string applies to every runtime. Apply phase defaults where specified. Omit the model field and write `inherit` if the resolved choice is `inherit` or missing. Never pass the session model to a worker. Never invent a slug.
- File artifacts are plain markdown. No emoji inside `.hele/` files.
- Chat, including table headers and cells, is `language.chat`. Files hele writes are `language.artifacts`. See Language.
- The harness folder is always `.hele/` at the project root. Do not invent another name. Do not write `.helerc`.
- Say **the human**. Never "CEO".
- Do not write `state.json`, a feature status, `NOTES.md`, `LEARNINGS.md`, or `findings.json`.
- **Suggest `/clear` only when a phase closed without auto-chaining.** `/hele` is sticky: do not tell the human to re-type it.
</rules>

<canonical-blocks>

The fences delimit the shape. Render every header, label, and sentence in the chat language. Do not paste the English words when chat is not English.

## Lane announcement (first reply of /hele — print the one row that applies)

```
| Lane | PRD | What happens |
|---|---|---|
| 🆕 Feature | <slug> or new | questions → PRD + stubs → design? → agents build + auto-verify → you verify |
| ⚡ Fast · direct | <slug> | questions only if the rule is open → one engineer proves and fixes → close with evidence |
| 🐛 Bugfix · direct | <slug> | questions only if the rule is open → one engineer proves and fixes → close with evidence |
| ⚡ Fast · full | <slug> | questions if a rule changes → patch PRD + stubs → design? → agents build + auto-verify → you verify |
| 🐛 Bugfix · full | <slug> | questions only if the rule changes → patch PRD + stubs → design? → agents build + auto-verify → you verify |
| ✏️ Tweak | — | copy / style only, no rule → one engineer edits, runs only the checks that touch it, syncs PRD quotes — no PRD, plan, QA, or walk |
| 🎼 Open | — | research / review / investigation / design explore — no PRD until Let's formalize |
```

The path marker (`· direct` or `· full`) is part of the Lane cell for Fast and Bugfix. Print the one row that applies. Feature, Tweak and Open have no path marker. Render `direct`, `full` and the What-happens sentence in the chat language.

When the engineer or the conductor moves work from the direct path to the full path, print this one-row Escalation line right after the Lane row it replaces, then continue on the full path:

```
| Escalation | Why |
|---|---|
| ⚡ Fast · direct → full | <reason> |
```

The English contract is `<lane> · direct → full — <reason>`. The first cell carries the lane emoji, the lane name and the arrow. The reason names the excluded surface that was found, in the chat language. Render `Escalation` and `Why` in the chat language.

## Files table

The file name is the link. There is no Path column.

```
| File | Change |
|---|---|
| [PRODUCT_DESCRIPTION.md](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md) | created v1.0 |
| [TEST_STUBS.md](/Users/you/project/.hele/features/checkout-discount/TEST_STUBS.md) | created v1.0 |
| [index.json](/Users/you/project/.hele/index.json) | feature registered |
```

## PRD delta (prdDelta)

Whenever a PRD is created or patched. Print a count line, then one group per PRD. The heading is a link. Unchanged rules stay out. Empty buckets are omitted. The level comes from `## Output`.

- `summary`: the count line, then one row per new, rewritten or retired rule: id, title, and the behavior change in one sentence, enough for an informed approval. No previous wording.
- `full`: the summary plus the previous and new wording of each changed rule.

```
1 new rule, 1 rewritten and 1 retired, in checkout-discount.

### [checkout-discount](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md)

New (1)

| Rule | What it says |
|---|---|
| BR-4 — Stacking cap | A second coupon cannot push the discount past 30% of the subtotal |

Rewritten (1)

| Rule | Was | Now |
|---|---|---|
| BR-1 — Points cover first | Points apply after the card when both are used. | Points apply before the card, never after. |

Retired (1)

| Rule | What changes |
|---|---|
| BR-3 — Manual coupon entry | Coupons are applied automatically, so there is no entry field |
```

At `summary`, the Rewritten table has the columns Rule · What changes (the behavior change in one sentence) in place of Was and Now. Retired always uses Rule · What changes.

- **New** — a rule or flow that was not in the previous version. A first version is only this bucket.
- **Rewritten** — an id that already existed. At `full`, Was is the sentence that was on disk and Now is the sentence that replaced it.
- **Retired** — an id that no longer applies. What changes says what stops happening.
- **Already the rule** — bugfix only, when the PRD text stays because the code broke a rule it already states. Columns: Rule · What it already says.

The rows follow the row limit (see Output). A rule that needs the human's approval is never cut: paginate or group it.

## Decided without a question

Whenever the approval report (PRD + stubs) or the Direct close is printed. It lists what Lisbon decided for the human instead of asking: engineering defaults, bookkeeping, a fact an existing rule states, an answer already given this session, and a late doubt that had a safe recommendation (marked decided by Lisbon). Always shown, at every level of `## Output`, and never cut by `maxTableRows`; it is not an informational list. One row per decision, with what was decided and why it was not a question. The human changes any row by saying so: on the full path at the approval stop (free text there is option 2, and the PRD and stubs are patched again), on the direct path at the close (option 4). When nothing was decided that way, one line says `none` in the chat language, never an empty table.

```
| Decided without a question | Why not a question |
|---|---|
| Retry a failed email send 3 times | Engineering default |
| Work lives in the existing `checkout-discount` PRD | Bookkeeping |
| Coupons expire at midnight store time | BR-3 already states it |
| Points apply before the card | Answered in this session |
| A second coupon is rejected with the standard message | Late doubt, safe recommendation, decided by Lisbon |
```

## Open these

```
| Open | Moved |
|---|---|
| [Project](/Users/you/project) | — |
| [PRD · checkout-discount](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md) | new BR-4 · rewritten BR-1 · retired BR-3 |

> 📌 **Was / now for each rule is in the delta above.**
```

QA stop:

```
| Open |
|---|
| [Project](/Users/you/project) |
| [QA report](/Users/you/project/.hele/features/checkout-discount/increments/001-checkout-discount/QA_REPORT.md) |
```

## Scenarios (testStubs)

The acceptance scenarios of this delivery. The level comes from `## Output`.

- `off`: no block. TEST_STUBS.md stays in Files and Open these.
- `summary`: one line with the feature's total number of scenarios, this delivery's new, revised and retired counts, and the link to TEST_STUBS.md.
- `full`: the scenario table for the scenarios this delivery changed, within the row limit, then the omission line pointing at TEST_STUBS.md.

```
| Stub | Kind | Rule | Given | When | Then |
|---|---|---|---|---|---|
| TS-001 | e2e-browser | BR-1 | member with 1,200 pts, $9.00 order | taps Pay with points, confirms | order completes, no card step, balance shows 300 pts |
```

## Coverage recommendations (coverage)

After deriving scenarios, show how they will be proven. This does not add an approval stop. The level comes from `## Output`.

- `off`: no block. The recommendations stay in TEST_STUBS.md, linked. Missing required coverage still appears, one line per item (see Output).
- `summary`: counts by level and by owner, plus one line per missing required coverage item with its id and cause.
- `full`: the table within the row limit, then the omission line, plus every missing required item regardless of the limit.

```
| Stubs | Level | Owner | Existing / proposed proof | Why this level |
|---|---|---|---|---|
| TS-001 | integration | [AGENT BE] Cho | proposed purchase API test | proves persistence and refusal against a real database |
```

E2E recommendations name the connection, unique failure and reuse decision. Multiple levels for a stub and multiple stubs for a journey are allowed.

## Init report

```
| Report | Scope |
|---|---|
| 🏗️ HELE INIT | <project name> |

| Field | Value |
|---|---|
| Folder | `.hele/` |
| Beads | ✅ bd <version> · db ready  /  ⚠️ not installed |
| Design system | <n> path(s) registered / none yet / none — Vega sits out |

| File | Change |
|---|---|
| [settings.json](/Users/you/project/.hele/settings.json) | created / kept |
| [index.json](/Users/you/project/.hele/index.json) | created / kept |
| [hele-session.md](/Users/you/project/.claude/rules/hele-session.md) | written |
```

When init was started by `/hele`, continue the original ask in the same turn. No skill menu.

When the human typed `/hele-init` alone:

```
| Actions | Your call |
|---|---|
| 1 | ▶ Continue → /hele "<your idea>" |
| 2 | ✏️ Tell me what you need |
```

## Dispatch announcement (dispatch)

Emit this, then the Dispatch closer from Language. Copy that one sentence. Do not paraphrase. Never "fio". **End the turn.** The level comes from `## Output`. The Model rule in `<rules>` applies to both.

- `brief`: one line per dispatch with the emoji, the agent tag, the model and the work. English contract:

```
🏗️ [AGENT] Lisbon · opus · plan increment 002-coupon-stacking
```

- `full`: the table, one row per dispatch.

```
| Dispatch | Agent | Model | Work |
|---|---|---|---|
| 🏗️ | [AGENT] Lisbon | opus | plan increment 002-coupon-stacking |
```

## Question pack (before any PRD write)

Investigate first. This round writes nothing. No PRD, no stubs, no Files table. End the turn.

**Investigate before a single question exists:**

1. The human's words, this session included.
2. Matching PRDs (`hele find`, then read those `PRODUCT_DESCRIPTION.md` files). That is talking, not exploring the product codebase.
3. A fact that needs product-code or live-UI truth: dispatch a specialist, end the turn, wait for the report. Do not ask the human what the code already does.
4. **A change to rules that already exist** (Fast, Bugfix, a correction of the increment in play, an update to an existing PRD): that investigation covers the code behind those rules and the existing proof, and it happens before the pack. Dispatch one background read-only specialist: the owning engineer, or Wylie's coverage scan when the open point is what the tests prove. Read-only means it edits nothing and runs no tests. It returns what the code does today for each changed rule, what proof exists, the engineering defaults it would pick, and each doubt with its safe recommendation or without one. Lisbon never reads the code in the main session. End the turn, and build one pack from its findings. The doubts that scenario derivation would later surface are in this pack, not in a second one. No dispatch when the PRD and the human's words already settle everything.
5. If those sources already decide every rule, skip this stop and write. Do not invent a question to satisfy the gate.

**Question filter.** A question is useful only when it is human-owned: a choice that changes user-visible behavior or the text of a rule, which neither the human's words in this session nor an existing rule settles. These are not questions, and Lisbon decides them:

- an engineering default (a retry count, a concurrency limit, guarding against duplicates);
- bookkeeping: which increment holds the work, rule numbering, whether to create a new rule, document layout;
- a fact an existing rule already states (name that rule);
- a question the human already answered in this session, in chat before `/hele` too.

Each one is listed under **Decided without a question**, where the human can change it: at the approval stop on the full path, at the close on the direct path.

**Then one pack.** Every remaining human-owned question, in one table, each with a recommendation. Anticipate the edge cases of each recommendation and put them in this same pack — a follow-up that only exists because you recommended X belongs here, not next turn. Anti-duplicate (update `<slug>` vs new) is a row in this pack when matches exist, not a separate turn. Questions need an answer, so the pack is never cut by the row limit: a pack larger than the limit is paginated or grouped, never cut (see Output).

Print, in this order: Agent/Needs, the question table, then the three Options. Headers and cells are in the chat language. A recommendation is the default she would ship, not a rule already in a file.

```
| Agent | Needs |
|---|---|
| [AGENT] Lisbon | 4 answers |

| # | Question | Recommendation |
|---|---|---|
| 1 | Update appointment-sheet, or a new feature? | Update appointment-sheet — the control already lives there |
| 2 | What does monthly mean for a Tuesday 5:45 PM event? | Same weekday position (1st Tuesday), like Google Calendar |
| 3 | Fifth Tuesday in a month that only has four? | Use the last Tuesday of that month |
| 4 | Already-created future occurrences when frequency changes? | From the edited event onward; past stays intact |

| Actions | Your call |
|---|---|
| 1 | ✅ Accept all recommendations → write the PRD |
| 2 | ✏️ Answer one by one |
| 3 | 💬 I'll reply in my own words |
```

**On `1`:** apply every recommendation. Run the write phase now.

**On `2`:** AskUserQuestion over the same pack (max 4 per call — widget cap). Do not add new topics. When the last answer is in, write.

**On `3` or free text at this stop:** wait. The next message is the open answer. Free text here is option 3, not option 2. If the reply still leaves a useful question, a second pack of only the remainder. If it answers everything, write.

**Late doubts.** A doubt found after the pack (while writing, deriving scenarios or building) that has a safe recommendation is applied and marked as decided by Lisbon in the approval report, or in the direct close, where the human can change it. It does not become a new stop. Only a doubt with no safe recommendation becomes a new, smaller pack. Do not drip follow-ups that belonged in the first pack.

## Options table

Compact wording is allowed; every choice stays, with its meaning. Option 1 names what runs next, in words. Typing `1` approves and starts that work in the same turn. Free text counts as option 2, except at the Question pack, where free text is option 3.

The EXECUTION_PLAN is not a sign-off. After the PRD (and design, when that stop happened), the agents plan, build, and run QA. The QA report is the next Options, unless a draft DB_CHANGES stops first.

```
| Actions | Your call |
|---|---|
| 1 | ✅ Approve → <next phase in words> |
| 2 | ✏️ Tell me what you need |
| 3 | <context-specific option> |
```

### Close of an open lane

```
| Actions | Your call |
|---|---|
| 1 | ✅ Work done |
| 2 | 📝 Let's formalize — turn this into a PRD, stubs, and an increment |
| 3 | ✏️ Tell me what you need / keep going |
```

### Verify close (after all flows)

Print this shape in the chat language. The Options table is the menu. Do not add a heading line `VERIFY RUN … all-verified`. Do not add a table of `Work done` / `iterate` / `draft PR`. Do not add a line `Options: 1 Work done 2 iterate 3 draft PR`.

```
| Report | Scope |
|---|---|
| 🧪 VERIFY RUN | <feature> · increment <NNN> |

| Verified | Issues | Skipped |
|---|---|---|
| 2 | 0 | 0 |

| File | Change |
|---|---|
| [VERIFY.md](/Users/you/project/.hele/features/checkout-discount/increments/001-checkout-discount/VERIFY.md) | done |

| Actions | Your call |
|---|---|
| 1 | 🚀 Work done — close and open a ready PR |
| 2 | 📝 Work done — close and open a draft PR |
| 3 | ✅ Work done — close, no PR |
| 4 | ✏️ Fix something — tell me what's wrong, or what to iterate |
```

A ready PR is ready for review. A draft PR is a draft. Free text that describes a fix is option 4, not option 2. If they only pick `4`, ask what is wrong before writing anything. The option does not name where the fix goes: `/hele`'s adjust phase decides once it knows what is wrong: direct when it fits, back to the PRD when it does not.

**Issues still open** — same report frame, then this menu. Do not start a fix unless they pick `1`.

```
| Actions | Your call |
|---|---|
| 1 | ✏️ Fix something — start the fix for what I marked |
| 2 | ✏️ Tell me what you need |
```

**On `1`:** do the work named in that row in this same turn. Mark a PRD, design spec, or DB_CHANGES approved only when the human picks `1` on that document. The execution plan is set `ready` without waiting for a `1`.

**On `2` / free text of a document stop:** stay here. Do not silently advance. At the Question pack, free text is option 3.

**Verify close option 4, Issues still open option 1, or a fix described on the flow in front of them:** the adjust phase of `/hele` decides where the fix goes (BR-13). A correction that fits the direct path is delivered there: the touched flow returns to pending and the human walks it again. Only a larger correction goes back to the PRD on this increment, and the flow runs again. Do not walk a flow they already marked pass, unless this fix changed it. Options 1 and 2 of the Verify close close first, then open the PR. Option 3 closes and stops.

## Manual verify — one flow

This is the changed human experience, in short grouped flows. State whether each walk was executed or prepared, not executed; unit/API proof does not imply a UI walk. Backend-only work may go to Verify close with an explanation that no human flow applies. Take the facts from `QA_REPORT.md` and write the cells in the chat language. Keep every step as its own row: every step row is shown under every setting. Do not paste the English sentences when chat is not English. Do not collapse the steps into a paragraph. One flow, then the Options, then wait. Skip a flow the human already marked pass on this increment, unless the latest rewind changed that flow. Name those ids in one line, then show the first flow that is still open.

```
| Report | Scope |
|---|---|
| 👀 VERIFY | <feature> · TS-001 · Pay with points · BR-1 · Points cover the order |

| Open | |
|---|---|
| URL | http://localhost:3000/checkout |
| Start | `npm run dev` |
| Land | Open the app, click Cart, then Pay |

| Data | Value |
|---|---|
| Login | member@example.com |
| Seed | member with 1,200 points |
| Input | order total $9.00 |

| Step | Do this | You should see |
|---|---|---|
| 1 | Tap Pay with points | the confirmation dialog |
| 2 | Confirm | the order completes and the balance shows 300 points |

| Proof | |
|---|---|
| Pass looked like | [TS-001.png](/Users/you/project/.hele/features/checkout-discount/increments/001-checkout-discount/screenshots/TS-001.png) |

| Actions | Your call |
|---|---|
| 1 | ✅ Pass — mark verified |
| 2 | ❌ Issue — tell me what's wrong |
| 3 | ⏭️ Skip this flow |
```

The Proof table is optional: when a useful screenshot exists, show its image and link. Do not create screenshots just to fill it. If Open, Data, or Steps would be empty, the QA report is incomplete: fill it before walking the human. Do not invent a shorter script.

## Test results (qaResults)

The QA stop. The level comes from `## Output`. Every level links [QA_REPORT.md](/Users/you/project/.hele/features/checkout-discount/increments/001-checkout-discount/QA_REPORT.md). Failures, open coverage gaps, blockers and pending decisions are issues: one line each with id and cause at every level, never limited by the row limit (see Output). Test-only gaps Wylie closed in the run are listed too, one line each (`N gaps closed`: stub, test, result), never hidden, and they add no Option.

- `summary`: the overall result and counts, then one line per failure, gap, blocker and pending decision (id and cause).
- `issues`: passes as counts; the issues above in detail.
- `full`: every result. Passing rows follow the row limit and end with the omission line; issues are never limited.

Stub and Rule cells carry the title. Evidence names the test level and links the test/result. Passing requires current execution evidence, including valid build results reused by QA. Missing proof is pending/blocked, never green.

```
| Stub | Rule | Result | Level | Evidence |
|---|---|---|---|---|
| TS-001 · Pay with points | BR-1 · Points cover the order | ✅ | integration | [payment.test.ts](/Users/you/project/tests/payment.test.ts) · current build result |
| TS-008 · Factory projects listed | BR-9 · Desktop lists factory projects | ⏳ coverage gap | component | needs product code: the empty state is not rendered |
| TS-012 · Discount capped | BR-4 · Cap at 50% | ✅ gap closed | integration | [discount.test.ts](/Users/you/project/tests/discount.test.ts) · 2 assertions added, file run: pass |
```

Add selected existing regressions (with feature-qualified IDs), reused versus fresh runs, E2E additions/changes, CI execution scope, and measured or unknown timing impact. Zero E2E and zero screenshots are valid when all required behavior has sufficient evidence.

## QA report — your call

Every ready report ends with this table. End the turn. Do not open the first manual-verify flow until they pick `1`. On `2`, if they already said what to fix, hand it to the adjust phase of `/hele`: direct when it fits, back to the PRD when it does not. If they only picked `2`, ask what they saw.

```
| Actions | Your call |
|---|---|
| 1 | ✅ Continue to manual verify |
| 2 | ✏️ Fix something I saw in the QA report |
```

A red run adds rows under those two: approve fixes for failures that need product code, and decide the contract-questions first. A test-only gap closed in the run adds no row. A blocked stub is named above the table. The two rows stay.

## Shots (screenshots)

Optional. Omit this section when no screenshot helps explain a visible change or failure. The limit is a ceiling, not a target. The value comes from `## Output`; it is presentation only and independent of `qa.maxScreenshots`, which still decides which captures are taken and kept.

- `off`: no capture in chat.
- `links`: a link per capture.
- `inline`: the capture embedded in the message, with its link.

```
| Stub | Kept | Screenshot |
|---|---|---|
| before / after | in the increment | [before.png](/Users/you/project/.hele/features/<slug>/increments/001-<slug>/screenshots/before.png) |
| TS-009 | chat only | [TS-009.png](/Users/you/project/.hele/tmp/captures/<slug>/001-<slug>/TS-009.png) |
```

## Unexplained failure (direct path or build)

A check the change reaches fails and the owner cannot explain it. The delivery stops here before anyone else is called. Print this shape, in the chat language, and end the turn.

```
| Report | Scope |
|---|---|
| 🛑 UNEXPLAINED FAILURE | <feature or slug> · <lane> · direct |

| Field | Value |
|---|---|
| Check | `<check name>` |
| Error | `<one-line error excerpt>` |
| Reaches | [<changed file>](/Users/you/project/<changed file>) |

| Actions | Your call |
|---|---|
| 1 | ▶ Continue — record it as pre-existing — <estimate or unknown> |
| 2 | 🔍 Compare against the previous revision for this one check — <estimate or unknown> |
```

- Exactly two rows. Each row ends with an estimated time for that choice, or `unknown` when there is no basis for an estimate. Never invent a number.
- This is the documented exception to "option `2` is tell me what you need", like the Question pack. Row 2 is the comparison.
- Nobody else is called before the human answers: no engineer, no Wylie, no second check. Free text stays on this stop and is not a third choice; answer it, then show the same two rows again.
- `1`: record the failure as pre-existing, with its name and the error excerpt, and go on to the close. When the human chose `2`, and only then, dispatch Wylie to compare that one check against the previous revision; the scope is closed to that check.
- On the build path the Scope cell says `build` where the direct path says `direct`. The stop is the same.

## Direct close

The close of a delivery on the direct path. One engineer proved and fixed the change, so there is no QA report and no plan. Print this shape in the chat language. Every row is one item. The Decided without a question row is `none` when nothing was decided that way; otherwise it lists each decision in one line, with why it was not a question. The Rule delta row is `unchanged` when no rule changed; when a rule changed, replace that cell with the PRD delta block (prdDelta) above (New / Rewritten / Already the rule / Retired). Files lists the changed files; PRODUCT_DESCRIPTION.md and TEST_STUBS.md only when this delivery patched them.

```
| Report | Scope |
|---|---|
| ✅ DIRECT CLOSE | <lane> · direct · <slug> |

| Field | Value |
|---|---|
| Changed | <what changed, one line> |
| Proof | `<test path>` — failing → passing |
| Related checks | <checks that ran and their result> |
| Not run | <what was deliberately not run, and why> |
| Pre-existing failures | `<check>` — `<error excerpt>` / none |
| Decided without a question | <decision — why not a question> / none |
| Rule delta | unchanged |

| File | Change |
|---|---|
| [<changed file>](/Users/you/project/<changed file>) | changed |
| [PRODUCT_DESCRIPTION.md](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md) | patched v1.0.1 |
| [TEST_STUBS.md](/Users/you/project/.hele/features/checkout-discount/TEST_STUBS.md) | patched v1.0.1 |

| Actions | Your call |
|---|---|
| 1 | 🚀 Close and open a ready PR |
| 2 | 📝 Close and open a draft PR |
| 3 | ✅ Close, no PR |
| 4 | ✏️ More to change — tell me what |
```

For a new bug or addition, this is the Options table. A ready PR is ready for review. A draft PR is a draft. Free text that describes another change is option 4; if they only pick `4`, ask what to change before writing anything.

**Correction of the active increment.** The change corrected a flow of the increment already in play, so the close does not offer PR choices (the increment closes at its own verify). The Scope cell says `adjust · direct · <slug>`, the Files table adds the VERIFY.md row with the touched flow set back to pending, and the Options table is these two rows:

```
| Actions | Your call |
|---|---|
| 1 | 👀 Walk the touched flow now |
| 2 | ✏️ Tell me what you need |
```

`1` opens the one touched flow in the Manual verify shape and nothing else; flows already marked pass are not walked again.

## Open-lane relay

```
| Report | Scope |
|---|---|
| 🎼 OPEN | <one-line ask> |

| Field | Value |
|---|---|
| What happened | <short relay> |
| Specialist | [AGENT …] <name> |

| Actions | Your call |
|---|---|
| 1 | ✅ Work done |
| 2 | 📝 Let's formalize — PRD + stubs + increment |
| 3 | ✏️ Tell me what you need / keep going |
```

## E2E audit (chat)

The conversation shows the diagnosis and the leading recommendations. The full inventory and the rationale stay in E2E_AUDIT.md. Print, in this order: Report frame, the diagnosis in a few lines, the leading recommendations table within the row limit (one recommendation per row), the omission line pointing at [E2E_AUDIT.md](/Users/you/project/.hele/features/checkout-discount/E2E_AUDIT.md), and one sentence that only the audit report was written: no test deleted, no CI changed.

```
| Report | Scope |
|---|---|
| 🧭 E2E AUDIT | <project or feature> · <n> tests · <suite time> |

<diagnosis, a few lines>

| # | Recommendation | Tests | Why |
|---|---|---|---|
| 1 | Consolidate | checkout-a, checkout-b | same journey, same failure |

<shown> of <total> shown · <omitted> more in [E2E_AUDIT.md](/Users/you/project/.hele/features/checkout-discount/E2E_AUDIT.md) or ask "show all recommendations"
```

</canonical-blocks>
