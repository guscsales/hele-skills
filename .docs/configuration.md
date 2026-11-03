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

Which model each role uses. Judgment work sits on the strong model. Execution volume (engineers, QA runs, the BUILD suite, Summer's compile-until-green) sits on the cheap one. Summer uses `staff-lisbon-run`.

<table>
  <thead>
    <tr>
      <th>Agent</th>
      <th>Key</th>
      <th>Claude Code Default</th>
      <th>Cursor Default</th>
      <th>Options or type</th>
      <th>What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lisbon (Builder)</td>
      <td><code>staff-lisbon</code></td>
      <td>opus</td>
      <td>grok</td>
      <td rowspan="11">Any model you want according what the agent accepts, or <code>inherit</code> to use the same from your current prompt.</td>
      <td>Lisbon, the Builder. Judgment work.</td>
    </tr>
    <tr>
      <td>Lisbon, suite</td>
      <td><code>staff-lisbon-run</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Lisbon's suite. Execution volume.</td>
    </tr>
    <tr>
      <td>Vega (Design)</td>
      <td><code>design-vega</code></td>
      <td>opus</td>
      <td>opus</td>
      <td>Vega, design specs.</td>
    </tr>
    <tr>
      <td>Hightower (DB)</td>
      <td><code>dba-hightower</code></td>
      <td>sonnet</td>
      <td>grok</td>
      <td>Hightower, the DBA.</td>
    </tr>
    <tr>
      <td>Cho (Backend)</td>
      <td><code>backend-cho</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Cho, backend.</td>
    </tr>
    <tr>
      <td>Van Pelt (Frontend)</td>
      <td><code>frontend-van-pelt</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Van Pelt, frontend.</td>
    </tr>
    <tr>
      <td>Jane (Security)</td>
      <td><code>security-jane</code></td>
      <td>opus</td>
      <td>grok</td>
      <td>Jane, security.</td>
    </tr>
    <tr>
      <td>Rigsby (Infra)</td>
      <td><code>infra-rigsby</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Rigsby, infra.</td>
    </tr>
    <tr>
      <td>Wylie (Writing stubs)</td>
      <td><code>qa-wylie-stubs</code></td>
      <td>opus</td>
      <td>grok</td>
      <td>Wylie writing stubs.</td>
    </tr>
    <tr>
      <td>Wylie (Running tests)</td>
      <td><code>qa-wylie-run</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Wylie running tests.</td>
    </tr>
    <tr>
      <td>Summer (Build checker)</td>
      <td><code>staff-lisbon-run</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Summer's compile-until-green. Same key as Lisbon's suite.</td>
    </tr>
  </tbody>
</table>

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
