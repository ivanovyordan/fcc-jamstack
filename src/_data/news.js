const axios = require("axios");
require("dotenv").config();

const countries = require("./countries.json");

async function getNews(country) {
  try {
    const response = await axios.get(
      `http://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
    );

    return {
      country: country,
      articles: response.data.articles,
    };
  } catch (error) {
    return {
      country: country,
      articles: [],
    };
    console.log(error);
  }
}

module.exports = async function () {
  const newsPromises = countries.map(getNews);

  return Promise.all(newsPromises).then((newsObjects) => {
    return [].concat.apply([], newsObjects);
  });
};
