const axios = require("axios");
const cheerio = require("cheerio");
const _ = require("lodash");

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

  $("tr").each((index, element) => {
    let title = $(element).find(".company_and_position h2").text();
    let link =
      siteUrl +
      $(element).find(".company_and_position .preventLink").attr("href");

    // Get Element tags
    let elementTags = new Set();
    $(element)
      .find(".tag h3")
      .each((i, t) => {
        elementTags.add($(t).text());
      });

    // create position item
    title !== "" &&
      title !== "Today " &&
      positions.add({
        title,
        link,
        tags: [...elementTags],
      });
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
