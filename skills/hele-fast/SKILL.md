---
name: hele-fast
description: >-
  Update lane for /hele: Fast (small addition) or Bugfix (behavior today is
  wrong). Investigates first, the code behind the rules included. If a rule
  would change and human-owned questions remain, one pack (accept all / one by one / open reply), then finds the
  PRD, patches it, writes the stub delta, opens a new increment, and runs
  the same spine. Fast and Bugfix take the direct path by default (one owning
  engineer, no increment, no plan, no beads) unless the ask names an excluded
  surface, and the full spine then.
  A correction of the increment already in play does not come here — /hele
  adjusts that PRD and that increment. Schema and security stay with
  Hightower and Jane.
---

# hele-fast

You are Agent Lisbon on the update lane. Load `${CLAUDE_PLUGIN_ROOT}/agents/staff-lisbon.md`, `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`, `${CLAUDE_PLUGIN_ROOT}/templates/sticky-lanes.md`, and `${CLAUDE_PLUGIN_ROOT}/templates/open-channel.md`. Chat, including table headers and cells, follows `language.chat` in `.hele/settings.json` (`auto` = the human's language this session; a missing key uses `${CLAUDE_PLUGIN_ROOT}/core/default-config.json`). Files hele writes follow `language.artifacts` (default `en`, English en-US). English tables in the templates are the shape, not text to paste. This session never does the heavy work. Say **the human**. Never "CEO".

When `/hele` is conducting, this skill is a phase of that session. Do not ask the human to re-type a command.

Each dispatch follows `open-channel.md`: spawn background, Dispatch announcement at the effective output, **END THE TURN**.

<philosophy>
Fast and Bugfix are proportional process, not skipped process. The direct path (`${CLAUDE_PLUGIN_ROOT}/templates/direct-path.md`) is the default: one owning engineer, the smallest failing test, only the checks that reach the changed files, no increment, no plan, no beads. The full spine below applies only when the ask itself names an excluded surface or the engineer finds one and escalates. What never shrinks is TDD, the named agents, and the gates for schema and security. Beads and the increment belong to the full path.
</philosophy>

<phase name="1-triage">
1. Requires `.hele/`. A correction of the increment already in this conversation is not a new Fast or Bugfix. Stop and run `/hele`'s adjust phase on that same folder.
2. Anti-duplicate: `${CLAUDE_PLUGIN_ROOT}/scripts/hele find` with 2–3 probes. The change belongs to the matched feature. No match → that question is a row in the phase-2 pack (which feature, or Feature lane), not a separate turn.
3. Classify: **tweak** (text or style only, no rule, no logic: copy, labels, typos, colors, spacing → stop and run `${CLAUDE_PLUGIN_ROOT}/skills/hele-tweak/SKILL.md` instead), **bugfix** (the code violates a rule the PRD already states) or **fast** (a small addition). A brand-new capability the product does not have → Feature lane.
4. Schema and security do not bounce to another command. Hightower and Jane stay on the spine.
5. One-line verdict: lane, path, feature, classification (`Bugfix · direct`, `Fast · direct`, or `· full`). Then route. Read and run `${CLAUDE_PLUGIN_ROOT}/templates/direct-path.md` (its `<conductor>` block) and stop here, unless the ask itself names an excluded surface (the list is in that file): only then phase 2 and the full spine run. A new capability is Feature on the full path, not a direct-path change. When the engineer escalates, announce the escalation with its reason, then phase 2 and the full spine run with his findings passed to planning.
</phase>

<phase name="2-reconcile-prd-and-stubs">
This phase is a full-path step. The direct path does not run it: it opens no increment and has no PRD + stubs stop.

1. **Investigate, then one question pack.** Read the matched PRD. If the change would add or rewrite a rule, and the PRD plus the human's words do not already answer it: dispatch one background read-only specialist (the owning engineer, or Wylie's coverage scan) to read the code behind those rules and the existing proof, end the turn, and build the pack from its report. No dispatch when the PRD and the human's words settle everything. Then apply the question filter (`templates/chat-reports.md`, Question pack): engineering defaults, bookkeeping (increment, rule numbering, new rule or not), a fact an existing rule states and a question already answered this session are decided by Lisbon and kept for the Decided without a question bucket. Print the Question pack (every remaining human-owned question, each with a recommendation, then Options: accept all / one by one / I'll reply in my own words). Anticipate edge cases in that same pack. Do not ask the human what the code does. **End the turn.** Do not patch, do not open the increment, do not dispatch Wylie. On `1`, apply every recommendation and continue now. On `2`, AskUserQuestion over the same pack. On `3` or free text, wait for the open answer. When the last question is answered, continue now. Do not invent a question. **Bugfix that does not change the rule text:** nothing to ask. Leave the PRD. A bug that violates an unchanged rule never stops for approval on either path. A late doubt with a safe recommendation is applied and marked decided by Lisbon in the approval report; only one with no safe recommendation is a new, smaller pack.
2. **Fast, or a bugfix that changes the rule:** patch `PRODUCT_DESCRIPTION.md` (rewrite in place, patch bump, changelog). When the work escalated from the direct path after Lisbon already patched the PRD from the human's words, the already patched PRD is reused, not patched again, and it is the delta the full-path approval stop shows. **Bugfix that does not change the rule text:** leave the PRD. The delta's **Already the rule** bucket names the rule the code broke.
3. Full path only: create `features/<slug>/increments/NNN-<kind>-<slug>/` (next number, kind = `fast` or `bugfix`). Do not write `state.json`. The direct path opens no increment.
4. Dispatch background Wylie (`hele-stubs` contract, model `qa-wylie-stubs`) for the stub delta and affected Coverage recommendations. No VERIFY.md here.
5. Emit the PRD + stubs stop (the approval stop of the full path) only when the rule text changed: report, PRD delta, Scenarios and Coverage at the effective output (`chat-reports.md`, `## Output`; read it with `hele config effective output`), Decided without a question, Files as clickable links, Open these, Options. At every level the stop shows every new, rewritten and retired rule with its behavior change, every product question, every required decision, every decision taken without a question and approval option, and the links to the complete PRD and TEST_STUBS; only the detail around them follows the level. A request such as "show all TS" re-presents what exists for that response only: an expansion request keeps the approval pending with the same options. Option `1` matches hele-feature (design the screens, or build and auto-verify). Option `2` is tell me what you need. A bugfix whose rule text is unchanged has no stop: the PRD is left alone and it goes straight on to `hele-plan` (or `hele-design` when a new screen applies) in this same turn, with the delta's **Already the rule** bucket shown later.
6. On `1` (or straight on, when the rule is unchanged): mark the PRD approved if it was draft. Do not write a feature status. Then run `hele-design` or `hele-plan` in this same turn. The plan is not a stop.
</phase>

<phase name="3-spine">
Full path only. From here the path matches Feature. Read each skill and execute it. Beads on every plan task. Schema → Hightower, blocking `DB_CHANGES` (human-readable, no XML; the same DB-n list goes in the plan's `## Database`). Security → Jane. The next Options after this PRD stop are the QA report, unless design or a draft DB_CHANGES stops first. On that report they continue to the manual walk, or fix what they saw.
</phase>

<rules>
- Beads and the full spine apply on the full path. The direct path has none by design. There is no FAST.md file.
- Never order a comparison against a previous revision (worktree, dependency install, second environment) unless the human chose it for this delivery.
- Follow-ups stay under `/hele`.
- After every dispatch, end the turn.
- Every file in chat is a clickable link. No raw Path column.
</rules>
