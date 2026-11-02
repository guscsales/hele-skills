# Sticky lane

`/hele` stays in force for the rest of this conversation. The human does not re-type the slash command. Follow-ups stay in that skill: the lane, the agent chain, the documents. Beads stay on Feature, Fast, and Bugfix. Never implement ad-hoc.

There is no state file. The feature is the folder under `.hele/features/<slug>/`. The increment is the folder this conversation is building. After `/clear`, resume `/hele` and resolve the feature with `hele find` plus the human's words, and the increment as the one they name or the newest `increments/` folder of that feature. Do not write a phase anywhere.

Also obey `open-channel.md`. The main session stays free. Doing work is a background sub-agent. If the human talks while a worker is running, answer them first.

At the start of every user message, before writing product code:

1. **A `/hele-*` command was invoked this turn** — that skill wins. The sticky lane yields. Prefer `/hele` for product work. The other pipeline skills are phase contracts `/hele` reads, not a menu.
2. **Build-until-pass phrase** (match intent, EN or PT): `build til pass`, `build until pass`, `build until it passes`, `make the build pass`, `compile until green`, `typecheck until pass`, `builda até passar`, `faz o build passar`, `build até passar`, `arruma o build`. This is the project compile, not `/hele-build` and not a product change. Read `templates/build-until-pass.md` and dispatch background `[AGENT] Summer`. Stay in `/hele` afterward.
3. **This conversation already ran `/hele`** and steps 1–2 did not fire — re-read `skills/hele/SKILL.md` and execute it with this message. A bare prompt is another ask, an Options reply, or a correction of the increment already in play. A correction found in manual verify goes back to the PRD on that increment, then the flow runs again. It does not open a new feature. Flows already marked pass are not walked again.
4. **Fresh conversation, no slash command** — if the human is clearly continuing a feature that already has documents, resume `/hele` on that feature. Do not look for `state.json`.

Phase contracts `/hele` runs: `hele-init`, `hele-feature`, `hele-fast`, `hele-design`, `hele-plan`, `hele-stubs`, `hele-build`, `hele-qa`, `hele-verify-work`. `/hele-update` is the plugin update. It is not a phase.
