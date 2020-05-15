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
  res.status(200).send({ ...allJobs.indeed });
});

router.get("/remoteok", async (req, res) => {
  res.status(200).send({ ...allJobs.remoteok });
});

router.get("/linked-in", async (req, res) => {
  res.status(200).send({ ...allJobs.linkedIn });
});

module.exports = router;
