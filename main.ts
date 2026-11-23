import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 🫶 (heart hands, U+1FAF6) — two hands forming a heart. It is warm,
// human, and instantly readable across cultures: not just a face
// claiming to be happy, but a gesture offering love to the stranger
// seeing it. Hard not to smile back at.
const emoji = "🫶";

// The gate requires entry.txt to be 1 to 8 characters. Assert this
// emoji is exactly one code point (a single grapheme, no ZWJ
// sequences, no variation selectors, no skin-tone modifiers) and
// well within the limit.
const codePoints = [...emoji];
if (codePoints.length !== 1) {
  throw new Error(`expected exactly one code point, got ${codePoints.length}`);
}
if (emoji.length < 1 || emoji.length > 8) {
  throw new Error(`emoji must be 1 to 8 characters, got ${emoji.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), emoji + "\n", "utf8");
