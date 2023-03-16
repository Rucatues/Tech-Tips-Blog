const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

module.exports = router;

//will need to add const and router.use for api routes?