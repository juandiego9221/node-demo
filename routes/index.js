const productRouter = require('./products');
const userRouter = require('./users');
const categoriesRouter = require('./categories');
const express = require('express');

function routeApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/products", productRouter);
  router.use("/users", userRouter);
  router.use("/categories", categoriesRouter);
}
module.exports = routeApi;
