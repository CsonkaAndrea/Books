const Models = require('../models/models');

const models = new Models();

module.exports = class UserService {
    async getAllUsers() {
        const result = await models.read('users');
        return result;
    };

    async getOneUser(id) {
        const result = await models.readOne('customers', id);
        return result;
    };

    async deleteUser(id) {
        const result = await models.delete('customers', id);
        return result;
    };

    async updateUser(object) {
        const result = await models.update(object, 'customers');
        return result;
    };

    async createUser(object) {
        const result = await models.create(object, 'customers');
        return result;
    };
}