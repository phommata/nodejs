'use strict';
const router = require('express').Router();

module.exports = () => {
    let routes = {
        'get': {
            '/': (req, res, next) => {
                res.render('login');
            },
            '/rooms': (req, res, next) => {
                res.render('rooms');
            },
            'chats': (req, res, next) => {
                res.render('chatroom');
            }
        },
        'post': {

        }
    }
    // Iterate through the routes object and mount the routes
}