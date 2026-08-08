import fs from 'node:fs';
import path from 'node:path';
import { requireHeleDir } from './dir.js';

const THRESHOLD = 40;

const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** Bigram Dice coefficient — cheap fuzzy similarity in [0, 1]. */
function fuzzy(a, b) {
  const x = norm(a).replace(/ /g, '');
  const y = norm(b).replace(/ /g, '');
  if (!x || !y) return 0;
  if (x === y) return 1;
  const bigrams = (s) => {
    const m = new Map();
    for (let i = 0; i < s.length - 1; i++) {
      const bg = s.slice(i, i + 2);
      m.set(bg, (m.get(bg) || 0) + 1);
    }
    return m;
  };
  const bx = bigrams(x);
  const by = bigrams(y);
  let overlap = 0;
  for (const [bg, count] of bx) overlap += Math.min(count, by.get(bg) || 0);
  return (2 * overlap) / (Math.max(x.length - 1, 1) + Math.max(y.length - 1, 1));
}

function loadIndex(heleDir) {
  const indexPath = path.join(heleDir, 'index.json');
  if (!fs.existsSync(indexPath)) return [];
  try {
    return JSON.parse(fs.readFileSync(indexPath, 'utf8')).features ?? [];
  } catch (e) {
    console.error(`ERROR: could not read ${indexPath}: ${e.message}`);
    process.exit(2);
  }
}

function scoreFeature(query, feat) {
  const q = norm(query);
  const qKebab = q.replace(/ /g, '-');
  let best = { score: 0, matchedOn: '' };
  const consider = (score, label) => {
    if (score > best.score) best = { score: Math.round(score), matchedOn: label };
  };

  const slug = feat.slug ?? '';
  const title = feat.title ?? '';
  const aliases = feat.aliases ?? [];
  const summary = feat.summary ?? '';

  if (qKebab === slug.toLowerCase()) consider(100, 'slug (exact)');
  for (const alias of aliases) if (q === norm(alias)) consider(95, `alias "${alias}" (exact)`);
  for (const [field, label] of [[slug, 'slug'], [title, 'title']]) {
    if (q && (norm(field).includes(q) || q.includes(norm(field)))) consider(80, `${label} (substring)`);
  }
  for (const alias of aliases) {
    if (q && (norm(alias).includes(q) || q.includes(norm(alias)))) consider(78, `alias "${alias}" (substring)`);
  }
  for (const [field, label] of [[slug, 'slug'], [title, 'title'], ...aliases.map((a) => [a, `alias "${a}"`])]) {
    consider(fuzzy(q, field) * 75, `${label} (fuzzy)`);
  }

  const qTokens = new Set(q.split(' ').filter(Boolean));
  const sTokens = new Set(norm(summary).split(' ').filter(Boolean));
  if (qTokens.size && sTokens.size) {
    const overlap = [...qTokens].filter((t) => sTokens.has(t)).length / qTokens.size;
    consider(overlap * 55, 'summary (keywords)');
  }
  return best;
}

function* walkMarkdown(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkMarkdown(full);
    else if (entry.isFile() && entry.name.endsWith('.md')) yield full;
  }
}

function contentFallback(heleDir, query) {
  const tokens = norm(query).split(' ').filter((t) => t.length > 2);
  const featuresDir = path.join(heleDir, 'features');
  if (!tokens.length || !fs.existsSync(featuresDir)) return [];
  const hits = new Map();
  for (const md of walkMarkdown(featuresDir)) {
    let text;
    try {
      text = fs.readFileSync(md, 'utf8').toLowerCase();
    } catch {
      continue;
    }
    const matched = tokens.filter((t) => text.includes(t));
    if (!matched.length) continue;
    const slug = path.relative(featuresDir, md).split(path.sep)[0];
    const entry = hits.get(slug) ?? { slug, files: [], tokens: new Set() };
    entry.files.push(path.relative(heleDir, md));
    matched.forEach((t) => entry.tokens.add(t));
    hits.set(slug, entry);
  }
  return [...hits.values()]
    .map((e) => ({ ...e, tokens: [...e.tokens].sort() }))
    .sort((a, b) => b.tokens.length - a.tokens.length);
}

export function findCommand(queryWords, opts) {
  const heleDir = requireHeleDir();
  const features = loadIndex(heleDir);

  if (opts.list) {
    if (opts.json) {
      console.log(JSON.stringify(features, null, 2));
      return;
    }
    if (!features.length) console.log('NO FEATURES REGISTERED');
    for (const f of features) {
      const docs = f.docs ?? {};
      console.log(`${(f.slug ?? '?').padEnd(32)} [${f.status ?? '?'}] prd v${docs.prd ?? '-'} · ${f.summary ?? ''}`);
    }
    return;
  }

  const query = (queryWords ?? []).join(' ').trim();
  if (!query) {
    console.error('ERROR: provide search terms or --list');
    process.exit(2);
  }

  const scored = features
    .map((f) => ({ ...scoreFeature(query, f), ...f }))
    .filter((s) => s.score >= THRESHOLD)
    .sort((a, b) => b.score - a.score);

  const fallback = scored.length ? [] : contentFallback(heleDir, query);

  if (opts.json) {
    console.log(JSON.stringify({ query, index_matches: scored, content_matches: fallback }, null, 2));
    return;
  }

  if (scored.length) {
    console.log(`INDEX MATCHES for "${query}":`);
    for (const s of scored) {
      const docs = s.docs ?? {};
      console.log(`  ${String(s.score).padStart(3)}  ${s.slug.padEnd(32)} [${s.status ?? '?'}] prd v${docs.prd ?? '-'} · via ${s.matchedOn}`);
    }
  } else if (fallback.length) {
    console.log(`NO INDEX MATCHES — content matches for "${query}":`);
    for (const h of fallback) {
      console.log(`  ${h.slug.padEnd(32)} tokens=${h.tokens.join(',')} files=${h.files.length}`);
    }
    console.log('NOTE: content-only match usually means index.json aliases are missing — fix the index.');
  } else {
    console.log(`NO MATCHES for "${query}" — safe to treat as a new feature (confirm with the CEO).`);
  }
}
