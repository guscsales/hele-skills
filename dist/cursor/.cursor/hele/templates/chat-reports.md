# Chat Report Visual Language

Every hele skill reports in chat using this shared visual language. The CEO is a visual person — reports must be scannable at a glance. Content stays king: formatting makes it readable, never replaces substance.

<rules>
- **NEVER wrap a report in a code fence.** Reports are emitted as normal chat text — markdown prose with divider lines. The ``` fences in THIS file only delimit the examples; copying them into chat makes reports unreadable. Code fences in chat are reserved for actual code, commands, and file contents.
- Section blocks framed by `──────────────────────────────` dividers; `══════════════════════════════` for top-level report frames.
- **Divider lines are blank.** A divider is ONLY `─` or `═` characters — never append an emoji, title, count, or label on the same line (no `──── 🧪 VERIFY RUN`, no `──── ▶ NEXT:`). Titles, section headers, and `▶ NEXT:` sit on their own lines between the dividers.
- One emoji per section header — never per sentence.
- Short labeled lines over dense paragraphs — but connect them with normal prose around the blocks; the report is part of the conversation, not a log dump.
- **One item per line** for lists (issues, failures, files, decisions). Never concatenate two `❌` / `✅` / `⏭️` items onto the same line.
- Agent tags are formal identifiers: `[AGENT PM] Hightower`. In prose, use the spoken form: "Agent Hightower".
- **Every report that created or modified files includes a `📄 Files:` section** — one line per artifact, the path rendered as a clickable markdown link relative to the project root, annotated with what happened: `[PRODUCT_DESCRIPTION.md](.hele/features/<slug>/PRODUCT_DESCRIPTION.md) — created v1.0` / `[index.json](.hele/index.json) — updated`. The CEO must always know exactly where to go read.
- Every report ends with a `▶ NEXT:` line — the CEO always knows the next action. Keep the whole command on that one line; never split `/hele-build` across a divider and the next line.
- **Suggest `/clear` between phases.** When a phase is fully closed — approval given, every artifact and status written to disk, nothing pending — the NEXT line leads with it: `▶ NEXT: /clear (everything is saved on disk — fresh context is cheaper) → /hele-plan`. Never suggest /clear mid-phase, mid-interview, or while an approval/question is still pending — that context isn't on disk yet.
- File artifacts are exempt: markdown docs stay clean, no dividers or emoji inside `.hele/` files.
- Chat language follows the CEO (pt-BR in, pt-BR out). Artifacts are always English.
- **`.hele/` is a placeholder, not a hardcoded path.** The harness folder is `.hele/` at the project root by default, but the CEO may have named it differently at init: a `.helerc` file at the root (`{"dirName": "<name>"}`) points to the real folder. Every skill resolves the dir first (`.hele` → else `.helerc`) and uses the resolved name in paths and links.
</rules>

<canonical-blocks>

## Report frame (any skill's final output)

```
══════════════════════════════════════════
<emoji> <REPORT NAME> — <feature/project>
══════════════════════════════════════════
<section lines>
──────────────────────────────────────────
<next section>
══════════════════════════════════════════
▶ NEXT: <exact next command or decision>
```

## Status board (used by /hele-status)

```
══════════════════════════════════════════
📊 HELE STATUS — <project>
══════════════════════════════════════════
📦 checkout-discount            [building]
   📕 PRODUCT_DESCRIPTION  v1.4  ✅
   📘 TEST_STUBS           v1.2  ✅ based on PRD v1.4
   🔨 increment 002-coupon-stacking
      📗 EXECUTION_PLAN    v1.0  ⚠️ based on PRD v1.3 — STALE
      🎨 DESIGN_SPEC       v1.1  ✅ based on PRD v1.4
      🧿 beads: 3 done · 2 in progress · 1 blocked
──────────────────────────────────────────
📦 user-onboarding              [idea]
══════════════════════════════════════════
▶ NEXT: /hele-plan — refresh stale plan for checkout-discount
```

## Files block (inside any report that wrote to disk)

```
──────────────────────────────────────────
📄 Files:
   [PRODUCT_DESCRIPTION.md](.hele/features/checkout-discount/PRODUCT_DESCRIPTION.md) — created v1.0
   [index.json](.hele/index.json) — updated (feature registered)
   [state.json](.hele/state.json) — updated (activeFeature)
──────────────────────────────────────────
```

## Dispatch announcement (one line, when spawning an agent)

```
🕵️ Dispatching [AGENT STAFF] Lisbon — plan increment 002-coupon-stacking
```

## Question block (planning phases — before AskUserQuestion calls)

```
──────────────────────────────────────────
❓ [AGENT PM] Hightower needs answers (3)
──────────────────────────────────────────
```

## Approval block (MANDATORY at the end of every interactive phase)

Whenever a skill produces an artifact the CEO must sign off on (PRD, plan, design spec, stubs, DB changes), it ends the report with numbered options — approval first, adjustments second, context-specific extras after — and ALWAYS states what the next phase will be.

**Never compress this into one line.** Forbidden: `🗳️ YOUR CALL — 1. ✅ Approve · 2. ✏️ Adjust · 3. …`. Options wrap and become unreadable. Always use the multi-line shape below (blank dividers, one option per line):

```
──────────────────────────────────────────
🗳️ YOUR CALL
──────────────────────────────────────────
1. ✅ Approve — PRODUCT_DESCRIPTION goes to v1.0 approved
2. ✏️ Adjust — tell me what to change
3. <context-specific option, e.g. "🔍 Show the full business rules again">
──────────────────────────────────────────
▶ AFTER APPROVAL: /hele-plan — Agent Lisbon plans the increment
```

The CEO replies with a number (or free text). Never advance a phase without the explicit `1`/approval; never end an interactive phase without offering these options.

</canonical-blocks>
