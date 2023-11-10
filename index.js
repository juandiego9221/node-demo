const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/example1', (req, res) => {
  console.log('example1');
  res.send('example1');
});

app.get('/products', (req, res) => {
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
app.get('/products/example', (req, res) => {
  console.log('example');
});

app.get('/products/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const product = { id, name: 'product 1', price: 20 };
  res.json(product);
});


app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.json({ message: 'no limit or offset' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
