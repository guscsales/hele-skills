# CLI Reference

The `hele` command-line companion. Node-based (Claude Code runs on Node, so the runtime is already there), bundled into a single file. The plugin needs no `npm install` at runtime.

Setup for your terminal:

```bash
cd cli && npm link        # from a clone, `hele <command>` anywhere
# once published: npm i -g hele-cli
```

Agents use the same CLI through the plugin's bundled copy. One deliberate rule: **agents search the feature index through `hele find`, never ad-hoc grep**. Deterministic search is what makes the anti-duplicate gate reliable.

Jump to: [find](#hele-find) · [config](#hele-config) · [install](#hele-install) · [ai](#hele-ai)

## hele find

Search the feature registry (`index.json`), the anti-duplicate gate.

```bash
hele find checkout discount      # scored matches
hele find inventário             # diacritics-aware, PT-BR aliases welcome
hele find --list                 # every registered feature
hele find --json estoque         # machine-readable (what agents consume)
```

- Scoring: exact slug (100) > exact alias (95) > substring (80) > fuzzy bigram match (≤75) > summary keywords (≤55). Threshold 40.
- Index misses fall back to content search across the feature docs, with a reminder that a content-only match means the index is missing aliases and should be fixed.
- No matches → explicitly safe to treat as a new feature.

## hele config

Read and write `settings.json` by dot path. JSON values are parsed when possible.

```bash
hele config list                                     # whole settings file
hele config get agents.maxParallel
hele config set agents.maxParallel 6
hele config set agents.models.backend-cho opus      # per-agent, both runtimes
hele config set agents.models.backend-cho.cursor composer
hele config add designSystem.paths "src/design"     # append to a list (deduped)
```

Model values are per-runtime objects (`{"claude-code": "sonnet", "cursor": "composer"}`). A plain string applies everywhere. Change one with `hele config set agents.models.backend-cho.claude-code opus`.

Defaults for a new project:

| Agent | Key | Claude Code | Cursor |
| --- | --- | --- | --- |
| Lisbon (Builder) | `staff-lisbon` | opus | grok |
| Lisbon, suite | `staff-lisbon-run` | sonnet | composer |
| Vega (Design) | `design-vega` | opus | opus |
| Hightower (DB) | `dba-hightower` | sonnet | grok |
| Cho (Backend) | `backend-cho` | sonnet | composer |
| Van Pelt (Frontend) | `frontend-van-pelt` | sonnet | composer |
| Jane (Security) | `security-jane` | opus | grok |
| Rigsby (Infra) | `infra-rigsby` | sonnet | composer |
| Wylie (Writing Stubs) | `qa-wylie-stubs` | opus | grok |
| Wylie (Running tests) | `qa-wylie-run` | sonnet | composer |
| Summer (Build checker) | `staff-lisbon-run` | sonnet | composer |

## hele install

Installs [beads](https://beads.gascity.com/) (`bd`) when the binary is missing, then initializes the project database in the current directory. Agent instruction files (`AGENTS.md`, `CLAUDE.md`, Claude/Codex integration) are left alone. `/hele-init` runs this command and does not call `bd` itself.

```bash
hele install            # binary if needed, then the project database
hele install --check    # just report whether bd is present (no init)
```

## hele ai

The interactive explainer: what the workflow is, who the agents are, what each phase produces. The overview diagram (one command `/hele`, lane detection, PRD and stubs in the same stop, QA screenshots, verify copies the report's tables) lives in `cli/src/flow-diagram.js` and must stay identical to the README "The flow" block.

```bash
hele ai            # the full pipeline, boxed
hele ai plan       # deep dive into one skill
hele ai qa
hele ai build
```

New to the harness? This is the guided tour.
