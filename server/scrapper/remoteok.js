const axios = require("axios");
const cheerio = require("cheerio");

const siteUrl = "https://remoteok.io/";
let siteName = "";
let description = "";

// exclude duplicates
const categories = new Set();
const tags = new Set();
const locations = new Set();
const positions = new Set();

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();
  siteName = $("h1").text();
  description = $("title").text();

  $(".tags .tag").each((index, element) => {
    tags.add($(element).text());
  });
  $(".location").each((index, element) => {
    locations.add($(element).text());
  });
  $("div.nav p").each((index, element) => {
    categories.add($(element).text());
  });

  $('.company_and_position [itemprop="title"]').each((index, element) => {
    positions.add($(element).text());
  });

  return {
    positions: [...positions].sort(),
    tags: [...tags].sort(),
    locations: [...locations].sort(),
    categories: [...categories].sort(),
    siteName,
    description,
  };
};

module.exports = getResults;
