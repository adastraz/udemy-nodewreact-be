const passport = require('passport')

module.exports = (server) => {
    server.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

    server.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => res.redirect('/surveys')
    )

    server.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })

    server.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

}
