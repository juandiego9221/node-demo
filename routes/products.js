// products.router
// productsRouter
const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const productsService = new ProductsService();
const validatorHandler = require('../middleware/validator.handler.schema');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/products.schema');

// router.get('/example', (req, res) => {
//   console.log('example');
// });


router.get('/:id',
  validatorHandler(getProductSchema, 'params'),

  async (req, res, next) => {
    console.log("products by id")
    // const id = req.params.id;
    try {
      const { id } = req.params;
      const product = await productsService.findOne(id);
      res
        .status(200)
        .json(product);
    } catch (error) {
      next(error);
    }
  });

router.get('/', async (req, res) => {
  console.log("products")
  // const { size } = req.query;
  // const example = this.getTotoal();
  res
    .status(200)
    .json(await productsService.find());
});

/*
Los endpoits especificos deben ir antes que los generales
*/

router.post('/', async (req, res) => {
  const body = req.body;
  response = await productsService.create(body);
  res
    .status(201)
    .json(response)
});

router.patch('/:id ', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    response = await productsService.update(body, id);
    res
      .status(200)
      .json(response)
  } catch (error) {
    next(error);
  }
});

router.delete('/:id ', async (req, res, next) => {
  const { id } = req.params;
  try {
    await productsService.delete(id);
    res.status(200).json({
      message: "deleted",
      id
    })
  } catch (error) {
    next(error);
  }
});

// export router
module.exports = router;
