const router = require('express').Router();
const { comment } = require('../../models/comment');
const Auth = require('../utils/auth');


router.post('/', Auth, async (req, res) => {
    try {
        // what to put here? Comment.create

    } catch (err) {
        res.sendStatus(500).send(err);
        console.log(err);
    }
});

// router.delete('/', async (req, res) => {
//     try {

//     } catch (err) {
//         res.sendStatus(500).send(err);
//         console.log(err);
//     }
// }); 