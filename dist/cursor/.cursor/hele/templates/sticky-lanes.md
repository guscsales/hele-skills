# Sticky lanes

`/hele-fast` and `/hele-iterate` stay in force for the rest of this conversation. The CEO does not re-type the slash command. Follow-ups are still that skill — beads, the agent chain, the artifact. Never implement ad-hoc.

Also obey `open-channel.md`: the main session stays free. Doing work is always a background sub-agent.

At the start of every user message, before writing product code:

1. **A `/hele-*` command was invoked this turn** (except `/hele-status`) — that skill wins. The sticky lane yields. `/hele-status` is read-only and does not steal the lane.
2. **This conversation already ran `/hele-fast` or `/hele-iterate`** and step 1 did not fire — you are still in that skill. Immediately re-read its SKILL.md and execute it with this message as the request.
   - **fast** — another small change: full fast spine (triage → beads → agents → FAST.md). New increment if the last one already shipped.
   - **iterate** — another discovery on the open increment: classify → summon → `ITERATE:` beads → route. A bare prompt is option 2 (stay in iterate); do not wait for them to pick it.
3. **Fresh conversation, no slash command** — read `state.json`:
   - `phase: "fast"` → resume `/hele-fast`
   - `phase: "iterating"` → resume `/hele-iterate`
   - `phase` is `built` | `qa` | `verifying` and the message is a late find on the active feature → `/hele-iterate`

Skill files: plugin `skills/hele-fast/SKILL.md` and `skills/hele-iterate/SKILL.md`. Cursor adapter: `.cursor/commands/hele-fast.md` and `.cursor/commands/hele-iterate.md`.
