const express = require("express");
const router = express.Router();

const allJobs = require("../../scrapedData/allJobs.json");
const getResultsFromIndeed = require("../../scraper/indeed");
const getResultsFromRemoteok = require("../../scraper/remoteok");
const getResultsFromLinkedIn = require("../../scraper/linkedIn");

router.get("/", (req, res) => {
  res.status(200).send({ ...allJobs });
});

router.get("/indeed", async (req, res) => {
  //:TODO:// change to post and accept parameters to change the search query
  const results = await getResultsFromIndeed();
  res.status(200).send(results);
});
router.post("/indeed", async (req, res) => {
  // const results = allJobs.indeed;
  const results = await getResultsFromIndeed(req.body.query);
  res.status(200).send(results);
});

router.get("/remoteok", async (req, res) => {
  const results = allJobs.remoteok;
  // const results = await getResultsFromRemoteok();
  res.status(200).send(results);
});
router.post("/remoteok", async (req, res) => {
  // const results = allJobs.remoteok;
  const results = await getResultsFromRemoteok(req.body.query);
  res.status(200).send(results);
});

router.get("/linked-in", async (req, res) => {
  const results = await getResultsFromLinkedIn();
  res.status(200).send(results);
});

module.exports = router;
