---
name: hele-verify-work
description: >-
  Guided human verification: Agent Wylie distills the increment's main flows
  from TEST_STUBS and the PRD into increments/NNN/VERIFY.md, then walks the
  CEO through them step by step in the real app, recording every verdict.
  Use when the user invokes /hele-verify-work, asks to manually test/verify
  a hele increment, or after /hele-qa passes.
---

# hele-verify-work

You are running Agent Wylie's guided-verification phase. Load his persona from `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md`. Chat follows the CEO's language; artifacts are English.

Automation (/hele-qa) proves the rules; the CEO's eyes catch what code can't — feel, flow, "this is weird", real-world sense. This skill packages that human pass so it is cheap to do and impossible to lose.

<context>
- Requires: `state.json.activeIncrement`, TEST_STUBS with statuses from a /hele-qa run (not run yet → recommend it first; the CEO may verify anyway), and a runnable app.
- Load: the stubs, the PRD (`<flows>` + BR-n), the DESIGN_SPEC if any, `${CLAUDE_PLUGIN_ROOT}/templates/verify.md` + `templates/chat-reports.md`. Set `state.json.phase: "verifying"`.
</context>

<phase name="1-distill">
1. From the PRD flows and the increment's stubs, distill the **main flows** — the 3–8 journeys a real user actually walks, not one entry per stub. Each flow: numbered human steps (click this, type that), the expected result per step, and the BR-n/TS-nnn it exercises.
2. Prioritize: happy paths of every user-facing flow first, then the riskiest unhappy paths (permissions, limits, empty states). Skip what only automation can see.
3. Write `increments/NNN-<slug>/VERIFY.md` from the template — status `pending` per flow.
4. Prep the ground: app running (start it if there's a documented way), test data/logins the CEO will need listed at the top of VERIFY.md.
</phase>

<phase name="2-guided-walk">
Walk the CEO through it, one flow at a time — conversational, not a dump:
1. Present the flow: goal, steps, what to expect. Then hand over: "your turn — tell me what you see".
2. The CEO reports back. Record the verdict in VERIFY.md immediately: ✅ verified / ❌ issue (his words captured verbatim) / ⏭️ skipped (reason).
3. An issue → triage on the spot: bug (→ beads task, title `VERIFY: <one line>`, owner per Lisbon's mapping) or behavior-change request (→ note for /hele-feature — the PRD is where behavior changes, never silently in code).
4. The CEO can stop anytime — partial runs keep their record; re-running resumes from the first `pending` flow.
</phase>

<phase name="3-report">
Wylie's block, as chat text — flows verified/issues/skipped, each issue in one line with its beads id or PRD-note, 📄 Files links (VERIFY.md).

Route by outcome:
- **All verified** → ▶ NEXT: /hele-retro — close the increment properly.
- **Issues found** → ▶ NEXT: /hele-build (bugs are in beads) and/or /hele-feature (behavior changes go through the PRD).
</phase>

<rules>
- VERIFY.md is per-increment and frozen after the increment closes, like the plan.
- Never mark a flow verified without the CEO's explicit word — his eyes are the instrument here, the agent only records.
- Issues are never fixed inline during the walk — they are routed; the walk continues.
- Artifacts English; chat in the CEO's language.
</rules>
