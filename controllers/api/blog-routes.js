const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
// const Auth = require('../utils/auth');

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
        const createBlog = await Blog.create(req.body);
        res.json(createBlog);
    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});

router.put('/', async (req, res) => {
    try {
        //  what to put here- Blog.update?
    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});

router.delete('/', async (req, res) => {
    try {
        // what to put here- Blog.destroy? 
    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});

module.exports = router;