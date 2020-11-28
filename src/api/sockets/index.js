const socketIO = require('socket.io')

function applySockets(http) {
  const io = socketIO(http, { cors: { origin: '*' } })

  let config = {
    matchId: 0
  }

  io.on('connection', (socket) => {
    socket.emit('send_config', config)

    socket.on('new_config', (new_config) => {
      io.sockets.emit('send_config', new_config)
      config = new_config
    })

    socket.on('disconnected', () => {
      console.log('Client is disconnected')
    })
  })
}

module.exports = applySockets

