const axios = require("axios");
const baseURL = require("../utils/baseURL");

module.exports = {
  fetchPostsWP: async (req, res) => {
    try {
      // fetch post from wordpress
      const posts = await axios.get(
        `${baseURL}wp/v2/posts/?categories=681150187&page=1&per_page=10&_fields=id,date,title,content,custom,link,categories,jetpack_featured_media_url`
        // &_fields=id,date,title,content,custom,link,categories`
      );

      res.status(200).json(posts.data);
    } catch (error) {
      console.log("Post fecth error:", error);
    }
  },
};
