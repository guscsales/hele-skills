import fs from 'node:fs';
import path from 'node:path';
// generated at build time by scripts/build-cursor.mjs --assets-only
import assets from './cursor-assets.json' with { type: 'json' };

/** Resolve the harness dir under a project root (.hele/ or .helerc dirName). */
export function resolveHeleDirAt(projectRoot) {
  const defaultDir = path.join(projectRoot, '.hele');
  if (fs.existsSync(defaultDir) && fs.statSync(defaultDir).isDirectory()) return defaultDir;

  const rc = path.join(projectRoot, '.helerc');
  if (!fs.existsSync(rc)) return null;
  try {
    const { dirName } = JSON.parse(fs.readFileSync(rc, 'utf8'));
    const custom = path.join(projectRoot, dirName);
    if (dirName && fs.existsSync(custom) && fs.statSync(custom).isDirectory()) return custom;
  } catch {
    // malformed .helerc
  }
  return null;
}

function cursorDefaultFor(def) {
  if (typeof def === 'object' && def !== null) return def.cursor;
  return def;
}

/**
 * Ensure project settings.agents.models has a `cursor` key per known agent.
 * - missing key → full default from template
 * - plain string → expand to { claude-code: <string>, cursor: <template> }
 * - object without cursor → add template cursor (never overwrites an existing cursor value)
 */
export function mergeCursorModels(models, defaults) {
  const next = { ...models };
  const touched = [];

  for (const [key, def] of Object.entries(defaults)) {
    const cursorDef = cursorDefaultFor(def);
    const current = next[key];

    if (current === undefined) {
      next[key] = typeof def === 'object' && def !== null ? { ...def } : def;
      touched.push(key);
      continue;
    }

    if (typeof current === 'string') {
      next[key] = { 'claude-code': current, cursor: cursorDef };
      touched.push(key);
      continue;
    }

    if (typeof current === 'object' && current !== null && !('cursor' in current)) {
      next[key] = { ...current, cursor: cursorDef };
      touched.push(key);
    }
  }

  return { models: next, touched };
}

function syncSettingsModels(projectRoot) {
  const heleDir = resolveHeleDirAt(projectRoot);
  if (!heleDir) {
    console.log('No harness folder under project — skipped settings sync (run /hele-init first).');
    return;
  }

  const settingsPath = path.join(heleDir, 'settings.json');
  if (!fs.existsSync(settingsPath)) {
    console.log(`No ${settingsPath} — skipped settings sync.`);
    return;
  }

  const templateRaw = assets.files['.cursor/hele/templates/settings.json'];
  if (!templateRaw) {
    console.error('ERROR: cursor assets missing templates/settings.json');
    process.exit(2);
  }
  const defaults = JSON.parse(templateRaw).agents?.models ?? {};

  let settings;
  try {
    settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
  } catch (err) {
    console.error(`ERROR: cannot parse ${settingsPath}: ${err.message}`);
    process.exit(2);
  }

  settings.agents ??= {};
  settings.agents.models ??= {};

  const { models, touched } = mergeCursorModels(settings.agents.models, defaults);
  if (touched.length === 0) {
    console.log(`Settings already have cursor models: ${settingsPath}`);
    return;
  }

  settings.agents.models = models;
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n');
  console.log(`Updated agents.models (cursor) in ${settingsPath}: ${touched.join(', ')}`);
}

export function cursorCommand(opts) {
  const target = path.resolve(opts.dir ?? '.');
  if (!fs.existsSync(target)) {
    console.error(`ERROR: ${target} does not exist`);
    process.exit(2);
  }

  let written = 0;
  for (const [rel, content] of Object.entries(assets.files)) {
    const full = path.join(target, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
    written++;
  }

  // the adapter's CLI is this very bundle — copy the running file
  const self = process.argv[1] && fs.existsSync(process.argv[1]) ? fs.realpathSync(process.argv[1]) : null;
  const cliDest = path.join(target, '.cursor', 'hele', 'hele.cjs');
  if (self && self !== path.resolve(cliDest)) {
    fs.copyFileSync(self, cliDest);
    fs.chmodSync(cliDest, 0o755);
    written++;
  }

  console.log(`OK: Cursor adapter installed at ${path.join(target, '.cursor')} (${written} files)`);
  console.log(`Commands available in Cursor chat: ${assets.commands.map((c) => `/${c}`).join(' · ')}`);

  syncSettingsModels(target);

  console.log('Next: run /hele-init inside Cursor if this project has no .hele/ yet — otherwise keep using the shared harness folder.');
}
