const router= require('express').Router();
const UserRoutes = require('./user_routes')(router);

router.use('/users' , UserRoutes);
// routes.use('/posts', PostRoutes);


// send all other request to error not found
router.all('*', (req, res, next) => next());

module.exports = router;
