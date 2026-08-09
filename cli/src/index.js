import { Command } from 'commander';
import { banner } from './banner.js';
import { findCommand } from './find.js';
import { configCommand } from './config.js';
import { installCommand } from './install.js';
import { aiCommand } from './ai.js';
import { cursorCommand } from './cursor.js';

const program = new Command();

program
  .name('hele')
  .description('hele — feature-delivery harness CLI')
  .version('0.1.0')
  .addHelpText('beforeAll', banner())
  .addHelpText(
    'afterAll',
    '\nNew here? Run `hele ai` to understand the AI workflow — the skills, the agents, and what each phase produces.'
  );

program
  .command('find')
  .description('search the feature index (anti-duplicate gate; agents MUST use this, never ad-hoc grep)')
  .argument('[query...]', 'search terms')
  .option('--list', 'list all registered features')
  .option('--json', 'machine-readable output')
  .action((query, opts) => findCommand(query, opts));

program
  .command('config')
  .description('read/write .hele/settings.json by dot path')
  .argument('<action>', 'get | set | add | list')
  .argument('[path]', 'dot path, e.g. agents.maxParallel')
  .argument('[value]', 'value (JSON parsed when possible)')
  .action((action, dotPath, value) => configCommand(action, dotPath, value));

program
  .command('install')
  .description('install the beads CLI (bd) via brew or the official script')
  .option('--check', 'only report whether bd is installed')
  .action((opts) => installCommand(opts));

program
  .command('cursor')
  .description('install the Cursor adapter (.cursor/ commands + agents + resources) into a project')
  .option('--dir <path>', 'target project root (default: current directory)')
  .action((opts) => cursorCommand(opts));

program
  .command('ai')
  .description('understand the AI workflow — skills, agents, and what each phase produces')
  .argument('[skill]', 'skill name for details (e.g. plan, feature, qa)')
  .action((skill) => aiCommand(skill));

program.parse();
