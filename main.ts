import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Sleeve notes for the Frog Trio — title and blurb kept as separate,
// named constants so the entry stays easy to read and edit.
const TITLE = "Pond Standards";

const BLURB =
  "From the back room of the Lily Pad, where the trio holds the Tuesday slot and the regulars keep quiet for the ballads. Marsh on tenor comes in a beat late and means it. Bullfrog walks the bass like he built the floorboards. Tad, eleven weeks old, keeps time on a biscuit tin with brushes. Nine standards, no sheet music, and a \"Blue in Green\" so quiet you hear the rain on the roof.";

const text = `${TITLE}\n\n${BLURB}`;

// The bounty requires 1–400 characters (Unicode code points), not blank.
const length = [...text].length;
if (length < 1 || length > 400) {
  throw new Error(`entry must be 1–400 Unicode characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
