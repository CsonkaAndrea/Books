const Models = require('../models/models');

const models = new Models();

module.exports = class UserService {
    async getAllUsers() {
        const result = await models.read('users');
        return result;
    };

    async getOneUser(id) {
        const result = await models.readOne('users', id);
        return result;
    };

    async deleteUser(id) {
        const result = await models.delete('users', id);
        return result;
    };

    async updateUser(object) {
        const result = await models.update(object, 'users');
        return result;
    };

    async createUser(object) {
        const result = await models.create(object, 'users');
        return result;
    };
}