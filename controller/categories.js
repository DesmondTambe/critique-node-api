const axios = require("axios");

module.exports = {
  fetchPostCategories: async (req, res) => {
    try {
      const categoriesPosts = await axios.get(
        "https://critiqsite.com/wp-json/wp/v2/categories/?_fields=id,count,name,slug,taxonomy,link"
      );

      console.log(categoriesPosts.data);
      res.send(categoriesPosts.data);
    } catch (error) {
      console.log("CategoriesError", error);
    }
  },
};
