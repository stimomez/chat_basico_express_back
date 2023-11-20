const express = require('express');

const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

const server = http.createServer(app);


const port = process.env.PORT || 3000;



//IO = comunicacion del backen
module.exports.io = socketIO(server, {
  cors: { origin: '*' },
});
require('./sockets/socket');

server.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
