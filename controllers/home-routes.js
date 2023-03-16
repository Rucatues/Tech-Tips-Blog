const router = require('express').Router();
const { Blog, User } = require('../models');
const Auth = require('../utils/auth');

//Get all blogs for homepage

// router.get('/', async (req, res) => {
//     try {
//         const allBlogs = await Blog.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         });

//         const blogs = allBlogs.map((blog) =>
//             blog.get({ plain: true })
//         );

//         res.render('main', {
//             blogs
//         });

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// router.get('/:userid', Auth, async (req, res) => {
//     try {

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });


module.exports = router;

// router.get('/', async (req, res) => {
//     try{

//     } catch (err) {
//         console.log(err); 
//         res.status(500).json(err);
//     }
// }); 