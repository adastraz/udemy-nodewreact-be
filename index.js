const express = require('express')
require('./services/passport')
const server = express()

require('./routes/auth-routes')(server)

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`\n === Server listening on port ${PORT} === \n`)
})