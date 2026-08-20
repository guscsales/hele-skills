# Introduction

hele-skills is a feature-delivery harness for Claude Code (Cursor reads the same plugin skills). It gives an AI agent team the one thing they don't have: memory. Every feature leaves behind documents that explain WHAT it is, WHY it exists, HOW it was built, and HOW to validate it — so future sessions read instead of guessing.

The name honors Helena. Every skill starts with `/hele-*`.

## The motivation

Everyone is talking about AI and coding agents. After some time reflecting, we reached a surprising conclusion: in terms of software engineering structure, nothing changed. What changed is the scale and who operates that structure. It used to be a boss with 10 humans on the team. Now it's a programmer with 10 agents on the team.

Think about how a feature ships at a tech company:

- A product manager understands the what, the why, and how to validate. They ask questions — to sales, to the customer, to the CEO — and consolidate everything into a PRD.
- A staff engineer picks up that PRD, splits the work across frontend, backend, design, and infra, and coordinates the execution like a conductor. Blockers escalate; answers come back; the cycle repeats.
- QA validates what was built. Then the team runs a retrospective, and the next cycle costs less.

In the world of AI agents, why should this flow be different? It shouldn't. The difference is that now that whole team is you and several Claude Codes running together.

## Core beliefs

- **Agents have no memory — we build it for them.** Living documents (PRD, test stubs, learnings) carry the current truth; per-increment documents (plan, design spec, QA report, retro) freeze the history.
- **Process proportional to risk.** A full cycle for real features; a fast lane for small changes; an iterate loop for post-build discoveries on the open increment; hard gates (database, security) that no lane skips.
- **The human is the CEO.** Agents ask questions during planning — that's a feature, not a failure. Approvals are explicit, and dangerous actions (schema changes, undecided contracts) block until you decide.
- **State lives on disk, not in the chat.** beads tracks tasks; documents track decisions. An interrupted session resumes exactly where it stopped. `/hele-fast` and `/hele-iterate` are sticky in the conversation — follow-ups stay in that lane until you invoke a different `/hele-*`.
- **The main chat stays free.** Talking and deciding happen there. Doing (review, suite, artifacts, codebase reads) is always a background sub-agent — Lisbon and Hightower included.

## Who this is for

- Developers who ship real features with AI agents and are tired of re-explaining their project every session.
- Teams that want PRDs, plans, and test contracts as a by-product of building — not as an afterthought.
- Anyone who wants parallel agent execution with the guardrails a real engineering org would have.

## What you'll find here

- [Getting Started](getting-started.md) — install, initialize, ship your first feature.
- [Skills Reference](skills.md) — the `/hele-*` commands, phase by phase.
- [CLI Reference](cli.md) — the `hele` terminal companion: search, config, adapters.

Next: [Getting Started](getting-started.md)
