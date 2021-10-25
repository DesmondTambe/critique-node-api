const express = require("express");

const PostController = require("../controller/posts");

const router = express.Router();

// router for posts
router.route("/").get(PostController.fetchPostsWP);

module.exports = router;
