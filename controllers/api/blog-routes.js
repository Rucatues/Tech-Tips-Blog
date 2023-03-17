const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const Auth = require('../utils/auth');

router.post('/', async (req, res) => {
    try {
        // what to put here- Blog.create?
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