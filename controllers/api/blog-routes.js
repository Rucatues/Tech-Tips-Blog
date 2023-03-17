const router = require('express').Router();
const { blog } = require('../../models/blog');

router.post('/', async (req, res) => {
    try {
        const data = await blog.findAll();
        const plainData = data.map((blog) => blog.get({ plain: true }));
        res.render('blogcard', { plainData });
    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});

router.put('/', async (req, res) => {
    try {

    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});

router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
}); 