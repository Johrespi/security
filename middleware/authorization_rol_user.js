/* Autorización */

var authorizationRolUser = (req, res, next) => {
    if (req.session.role == 'user') {
        return next()
    }
    return res.redirect("/")
}

module.exports = authorizationRolUser;