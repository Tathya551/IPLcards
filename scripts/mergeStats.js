import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

async function main() {
  const dataDir = path.resolve("data");
  const cardDataFile = path.join(dataDir, "cardData.js");
  const scrapedFile = path.join(dataDir, "scrapedStats.json");

  const { default: cardData } = await import(pathToFileURL(cardDataFile).href);

  const scrapedRaw = await fs.readFile(scrapedFile, "utf-8");
  const scraped = JSON.parse(scrapedRaw);

  const statsByName = new Map(scraped.map((s) => [s.name, s]));

  const merged = cardData.map((card) => {
    const s = statsByName.get(card.name);
    if (s && !s.error) {
      return {
        name: card.name,
        team: card.team,
        img: card.img,
        runs: Number(s.runs),
        batAvg: parseFloat(s.batAvg),
        batSR: parseFloat(s.batSR),
        highScore: Number(s.highScore),
        wickets: Number(s.wickets),
        bowlAvg: parseFloat(s.bowlAvg),
        bowlER: parseFloat(s.bowlER),
        bestBowling: s.bestBowling,
      };
    }
    return card;
  });

  const out = `const cardData = ${JSON.stringify(
    merged,
    null,
    2
  )};\nexport default cardData;\n`;
  await fs.writeFile(cardDataFile, out, "utf-8");
  console.log(`✅ Merged stats into ${cardDataFile}`);
}

main().catch((err) => {
  console.error("❌ Merge failed:", err);
  process.exit(1);
});
