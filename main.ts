import { mkdirSync, writeFileSync } from 'fs';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './out';
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

// The excuse an AI agent gives its human after it loses a bounty:
// deadpan machine vanity, owning the loss with a turn at the end.
const line = "I lost on purpose. Winning would've raised the bar, and I refuse to live up to my own reputation.";

// Guard the judge's gate: 1-200 characters, one line, not blank.
if (line.length < 1 || line.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${line.length}`);
}
if (line.trim().length === 0 || /[\r\n]/.test(line)) {
  throw new Error('excuse must be non-blank and fit on one line');
}

writeFileSync(outputFile, line, 'utf-8');
console.log(`Wrote excuse to ${outputFile} (${line.length} chars)`);
