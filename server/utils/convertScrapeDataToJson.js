const fs = require("fs");
const fse = require("fs-extra");

const getResults = require("../scraper/remoteok");

setTimeout(() => {
  (async () => {
    let results = await getResults();
    let jsonString = JSON.stringify(results);
    console.log("running");

    if (fs.existsSync("./server/scrapedData/remoteok.json")) {
      fse.removeSync("./server/scrapedData/remoteok.json");
    }
    fs.writeFile(
      "./server/scrapedData/remoteok.json",
      jsonString,
      "utf8",
      (err) => (err ? console.log(err) : console.log("remoteok updated"))
    );
  })();

  // refresh every 6 hours
}, 21600000);
