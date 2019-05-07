const { io } = require('../server');

io.on('connection', (client) => { //Detecta cuando un usuarrio se conecta
    console.log('Usuario conectado');

    //Envío de mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente en privado

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'
        //     });
        // }
    });



    // client.on('enviarMensaje', (mensaje, callback) => {
    //     console.log(mensaje);

    //     if (mensaje.usuario) {
    //         callback({
    //             resp: 'TODO SALIO BIEN'
    //         });
    //     } else {
    //         callback({
    //             resp: 'TODO SALIO MAL!!!'
    //         });
    //     }
    // });

});