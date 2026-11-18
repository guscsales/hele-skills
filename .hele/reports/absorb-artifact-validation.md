# Absorption artifact validation

Date: 2026-11-18. Approved snapshot: Beads `hele-skills-a8t.11`; baseline `7e0b5f9cd09e5a901c724de630e0019c7b64646c`. This review validates the written snapshot and local PR gates. It does not certify the harness workflows as passing or report a completed human walk.

## Artifact results

- Six approved PRODUCT_DESCRIPTION v1.0 files, six TEST_STUBS v1.0 files and six unique index entries with English/Portuguese aliases, document versions 1.0 and no feature status.
- Exactly the 19 approved slice paths, each with a built/origin-absorb v1.0 execution plan and empty tasks. Template section structure retained, including its documented XML contradiction.
- All 99 business rules map to valid originating scenarios. All 147 QA summary rows and scenario detail headings agree with their feature's scenario ID, title, rule title, origin and result.
- Acceptance results: 139 pending, eight blocked, zero passing/failing. All 19 QA reports are red; all 19 VERIFY records remain pending. Historical built status records existing behavior, not acceptance success.
- Seventeen QA/VERIFY pairs contain identical human-flow tables labeled not executed. The remaining pairs (`project-memory/004-update-installed-plugin` and `e2e-audit/001-audit-existing-suite`) contain identical manual-setup-gap explanations: controlled installed-session/suite fixtures are unavailable, so no complete walk is prepared. No human verdict was invented.
- Required PRD/stub/QA sections are present; all local Markdown links resolve. No unfilled body placeholders, database/design artifacts, live phase-state files or standalone notes were added. Template instruction comments retain generic examples.
- All 30 exact feature-slug and English/Portuguese alias searches return the intended feature first. The list command displays all six features.

| Feature | Business rules | Scenarios |
|---|---|---|
| behavior-validation | 20 | 28 |
| e2e-audit | 11 | 14 |
| guided-delivery | 21 | 38 |
| product-absorption | 15 | 27 |
| project-memory | 17 | 21 |
| visual-design | 15 | 19 |

## Commands and evidence

| Check | Command / method | Actual result |
|---|---|---|
| Structural review | `python3 /tmp/hele-validate-artifacts.py` (transient review script; not a shipped test) | Exit 0; approved slice set, metadata, headings, empty tasks, BR/scenario/QA mappings, human tables, links, placeholders, index and source hashes checked; zero errors. |
| Discovery | `./scripts/hele find --list`; `./scripts/hele find <slug-or-alias> --json` for all six slugs and 24 aliases | Exit 0; six listed, 30 correct first index matches. |
| Existing CLI regression evidence | Reused `cd cli && npm test` from [execution record](absorb-cli-execution.md) and [TAP](absorb-cli-tests.tap) | 27/27 passed, exit 0; every recorded source/input SHA-256 still matches. Suite was not repeated. These partial assertions do not make complete product scenarios pass. |
| Committed bundle | `cd cli && npm run build`; `git diff --exit-code cli/dist/` | Both exit 0; bundle unchanged. Assets-only build emitted no shipped Cursor adapter. |
| Manifest gate | Node JSON.parse for `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `core/default-config.json` | All valid. |
| PR version gate | Node comparison against `git show 7e0b5f9cd09e5a901c724de630e0019c7b64646c:.claude-plugin/plugin.json`, plus exact changelog-heading check | Pass: plugin 1.4.0 → 1.4.1; matching marketplace version and changelog entry. CLI version remains 0.1.0. No release published. |
| Whitespace | `git diff --check`; parent staged-file check | Initial unstaged check exited 0 but did not cover new files. Parent staging exposed excess terminal blank lines in seven guided-delivery/product-absorption VERIFY files; removed those blank lines while retaining one final newline. Follow-up unstaged check exits 0; parent will restage and repeat the staged-file check. |

The v1.4.1 changelog describes self-absorption only. No product source, behavior, tests, CI, canonical diagram or README diagram changed. The parent task owns the final Beads JSONL export of the read/approval/write trace after closure, and final commit/PR publication; that later export is outside this pre-publication review. No hosted CI execution is claimed here.
