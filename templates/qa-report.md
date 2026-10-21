<!-- RULES:
- Written by /hele-qa after EVERY run — the increment's QA record.
- Covers THIS run set (active increment + rewritten stubs), not the living-file
  regression. Name the counts (ran vs living file).
- Human-readable markdown ONLY. No XML section tags. A person opens this file
  and understands what was tested, with what data, what happened, and sees the
  screenshots.
- Every stub in the run set gets: steps, data used, expected vs happened, and
  a screenshot path. Relative embed inside this file is ./screenshots/TS-nnn.png
  for a kept shot. A shot past the budget is the words "chat only" — no embed,
  no link into .hele/tmp/.
- Every failure is CLASSIFIED:
    product-bug        → beads task, fixed via /hele-build --from-qa
    contract-question  → stub and product disagree; the human decides
    polish             → real but breaks no stub; human decides now-or-backlog
    blocked            → couldn't run; names what the human must unblock
- No unanswered questions in this file. Anything the run could not decide was
  asked before the file was written. The answer lives under Decisions, with
  where it went (PRD patch, fix task, backlog).
- Screenshots: at most 10 PNGs in screenshots/, shrunk before they stay.
  Priority: the side-by-side pair, the main journey, failures, 00-app-up.png.
  The rest live in .hele/tmp/captures/ and are chat only. Each kept PNG shows
  a different, settled frame — the panel open, not mid-slide. Two identical
  files means the later stub was shot too early; recapture. A PNG in
  screenshots/ that this file does not embed is deleted.
- Side by side comes first when the change is visible: the same key screen
  without this increment and with it. No real "before" (brand-new screen, base
  that cannot run) → one sentence why. Never invent a pair.
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

## Side by side

| Without this increment | With it |
|---|---|
| ![before](screenshots/before.png) | ![after](screenshots/after.png) |

One line: what changed on this screen, in product words. (No real before: this section is that one sentence, no images.)

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

| Stub | Rule | Result | Screenshot |
|---|---|---|---|
| TS-001 | BR-1 | ✅ | [TS-001.png](screenshots/TS-001.png) |
| TS-002 | BR-2 | ❌ product-bug | [TS-002.png](screenshots/TS-002.png) |
| TS-009 | BR-4 | ✅ | chat only |

## Replay

### TS-nnn — <one-line title> · ✅ passing | ❌ product-bug | ⚖️ contract-question | ⚠️ polish | 🚫 blocked

**Rule:** BR-n — <title>

**Data used:** <exact inputs, user, cart, flags>

**Steps:**
1. <what the test did, in user terms — screen, login, clicks>
2. <…>

**Expected:** <what the stub demands, in product words>

**Happened:** <what the app actually did>

![TS-nnn](screenshots/TS-nnn.png)

*(Repeat one block per stub in the run set. Chat-only stubs omit the image.)*

## Failures to route

| Stub | Class | Impact | Routing |
|---|---|---|---|
| TS-nnn | product-bug | <who is hurt> | beads `<id>` → [AGENT BE] Cho |
| TS-nnn | contract-question | stub says X, product does Y | human decides: fix product or change PRD |

## Decisions

| Asked | Answer | Where it went |
|---|---|---|
| <question raised by this run> | <the human's answer> | PRD BR-n patched / beads `<id>` / backlog |

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
