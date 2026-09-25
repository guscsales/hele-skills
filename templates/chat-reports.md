# Chat Report Visual Language

Every hele skill reports in chat using this shared visual language. The human is a visual person — reports must be scannable at a glance. Content stays king: formatting makes it readable, never replaces substance.

Read this file before the first report of a `/hele-yolo` session. `/hele-yolo` is the only command the human types for product work; every stop below ends in numbered options.

## Per-stop checklist

| Stop | Must print, in this order |
|---|---|
| Lane | Lane table (one row) · then continue into that lane |
| Init | Report frame · Field/Value · Files (full PWD) · continue the ask already in flight |
| PRD + stubs | Report frame · Field/Value · PRD delta · Stubs in full · Files (full PWD) · Options |
| Design / Plan / Build | Report frame · Field/Value · Files (full PWD) · Options |
| Dispatch | Dispatch table · one line "I'm here" · end the turn |
| QA | Report frame · Test results with screenshots · Files (full PWD) · Options |
| Verify — each flow | Report frame · Setup · steps from QA_REPORT · screenshot path · Options |
| Verify — close | Report frame · Flow/Verdict · Files (full PWD) · Options (Work done / iterate / draft PR) |
| Open lane | Report frame · relay · Files if any (full PWD) · Options (Work done / Let's formalize / keep going) |
| Findings | Silent append to findings.json; promote durable lessons to LEARNINGS.md |

<rules>
- **NEVER wrap a report in a code fence.** Reports are emitted as normal chat text — markdown prose plus markdown tables. The ``` fences in THIS file and in persona `<communication>` blocks only delimit the shape; copying them into chat makes reports unreadable. Code fences in chat are reserved for actual code, commands, and file contents.
- **Skills must not paste a fenced copy of the report the agent should emit.** Point to the persona signature block and describe the shape in prose.
- **Tables, never lines.** Every structured section is a markdown table with a header row, a separator, and data rows. Conversational prose around the tables is fine.
- **Box-drawing is banned in chat.** Never emit `─`, `═`, `━`, `│`, `╭`, `╰`, `╮`, `╯`, or any other box-drawing / rule characters to frame a report.
- One emoji per section header cell — never per sentence.
- **One item per table row** for lists (issues, failures, files, decisions, options). Never concatenate two `❌` / `✅` / `⏭️` items into the same cell, and never smash `#1 · #2 · #3` onto one line.
- Agent tags are formal identifiers: `[AGENT PM] Hightower`. In prose, use the spoken form: "Agent Hightower".
- **Every path is the whole PWD.** Screenshots, PRDs, stubs, plans, QA reports, verify files, findings, and any other file the agent writes or points at use the absolute path (`pwd` + the file), in every chat table. A repo-relative link is not enough. One row per file. Example: `/Users/you/project/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md`.
- **Every interactive stop ends with the Options table** (below). Never a sentence that says what to type next. Never one line that crams `1 · 2 · 3` together. One option per row. Option `1` is Approve (or Work done when the work can close) and starts that work in the same turn. Option `2` is Tell me what you need (or Let's formalize when the close pair is the point of the stop). Free text means "tell me what you need" and stays in the current phase.
- **Open channel.** The main session is the human's line. Doing work (review, suite, artifacts, codebase reads) is a background sub-agent — Lisbon and Hightower included. After a Dispatch table, **end the turn**. Never wait, never explore "while you wait". "Waiting for subagent" in the main chat is a bug. If the human talks while a worker runs, answer them.
- **Models from settings.** Every Dispatch row has a Model cell. Resolve `settings.agents.models[<key>]` for THIS runtime (`cursor` in Cursor, `claude-code` in Claude Code). A plain string applies to every runtime. `inherit` or missing → omit the Task model field and write `inherit` in the cell. Never pass the session model to a worker. Never invent a slug. The human named a different model this turn → that worker only; the cell is that override. Do not tell the human to switch the session model picker — the main chat stays on whatever they already selected; that is the open channel, not a defect.
- File artifacts are exempt: markdown docs stay clean, no box-drawing frames or emoji inside `.hele/` files.
- Chat language follows the human (pt-BR in, pt-BR out). Artifacts are always English.
- **`.hele/` is a placeholder, not a hardcoded path.** The harness folder is `.hele/` at the project root by default, but the human may have named it differently at init: a `.helerc` file at the root (`{"dirName": "<name>"}`) points to the real folder. Every skill resolves the dir first (`.hele` → else `.helerc`) and uses the resolved name in paths.
- Say **the human**, never "CEO", in every report and skill this harness edits.
- **Suggest `/clear` only when a phase closed without auto-chaining** (Work done, status, or the human explicitly paused). Approval gates auto-chain: option `1` starts the next phase in the same turn, so do not suggest `/clear` there. `/hele-yolo` is sticky: do not tell the human to re-type `/hele-yolo` for the next prompt.
</rules>

<canonical-blocks>

## Lane announcement (first reply of /hele-yolo — print the one row that applies)

```
| Lane | PRD | Path |
|---|---|---|
| 🆕 Feature | <slug> or new | PRD + stubs → design? → plan → build → QA → verify |
| ⚡ Fast | <slug> | patch PRD + stubs → plan → build → QA → verify |
| 🐛 Bugfix | <slug> | patch PRD + stubs → plan → build → QA → verify |
| 🎼 Open | — | research / review / investigation / design explore — no PRD until Let's formalize |
```

## Report frame (any skill's final output)

Prose summary first (the human's language), then tables. Never a box around the report.

```
| Report | Scope |
|---|---|
| <emoji> <REPORT NAME> | <feature/project> |

| Field | Value |
|---|---|
| <label> | <value> |

| File | Path | Change |
|---|---|---|
| PRODUCT_DESCRIPTION.md | /absolute/pwd/.hele/features/<slug>/PRODUCT_DESCRIPTION.md | created v1.0 |

| Actions | Your call |
|---|---|
| 1 | ✅ Approve → <what starts next, in words> |
| 2 | ✏️ Tell me what you need |
| 3 | <context-specific option> |
```

## Files table (full PWD — every report that wrote to disk)

```
| File | Path | Change |
|---|---|---|
| PRODUCT_DESCRIPTION.md | /absolute/pwd/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md | created v1.0 |
| TEST_STUBS.md | /absolute/pwd/.hele/features/checkout-discount/TEST_STUBS.md | created v1.0 |
| index.json | /absolute/pwd/.hele/index.json | updated (feature registered) |
| state.json | /absolute/pwd/.hele/state.json | updated (activeFeature) |
```

## PRD delta (mandatory whenever a PRD is created or patched)

Group by PRD. Absolute path on the group. Two buckets only — unchanged rules stay out.

```
| PRD | Path |
|---|---|
| checkout-discount | /absolute/pwd/.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md |

| Kind | Item | What landed |
|---|---|---|
| New | BR-4 — Stacking cap | A second coupon cannot push the discount past 30% of the subtotal |
| Added | BR-1 — Points cover first | Clarified that points apply before card, never after |
| New | Flow — Apply coupon | Happy-path mermaid for the coupon step |
```

- **New** — a rule, flow, or scope item that did not exist in the previous version. A brand-new PRD is entirely New.
- **Added** — material attached to a rule, flow, or section that already existed.
- A patch that touches two features prints two PRD groups.

## Stubs in full (PRD + stubs stop — every stub, nothing summarized)

```
| Stub | Kind | Rule | Given | When | Then |
|---|---|---|---|---|---|
| TS-001 | e2e | BR-1 | member with 1,200 pts, $9.00 order | taps Pay with points, confirms | order completes, no card step, balance shows 300 pts |
| TS-002 | e2e | BR-1 | member with 200 pts, $9.00 order | taps Pay with points, then taps the card | receipt shows $2.00 points + $7.00 card |
```

## Status board (used by /hele-status)

```
| Report | Scope |
|---|---|
| 📊 HELE STATUS | <project> |

| Feature | Status |
|---|---|
| checkout-discount | building |
| user-onboarding | idea |

| Feature | Doc | Version | Health |
|---|---|---|---|
| checkout-discount | 📕 PRODUCT_DESCRIPTION | v1.4 | ✅ |
| checkout-discount | 📘 TEST_STUBS | v1.2 | ✅ based on PRD v1.4 |
| checkout-discount | 📗 EXECUTION_PLAN | v1.0 | ⚠️ based on PRD v1.3 — STALE |
| checkout-discount | 🎨 DESIGN_SPEC | v1.1 | ✅ based on PRD v1.4 |
| checkout-discount | 🧿 beads | 3 done · 2 in progress · 1 blocked | increment 002-coupon-stacking |

| Field | Value |
|---|---|
| Learnings | <n> · newest L-nnn |
| Findings | <n> in findings.json |

| Actions | Your call |
|---|---|
| 1 | ▶ Continue — /hele-yolo with the next ask |
| 2 | ✏️ Tell me what you need |
```

## Init report (used by /hele-init — including when yolo auto-runs it)

```
| Report | Scope |
|---|---|
| 🏗️ HELE INIT | <project name> |

| Field | Value |
|---|---|
| Folder | `.hele/` created / already existed |
| Beads | ✅ bd <version> · db ready  /  ⚠️ not installed → <install hint> |
| Design system | <n> path(s) registered / none yet / none — Vega sits out |

| File | Path | Change |
|---|---|---|
| settings.json | /absolute/pwd/.hele/settings.json | created / kept |
| index.json | /absolute/pwd/.hele/index.json | created (0 features) / kept |
| state.json | /absolute/pwd/.hele/state.json | created / kept |
| LEARNINGS.md | /absolute/pwd/.hele/LEARNINGS.md | created / kept |
| findings.json | /absolute/pwd/.hele/findings.json | created / kept |
| hele-session.md | /absolute/pwd/.claude/rules/hele-session.md | written (sticky yolo + open channel) |
```

When init was started by `/hele-yolo`, do **not** offer a menu of skills. Continue the original ask (lane detection) in the same turn after the report.

When the human typed `/hele-init` alone:

```
| Actions | Your call |
|---|---|
| 1 | ▶ Continue → /hele-yolo "<your idea>" |
| 2 | ✏️ Tell me what you need |
```

## Dispatch announcement (when spawning an agent)

Emit this, say you are here, **end the turn**. Do not wait for the agent.

```
| Dispatch | Agent | Model | Work |
|---|---|---|---|
| 🕵️ | [AGENT STAFF] Lisbon | grok | plan increment 002-coupon-stacking |
```

## Question block (planning phases — before AskUserQuestion calls)

```
| Agent | Needs |
|---|---|
| [AGENT PM] Hightower | 3 answers |
```

## Options table (MANDATORY at the end of every interactive phase)

Whenever a skill produces an artifact the human must sign off on, or a phase that must not auto-advance, it ends the report with numbered options — one option per row. **Option 1 is the forward move:** its cell names what will run next in words (never "type /hele-…"), and typing `1` both approves AND starts that work in the same turn. Free text counts as option 2.

**Never compress this into one line.** Forbidden: `🗳️ YOUR CALL — 1. ✅ Approve · 2. ✏️ Adjust · 3. …`.

### Mid-pipeline (PRD, design, plan, stubs already covered, build, QA red)

```
| Actions | Your call |
|---|---|
| 1 | ✅ Approve → <next phase in words, e.g. plan this increment> |
| 2 | ✏️ Tell me what you need |
| 3 | <context-specific option> |
```

### Close / open-lane stop

```
| Actions | Your call |
|---|---|
| 1 | ✅ Work done — stop here |
| 2 | 📝 Let's formalize — turn this into a PRD, stubs, and an increment |
| 3 | ✏️ Tell me what you need / keep going |
```

### Verify close (after all flows verified)

```
| Actions | Your call |
|---|---|
| 1 | ✅ Work done — close the increment |
| 2 | ✏️ Fold a late find back in (iterate on this increment) |
| 3 | 🚀 Open a draft PR |
| 4 | 📝 Let's formalize — only when a PRD is still missing |
```

The human replies with a number (or free text). Never end an interactive phase without offering these options.

**On `1` (Approve / Work done):** in THIS SAME TURN, before stopping:
1. Mark the artifact approved (frontmatter + index as the skill specifies) when that applies. Never mark approved without this explicit `1`.
2. Immediately do the work named in option 1 — read `${CLAUDE_PLUGIN_ROOT}/skills/<next>/SKILL.md` and execute that skill, or close the increment. Do not wait for a second prompt. Do not ask the human to type a slash command.

**On `2` / `3` / free text:** stay in this skill (or run Let's formalize / iterate / draft PR when that is what the chosen row says); do not silently advance.

## Test results (QA stop — screenshots shown)

```
| Stub | Rule | Result | Screenshot |
|---|---|---|---|
| TS-001 | BR-1 | ✅ | /absolute/pwd/.hele/features/<slug>/increments/001-<slug>/screenshots/TS-001.png |
| TS-002 | BR-2 | ❌ product-bug | /absolute/pwd/.hele/features/<slug>/increments/001-<slug>/screenshots/TS-002.png |
```

Show the screenshots inline (Read the PNG) right after this table. Then the Files table with the QA_REPORT absolute path.

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
