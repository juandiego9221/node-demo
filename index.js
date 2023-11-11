const express = require('express');
const { faker } = require('@faker-js/faker');
const routerApi = require("./routes")
const cors = require('cors');

// require error handler function from errorHandler.js
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ["http://localhost:8080", "https://myapp.co"]
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("No permitido"))
    }
  },
}
app.use(cors(options));



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
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
