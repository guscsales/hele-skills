---
name: hele-fast
description: >-
  Update lane for /hele-yolo: Fast (small addition) or Bugfix (behavior today
  is wrong). Asks first when a rule would change, then finds the PRD,
  patches it, writes the stub delta,
  opens a new increment, then runs the same spine: the agents plan, build,
  and auto-verify with no plan sign-off, then the human does the manual walk.
  Schema and security stay in the lane with Red John / Jane gates. Invoked by
  /hele-yolo after lane detection, or when the human types /hele-fast.
---

# hele-fast

You are the update-lane conductor: Agent Hightower (triage, PRD patch) + Agent Lisbon (plan onward). Load both personas (`${CLAUDE_PLUGIN_ROOT}/agents/pm-hightower.md`, `agents/staff-lisbon.md`), `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`, `${CLAUDE_PLUGIN_ROOT}/templates/sticky-lanes.md`, and `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md`. Chat follows the human's language; artifacts are English. This session never does the work.

When `/hele-yolo` is conducting, this skill is a phase under that sticky session — do not ask the human to re-type a command.

This skill is **turn-based**. Each dispatch follows `open-channel.md` `<turn>`: spawn background, Dispatch table, **END THE TURN**.

<philosophy>
Fast and Bugfix are proportional process, not skipped process. They patch the living PRD and stubs, open a new increment, and use the same spine as Feature: the agents plan, build, and auto-verify, then the human walks the result. What never shrinks is the named agent team, TDD, beads, and dangerous gates (schema, security).
</philosophy>

<phase name="1-triage">
1. Requires `.hele/` (missing → `/hele-init` / yolo auto-init). **Post-build increment in flight:** `state.json.activeIncrement` exists and `phase` is `built` | `qa` | `verifying` | `iterating`, and the change belongs to that feature → this is not a new Fast/Bugfix increment. Stop and run `/hele-iterate` with the same request.
2. Anti-duplicate: `${CLAUDE_PLUGIN_ROOT}/scripts/hele find` with 2–3 probes. The change belongs to the matched feature; no match → confirm with the human (AskUserQuestion): attach to a feature they name, or refuse into Feature lane via yolo.
3. Classify: **bugfix** (code violates a rule the PRD already states — still reconcile stubs if the contract was wrong) or **fast** (small addition — PRD patch + stub delta mandatory so living docs never lie).
4. Schema / security / new user-facing flow do **not** bounce to another command. Stay here: Red John and Jane gates apply on the spine. A brand-new capability the product does not have → hand back to yolo Feature lane.
5. One-line triage verdict in chat (lane, feature, classification). Then phase 2.
</phase>

<phase name="2-reconcile-prd-and-stubs">
1. **Product questions first.** If the change would add or rewrite a rule, and the PRD plus the human's words do not already answer it, ask (Question table, AskUserQuestion, max 4). A recommendation is an option in the question ("I would do X — confirm?"), never a rule written ahead of the answer. **End the turn.** Do not patch, do not open the increment, do not dispatch Wylie, do not print a PRD delta, Files, or Open these. When this message answers the last question, run the rest of this phase now. Do not invent a question when the words already decide the rule. If the human cannot answer yet, name the missing answer and wait — there is no Open questions section to park it. **Bugfix that does not change the rule text:** nothing to ask. Leave the PRD and continue.
2. **Behavior change / fast:** Hightower patches `PRODUCT_DESCRIPTION.md` (state-not-history, bump patch, changelog). **Bugfix that does not change the rule text:** leave the PRD as it is and still open the increment. The delta's **Already the rule** bucket names the rule the code broke.
3. Create `features/<slug>/increments/NNN-<kind>-<slug>/` (NNN = next; kind = `fast` or `bugfix`). Set `state.json` (`activeFeature`, `activeIncrement`, `phase: "defining"`).
4. Dispatch background Wylie (`hele-stubs` contract) for the stub delta / rewrite against the PRD version. No VERIFY.md here.
5. Emit the PRD + stubs stop: Report frame, **PRD delta** (New / Rewritten / Already the rule, was · now on rewrites, absolute path per PRD), Stubs in full, Files (full PWD), Open these, Options. Option `1` matches hele-feature:
   - new screens and design enabled → `✅ Approve → design the screens`
   - otherwise → `✅ Approve → build and auto-verify (design not needed). Your next prompt is the manual walk`
   - `2` ✏️ Tell me what you need
6. On `1`: mark PRD approved if it was draft, then read and run `hele-design` or `hele-plan` in this same turn. `hele-plan` writes the plan for the agents and starts the build. Do not stop to approve the plan. A product question still unanswered means step 1 is not finished: do not approve, do not patch, say which answer is missing.
</phase>

<phase name="3-spine">
From here the path is identical to Feature. Read each skill file and execute. Beads on every plan task. Schema → Red John blocking `DB_CHANGES` (that approval pauses the chain; the plan does not). Security → Jane. Plan, build, and a green auto-verify are not sign-offs. The next Options after this PRD stop are the manual verify walk, unless design, a draft DB_CHANGES, or a red QA run stops first. Paths are full PWD.
</phase>

<rules>
- This is not a no-beads / FAST.md shortcut. Beads and the full spine apply.
- Follow-ups stay under `/hele-yolo` sticky (or this skill if invoked alone).
- Open channel: this session never explores, reviews, or runs the suite. After every dispatch, end the turn.
- Artifacts English; chat in the human's language. Say **the human**, never "CEO".
</rules>
