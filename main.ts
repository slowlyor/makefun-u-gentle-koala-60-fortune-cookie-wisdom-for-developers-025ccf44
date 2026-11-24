// Fortune Cookie Wisdom for Developers — make.fun bounty entry.
//
// One original fortune-cookie line for a software developer, written out
// by this small deterministic program. No network, no randomness, no
// model calls: the line is fixed in source and the program only writes it
// to /output/entry.txt, exactly as the competition gate requires.
//
// The line plays on the Friday-deploy dread every developer knows, and
// turns it: the "fortune" is not the luck of the deploy but the rollback
// plan written beforehand — the safety net, not the gamble.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "You will deploy on a Friday and survive — the fortune was never the risk, only the rollback you wrote first.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // The gate requires 1–120 characters of non-whitespace text; refuse
  // to write anything that would fail it rather than emit a bad entry.
  if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.trim().length === 0) {
    throw new Error(`fortune must be 1-120 characters, got ${FORTUNE.length}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
  console.log(FORTUNE);
}

main();
