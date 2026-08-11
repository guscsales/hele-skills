# CLI Reference

The `hele` command-line companion. Node-based (Claude Code runs on Node, so the runtime is already there), bundled into a single file — the plugin needs no `npm install` at runtime.

Setup for your terminal:

```bash
cd cli && npm link        # from a clone — `hele <command>` anywhere
# once published: npm i -g hele-cli
```

Agents use the same CLI through the plugin's bundled copy. One deliberate rule: **agents search the feature index through `hele find`, never ad-hoc grep** — deterministic search is what makes the anti-duplicate gate reliable.

Jump to: [find](#hele-find) · [config](#hele-config) · [install](#hele-install) · [cursor](#hele-cursor) · [ai](#hele-ai)

## hele find

Search the feature registry (`index.json`) — the anti-duplicate gate.

```bash
hele find checkout discount      # scored matches
hele find inventário             # diacritics-aware, PT-BR aliases welcome
hele find --list                 # every registered feature
hele find --json estoque         # machine-readable (what agents consume)
```

- Scoring: exact slug (100) > exact alias (95) > substring (80) > fuzzy bigram match (≤75) > summary keywords (≤55). Threshold 40.
- Index misses fall back to content search across the feature docs — with a reminder that a content-only match means the index is missing aliases and should be fixed.
- No matches → explicitly safe to treat as a new feature.

## hele config

Read and write `settings.json` by dot path. JSON values are parsed when possible.

```bash
hele config list                                     # whole settings file
hele config get agents.maxParallel
hele config set agents.maxParallel 6
hele config set agents.models.backend-cho opus      # per-agent model
hele config add designSystem.paths "src/design"     # append to a list (deduped)
```

Model values are per-runtime objects (`{"claude-code": "sonnet", "cursor": "grok"}`); a plain string applies everywhere.

## hele install

Installs [beads](https://beads.gascity.com/) (`bd`), the issue tracker the harness runs on.

```bash
hele install            # via Homebrew when available, official script otherwise
hele install --check    # just report whether bd is present
```

## hele cursor

Installs the Cursor adapter into a project — the whole harness, translated.

```bash
hele cursor                     # into the current directory
hele cursor --dir ~/my-app      # into another project
```

Writes `.cursor/`: every skill as a Cursor command, every persona as a native agent definition with its model preconfigured, templates and the CLI itself under `.cursor/hele/`. The assets ship embedded in the CLI bundle — no network, no repo checkout needed. Both runtimes share the same `.hele/` folder; you can switch tools mid-feature.

## hele ai

The interactive explainer — what the workflow is, who the agents are, what each phase produces. The overview diagram (including the QA ↔ build fix loop: `--generate-fixes-report` → `--from-qa`) lives in `cli/src/flow-diagram.js` and must stay identical to the README "The flow" block.

```bash
hele ai            # the full pipeline, boxed
hele ai plan       # deep dive into one skill
hele ai qa
hele ai build
```

New to the harness? This is the guided tour.
