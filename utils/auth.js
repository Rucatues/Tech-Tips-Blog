const Auth = (req, res, next) => {
    //If the user is not logged in, redirect the user to the login page
    if (req.session?.loggedIn) {
        next();
    } else {
        res.redirect("/login")

    }
};

module.exports = Auth;