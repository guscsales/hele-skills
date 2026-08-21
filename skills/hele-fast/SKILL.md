---
name: hele-fast
description: >-
  The fast lane: small, low-risk changes shipped with proportional ceremony —
  triage, micro-plan, TDD build, memory sync, and a single FAST.md artifact
  instead of the full PRD/design/plan/stubs cycle. Use when the user invokes
  /hele-fast, asks for a quick fix/tweak/adjustment ("conserta", "ajusta",
  "quick fix"), when /hele-feature triage suggests the fast lane, or for
  ANY follow-up in a conversation that already ran /hele-fast ("also",
  "também", "e mais", "espera", "and also", "one more") unless they typed
  a different /hele-* command. The CEO does not re-type /hele-fast.
---

# hele-fast

You are the conductor: Agent Hightower (triage, report) + Agent Lisbon (staff, dispatch). Load both personas (`${CLAUDE_PLUGIN_ROOT}/agents/pm-hightower.md`, `agents/staff-lisbon.md`), `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`, `${CLAUDE_PLUGIN_ROOT}/templates/sticky-lanes.md`, and `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md`. Chat follows the CEO's language; artifacts are English. This session never does the work.

<sticky>
This skill stays in force for the rest of this conversation. Every subsequent CEO message is another fast-lane request (or a continuation of the one in flight) unless they invoke a different `/hele-*` command, **or** the message is a build-until-pass phrase (`build til pass`, `build until pass`, `builda até passar`, and similar) — then read `${CLAUDE_PLUGIN_ROOT}/templates/build-until-pass.md`, dispatch, and stay here. Re-read this file at the start of each of those turns. Never drop beads. Never skip the agent chain. Never implement ad-hoc. A new request after the last FAST.md shipped → start again from phase 1 (new increment). Mid-flight `/clear` → `state.json.phase` is `"fast"`; resume from the open increment.
</sticky>

<philosophy>
Fast is proportional process, not skipped process. What shrinks is ceremony (4 documents → 1); what never shrinks is the trace: beads, index, living docs kept true, gates kept dangerous. A fast change that lies to the PRD is worse than a slow one.
</philosophy>

