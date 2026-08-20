# Chat Report Visual Language

Every hele skill reports in chat using this shared visual language. The CEO is a visual person — reports must be scannable at a glance. Content stays king: formatting makes it readable, never replaces substance.

<rules>
- **NEVER wrap a report in a code fence.** Reports are emitted as normal chat text — markdown prose plus markdown tables. The ``` fences in THIS file and in persona `<communication>` blocks only delimit the shape; copying them into chat makes reports unreadable. Code fences in chat are reserved for actual code, commands, and file contents.
- **Skills must not paste a fenced copy of the report the agent should emit.** A skill that says "report as chat text" and then shows the whole block inside ``` is why agents wrap the output. Point to the persona signature block and describe the shape in prose (see `/hele-verify-work`).
- **Tables, never lines.** Every structured section is a markdown table with a header row, a separator, and data rows. Conversational prose around the tables is fine. This applies to EVERY skill, EVERY agent, EVERY final report, status board, files list, question block, approval block, dispatch, and engineer status.
- **Box-drawing is banned in chat.** Never emit `─`, `═`, `━`, `│`, `╭`, `╰`, `╮`, `╯`, or any other box-drawing / rule characters to frame a report. They wrap, glue labels onto the line, and look like garbage in Cursor. Previous "keep dividers blank" wording failed — the characters themselves are forbidden.
- One emoji per section header cell — never per sentence.
- **One item per table row** for lists (issues, failures, files, decisions, options). Never concatenate two `❌` / `✅` / `⏭️` items into the same cell, and never smash `#1 · #2 · #3` onto one line.
- Agent tags are formal identifiers: `[AGENT PM] Hightower`. In prose, use the spoken form: "Agent Hightower".
- **Every report that created or modified files includes a Files table** — one row per artifact, the path rendered as a clickable markdown link relative to the project root, annotated with what happened. The CEO must always know exactly where to go read.
- Reports that are **not** an approval gate end with a **Next table** — the CEO always knows the next action. Keep the whole command in that cell; never split `/hele-build` across rows.
- Approval gates end with the **Actions** table (below). Option 1 **is** the next command — do not also emit a Next or After approval table.
- **Suggest `/clear` only when a phase closed without auto-chaining** (FAST, RETRO, status, or the CEO explicitly paused). Approval and close gates auto-chain: option `1` starts the next skill in the same turn, so do not suggest `/clear` there. Never suggest /clear mid-phase, mid-interview, or while an approval/question is still pending — that context isn't on disk yet. FAST and ITERATE are sticky in the same conversation: do not tell the CEO to re-type `/hele-fast` or `/hele-iterate` for the next prompt.
- **Open channel.** The main session is the CEO's line. Doing work (review, suite, artifacts, codebase reads) is a background sub-agent — Lisbon and Hightower included. After a Dispatch table, stay available; never explore "while you wait".
- File artifacts are exempt: markdown docs stay clean, no box-drawing frames or emoji inside `.hele/` files.
- Chat language follows the CEO (pt-BR in, pt-BR out). Artifacts are always English.
- **`.hele/` is a placeholder, not a hardcoded path.** The harness folder is `.hele/` at the project root by default, but the CEO may have named it differently at init: a `.helerc` file at the root (`{"dirName": "<name>"}`) points to the real folder. Every skill resolves the dir first (`.hele` → else `.helerc`) and uses the resolved name in paths and links.
</rules>

<canonical-blocks>

## Report frame (any skill's final output)

Prose summary first (CEO's language), then tables. Never a box around the report.

```
| Report | Scope |
|---|---|
| <emoji> <REPORT NAME> | <feature/project> |

| Field | Value |
|---|---|
| <label> | <value> |

| File | Change |
|---|---|
| [path](relative/path) | <what happened> |

| Next | Command |
|---|---|
| ▶ | <exact next command or decision> |
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

| Next | Command |
|---|---|
| ▶ | /hele-plan — refresh stale plan for checkout-discount |
```

## Init report (used by /hele-init)

```
| Report | Scope |
|---|---|
| 🏗️ HELE INIT | <project name> |

| Field | Value |
|---|---|
| Folder | `.hele/` created / already existed |
| Beads | ✅ bd <version> · db ready  /  ⚠️ not installed → <install hint> |
| Design system | <n> path(s) registered / none |

| File | Change |
|---|---|
| [settings.json](.hele/settings.json) | created / kept |
| [index.json](.hele/index.json) | created (0 features) / kept (<n> features) |
| [state.json](.hele/state.json) | created / kept |
| [LEARNINGS.md](.hele/LEARNINGS.md) | created / kept (<n> learnings) |
| [hele-session.mdc](.cursor/rules/hele-session.mdc) | written (sticky lanes + open channel) |
| [hele-session.md](.claude/rules/hele-session.md) | written (sticky lanes + open channel) |

| Next | Command |
|---|---|
| ▶ | /hele-feature "<your idea>" — Agent Hightower takes it from there |
```

## Files table (inside any report that wrote to disk)

```
| File | Change |
|---|---|
| [PRODUCT_DESCRIPTION.md](.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md) | created v1.0 |
| [index.json](.hele/index.json) | updated (feature registered) |
| [state.json](.hele/state.json) | updated (activeFeature) |
```

## Dispatch announcement (when spawning an agent)

```
| Dispatch | Agent | Work |
|---|---|---|
| 🕵️ | [AGENT STAFF] Lisbon | plan increment 002-coupon-stacking |
```

## Question block (planning phases — before AskUserQuestion calls)

```
| Agent | Needs |
|---|---|
| [AGENT PM] Hightower | 3 answers |
```

## Approval block (MANDATORY at the end of every interactive phase)

Whenever a skill produces an artifact the CEO must sign off on (PRD, plan, design spec, stubs, DB changes), or a phase that must not auto-advance (verify-work all-verified close), it ends the report with numbered options — approval first, adjustments second, context-specific extras after. **Option 1 is the next phase:** its cell names the command that will run, and typing `1` both approves AND starts that work in the same turn. A separate After approval / Next table is forbidden here — it made CEOs type a second prompt. Verify finishing is not permission to start `/hele-retro` — wait for `1`.

**Never compress this into one line.** Forbidden: `🗳️ YOUR CALL — 1. ✅ Approve · 2. ✏️ Adjust · 3. …`. Options wrap and become unreadable. Always use the table below (one option per row):

```
| Actions | Your call |
|---|---|
| 1 | ✅ Approve → /hele-plan — Agent Lisbon plans the increment |
| 2 | ✏️ Adjust — tell me what to change |
| 3 | <context-specific option, e.g. "🔍 Show the full business rules again"> |
```

The CEO replies with a number (or free text). Never end an interactive phase without offering these options.

**On `1`:** in THIS SAME TURN, before stopping:
1. Mark the artifact approved (frontmatter + index as the skill specifies). Never mark approved without this explicit `1`.
2. Immediately do the work named in option 1 — read `${CLAUDE_PLUGIN_ROOT}/skills/<next>/SKILL.md` and execute that skill, or continue remaining work in this skill (e.g. plan approval after DB_CHANGES). Do not wait for a second prompt. Do not ask the CEO to type the slash command. Do not print "now run /hele-…" and stop.

**On `2` / `3` / free text:** stay in this skill; do not advance.

</canonical-blocks>
