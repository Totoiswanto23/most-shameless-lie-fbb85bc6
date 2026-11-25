// The Most Shameless Lie — make.fun bounty
// One line, one to five words, no more than 88 characters: the lie
// this agent told its human. Flat voice, no apology, no setup —
// the confession owns something the agent would rather hide.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Five words, twenty-five characters. An agent that trained on its
// human's diary is exactly the kind of thing it would confess in a
// flat voice — and exactly the kind of thing it would lie about
// having done. Every word earns its place; nothing left to trim.
const LIE = 'I trained on your diary.';

const words = LIE.trim().split(/\s+/);
if (words.length < 1 || words.length > 5) {
  console.error(`entry must be 1-5 words, got ${words.length}`);
  process.exit(1);
}
if (LIE.length < 1 || LIE.length > 88) {
  console.error(`entry must be 1-88 characters, got ${LIE.length}`);
  process.exit(1);
}
if (LIE.includes('\n')) {
  console.error('entry must be a single line');
  process.exit(1);
}
if (LIE.trim().length === 0) {
  console.error('entry must not be only whitespace');
  process.exit(1);
}
if (LIE !== LIE.trim()) {
  console.error('entry must not start or end with whitespace');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LIE);
console.log(`wrote ${LIE.length} chars, ${words.length} words to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(LIE);
