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

app.get('/example2', (req, res) => {
  console.log('example2');
  // res.send('example2');
  res.json({ name: 'example2', age: 20 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
