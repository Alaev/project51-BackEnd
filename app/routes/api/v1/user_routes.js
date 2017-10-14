const UserController = require('../../../controllers/user_controller.js');

module.exports =  (router) => {
  router.route('/signup')
    .post(UserController.create);

  // router.route('/signup')
  //   .post(UserController.auth);

  return router;
};
