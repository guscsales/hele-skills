# Chat Report Visual Language

Every hele skill reports in chat using this shared visual language. Reports must be scannable. Content stays king.

## Language

Read `.hele/settings.json` → `language`. A missing key uses `${CLAUDE_PLUGIN_ROOT}/core/default-config.json`.

- `language.chat` is `auto` unless the project set a tag (`pt-BR`, `en`). `auto` is the language of the human's messages in this session. One session, one chat language.
- `language.artifacts` is the language of every file hele writes (PRD, plan, stubs, QA report, verify, design spec). Default `en` is English (en-US). `en-US` is the same language.

The fenced tables in this file are the shape: column count, order, emoji, one item per row. The English words inside them are the contract names. They are not text to paste.

When chat is not English, write every word the human reads in the chat language: column headers, row labels, section labels (`New`, `Rewritten`, `Already the rule`), option sentences, and every cell that is a sentence. Leave file names, slugs, ids (`BR-4`, `TS-001`), versions, commands, code, model names, and agent tags (`[AGENT] Lisbon`) as written.

A fact that lives in an artifact is restated in the chat language. The file on disk stays in `language.artifacts`. Do not paste the artifact sentence into the table. Do not change the fact. Do not collapse a table into a paragraph.

The human writes in Portuguese. `| Field | Value |` is the wrong table. `| Campo | Valor |` is that table. `| Actions | Your call |` is the wrong menu. `| Ações | Sua escolha |` is that menu. `New (7)` is the wrong bucket. `Novas (7)` is that bucket. `not needed` is the wrong cell. `não entra` is that cell. The same rule applies to any other chat language.

The Dispatch closer is one copied sentence. English: `Thread is opened, you can talk`. Portuguese: `A thread continua aberta, pode falar.` Any other chat language: one sentence with that meaning. Never "fio".

Read this file before the first report of a `/hele` session. `/hele` is the only command the human types for product work. Real stops end in numbered options. The execution plan and the build do not stop. After the PRD is approved (and design, when that stop happened), those run on their own. The QA report is the next stop: continue to the manual walk, or fix what you saw.

## Per-stop checklist

