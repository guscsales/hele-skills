---
name: hele-update
description: >-
  Update the installed hele plugin to the latest version. Use when the
  user invokes /hele-update, or asks to update hele, atualizar o hele,
  or pull the latest harness.
---

# hele-update

Update the installed plugin. This is not a product lane. Do not touch feature documents, do not open a PRD, and do not commit.

<context>
The marketplace is `hele`. The plugin id is `hele-skills@hele`. Chat follows the human's language. Say **the human**. Never "CEO".
</context>

1. Read the installed copy. `claude plugin list --json`. Find every `hele-skills@hele`. Note version, scope, and `projectPath`. The one for this project wins. If only a user-scope install exists, use that. If none exist, stop and give the install commands from the README. Do not invent a second marketplace name.
2. Refresh the catalog, then the plugin. In order:
   - `claude plugin marketplace update hele`
   - `claude plugin update hele-skills@hele -s <scope>`
   If the marketplace source is a local folder, `git pull` in that folder first, then the two commands above.
3. Do not pass `-y`. If the CLI stops to confirm a marketplace command, show that command to the human and stop.
4. Report, as a table, the version before, the version after, and the scope. Files are clickable links when you name one. No Path column.
5. If the version did not change, say it is already the latest and stop.
6. If it changed, say a restart is required before the new skills load. After the restart, `/hele-init` once when `.hele/` exists, so the session rule and model keys catch up. Init does not overwrite the PRD or the settings beyond that migration.
