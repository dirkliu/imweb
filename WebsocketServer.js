const net = require('net');
const crypto  = require('crypto')
const PORT = 3000
const MAGIC_VALUE = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
// const sha1= crypto.createHash('sha1')

const server = net.createServer(socket => {
  // 'connection' listener
  socket.setEncoding('utf-8')
  socket.setKeepAlive(true)

  socket.once('data', data => {
    // console.log('once data:', data)
    let matchData = data.match(/(?<=Sec-WebSocket-Key:\s)(.*)(?=\r\n)/g)
    if (matchData) {
      var sha1= crypto.createHash('sha1')
      var acceptKey = sha1.update(matchData[0] + MAGIC_VALUE).digest('base64')
      let resData = 'HTTP/1.1 101 Switching Protocols\r\n' + 
        'Upgrade: websocket\r\n' +
        'Connection: Upgrade\r\n' + 
        'Sec-WebSocket-Accept: ' + acceptKey +'\r\n\r\n'
      socket.write(resData)

      socket.on('data', buffer => {
        // console.log('buffer', buffer.toString())
        // socket.write('s')
        const data = decodeWsFrame(buffer)

        // opcode为8，表示客户端发起了断开连接
        if (data.opcode === 8) {
          socket.end()  // 与客户端断开连接
        } else {
          // 接收到客户端数据时的处理，此处默认为返回接收到的数据。
          socket.write(encodeWsFrame({ payloadData: '服务端已收到' }))
        }
      })
    } else {
      socket.end('只支持Websocket！')
    }
  })
});
server.on('error', (err) => {
  throw err
})
server.listen(PORT, () => {
  console.log('tcp listening at port:', PORT)
})

function decodeWsFrame(data) {
  // console.log('decodeWsFrame data-start:', data[0])
  let start = 0;
  let frame = {
    isFinal: (data[start] & 0x80) === 0x80,
    opcode: data[start++] & 0xF,
    masked: (data[start] & 0x80) === 0x80,
    payloadLen: data[start++] & 0x7F,
    maskingKey: '',
    payloadData: null
  };

  if (frame.payloadLen === 126) {
    frame.payloadLen = (data[start++] << 8) + data[start++];
  } else if (frame.payloadLen === 127) {
    frame.payloadLen = 0;
    for (let i = 7; i >= 0; --i) {
      frame.payloadLen += (data[start++] << (i * 8));
    }
  }

  if (frame.payloadLen) {
    if (frame.masked) {
      const maskingKey = [
        data[start++],
        data[start++],
        data[start++],
        data[start++]
      ];

      frame.maskingKey = maskingKey;

      frame.payloadData = data
        .slice(start, start + frame.payloadLen)
        .map((byte, idx) => byte ^ maskingKey[idx % 4]);
    } else {
      frame.payloadData = data.slice(start, start + frame.payloadLen);
    }
  }

  console.dir(frame)
  return frame;
}

function encodeWsFrame(data) {
  const isFinal = data.isFinal !== undefined ? data.isFinal : true,
    opcode = data.opcode !== undefined ? data.opcode : 1,
    payloadData = data.payloadData ? Buffer.from(data.payloadData) : null,
    payloadLen = payloadData ? payloadData.length : 0;

  let frame = [];

  if (isFinal) frame.push((1 << 7) + opcode);
  else frame.push(opcode);

  if (payloadLen < 126) {
    frame.push(payloadLen);
  } else if (payloadLen < 65536) {
    frame.push(126, payloadLen >> 8, payloadLen & 0xFF);
  } else {
    frame.push(127);
    for (let i = 7; i >= 0; --i) {
      frame.push((payloadLen & (0xFF << (i * 8))) >> (i * 8));
    }
  }

  frame = payloadData ? Buffer.concat([Buffer.from(frame), payloadData]) : Buffer.from(frame);
  // console.dir(decodeWsFrame(frame));
  return frame;
}
