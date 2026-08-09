import fs from 'node:fs';
import path from 'node:path';
// generated at build time by scripts/build-cursor.mjs --assets-only
import assets from './cursor-assets.json' with { type: 'json' };

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
  console.log('Next: run /hele-init inside Cursor (or keep using an existing .hele/ — the runtimes share it).');
}
