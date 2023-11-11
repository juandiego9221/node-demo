const express = require('express');
const { faker } = require('@faker-js/faker');
const routerApi = require("./routes")

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/example1', (req, res) => {
  console.log('example1');
  res.send('example1');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

routerApi(app);
