# Introduction

![hele — agents with memory](../assets/banner.svg)

hele-skills is a feature-delivery harness for agents like Claude Code, Cursor and others. One command: `/hele`. It picks the lane and runs the rest.

**Core belief:** agents have no memory, so we build it for them. Every feature leaves behind documents that explain WHAT it is and WHY it exists, HOW it was built, and HOW to validate it. Future sessions read those documents instead of guessing.

Work is organized in tasks using [beads](https://beads.gascity.com/) (`bd`), [Steve Yegge](https://github.com/steveyegge)'s dependency-aware issue tracker built for agents. Hele runs on it under the hood: every planned task becomes a beads issue, the build loop dispatches whatever `bd ready` unblocks, and an interrupted session resumes exactly where it stopped. The state lives in beads, not in the chat, allowing work with multiple sub-agents in an organized way.

## How you use it

One command called `/hele <your prompt>`. Agent Lisbon, the Builder, detects the lane and runs the rest.

| Lane | When | What happens |
| --- | --- | --- |
| The Feature Lane | The product does not do this yet. This part of the app doesn't exist. | Questions until none remain, then PRD + stubs + increment `001`, design when there is a new screen (optional), and the team plans, builds, and auto-verifies on its own providing you screenshots of the result. |
| The Fast Lane | A small addition to what already exists, a product increment. | Asks questions if necessary, then a PRD patch an update and create a new increment for your feature. |
| The Bugfix Lane | Today's behavior is wrong. | Asks questions if necessary, reconciles the docs, and follows the same spine of the fast lane. |
| The Open Lane | Research, review, investigation, design exploration, anything else. | A conversation, with no PRD, until you pick **Let's formalize or say you're done.** |

## The vision

Everyone is talking about AI and coding agents. After some time reflecting, I reached a surprising conclusion: in terms of software engineering structure, nothing changed. What changed is the scale and who operates that structure. It used to be a boss with **10 humans on the team**. Now it's a programmer with **10 agents on the team**.

See if this looks like your context as a Software Engineer at a tech company:

> There is a task. A product manager understands the what, the why, and how to validate that feature. Along the way they ask a lot of questions to the people involved: sales, the customer themselves, the company's CEO and so on. In many cases they still don't talk to you directly. In the end, the PM consolidate everything into a file known as a *"Product Requirement"*, *"PRD"*, *"Product Scope"*, *"Epic"*. It has plenty of fancy names.
>
> Once that exists, the staff engineer (or the engineering manager) picks up the file, understands it (or goes back to product with questions) and, together with the team, splits the work across frontend, backend, design, infra - whatever it takes. Now the group has its tasks and executes like a conductor coordinating an orchestra. When someone gets stuck, it escalates to the manager, the staff engineer, or product. If that person can't solve it either, they go find the answers and come back with direction. The cycle repeats until what needs to be done is finally done.
>
> At the end, a QA person (or the CI itself) validates what was built: opens the browser, tests it. The product person does that job too. Bottom line: input ↔ output. Feature delivered.
>
> The next step is talking about it. The famous retrospective. Like any decent agile team, at the end of the cycle everyone sits together and reviews what worked, what didn't, which instruction was ambiguous, which step caused rework, and plenty more. Everyone leaves knowing a bit more than when they came in, and the next cycle costs less.
>
> We repeat it from the beginning.

Going back to the world of AI and agents. My question is: why should this flow be any different? It shouldn't. The difference is that now that whole team is you and several Claude Codes (or other code agents) running together.

## The agent team

You talk to Lisbon in the main session. She is the Builder: product manager and staff engineer. The heavy work like review, the suite, artifacts, reading code goes to background subagents. Here's the team:

| Agent | Role |
| --- | --- |
| Lisbon | The Builder. Owns the PRD and chases delivery. Takes care of the plan, dispatches the team and obeys the defined rules. |
| Vega | The Designer. UI spec when there is a new screen, you can connect to Figma, Paper or even use some frontend skill to create screens. It's also optional. |
| Cho | The Backend Engineer, it codes all the backend side of the feature. |
| Van Pelt | The Frontend Engineer, it codes all the frontend from the design spec. |
| Hightower | The DBA. A schema change stops and asks for your approval before any migration. |
| Jane | The Security Engineer. Threat model on risky increments using specific skills of security. |
| Rigsby | The Infra Engineer. Takes care of CI, deploys, YAML files and similar. |
| Wylie | The QA Engineer. Writes the stubs, runs Playwright, takes the screenshots, hosts the guided verification, writes the QA Report for the human. |
| Summer | The "Build until pass" agent. Fixes the project compile until it is green, fixing typescript issues and things related. |

Agents ask questions during planning phases, the human answers what agents cannot, unblocks the real world, provide the most creative part, and picks the numbered options. You drive the creation, the agents transform in reality.

Defaults live in `.hele/settings.json` (`agents.models`). Judgment work sits on the strong model; execution volume (engineers, QA runs, the BUILD suite, Summer's compile-until-green) sits on the cheap one. Each value is per runtime. Change one with `hele config set agents.models.backend-cho.claude-code opus`.

| Agent | Key | Claude Code | Cursor |
| --- | --- | --- | --- |
| Lisbon (Builder) | `staff-lisbon` | opus | grok |
| Lisbon, suite (Coding) | `staff-lisbon-run` | sonnet | composer |
| Vega (Design) | `design-vega` | opus | opus |
| Hightower (DB) | `dba-hightower` | sonnet | grok |
| Cho (Backend) | `backend-cho` | sonnet | composer |
| Van Pelt (Frontend) | `frontend-van-pelt` | sonnet | composer |
| Jane (Security) | `security-jane` | opus | grok |
| Rigsby (Infra) | `infra-rigsby` | sonnet | composer |
| Wylie (Writing Stubs) | `qa-wylie-stubs` | opus | grok |
| Wylie (Testing Stubs) | `qa-wylie-run` | sonnet | composer |
| Summer (Build Checker) | `staff-lisbon-run` | sonnet | composer |

## Core beliefs

- **Agents have no memory, so we build it for them.** Living documents (PRD, test stubs) carry the current truth. Per-increment documents (plan, design spec, QA report with screenshots, verify) freeze the history.
- **One entry point.** `/hele` detects the Feature, Fast, Bugfix, or Open lane. Phase skills stay on disk as contracts the conductor runs. You pick numbered options, not a skill catalog.
- **Process proportional to risk.** Full spine for Feature, Fast, and Bugfix. Open for research and reviews until you formalize. Hard gates (database, security) stay in the lane.
- **The human decides the product.** Approvals are explicit numbered options for the PRD, a new design, a schema change, the QA report, and the manual walk. The execution plan is for the agents. Agents still ask questions they cannot answer from the code. That is a feature, not a plan sign-off. A product question still open means the PRD is not written yet.
- **State lives on disk, not in the chat.** beads tracks tasks. Documents track decisions. There is no state file and no feature-status board. An interrupted session resumes from the feature folder, the increment folder, and the beads. `/hele` is sticky: follow-ups stay in that session until you invoke a different `/hele-*`.
- **The main chat stays free.** You talk to Lisbon there. Doing (review, suite, artifacts, codebase reads) is always a background sub-agent. After a dispatch, the turn ends.
- **Proof you can open.** QA writes a human-readable `QA_REPORT.md`. Shots are taken after the page settles, at most 10 stay in the increment, and the report opens with the screen before and after the change. Verify walks those same steps, in tables: how to open the page, the data, and each step. A PRD change prints new rules and, when a rule was rewritten, the old sentence next to the new one. Every file in chat is a clickable link. The label is the file name. The target is the absolute path, on one line.

## Who this is for

- Developers who ship real features with AI agents and are tired of re-explaining their project every session.
- Teams that want PRDs, plans, and test contracts as a by-product of building, not as an afterthought.
- Anyone who wants parallel agent execution with the guardrails a real engineering org would have, and a single command to start.

## Dedication

The name honors my wife Helena, I dedicate this project to her. Thank you for being by my side every day of my life and for believing in me even in the times when I didn’t believe in myself, with love, Gus.

## What you'll find here

- [Getting Started](getting-started.md): install, initialize (or auto-init), ship with `/hele`.
- [Skills Reference](skills.md): the conductor and the phase skills it runs.
- [CLI Reference](cli.md): the `hele` terminal companion: search, config, adapters.

Next: [Getting Started](getting-started.md)
