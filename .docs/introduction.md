# Introduction

hele-skills is a feature-delivery harness for Claude Code. It gives an AI agent team the one thing they don't have: memory. Every feature leaves behind documents that explain WHAT it is, WHY it exists, HOW it was built, and HOW to validate it — so future sessions read instead of guessing.

The name honors Helena. You type one skill: `/hele-yolo`. It picks the lane and runs the rest.

## The motivation

Everyone is talking about AI and coding agents. After some time reflecting, we reached a surprising conclusion: in terms of software engineering structure, nothing changed. What changed is the scale and who operates that structure. It used to be a boss with 10 humans on the team. Now it's a programmer with 10 agents on the team.

Think about how a feature ships at a tech company:

- A product manager understands the what, the why, and how to validate. They ask questions and consolidate everything into a PRD.
- A staff engineer picks up that PRD, splits the work across frontend, backend, design, and infra, and coordinates the execution like a conductor. Blockers escalate; answers come back; the cycle repeats.
- QA validates what was built — with proof. Then the team learns, and the next cycle costs less.

In the world of AI agents, why should this flow be different? It shouldn't. The difference is that now that whole team is you and several Claude Codes running together — and you only talk to the conductor.

## Core beliefs

- **Agents have no memory — we build it for them.** Living documents (PRD, test stubs, learnings, findings) carry the current truth; per-increment documents (plan, design spec, QA report with screenshots, verify) freeze the history.
- **One entry point.** `/hele-yolo` detects Feature, Fast, Bugfix, or Open. Phase skills stay on disk as contracts the conductor runs. You pick numbered options — never a skill catalog.
- **Process proportional to risk.** Full spine for Feature / Fast / Bugfix; Open for research and reviews until you formalize; hard gates (database, security) that stay in the lane.
- **The human decides.** Agents ask questions during planning — that's a feature, not a failure. Approvals are explicit numbered options. Dangerous actions block until you decide.
- **State lives on disk, not in the chat.** beads tracks tasks; documents track decisions; findings are written during the talk. An interrupted session resumes from `state.json`. `/hele-yolo` is sticky — follow-ups stay in that session until you invoke a different `/hele-*`.
- **The main chat stays free.** Talking and deciding happen there. Doing (review, suite, artifacts, codebase reads) is always a background sub-agent — Lisbon and Hightower included.
- **Proof you can open.** QA writes a human-readable `QA_REPORT.md` with screenshots (full PWD paths in chat). Verify walks you through those same steps. A PRD change always prints New vs Added.

## Who this is for

- Developers who ship real features with AI agents and are tired of re-explaining their project every session.
- Teams that want PRDs, plans, and test contracts as a by-product of building — not as an afterthought.
- Anyone who wants parallel agent execution with the guardrails a real engineering org would have — and a single command to start.

## What you'll find here

- [Getting Started](getting-started.md) — install, initialize (or auto-init), ship with `/hele-yolo`.
- [Skills Reference](skills.md) — the conductor and the phase skills it runs.
- [CLI Reference](cli.md) — the `hele` terminal companion: search, config, adapters.

Next: [Getting Started](getting-started.md)
