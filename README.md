<p align="center">
  <img src="assets/banner.svg" alt="hele — agents with memory" width="560" />
</p>

A feature-delivery harness for Claude Code. Every skill starts with `/hele-*`.

📚 **[Full documentation](.docs/README.md)** — introduction, getting started, skills and CLI references · [Changelog](CHANGELOG.md)

**Core belief:** agents have no memory — we build it for them. Every feature leaves behind documents that explain WHAT it is and WHY it exists, HOW it was built, and HOW to validate it. Future sessions read those documents instead of guessing.

Work is organized with [beads](https://beads.gascity.com/) (`bd`), a dependency-aware issue tracker built for agents: every planned task becomes a beads issue, the build loop dispatches whatever `bd ready` unblocks, and an interrupted session resumes exactly where it stopped — the state lives in beads, not in the chat.

## The flow

```
 ╭─ Human idea ───────────────────────────────── START ─╮
 │ You bring the input; the agents own the middle.      │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-feature ───────────────────────── WHAT & WHY ─╮
 │ Agent Hightower                                      │
 │ ▸ PRODUCT_DESCRIPTION.md                             │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-design ──────────────────────── HOW IT LOOKS ─╮
 │ Agent Vega                                           │
 │ ▸ DESIGN_SPEC.md                                     │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-plan ────────────────────────── HOW TO BUILD ─╮
 │ Agent Lisbon                                         │
 │ ▸ EXECUTION_PLAN.md + beads                          │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-stubs ────────────────────── HOW TO VALIDATE ─╮
 │ Agent Wylie                                          │
 │ ▸ TEST_STUBS.md                                      │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-build ───────────────────── THE CONSTRUCTION ─╮
 │ Agents Cho, Van Pelt, Jane, Rigsby                   │◄──┐
 │ ▸ code + passing tests                               │   │
 │ ▸ --from-qa → fixes the QA report                    │   │
 ╰──────────────────────────────────────────────────────╯   │
    │                                                       │
    ▼                                                       │
 ╭─ /hele-qa ──────────────────── SECOND LAYER ─╮           │
 │ Agent Wylie                                  │           │
 │ ▸ Playwright e2e suite                       │──┐        │
 ╰──────────────────────────────────────────────╯  │        │
    │                                              │        │
    │     ╭─ /hele-qa --generate-fixes-report ─╮   │        │
    │     │ reconstruct QA_REPORT → approve    │◄──┘        │
    │     ╰──────────────────┬─────────────────╯            │
    │                        └──────────────────────────────┘
    ▼
 ╭─ /hele-verify-work ───────────────────── HUMAN EYES ─╮
 │ Agent Wylie + you                                    │
 │ ▸ VERIFY.md                                          │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-retro ────────────────────── WHAT TO IMPROVE ─╮
 │ Agent Hightower                                      │
 │ ▸ RETRO.md + LEARNINGS.md                            │
 ╰──────────────────────────────────────────────────────╯

 ╭─ anytime ────────────────────────────────────────────╮
 │ /hele-init    bootstraps .hele/ (run once)           │
 │ /hele-status  the board: versions, drift, next       │
 │ /hele-fast    small low-risk change, one artifact    │
 ╰──────────────────────────────────────────────────────╯
```

### The fast lane

Not every change deserves seven phases. `/hele-fast` ships small, low-risk changes with proportional ceremony: triage → 1–3 beads tasks → TDD build → memory sync → full test suite once + affected e2e specs → a single `FAST.md` instead of four documents. Hard disqualifiers keep it honest — DB schema, security surface, new user-facing flows, or cross-feature impact exit to the full flow automatically. A behavior change still patches the PRD and stubs: the living docs never lie, no matter the lane.

## The vision

Everyone is talking about AI and coding agents. After some time reflecting, I reached a surprising conclusion: in terms of software engineering structure, nothing changed. What changed is the scale and who operates that structure. It used to be a boss with **10 humans on the team**. Now it's a programmer with **10 agents on the team**.

See if this looks like your context at a tech company.

There is a task. A product manager understands the what, the why, and how to validate that feature. Along the way they ask a lot of questions to the people involved: sales, the customer themselves, the company's CEO. They still don't talk to the software engineer. In the end, they consolidate everything into a file — known as a *"Product Requirement"*, *"PRD"*, *"Product Scope"*, *"Epic"*. It has plenty of fancy names.

Once that exists, the staff engineer (or the engineering manager) picks up the file, understands it (or goes back to product with questions) and, together with the team, splits the work across frontend, backend, design, infra — whatever it takes. Now the group has its tasks and executes like a conductor coordinating an orchestra. When someone gets stuck, it escalates to the manager, the staff engineer, or product. If that person can't solve it either, they go find the answers and come back with direction. The cycle repeats until what needs to be finished is finished.

At the end, a QA (or the CI itself) validates what was built: opens the browser, tests it. The product person does that job too. Bottom line: input ↔ output. Feature delivered.

The next step is talking about it. The famous retrospective. Like any decent agile team, at the end of the cycle everyone sits together and reviews what worked, what didn't, which instruction was ambiguous, which step caused rework, and plenty more. Everyone leaves knowing a bit more than when they came in, and the next cycle costs less.

In the world of AI and agents, why should this flow be any different? It shouldn't. The difference is that now that whole team is you and several Claude Codes running together.

## The team

| Tag | Agent | Role | Default model |
|---|---|---|---|
| `[AGENT PM]` | Hightower | Product Manager — owns PRDs, chases delivery, reports to the CEO | Fable 5 |
| `[AGENT STAFF]` | Lisbon | Staff Engineer — architecture, plans, staffs and routes the team | Fable 5 |
| `[AGENT DESIGN]` | Vega | UI/UX Designer — design-system map, design specs | Opus 5 |
| `[AGENT BE]` | Cho | Backend Engineer — TDD executor | Sonnet 5 |
| `[AGENT FE]` | Van Pelt | Frontend Engineer — implements from design specs, TDD | Sonnet 5 |
| `[AGENT DBA]` | Red John | DBA — schema guardian: DB change specs need your approval before any migration | Sonnet 5 |
| `[AGENT SEC]` | Jane | Security Engineer — threat-models risky increments | Fable 5 |
| `[AGENT INFRA]` | Rigsby | Infra Engineer — CI, environments, deploys | Sonnet 5 |
| `[AGENT QA]` | Wylie | QA — writes TEST_STUBS (Fable 5), turns them into Playwright e2e tests (Sonnet 5), hosts your guided verification | split |

The human is the CEO/CTO: answers what agents cannot, unblocks the real world, orchestrates. Agents ask questions during planning phases — that is a feature, not a failure.

Models live in `.hele/settings.json` (`agents.models`) — judgment work (PRDs, plans, security, stub authoring) on the strong model, execution volume (engineers, QA runs) on the cheap one. Keys are role-prefixed so the role is obvious (`backend-cho`, `frontend-van-pelt`, `qa-wylie-stubs` / `qa-wylie-run`), and each value is per-runtime: `{"claude-code": "sonnet", "cursor": "grok"}`. Change per project: `hele config set agents.models.backend-cho.claude-code opus`. Hightower and Lisbon run in the main session, so their model = the session model — run planning/build sessions on the strong model.

## Cursor

The harness also runs in Cursor — same skills, same memory, generated as a native adapter. The adapter ships inside the CLI — install it into any project with one command:

```bash
hele cursor
```

That writes `.cursor/`: every `/hele-*` skill as a Cursor command, every persona as a native agent definition (`.cursor/agents/`, model preconfigured — strong work on fable/opus, execution volume on grok), templates and the hele CLI itself bundled under `.cursor/hele/`. (`node scripts/build-cursor.mjs` regenerates the same adapter into `dist/cursor/` for contributors; copying that `.cursor` folder works too.)

`.hele/` is shared between runtimes — start a feature in Claude Code, continue it in Cursor, same memory. The adapter is generated from the core: never edit `dist/cursor` by hand.

## Project layout (created by /hele-init)

```
.hele/
  settings.json            # models, max agents, design system paths, everything
  state.json               # active feature + increment + phase
  index.json               # registry of ALL features (slug, aliases, versions, status)
  LEARNINGS.md             # memory promoted from retros — every skill loads it
  DESIGN_SYSTEM.md         # Vega's compact map of the design system (when one exists)
  DATABASE.md              # Red John's living schema map (mermaid ER, kept current)
  features/
    <slug>/
      PRODUCT_DESCRIPTION.md   # living doc — current state, patch versions only
      TEST_STUBS.md            # living doc — regression contract, accumulates
      increments/
        001-<name>/
          EXECUTION_PLAN.md    # per-increment, frozen after build
          DESIGN_SPEC.md       # per-increment, when UI is involved
          DB_CHANGES.md        # per-increment, when the DB is touched — blocking approval
          QA_REPORT.md         # per-increment, prose record of every QA run
          VERIFY.md            # per-increment, guided human verification record
          RETRO.md             # per-increment
```

## Versioning rules

- Docs carry `version` in frontmatter plus a `## Changelog` section. **Patch-only** (1.0 → 1.1 → 1.2).
- A ground-up rebuild is **a new feature folder** (`checkout-discount-v2`), never a major bump.
- Derived docs carry `based_on: PRODUCT_DESCRIPTION vX.Y` — `/hele-status` flags stale docs mechanically.
- `PRODUCT_DESCRIPTION` is written as **state, not history**: superseded rules are rewritten, not appended. History lives in the changelog and git.

## Finding features (anti-duplicate)

Skills never grep ad hoc. They search through `hele find` against `index.json` (slug, title, aliases in EN/PT, summary) with content fallback — and `/hele-feature` has a hard gate: no new feature is created before searching and confirming with the CEO that it is not an update to an existing one.

## Install

```bash
claude plugin marketplace add guscsales/hele-skills
claude plugin install hele-skills@hele
```

Working from a local clone (contributors):

```bash
claude plugin marketplace add /path/to/hele-skills
claude plugin install hele-skills@hele
```

## Repo layout

```
.claude-plugin/     plugin + marketplace manifests
skills/             one folder per /hele-* skill
agents/             the personas (shared by all skills)
templates/          output templates — file artifacts AND chat report formats
references/         standards the agents cite
cli/                the hele CLI — Node + commander (src/ + bundled dist/)
scripts/hele        thin shim: skills call ${CLAUDE_PLUGIN_ROOT}/scripts/hele
scripts/build-cursor.mjs   generates the Cursor adapter from the core
dist/cursor/        generated Cursor adapter (.cursor/ to copy into a project)
```

## CLI

Node CLI built with [commander](https://github.com/tj/commander.js) — Claude Code runs on Node, so every hele user already has the runtime. The bundle (`cli/dist/hele.cjs`) is committed: the plugin needs no `npm install` at runtime.

```
hele ai [skill]          understand the AI workflow — skills, agents, artifacts
hele find <query...>     search the feature index (agents MUST use this, never ad-hoc grep)
hele find --list         list all registered features
hele config get|set|add  read/write .hele/settings.json by dot path
hele install [--check]   install the beads CLI (brew or official script)
hele cursor [--dir]      install the Cursor adapter into a project
hele --help              banner + full listing
```

Use it directly in your terminal:

```bash
cd cli && npm link        # dev setup — `hele <command>` anywhere
# once published: npm i -g hele-cli
```

Contributing to the CLI: edit `cli/src/`, then `npm run build` (esbuild, single-file bundle).
