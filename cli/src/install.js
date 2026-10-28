import { execSync, spawnSync } from 'node:child_process';
import { printBanner } from './banner.js';

const has = (cmd) => spawnSync('which', [cmd], { stdio: 'ignore' }).status === 0;

function bdVersion() {
  const res = spawnSync('bd', ['--version'], { encoding: 'utf8' });
  return res.status === 0 ? res.stdout.trim().split('\n')[0] : null;
}

export function installCommand(opts) {
  printBanner();

  let version = bdVersion();
  if (version) {
    console.log(`✅ beads already installed: ${version}`);
  } else if (opts.check) {
    console.log('⚠️  beads (bd) not installed — run: hele install');
    process.exit(1);
  } else {
    installBdBinary();
  }

  if (opts.check) return;
  initBeadsProject();
}

function installBdBinary() {
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

  const version = bdVersion();
  if (!version) {
    console.log('❌ install failed');
    process.exit(1);
  }
  console.log(`✅ beads installed: ${version}`);
  console.log('▶ NEXT: run /hele-init in your project');
}

function initBeadsProject() {
  const res = spawnSync('bd', ['init', '--quiet', '--skip-agents', '--init-if-missing'], {
    stdio: 'inherit',
  });
  if (res.status !== 0) {
    console.log('❌ beads init failed');
    process.exit(res.status || 1);
  }
  console.log('✅ beads database ready');
}
