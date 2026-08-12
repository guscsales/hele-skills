# Agent rules — hele-skills

Rules for agents working **in this repository** (the harness itself), not in consumer projects.

## Bundled artifacts stay in sync

`hele cursor` embeds `agents/`, `skills/`, and `templates/` inside `cli/dist/hele.cjs`. `dist/cursor/` is the generated Cursor adapter from the same trees. When you change any of:

- `agents/`
- `skills/`
- `templates/`
- `cli/src/`

rebuild **both** in the same change and commit the results:

1. `cd cli && npm run build` — refreshes `cli/dist/hele.cjs`
2. `node scripts/build-cursor.mjs` — refreshes `dist/cursor/`

CI fails the PR if either is stale. Skipping the rebuild is the usual reason a docs-only agents/skills/templates change goes red.

## Flow diagrams stay in sync

When you change the harness flow diagram (phases, arrows, fix loops, box labels, side paths), update **every** copy in the same change:

1. `cli/src/flow-diagram.js` — canonical source (`FLOW_DIAGRAM`). This is what `hele ai` prints.
2. `README.md` — the fenced code block under `## The flow` must match `FLOW_DIAGRAM` exactly.
3. Rebuild the bundled artifacts (see above) so CLI and Cursor copies catch up.

Do not invent a third independent copy. If a new surface needs the diagram, import `FLOW_DIAGRAM` or paste from it and add that path to this list.

Skill deep-dives (`hele ai <name>`, `SKILLS` in `cli/src/ai.js`) and prose docs (`.docs/`) describe the same flow in words — when the diagram gains a mode or loop (e.g. `--from-qa`, `--generate-fixes-report`), update those descriptions in the same change so they do not contradict the drawing.
