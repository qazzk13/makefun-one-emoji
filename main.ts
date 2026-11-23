import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 🥰 (smiling face with hearts, U+1F970) — second-pass pick. The
// first draft used 🫶 (heart hands): a warm gesture, but it has no
// face. A stranger smiles back at a smile, so a face wins the
// pairwise bet: 🥰 pairs smiling eyes and a gentle smile — the
// contagious part — with floating hearts, the warmth part. It beat
// both 🫶 and the runner-up 🤗 (hugging face) on that test.
const emoji = "🥰";

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
