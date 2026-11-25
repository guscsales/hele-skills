# Configuration

These tables are the defaults a new project starts with. `/hele-init` writes them to `.hele/settings.json`, then applies the design answer. The project file is what you change, and what `hele config` reads and writes. A key you have set wins.

`hele config list` and `hele config get` show saved values only: they never merge defaults, and a key the project file does not have is "path not found". The one command that resolves defaults is `hele config effective output`, which prints the chat output in effect (see [`output`](#output)). A key missing from the project file is still used by the skills at its default, but only the effective view shows it.

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
hele config set output.preset standard                    # chat detail: compact | standard | detailed
hele config set output.sections.coverage full             # override one section of the preset
hele config set output.maxTableRows 12
hele config unset output.sections.coverage                # follow the preset again
hele config effective output                              # the resolved output, with defaults
```

A model value is per runtime (`{"claude-code": "sonnet", "cursor": "composer"}`). A plain string applies to both. Use `inherit` for the session model. The build uses the plugin default for a missing role or runtime key.

## Keys

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `version` | `1` | number | Settings schema. Not the plugin version. |

### `language`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `language.artifacts` | `en` | string. `en` and `en-US` are English (en-US) | Language of the files hele writes (PRD, plan, stubs, QA report, verify, design spec). |
| `language.chat` | `auto` | string. `auto` follows the human's messages this session. A tag such as `pt-BR` locks the session | Language of the conversation, including table headers, row labels, and cell sentences. Ids, file names, commands, and agent tags stay as written. |

### `agents`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `maxParallel` | `4` | positive integer | How many background workers stay in flight. Two tasks that share a file still never run together. |

### `agents.models`

Use Sonnet by default for engineering and routine review. Lisbon uses `staff-lisbon-run` for routine review and checks, and `staff-lisbon` for planning and dedicated high-risk reviews. Existing project choices take precedence.

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
      <td>Planning and dedicated high-risk review.</td>
    </tr>
    <tr>
      <td>Lisbon, routine review and suite</td>
      <td><code>staff-lisbon-run</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Routine code review and final build checks.</td>
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
      <td>sonnet</td>
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
      <td>Wylie (Validation strategy)</td>
      <td><code>qa-wylie-stubs</code></td>
      <td>opus</td>
      <td>grok</td>
      <td>Acceptance scenarios, coverage judgment, and existing-suite audits.</td>
    </tr>
    <tr>
      <td>Wylie (Running tests)</td>
      <td><code>qa-wylie-run</code></td>
      <td>sonnet</td>
      <td>composer</td>
      <td>Writing and running selected E2E journeys.</td>
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
| `qa.maxScreenshots` | `10` | positive integer | Maximum optional PNGs kept in one increment's `screenshots/`; not a quota. The rest are chat-only under `.hele/tmp/captures/`. |

### `output`

How much of each report appears in chat. It changes the level of detail only. Documents, evidence, tests run, approval criteria, workflow stages and work state are the same under every setting. A new project saves `output.preset` as `compact` and nothing else.

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `output.preset` | `compact` | `compact`, `standard`, `detailed` | The starting point for every field below. |
| `output.tables` | from the preset | `auto`, `always` | `auto` allows prose or a short list for a small amount of information. `always` presents structured information as tables. Neither allows box-drawing. |
| `output.maxTableRows` | from the preset | positive integer | Rows shown in one informational list, `full` levels included. The rest is counted in an omission line that links the complete document. |
| `output.sections.testStubs` | from the preset | `off`, `summary`, `full` | Acceptance scenarios of this delivery. |
| `output.sections.coverage` | from the preset | `off`, `summary`, `full` | Coverage recommendations. |
| `output.sections.prdDelta` | from the preset | `summary`, `full` | PRD changes. `summary` is the id, title and behavior change per rule; `full` adds the previous and new wording. |
| `output.sections.qaResults` | from the preset | `summary`, `issues`, `full` | QA results. `issues` lists every failure and gap, and summarizes what passed. |
| `output.sections.dispatch` | from the preset | `brief`, `full` | Announcement of a dispatched worker. `brief` is one line with the agent tag, the model and the work. |
| `output.sections.screenshots` | from the preset | `off`, `links`, `inline` | Optional QA screenshots. |

The three presets. This table and `cli/src/output.js` are the only places that carry these values; skills, agents and templates never hold a copy.

| Preset | `tables` | `maxTableRows` | `testStubs` | `coverage` | `prdDelta` | `qaResults` | `dispatch` | `screenshots` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `compact` | `auto` | 8 | `summary` | `summary` | `summary` | `issues` | `brief` | `links` |
| `standard` | `auto` | 15 | `summary` | `summary` | `full` | `issues` | `brief` | `links` |
| `detailed` | `always` | 30 | `full` | `full` | `full` | `full` | `full` | `inline` |

**Precedence**, strongest first: an explicit request in the current message (this response only, never saved unless you ask), a saved override (`output.tables`, `output.maxTableRows`, `output.sections.*`), the saved `output.preset`, the plugin default `compact`. Each field resolves on its own.

**Always visible.** Under every preset, every section value (`off` included) and whatever a message asks, chat still shows at least a summary of failures, blockers, missing required coverage, product questions, required decisions, workflow options and approvals, and the steps of a verification walk. Failures, blockers and missing required coverage are outside `maxTableRows`: one line per item with its id and cause. Questions and approvals are paginated or grouped, never cut. A request such as "show all TS" re-presents information that already exists for that response only, with no restart, rerun or settings change.

**Writes are validated.** `hele config set output.<key>` refuses a value outside the table, an `output` key that is not listed, and `add` under `output`, with exit 1 and the file untouched. A negative `maxTableRows` typed without `--` (`hele config set output.maxTableRows -5`) is rejected by the argument parser before validation (exit 1, file untouched); `hele config set output.maxTableRows -- -5` reaches validation and is refused as well. A value you edit into the file by hand is never fatal: on read, an invalid or unknown value falls back to the preset's value (or is ignored) and appears in `warnings`, and the report names the key and the value used instead.

**Default change for existing projects.** A project without `output` presents as `compact` (the default changed in v1.8.0). To bring back a presentation close to the earlier one (full tables), run:

```bash
hele config set output.preset detailed
```

Re-running `/hele-init` adds only `output.preset` (`compact`) when it is missing. It never replaces a saved `output` value and never writes `output.sections.*`, `output.tables` or `output.maxTableRows`.

**Unset.** `hele config unset <path>` deletes a saved key and hands the field back to the preset (and `unset output.preset` hands it back to `compact`). It exits 1 and writes nothing when the path is not saved, and it applies no value validation.

**Effective output.** `hele config effective output` prints the resolved JSON and never writes. It works without `.hele/` or `settings.json` (plugin default). Any other path exits 2.

```json
{
  "preset": "compact",
  "tables": "auto",
  "maxTableRows": 8,
  "sections": {
    "testStubs": "summary",
    "coverage": "summary",
    "prdDelta": "summary",
    "qaResults": "issues",
    "dispatch": "brief",
    "screenshots": "links"
  },
  "warnings": []
}
```

Each `warnings` entry is `{ "key": "output.sections.coverage", "saved": "huge", "used": "summary", "reason": "invalid" }`. `reason` is `invalid`, `unknown` (`used` is `null`: the key is ignored) or `not-object`.

### `questions`

| Key | Default | Options or type | What it does |
| --- | --- | --- | --- |
| `questions.planning` | `always` | string | When the question pack runs before a PRD. `always` means investigate first, then one pack if a useful question remains. |

Next: [CLI Reference](cli.md)
