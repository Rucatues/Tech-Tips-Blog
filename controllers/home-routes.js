const router = require('express').Router();
const { Blog, User } = require('../models');
const Auth = require('../utils/auth');

//Get all blogs for homepage
router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({
            include: {
                model: User,
                attributes: ["id", "username", "email"]
            }
        });

        const blogs = allBlogs.map((blog) =>
            blog.get({ plain: true })
        );

        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/blog/:id', async (req, res) => {
//     try {
//         const singleBlogData = await Blog.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: ["id", "username"]
//                 }
//             ]
//         });

//         const singleBlog = singleBlogData.get({ plain: true });

//         res.render('singleblog', {
//             ...singleBlog,
//             logged_in: req.session.logged_in
//         })
//     } catch {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

//takes user to login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('dashboard');
        return;
    };

    res.render('login');

});

// takes user to sign up page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch {
        console.log(err);
        res.status(500).json(err);
    }
});

//takes user to dashboard page
router.get('/dashboard', Auth, async (req, res) => {
    try {

        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render("dashboard", {
            ...user,
            logged_in: true
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//takes user to blog if they click on a certain blogpost
router.get('/:blogid', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//takes user to form to create new comment for that specific blog post
router.get('/:blogid/newcomment', (req, res) => {
    try {
        console.log(req.body);
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