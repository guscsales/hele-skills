import fs from 'node:fs';
import path from 'node:path';
import { requireHeleDir } from './dir.js';

function parseValue(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

function loadSettings(heleDir) {
  const settingsPath = path.join(heleDir, 'settings.json');
  if (!fs.existsSync(settingsPath)) {
    console.error(`ERROR: ${settingsPath} not found (run /hele-init)`);
    process.exit(2);
  }
  return { settingsPath, settings: JSON.parse(fs.readFileSync(settingsPath, 'utf8')) };
}

export function configCommand(action, dotPath, rawValue) {
  const heleDir = requireHeleDir();
  const { settingsPath, settings } = loadSettings(heleDir);

  if (action === 'list') {
    console.log(JSON.stringify(settings, null, 2));
    return;
  }

  if (!dotPath) {
    console.error(`ERROR: ${action} requires a dot path (e.g. agents.maxParallel)`);
    process.exit(2);
  }
  const keys = dotPath.split('.');

  if (action === 'get') {
    let node = settings;
    for (const k of keys) {
      if (typeof node !== 'object' || node === null || !(k in node)) {
        console.error('ERROR: path not found');
        process.exit(1);
      }
      node = node[k];
    }
    console.log(JSON.stringify(node, null, 2));
    return;
  }

  if (rawValue === undefined) {
    console.error(`ERROR: ${action} requires a value`);
    process.exit(2);
  }
  const value = parseValue(rawValue);

  let node = settings;
  for (const k of keys.slice(0, -1)) {
    if (!(k in node)) node[k] = {};
    node = node[k];
    if (typeof node !== 'object' || node === null || Array.isArray(node)) {
      console.error(`ERROR: ${k} is not an object`);
      process.exit(1);
    }
  }
  const leaf = keys.at(-1);

  if (action === 'set') {
    node[leaf] = value;
  } else if (action === 'add') {
    node[leaf] ??= [];
    if (!Array.isArray(node[leaf])) {
      console.error(`ERROR: ${dotPath} is not a list`);
      process.exit(1);
    }
    if (!node[leaf].some((v) => JSON.stringify(v) === JSON.stringify(value))) node[leaf].push(value);
  } else {
    console.error(`ERROR: unknown action "${action}" (get | set | add | list)`);
    process.exit(2);
  }

  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n');
  console.log(`OK: ${dotPath} = ${JSON.stringify(node[leaf])}`);
}
