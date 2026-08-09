<!-- RULES:
- The ONE artifact a fast-lane increment leaves behind. Everything a future
  session needs to understand this change lives here — keep it complete, keep
  it short. Frozen after shipping, like any per-increment doc.
- classification is "bugfix" or "behavior-change". behavior-change REQUIRES
  the memory-sync section to list the PRD/stub patches; bugfix states none.
- Written in English, like every artifact.
-->
---
feature: <slug>
increment: NNN-fast-<slug>
doc: FAST
version: "1.0"
based_on: PRODUCT_DESCRIPTION v<X.Y>
classification: bugfix | behavior-change
status: shipped
updated: <YYYY-MM-DD>
---

# FAST — <one-line title>

<what-and-why>
2–4 lines: what was wrong or requested, why it mattered, what changed.
</what-and-why>

<changes>
- `path/to/file` — one line on what changed there
</changes>

<tests>
- targeted: <what ran during build, results>
- full suite: <pass/fail + counts>
- e2e specs: TS-nnn, TS-nnn re-run | none (no e2e coverage touched)
</tests>

<memory-sync>
- PRD: BR-n rewritten, v<X.Y> → v<X.Z> | none needed (bugfix — rules already correct)
- TEST_STUBS: TS-nnn updated | none
</memory-sync>

<beads>
- <issue-id> — FAST: <task>
</beads>

<evidence>
Short proof it works: test output line, screenshot reference, before/after.
</evidence>
