![hele — agents with memory](assets/banner.svg)

A feature-delivery harness for Claude Code. One command: `/hele-yolo`. It picks the lane and runs the rest.

📚 **[Full documentation](.docs/README.md)** with introduction, getting started, skills and CLI references · [Changelog](CHANGELOG.md)

**Core belief:** agents have no memory, so we build it for them. Every feature leaves behind documents that explain WHAT it is and WHY it exists, HOW it was built, and HOW to validate it. Future sessions read those documents instead of guessing.

Work is organized in tasks using [beads](https://beads.gascity.com/) (`bd`), [Steve Yegge](https://github.com/steveyegge)'s dependency-aware issue tracker built for agents. Hele runs on it under the hood: every planned task becomes a beads issue, the build loop dispatches whatever `bd ready` unblocks, and an interrupted session resumes exactly where it stopped, the state lives in beads, not in the chat, allowing work with multiple sub-agents in an organized way.

## How you use it

One command called `/hele-yolo <your prompt>`. The Agent Lisbon detects the lane and runs the rest, the YOLO works well in different situations, here are the possibilities:

| Lane             | When                                                                  | What happens                                                                                                                                                                                                     |
| ---------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Feature Lane | The product does not do this yet. This part of the app doesn't exist. | Questions until none remain, then PRD + stubs + increment `001`, design when there is a new screen (optional), and the team plans, builds, and auto-verifies on its own providing you screenshots of the result. |
| The Fast Lane    | A small addition to what already exists, a product increment.         | Asks questions if necessary, then a PRD patch an update and create a new increment for your feature.                                                                                                             |
| The Bugfix Lane  | Today's behavior is wrong.                                            | Asks questions if necessary, reconciles the docs, and follows the same spine of the fast lane.                                                                                                                   |
| The Open Lane    | Research, review, investigation, design exploration, anything else.   | A conversation, with no PRD, until you pick **Let's formalize or say you're done.**                                                                                                                              |

## Install

```bash
claude plugin marketplace add guscsales/hele-skills
claude plugin install hele-skills@hele -s project   # this repo, shared with the team
```

## The vision

Everyone is talking about AI and coding agents. After some time reflecting, I reached a surprising conclusion: in terms of software engineering structure, nothing changed. What changed is the scale and who operates that structure. It used to be a boss with **10 humans on the team**. Now it's a programmer with **10 agents on the team**.

See if this looks like your context as a Software Engineer at a tech company:

> There is a task. A product manager understands the what, the why, and how to validate that feature. Along the way they ask a lot of questions to the people involved: sales, the customer themselves, the company's CEO and so on. In many cases they still don't talk to you directly. In the end, the PM consolidate everything into a file known as a *"Product Requirement"*, *"PRD"*, *"Product Scope"*, *"Epic"*. It has plenty of fancy names.
>
> Once that exists, the staff engineer (or the engineering manager) picks up the file, understands it (or goes back to product with questions) and, together with the team, splits the work across frontend, backend, design, infra - whatever it takes. Now the group has its tasks and executes like a conductor coordinating an orchestra. When someone gets stuck, it escalates to the manager, the staff engineer, or product. If that person can't solve it either, they go find the answers and come back with direction. The cycle repeats until what needs to be done is finally done.
>
> At the end, a QA person (or the CI itself) validates what was built: opens the browser, tests it. The product person does that job too. Bottom line: input ↔ output. Feature delivered.
>
> The next step is talking about it. The famous retrospective. Like any decent agile team, at the end of the cycle everyone sits together and reviews what worked, what didn't, which instruction was ambiguous, which step caused rework, and plenty more. Everyone leaves knowing a bit more than when they came in, and the next cycle costs less.
>
> We repeat it from the beginning.

Going back to the world of AI and agents. My question is: why should this flow be any different? It shouldn't. The difference is that now that whole team is you and several Claude Codes (or other code agents) running together.

Hele Skills Solves That. Welcome to you next level of creation.

## The flow - A single command `/hele-yolo`, the rest comes from the agent.

```
 ╭─ You ──────────────────────────────────────── START ─╮
 │ /hele-yolo "what you need"                           │
 │ One command. It picks the lane and runs the rest.    │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ It detects the lane ────────────────────────────────╮
 │ Feature   questions, then PRD + stubs + 001          │
 │ Fast      questions when a rule would change         │
 │ Bugfix    questions only when the rule changes       │
 │ Open      research, review, investigation, design    │
 ╰──────────────────────────────────────────────────────╯
    │  feature / fast / bugfix — yolo runs these
    ▼
 ╭─ questions ─────────────────────────────────── STOP ─╮
 │ Agent Hightower                                      │
 │ ▸ answer every product question before a write       │
 │ ▸ a recommendation is an option, not a rule          │
 ╰──────────────────────────────────────────────────────╯
    │  zero unanswered product questions
    ▼
 ╭─ PRD + stubs ──────────────────────────── SAME STOP ─╮
 │ Agent Hightower + Agent Wylie                        │
 │ ▸ PRODUCT_DESCRIPTION.md + TEST_STUBS.md             │
 │ ▸ PRD delta: was → now, full PWD paths               │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ design (only if new screens) ──────────────── STOP ─╮
 │ Agent Vega · skipped when no new screens / no design │
 │ ▸ DESIGN_SPEC.md                                     │
 ╰──────────────────────────────────────────────────────╯
    │  approved PRD, and design when this stop happened
    ▼
 ╭─ agents ─────────── plan · build · auto-verify ──────╮
 │ Lisbon · EXECUTION_PLAN.md + beads · no sign-off     │
 │ Cho, Van Pelt, Jane, Rigsby · code + passing tests   │◄──┐
 │ Wylie · Playwright + screenshots + QA_REPORT.md      │   │
 ╰──────────────────────────────────────────────────────╯   │
    │ green                                                 │
    │     ╭─ QA red / generate-fixes-report ───────────╮    │
    │     │ approve fixes → build + auto-verify again  │────┘
    │     ╰────────────────────────────────────────────╯
    ▼
 ╭─ manual verify ─────────────── YOUR NEXT PROMPT ─────╮
 │ Agent Wylie + you                                    │
 │ ▸ same steps + data from QA_REPORT → VERIFY.md       │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ close ────────────────────────────────────────────╮
 │ Options: Work done · iterate · draft PR            │
 │ Findings written during the talk → findings.json   │
 ╰────────────────────────────────────────────────────╯

 ╭─ always ───────────────────────────────────────────╮
 │ First time in a repo → init runs by itself         │
 │ Stops: questions, PRD, design, DB schema,          │
 │ QA red, verify, close. The plan is for agents.     │
 │ Open lane stays a conversation until formalize     │
 │ /hele-status — the board (read-only)               │
 ╰────────────────────────────────────────────────────╯
```

### Output Is Everything: instead of skills you have "stops"

All the outputs are well defined, you’re not walking blindly, you know what’s happening. It can be a question, it can be reviewing the PRD or the QA Report. Most importantly, you know what your next decision is.

Real stops end in numbered options: `1` approves and starts the next phase; `2` is tell me what you need; and other dynamic options are generated according the context. When you finish a open lane the close stops include **Work done**, in case you don't want to continue or **Let's formalize in a real PRD**, in case you want to transform that research in something real.

Each session learns something and iterate it in a `LEARNINGS.md` file. The QA agent writes a human-readable `QA_REPORT.md`: the screen before this increment and after it, then the replay. The proof of validation using screenshots for each necessary use case. 

In a manual verification you as human replays those same steps, using clear data with clear instructions. Every file path in chat is the full working-directory path. If it's correct, you move to the next verification, if need fix you tell and verify again, until the loop is completed.

### "hmm, I forgot this actually": The iterate loop

Already past build and you found something you did not plan for? You can open a new PR, but sometimes you just want to fix at time. 

Still under `/hele-yolo` session the Agent Lisbon folds it back into the open increment via beads, not a new Feature lane, but a complement, even when you discover this in the middle of the manual verification.

```
you: "wait — I forgot this", or pick iterate on the close Options
        │
        ▼
  iterate   (Agent Lisbon)
        │
        ├─ bug / behavior / tests / new screen / schema / security
        ▼
  re-verify only the affected surface
```

## The agent team

You talk to Lisbon (staff) and Hightower (PM) in the main session. The heavy work like review, the suite, artifacts, reading code goes to background subagents. Here's the team:

| Agent     | Role                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hightower | The Product Manager. Owns the PRD, chases delivery.                                                                                                      |
| Lisbon    | The Staff Engineer. Takes care of architecture, the plan, dispatches the team and obey the defined rules.                                                |
| Vega      | The Designer. UI spec when there is a new screen, you can connect to Figma, Paper or even use some frontend skill to create screens. It's also optional. |
| Cho       | The Backend Engineer, it codes all the backend side of the feature.                                                                                      |
| Van Pelt  | The Frontend Engineer, it codes all the frontend from the design spec.                                                                                   |
| Red John  | The DBA Engineer. A schema change stops and asks for your approval before any migration.                                                                 |
| Jane      | The Security Engineer. Threat model on risky increments using specific skills of security.                                                               |
| Rigsby    | The Infra Engineer. Takes care of CI, deploys, YAML files and similar.                                                                                   |
| Wylie     | The QA Engineer. Writes the stubs, runs Playwright, takes the screenshots, hosts the guided verification writes the QA Report for the human.             |
| Summer    | The "Build until pass" agent. Fixes the project compile until it is green, fixing typescript issues and things related.                                  |

Agents ask questions during planning phases, the human answers what agents cannot, unblocks the real world, provide the most creative part, and picks the numbered options. You drive the creation, the agents transform in reality.

Defaults live in `.hele/settings.json` (`agents.models`). Judgment work sits on the strong model; execution volume (engineers, QA runs, the BUILD suite, Summer's compile-until-green) sits on the cheap one. Each value is per runtime. Change one with `hele config set agents.models.backend-cho.claude-code opus`.

| Agent                  | Key                 | Claude Code | Cursor   |
| ---------------------- | ------------------- | ----------- | -------- |
| Hightower (PM)         | `pm-hightower`      | opus        | grok     |
| Lisbon (Staff)         | `staff-lisbon`      | opus        | grok     |
| Lisbon, suite (Coding) | `staff-lisbon-run`  | sonnet      | composer |
| Vega (Design)          | `design-vega`       | opus        | opus     |
| Red John (DB)          | `dba-red-john`      | sonnet      | grok     |
| Cho (Backend)          | `backend-cho`       | sonnet      | composer |
| Van Pelt (Frontend)    | `frontend-van-pelt` | sonnet      | composer |
| Jane (Security)        | `security-jane`     | opus        | grok     |
| Rigsby (Infra)         | `infra-rigsby`      | sonnet      | composer |
| Wylie (Writing Stubs)  | `qa-wylie-stubs`    | opus        | grok     |
| Wylie (Testing Stubs)  | `qa-wylie-run`      | sonnet      | composer |
| Summer (Build Checker) | `staff-lisbon-run`  | sonnet      | composer |

## Project layout (created by /hele-init)

```
.hele/
  settings.json            # models, max agents, design system paths, everything
  state.json               # active feature + increment + phase
  index.json               # registry of ALL features (slug, aliases, versions, status)
  LEARNINGS.md             # memory promoted from session findings — every skill loads it
  findings.json            # append-only session findings written during /hele-yolo
  DESIGN_SYSTEM.md         # Vega's compact map of the design system (when one exists)
  DATABASE.md              # Red John's living schema map (mermaid ER, kept current)
  features/
    <slug>/
      PRODUCT_DESCRIPTION.md   # living doc — current state, patch versions only
      TEST_STUBS.md            # living doc — written with the PRD; QA runs the increment slice
      increments/
        001-<name>/
          EXECUTION_PLAN.md    # per-increment, frozen after build
          DESIGN_SPEC.md       # per-increment, when UI is involved
          DB_CHANGES.md        # per-increment, when the DB is touched — blocking approval
          QA_REPORT.md         # human-readable QA run + screenshots/
          VERIFY.md            # guided replay of the QA report
          screenshots/         # up to 10 settled PNGs, compressed with sharp; overflow is chat-only under .hele/tmp/captures/
```

## Versioning rules

- Docs carry `version` in frontmatter plus a `## Changelog` section. **Patch-only** (1.0 → 1.1 → 1.2).
- A ground-up rebuild is **a new feature folder**, never a major bump.
- Derived docs carry `based_on: PRODUCT_DESCRIPTION vX.Y` — `/hele-status` flags stale docs mechanically.
- `PRODUCT_DESCRIPTION` is written as **state, not history**: superseded rules are rewritten, not appended. History lives in the changelog and git. Like `QA_REPORT.md`, the `PRODUCT_DESCRIPTION.md` is human-readable markdown. Sections are `## What`, `## Why`, `## Flows`, `## Business rules`, and so on.

## Finding features (anti-duplicate)

Skills never grep ad hoc. They search through `hele find` against `index.json` (slug, title, aliases in EN/PT, summary) with content fallback, and the Feature lane has a hard gate: no new feature is created before searching and confirming with the human that it is not an update to an existing one.

## Working from local clone (contributors)

```bash
claude plugin marketplace add /path/to/hele-skills
claude plugin install hele-skills@hele -s project
```

## CLI

Node CLI built with [commander](https://github.com/tj/commander.js) — Claude Code runs on Node, so every hele user already has the runtime. The bundle (`cli/dist/hele.cjs`) is committed: the plugin needs no `npm install` at runtime.

```
hele ai [skill]          understand the AI workflow — skills, agents, artifacts
hele find <query...>     search the feature index (agents MUST use this, never ad-hoc grep)
hele find --list         list all registered features
hele config get|set|add  read/write .hele/settings.json by dot path
hele install [--check]   install the beads CLI (brew or official script)
hele --help              banner + full listing
```

Use it directly in your terminal:

```bash
cd cli && npm link        # dev setup — `hele <command>` anywhere
# once published: npm i -g hele-cli
```

Contributing: edit `cli/src/`, then rebuild and commit `cli/dist/hele.cjs` (`cd cli && npm run build`). CI fails if that bundle is stale. The plugin skills live in `skills/` / `agents/` / `templates/` — Claude Code only.
