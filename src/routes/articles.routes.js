const { Router } = require("express");

const articlesController = require("../controllers/articles.controller");

const router = Router();

router.get("/", articlesController.getArticles);
router.post("/", articlesController.postArticles);

router.get("/:articleId", articlesController.getArticleById);
router.put("/:articleId", articlesController.putArticleById);
router.delete("/:articleId", articlesController.deleteArticleById);

module.exports = router;
