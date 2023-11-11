const express = require("express");
const router = express.Router();
const CategoryService = require("../services/categories.service");
const categoryService = new CategoryService();

router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  const product = categoryService.findByCategoryAndProduct(
    categoryId,
    productId
  );

  res.json(product);
});

module.exports = router;
