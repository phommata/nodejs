'use strict';
const SocketIO = require('socket.io');

function main(server, options, next) {
    const io = SocketIO(server.listener);

    io.on('connection', socket => {
        console.log('Connected!');
    });
    
    return next();
}

main.attributes = {
    name: 'main'
}

module.exports = main;