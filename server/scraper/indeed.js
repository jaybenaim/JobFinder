const axios = require("axios");
const cheerio = require("cheerio");

// https://www.indeed.ca/m/jobs?q=web+developer&l=Toronto%2C+ON&jt=&radius=
let typeQuery = encodeURI("web developer");
let salaryQuery = encodeURI("");
let cityQuery = encodeURI("Toronto");
let provinceQuery = encodeURI("ON");

let encodedSearchQuery = `${typeQuery}&l=${cityQuery}%2C${salaryQuery}+${provinceQuery}`;
let query = `q=${encodedSearchQuery}`;

const siteUrl = "https://www.indeed.ca/jobs?" + query;
let siteName = "";
let description = "";

const locations = new Set();
const positions = new Set();

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async (value) => {
  console.log(value);
  const $ = await fetchData();
  siteName = "Indeed";
  description = $("title").text();

  $(".location").each((index, element) => {
    locations.add($(element).text());
  });

  $(".result").each((index, element) => {
    let requirements = $(element).find(".summary ul li").text();

    positions.add({
      title: $(element).find(".title").text(),
      link: siteUrl + $(element).find("a").attr("href"),
      salary: $(element).find(".salaryText").text(),
      requirements: requirements.split("."),
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
