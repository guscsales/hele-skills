#!/usr/bin/env node
// Generates the Cursor adapter from the core (skills/, agents/, templates/, cli/dist).
// Output: dist/cursor/.cursor/** — copy that .cursor folder into any project root.
// The repo root stays the Claude Code adapter; this is a generated view. Do not
// edit dist/cursor by hand — edit the core and re-run: node scripts/build-cursor.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist', 'cursor');
const CURSOR = path.join(OUT, '.cursor');

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
> - Subagent dispatch (the "Agent tool") = spawn a Cursor subagent. Personas are native agent definitions in \`.cursor/agents/\` (same names, model preconfigured). Parallel dispatch uses Cursor's parallel agents — same \`maxParallel\` limits; Cursor worktree isolation makes the file-overlap guard advisory.
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

function clean() {
  fs.rmSync(OUT, { recursive: true, force: true });
  for (const dir of ['commands', 'agents', 'hele/agents', 'hele/templates']) {
    fs.mkdirSync(path.join(CURSOR, dir), { recursive: true });
  }
}

function buildCommands() {
  const skillsDir = path.join(ROOT, 'skills');
  const names = [];
  for (const entry of fs.readdirSync(skillsDir)) {
    const skillPath = path.join(skillsDir, entry, 'SKILL.md');
    if (!fs.existsSync(skillPath)) continue;
    const raw = fs.readFileSync(skillPath, 'utf8');
    // strip the Claude Code plugin frontmatter; keep the body from the H1 on.
    // rewrite BEFORE inserting the preamble — the preamble's own mention of
    // CLAUDE_PLUGIN_ROOT must survive untouched.
    const body = rewrite(raw.replace(/^---\n[\s\S]*?\n---\n/, ''));
    const h1End = body.indexOf('\n', body.indexOf('# '));
    const withPreamble = `${body.slice(0, h1End + 1)}\n${PREAMBLE}${body.slice(h1End + 1)}`;
    fs.writeFileSync(path.join(CURSOR, 'commands', `${entry}.md`), withPreamble);
    names.push(entry);
  }
  return names;
}

function buildAgents() {
  const agentsDir = path.join(ROOT, 'agents');
  const names = [];
  for (const file of fs.readdirSync(agentsDir).filter((f) => f.endsWith('.md'))) {
    const name = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(agentsDir, file), 'utf8');
    const title = content.split('\n')[0].replace(/^#\s*/, '');
    const model = cursorModelFor(name);
    // native Cursor agent definition: frontmatter + full persona
    const def = [
      '---',
      `name: ${name}`,
      `description: ${JSON.stringify(title)}`,
      ...(model && model !== 'inherit' ? [`model: ${model}`] : []),
      '---',
      '',
      rewrite(content),
    ].join('\n');
    fs.writeFileSync(path.join(CURSOR, 'agents', `${name}.md`), def);
    // raw persona copy for skills that inject persona content into prompts
    fs.writeFileSync(path.join(CURSOR, 'hele', 'agents', file), rewrite(content));
    names.push(name);
  }
  return names;
}

function buildResources() {
  const templatesDir = path.join(ROOT, 'templates');
  for (const file of fs.readdirSync(templatesDir)) {
    const content = fs.readFileSync(path.join(templatesDir, file), 'utf8');
    fs.writeFileSync(path.join(CURSOR, 'hele', 'templates', file), rewrite(content));
  }
  fs.copyFileSync(path.join(ROOT, 'cli', 'dist', 'hele.cjs'), path.join(CURSOR, 'hele', 'hele.cjs'));
}

function buildReadme(commands, agents) {
  fs.writeFileSync(
    path.join(OUT, 'README.md'),
    `# hele-skills — Cursor adapter (generated)

Copy the \`.cursor/\` folder into your project root:

\`\`\`bash
cp -r dist/cursor/.cursor /path/to/your/project/
\`\`\`

Then use the commands in Cursor chat: ${commands.map((c) => `\`/${c}\``).join(' · ')}.

- Personas are native agent definitions in \`.cursor/agents/\` (${agents.length}); models are preconfigured (strong work on fable/opus, execution volume on grok) — edit the frontmatter to change.
- Project memory lives in \`.hele/\` exactly like the Claude Code adapter — the two runtimes share it; you can switch tools mid-feature.
- The hele CLI is bundled: \`node .cursor/hele/hele.cjs --help\`.

Generated from the core — do not edit by hand. Regenerate: \`node scripts/build-cursor.mjs\`.
`
  );
}

clean();
const agents = buildAgents();
const commands = buildCommands();
buildResources();
buildReadme(commands, agents);
console.log(`cursor adapter: ${commands.length} commands, ${agents.length} agents → ${path.relative(ROOT, OUT)}`);
