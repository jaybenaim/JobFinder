const axios = require("axios");
const cheerio = require("cheerio");

// https://www.linkedin.com/jobs/search/?geoId=100025096&keywords=web%20developer&location=Toronto%2C%20Ontario%2C%20Canada

const webDeveloperQuery =
  "https://www.linkedin.com/jobs/search/?geoId=100025096&keywords=web%20developer&location=Toronto%2C%20Ontario%2C%20Canada";
const domain = "https://www.linkedin.com";
const siteUrl = webDeveloperQuery;

const positions = new Set();
const locations = new Set();

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();
  siteName = "Linked In";
  description = $("title").text();

  $("h3").each((index, element) => {
    positions.add({
      title: $(element).text(),
      link: siteUrl,
    });
  });

  return {
    positions: [...positions].sort(),
    locations: [...locations].sort(),
    siteName,
    description,
    siteUrl,
  };
};

module.exports = getResults;
