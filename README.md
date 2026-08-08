<p align="center">
  <img src="assets/banner.svg" alt="hele — agents with memory · by Inventra" width="560" />
</p>

A feature-delivery harness for Claude Code, named after Helena. Every skill starts with `/hele-*`.

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
 │ Agents Cho, Van Pelt, Jane, Rigsby                   │
 │ ▸ code + passing tests                               │
 ╰──────────────────────────────────────────────────────╯
    │
    ▼
 ╭─ /hele-qa ──────────────────────────── SECOND LAYER ─╮
 │ Agent Wylie                                          │
 │ ▸ browser E2E vs stubs                               │
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
 ╰──────────────────────────────────────────────────────╯
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
| `[AGENT QA]` | Wylie | QA — writes TEST_STUBS (Fable 5), runs them in the browser (Sonnet 5) | split |

The human is the CEO/CTO: answers what agents cannot, unblocks the real world, orchestrates. Agents ask questions during planning phases — that is a feature, not a failure.

Models live in `.hele/settings.json` (`agents.models`) — judgment work (PRDs, plans, security, stub authoring) on the strong model, execution volume (engineers, QA runs) on Sonnet. Keys are role-prefixed so the role is obvious (`backend-cho`, `frontend-van-pelt`, `qa-wylie-stubs` / `qa-wylie-run`). Change per project: `hele config set agents.models.backend-cho opus`. Hightower and Lisbon run in the main session, so their model = the session model — run planning/build sessions on Fable 5.

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

Contributing to the CLI: edit `cli/src/`, then `npm run build` (esbuild, single-file bundle).

---

<p align="center">
  Created by <a href="https://inventra.sh"><strong>Inventra</strong> — Management for Small Business</a>
</p>
