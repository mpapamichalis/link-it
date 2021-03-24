var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var Event = require('../models/createEvent');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require('./VerifyToken');

module.exports = {  

    create: function(req,res) {
        Event 
          .create(req.body)
          .then(event => res.json(event))
          .catch(err => res.status(422).json(err));
      },
      findAll: function(req, res) {
        Event.find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        Event.findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

}


router.post('/createEvent', function (req, res) {
    Event.create({
        title: req.body.title,
        where: req.body.where,
        total: req.body.total,
        description: req.body.description
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        }).then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { createEvent: _id } }, { new: true }));
    })