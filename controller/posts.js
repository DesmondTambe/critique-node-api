const axios = require("axios");
const baseUrl = "https://critiqsite.com/wp-json/";

module.exports = {
  fetchPostsWP: async (req, res) => {
    const { catId } = req.query;
    try {
      // fetch post from wordpress
      const posts = await axios.get(
        `${baseUrl}wp/v2/posts/?categories=${catId}&page=1&per_page=10&_fields=id,date,title,content,custom,link,categories,jetpack_featured_media_url`
      );

      res.status(200).json(posts.data);
    } catch (error) {
      console.log("Post fecth error:", error);
      res
        .status(error.port)
        .send("Failed to fetch data, Please check your internet connection.");
    }
  },
};
