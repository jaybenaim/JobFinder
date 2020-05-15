const fs = require("fs");
const fse = require("fs-extra");

const getRemoteokResults = require("../scraper/remoteok");
const getIndeedResults = require("../scraper/indeed");

setTimeout(() => {
  (async () => {
    let remoteokResults = await getRemoteokResults();
    let indeedResults = await getIndeedResults();
    console.log("Scraping");
    let results = {
      positions: { ...remoteokResults.positions, ...indeedResults.positions },
      locations: { ...remoteokResults.locations, ...indeedResults.locations },
      categories: {
        ...remoteokResults.categories,
        ...indeedResults.categories,
      },
      tags: { ...remoteokResults.tags, ...indeedResults.tags },
      siteNames: [remoteokResults.siteName, indeedResults.siteName],
      remoteok: remoteokResults,
      indeed: indeedResults,
    };
    let jsonString = JSON.stringify(results);

    if (fs.existsSync("./server/scrapedData/allJobs.json")) {
      fse.removeSync("./server/scrapedData/allJobs.json");
    }
    fs.writeFile(
      "./server/scrapedData/allJobs.json",
      jsonString,
      "utf8",
      (err) => (err ? console.log(err) : console.log("File saved"))
    );
  })();
  // refresh every 6 hours
}, 21600000);
