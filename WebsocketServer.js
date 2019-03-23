const net = require('net');
const PORT = 3000
const server = net.createServer(socket => {
  // 'connection' listener
  console.log('client connected:');
  socket.on('end', (res) => {
    // console.log('client disconnected');
    console.log('end:', res)
  });

  socket.on('data', data => {
    console.log('data:', data)
  })

  socket.on('ready', data => {
    console.log('ready:', data)
  })
  socket.on('connect', res => {
    console.log('c res connect:', res)
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