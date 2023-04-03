const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

// api/blog routes

router.get('/all', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({
            include: {
                model: User,
                attributes: ["id", "username", "email"]
            }
        });

        res.json(allBlogs)

    } catch (err) {
        console.log(err);
        res.sendStatus(500).send(err);
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const createBlog = await Blog.create({ title: req.body.title, description: req.body.description, user_id: req.session.user_id });
        res.json(createBlog);
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
});

// router.put('/', async (req, res) => {
//     try {
//         //  what to put here- Blog.update?
//     } catch (err) {
//         res.sendStatus(500).send(err);
//         console.log(err);
//     }
// });

// router.delete('/', async (req, res) => {
//     try {
//         // what to put here- Blog.destroy? 
//     } catch (err) {
//         res.sendStatus(500).send(err);
//         console.log(err);
//     }
// });

module.exports = router;