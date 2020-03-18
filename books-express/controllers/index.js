const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

const userService = new UserService();

router.get('/', async (req, res, next) => {
  console.log("megy :)");
  const getAllUsers = await userService.getAllUsers()
  console.log(getAllUsers);
  res.render('index');
});

module.exports = router;
