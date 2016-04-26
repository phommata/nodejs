'use strict';
const Path = require('path');

function core(server, options, next) {
    // Load Routes
    server.route(require('./routes')(options));

    // Configure Hapi to use Handlebars to render html files
    server.views({
        engines: {
            html: require('handlebars')
        },
        path: Path.join(__dirname, '../views')
    })

    // Core Logic

    return next();
}

core.attributes = {
    name: 'core'
}

module.exports = core;