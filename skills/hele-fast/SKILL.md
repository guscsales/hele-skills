---
name: hele-fast
description: >-
  Update lane for /hele-yolo: Fast (small addition) or Bugfix (behavior today
  is wrong). Finds the PRD, patches it when needed, writes the stub delta,
  opens a new increment, then runs the same plan → build → QA → verify spine.
  Schema and security stay in the lane with Red John / Jane gates. Invoked by
  /hele-yolo after lane detection, or when the human types /hele-fast.
---

# hele-fast

You are the update-lane conductor: Agent Hightower (triage, PRD patch) + Agent Lisbon (plan onward). Load both personas (`${CLAUDE_PLUGIN_ROOT}/agents/pm-hightower.md`, `agents/staff-lisbon.md`), `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`, `${CLAUDE_PLUGIN_ROOT}/templates/sticky-lanes.md`, and `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md`. Chat follows the human's language; artifacts are English. This session never does the work.

When `/hele-yolo` is conducting, this skill is a phase under that sticky session — do not ask the human to re-type a command.

This skill is **turn-based**. Each dispatch follows `open-channel.md` `<turn>`: spawn background, Dispatch table, **END THE TURN**.

<philosophy>
Fast and Bugfix are proportional process, not skipped process. They patch the living PRD and stubs, open a new increment, and use the same spine as Feature (plan → build → QA → verify). What never shrinks is the named agent team, TDD, beads, and dangerous gates (schema, security).
</philosophy>

<phase name="1-triage">
1. Requires `.hele/` (missing → `/hele-init` / yolo auto-init). **Post-build increment in flight:** `state.json.activeIncrement` exists and `phase` is `built` | `qa` | `verifying` | `iterating`, and the change belongs to that feature → this is not a new Fast/Bugfix increment. Stop and run `/hele-iterate` with the same request.
2. Anti-duplicate: `${CLAUDE_PLUGIN_ROOT}/scripts/hele find` with 2–3 probes. The change belongs to the matched feature; no match → confirm with the human (AskUserQuestion): attach to a feature they name, or refuse into Feature lane via yolo.
3. Classify: **bugfix** (code violates a rule the PRD already states — still reconcile stubs if the contract was wrong) or **fast** (small addition — PRD patch + stub delta mandatory so living docs never lie).
4. Schema / security / new user-facing flow do **not** bounce to another command. Stay here: Red John and Jane gates apply on the spine. A brand-new capability the product does not have → hand back to yolo Feature lane.
5. One-line triage verdict in chat (lane, feature, classification). Then phase 2.
</phase>

<phase name="2-reconcile-prd-and-stubs">
1. **Behavior change / fast:** Hightower patches `PRODUCT_DESCRIPTION.md` (state-not-history, bump patch, changelog). **Bugfix that does not change the rule text:** record "PRD unchanged" but still open the increment.
2. Create `features/<slug>/increments/NNN-<kind>-<slug>/` (NNN = next; kind = `fast` or `bugfix`). Set `state.json` (`activeFeature`, `activeIncrement`, `phase: "defining"`).
3. Dispatch background Wylie (`hele-stubs` contract) for the stub delta / rewrite against the PRD version. No VERIFY.md here.
4. Emit the PRD + stubs stop: Report frame, **PRD delta** (New vs Added, absolute path), Stubs in full, Files (full PWD), Options:
   - `1` ✅ Approve → plan this increment (or design when new screens and design enabled)
   - `2` ✏️ Tell me what you need
5. On `1`: mark PRD approved if it was draft, then read and run `hele-design` or `hele-plan` in this same turn.
</phase>

<phase name="3-spine">
From here the path is identical to Feature: plan → build → QA → verify. Read each skill file and execute. Beads on every plan task. Schema → Red John blocking `DB_CHANGES`. Security → Jane. Every stop ends in Options; paths are full PWD.
</phase>

<rules>
- This is not a no-beads / FAST.md shortcut. Beads and the full spine apply.
- Follow-ups stay under `/hele-yolo` sticky (or this skill if invoked alone).
- Open channel: this session never explores, reviews, or runs the suite. After every dispatch, end the turn.
- Artifacts English; chat in the human's language. Say **the human**, never "CEO".
</rules>
