const express = require('express');
const router = express.Router();

const UserService = require('../services/userService');
const ProductService = require('../services/productService');

const userService = new UserService();
const productService = new ProductService();

router.get('/users', async (req, res, next) => {
    result = await userService.getAllUsers();
    console.log("megy az api :)");
    res.json(result);
});

router.get('/products', async (req, res, next) => {
    result = await productService.getAllProducts();
    res.json(result);
});
