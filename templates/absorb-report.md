<!-- RULES:
- Chat shape for /hele-absorb. The fences delimit the shape. Never copy
  a fence into chat. Fill the cells in the chat language. English words
  in a fence are the contract, not text to paste. Omit a table the rules say to omit.
- Every file is a markdown link. Label = file name. Target = absolute
  path on one line.
- Snapshot: print before any feature file exists. Written: print after
  the PRDs, stubs, closed plans, and QA reports exist.
- The effective output (`## Output` in chat-reports.md) decides how much
  of Written appears. Counts cover every written artifact. Gaps and blocked
  items are never cut by the row limit: one line each with id and cause.
  Only the Files table follows the row limit and ends with the omission
  line. Snapshot approval rows are never cut: paginate or group them.
-->

## Snapshot

```
| Report | Scope |
|---|---|
| 🗺️ ABSORB | <project name> · snapshot |

| Field | Value |
|---|---|
| Features | <n> |
| Increments | <n> |
| Read epic | closed |

| Feature | Increment | What exists today | Evidence |
|---|---|---|---|
| orders | 001-place-order | A visitor can place an order | [place.test.ts](/Users/you/project/tests/place.test.ts) |

| Already documented | What 1 will do |
|---|---|
| billing | leave the PRD as it is |

| # | Doubt | Recommendation |
|---|---|---|
| 1 | The screen allows cancel after ship. The API rejects it. | The API rule stands — shipped orders cannot be cancelled |

| Actions | Your call |
|---|---|
| 1 | ✅ Approve → write the PRDs, stubs, closed increments, and QA reports |
| 2 | ✏️ Tell me what's wrong |
```

Omit **Already documented** when every slug is new. Omit **Doubt** when nothing would change the cut.

## Written

```
| Report | Scope |
|---|---|
| 🗺️ ABSORB | <project name> · written |

| Field | Value |
|---|---|
| Features | <n> written |
| Increments | <n> closed |
| Stubs | <n> |
| QA | <n> reports · <n> behaviors evidenced · <n> gaps/blocked · <n> optional screenshots |

| Gap or blocked | Cause |
|---|---|
| orders · 001-place-order · TS-004 | no assertion for the refund refusal |

| File | Change |
|---|---|
| [PRODUCT_DESCRIPTION.md](/Users/you/project/.hele/features/orders/PRODUCT_DESCRIPTION.md) | created v1.0 |
| [TEST_STUBS.md](/Users/you/project/.hele/features/orders/TEST_STUBS.md) | created v1.0 |
| [QA_REPORT.md](/Users/you/project/.hele/features/orders/increments/001-place-order/QA_REPORT.md) | run 1 |

<shown> of <total> shown · <omitted> more in [index.json](/Users/you/project/.hele/index.json) or the feature folders, or ask "show all files"

| Open |
|---|
| [index.json](/Users/you/project/.hele/index.json) |

| Actions | Your call |
|---|---|
| 1 | ✅ Done |
| 2 | ✏️ Tell me what you need |
```

Written: the counts (features, closed increments, scenarios, evidence, gaps/blocked) cover every written artifact, whatever the Files table shows. Every gap and blocked item is one line each with its id and cause in the Gap or blocked table, outside the row limit: all of them appear under every setting, and only the detail per item follows the output level. The Files table follows the effective row limit (see `## Output` in chat-reports.md) and ends with the omission line, in the chat language, naming how many files were omitted and where to see them; omit that line when every file fits. Omit the Gap or blocked table when there are none. The written files themselves are complete at every setting.
