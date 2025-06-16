const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

async function scrapeIplStats({ id, name }) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  const url = `https://www.cricbuzz.com/profiles/${id}/${slug}`;
  console.log(`🔍 Scraping IPL stats for ${name} from ${url}`);

  const { data: html } = await axios.get(url);
  const $ = cheerio.load(html);

  function getTable(headingText) {
    const heading = $("div.cb-font-16.text-bold")
      .filter((i, el) => $(el).text().trim() === headingText)
      .first();
    if (!heading.length) {
      throw new Error(`${headingText} block not found`);
    }
    const tbl = heading.next("table");
    if (!tbl.length) {
      throw new Error(`No table found after "${headingText}"`);
    }
    return tbl;
  }

  const batTable = getTable("Batting Career Summary");
  const batRow = batTable.find("tbody tr").eq(3);
  const batCols = batRow
    .find("td.text-right")
    .toArray()
    .map((x) => $(x).text().trim());
  const runs = batCols[2];
  const highScore = batCols[4].replace("*", "");
  const batAvg = batCols[5];
  const batSR = batCols[6];

  const bowlTable = getTable("Bowling Career Summary");
  const bowlRow = bowlTable.find("tbody tr").eq(3);
  const bowlCols = bowlRow
    .find("td.text-right")
    .toArray()
    .map((x) => $(x).text().trim());
  const wickets = bowlCols[4];
  const bowlAvg = bowlCols[5];
  const bowlER = bowlCols[6];
  const bestBowling = bowlCols[8].replace("-", "0/0");

  return {
    runs,
    highScore,
    batAvg,
    batSR,
    wickets,
    bowlAvg,
    bowlER,
    bestBowling,
  };
}

