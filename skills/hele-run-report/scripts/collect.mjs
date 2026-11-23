import { createReadStream } from 'node:fs';
import { readFile, readdir, realpath, stat } from 'node:fs/promises';
import { homedir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { createInterface } from 'node:readline';

const tokenFields = [
  'input_tokens',
  'cache_creation_input_tokens',
  'cache_read_input_tokens',
  'output_tokens',
];

function phaseOf(description = '') {
  if (/\bBUILD:\s*affected checks\b/i.test(description)) return 'checks';
  if (/\b(REVIEW:|Lisbon.*reviews?\b)/i.test(description)) return 'review';
  if (/\b(?:plan|PRD|DB_CHANGES|stubs?)\b/i.test(description) && !/\bQA\b/i.test(description)) return 'planning';
  if (/\b(?:Cho|Van Pelt|Rigsby|Jane|Hightower)\b/i.test(description)) {
    return /\b(?:review|gate)\b/i.test(description) ? 'review' : 'implementation';
  }
  if (/\b(?:QA|Wylie)\b/i.test(description)) return 'qa';
  return 'other';
}

async function filesIn(directory) {
  try {
    return await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function metadataFor(file, diagnostics) {
  try {
    const metadata = JSON.parse(await readFile(file.replace(/\.jsonl$/, '.meta.json'), 'utf8'));
    return metadata && typeof metadata === 'object' ? metadata : {};
  } catch (error) {
    if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error;
    diagnostics.missingAgentMetadata++;
    return {};
  }
}

async function collectMessages(file, phase, messages, diagnostics) {
  const lines = createInterface({ input: createReadStream(file), crlfDelay: Infinity });
  for await (const line of lines) {
    if (!line.trim()) continue;
    let event;
    try {
      event = JSON.parse(line);
    } catch {
      diagnostics.invalidLines++;
      continue;
    }
    if (event?.type !== 'assistant') continue;
    const { id, model, usage } = event.message ?? {};
    if (typeof id !== 'string' || !id || !usage ||
        !tokenFields.some((field) => Number.isSafeInteger(usage[field]) && usage[field] >= 0)) {
      continue;
    }
    if (!messages.has(id)) {
      messages.set(id, {
        phase,
        model: typeof model === 'string' && /^claude-[\w.-]+$/.test(model) ? model : 'unknown',
        tokens: Object.fromEntries(tokenFields.map((field) => [field, 0])),
      });
    }
    const { tokens } = messages.get(id);
    for (const field of tokenFields) {
      if (Number.isSafeInteger(usage[field]) && usage[field] >= 0) {
        tokens[field] = Math.max(tokens[field], usage[field]);
      }
    }
  }
}

async function collectSession(input) {
  const file = await realpath(input);
  if (!file.endsWith('.jsonl') || basename(dirname(file)) === 'subagents' || !(await stat(file)).isFile()) {
    throw new Error('Expected a parent Claude Code session JSONL file.');
  }
  const diagnostics = { invalidLines: 0, missingAgentMetadata: 0 };
  const messages = new Map();
  const agents = {};
  await collectMessages(file, 'conductor', messages, diagnostics);
  const subagents = join(file.slice(0, -'.jsonl'.length), 'subagents');
  for (const entry of await filesIn(subagents)) {
    if (!entry.isFile() || !/^agent-.*\.jsonl$/.test(entry.name)) continue;
    const path = join(subagents, entry.name);
    const metadata = await metadataFor(path, diagnostics);
    const phase = phaseOf(typeof metadata.description === 'string' ? metadata.description : '');
    agents[phase] ??= { observed: 0, finished: 0, stopped: 0 };
    agents[phase].observed++;
    if (metadata.stoppedByUser) agents[phase].stopped++;
    else if (metadata.finished) agents[phase].finished++;
    await collectMessages(path, phase, messages, diagnostics);
  }

  const groups = new Map();
  for (const { phase, model, tokens } of messages.values()) {
    const key = JSON.stringify([phase, model]);
    if (!groups.has(key)) {
      groups.set(key, {
        phase, model, responses: 0,
        ...Object.fromEntries(tokenFields.map((field) => [field, 0])),
      });
    }
    const row = groups.get(key);
    row.responses++;
    for (const field of tokenFields) row[field] += tokens[field];
  }
  return { file, agents, usage: [...groups.values()], diagnostics };
}

async function listSessions(project) {
  const root = await realpath(project);
  const projectKey = root.replace(/[^a-zA-Z0-9-]/g, '-');
  const directory = join(process.env.CLAUDE_CONFIG_DIR || join(homedir(), '.claude'), 'projects', projectKey);
  const entries = await filesIn(directory);
  const logs = await Promise.all(entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.jsonl'))
    .map(async (entry) => {
      const file = join(directory, entry.name);
      return { file, modifiedAt: (await stat(file)).mtime };
    }));
  logs.sort((a, b) => b.modifiedAt - a.modifiedAt);
  return { project: root, directory, logs: logs.slice(0, 12) };
}

try {
  const args = process.argv.slice(2);
  if (args[0] === '--list' && args.length <= 2) {
    console.log(JSON.stringify(await listSessions(args[1] ?? process.cwd()), null, 2));
  } else if (args.length && args.every((arg) => !arg.startsWith('-'))) {
    const files = new Set();
    const reports = [];
    for (const arg of args) {
      const file = await realpath(resolve(arg));
      if (files.has(file)) continue;
      files.add(file);
      reports.push(await collectSession(file));
    }
    console.log(JSON.stringify(reports, null, 2));
  } else {
    throw new Error('Use --list [project] or pass one or more parent session JSONL files.');
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
