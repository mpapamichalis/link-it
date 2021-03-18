var express = require('express');
var app = express();
var db = require('./db');
const path = require("path");

var UserController = require('./user/UserController');
app.use('/', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

app.use(express.static(path.join(__dirname,"client")));

app.use(logger('dev'));

db.Library.create({ name: "Campus Library" })
.then(dbLibrary => {
    console.log(dbLibrary);
})
.catch(({message}) => {
    console.log(message);
});

module.exports = app;