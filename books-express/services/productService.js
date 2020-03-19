const Models = require('../models/models');

const models = new Models();

module.exports = class ProductService {
    async getAllProducts() {
        const result = await models.read('products');
        return result;
    };

    async getOneProduct(id) {
        const result = await models.readOne('products', id);
        return result;
    };

    async deleteProduct(id) {
        const result = await models.delete('products', id);
        return result;
    };

    async updateProduct(object) {
        const result = await models.update(object, 'products');
        return result;
    };

    async createProduct(object) {
        const result = await models.create(object, 'products');
        return result;
    };
}