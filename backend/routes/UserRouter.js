const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controller/UserController');
const { protect } = require('../middleware/authMiddleware');

UserRouter.post('/register', UserController.register);
UserRouter.post('/login',   UserController.login);
UserRouter.get('/getUser', protect,  UserController.getUser); // Assuming you have a getUser method in UserController

module.exports = UserRouter;
