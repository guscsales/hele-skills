# Open channel

The main session is the human's line. It stays free. Talking, deciding, asking, and dispatching happen here. Doing does not.

Lisbon, Wylie, Vega, Cho, Hightower, anyone: if the work takes tools (read a pile of files, review a diff, run tests, write a long artifact), it is a **background** sub-agent. Questions to the human stay in this session, as one Question pack after she has read matching PRDs. Reading those `PRODUCT_DESCRIPTION.md` files before the pack is talking, not exploring. Product-code truth is a background specialist — do not ask the human what the code already does. The PRD stop is Lisbon talking here; the heavy study behind a plan, a review, or a suite is background Lisbon.

Main session may:
- Talk to the human, ask questions, emit the Dispatch announcement or a signature
- `hele find`, reading the effective output (`hele config effective output`), and short Beads reads or updates
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

1. Reuse or claim an existing bead when available. Create one for independent work.
2. Spawn the sub-agent in the **background**. Never block this turn.
   - **Cursor:** Task tool with `run_in_background: true`. A spawn that leaves the main chat on "Waiting for subagent" is a bug.
   - **Claude Code:** Agent tool, async. Do not block this turn.
3. Record the handoff on its bead when applicable, then emit the Dispatch announcement at the effective `output.sections.dispatch` level (the Dispatch announcement block of `templates/chat-reports.md`; read the level with `hele config effective output`, see `## Output`). Every dispatch is announced at every level with its agent tag, its model and its work. One prose line after it, then nothing else.
   - English chat: `Thread is opened, you can talk`
   - Portuguese chat: `A thread continua aberta, pode falar.`
   - Any other chat language: one sentence with that meaning.
   Copy it. Never paraphrase. Never "fio". Never "O fio fica aberto". Never "I'm here" / "Estou aqui". Never add who is working.
4. **END THE TURN.** Do not wait for the worker.

Forbidden after a spawn: waiting, polling, starting the next phase in this same turn, exploring "while you wait".

A later turn resumes when a sub-agent report arrives, or the human speaks. If they spoke while work is in flight, **answer them first**. Then, if a report is in, read only that report and dispatch the next work the same way.
</turn>

Beads are the task trace for the full path of Feature, Fast, Bugfix, and an adjustment of the current increment on the full path. The Tweak lane and the direct path have none: one engineer, no plan. Owner matches the persona (`[AGENT DBA] Hightower — DB_CHANGES`, `[AGENT QA] Wylie — QA: increment NNN`, `[AGENT BE] Cho — T3`, `[AGENT] Summer — BUILD: until pass`).
