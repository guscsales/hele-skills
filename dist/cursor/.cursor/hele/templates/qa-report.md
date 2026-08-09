<!-- RULES:
- Written by /hele-qa after EVERY run — the increment's QA record, next to the
  EXECUTION_PLAN. Prose only: explains what broke in product terms; NO code,
  no stack traces (the beads task carries the technical evidence).
- State-not-history: the file describes the LATEST run; previous runs shrink
  to one line each in <history>.
- Every failure is CLASSIFIED — the class decides where it goes:
  product-bug        → beads task, fixed via /hele-build --from-qa
  contract-question  → stub and product disagree; the CEO decides (fix product,
                       or change the PRD via /hele-feature and rewrite the stub)
  polish             → real but breaks no stub; CEO decides now-or-backlog
  blocked            → couldn't run; names what the CEO must unblock
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

<summary>
One paragraph: suite size, what passed, what the failures mean for the product as a whole.
</summary>

<failures>
## TS-nnn — <one-line title> `product-bug`
- **Expected (the contract):** what the stub demands, in product words.
- **Happened:** what the app actually did, step by step, as a user saw it.
- **Impact:** who is affected and how bad.
- **Routing:** beads `<id>` → [AGENT BE] Cho

## TS-nnn — <one-line title> `contract-question`
- **The disagreement:** stub says X, product does Y — and why neither is obviously wrong.
- **CEO decision needed:** option A (fix product to match stub) / option B (change the PRD rule and rewrite the stub).
</failures>

<polish>
- <observation that breaks no stub> — beads `<id>` (optional) | backlog
</polish>

<blocked>
- TS-nnn — <what is missing and who can unblock it>
</blocked>

<history>
- run 1 (<date>): 24/28 passing — 2 product-bugs, 1 contract-question, 1 blocked
</history>
