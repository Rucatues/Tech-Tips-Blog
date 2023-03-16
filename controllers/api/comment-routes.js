const router = require('express').Router();
const { comment } = require('../../models/comment');

router.post('/', async (req, res) => {
    try {

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