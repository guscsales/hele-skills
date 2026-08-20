<p align="center">
  <img src="assets/banner.svg" alt="hele — agents with memory" width="560" />
</p>

A feature-delivery harness for Claude Code. Every skill starts with `/hele-*`.

📚 **[Full documentation](.docs/README.md)** — introduction, getting started, skills and CLI references · [Changelog](CHANGELOG.md)

**Core belief:** agents have no memory — we build it for them. Every feature leaves behind documents that explain WHAT it is and WHY it exists, HOW it was built, and HOW to validate it. Future sessions read those documents instead of guessing.

Work is organized with [beads](https://beads.gascity.com/) (`bd`), a dependency-aware issue tracker built for agents: every planned task becomes a beads issue, the build loop dispatches whatever `bd ready` unblocks, and an interrupted session resumes exactly where it stopped — the state lives in beads, not in the chat.

## The vision

Everyone is talking about AI and coding agents. After some time reflecting, I reached a surprising conclusion: in terms of software engineering structure, nothing changed. What changed is the scale and who operates that structure. It used to be a boss with **10 humans on the team**. Now it's a programmer with **10 agents on the team**.

See if this looks like your context at a tech company.

There is a task. A product manager understands the what, the why, and how to validate that feature. Along the way they ask a lot of questions to the people involved: sales, the customer themselves, the company's CEO. They still don't talk to the software engineer. In the end, they consolidate everything into a file — known as a *"Product Requirement"*, *"PRD"*, *"Product Scope"*, *"Epic"*. It has plenty of fancy names.

Once that exists, the staff engineer (or the engineering manager) picks up the file, understands it (or goes back to product with questions) and, together with the team, splits the work across frontend, backend, design, infra — whatever it takes. Now the group has its tasks and executes like a conductor coordinating an orchestra. When someone gets stuck, it escalates to the manager, the staff engineer, or product. If that person can't solve it either, they go find the answers and come back with direction. The cycle repeats until what needs to be finished is finished.

At the end, a QA (or the CI itself) validates what was built: opens the browser, tests it. The product person does that job too. Bottom line: input ↔ output. Feature delivered.

The next step is talking about it. The famous retrospective. Like any decent agile team, at the end of the cycle everyone sits together and reviews what worked, what didn't, which instruction was ambiguous, which step caused rework, and plenty more. Everyone leaves knowing a bit more than when they came in, and the next cycle costs less.

In the world of AI and agents, why should this flow be any different? It shouldn't. The difference is that now that whole team is you and several Claude Codes running together.

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
 │ Agent Vega · skip when no new screens                │
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
 │ /hele-iterate post-build discovery, same increment   │
 │ /hele-fast    small low-risk change, one artifact    │
 ╰──────────────────────────────────────────────────────╯
```

### The iterate loop

`/hele-iterate` is the complementary loop to the whole flow. You are already past build - QA, verify, or any post-build phase - and you just found an interaction you did not plan for. You need the affected slice re-run: not a new increment, not the full formal cycle.

Agent Lisbon is the boss. She classifies the discovery and dispatches only the people who must move, via beads on the same epic. She does not rewrite the frozen `EXECUTION_PLAN`.

- If the living PRD would lie after the change, she calls Agent Hightower to patch it — even when you never said "update the PRD".
- Vega is called only when you ask for a new screen (PT or EN: `tela`, `new screen`, `we need a UI for this`).
- New or rewritten test stubs go back to `/hele-qa`. If stubs did not change, the loop returns to `/hele-verify-work`.
- Schema and security stay in the loop with their usual gates (Red John, Jane). They are not hard refusals here.

The increment stays open. You can iterate again.

```
you: "wait — I forgot this", "actually this should do X" or similar
        │
        ▼
  /hele-iterate   (Agent Lisbon)
        │
        ├─ bug              → beads → Agent Cho / Agent Van Pelt / Agent Jane
        ├─ behavior         → Agent Hightower (patch PRD) → Agent Wylie (test stubs) → engineers
        ├─ tests only       → Agent Wylie
        ├─ new screen       → Agent Vega
        └─ schema/security  → Agent Red John / Agent Jane
        │
        ▼
  re-verify only the affected surface
        │
        └── can run again on the same increment
```

### The fast lane

Not every change deserves seven phases. `/hele-fast` ships a small, low-risk change from scratch — a new increment, it finds the right place to write the PRD and do the thing.

Triage → 1–3 tasks → TDD build → memory sync → full suite once + affected e2e specs.

Hard disqualifiers keep it honest. Any of these exits to the full flow automatically: DB schema, security surface, new user-facing flow, or cross-feature impact. A behavior change still patches the PRD and stubs. The living docs never lie, no matter the lane.

```
you: "fix the empty-state", "change this to be X", or similar
        │
        ▼
  /hele-fast   (Agents Hightower + Lisbon)
        │
        ├─ schema / security / new flow / cross-feature  → full cycle
        ├─ bugfix      → 1–3 agents → TDD → suite (docs stay)
        └─ behavior    → 1–3 agents → TDD → patch PRD + stubs → suite
        │
        ▼
  one FAST.md
```

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

If `.hele/settings.json` already exists, `hele cursor` also syncs `agents.models` for the Cursor runtime (adds missing agent keys / `cursor` values from template defaults; expands plain strings to per-runtime objects; never overwrites an existing `cursor` choice).

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
- `PRODUCT_DESCRIPTION` is written as **state, not history**: superseded rules are rewritten, not appended. History lives in the changelog and git. XML section tags are the AI contract; inside them the PRD is markdown (headings, tables, named mermaid) so a human can review it in preview. Other living/per-increment artifacts (plans, specs, stubs, DB changes) stay XML-first — those are for agents.

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
templates/          output templates — file artifacts AND chat report tables
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

Contributing: edit `cli/src/`, `agents/`, `skills/`, or `templates/`, then rebuild **both** committed bundles — `cd cli && npm run build` (`cli/dist/hele.cjs`) and `node scripts/build-cursor.mjs` (`dist/cursor/`). CI fails if either is stale.
