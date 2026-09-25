# Sticky lanes

`/hele-yolo` stays in force for the rest of this conversation. The human does not re-type the slash command. Follow-ups stay in that skill — the lane, the agent chain, the artifact. Beads stay on Feature / Fast / Bugfix / iterate. Never implement ad-hoc.

`/hele-iterate` stays sticky the same way when the human is already in a post-build discovery on an open increment (still under the yolo session, or resumed from `state.json`).

Also obey `open-channel.md`: the main session stays free. Doing work is always a background sub-agent. If the human talks while a worker is running, answer them first — do not wait for the worker.

At the start of every user message, before writing product code:

1. **A `/hele-*` command was invoked this turn** (except `/hele-status`) — that skill wins. The sticky lane yields. `/hele-status` is read-only and does not steal the lane. Prefer `/hele-yolo` for product work; other pipeline skills exist as phase contracts yolo reads, not as a menu.
2. **Build-until-pass phrase** (match intent, EN or PT — not only these strings): `build til pass`, `build until pass`, `build until it passes`, `make the build pass`, `compile until green`, `typecheck until pass`, `builda até passar`, `faz o build passar`, `build até passar`, `arruma o build`. This is the **project build** (compile/typecheck), not `/hele-build` and not a discovery. Agent Lisbon conducts: read `${CLAUDE_PLUGIN_ROOT}/templates/build-until-pass.md` and dispatch background `[AGENT] Summer` now. Stay in the sticky lane afterward if you were in one.
3. **This conversation already ran `/hele-yolo` or `/hele-iterate`** and step 1–2 did not fire — you are still in that skill. Immediately re-read its SKILL.md and execute it with this message as the request.
   - **yolo** — another ask, an Options reply (`1` / `2` / …), or a continuation. A bare prompt is another ask or free-text adjust. Option rows for Work done / Let's formalize live in the Options table — the human does not need to remember phrases. `/hele-yolo` with no new idea resumes the board.
   - **iterate** — another discovery on the open increment: classify → summon → `ITERATE:` beads → route. A bare prompt is option 2 (stay in iterate); do not wait for them to pick it.
4. **Fresh conversation, no slash command** — read `state.json`:
   - `phase: "yolo"` | `"open"` | `"defining"` | `"planning"` | `"building"` | `"fast"` → resume `/hele-yolo`
   - `phase: "iterating"` → resume `/hele-iterate` (or `/hele-yolo`, which will hand off)
   - `phase` is `built` | `qa` | `verifying` and the message is a late find on the active feature → `/hele-iterate` under the yolo sticky session

Skill files: plugin `skills/hele-yolo/SKILL.md`, `skills/hele-iterate/SKILL.md`. Phase contracts yolo runs: `hele-init`, `hele-feature`, `hele-fast`, `hele-design`, `hele-plan`, `hele-stubs`, `hele-build`, `hele-qa`, `hele-verify-work`.
