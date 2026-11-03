# Configuration

These tables are the defaults a new project starts with. `/hele-init` writes them to `.hele/settings.json`, then applies the design answer. The project file is what you change, and what `hele config` reads and writes. A key you have set wins. A key missing from the project file still uses the default in the table.

Re-run `/hele-init` on a project that already has `.hele/` to copy any new key. A value you already set stays.

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

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `version` | `1` | number | Settings schema. Not the plugin version. |

### `language`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `language.artifacts` | `en` | string | Language of the files hele writes (PRD, plan, QA report, verify). |
| `language.chat` | `auto` | string. `auto` follows the human | Language of the conversation. |

### `agents`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `maxParallel` | `4` | positive integer | How many background workers stay in flight. Two tasks that share a file still never run together. |

### `agents.models`

Which model each role uses. Judgment work sits on the strong model. Execution volume (engineers, QA runs, the BUILD suite, Summer's compile-until-green) sits on the cheap one. Each value is an object `{ claude-code, cursor }`, a plain string, or `inherit`. A plain string applies to both runtimes. `inherit`, or a missing runtime key, uses the session model. Summer uses `staff-lisbon-run`.

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

### `beads`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `beads.enabled` | `true` | boolean | Beads is the task tracker. Plan and build use it. |

### `designSystem`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `designSystem.enabled` | `true` | boolean | Vega specs new screens when this is not `false`. A missing key means she is in. Init asks once and writes the answer here. |
| `designSystem.paths` | `[]` | array of strings | Design-system paths you gave at init. |
| `designSystem.map` | `.hele/DESIGN_SYSTEM.md` | string | Where Vega writes the compact map of that system. |

### `qa`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `qa.maxScreenshots` | `10` | positive integer | How many PNGs stay in one increment's `screenshots/`. The rest are chat-only under `.hele/tmp/captures/`. |

### `questions`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `questions.planning` | `always` | string | When the question pack runs before a PRD. `always` means investigate first, then one pack if a useful question remains. |

Next: [CLI Reference](cli.md)
