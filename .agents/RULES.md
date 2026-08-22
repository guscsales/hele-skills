# Agent rules — hele-skills

Rules for agents working **in this repository** (the harness itself), not in consumer projects.

## Bundled artifacts stay in sync

The Claude Code plugin is the source trees (`agents/`, `skills/`, `templates/`). The committed CLI bundle is `cli/dist/hele.cjs`. When you change `cli/src/`, rebuild and commit that bundle in the same change:

1. `cd cli && npm run build`

CI fails the PR if `cli/dist/` is stale. There is no shipped Cursor adapter — Claude Code only. Do not generate or commit `dist/cursor/`.

## Flow diagrams stay in sync

When you change the harness flow diagram (phases, arrows, fix loops, box labels, side paths), update **every** copy in the same change:

1. `cli/src/flow-diagram.js` — canonical source (`FLOW_DIAGRAM`). This is what `hele ai` prints.
2. `README.md` — the fenced code block under `## The flow` must match `FLOW_DIAGRAM` exactly.
3. Rebuild the CLI bundle (see above) so `hele ai` catches up.

Do not invent a third independent copy. If a new surface needs the diagram, import `FLOW_DIAGRAM` or paste from it and add that path to this list.

Skill deep-dives (`hele ai <name>`, `SKILLS` in `cli/src/ai.js`) and prose docs (`.docs/`) describe the same flow in words — when the diagram gains a mode or loop (e.g. `--from-qa`, `--generate-fixes-report`), update those descriptions in the same change so they do not contradict the drawing.
