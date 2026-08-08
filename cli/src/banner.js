// The hele wordmark — plain white (terminal default), bold when on a TTY.
// Colors/bold are suppressed when piped or when NO_COLOR is set.

const LINES = [
  '██╗  ██╗███████╗██╗     ███████╗',
  '██║  ██║██╔════╝██║     ██╔════╝',
  '███████║█████╗  ██║     █████╗  ',
  '██╔══██║██╔══╝  ██║     ██╔══╝  ',
  '██║  ██║███████╗███████╗███████╗',
  '╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝',
];

export function banner() {
  const tty = process.stdout.isTTY && !process.env.NO_COLOR;
  const bold = tty ? '\x1b[1m' : '';
  const dim = tty ? '\x1b[2m' : '';
  const reset = tty ? '\x1b[0m' : '';
  return [
    '',
    ...LINES.map((l) => `  ${bold}${l}${reset}`),
    `  ${'─'.repeat(32)}`,
    `  ${dim}agents with memory · by Inventra${reset}`,
    '',
  ].join('\n');
}

export function printBanner() {
  console.log(banner());
}
