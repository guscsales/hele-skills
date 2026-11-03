import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(rel) {
  return fs.readFileSync(new URL(rel, import.meta.url), 'utf8');
}

test('language defaults split chat from artifacts', () => {
  const cfg = JSON.parse(read('../../core/default-config.json'));
  assert.equal(cfg.language.chat, 'auto');
  assert.equal(cfg.language.artifacts, 'en');
});

test('chat templates render tables in the session language', () => {
  const reports = read('../../templates/chat-reports.md');
  const sticky = read('../../templates/sticky-lanes.md');
  for (const text of [reports, sticky]) {
    assert.match(text, /language\.chat/);
    assert.match(text, /language\.artifacts/);
    assert.match(text, /\| Campo \| Valor \|/);
    assert.match(text, /not text to paste/);
  }
  assert.match(reports, /Do not paste the English words when chat is not English/);
  assert.match(read('../../templates/open-channel.md'), /Any other chat language/);
});
