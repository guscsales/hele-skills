# hele-skills — Cursor adapter (generated)

The `hele cursor` installer is parked. To drop this generated adapter into a project by hand:

```bash
cp -r dist/cursor/.cursor /path/to/your/project/
```

Then use the commands in Cursor chat: `/hele-build` · `/hele-design` · `/hele-fast` · `/hele-feature` · `/hele-init` · `/hele-iterate` · `/hele-paper-to-code` · `/hele-plan` · `/hele-qa` · `/hele-retro` · `/hele-status` · `/hele-stubs` · `/hele-verify-work`.

- Personas are native agent definitions in `.cursor/agents/` (9); models are preconfigured (strong work on fable/opus, execution volume on grok) — edit the frontmatter to change.
- Project memory lives in `.hele/` exactly like the Claude Code adapter — the two runtimes share it; you can switch tools mid-feature.
- The hele CLI is bundled: `node .cursor/hele/hele.cjs --help`.

Generated from the core — do not edit by hand. Regenerate: `node scripts/build-cursor.mjs`.
