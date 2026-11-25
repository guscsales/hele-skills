import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ENTRY = fileURLToPath(new URL('../src/index.js', import.meta.url));
const ROOT = fileURLToPath(new URL('../../', import.meta.url));

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function hele(cwd, ...args) {
  return execFileSync(process.execPath, [ENTRY, ...args], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, HELE_DIR: '', NO_COLOR: '1' },
  });
}

function tempDir() {
  return fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'hele-surfaces-')));
}

// Every markdown file under the three plugin surfaces that must never carry a private default.
function surfaceFiles() {
  const out = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
      const rel = `${dir}/${entry.name}`;
      if (entry.isDirectory()) walk(rel);
      else if (entry.name.endsWith('.md')) out.push(rel);
    }
  };
  for (const dir of ['skills', 'agents', 'templates']) walk(dir);
  return out;
}

describe('output across surfaces', () => {
  test('TS-028 negative scan: no private preset, level default or row-limit number in skills, agents or templates', () => {
    const files = surfaceFiles();
    assert.ok(files.length > 20, 'the scan reads the real surface');
    for (const rel of files) {
      const text = read(rel);
      assert.doesNotMatch(text, /maxTableRows[^\n]{0,12}\b\d+\b/, `${rel}: maxTableRows followed by a number`);
      assert.doesNotMatch(text, /\b(row limit|rows?)\b[^\n]{0,20}\b(8|15|30)\b/i, `${rel}: a row-limit number`);
      assert.doesNotMatch(
        text,
        /`(compact|standard|detailed)`[^\n]*`(summary|issues|brief|links|inline|off)`/,
        `${rel}: a preset paired with a section value`,
      );
      assert.doesNotMatch(text, /stubs in full/i, `${rel}: the old unconditional stubs-in-full rule`);
      assert.doesNotMatch(text, /Tables, never lines/, `${rel}: the old unconditional tables rule`);
    }
  });

  test('TS-028 positive: .docs/configuration.md carries the preset table (compact 8, standard 15, detailed 30)', () => {
    const docs = read('.docs/configuration.md');
    assert.match(docs, /\| `compact` \|[^\n]*\| 8 \|/);
    assert.match(docs, /\| `standard` \|[^\n]*\| 15 \|/);
    assert.match(docs, /\| `detailed` \|[^\n]*\| 30 \|/);
    assert.deepEqual(JSON.parse(read('core/default-config.json')).output, { preset: 'compact' });
  });

  test('TS-053: a project without output presents as compact; the change and the way back are documented', () => {
    const docs = read('.docs/configuration.md');
    assert.match(docs, /without `output`[^\n]*`compact`/i);
    assert.match(docs, /default changed/i);
    assert.match(docs, /hele config set output\.preset detailed/);
    const changelog = read('CHANGELOG.md');
    const entry = changelog.slice(changelog.indexOf('## v1.8.0'), changelog.indexOf('## v1.7.0'));
    assert.ok(entry.length > 0, 'v1.8.0 entry exists above v1.7.0');
    assert.match(entry, /compact/);
    assert.match(entry, /hele config set output\.preset detailed/);
    assert.match(entry, /\/hele-init/);
  });

  test('BR-5: docs no longer promise that a missing key uses the default, and name effective output', () => {
    const docs = read('.docs/configuration.md');
    const cli = read('.docs/cli.md');
    assert.doesNotMatch(docs, /still uses the default in the table/);
    assert.doesNotMatch(cli, /A key the project file does not have uses the defaults/);
    for (const text of [docs, cli]) {
      assert.match(text, /hele config effective output/);
      assert.match(text, /never merge defaults|never merges? defaults|saved values only/i);
    }
  });

  test('BR-26/BR-6 help: config --help, .docs/cli.md and README list unset and effective', () => {
    const help = hele(tempDir(), 'config', '--help');
    assert.match(help, /unset/);
    assert.match(help, /effective/);
    for (const text of [read('.docs/cli.md'), read('README.md')]) {
      assert.match(text, /unset/);
      assert.match(text, /effective/);
    }
    assert.match(read('README.md'), /hele config get\|set\|add\|unset\|list\|effective/);
    assert.match(read('.docs/cli.md'), /hele config unset output\.sections\.coverage/);
  });

  test('BR-25 and BR-24 docs: reinit adds only output.preset; negative maxTableRows needs --', () => {
    const docs = read('.docs/configuration.md');
    assert.match(docs, /adds only `output\.preset`/);
    assert.match(docs, /--/);
    assert.match(docs, /argument parser/i);
  });

  test('BR-10: hele ai init, feature and qa mention the output setting', () => {
    const cwd = tempDir();
    for (const skill of ['init', 'feature', 'qa']) {
      assert.match(hele(cwd, 'ai', skill), /output/, `hele ai ${skill}`);
    }
    assert.match(hele(cwd, 'ai', 'init'), /output\.preset/);
    assert.match(hele(cwd, 'ai', 'qa'), /hele config effective output|effective output/);
  });

  test('release: plugin.json and marketplace.json are 1.8.0 and equal the newest CHANGELOG heading', () => {
    const newest = read('CHANGELOG.md').match(/^## v(\d+\.\d+\.\d+)/m)[1];
    assert.equal(newest, '1.8.0');
    assert.equal(JSON.parse(read('.claude-plugin/plugin.json')).version, '1.8.0');
    assert.equal(JSON.parse(read('.claude-plugin/marketplace.json')).plugins[0].version, '1.8.0');
  });

  test('cross-surface carry-overs: dispatch is always announced; a request never hides always-visible content', () => {
    assert.match(
      read('templates/open-channel.md'),
      /Every dispatch is announced at every level with its agent tag, its model and its work/,
    );
    assert.match(
      read('skills/hele/SKILL.md'),
      /never hides a failure, a blocker, missing required coverage, a product question, a required decision, an option or an approval/,
    );
  });

  test('open channel lets the main session read the effective output, and the session rule stays byte-equal', () => {
    const open = read('templates/open-channel.md');
    const may = open.slice(open.indexOf('Main session may:'), open.indexOf('Main session must not:'));
    assert.match(may, /`hele find`[^\n]*`hele config effective output`/);
    assert.equal(read('.claude/rules/hele-session.md'), read('templates/sticky-lanes.md') + read('templates/open-channel.md'));
  });

  test('Wylie STUBS return keeps scope/version and rule coverage', () => {
    assert.match(read('agents/qa-wylie.md'), /\*\*STUBS:\*\*[^\n]*scope\/version, rule coverage/);
  });

  test('absorb Snapshot rows the human approves are paginated or grouped, never cut', () => {
    const phase = read('skills/hele-absorb/SKILL.md').split('<phase name="3-snapshot">')[1].split('</phase>')[0];
    assert.match(phase, /paginated or grouped, never cut/i);
  });
});
