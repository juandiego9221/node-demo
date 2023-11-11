const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const productsService = new ProductsService();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  response = productsService.find(limit, offset);

  if (limit && offset) {
    res.json(response);
  } else {
    res.json(response);
  }
});

module.exports = router;
