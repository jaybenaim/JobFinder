const express = require("express");
const router = express.Router();

const getResultsFromRemoteok = require("../../scrapper/remoteok");

router.get("/", (req, res) => {
  res.status(200).send("API Home");
});
router.get("/jobs", (req, res) => {
  res.status(200).send({ message: "success" });
});

router.get("/jobs/remoteok", async (req, res) => {
  const results = await getResultsFromRemoteok();
  res.status(200).send(results);
  // data.then((res) => console.log(res));
});

module.exports = router;
