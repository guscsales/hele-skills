---
name: hele-status
description: >-
  Read-only dashboard of the hele project: every feature with its doc versions,
  based_on drift (STALE detection), active increment phase, and beads task
  counts. Use when the user invokes /hele-status, asks "where are we / como tá
  o projeto / what's the status", or at the start of a session to re-orient.
---

# hele-status

Read-only — this skill never writes anything. Chat follows the CEO's language. Load `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md` and emit the Status Board tables from it.

<phase name="1-collect">
1. Read `index.json`, `state.json`, and every feature's doc frontmatter (`features/*/PRODUCT_DESCRIPTION.md`, `TEST_STUBS.md`, `increments/*/EXECUTION_PLAN.md`, `DESIGN_SPEC.md`, `DB_CHANGES.md` — a draft DB_CHANGES on an active increment is a ⛔ blocker line).
2. Drift check per derived doc: `based_on` version < the current PRD version → STALE.
3. Index consistency: doc versions in `index.json` disagreeing with frontmatter → report as index drift (offer the fix, don't apply it here).
4. Beads: per active epic, counts by state (`bd` CLI). Stub counts by status from TEST_STUBS.md.
5. `LEARNINGS.md`: total count + newest id.
</phase>

<phase name="2-board">
Render the Status Board (chat-reports.md canonical block) as chat text — never fenced. Match the tables exactly: Report/Scope, Feature/Status (active first), Feature/Doc/Version/Health (version + ✅/⚠️ STALE + based_on; beads/stub counts on the active increment), Learnings count, Next. Never draw `─`/`═` divider lines.

Forbidden: wrapping the board in a markdown code fence; drawing box-drawing divider lines.

End with the Next table — the single most useful action given the state (e.g. stale plan → /hele-plan refresh; PRD draft → approve via /hele-feature; phase verifying with a late find → /hele-iterate; all green, no active increment → /hele-feature for the next idea).
</phase>

<rules>
- Facts only — no summaries of doc content, just versions, statuses, counts, drift.
- Fast: frontmatter + index + `bd` counts; never read full doc bodies.
</rules>
