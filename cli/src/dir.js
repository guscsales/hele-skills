import fs from 'node:fs';
import path from 'node:path';

/**
 * Resolve the hele directory: $HELE_DIR if set, otherwise walk up from cwd
 * looking for `.hele/`. Returns null when not found.
 */
export function resolveHeleDir() {
  const env = process.env.HELE_DIR;
  if (env) {
    const p = path.resolve(env);
    return fs.existsSync(p) && fs.statSync(p).isDirectory() ? p : null;
  }
  let cur = process.cwd();
  for (;;) {
    const candidate = path.join(cur, '.hele');
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) return candidate;
    const parent = path.dirname(cur);
    if (parent === cur) return null;
    cur = parent;
  }
}

export function requireHeleDir() {
  const dir = resolveHeleDir();
  if (!dir) {
    console.error('ERROR: no .hele directory found (set $HELE_DIR or run /hele-init)');
    process.exit(2);
  }
  return dir;
}
