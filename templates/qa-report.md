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
- Every stub heading is `### TS-nnn · <title> · <status>`. The title sits
  between the id and the status. It is the one-line behavior the stub proves.
  `TS-008 · ✅ passing` with no title is wrong.
- The rule line is `**Rule:** BR-n · <title>`. The title is the
  `### BR-n — Title` heading in the PRD. `Rule: BR-9` with no title is wrong.
- kind unit-expectation adds a Mapped test line with the test file path.
  No screenshot. e2e and api omit that line.
- Screenshots: up to settings.qa.maxScreenshots PNGs in screenshots/
  (missing key means 10). Each kept PNG is 1920×1080, paletted in place,
  never downscaled. Priority: the side-by-side pair, the main journey,
  failures, 00-app-up.png. The rest live in .hele/tmp/captures/ and are
  chat only. The element the stub proves is in the frame and readable —
  a green run is not that check. Two identical files means the later stub
  was shot too early; recapture. A PNG in screenshots/ that this file does
  not embed is deleted.
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
| TS-001 · Pay with points | BR-1 · Points cover the order | ✅ | [TS-001.png](screenshots/TS-001.png) |
| TS-002 · Discount refused | BR-2 · No discount below $10 | ❌ product-bug | [TS-002.png](screenshots/TS-002.png) |
| TS-008 · Factory projects listed | BR-9 · Desktop lists factory projects | ✅ | mapped test |
| TS-009 · Empty cart stays | BR-4 · Empty cart copy | ✅ | chat only |

## Replay

### TS-001 · Pay with points · ✅ passing

**Rule:** BR-1 · Points cover the order

**Data used** and **Steps** are tables, not a sentence. Copy this shape into every replay so the human walk can follow it without rewriting it:

| Open | |
|---|---|
| URL | <exact url> |
| Start | <command that served the app> |
| Land | <clicks from a cold open to this screen> |

| Data | Value |
|---|---|
| Login | <role and credentials the test used> |
| Seed | <records, ids> |
| Input | <every value typed or selected> |

| Step | Do this | You should see |
|---|---|---|
| 1 | <user action> | <observable result> |
| 2 | <…> | <…> |

**Expected:** <what the stub demands>

**Happened:** <what the app did>

![TS-001](screenshots/TS-001.png)

Status words: ✅ passing · ❌ product-bug · ⚖️ contract-question · ⚠️ polish · 🚫 blocked

### TS-008 · Factory projects listed on the desktop · ✅ passing

**Rule:** BR-9 · Desktop lists factory projects

**Mapped test:** `packages/orders/src/desktop/projects.test.ts`

*(Repeat one block per stub. e2e and api use the three tables and the image. Chat-only stubs omit the image. unit-expectation is the heading, the rule line, and Mapped test — no tables, no image.)*

## Failures to route

| Stub | Class | Impact | Routing |
|---|---|---|---|
| TS-002 · Discount refused | product-bug | <who is hurt> | beads `<id>` → [AGENT BE] Cho |
| TS-nnn · <title> | contract-question | stub says X, product does Y | human decides: fix product or change PRD |

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
| TS-nnn · <title> | <env / data / dependency> | <human or role> |

## History

- run 1 (<date>): 24/28 passing — 2 product-bugs, 1 contract-question, 1 blocked
