// products.router
// productsRouter
const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  // from size query param add it to a const call limit
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.url(),
    })
  }
  res.json(products);
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
  const product = { id, name: 'product 1', price: 20 };
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: "created",
    data: body
  })
});

router.patch('/:id ', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "created",
    data: body,
    id
  })
});

router.delete('/:id ', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "deleted",
    id
  })
});

// export router
module.exports = router;