| Stop | Must print, in this order |
|---|---|
| Lane | Lane table (one row) · then continue into that lane |
| Init | Report frame · Field/Value · Files (links) · continue the ask already in flight |
| Questions | Question pack (investigate first) · Options 1/2/3 · no files · end the turn |
| PRD + stubs | Report frame · Field/Value · PRD delta · Stubs in full · Files (links) · Open these · Options |
| Design | Report frame · Field/Value · Files (links) · Options |
| Plan | Staff note · Files (links) · no Options — start build (draft DB_CHANGES → Hightower's Options instead) |
| Build green | short report · no Options — start auto-verify |
| Dispatch | Dispatch table · one canned line (`Thread is opened, you can talk` / `A thread continua aberta, pode falar.`) · end the turn |
| QA report | Report frame · Test results · Shots · Files (links) · Open these · Options (continue to manual verify / fix what I saw) |
| Verify — each flow | Open table · Data table · Steps table · screenshot link · Options |
| Verify — close | Report frame · counts · Files (links) · the Options table below, and nothing after it |
| Open lane | Report frame · relay · Files if any (links) · Options (Work done / Let's formalize / keep going) |

<rules>
- **NEVER wrap a report in a code fence.** Reports are chat text: prose plus markdown tables. The fences in this file only delimit the shape. Code fences in chat are for actual code, commands, and file contents.
- **Tables, never lines.** Never emit box-drawing characters to frame a report.
- One emoji per section header cell.
- **One item per table row.**
- Agent tags are formal identifiers: `[AGENT] Lisbon`, `[AGENT DBA] Hightower`. In prose: "Agent Lisbon", "Agent Hightower".
- **Every file is a markdown link.** The visible text is the file name. The target is the absolute path, on one line, with no space and no line break inside the URL. Do not put the raw path in a Path column. A path that wraps in a cell is not a link. One file per row.

  `[PRODUCT_DESCRIPTION.md](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md)`

- **PRD and QA stops print an Open these table immediately before Options.** Each row is a link. A patched PRD gets a **Moved** cell with ids only. The English contract is `new BR-4 · rewritten BR-1`; render `new` and `rewritten` in the chat language. A first version says the chat-language rendering of `first version`. Under the table, when a delta was printed above, one line in the chat language: was / now for each rule is in the delta above. The English contract is `> 📌 **Was / now for each rule is in the delta above.**`
- **Every interactive stop ends with the Options table, and that table is the only menu.** The two columns are the Actions column and the Your call column. Render those headers in the chat language. The first cell is the number. The second cell starts with one emoji, then the words. One option per row. Option `1` advances and starts that work in the same turn. Option `2` is tell me what you need, except where a block below names a different row 2 (the Question pack is that exception). Free text stays in the current phase. At the Question pack, free text is option 3. Nothing is printed after the table. Do not print a line `Options: 1 … 2 … 3 …`. Do not print a second table whose first column is the option name (`Work done`, `iterate`, `draft PR`, `Back to the PRD`). That shape is not a menu.
- **Open channel.** After a Dispatch table, end the turn. The one line is the Dispatch closer from Language. Never "fio". "Waiting for subagent" is a bug. If the human talks while a worker runs, answer them.
- **Models from settings.** Every Dispatch row has a Model cell. Resolve `settings.agents.models[<key>]` for this runtime (`cursor` or `claude-code`). A plain string applies to every runtime. `inherit` or missing → omit the Task model field and write `inherit` in the cell. Never pass the session model to a worker. Never invent a slug.
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
| ⚡ Fast | <slug> | questions if a rule changes → patch PRD + stubs → design? → agents build + auto-verify → you verify |
| 🐛 Bugfix | <slug> | questions only if the rule changes → patch PRD + stubs → design? → agents build + auto-verify → you verify |
| 🎼 Open | — | research / review / investigation / design explore — no PRD until Let's formalize |
```

## Files table

The file name is the link. There is no Path column.

```
| File | Change |
|---|---|
| [PRODUCT_DESCRIPTION.md](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md) | created v1.0 |
| [TEST_STUBS.md](/Users/you/project/.hele/features/checkout-discount/TEST_STUBS.md) | created v1.0 |
| [index.json](/Users/you/project/.hele/index.json) | feature registered |
```

## PRD delta (whenever a PRD is created or patched)

Print a count line, then one group per PRD. The heading is a link. Unchanged rules stay out. Empty buckets are omitted.

```
1 new rule and 1 rewritten, in checkout-discount.

### [checkout-discount](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md)

New (1)

| Rule | What it says |
|---|---|
| BR-4 — Stacking cap | A second coupon cannot push the discount past 30% of the subtotal |

Rewritten (1)

| Rule | Was | Now |
|---|---|---|
| BR-1 — Points cover first | Points apply after the card when both are used. | Points apply before the card, never after. |
```

- **New** — a rule or flow that was not in the previous version. A first version is only this bucket.
- **Rewritten** — an id that already existed. Was is the sentence that was on disk. Now is the sentence that replaced it.
- **Already the rule** — bugfix only, when the PRD text stays because the code broke a rule it already states. Columns: Rule · What it already says.

## Open these

```
| Open | Moved |
|---|---|
| [Project](/Users/you/project) | — |
| [PRD · checkout-discount](/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md) | new BR-4 · rewritten BR-1 |

> 📌 **Was / now for each rule is in the delta above.**
```

QA stop:

```
| Open |
|---|
| [Project](/Users/you/project) |
| [QA report](/Users/you/project/.hele/features/checkout-discount/increments/001-checkout-discount/QA_REPORT.md) |
```

## Stubs in full

```
| Stub | Kind | Rule | Given | When | Then |
|---|---|---|---|---|---|
| TS-001 | e2e | BR-1 | member with 1,200 pts, $9.00 order | taps Pay with points, confirms | order completes, no card step, balance shows 300 pts |
```

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

## Dispatch announcement

Emit this, then the Dispatch closer from Language. Copy that one sentence. Do not paraphrase. Never "fio". **End the turn.**

```
| Dispatch | Agent | Model | Work |
|---|---|---|---|
| 🏗️ | [AGENT] Lisbon | opus | plan increment 002-coupon-stacking |
```

## Question pack (before any PRD write)

Investigate first. This round writes nothing. No PRD, no stubs, no Files table. End the turn.

**Investigate before a single question exists:**

1. The human's words.
2. Matching PRDs (`hele find`, then read those `PRODUCT_DESCRIPTION.md` files). That is talking, not exploring the product codebase.
3. A fact that needs product-code or live-UI truth: dispatch a specialist, end the turn, wait for the report. Do not ask the human what the code already does.
4. If those sources already decide every rule, skip this stop and write. Do not invent a question to satisfy the gate.

**Then one pack.** Every remaining useful question, in one table, each with a recommendation. Anticipate the edge cases of each recommendation and put them in this same pack — a follow-up that only exists because you recommended X belongs here, not next turn. Anti-duplicate (update `<slug>` vs new) is a row in this pack when matches exist, not a separate turn.

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

**Late questions are allowed.** A new doubt that could not have been in the first pack (the human added scope, a contradiction found while writing, a design or QA discovery) uses this same pack. Do not restart a drip interview. Do not drip follow-ups that belonged in the first pack.

## Options table

Option 1 names what runs next, in words. Typing `1` approves and starts that work in the same turn. Free text counts as option 2, except at the Question pack, where free text is option 3.

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
| 4 | ✏️ Back to the PRD — tell me what's wrong, or what to iterate |
```

A ready PR is ready for review. A draft PR is a draft. Free text that describes a fix is option 4, not option 2. If they only pick `4`, ask what is wrong before writing anything.

**Issues still open** — same report frame, then this menu. Do not rewind unless they pick `1`.

```
| Actions | Your call |
|---|---|
| 1 | ✏️ Back to the PRD — update it and run the flow again |
| 2 | ✏️ Tell me what you need |
```

**On `1`:** do the work named in that row in this same turn. Mark a PRD, design spec, or DB_CHANGES approved only when the human picks `1` on that document. The execution plan is set `ready` without waiting for a `1`.

**On `2` / free text of a document stop:** stay here. Do not silently advance. At the Question pack, free text is option 3.

**Verify close option 4, or a fix described on the flow in front of them:** rewind to the PRD on this increment and run the flow again. Do not walk a flow they already marked pass, unless this fix changed it. Options 1 and 2 close first, then open the PR. Option 3 closes and stops.

## Manual verify — one flow

This is the auto-verify, in tables a person can follow. Take the facts from `QA_REPORT.md` and write the cells in the chat language. Keep every step as its own row. Do not paste the English sentences when chat is not English. Do not collapse the steps into a paragraph. One flow, then the Options, then wait. Skip a flow the human already marked pass on this increment, unless the latest rewind changed that flow. Name those ids in one line, then show the first flow that is still open.

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

Show the screenshot image as well as the link. If Open, Data, or Steps would be empty, the QA report is incomplete: fill it before walking the human. Do not invent a shorter script.

## Test results (QA stop)

```
Stub and Rule cells carry the title. A bare `TS-008` or `BR-9` is wrong. The Screenshot cell is a link, or the chat-language rendering of `chat only` or `mapped test`.

| Stub | Rule | Result | Screenshot |
|---|---|---|---|
| TS-001 · Pay with points | BR-1 · Points cover the order | ✅ | [TS-001.png](/Users/you/project/.hele/features/checkout-discount/increments/001-checkout-discount/screenshots/TS-001.png) |
| TS-008 · Factory projects listed | BR-9 · Desktop lists factory projects | ✅ | mapped test |
| TS-009 · Empty cart stays | BR-4 · Empty cart copy | ✅ | chat only |
```

Show the kept PNGs inline right after this table.

## QA report — your call

Every ready report ends with this table. End the turn. Do not open the first manual-verify flow until they pick `1`. On `2`, if they already said what to fix, rewind to the PRD. If they only picked `2`, ask what they saw.

```
| Actions | Your call |
|---|---|
| 1 | ✅ Continue to manual verify |
| 2 | ✏️ Fix something I saw in the QA report |
```

A red run adds rows under those two: approve fixes for the failing tests, and decide the contract-questions first. A blocked stub is named above the table. The two rows stay.

## Shots

```
| Stub | Kept | Screenshot |
|---|---|---|
| before / after | in the increment | [before.png](/Users/you/project/.hele/features/<slug>/increments/001-<slug>/screenshots/before.png) |
| TS-009 | chat only | [TS-009.png](/Users/you/project/.hele/tmp/captures/<slug>/001-<slug>/TS-009.png) |
```

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

</canonical-blocks>
