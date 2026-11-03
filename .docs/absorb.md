# Absorb

`/hele-absorb` it's a dedicated skill that reads an app that already exists and writes the `.hele/` memory for it. It is its own command. Note `/hele` does not start it, does not route into it, and does not read this skill.

Use it when the product is already in the repo and `.hele/features/` does not describe it yet. The next thing you build still starts with `/hele`.

If `.hele/` is missing, the first stop is init. You answer whether the project has design work for Agent Vega. The reading starts after that folder exists.

## What you do

Type `/hele-absorb`. Agent Lisbon captains. She does not read the repo in the main session. She opens a beads epic and the team reads the whole product:

| Who | What they read |
| --- | --- |
| Agent Cho | Server, domain modules, APIs, server tests |
| Agent Van Pelt | Routes, screens, UI copy, UI tests |
| Agent Lisbon | Git history, looking for seams |
| Agent Hightower | Schema, when there is one |
| Agent Vega | The design system, when design is enabled |

> **Tip.** Those names are a team, with roles and models. Meet them in [The agent team](introduction.md#the-agent-team).

A feature is a capability a person would name, not a folder. An increment is a slice of that feature that could have shipped on its own. `001` is the oldest. Commits show where the seams are. A commit is not an increment.

When the reading is done, Lisbon closes that epic and shows one table. This is the shape, filled with one slice:

| Report | Scope |
| --- | --- |
| 🗺️ ABSORB | orders-app · snapshot |

| Field | Value |
| --- | --- |
| Features | 1 |
| Increments | 2 |
| Read epic | closed |

| Feature | Increment | What exists today | Evidence |
| --- | --- | --- | --- |
| orders | 001-place-order | A visitor can place an order | [place.test.ts](/Users/you/project/tests/place.test.ts) |
| orders | 002-cancel | A shipped order cannot be cancelled | [cancel.test.ts](/Users/you/project/tests/cancel.test.ts) |

| Actions | Your call |
| --- | --- |
| 1 | Approve. She writes the files, then runs the regression and the screenshots. |
| 2 | Tell her what is wrong. She brings the full table again. Still no files. |

A second table appears when a feature already has a PRD. She leaves that one alone unless you ask to refresh it. A doubts table appears only when two parts of the product disagree in a way that would change the cut. The recommendation there is what the code does today.

## What lands on disk

Only after the approval. Every file is copied from `templates/` and filled. The skill does not invent a second shape.

| File | Template | What it is |
| --- | --- | --- |
| `features/<slug>/PRODUCT_DESCRIPTION.md` | `product-description.md` | The feature as it behaves today. One living PRD. `status: approved`. |
| `features/<slug>/TEST_STUBS.md` | `test-stubs.md` | Given / When / Then from that PRD. Each stub cites the increment that introduced the behavior. |
| `features/<slug>/increments/NNN-<slice>/EXECUTION_PLAN.md` | `absorb-plan.md` | A closed record. `status: built`, `origin: absorb`, no tasks. |
| `features/<slug>/increments/NNN-<slice>/QA_REPORT.md` | `qa-report.md` | The regression for that slice. Screenshots of the product today, 1920×1080, the proven element in frame. Up to 10 stay in the increment (`qa.maxScreenshots`). |
| `features/<slug>/increments/NNN-<slice>/VERIFY.md` | `verify.md` | The same steps as the QA report, ready to replay. |
| `index.json` | — | Slug, title, summary, aliases. |
| `DATABASE.md` | — | Created when a schema exists and the file is missing. |
| `DESIGN_SYSTEM.md` | — | Created when design is on and the file is missing. |

Tip: check the whole configuration in [Configuration](configuration.md).

`DESIGN_SPEC.md` and `DB_CHANGES.md` are not written. Nothing in the schema is being changed, and no new screen is being designed.

The beads she opened are closed before she stops. Findings stay in those beads, not in a notes file.
