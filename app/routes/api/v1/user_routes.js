const routes= require('express').Router();
const UserController = require('../../../controllers/user_controller.js');

routes.route('/signup')
  .post(UserController.create);

// routes.route('/signup')
//   .post(UserController.auth);

module.exports =  routes;
