var express = require('express');
var app = express();
var db = require('./db');
const path = require("path");

var UserController = require('./user/UserController');
app.use('/', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

app.use(express.static(path.join(__dirname,"client")));

module.exports = app;