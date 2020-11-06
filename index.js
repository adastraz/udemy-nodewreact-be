const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

const PORT = process.env.PORT || 5000
server.listen({PORT})