const express = require("express");
const router = express.Router();

const getResultsFromRemoteok = require("../../scraper/remoteok");
const getResultsFromIndeed = require("../../scraper/indeed");

const remoteok = require("../../scrapedData/remoteok.json");

router.get("/", (req, res) => {
  res.status(200).send("API Home");
});

router.get("/jobs", (req, res) => {
  const remoteokData = remoteok;
  res.status(200).send({ remoteok: remoteokData });
});

router.get("/jobs/remoteok", async (req, res) => {
  const results = await getResultsFromRemoteok();
  res.status(200).send(results);
});

router.get("/jobs/indeed", async (req, res) => {
  //:TODO:// change to post and accept parameters to change the search query
  const results = await getResultsFromIndeed();
  res.status(200).send(results);
});

module.exports = router;
