const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/users')
require('./services/passport')

mongoose.connect(keys.mongoURI)
const server = express()

server.use(
    cookieSession({ 
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
server.use(passport.initialize())
server.use(passport.session())

require('./routes/auth-routes')(server)

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`\n === Server listening on port ${PORT} === \n`)
})