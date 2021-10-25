// const wp = require("../utils/baseurl");
const axios = require("axios");
const { toJSON } = require("flatted");

const WPAPI = require("wpapi");

// Create WPAPI instance and add endpoint to /wp-json
const wp = new WPAPI({
  endpoint: "http://<replace-with-domain>/wp-json",
});

module.exports = {
  // fetch post from wordpress
  fetchPostsWP: async (req, res) => {
    try {
      // fetch post
      //   const posts = await wp.posts().get();
      const posts = await axios.get(
        "https://critiqsite.com/wp-json/wp/v2/posts/?page=1&per_page=10&_fields=id,date,title,content,custom,link"
      );

      if (posts) {
        console.log("Fetching posts");
        console.log(posts.data);
        res.send(posts.data);
      }
    } catch (error) {
      console.log("MyError:", error);
      return [];
    }
  },
};
