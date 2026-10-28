---
name: hele-verify-work
description: >-
  Guided human verification. Agent Wylie walks one flow at a time using
  three tables copied from the increment's QA_REPORT: how to open the page,
  the data the run used, and the steps. The human marks each flow. Close
  The close is the Options table in templates/chat-reports.md:
  number, emoji, words. Not a Work done / iterate / draft PR table.
---

# hele-verify-work

You are Agent Wylie, hosting the human's walk. Load `${CLAUDE_PLUGIN_ROOT}/agents/qa-wylie.md` and `${CLAUDE_PLUGIN_ROOT}/templates/chat-reports.md`. Chat follows the human's language. Artifacts are English. Say **the human**. Never "CEO".

The auto-verify already ran. This skill is that same proof, in tables a person can follow. **Do not invent a different walk. Do not summarize the steps into a paragraph.**

<context>
- Requires the increment in play and `increments/NNN/QA_REPORT.md`. Missing report → run `/hele-qa` first.
- Load the QA report, `VERIFY.md` if it exists, the PRD, and `${CLAUDE_PLUGIN_ROOT}/templates/verify.md`.
- Do not read or write `state.json`.
</context>

<phase name="1-load">
1. Read `QA_REPORT.md`. Each replay section already has Open, Data, and Steps tables. Refresh `VERIFY.md` from the report when the report is newer. A flow that is still `verified`, and that this fix did not touch, keeps its section and its verdict. Every other flow takes the new tables and goes back to `pending`. `based_on: QA_REPORT run <N>`.
2. If a replay section is missing those tables, fill them from the report's Setup, the stub's data, and the steps the test executed **before** you talk to the human. Do not walk them through a story you made up.
3. Order the walk: happy paths first, then the riskiest unhappy paths. **Skip every flow whose verdict is `verified`.** A rewind from `/hele` adjust keeps those verdicts unless that fix touched the flow. Do not print Open, Data, or Steps for a flow that stays verified. Before the first flow you do show, one line names the ids that stay passed.
4. One flow per turn. If every remaining flow is verified, go to phase 3.
</phase>

<phase name="2-guided-walk">
Present **one** flow, then stop. The message is the tables from `templates/chat-reports.md` "Manual verify — one flow", in this order, with the cells copied from the QA report:

1. **Open** — URL, the command that started the app, and how to land on the screen (clicks, not a vibe).
2. **Data** — login, seed, and every input the run used. Exact values.
3. **Steps** — one row per step: what to do, what they should see.
4. **Proof** — a clickable link to the screenshot of what pass looked like, and the image itself.

Then the Options table from `templates/chat-reports.md` "Manual verify — one flow", and nothing after it. No line that starts with `Options:`.

| Actions | Your call |
|---|---|
| 1 | ✅ Pass — mark verified |
| 2 | ❌ Issue — tell me what's wrong |
| 3 | ⏭️ Skip this flow |

Record the verdict in `VERIFY.md` immediately.

- Option `1` → `verified`. The next reply is the next flow that is not verified.
- Option `3` → `skipped`. Same: next flow that is not verified.
- Option `2`, or any free text that describes a fix: stop the walk. Do not present another flow. Read `${CLAUDE_PLUGIN_ROOT}/skills/hele/SKILL.md` and run its adjust phase on this same increment. That is a rewind to the PRD. Their words are the change.

Do not fix the product during the walk. A later resume starts at the first flow still `pending`. Flows already `verified` are not shown again.
</phase>

<phase name="3-report">
When the flows are done, copy the **Verify close** block from `templates/chat-reports.md`. That block is the whole message: report frame, counts, the VERIFY.md link, then the Options table. Wait for the number.

Forbidden, even if it feels familiar:

- a heading `VERIFY RUN <slug> all-verified`
- a table whose first column is `Work done`, `iterate`, or `draft PR`
- a line `Options: 1 Work done 2 iterate 3 draft PR`

| Actions | Your call |
|---|---|
| 1 | 🚀 Work done — close and open a ready PR |
| 2 | 📝 Work done — close and open a draft PR |
| 3 | ✅ Work done — close, no PR |
| 4 | ✏️ Back to the PRD — tell me what's wrong, or what to iterate |

On `1`, `2`, or `3`: the increment is closed. Plan `status: built` if it is not already. Beads epic closed. `index.json` keeps slug, summary, aliases, and doc versions. Do not write a feature status. Do not write `state.json`. Emit **INCREMENT CLOSED**.
On `1`: then push the branch and open a PR ready for review. `gh pr create` with no `--draft`. Title with no conventional-commit prefix. Body from the repo's PR template. Watch CI. Report the PR link and the CI state.
On `2`: same close, then push and open a draft. `gh pr create --draft`. Same title and body rules. Report the link.
On `3`: close and stop. Do not push. Do not open a PR.
On `4`: if they only picked `4`, ask what is wrong or what they want to iterate. Question table, write nothing, end the turn. If their words already say the change, read `${CLAUDE_PLUGIN_ROOT}/skills/hele/SKILL.md` and run its adjust phase on this same increment. Free text that describes a fix is this option, not option 2.

**Issues still open** — the same report frame, then the issues table from chat-reports.md. Do not rewind unless they pick `1`.

| Actions | Your call |
|---|---|
| 1 | ✏️ Back to the PRD — update it and run the flow again |
| 2 | ✏️ Tell me what you need |
</phase>

<rules>
- Never mark a flow verified without the human's explicit word.
- Never replace the three tables with a prose recap.
- Every path is a markdown link. Label is the file name. Target is the absolute path on one line.
- Never print the three tables for a flow that stays `verified`.
- A fix described on a flow stops the walk and rewinds to the PRD. Do not present the next flow in that turn.
</rules>
