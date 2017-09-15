const routes= require('express').Router();
const UserRoutes = require('./user_routes');

routes.use('/users' , UserRoutes);
// routes.use('/posts', PostRoutes);


// send all otehr request to error not found
routes.all('*', (req, res, next) => next());

module.exports = routes;
