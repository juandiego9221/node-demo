const express = require('express');
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
  const products = [{ name: 'product 1', price: 20 }, { name: 'product 2', price: 30 }, { name: 'product 3', price: 40 }];
  res.json(products);
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
