// Chat output resolution: the one place that knows the preset values, the
// allowed values per key, and the plugin default. Skills and agents never
// carry a number or a default of their own; they ask `hele config effective output`.

export const PLUGIN_DEFAULT_PRESET = 'compact';

export const OUTPUT_PRESETS = {
  compact: {
    tables: 'auto',
    maxTableRows: 8,
    sections: {
      testStubs: 'summary',
      coverage: 'summary',
      prdDelta: 'summary',
      qaResults: 'issues',
      dispatch: 'brief',
      screenshots: 'links',
    },
  },
  standard: {
    tables: 'auto',
    maxTableRows: 15,
    sections: {
      testStubs: 'summary',
      coverage: 'summary',
      prdDelta: 'full',
      qaResults: 'issues',
      dispatch: 'brief',
      screenshots: 'links',
    },
  },
  detailed: {
    tables: 'always',
    maxTableRows: 30,
    sections: {
      testStubs: 'full',
      coverage: 'full',
      prdDelta: 'full',
      qaResults: 'full',
      dispatch: 'full',
      screenshots: 'inline',
    },
  },
};

const SECTION_VALUES = {
  testStubs: ['off', 'summary', 'full'],
  coverage: ['off', 'summary', 'full'],
  prdDelta: ['summary', 'full'],
  qaResults: ['summary', 'issues', 'full'],
  dispatch: ['brief', 'full'],
  screenshots: ['off', 'links', 'inline'],
};

export const SECTION_KEYS = Object.keys(SECTION_VALUES);

const isPlainObject = (v) => typeof v === 'object' && v !== null && !Array.isArray(v);

// Allowed values per top-level key (BR-18). Each validator returns true when the value is allowed.
export const OUTPUT_KEYS = {
  preset: (v) => typeof v === 'string' && Object.hasOwn(OUTPUT_PRESETS, v),
  tables: (v) => v === 'auto' || v === 'always',
  maxTableRows: (v) => typeof v === 'number' && Number.isInteger(v) && v > 0,
};

const sectionValid = (name, v) => typeof v === 'string' && SECTION_VALUES[name].includes(v);

function describeAllowed(key) {
  if (key === 'preset') return 'compact | standard | detailed';
  if (key === 'tables') return 'auto | always';
  if (key === 'maxTableRows') return 'a positive integer';
  return SECTION_VALUES[key].join(' | ');
}

function checkSections(value, label) {
  if (!isPlainObject(value)) return `${label} must be an object`;
  for (const [k, v] of Object.entries(value)) {
    if (!Object.hasOwn(SECTION_VALUES, k)) {
      return `${label}.${k} is not an output setting (allowed: ${SECTION_KEYS.join(', ')})`;
    }
    if (!sectionValid(k, v)) return `${label}.${k} must be ${describeAllowed(k)}`;
  }
  return null;
}

/**
 * Validate a write under `output`. `keys` is the dot path split on `.` with
 * keys[0] === 'output'. Validates only the path being written and its value,
 * so an unrelated hand-edited invalid value elsewhere never blocks a valid write.
 * Returns null when allowed, or an error message.
 */
export function validateOutputWrite(keys, value) {
  const rest = keys.slice(1);

  if (rest.length === 0) {
    if (!isPlainObject(value)) return 'output must be an object';
    for (const [k, v] of Object.entries(value)) {
      if (k === 'sections') {
        const err = checkSections(v, 'output.sections');
        if (err) return err;
      } else if (Object.hasOwn(OUTPUT_KEYS, k)) {
        if (!OUTPUT_KEYS[k](v)) return `output.${k} must be ${describeAllowed(k)}`;
      } else {
        return `output.${k} is not an output setting (allowed: preset, tables, maxTableRows, sections)`;
      }
    }
    return null;
  }

  if (rest.length === 1) {
    const [k] = rest;
    if (k === 'sections') return checkSections(value, 'output.sections');
    if (Object.hasOwn(OUTPUT_KEYS, k)) {
      return OUTPUT_KEYS[k](value) ? null : `output.${k} must be ${describeAllowed(k)}`;
    }
    return `output.${k} is not an output setting (allowed: preset, tables, maxTableRows, sections)`;
  }

  if (rest.length === 2 && rest[0] === 'sections') {
    const name = rest[1];
    if (!Object.hasOwn(SECTION_VALUES, name)) {
      return `output.sections.${name} is not an output setting (allowed: ${SECTION_KEYS.join(', ')})`;
    }
    return sectionValid(name, value) ? null : `output.sections.${name} must be ${describeAllowed(name)}`;
  }

  return `${keys.join('.')} is not an output setting`;
}

/**
 * Resolve the effective chat output from saved settings (or null/absent):
 * per field, a saved valid override, else the saved valid preset's value, else compact.
 * Invalid or unknown saved values are reported in `warnings`, never thrown.
 */
export function resolveEffectiveOutput(settings) {
  const warnings = [];
  const saved = isPlainObject(settings) ? settings.output : undefined;
  let presetName = PLUGIN_DEFAULT_PRESET;
  let top = {};
  let sections;

  if (saved !== undefined && !isPlainObject(saved)) {
    warnings.push({ key: 'output', saved, used: PLUGIN_DEFAULT_PRESET, reason: 'not-object' });
  } else if (isPlainObject(saved)) {
    if ('preset' in saved) {
      if (OUTPUT_KEYS.preset(saved.preset)) presetName = saved.preset;
      else warnings.push({ key: 'output.preset', saved: saved.preset, used: PLUGIN_DEFAULT_PRESET, reason: 'invalid' });
    }
    top = saved;
    sections = saved.sections;
  }

  const preset = OUTPUT_PRESETS[presetName];
  const result = { preset: presetName, tables: preset.tables, maxTableRows: preset.maxTableRows, sections: { ...preset.sections }, warnings };

  for (const [k, v] of Object.entries(top)) {
    if (k === 'preset' || k === 'sections') continue;
    if (!Object.hasOwn(OUTPUT_KEYS, k)) {
      warnings.push({ key: `output.${k}`, saved: v, used: null, reason: 'unknown' });
    } else if (OUTPUT_KEYS[k](v)) {
      result[k] = v;
    } else {
      warnings.push({ key: `output.${k}`, saved: v, used: preset[k], reason: 'invalid' });
    }
  }

  if (sections !== undefined) {
    if (!isPlainObject(sections)) {
      warnings.push({ key: 'output.sections', saved: sections, used: presetName, reason: 'not-object' });
    } else {
      for (const [k, v] of Object.entries(sections)) {
        if (!Object.hasOwn(SECTION_VALUES, k)) {
          warnings.push({ key: `output.sections.${k}`, saved: v, used: null, reason: 'unknown' });
        } else if (sectionValid(k, v)) {
          result.sections[k] = v;
        } else {
          warnings.push({ key: `output.sections.${k}`, saved: v, used: preset.sections[k], reason: 'invalid' });
        }
      }
    }
  }

  return result;
}
