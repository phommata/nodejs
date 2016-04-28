'use strict';
const SocketIO = require('socket.io');
const Stomp = require('stomp-client');

function main(server, options, next) {
    const connectOpt = [process.env.appHost, process.env.appPort, process.env.appUser, process.env.appPass];
    const client = new Stomp(...connectOpt); // node --harmony-spreadcalls app.js <staging feature>
    const io = SocketIO(server.listener);
    let itemArray = [];

    client.connect(sessionId =>{
        console.log('Connected to Apache Apollo');
    });

    io.on('connection', socket => {
        console.log('Connected!');

        if (itemArray.length > 0){
            // Keep the button disabled
            socket.emit("buttonState", {
                state: false
            })
        } else {
            // Enable the button
            socket.emit("buttonState", {
                state: true
            })
        }
    });

    return next();
}

main.attributes = {
    name: 'main'
}

module.exports = main;