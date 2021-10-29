const axios = require("axios");
const baseUrl = "https://critiqsite.com/wp-json/";

module.exports = {
  fetchPostCategories: async (req, res) => {
    try {
      // fetch posts categories from wordpress
      const categoriesPosts = await axios.get(
        `${baseUrl}wp/v2/categories/?_fields=id,count,name,slug,taxonomy,link`
      );

      return res.status(200).json(categoriesPosts.data);
    } catch (error) {
      return res
        .status(error.port)
        .send("Failed to fetch data, Please check your internet connection.");
    }
  },
};
