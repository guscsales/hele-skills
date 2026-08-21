
# hele-paper-to-code

> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with `node scripts/build-cursor.mjs`.
> - **Open channel (hard):** every subagent is a Cursor Task with `run_in_background: true`. NEVER a blocking/foreground spawn. "Waiting for subagent" in the main chat is a defect — end the turn after the Dispatch table. You are notified when it finishes; do not Await or poll. If the CEO talks while a worker runs, answer them first.
> - Personas are native agent definitions in `.cursor/agents/` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same `maxParallel` limits; Cursor worktree isolation makes the file-overlap guard advisory. Never do the sub-agent's work in this session.
> - Models: read the `cursor` key from `settings.agents.models[...]` (values are per-runtime objects); a plain string applies to every runtime. `inherit` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - `${CLAUDE_PLUGIN_ROOT}` resources live under `.cursor/hele/`. The hele CLI: `node .cursor/hele/hele.cjs` (e.g. `node .cursor/hele/hele.cjs find <terms>`).
> - Everything below applies verbatim.

Pixel-perfect rebuild of UI from Paper artboards into the codebase. "Make it work, then make it right."

## Completion rule (non-negotiable)

**All 5 phases are mandatory. The task is NOT complete until Phase 5 passes.** Do not stop after Phase 2 because "it renders." Phase 3 (refactor) and Phase 4 (browser verify) are required — skipping them produces code that works but ships with arbitrary values, no token usage, and unverified visual parity. After each phase, explicitly state which phase you just finished and which phase you're starting next.

**Validate before you transform.** The raw `get_jsx` output MUST be pasted into a temporary file and rendered to confirm a faithful copy *before* any merge or transformation begins (Phase 1). This isolates extraction bugs from transformation bugs. **Any temp files you create MUST be deleted before the task is done** (verified in Phase 5).

## Pre-flight (HARD GATES)

Before any other step:

1. **Paper MCP is available.** Confirm by calling `paper:get_basic_info`. If it errors, stop — tell user to open Paper Desktop with the correct file.
2. **Chrome MCP is available** (for browser verification). Check for `Claude in Chrome` tools. If absent, warn that visual verification will be skipped.
3. **Read the official Paper guide once per session** by calling `paper:get_guide({ topic: "paper-mcp-instructions" })`.

If Paper MCP is unavailable, do not proceed.

**Resolving the target artboard.** The user provides an artboard ID. If not provided, check `paper:get_selection`; if empty, call `paper:get_basic_info` to list artboards and ask.

## Core principles (non-negotiable)

- **Source of truth: `get_jsx` on the artboard root.** One call per artboard. Never use screenshots as code input — only for visual verification.
- **Behavior is locked.** Don't change props, event handlers, ref forwarding, or component API. Only the visual layer changes.
- **Permission to fully overwrite.** If pixel parity is cleaner by rewriting the component from scratch, do it.
- **Ignore metadata frames.** Paper artboards often contain labels like "State 1 — Confirm", "Mobile", "Desktop" as text annotations. These are designer metadata — do NOT render them in code. Focus on the actual app layout content only.

## Token resolution

