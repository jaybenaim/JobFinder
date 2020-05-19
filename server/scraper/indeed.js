const axios = require("axios");
const cheerio = require("cheerio");

// https://www.indeed.ca/m/jobs?q=web+developer&l=Toronto%2C+ON&jt=&radius=
const domain = "https://www.indeed.ca/";
let siteUrl = "";

const buildQuery = (query) => {
  let typeQuery = encodeURI(query.type);
  let cityQuery = query.city && "&l=" + encodeURI(query.city);
  let salaryQuery = query.salary && "%2C" + encodeURI(query.salary);
  let provinceQuery = query.province && "+" + encodeURI(query.province);
  let page = query.page && "&start=" + encodeURI(query.page);

  let encodedSearchQuery = `q=${typeQuery}${cityQuery}${salaryQuery}${provinceQuery}${page}`;

  let url = domain + "jobs?" + encodedSearchQuery;
  siteUrl = url;
  return url;
};

let siteName = "";
let description = "";

const locations = new Set();
const positions = new Set();

const fetchData = async (query) => {
  let url = buildQuery(query);
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (query) => {
  const $ = await fetchData(query);
  siteName = "Indeed";
  description = $("title").text();

  $(".location").each((index, element) => {
    locations.add($(element).text());
  });

  $(".result").each((index, element) => {
    let requirements = $(element).find(".summary ul li").text();

    positions.add({
      title: $(element).find(".title").text(),
      link: domain + $(element).find("h2 .jobtitle").attr("href"),
      salary: $(element).find(".salaryText").text(),
      requirements: requirements.split("."),
    });
  });

  return {
    positions: [...positions].sort(),
    siteName,
    description,
    siteUrl,
  };
};

module.exports = getResults;
