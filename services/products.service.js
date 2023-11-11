const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    // const limit = size || 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url(),
        category: faker.commerce.department(),
      })
    }
  }

  create() {

  }
  find() {
    return this.products;
  }

  findOne(id) {
    // find product by id
    return this.products.find(item => item.id === id);
  }

  delete() { }
  update() { }

}

// export default ProductService;
module.exports = ProductService;
