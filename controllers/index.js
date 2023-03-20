const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require("./api")

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes)

// router.get("/first-page", (req, res) => {
//     res.render("page1")
// })

// router.get("/second-page", (req, res) => {
//     res.render("page2", {
//         layout: "dashboard",
//         username: "john01"
//     })
// })


module.exports = router;
