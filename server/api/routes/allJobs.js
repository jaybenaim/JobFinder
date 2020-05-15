const express = require("express");
const router = express.Router();

const allJobs = require("../../scrapedData/allJobs.json");
const getResultsFromIndeed = require("../../scraper/indeed");
const getResultsFromRemoteok = require("../../scraper/remoteok");

router.get("/", (req, res) => {
  res.status(200).send({ ...allJobs });
});

router.get("/indeed", async (req, res) => {
  //:TODO:// change to post and accept parameters to change the search query
  const results = await getResultsFromIndeed();
  res.status(200).send(results);
});

router.get("/remoteok", async (req, res) => {
  const results = await getResultsFromRemoteok();
  res.status(200).send(results);
});

module.exports = router;
