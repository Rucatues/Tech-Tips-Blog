const router = require('express').Router();
const { Blog, User } = require('../models');
const Auth = require('../utils/auth');

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
        });

        const blogs = allBlogs.map((blog) =>
            blog.get({ plain: true })
        );

        res.render('layouts/main', {
            blogs
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//takes user to login page
router.get('/login', async (req, res) => {
    try {
        res.send("It worked!")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//takes user to sign up page
router.get('/signup', async (req, res) => {
    try {
        res.send("It worked!")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//takes user to blog if they click on a certain blogpost
router.get('/:blogid', async (req, res) => {
    try {
        res.send("It worked!")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//takes user to form to create new comment for that specific blog post
router.get('/:blogid/newcomment', (req, res) => {
    try {
        // res.render('partials/commentcard');
    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});

//takes user to dashboard for specific userid
router.get('/dashboard', Auth, async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//takes user to from dashboard to page to create a new blog post
router.get('/dashboard/new', Auth, async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;