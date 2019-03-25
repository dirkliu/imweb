const net = require('net');
const crypto  = require('crypto')
const PORT = 3000
const MAGIC_VALUE = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
// const sha1= crypto.createHash('sha1')

const server = net.createServer(socket => {
  // 'connection' listener
  socket.setEncoding('utf-8')
  socket.setKeepAlive(true)
  console.log('client connected socket:', socket);

  socket.on('data', data => {
    console.log('data:', data)
    let matchData = data.match(/(?<=Sec-WebSocket-Key:\s)(.*)(?=\r\n)/g)
    console.log('matchData:', matchData[0])
    // console.log('sha1.update(matchData[0]).digest:', sha1.update(matchData[0]).digest('base64'))
    const sha1= crypto.createHash('sha1')
    var acceptKey = sha1.update(matchData[0] + MAGIC_VALUE).digest('base64')
    console.log('acceptKey:', acceptKey)
    let resData = 'HTTP/1.1 101 Switching Protocols\r\n' + 
      'Upgrade: websocket\r\n' +
      'Connection: Upgrade\r\n' + 
      'Sec-WebSocket-Accept: ' + acceptKey
    socket.write(resData, msg => {
      console.log('socket write:', msg)
      // socket.end()
    })
    // socket.pipe(socket)
  })

  socket.on('drain', msg => {
    console.log('drain', msg)
  })

  socket.on('ready', data => {
    console.log('ready:', data)
  })
  socket.on('connect', res => {
    console.log('c res connect:', res)
  })

  socket.on('end', msg => {
    console.log('socket end msg:', msg)
  })

  socket.on('close', msg => {
    console.log('close msg:', msg)
  })

  socket.on('lookup', msg => {
    console.log('lookup msg:', msg)
  })
  // socket.write('hello\r\n');
  // c.pipe(c);
});
server.on('error', (err) => {
  throw err;
});
// server.on('connect', socket => {
//   console.log('socket:', socket)
// })
server.listen(PORT, () => {
  console.log('tcp listening at port:', PORT);
});