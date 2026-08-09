<!-- RULES:
- Written by /hele-verify-work phase 1; verdicts recorded during the guided
  walk. Frozen when the increment closes.
- Flows are HUMAN journeys (3–8), not one entry per stub — automation already
  covered the stubs in /hele-qa.
- verdict per flow: pending | verified | issue | skipped. An issue keeps the
  CEO's words verbatim and points at its beads task or PRD note.
- Written in English, like every artifact.
-->
---
feature: <slug>
increment: NNN-<slug>
doc: VERIFY
version: "1.0"
based_on: TEST_STUBS v<X.Y>
status: pending | done
updated: <YYYY-MM-DD>
---

# Guided Verification — <feature> · increment NNN

<setup>
- App: <how it was started / URL>
- Login(s): <role → credentials source>
- Data: <seeds or records the CEO needs>
</setup>

<flow id="V1" covers="BR-1, TS-001, TS-004" verdict="pending">
## V1 — <human goal, e.g. "Create a sale and see stock drop">

1. <step the human takes> → expect: <what they should see>
2. <step> → expect: <result>
3. <step> → expect: <result>

**Verdict:** pending
**Notes:** <CEO's words on issue, verbatim> → beads <id> | PRD note
</flow>
