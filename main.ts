// The Houseplant Out-of-Office — make.fun entry
// u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

// Read the line, dropping a trailing newline so the output is exactly the
// entry text even if an editor adds one to entry.txt.
const line = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").replace(/\n$/, "");

// Print the line to stdout.
// The houseplant's note is one line only: the gate counts 1 to 120 characters.
process.stdout.write(line + "\n");

// Also write it to /output/entry.txt for the grader.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
