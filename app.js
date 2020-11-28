const app = require('express')()
const applyAPI = require('./src/api')
const http = require('http').createServer(app)
const applySockets = require('./src/api/sockets'
)
const PORT = process.env.PORT || 5000

applyAPI(app)
applySockets(http)

http.listen(PORT, () => console.log(`Server has started on ${PORT}`))
