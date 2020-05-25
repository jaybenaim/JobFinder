const axios = require("axios");
const cheerio = require("cheerio");

// https://www.linkedin.com/jobs/search/?geoId=100025096&keywords=web%20developer&location=Toronto%2C%20Ontario%2C%20Canada
// https://www.linkedin.com/jobs/search/?keywords=web%20developer
const webDeveloperQuery =
  "https://www.linkedin.com/jobs/search/?geoId=100025096&keywords=web%20developer&location=Toronto%2C%20Ontario%2C%20Canada";
const domain = "https://www.linkedin.com/jobs";
let siteUrl = webDeveloperQuery;

const positions = new Set();
const locations = new Set();

const buildQuery = (query) => {
  let validQuery = query ? encodeURI(query) : "";

  return domain + "/search/?keywords=" + validQuery;
};
const fetchData = async (query) => {
  let url = buildQuery(query);
  siteUrl = url;
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (query) => {
  const $ = await fetchData(query);
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
