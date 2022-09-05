


//Authentication of user - redirects to login if not logged in


module.exports = (req, res, next) => {

    if (!req.session.loggedIn) {
        console.log('User not logged in, redirecting to login');
        res.redirect('/login');
        return;
    }

    next();
}