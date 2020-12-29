const axios = require("axios");
require("dotenv").config();

module.exports = async function () {
  try {
    const response = await axios.get(
      `http://newsapi.org/v2/top-headlines?country=bg&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
