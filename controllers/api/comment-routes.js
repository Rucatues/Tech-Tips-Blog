const router = require('express').Router();
const { comment } = require('../../models/comment');
const Auth = require('../utils/auth');

// api/comment routes

router.post('/', Auth, async (req, res) => {
    try {


    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});


module.exports = router;