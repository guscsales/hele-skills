<!-- RULES:
- Chat shape for /hele-absorb. The fences delimit the shape. Never copy
  a fence into chat. Fill the cells. Omit a table the rules say to omit.
- Every file is a markdown link. Label = file name. Target = absolute
  path on one line.
- Snapshot: print before any feature file exists. Written: print after
  the PRDs, stubs, closed plans, and QA reports exist.
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
| QA | <n> reports · <n> screenshots kept |

| File | Change |
|---|---|
| [PRODUCT_DESCRIPTION.md](/Users/you/project/.hele/features/orders/PRODUCT_DESCRIPTION.md) | created v1.0 |
| [TEST_STUBS.md](/Users/you/project/.hele/features/orders/TEST_STUBS.md) | created v1.0 |
| [QA_REPORT.md](/Users/you/project/.hele/features/orders/increments/001-place-order/QA_REPORT.md) | run 1 |

| Open |
|---|
| [index.json](/Users/you/project/.hele/index.json) |

| Actions | Your call |
|---|---|
| 1 | ✅ Done |
| 2 | ✏️ Tell me what you need |
```
