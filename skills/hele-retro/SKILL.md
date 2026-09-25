---
name: hele-retro
description: >-
  Session findings are written automatically by /hele-yolo into
  .hele/findings.json during the conversation. Durable lessons are promoted
  to LEARNINGS.md. This skill is no longer a command the human runs at the
  end of an increment. If invoked, it only reconciles findings → LEARNINGS
  and reports what is already on disk — it does not interview for a retro.
---

# hele-retro

Retros are not a separate step. `/hele-yolo` appends findings while the human talks. This file documents the contract for agents that still see the name.

<context>
- Primary store: `.hele/findings.json` — append-only array of `{ id, when, lane, feature, what, nextTime }`.
- Durable agent lessons: `.hele/LEARNINGS.md` with stable `L-nnn` ids — every skill loads that file at start.
- Do **not** open an interview. Do **not** write `RETRO.md` unless the human explicitly asks for a written retrospective artifact.
</context>

<phase name="1-reconcile">
1. Read `findings.json` and `LEARNINGS.md`.
2. For each finding whose `nextTime` is imperative and not yet reflected as an L-nnn, propose (or write, when conducting under yolo) one learning line.
3. Emit a short report: counts, absolute paths, Options — `1` Work done; `2` Tell me what you need.
</phase>

<rules>
- Evidence-first: every finding cites what actually happened.
- Learnings are for agents: written so a future skill run can obey them literally.
- Artifacts English; chat in the human's language. Say **the human**, never "CEO".
- Never present this as a required close-gate step after verify.
</rules>
