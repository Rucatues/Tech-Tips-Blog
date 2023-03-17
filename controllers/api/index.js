const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/post', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;