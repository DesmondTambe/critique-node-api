const express = require("express");

const CategoriesController = require("../controller/categories");

const router = express.Router();

// router for posts
router.route("/").get(CategoriesController.fetchPostCategories);

module.exports = router;
