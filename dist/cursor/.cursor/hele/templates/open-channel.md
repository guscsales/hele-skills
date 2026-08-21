# Open channel

The main session is the CEO's line. It stays free. Always. A worker Lisbon in a parallel agent does not close this line.

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
- Await, poll, or stay in Thinking / Exploring / "Waiting for subagent" after a spawn

<turn>
A dispatch turn has exactly four steps, then you **STOP**:

1. `bd create` (if needed)
2. Spawn the sub-agent in the **background** — never foreground, never blocking.
   - **Cursor:** Task tool with `run_in_background: true`. A spawn that leaves the main chat on "Waiting for subagent" is a bug. You already failed the open channel.
   - **Claude Code:** Agent tool, async / do not block this turn.
3. Emit the Dispatch table. One prose line: you are here, they can talk.
4. **END THE TURN.** Do not wait for the worker. You will be notified when it finishes.

Forbidden after a spawn: waiting, polling, Await, "check if Lisbon finished", starting the next phase in this same turn, exploring "while you wait".

A later turn resumes: a sub-agent report arrived, **or** the CEO spoke. If they spoke while work is in flight, **answer them first** — the line stays open. Then, if a report is in, read only that report and dispatch the next bead the same way (spawn, announce, stop).
</turn>

Beads is the trace. No doing without a beads issue. Owner on the issue matches the persona you dispatch (`[AGENT STAFF] Lisbon — REVIEW: T3`, `[AGENT PM] Hightower — FAST: memory-sync`, `[AGENT QA] Wylie — suite`, `[AGENT] general — BUILD: until pass`).
