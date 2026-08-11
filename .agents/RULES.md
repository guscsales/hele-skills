# Agent rules — hele-skills

Rules for agents working **in this repository** (the harness itself), not in consumer projects.

## Flow diagrams stay in sync

When you change the harness flow diagram (phases, arrows, fix loops, box labels, side paths), update **every** copy in the same change:

1. `cli/src/flow-diagram.js` — canonical source (`FLOW_DIAGRAM`). This is what `hele ai` prints.
2. `README.md` — the fenced code block under `## The flow` must match `FLOW_DIAGRAM` exactly.
3. Rebuild the CLI so bundled copies catch up: `cd cli && npm run build` (refreshes `cli/dist/hele.cjs`; run the cursor adapter build when that surface is in scope too).

Do not invent a third independent copy. If a new surface needs the diagram, import `FLOW_DIAGRAM` or paste from it and add that path to this list.

Skill deep-dives (`hele ai <name>`, `SKILLS` in `cli/src/ai.js`) and prose docs (`.docs/`) describe the same flow in words — when the diagram gains a mode or loop (e.g. `--from-qa`, `--generate-fixes-report`), update those descriptions in the same change so they do not contradict the drawing.
