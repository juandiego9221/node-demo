const ProductServices = require('./products.service');
const productServices = new ProductServices();
class Category {
  findByCategoryAndProduct(categoryId, productId) {
    product = productServices.findOne(productId);
    // validate if product category is equal to categoryId
    if (product.category === categoryId) {
      return product;
    } else {
      return {};
    }
  }
}

// export default Category;
module.exports = Category;
