import { execSync, spawnSync } from 'node:child_process';
import { printBanner } from './banner.js';

const has = (cmd) => spawnSync('which', [cmd], { stdio: 'ignore' }).status === 0;

function bdVersion() {
  const res = spawnSync('bd', ['--version'], { encoding: 'utf8' });
  return res.status === 0 ? res.stdout.trim().split('\n')[0] : null;
}

export function installCommand(opts) {
  printBanner();

  const existing = bdVersion();
  if (existing) {
    console.log(`✅ beads already installed: ${existing}`);
    return;
  }
  if (opts.check) {
    console.log('⚠️  beads (bd) not installed — run: hele install');
    process.exit(1);
  }

  console.log('📦 installing beads (bd)...');
  try {
    if (has('brew')) {
      execSync('brew install beads', { stdio: 'inherit' });
    } else {
      execSync('curl -fsSL https://raw.githubusercontent.com/gastownhall/beads/main/scripts/install.sh | bash', {
        stdio: 'inherit',
        shell: '/bin/bash',
      });
    }
  } catch {
    // fall through to the final check — the installer's own output explains the failure
  }

  const installed = bdVersion();
  if (installed) {
    console.log(`✅ beads installed: ${installed}`);
    console.log("▶ NEXT: run /hele-init in your project (it runs 'bd init --quiet' for you)");
  } else {
    console.log('❌ install failed — see https://beads.gascity.com/');
    process.exit(1);
  }
}
