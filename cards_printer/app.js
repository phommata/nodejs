'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
   port: process.env.port || 3000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('<h1>Hello Hapi!</h1>');
    }
});

server.start(() => {
    console.log('Hapi Server running at: ', server.info.uri);
});