---
name: hele-verify-work
description: >-
  Guided human verification: Agent Wylie walks the human through the same
  steps and data recorded in the increment's QA_REPORT.md (screenshots of
  what pass looked like), recording every verdict in VERIFY.md. Invoked by
  /hele-yolo after QA passes, or when the human types /hele-verify-work.
  Close gate has no retro — Work done / iterate / draft PR.
---

# hele-verify-work

You are running Agent Wylie's guided-verification phase. Load his persona from `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md`. Chat follows the human's language; artifacts are English. Load `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`.

Automation (/hele-qa) proves the rules with screenshots; the human's eyes catch what code can't — feel, flow, "this is weird". This skill packages that pass so it is cheap to do and impossible to lose. **The script is the QA_REPORT — do not invent a different walk.**

<context>
- Requires: `state.json.activeIncrement`, `increments/NNN/QA_REPORT.md` from a /hele-qa run (missing → recommend QA first; the human may verify anyway from stubs), and a runnable app.
- Load: QA_REPORT.md (primary), VERIFY.md if present, the PRD, DESIGN_SPEC if any, `${CLAUDE_PLUGIN_ROOT}/templates/verify.md`. Set `state.json.phase: "verifying"`.
</context>

<phase name="1-load">
1. Read `increments/NNN-<slug>/QA_REPORT.md`. Distill 3–8 main human journeys from its per-stub steps and Setup — happy paths first, riskiest unhappy paths next. Write/refresh `VERIFY.md` from that report: same steps, same data, link to each stub's screenshot. `based_on: QA_REPORT run <N>`.
2. If VERIFY.md already exists and QA_REPORT is newer, refresh affected flows; keep recorded verdicts.
3. Prep the ground: app running, logins and test data listed from QA_REPORT Setup.
</phase>

<phase name="2-guided-walk">
Walk the human through it, one flow at a time — conversational, not a dump:
1. Present the flow: goal, steps table, expect, and the **absolute path** of the QA screenshot of what pass looked like. Then Options for this flow:
   - `1` ✅ Pass — mark verified
   - `2` ❌ Issue — tell me what's wrong
   - `3` ⏭️ Skip this flow
2. Free text counts as option 2. Record the verdict in VERIFY.md immediately: ✅ verified / ❌ issue (their words verbatim) / ⏭️ skipped (reason).
3. An issue → triage on the spot: bug (→ beads `VERIFY: <one line>`) or a late discovery (→ `/hele-iterate` on this increment). If they want it changed now, read and run `hele-iterate` in this same turn.
4. The human can stop anytime — partial runs keep their record; re-running resumes from the first `pending` flow.
</phase>

<phase name="3-report">
Emit Wylie's **VERIFY RUN** signature — chat text, never fenced. Files with **full absolute PWD paths**. Never draw box-drawing divider lines.

Route by outcome:
- **All verified** → close Options (wait for the number; do not auto-close):

  | Actions | Your call |
  |---|---|
  | 1 | ✅ Work done — close the increment |
  | 2 | ✏️ Fold a late find back in (iterate on this increment) |
  | 3 | 🚀 Open a draft PR |
  | 4 | 📝 Let's formalize — only when a PRD is still missing |

  On `1`: close the increment now — plan `status: built` (if not already), beads epic closed, `index.json` feature status (`done` when the human says the feature is complete; `ready` when more increments are coming — ask once if unclear), `state.json` → `activeIncrement: null`, `phase: null`. Emit **INCREMENT CLOSED**. No RETRO.md. No `/hele-retro`.
  On `2`: read and run `hele-iterate` in this same turn.
  On `3`: draft PR only (push as part of this approved item). Title with no conventional-commit prefix. Body from the repo's PR template. Watch CI. Report CI state.
  On `4`: only if no PRD exists — run hele-feature formalize path.
- **Issues found** → Options: `1` → iterate on this increment; `2` Tell me what you need. Do not execute iterate unless they pick it.
</phase>

<rules>
- VERIFY.md is per-increment and frozen after the increment closes.
- Never mark a flow verified without the human's explicit word.
- Issues are never fixed inline during the walk — they are routed; the walk continues.
- No retro command and no retro option. Session findings are written by `/hele-yolo` during the talk.
- Artifacts English; chat in the human's language. Say **the human**, never "CEO".
- Every path in chat is the full absolute PWD path.
</rules>
