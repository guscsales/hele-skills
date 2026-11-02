# Absorb

`/hele-absorb` reads an app that already exists and writes the `.hele/` memory for it. It is its own command. `/hele` does not start it, does not route into it, and does not read this skill.

Use it when the product is already in the repo and `.hele/features/` does not describe it yet. The next thing you build still starts with `/hele`.

## What you do

Type `/hele-absorb`. Agent Lisbon captains. She does not read the repo in the main session. She opens a beads epic and the team reads the whole product:

| Who | What they read |
| --- | --- |
| Agent Cho | Server, domain modules, APIs, server tests |
| Agent Van Pelt | Routes, screens, UI copy, UI tests |
| Agent Lisbon | Git history, looking for seams |
| Agent Hightower | Schema, when there is one |
| Agent Vega | The design system, when design is enabled |

A feature is a capability a person would name, not a folder. An increment is a slice of that feature that could have shipped on its own. `001` is the oldest. Commits show where the seams are. A commit is not an increment.

When the reading is done, Lisbon closes that epic and shows one table: feature, increment, what exists today, and the file that shows it. A short doubts table appears only when two parts of the product disagree in a way that would change the cut. The recommendation there is what the code does today.

| Actions | Your call |
| --- | --- |
| 1 | Approve. She writes the files. |
| 2 | Tell her what is wrong. She brings the full table again. Still no files. |

## What lands on disk

Only after `1`.

| File | What it is |
| --- | --- |
| `features/<slug>/PRODUCT_DESCRIPTION.md` | The feature as it behaves today. One living PRD. `status: approved`. |
| `features/<slug>/TEST_STUBS.md` | Given / When / Then from that PRD. `status: pending`. Each stub cites the increment that introduced the behavior. |
| `features/<slug>/increments/NNN-<slice>/EXECUTION_PLAN.md` | A closed record. `status: built`, `origin: absorb`, no tasks. |
| `index.json` | Slug, title, summary, aliases. |
| `DATABASE.md` | Created when a schema exists and the file is missing. |
| `DESIGN_SYSTEM.md` | Created when design is on and the file is missing. |

A feature that already has a PRD is listed as already documented and left as it is, unless you ask to refresh that one.

These files are not written: `QA_REPORT.md`, `VERIFY.md`, `DESIGN_SPEC.md`, `DB_CHANGES.md`. There was no delivery cycle through `/hele`.

The beads she opened are closed before she stops. Findings stay in those beads, not in a notes file.
