const fs = require("fs");
const fse = require("fs-extra");

const getRemoteokResults = require("../scraper/remoteok");
const getIndeedResults = require("../scraper/indeed");
const getLinkedInResults = require("../scraper/linkedIn");

setTimeout(() => {
  (async () => {
    // fails if one request throws error
    let [remoteokResults, indeedResults, linkedInResults] = await Promise.all([
      getRemoteokResults(),
      getIndeedResults(),
      getLinkedInResults(),
    ]);

    console.log("Writing data...");

    let results = {
      positions: [
        ...remoteokResults.positions,
        ...indeedResults.positions,
        ...linkedInResults.positions,
      ],
      locations: { ...remoteokResults.locations, ...indeedResults.locations },
      categories: {
        ...remoteokResults.categories,
        ...indeedResults.categories,
      },

      tags: { ...remoteokResults.tags, ...indeedResults.tags },
      siteNames: [
        remoteokResults.siteName,
        indeedResults.siteName,
        linkedInResults.siteName,
      ],
      remoteok: remoteokResults,
      indeed: indeedResults,
      linkedIn: linkedInResults,
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
