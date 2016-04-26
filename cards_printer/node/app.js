'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
   port: process.env.port || 3000
});

server.register([{
    register: require('inert')
},{
    register: require('vision')
},{
    register: require('./core'),
    options: {
        data: require('../data/studentData.json')
    }
}], error => {
    if (error) {
        console.log('Error: ', error);
    } else {
        // Start the server
        server.start(() => {
            console.log('Hapi Server running at: ', server.info.uri);
        });
    }
});