Before writing any code, read `globals.css` (or the project's equivalent theme file) to discover existing design tokens — fonts, colors, spacing, radii, shadows. Map Paper's raw values to project tokens wherever a match exists. Only use arbitrary Tailwind values for one-offs with no token equivalent.

## Phase 1 — Extract & validate (copy-paste from Paper, then prove the copy)

For each screen:

1. **Mobile artboard:** `paper:get_jsx({ nodeId: "<mobile-artboard-id>", format: "tailwind" })` — full HTML+Tailwind in one call.
2. **Desktop artboard:** `paper:get_jsx({ nodeId: "<desktop-artboard-id>", format: "tailwind" })` — same for desktop.

If only one artboard ID is provided, ask the user if there's a second (mobile/desktop). If they confirm it's a single artboard, use that as the sole source — skip the merge step in Phase 2.

Optional supplementary calls (only when get_jsx output is ambiguous):
- `paper:get_computed_styles({ nodeIds: [...] })` — batch specific nodes for exact values
- `paper:get_fill_image({ nodeId })` — for bitmap fills. Save extracted images to `public/` folder (or the project's static assets directory). If no `public/` folder exists, ask the user where to save or if images can be skipped.
- `paper:get_font_family_info({ familyNames: [...] })` — confirm font availability (once per session)

**That's it for extraction.** No tree walking, no per-node crawling, no spec tables.

### Validate the raw extraction (HARD GATE — do this before Phase 2)

The point of this gate: prove the `get_jsx` copy is correct and complete *in isolation*, so that if something looks wrong later you know it's your transformation — not a bad extraction.

1. **Paste raw into a temp JSX file.** For each artboard, drop the **unmodified** `get_jsx` output into a throwaway component the dev server can render — e.g. a scratch route like `app/_paper-tmp/<screen>-mobile.tsx` and `<screen>-desktop.tsx`. Raw copy only: no merging, no token mapping, no edits. Wrap minimally so it compiles (`export default function Tmp() { return (<raw JSX/>) }`).
2. **Render and compare.** Open the temp file in the browser. Compare side-by-side against `paper:get_screenshot` of that same artboard.
3. **Confirm the right, complete template was copied.** Check the structure and content match Paper — no truncated sections, no missing elements, no wrong artboard. You are verifying *extraction fidelity*, not polishing pixels.
4. **Gate:** Do NOT start Phase 2 until each raw extraction renders and matches its Paper artboard. If it doesn't match, the extraction is wrong — re-run `get_jsx` (check you used the right `nodeId`) before going further.
5. **Record the temp file paths.** They MUST be deleted in Phase 5.

**Checkpoint:** Say: "Phase 1 complete (extraction validated). Starting Phase 2 — make it work."

## Phase 2 — Make it work (raw merge)

Take the two JSX outputs (mobile + desktop) and create a **single working component**. Priority: it renders and matches Paper visually. Don't optimize yet.

1. **Filter out metadata.** Remove any Paper annotation frames (state labels, breakpoint labels, artboard titles). Keep only the actual app UI content.
2. **Strip artboard containers.** Both mobile and desktop JSX will have a root wrapper with the artboard's fixed dimensions (e.g., `w-[375px]` for mobile, `w-[1440px]` for desktop). These represent the viewport, not the component. Remove them — the component's root should be fluid (`w-full`) and let the page layout control width.
3. **Merge mobile + desktop into one component.** Compare both outputs element by element. Mobile JSX is the base. For every property that differs in desktop, add the desktop value with `md:` prefix on the same element. Common patterns:
   - `text-[40px] md:text-[88px]` (font scale)
   - `flex-col md:flex-row` (layout direction)
   - `px-6 md:px-20` (padding)
   - `w-full md:w-[540px]` (fixed widths)
   - `hidden md:block` / `md:hidden` (show/hide per breakpoint)
   - `gap-4 md:gap-10` (spacing between children)

   **Watch out for:**
   - **Mobile widths leaking to desktop.** If mobile has `w-[335px]` and desktop has `w-[600px]`, the merged result should be something like `w-full max-w-[335px] md:max-w-[600px]` — not a bare `w-[335px]` that constrains desktop too.
   - **Desktop containers.** Desktop layouts often need a centered container (`max-w-[1200px] mx-auto` or similar) that mobile doesn't have. Check if the desktop artboard shows content constrained to a centered column — if so, add a wrapper with `md:max-w-[...] md:mx-auto` even if mobile is edge-to-edge.
4. **Map fonts to project tokens.** Replace Paper font-family CSS strings with the project's font token classes (discovered in Token resolution step).
5. **i18n (if project uses it).** Check if the project has an i18n setup (translation files, `t()` helper, etc.). If yes, replace hardcoded text with translation keys. If no i18n exists, keep the text as-is from the mockup.
6. **Wrap in React shell.** Add `'use client'`, imports, component export, existing event handlers / state / navigation logic.
7. **Don't worry about** arbitrary values, rem conversion, existing components, or globals.css tokens yet. Just get it rendering correctly. Arbitrary Tailwind values in px are fine at this stage (`text-[88px]`, `p-[120px]`, `gap-[96px]`).

**Checkpoint:** Open in browser. Does it match Paper? Since the raw extraction was already validated in Phase 1, any visual breakage here is a *merge/transform* bug — not an extraction problem. Fix it in this component. Commit. Then say: "Phase 2 complete. Starting Phase 3 — refactor."

## Phase 3 — Make it right (refactor)

Once it works and matches Paper visually, clean up in small steps:

1. **Arbitrary → tokens.** Check `globals.css` (`@theme` block) for existing tokens. Replace arbitrary values with token classes where they exist (e.g., `text-[14px]` → `text-sm` if that maps to 14px in the theme).
2. **px → rem for off-scale arbitrary values.** Convert remaining arbitrary px values to rem (`16px = 1rem`): `text-[0.875rem]`, `p-[7.5rem]`. Keep `1px` borders in px.
3. **Extract existing components.** Search the codebase for reusable components (shared UI folder, component library, design system package). Replace inline markup with existing components wherever they match.
4. **Extract reusable sub-components.** If a pattern repeats (card, list item, input group), extract to a separate file following project naming conventions.
5. **Run tests.** Run the project's test suite for affected files — fix any failures. Commit after each refactor step.

Each refactor step is a small commit. Stop when clean. Then say: "Phase 3 complete. Starting Phase 4 — browser verify."

## Phase 4 — Browser verify

1. Navigate to the page in Chrome MCP.
2. Compare rendered output against Paper artboard screenshot (`paper:get_screenshot`).
3. Check interactive states if the artboard shows them (hover, focus, disabled) — force pseudo-classes via `javascript_tool` and compare.
4. Fix any visual discrepancies found — spacing, colors, font sizes, borders, shadows.
5. Do NOT declare complete until browser matches Paper. Then say: "Phase 4 complete. Starting Phase 5 — final review."

## Phase 5 — Final review

Step back and review the full result end-to-end:

1. **Re-read the component code.** Check for leftover artboard artifacts (hardcoded viewport widths, metadata text, Paper class names that slipped through).
2. **Delete temp extraction files.** Remove every temp file created in Phase 1 (the `app/_paper-tmp/` route or equivalent). Grep the repo for the temp dir/route to confirm none remain — shipping scratch files is a failure.
2. **Verify token usage.** Confirm arbitrary values only exist where no project token matches. No raw hex colors or px values that have token equivalents.
3. **Verify responsiveness.** Resize the browser from mobile to desktop in Chrome MCP. Confirm layout transitions smoothly — no mobile widths constraining desktop, no desktop-only elements showing on mobile.
4. **Verify interactivity.** Click through any interactive elements (buttons, links, forms). Confirm nothing is broken by the visual changes.
5. **Run tests one final time.** Confirm green.

If any issue found, fix it and re-verify. Then say: "Phase 5 complete. All phases done — task finished."

## Reference: Paper MCP tools used

Read tools (used in every run):
- `paper:get_basic_info` — file + artboard overview
- `paper:get_jsx` — full JSX+Tailwind for a node tree (the main extraction tool)
- `paper:get_computed_styles` — exact CSS values when get_jsx is ambiguous
- `paper:get_screenshot` — visual verification only, never as code input
- `paper:get_guide` — canonical instructions (once per session)
- `paper:get_font_family_info` — font availability (once per session)
- `paper:get_fill_image` — bitmap fills only
- `paper:get_children` — explore artboard structure if needed
- `paper:get_tree_summary` — hierarchical overview if needed

Progress indicators:
- `paper:start_working_on_nodes` / `paper:finish_working_on_nodes`

Write tools — NEVER used by this skill. One-way migration from Paper to codebase.

## Quick checklist

When invoking this skill, provide:

- [ ] Paper Desktop open with correct file
- [ ] Mobile artboard ID (e.g., `1KZ-0`)
- [ ] Desktop artboard ID (e.g., `1L0-0`) — or "mobile only" if no desktop variant
- [ ] Dev server running
- [ ] Chrome MCP connected (for Phase 4)
