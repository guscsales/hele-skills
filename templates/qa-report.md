<!-- RULES:
- Written by /hele-qa after EVERY run — the increment's QA record.
- Covers THIS run set (active increment + rewritten stubs), not the living-file
  regression. Name the counts (ran vs living file).
- Human-readable markdown ONLY. No XML section tags. A person opens this file
  and understands what was tested, with what data, what happened, and sees the
  screenshots.
- Every stub in the run set gets: steps, data used, expected vs happened, and
  a screenshot path (absolute when linked from chat; relative embed OK inside
  this file as ./screenshots/TS-nnn.png).
- Every failure is CLASSIFIED:
    product-bug        → beads task, fixed via /hele-build --from-qa
    contract-question  → stub and product disagree; the human decides
    polish             → real but breaks no stub; human decides now-or-backlog
    blocked            → couldn't run; names what the human must unblock
- State-not-history: the file describes the LATEST run; previous runs shrink
  to one line each under History.
- Written in English, like every artifact.
-->
---
feature: <slug>
increment: NNN-<slug>
doc: QA_REPORT
run: 1
based_on: TEST_STUBS v<X.Y>
verdict: green | red
updated: <YYYY-MM-DD>
---

# QA Report — <feature> · increment NNN · run <N>

## Summary

One paragraph: run-set size (this increment, not the living file), what passed, what the failures mean for the product as a whole. Mention that CI owns the rest of the suite.

## Setup

| Item | Value |
|---|---|
| App URL | <url> |
| How started | <webServer / manual command> |
| Login(s) | <role → credentials source> |
| Seed / data | <records, fixtures, IDs used> |

## Results

### TS-nnn — <one-line title> · ✅ passing | ❌ product-bug | ⚖️ contract-question | ⚠️ polish | 🚫 blocked

**Rule:** BR-n — <title>

**Data used:** <exact inputs, user, cart, flags>

**Steps:**
1. <what the test did>
2. <…>
3. <…>

**Expected:** <what the stub demands, in product words>

**Happened:** <what the app actually did>

**Screenshot:** `./screenshots/TS-nnn.png`

*(Repeat one block per stub in the run set.)*

## Failures to route

| Stub | Class | Impact | Routing |
|---|---|---|---|
| TS-nnn | product-bug | <who is hurt> | beads `<id>` → [AGENT BE] Cho |
| TS-nnn | contract-question | stub says X, product does Y | human decides: fix product or change PRD |

## Polish

| Observation | Now or backlog |
|---|---|
| <observation that breaks no stub> | now → beads `<id>` / backlog |

## Blocked

| Stub | What is missing | Who unblocks |
|---|---|---|
| TS-nnn | <env / data / dependency> | <human or role> |

## History

- run 1 (<date>): 24/28 passing — 2 product-bugs, 1 contract-question, 1 blocked
