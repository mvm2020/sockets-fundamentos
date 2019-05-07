var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Cliente conectado al servidor');
});

socket.on('disconnect', function() { //Detect cuando el servidor se corta
    console.log('Perdida de conexión con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Elmarce',
    mensaje: 'Hola Mundo Sokette'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar información desde cliente
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});