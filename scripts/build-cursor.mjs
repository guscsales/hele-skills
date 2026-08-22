#!/usr/bin/env node
// Parked Cursor adapter generator. Default invocation does not write dist/cursor/.
// `npm run build` / `npm test` still call --assets-only so cli tests can import
// the asset map (mergeCursorModels). Claude Code is the shipped runtime.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Cursor model per persona — mirrors templates/settings.json "cursor" keys.
const CURSOR_MODELS = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'templates', 'settings.json'), 'utf8')
).agents.models;

const cursorModelFor = (personaFile) => {
  // qa-wylie has two settings keys (stubs/run) — the agent definition gets the
  // execution model; skills override per dispatch when authoring.
  const key = personaFile === 'qa-wylie' ? 'qa-wylie-run' : personaFile;
  const v = CURSOR_MODELS[key];
  return typeof v === 'object' && v !== null ? v.cursor : v;
};

const PREAMBLE = `> **CURSOR RUNTIME** — generated from [hele-skills](https://github.com/guscsales/hele-skills); do not edit, regenerate with \`node scripts/build-cursor.mjs\`.
> - **Open channel (hard):** every subagent is a Cursor Task with \`run_in_background: true\`. NEVER a blocking/foreground spawn. "Waiting for subagent" in the main chat is a defect — end the turn after the Dispatch table. You are notified when it finishes; do not Await or poll. If the CEO talks while a worker runs, answer them first.
> - Personas are native agent definitions in \`.cursor/agents/\` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same \`maxParallel\` limits; Cursor worktree isolation makes the file-overlap guard advisory. Never do the sub-agent's work in this session.
> - Models: read the \`cursor\` key from \`settings.agents.models[...]\` (values are per-runtime objects); a plain string applies to every runtime. \`inherit\` → whatever model the session runs.
> - AskUserQuestion = ask the numbered options as plain chat text and WAIT for the reply.
> - \`\${CLAUDE_PLUGIN_ROOT}\` resources live under \`.cursor/hele/\`. The hele CLI: \`node .cursor/hele/hele.cjs\` (e.g. \`node .cursor/hele/hele.cjs find <terms>\`).
> - Everything below applies verbatim.
`;

function rewrite(content) {
  return content
    .replace(/\$\{CLAUDE_PLUGIN_ROOT\}\/scripts\/hele/g, 'node .cursor/hele/hele.cjs')
    .replace(/\$\{CLAUDE_PLUGIN_ROOT\}\//g, '.cursor/hele/')
    .replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, '.cursor/hele');
}

/** Every adapter file EXCEPT the CLI bundle, as { relativePath: content }. */
export function collectFiles() {
  const files = {};
  const commands = [];
  const agents = [];

  for (const file of fs.readdirSync(path.join(ROOT, 'agents')).filter((f) => f.endsWith('.md'))) {
    const name = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(ROOT, 'agents', file), 'utf8');
    const title = content.split('\n')[0].replace(/^#\s*/, '');
    const model = cursorModelFor(name);
    files[`.cursor/agents/${file}`] = [
      '---',
      `name: ${name}`,
      `description: ${JSON.stringify(title)}`,
      ...(model && model !== 'inherit' ? [`model: ${model}`] : []),
      '---',
      '',
      rewrite(content),
    ].join('\n');
    files[`.cursor/hele/agents/${file}`] = rewrite(content);
    agents.push(name);
  }

  for (const entry of fs.readdirSync(path.join(ROOT, 'skills'))) {
    const skillPath = path.join(ROOT, 'skills', entry, 'SKILL.md');
    if (!fs.existsSync(skillPath)) continue;
    const raw = fs.readFileSync(skillPath, 'utf8');
    // rewrite BEFORE inserting the preamble — the preamble's own mention of
    // CLAUDE_PLUGIN_ROOT must survive untouched.
    const body = rewrite(raw.replace(/^---\n[\s\S]*?\n---\n/, ''));
    const h1End = body.indexOf('\n', body.indexOf('# '));
    files[`.cursor/commands/${entry}.md`] = `${body.slice(0, h1End + 1)}\n${PREAMBLE}${body.slice(h1End + 1)}`;
    commands.push(entry);
  }

  for (const file of fs.readdirSync(path.join(ROOT, 'templates'))) {
    files[`.cursor/hele/templates/${file}`] = rewrite(
      fs.readFileSync(path.join(ROOT, 'templates', file), 'utf8')
    );
  }

  const sticky = fs.readFileSync(path.join(ROOT, 'templates', 'sticky-lanes.md'), 'utf8');
  const openChannel = fs.readFileSync(path.join(ROOT, 'templates', 'open-channel.md'), 'utf8');
  files['.cursor/rules/hele-session.mdc'] = [
    '---',
    'description: hele session — sticky lanes + open channel (doing work is always a background sub-agent)',
    'alwaysApply: true',
    '---',
    '',
    rewrite(sticky),
    '',
    rewrite(openChannel),
  ].join('\n');

  return { files, commands, agents };
}

// ── CLI modes ────────────────────────────────────────────────────────────────
const assetsIdx = process.argv.indexOf('--assets-only');
if (assetsIdx !== -1) {
  const outFile = process.argv[assetsIdx + 1];
  if (!outFile) {
    console.error('usage: build-cursor.mjs --assets-only <out.json>');
    process.exit(2);
  }
  const { files, commands, agents } = collectFiles();
  fs.mkdirSync(path.dirname(path.resolve(outFile)), { recursive: true });
  fs.writeFileSync(path.resolve(outFile), JSON.stringify({ files, commands, agents }));
  console.log(`cursor assets: ${Object.keys(files).length} files → ${outFile}`);
} else {
  console.log('Cursor adapter is parked — Claude Code only. Not writing dist/cursor/.');
  console.log('Asset map for tests/CLI: node scripts/build-cursor.mjs --assets-only <out.json>');
}
