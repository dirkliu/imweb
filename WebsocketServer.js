const net = require('net');
const PORT = 3000
const server = net.createServer(socket => {
  // 'connection' listener
  socket.setEncoding('utf-8')
  console.log('client connected:');

  socket.on('data', data => {
    console.log('data:', data)
    let matchData = data.match(/(?<=Sec-WebSocket-Key:\s)(.*)(?=\r\n)/g)
    console.log('matchData:', matchData[0])
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