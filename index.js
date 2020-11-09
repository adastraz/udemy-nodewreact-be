const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')
const server = express()

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken)
    console.log('refresh', refreshToken)
    console.log('profile', profile)
}))

server.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

server.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`\n === Server listening on port ${PORT} === \n`)
})