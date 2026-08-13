# Changelog

Every released version, newest first. Each entry lists the commits that shipped in it.

## Unreleased

- fix(plan): Paper/Figma EXECUTION_PLAN gate — Van Pelt tasks carry artboard ids; pixels from MCP `get_jsx`, not layout prose

## v0.12.0 — 2026-08-10

- docs: `.docs/` documentation — introduction, getting started, skills reference, CLI reference
- feat(ci): release job — new versions are tagged automatically, and a version bump without a CHANGELOG entry fails CI
- chore: backfilled annotated tags for all 26 historical versions

## v0.11.1 — 2026-08-10

- 8e13a05 feat(qa): --generate-fixes-report — reconstruct QA_REPORT from an already-executed run (stub statuses + beads + traces), no re-run

## v0.11.0 — 2026-08-09

- 87032b0 fix(ci): pretest generates cursor assets — test runs before build in CI
- b9a201d feat(qa): QA_REPORT.md + classified failures + approval gate + /hele-build --from-qa

## v0.10.1 — 2026-08-09

- 2d58556 feat(cli): hele cursor — installs the Cursor adapter from assets embedded in the bundle

## v0.10.0 — 2026-08-09

- 5f596c5 Remove Inventra mentions from README (#1)
- 66f64c4 feat: Cursor adapter — generated from the core

## v0.9.2 — 2026-08-08

- 88e2364 docs(qa): headless always — traces and screenshots explain failures, never --headed/--ui

## v0.9.1 — 2026-08-08

- e945607 feat(stubs): VERIFY.md drafted at stub time — verify-work loads it, refreshes on drift, distills only as fallback

## v0.9.0 — 2026-08-08

- e8a7945 feat!: QA becomes Playwright authoring; new /hele-verify-work for guided human verification

## v0.8.5 — 2026-08-08

- ecaa401 feat(qa): parallel batches — up to maxParallel Wylie subagents, state-sharing stubs grouped in the same batch

## v0.8.4 — 2026-08-08

- 1519b88 feat(qa): batched stub runs with live per-test results

## v0.8.3 — 2026-08-08

- 7811192 fix(build): test economy is targeted twice over — task's unit FILES, never the full unit suite

## v0.8.2 — 2026-08-08

- 2b12b31 feat(build): test-economy contract — cheap tests are the TDD loop, expensive suites run once per task

## v0.8.1 — 2026-08-08

- b2f0cde feat(build): file-overlap guard — tasks sharing a declared file never run in parallel

## v0.8.0 — 2026-08-08

- 3d9eb02 feat: /hele-fast — the fast lane

## v0.7.8 — 2026-08-08

- abf7337 fix(ci): commit package-lock and use npm ci — deterministic esbuild, stable dist check
- 899accc fix: rebuild dist from clean npm ci install; drop stray root lockfile
- c6f2419 fix(build): --tsconfig-raw={} — hermetic bundle, immune to tsconfigs above the repo
- 0bf1c9d chore: bump to 0.7.8

## v0.7.7 — 2026-08-08

- f266c52 feat: LICENSE, CLI test suite, diacritics-aware search, GitHub Actions CI

## v0.7.6 — 2026-08-08

- 6579cfc docs: The vision — same engineering structure, new operators

## v0.7.5 — 2026-08-08

- 87e4386 docs: Inventra footer with link

## v0.7.4 — 2026-08-08

- e929b44 feat: custom harness folder name at init

## v0.7.3 — 2026-08-08

- 7f00b18 docs: drop H1 (banner is the title), boxed flow diagram matching hele ai, beads paragraph

## v0.7.2 — 2026-08-08

- 8b2044b docs: SVG banner in README — black card, white ASCII wordmark

## v0.7.1 — 2026-08-08

- d9f0304 refactor: role-prefixed model keys matching persona filenames

## v0.7.0 — 2026-08-08

- 98507b0 feat: per-agent model tiers — judgment on Fable, execution on Sonnet

## v0.6.1 — 2026-08-08

- eb52174 docs: portable install instructions (GitHub shorthand + local clone)
- 3892ad8 fix: build dispatch names the agent, targeted tests per task

## v0.6.0 — 2026-08-08

- e86cac6 feat: hele-paper-to-code skill — pixel-perfect Paper artboard implementation

## v0.5.2 — 2026-08-08

- 0ee2d05 feat: output templates — artifacts and chat visual language
- 235bb56 feat: agent personas — The Mentalist cast
- 9026376 feat: hele CLI — Node + commander (find, config, install, ai)
- 2ce7d38 feat: the 9 skills — init, feature, design, plan, stubs, build, qa, retro, status
- a5cbb0a fix: Van Pelt fetches artboards through the design tool, never from memory

## v0.5.1 — 2026-08-08

- cfd92fb feat: plugin scaffold — manifest, marketplace, README
