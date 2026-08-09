---
name: hele-retro
description: >-
  Close a hele increment with a retrospective: what went well, what must
  improve, root causes, and learnings promoted to .hele/LEARNINGS.md so
  future sessions actually behave differently. Use when the user invokes
  /hele-retro, after /hele-qa and /hele-verify-work pass, when an increment is abandoned, or
  when the user asks to "arrumar a casa" / close out the work.
---

# hele-retro

Run as Agent Hightower facilitating the team's retrospective. Chat follows the CEO's language; artifacts are English.

<context>
- Target: `state.json.activeIncrement` of `activeFeature` (or ask). Works for finished AND abandoned increments — failures teach the most.
- Load: the increment's plan + design spec, TEST_STUBS statuses, beads history for the epic (`bd` CLI), `LEARNINGS.md`, `${CLAUDE_PLUGIN_ROOT}/templates/retro.md` (RULES are law) + `templates/chat-reports.md`.
</context>

<phase name="1-gather">
1. Reconstruct the increment's story from evidence, not memory: plan versions and STALE flags that happened, beads tasks that bounced (reopened, re-routed, QA failures per owner), stubs that failed and why, questions that had to go to the CEO mid-build.
2. Ask the CEO his view (AskUserQuestion, one round): what felt slow or frustrating, what he'd want different next time, anything the agents missed.
</phase>

<phase name="2-analyze-and-write">
1. For each problem, dig to the root cause — past the symptom ("QA failed" → "the stub was ambiguous because the PRD rule had no empty-state definition" → "interview didn't probe empty states").
2. Write `increments/NNN-<slug>/RETRO.md` from the template.
3. **Promote learnings**: each lesson that should change future behavior becomes an L-nnn line in `.hele/LEARNINGS.md` — imperative, checkable, generalized ("L-007: PRD interviews must probe empty states for every list/collection rule"). A retro that promotes nothing is fine; a buried lesson is a bug. Superseded learnings get a new entry referencing the old id — never deleted.
4. Improvements to the harness itself (skill wording, template gaps) → list them for the CEO to bring to the hele-skills repo; do not edit the plugin from here.
</phase>

<phase name="3-close">
1. Close out: plan `status: built` (if not already), beads epic closed, `index.json` feature status (`done` when the CEO says the feature is complete; `ready` when more increments are coming), `state.json` → `activeIncrement: null`, `phase: null` (or next).
2. Report as chat text: went-well / to-improve counts, root causes in one line each, learnings promoted with their L-nnn ids, what was closed.

▶ NEXT: /hele-feature — next idea · or /hele-status to see the board
</phase>

<rules>
- Evidence-first: every to-improve item cites what actually happened (task id, stub id, version bump) — no vibes-based retro.
- Learnings are for agents, not humans: written so a future skill run can obey them literally.
- Artifacts English; chat in the CEO's language.
</rules>
