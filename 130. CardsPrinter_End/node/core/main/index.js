'use strict';
const Stomp = require('stomp-client');
const SocketIO = require('socket.io');

function main(server, options, next) {
// Core functionality begins 
    const outQueue = '/queue/toPython';
    const inQueue = '/queue/fromPython';
    const connectOpt = [process.env.appHost, process.env.appPort, process.env.appUser, process.env.appPass];
    const client = new Stomp(...connectOpt); // node --harmony-spreadcalls app.js <staging feature>
    const io = SocketIO(server.listener);
    let itemArray = [];
    
    // Promises
    function stompClient() {
        return new Promise( (resolve, reject) => {
            client.connect( sessionId => {
                console.log('Connected to Apollo');

                client.subscribe(inQueue, body => {
                    itemArray.push(body);
                });

                resolve(sessionId, client); 
            }, error => {
                reject(error);
            });
        });
    }


    function ioConnect() {
            io.on('connection', socket => {
                console.log('Connected!');

                if (itemArray.length > 0) {
                    socket
                        .emit('buttonState', { 
                            state: false 
                        })
                        .emit('allData', { 
                            dataArray: itemArray 
                        });
                } else {
                    socket.emit('buttonState', { 
                        state: true 
                    });
                }

                socket.on('begin', () => {
                    client.publish(outQueue, JSON.stringify (options.data));
                });

                Array.observe(itemArray, () => {
                    socket.emit('item', {
                        dataArray: itemArray[itemArray.length - 1]
                    });
                });
            });
    }


    // Kick Start
    stompClient()
        .then(ioConnect)
        .catch( err => {
            console.error('There was an error :: ' + err);
            server.log('error', 'Error : ' + err);
        });

    return next();
}

main.attributes = {
	name: 'main'
}

module.exports = main;