const productRouter = require('./products');
const userRouter = require('./users');
const categoriesRouter = require('./categories');

function routeApi(app) {
  app.use("/products", productRouter);
  app.use("/users", userRouter);
  app.use("/categories", categoriesRouter);
}
module.exports = routeApi;
