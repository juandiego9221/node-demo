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

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  async findOne(id) {
    // find product by id
    return this.products.find(item => item.id === id);
  }

  async delete(id) {
    // delete from products by id
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    this.products.splice(index, 1);
  }

  async update(data, id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }

    product = this.products[index]
    this.products[index] = {
      ...product,
      ...data
    }
    return this.products[index];
  }
}

// export default ProductService;
module.exports = ProductService;
