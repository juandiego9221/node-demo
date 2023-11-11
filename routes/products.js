// products.router
// productsRouter
const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const productsService = new ProductsService();

router.get('/', (req, res) => {
  // const { size } = req.query;
  res
    .status(200)
    .json(productsService.find());
});

/*
Los endpoits especificos deben ir antes que los generales
*/
router.get('/example', (req, res) => {
  console.log('example');
});

router.get('/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const product = productsService.findOne(id);
  res
    .status(200)
    .json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  res
    .status(201)
    .json({
      message: "created",
      data: body
    })
});

router.patch('/:id ', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res
    .status(200)
    .json({
      message: "created",
      data: body,
      id
    })
});

router.delete('/:id ', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "deleted",
    id
  })
});

// export router
module.exports = router;
