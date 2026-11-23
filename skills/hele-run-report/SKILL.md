---
name: hele-run-report
description: Inspect how Hele executed a build. Report local Claude Code usage by phase and model, agent rework, and evidence from review and QA.
argument-hint: "[increment or session log] [optional baseline]"
disable-model-invocation: true
---

# hele-run-report

Run only when explicitly invoked. Report in the project chat language. Keep raw logs local.

1. Resolve the increment from the request or conversation. Use its plan, Beads notes, QA report and available CI or manual verdicts. Identify the Claude Code sessions that actually covered it. To find candidates for this checkout, run `node "${CLAUDE_PLUGIN_ROOT}/skills/hele-run-report/scripts/collect.mjs" --list`. A recent log alone is insufficient to establish scope. If scope remains ambiguous, ask which run to use.
2. Run the collector with the selected parent JSONL path or paths. It reads observed subagent logs and outputs aggregate usage. Compare a baseline only when its scope and gates are comparable. Call out model and effort differences. A session covering several increments gives session-wide totals unless evidence supports a narrower attribution. Missing logs are missing evidence. Cached tokens, output tokens and plan quota are separate measures.
3. Report **Scope**, a compact **Metrics** table by phase, **What worked**, **What cost time or tokens**, and up to three **Next experiments**. Use Beads and QA evidence to identify confirmed retries, rework and findings. Distinguish observations from hypotheses. Link evidence and keep each proposed change tied to a measurable outcome and a check worth preserving.

Return the run report in chat. If asked to save it, write `RUN_REPORT.md` in the selected increment or use the requested path. Leave the workflow, Beads and product documents alone.
