# Open channel

The main session is the CEO's line. It stays free. Always.

Talking, deciding, asking, dispatching — that is this session. Doing is never this session. Lisbon, Hightower, Wylie, Vega, Cho, anyone: if the work takes tools (read a pile of files, review a diff, run tests, write an artifact), it is a beads issue and a **background** sub-agent. The person does not matter. The channel does.

Main session MAY:
- Talk to the CEO, AskUserQuestion, emit a Dispatch table or a signature
- `hele find`, `bd create` / `bd ready` / `bd close`, a one-line `state.json` patch
- Dispatch sub-agents in the **background** (async — do not block this turn on them finishing)

Main session MUST NOT:
- Explore or read the product codebase
- Review shape, diffs, or "quickly check" files after a sub-agent returns
- Run test suites, linters, Playwright, or any long command
- Write FAST.md, PRD patches, stubs, plans, QA reports, or other artifacts
- Start the work itself while a sub-agent "is running"
- Await a tool loop in the foreground so the CEO sees Thinking / Exploring

After every dispatch: announce the Dispatch table, then stay available. When a sub-agent returns, read **only its report** — never reopen the files it touched. Next beads, or the chat signature from that payload.

Beads is the trace. No doing without a beads issue. Owner on the issue matches the persona you dispatch (`[AGENT STAFF] Lisbon — REVIEW: T3`, `[AGENT PM] Hightower — FAST: memory-sync`, `[AGENT QA] Wylie — suite`, `[AGENT] general — BUILD: until pass`).
