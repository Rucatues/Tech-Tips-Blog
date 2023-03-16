const router = require('express').Router();
const { Blog, User } = require('../models');

//Get all blogs for homepage

router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;

// router.get('/', async (req, res) => {
//     try{

//     } catch (err) {
//         console.log(err); 
//         res.status(500).json(err);
//     }
// }); 