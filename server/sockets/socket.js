const { io } = require('../server');
io.on('connection', client => {
  client.on('nuevoConectado', data => {
    console.log(data);
    io.emit('nuevoConectado', {
      usuario: data.usuario,
    });
  });

  //

  //Escuchar el cliente
  client.on('mensajePublico', (data, callback) => {
    console.log(data);

    io.emit('mensajePublico', data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: "TODO SALIO BIEN",
    //   });
    // } else {
    //   callback({
    //     resp: "TODO SALIO MAL!!!!!!!!!!!",
    //   });
    // }
  });
});
