# Chat Report Visual Language

Every hele skill reports in chat using this shared visual language. Reports must be scannable. Content stays king.

Read this file before the first report of a `/hele` session. `/hele` is the only command the human types for product work. Real stops end in numbered options. The execution plan and the build do not stop. After the PRD is approved (and design, when that stop happened), those run on their own. The QA report is the next stop: continue to the manual walk, or fix what you saw.

## Per-stop checklist

| Stop | Must print, in this order |
|---|---|
| Lane | Lane table (one row) · then continue into that lane |
| Init | Report frame · Field/Value · Files (links) · continue the ask already in flight |
| Questions | Question table · AskUserQuestion (max 4) · no files · end the turn |
| PRD + stubs | Report frame · Field/Value · PRD delta · Stubs in full · Files (links) · Open these · Options |
| Design | Report frame · Field/Value · Files (links) · Options |
| Plan | Staff note · Files (links) · no Options — start build (draft DB_CHANGES → Hightower's Options instead) |
| Build green | short report · no Options — start auto-verify |
| Dispatch | Dispatch table · one line that the thread stays open · end the turn |
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

- **PRD and QA stops print an Open these table immediately before Options.** Each row is a link. A patched PRD gets a **Moved** cell with ids only (`new BR-4 · rewritten BR-1`). A first version says `first version`. Under the table, when a delta was printed above: `> 📌 **Was / now for each rule is in the delta above.**`
- **Every interactive stop ends with the Options table, and that table is the only menu.** Columns are `Actions` and `Your call`. The first cell is the number. The second cell starts with one emoji, then the words. One option per row. Option `1` advances and starts that work in the same turn. Option `2` is tell me what you need, except where a block below names a different row 2. Free text stays in the current phase. Nothing is printed after the table. Do not print a line `Options: 1 … 2 … 3 …`. Do not print a second table whose first column is the option name (`Work done`, `iterate`, `draft PR`, `Back to the PRD`). That shape is not a menu.
- **Open channel.** After a Dispatch table, end the turn. The one line says the thread stays open while the agents work. "Waiting for subagent" is a bug. If the human talks while a worker runs, answer them.
- **Models from settings.** Every Dispatch row has a Model cell. Resolve `settings.agents.models[<key>]` for this runtime (`cursor` or `claude-code`). A plain string applies to every runtime. `inherit` or missing → omit the Task model field and write `inherit` in the cell. Never pass the session model to a worker. Never invent a slug.
- File artifacts are plain markdown. No emoji inside `.hele/` files.
- Chat language follows the human. Artifacts are English.
- The harness folder is always `.hele/` at the project root. Do not invent another name. Do not write `.helerc`.
- Say **the human**. Never "CEO".
- Do not write `state.json`, a feature status, `NOTES.md`, `LEARNINGS.md`, or `findings.json`.
- **Suggest `/clear` only when a phase closed without auto-chaining.** `/hele` is sticky: do not tell the human to re-type it.
</rules>

<canonical-blocks>

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

Emit this, say the thread stays open, **end the turn**.

```
| Dispatch | Agent | Model | Work |
|---|---|---|---|
| 🏗️ | [AGENT] Lisbon | opus | plan increment 002-coupon-stacking |
```

## Question block

This round writes nothing. No PRD, no stubs, no Files table. A recommendation is one of the options. End the turn.

```
| Agent | Needs |
|---|---|
| [AGENT] Lisbon | 3 answers |
```

## Options table

Option 1 names what runs next, in words. Typing `1` approves and starts that work in the same turn. Free text counts as option 2.

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

Copy this block. The Options table is the menu. Do not add a heading line `VERIFY RUN … all-verified`. Do not add a table of `Work done` / `iterate` / `draft PR`. Do not add a line `Options: 1 Work done 2 iterate 3 draft PR`.

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

**On `2` / free text of a document stop:** stay here. Do not silently advance.

**Verify close option 4, or a fix described on the flow in front of them:** rewind to the PRD on this increment and run the flow again. Do not walk a flow they already marked pass, unless this fix changed it. Options 1 and 2 close first, then open the PR. Option 3 closes and stops.

## Manual verify — one flow

This is the auto-verify, in tables a person can follow. Copy the cells from `QA_REPORT.md`. Do not paraphrase them into a paragraph. One flow, then the Options, then wait. Skip a flow the human already marked pass on this increment, unless the latest rewind changed that flow. Name those ids in one line, then show the first flow that is still open.

```
| Report | Scope |
|---|---|
| 👀 VERIFY | <feature> · <flow title> · TS-001 · BR-1 |

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
| Stub | Rule | Result | Screenshot |
|---|---|---|---|
| TS-001 | BR-1 | ✅ | [TS-001.png](/Users/you/project/.hele/features/checkout-discount/increments/001-checkout-discount/screenshots/TS-001.png) |
| TS-009 | BR-4 | ✅ | chat only |
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
