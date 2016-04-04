'use strict';

// console.log("Welcome to ChatCat");
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res, next) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.sendfile(__dirname + '/views/login.htm')
    res.render('login');
});

app.listen(app.get('port'), () => {
    console.log('ChatCat Running on Port: ', app.get('port'));
});