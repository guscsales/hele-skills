import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { resolveHeleDir } from '../src/dir.js';

function tmpProject() {
  // realpath: macOS tmpdir is a /var → /private/var symlink and cwd reports the real path
  return fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-test-')));
}

function inDir(dir, fn) {
  const prev = process.cwd();
  process.chdir(dir);
  try {
    return fn();
  } finally {
    process.chdir(prev);
  }
}

test('finds .hele in the current directory', () => {
  const root = tmpProject();
  fs.mkdirSync(path.join(root, '.hele'));
  inDir(root, () => assert.equal(resolveHeleDir(), path.join(root, '.hele')));
});

test('walks up to find .hele from a nested directory', () => {
  const root = tmpProject();
  fs.mkdirSync(path.join(root, '.hele'));
  const nested = path.join(root, 'src', 'deep', 'module');
  fs.mkdirSync(nested, { recursive: true });
  inDir(nested, () => assert.equal(resolveHeleDir(), path.join(root, '.hele')));
});

test('resolves a custom folder name via .helerc', () => {
  const root = tmpProject();
  fs.mkdirSync(path.join(root, '.memory'));
  fs.writeFileSync(path.join(root, '.helerc'), '{"dirName": ".memory"}');
  inDir(root, () => assert.equal(resolveHeleDir(), path.join(root, '.memory')));
});

test('.helerc works from a nested directory too', () => {
  const root = tmpProject();
  fs.mkdirSync(path.join(root, '.memory'));
  fs.writeFileSync(path.join(root, '.helerc'), '{"dirName": ".memory"}');
  const nested = path.join(root, 'app');
  fs.mkdirSync(nested);
  inDir(nested, () => assert.equal(resolveHeleDir(), path.join(root, '.memory')));
});

test('malformed .helerc is ignored, walk continues', () => {
  const root = tmpProject();
  fs.writeFileSync(path.join(root, '.helerc'), 'not json');
  inDir(root, () => assert.equal(resolveHeleDir(), null));
});

test('returns null when nothing is found', () => {
  const root = tmpProject();
  inDir(root, () => assert.equal(resolveHeleDir(), null));
});

test('$HELE_DIR wins when set and valid', () => {
  const root = tmpProject();
  const custom = path.join(root, 'anywhere');
  fs.mkdirSync(custom);
  process.env.HELE_DIR = custom;
  try {
    assert.equal(resolveHeleDir(), custom);
  } finally {
    delete process.env.HELE_DIR;
  }
});
