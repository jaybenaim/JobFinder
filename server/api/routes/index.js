const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("API Home");
});
router.get("/jobs", (req, res) => {
  res.status(200).send({ message: "success" });
});

module.exports = router;
