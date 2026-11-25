import fs from "node:fs";
import path from "node:path";

const TEXT = "The teaspoon is the only spoon that disappears. There are eleven tablespoons and one teaspoon, and it is always at the bottom of the drawer, under everything, judging you.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("TEXT must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Save the review as one plain-text file for the grader to read.
try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
