'use strict';
const router = require('express').Router();

app.get('/', (req,res, next) => {
    res.render('login');
});

router.get('/info', (req, res, next) => {
    res.send('Test page');
});

modules.exports = {
    router: router
}