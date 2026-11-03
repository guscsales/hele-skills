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
| `agents.maxParallel` | `4` | positive integer | How many background workers stay in flight. Two tasks that share a file still never run together. |
| `agents.models.staff-lisbon` | claude-code `opus`, cursor `grok` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Lisbon, the Builder. Judgment work. A plain string applies to both runtimes. `inherit` or a missing runtime key uses the session model. |
| `agents.models.staff-lisbon-run` | claude-code `sonnet`, cursor `composer` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Lisbon's suite, and Summer's compile-until-green. Execution volume. |
| `agents.models.design-vega` | claude-code `opus`, cursor `opus` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Vega, design specs. |
| `agents.models.dba-hightower` | claude-code `sonnet`, cursor `grok` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Hightower, the DBA. |
| `agents.models.backend-cho` | claude-code `sonnet`, cursor `composer` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Cho, backend. |
| `agents.models.frontend-van-pelt` | claude-code `sonnet`, cursor `composer` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Van Pelt, frontend. |
| `agents.models.security-jane` | claude-code `opus`, cursor `grok` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Jane, security. |
| `agents.models.infra-rigsby` | claude-code `sonnet`, cursor `composer` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Rigsby, infra. |
| `agents.models.qa-wylie-stubs` | claude-code `opus`, cursor `grok` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Wylie writing stubs. |
| `agents.models.qa-wylie-run` | claude-code `sonnet`, cursor `composer` | object `{ claude-code, cursor }`, a plain string, or `inherit` | Wylie running tests. |

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