(async () => {
  const players = [
    { id: "1413", name: "Virat Kohli" },
    { id: "7662", name: "Glenn Maxwell" },
    { id: "10808", name: "Mohammed Siraj" },
    { id: "7825", name: "Faf Du Plessis" },
    { id: "8175", name: "Harshal Patel" },
    { id: "10744", name: "Rishabh Pant" },
    { id: "1739", name: "David Warner" },
    { id: "8808", name: "Axar Patel" },
    { id: "8292", name: "Kuldeep Yadav" },
    { id: "12094", name: "Prithvi Shaw" },
    { id: "2276", name: "Sunil Narine" },
    { id: "7736", name: "Andre Russell" },
    { id: "9428", name: "Shreyas Iyer" },
    { id: "9204", name: "Nitish Rana" },
    { id: "8683", name: "Shardul Thakur" },
    { id: "576", name: "Rohit Sharma" },
    { id: "9311", name: "Jasprit Bumrah" },
    { id: "7915", name: "Suryakumar Yadav" },
    { id: "466", name: "Piyush Chawla" },
    { id: "10276", name: "Ishan Kishan" },
    { id: "8733", name: "KL Rahul" },
    { id: "11311", name: "Krunal Pandya" },
    { id: "8520", name: "Quinton DeKock" },
    { id: "9427", name: "Deepak Hooda" },
    { id: "9406", name: "Nicholas Pooran" },
    { id: "1726", name: "Bhuvneshwar Kumar" },
    { id: "10945", name: "Washington Sundar" },
    { id: "2195", name: "Mayank Agarwal" },
    { id: "9012", name: "Rahul Tripathi" },
    { id: "12086", name: "Abhishek Sharma" },
    { id: "9647", name: "Hardik Pandya" },
    { id: "10738", name: "Rashid Khan" },
    { id: "11808", name: "Shubman Gill" },
    { id: "7909", name: "Mohammed Shami" },
    { id: "6349", name: "David Miller" },
    { id: "1446", name: "Shikhar Dhawan" },
    { id: "10420", name: "Sam Curran" },
    { id: "13217", name: "Arshdeep Singh" },
    { id: "9585", name: "Kagiso Rabada" },
    { id: "10045", name: "Liam Livingstone" },
    { id: "265", name: "MS Dhoni" },
    { id: "587", name: "Ravindra Jadeja" },
    { id: "7836", name: "Deepak Chahar" },
    { id: "11813", name: "Ruturaj Gaikwad" },
    { id: "1447", name: "Ajinkya Rahane" },
    { id: "7910", name: "Yuzvendra Chahal" },
    { id: "1593", name: "R Ashwin" },
    { id: "2258", name: "Jos Buttler" },
    { id: "8271", name: "Sanju Samson" },
    { id: "8117", name: "Trent Boult" },
    { id: "370", name: "AB De Villiers" },
    { id: "10926", name: "Wanindu Hasaranga" },
    { id: "1844", name: "Karn Sharma" },
    { id: "14606", name: "Shahbaz Ahmed" },
    { id: "14504", name: "Tilak Varma" },
    { id: "657", name: "Kieron Pollard" },
    { id: "13169", name: "Tim David" },
    { id: "11540", name: "Jofra Archer" },
    { id: "111", name: "Lasith Malinga" },
    { id: "12926", name: "Varun Chakravarthy" },
    { id: "1858", name: "Umesh Yadav" },
    { id: "10896", name: "Rinku Singh" },
    { id: "10917", name: "Venkatesh Iyer" },
    { id: "1057", name: "Tim Southee" },
    { id: "6326", name: "Kane Williamson" },
    { id: "8181", name: "Mohit Sharma" },
    { id: "9693", name: "Rahul Tewatia" },
    { id: "1465", name: "Wriddhiman Saha" },
    { id: "8204", name: "Vijay Shankar" },
    { id: "13940", name: "Yashasvi Jaiswal" },
    { id: "1836", name: "Manish Pandey" },
    { id: "6250", name: "Mitchell Marsh" },
    { id: "11427", name: "Anrich Nortje" },
    { id: "9863", name: "Mustafizur Rahman" },
    { id: "9429", name: "Sarfaraz Khan" },
    { id: "19027", name: "Umran Malik" },
    { id: "10225", name: "T Natarajan" },
    { id: "10209", name: "Heinrich Klaasen" },
    { id: "9582", name: "Aiden Markram" },
    { id: "14565", name: "Marco Jansen" },
    { id: "242", name: "DJ Bravo" },
    { id: "413", name: "Suresh Raina" },
    { id: "6692", name: "Moeen Ali" },
    { id: "6311", name: "Ambati Rayudu" },
    { id: "11195", name: "Shivam Dube" },
    { id: "247", name: "Chris Gayle" },
    { id: "12087", name: "Rahul Chahar" },
    { id: "10226", name: "Shahrukh Khan" },
    { id: "10214", name: "Jitesh Sharma" },
    { id: "6507", name: "Jonny Bairstow" },
    { id: "12305", name: "Riyan Parag" },
    { id: "9789", name: "Shimron Hetmyer" },
    { id: "8356", name: "Sandeep Sharma" },
    { id: "8313", name: "Jason Holder" },
    { id: "14659", name: "Ravi Bishnoi" },
    { id: "9781", name: "Avesh Khan" },
    { id: "1454", name: "Amit Mishra" },
    { id: "8989", name: "Marcus Stoinis" },
    { id: "11054", name: "Prerak Mankad" },
  ];
  const allStats = [];

  for (const p of players) {
    try {
      const stats = await scrapeIplStats(p);
      allStats.push({ name: p.name, ...stats });
    } catch (err) {
      allStats.push({ name: p.name, error: err.message });
    }
  }

  const outPath = path.resolve(__dirname, "../data/scrapedStats.json");
  fs.writeFileSync(outPath, JSON.stringify(allStats, null, 2), "utf-8");
  console.log(
    `✅ Wrote IPL stats for ${allStats.length} players to ${outPath}`
  );
})();
