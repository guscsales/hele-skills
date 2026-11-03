# Configuration

Every default hele ships with lives in [`core/default-config.json`](../core/default-config.json). That file is the source. A missing key in a project resolves to the value written there. Skills point at the file. They do not restate the number.

`/hele-init` copies it to `.hele/settings.json`, then applies the design answer. The project file is what you change, and what `hele config` reads and writes. A key you have set wins. A key that is not in the project file still uses `core/default-config.json`.

Re-run `/hele-init` on a project that already has `.hele/` to copy any new key from the default file. A value you already set stays.

If this page and the JSON disagree, the JSON is the one a missing key resolves to.

## Change a value

`hele config` edits `.hele/settings.json` by dot path. JSON values are parsed when possible. The command list is [hele config](cli.md#hele-config).

```bash
hele config list                                          # the project file
hele config get qa.maxScreenshots
hele config set qa.maxScreenshots 20
hele config set agents.models.backend-cho.claude-code opus
hele config set agents.models.backend-cho.cursor composer
hele config add designSystem.paths "src/design"           # append to a list (deduped)
```

A model value is per runtime (`{"claude-code": "sonnet", "cursor": "composer"}`). A plain string applies to both. `inherit`, or a runtime key that is missing, means the session model.

## Keys

The values below are the ones in [`core/default-config.json`](../core/default-config.json) today. Change the file, then this page.

### `version`

`1`. Settings schema. Not the plugin version.

### `language`

| Key | Default | What it does |
| --- | --- | --- |
| `artifacts` | `en` | Language of the files hele writes (PRD, plan, QA report, verify). |
| `chat` | `auto` | Language of the conversation. `auto` follows the human. |

### `agents.maxParallel`

`4`. How many background workers stay in flight at once. Two tasks that share a file still never run together, even when this number would allow it.

### `agents.models`

Which model each role uses. Judgment work sits on the strong model. Execution volume (engineers, QA runs, the BUILD suite, Summer's compile-until-green) sits on the cheap one. The key matches the persona filename, except Wylie, who has two: writing stubs and running them. Summer uses `staff-lisbon-run`.

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
| Wylie (Writing stubs) | `qa-wylie-stubs` | opus | grok |
| Wylie (Running tests) | `qa-wylie-run` | sonnet | composer |
| Summer (Build checker) | `staff-lisbon-run` | sonnet | composer |

### `beads.enabled`

`true`. Beads is the task tracker. Plan and build use it.

### `designSystem`

| Key | Default | What it does |
| --- | --- | --- |
| `enabled` | `true` | Vega specs new screens when this is not `false`. A missing key means she is in. Init asks once, and writes the answer here. |
| `paths` | `[]` | Design-system paths you gave at init. |
| `map` | `.hele/DESIGN_SYSTEM.md` | Where Vega writes the compact map of that system. |

### `qa.maxScreenshots`

`10`. How many PNGs stay in one increment's `screenshots/`. The rest are chat-only under `.hele/tmp/captures/`. The project file wins when `qa.maxScreenshots` is set there.

### `questions.planning`

`always`. Investigate first, then one question pack if a useful question remains.

Next: [CLI Reference](cli.md)