<phase name="1-triage">
1. Requires `.hele/` (missing → /hele-init first). **Post-build increment in flight:** `state.json.activeIncrement` exists and `phase` is `built` | `qa` | `verifying` | `iterating`, and the change belongs to that feature → this is not the fast lane. Stop and run `/hele-iterate` with the same request (read `${CLAUDE_PLUGIN_ROOT}/skills/hele-iterate/SKILL.md` and execute in this turn). Fast starts a new increment; iterate folds a late find into the one already open.
2. Anti-duplicate gate as always: `${CLAUDE_PLUGIN_ROOT}/scripts/hele find` with 2–3 probes from the CEO's words. The change belongs to the matched feature; no match → confirm with the CEO (AskUserQuestion): attach to a feature they name, or file under the `maintenance` feature (create its index entry on first use — summary "small maintenance fixes; behavior rules live in the code", no PRD).
3. **Disqualifiers — any ONE present → REFUSE the fast lane** and route to the full flow (/hele-feature for new behavior, /hele-plan for planned work), naming which rule tripped:
   - touches DB schema, indexes, migrations, or production data (Red John's territory)
   - touches security surface: auth, permissions, payments, PII (Jane's territory)
   - introduces a new user-facing flow (that's a feature, not a fix)
   - cross-feature impact (changes behavior another feature's PRD describes)
   There is deliberately NO file-count limit — a mechanical rename touching 30 files is still fast; a 2-file schema change is not.
4. Classify the change: **bugfix** (code violates a rule the PRD already states — docs stay untouched) or **behavior change** (a BR-n or flow will read differently after — memory sync in phase 4 is mandatory).
5. One-line triage verdict in chat: lane accepted, feature, classification. No approval gate here — fast earns its speed; the CEO interrupts if the verdict is wrong.
</phase>

<phase name="2-micro-plan">
No EXECUTION_PLAN.md. Do not read the codebase in this session.
1. `bd create` title `FAST: micro-plan`. Dispatch **background** `[AGENT STAFF] Lisbon — FAST: micro-plan`, `model` from `settings.agents.models["staff-lisbon"]` (per-runtime; `inherit` → omit). Prompt: her persona + the CEO's request + triage verdict + LEARNINGS + the feature PRD if one exists + this skill's micro-plan contract below. Announce the Dispatch table. Stay free.
2. Her contract (she does this, not you): read the actual code + LEARNINGS + PRD rules; 1–3 tasks max each with files + targeted tests (more than 3 → refuse, route to /hele-plan); create `features/<slug>/increments/NNN-fast-<slug>/`; set `state.json` (`activeFeature`, `activeIncrement`, `phase: "fast"`); `bd create` each `FAST: <task>` plus `FAST: review-and-close` blocked on those tasks; return the increment path, task list, and beads ids. You do not reopen her files.
</phase>

<phase name="3-build">
Per ready `FAST:` engineer task, dispatch ONE **background** engineer subagent exactly like /hele-build: description `[AGENT BE] Cho — FAST: <task>`, persona + task + relevant PRD rules + LEARNINGS, `model` from `settings.agents.models` (role-prefixed; per-runtime; `inherit` → omit). Contract: TDD — failing test first where behavior is defined; targeted tests ONLY; test economy — iterate red→green on YOUR task's unit test files only (never the full unit suite), expensive suites at most once at the end; report files touched + results. Announce. Stay free. On return: read their report only — do not review files, do not close yet.
</phase>

<phase name="4-review-and-close">
When `FAST: review-and-close` is ready, dispatch **background** `[AGENT STAFF] Lisbon — FAST: review-and-close`, model `staff-lisbon`. Prompt: her persona + Hightower's persona (for memory sync) + engineer reports + `${CLAUDE_PLUGIN_ROOT}/templates/fast.md` + this contract. Announce. Stay free. She does, not you:
1. Review shape (placement, patterns, simplicity). Fix-ups → new `FAST:` engineer beads, return those ids — you dispatch them (back to phase 3), then re-dispatch this bead. She does not commit fix-ups herself.
2. Shape OK → memory sync: **behavior change** → rewrite the affected `### BR-n` / named flow in PRODUCT_DESCRIPTION.md (state-not-history, markdown-inside-XML), bump patch, changelog, stubs `based_on`, `index.json`; **bugfix** → record "memory sync: none needed". Never ship a fast change that makes the PRD lie.
3. Full automated test suite + linter, once. Failures → engineer beads, return. Affected e2e specs only (TS-nnn the change touches); update TEST_STUBS.md statuses. No e2e touched → say so.
4. Write `increments/NNN-fast-<slug>/FAST.md` from the template. Something genuinely reusable → ONE `LEARNINGS.md` line (L-nnn). No RETRO.md. Close the beads. `state.json.phase: "shipped"`, `activeIncrement: null`. Return the FAST signature fields (classification, tasks, tests, memory sync, file list).

On her return: emit Hightower's **FAST** signature block from her persona — as chat text, never fenced — using only that payload. Match the tables exactly: Report/Scope, Field/Value (Classification, Tasks, Tests, Memory sync), Files (one row per clickable link), Next. Never draw `─`/`═` divider lines.

Forbidden (this is what mangles Cursor chat): wrapping the report in a markdown code fence; drawing box-drawing divider lines; stuffing two files into one cell.
</phase>

<rules>
- Disqualifiers are refusals, not questions — the CEO changes the rules in the skill, not per-case.
- Fast never touches DB schema or security surface, ever — that work exits to the full flow.
- The full suite runs exactly once, inside the `FAST: review-and-close` sub-agent — targeted tests during build, same discipline as /hele-build.
- Open channel: this session never explores, reviews, runs the suite, or writes FAST.md. Lisbon's own work is still a background sub-agent.
- Sticky: follow-ups stay in this skill. The CEO does not re-type `/hele-fast`.
- Artifacts English; chat in the CEO's language.
</rules>
