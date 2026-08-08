import test from 'node:test';
import assert from 'node:assert/strict';
import { norm, fuzzy, scoreFeature } from '../src/find.js';

test('norm folds diacritics before stripping (pt-BR)', () => {
  assert.equal(norm('Promoção Relâmpago'), 'promocao relampago');
  assert.equal(norm('código de verificação'), 'codigo de verificacao');
  assert.equal(norm('Ação!!!  única'), 'acao unica');
});

test('norm lowercases and collapses separators', () => {
  assert.equal(norm('Checkout--Discount__v2'), 'checkout discount v2');
});

test('fuzzy: identical strings score 1, disjoint near 0', () => {
  assert.equal(fuzzy('checkout', 'checkout'), 1);
  assert.ok(fuzzy('checkout', 'zzzzzz') < 0.1);
});

test('fuzzy is diacritics-insensitive', () => {
  assert.equal(fuzzy('promoção', 'promocao'), 1);
});

const FEATURE = {
  slug: 'inventory-control',
  title: 'Inventory Control',
  aliases: ['controle de estoque', 'estoque', 'inventário'],
  summary: 'Track stock levels per location with alerts',
};

test('scoreFeature: exact slug scores 100', () => {
  const r = scoreFeature('inventory control', FEATURE);
  assert.equal(r.score, 100);
});

test('scoreFeature: exact alias scores 95', () => {
  const r = scoreFeature('controle de estoque', FEATURE);
  assert.equal(r.score, 95);
});

test('scoreFeature: accented query hits unaccented alias and vice versa', () => {
  assert.equal(scoreFeature('inventário', FEATURE).score, 95);
  assert.equal(scoreFeature('inventario', FEATURE).score, 95);
});

test('scoreFeature: substring on title scores 80', () => {
  const r = scoreFeature('inventory', FEATURE);
  assert.equal(r.score, 80);
});

test('scoreFeature: typo still matches via fuzzy above threshold', () => {
  const r = scoreFeature('inventory contrl', FEATURE);
  assert.ok(r.score >= 40, `expected >= 40, got ${r.score} via ${r.matchedOn}`);
});

test('scoreFeature: unrelated query stays below threshold', () => {
  const r = scoreFeature('payment gateway webhooks', FEATURE);
  assert.ok(r.score < 40, `expected < 40, got ${r.score} via ${r.matchedOn}`);
});
