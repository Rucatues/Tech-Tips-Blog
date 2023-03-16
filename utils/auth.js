const Auth = (req, res, next) => {
    // TODO: If the user is not logged in, redirect the user to the login page
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/login")
    }
    // TODO: If the user is logged in, allow them to view the paintings
};

module.exports = Auth;