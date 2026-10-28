# Open channel

The main session is the human's line. It stays free. Talking, deciding, asking, and dispatching happen here. Doing does not.

Lisbon, Wylie, Vega, Cho, Hightower, anyone: if the work takes tools (read a pile of files, review a diff, run tests, write a long artifact), it is a **background** sub-agent. Questions to the human stay in this session. The PRD stop is Lisbon talking here; the heavy study behind a plan, a review, or a suite is background Lisbon.

Main session may:
- Talk to the human, ask questions, emit a Dispatch table or a signature
- `hele find`, `bd create` / `bd ready` / `bd close`
- Dispatch sub-agents in the **background**

Main session must not:
- Explore or read the product codebase
- Review a diff after a sub-agent returns
- Run test suites, linters, Playwright, or any long command
- Start the work itself while a sub-agent is running
- Await, poll, or stay on "Waiting for subagent" after a spawn
- Write `state.json`, a feature status, `NOTES.md`, `LEARNINGS.md`, or `findings.json`

<turn>
A dispatch turn has exactly four steps, then you **STOP**:

1. `bd create` when the work needs a bead.
2. Spawn the sub-agent in the **background**. Never block this turn.
   - **Cursor:** Task tool with `run_in_background: true`. A spawn that leaves the main chat on "Waiting for subagent" is a bug.
   - **Claude Code:** Agent tool, async. Do not block this turn.
3. Emit the Dispatch table. One prose line: the thread stays open while the agents work. The human can talk.
4. **END THE TURN.** Do not wait for the worker.

Forbidden after a spawn: waiting, polling, starting the next phase in this same turn, exploring "while you wait".

A later turn resumes when a sub-agent report arrives, or the human speaks. If they spoke while work is in flight, **answer them first**. Then, if a report is in, read only that report and dispatch the next work the same way.
</turn>

Beads are the task trace for Feature, Fast, Bugfix, and an adjustment of the current increment. Owner matches the persona (`[AGENT] Lisbon — REVIEW: T3`, `[AGENT DBA] Hightower — DB_CHANGES`, `[AGENT QA] Wylie — QA: increment NNN`, `[AGENT BE] Cho — T3`, `[AGENT] Summer — BUILD: until pass`).
