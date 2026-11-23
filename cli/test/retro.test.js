import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const collector = fileURLToPath(new URL('../../skills/hele-retro/scripts/collect.mjs', import.meta.url));

function assistant(id, usage, model = 'claude-sonnet-5-5') {
  return JSON.stringify({
    type: 'assistant',
    message: { id, model, usage, content: [{ type: 'text', text: 'private transcript' }] },
  });
}

test('retro aggregates selected sessions and subagents without returning transcript contents', (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'hele-retro-test-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const session = join(directory, 'session.jsonl');
  const baseline = join(directory, 'baseline.jsonl');
  writeFileSync(session, [
    assistant('main', { input_tokens: 3, cache_read_input_tokens: 40, output_tokens: 2 }),
    assistant('main', { output_tokens: 5 }),
    assistant('main', { output_tokens: 3 }),
    '{partial',
  ].join('\n'));
  writeFileSync(baseline, assistant('main', { output_tokens: 11 }));

  const subagents = join(directory, 'session', 'subagents');
  mkdirSync(subagents, { recursive: true });
  writeFileSync(join(subagents, 'agent-1.meta.json'), JSON.stringify({
    description: '[AGENT] Lisbon — REVIEW: T1',
    stoppedByUser: true,
  }));
  writeFileSync(join(subagents, 'agent-1.jsonl'), assistant('review', {
    cache_creation_input_tokens: 17,
    output_tokens: 7,
  }, 'claude-opus-5-5'));
  writeFileSync(join(subagents, 'agent-2.jsonl'), assistant('unknown-stage', { output_tokens: 4 }));

  const raw = execFileSync(process.execPath, [collector, session, baseline, session], { encoding: 'utf8' });
  assert.doesNotMatch(raw, /private transcript|REVIEW: T1/);
  const [report, reference, duplicate] = JSON.parse(raw);
  assert.equal(duplicate, undefined);
  assert.deepEqual(report.diagnostics, { invalidLines: 1, missingAgentMetadata: 1 });
  assert.deepEqual(report.agents.review, { observed: 1, finished: 0, stopped: 1 });
  assert.deepEqual(report.usage.find((row) => row.phase === 'conductor'), {
    phase: 'conductor', model: 'claude-sonnet-5-5', responses: 1,
    input_tokens: 3, cache_creation_input_tokens: 0, cache_read_input_tokens: 40, output_tokens: 5,
  });
  const review = report.usage.find((row) => row.phase === 'review');
  assert.equal(review.model, 'claude-opus-5-5');
  assert.equal(review.cache_creation_input_tokens, 17);
  assert.equal(review.output_tokens, 7);
  assert.equal(report.usage.find((row) => row.phase === 'other').output_tokens, 4);
  assert.equal(reference.usage[0].output_tokens, 11);
});
