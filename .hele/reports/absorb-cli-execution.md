# Absorption CLI execution evidence

- Command: `cd cli && npm test` (one fresh execution; other assessments reuse this result).
- Source revision: `7e0b5f9cd09e5a901c724de630e0019c7b64646c`; branch `codex/absorb-hele-skills`.
- UTC start: 2026-11-18T19:26:03.111585+00:00; wall-clock 0.602 s; exit 0.
- Environment: macOS-26.5.2-arm64-arm-64bit; Node v22.22.2; npm 10.9.7; local existing dependencies, no package install.
- Raw output: [absorb-cli-tests.tap](absorb-cli-tests.tap).
- Selection: all four existing `cli/test/*.test.js` files. Source CLI subprocesses and temporary local fixtures are real; helper scoring/model merge tests run in process; language templates are source-text assertions. No Claude runtime, plugin installation/update, multiagent dispatch, application E2E or human walk was executed.
- `npm pretest` runs the existing assets-only generator; it does not ship a Cursor adapter. No production code or tests were intentionally edited.
- Local wall-clock includes npm pretest and runner startup. CI wall-clock, setup and retry costs are not measured here. No retries.
- Current CI (`.github/workflows/ci.yml`) runs npm tests, bundle build and freshness check on PRs/main pushes, manifest checks, and a PR plugin-version/changelog gate. This run does not claim those other CI stages passed.

## Tracked working-tree identity before and after

Before:
```
 M .gitignore
```
After:
```
 M .gitignore
```

Documentation-only absorption work was concurrently being written under `.hele/`. The following content hashes bind the relevant executable/test inputs for reuse. A relevant source, fixture or environment change invalidates reuse.

## Relevant source hashes

| Path | SHA-256 |
|---|---|
| `cli/package-lock.json` | `2eccff39b355b4a61832590207e013af8b20cb672062ac73fdc57b43cd51360a` |
| `cli/package.json` | `064abcf39cc2ea443d0c3ee53e1cfa454f666b913936ba514e33b71b25617c0b` |
| `cli/src/ai.js` | `5e696245930aa4117bb9f6d5966f4b6edf1b6365aca6cee17ad3747dc54297b1` |
| `cli/src/banner.js` | `702668968c478973279713a3ac6e4a832fadfedd64cbb9a8996d31b5ff4660f4` |
| `cli/src/config.js` | `5f4996b21e244152d462071dc1e94af4549623abe61497b6ec882a479ec23330` |
| `cli/src/cursor.js` | `65c41132fc4cca498fc99ce239586014e5b423630533365eda484eddd113309f` |
| `cli/src/dir.js` | `1bb991d4ec0851c5d178e119f03dac089f6310c7a47ca05ba59ae936a64a73b8` |
| `cli/src/find.js` | `21b72ef995ff12d7790a6b8d53cc8005004948b57dabbeac0f70f854b1b0ec0f` |
| `cli/src/flow-diagram.js` | `37412cf0579ef12b4086c7bc129a1dcae58934120da6d46d9825ec58d81b6240` |
| `cli/src/index.js` | `68f26edfe94b586912bb6e870e75315fab68d10fdb0540a9c1f1a04f2304acbe` |
| `cli/src/install.js` | `68ecaaa04dfff9083862a1728bab2b737004e22e2cf8afa561ec6a5cda8de361` |
| `cli/test/cli.test.js` | `b740ff271c95e63c2cd3730e0595606267603636f1bc1b39b7a2260dfda47a37` |
| `cli/test/dir.test.js` | `217a455378d6eca9bb868f6bc0fd044995b528ed3739d075d59816e38ba80d31` |
| `cli/test/find.test.js` | `f8dd31f7545af720716df3beeb98a4632e2bea4a1f1793a7e80f23f04ad7a774` |
| `cli/test/language.test.js` | `7645f70761ec1542d6677234dac065d48d883b8a3ac4447cab6f5b8101c5ae20` |
| `core/default-config.json` | `5a8964d26ff2de706c096049b2bfa3b442df67785f1c907acd00a45bfcb63bec` |
| `scripts/build-cursor.mjs` | `4690f798a0d24ee2654df5477fd79e13d83c10b6fc7f349ab276c3e641d820fc` |
| `templates/chat-reports.md` | `96605a3a5644dcd3f7af3ac7dadcf67506632db285afb6115ac174bb822e116b` |
| `templates/open-channel.md` | `3c9d46a7680dfade3b5e868d67a090d4b4fcffbd4673ac3a1909c7176f2845bb` |
| `templates/sticky-lanes.md` | `2fe916f1e1d2334bbba4a70d47ef8d78d324496d04ee73e0f2d6b94c497d9ae7` |

Generated input loaded by the parked model helper during this execution:

| Path | SHA-256 after pretest |
|---|---|
| `cli/src/cursor-assets.json` | `b2b406bde3c612ed6cf0be0aac67a071d5f2d559f007408222e6bfc5f9cb3249` |

The PR version gate has no path filter or documentation-only exemption: it applies to every pull request, including this artifact-only snapshot. Its result is not covered by the successful local test run.
