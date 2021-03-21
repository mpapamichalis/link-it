var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require('./VerifyToken');
const Event = require("../models/createEvent");





module.exports = {

  findOne: function(req,res){
    User
    .findOne({ email: req.body.email })
      .then(data => {
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      
      res.status(200).send({ auth: true, token: token });
      })
      .catch(err => res.status(500).json(err))
       
      // if (err) return res.status(500).send('Error on the server.');
      // if (!user) return res.status(404).send('No user found.');
      
      
    ;
   


    },

    create: function(req,res) {
      Event 
        .create(req.body)
        .then(event => res.json(event))
        .catch(err => res.status(422).json(err));
    },

}





//takes user to register page if they already dont have an account
router.post('/register', function(req, res) {
   console.log(req.body)
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      console.log(err)
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });

    }); 
  })

  //once user is logged in, it takes them to their personal page
  router.get('/me', VerifyToken, function(req, res, next) {

    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      
       next(user);
    });
    
  });
 
  //middleware function
  router.use(function (user, req, res, next) {
    res.status(200).send(user);
  });

  //takes user to login page once they already created an account
  router.post('/login', function(req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      
      res.status(200).send({ auth: true, token: token });
    });
    
  });

  //route to log out user 
  router.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
  });

  router.post('/create', function(req, res) {
    console.log(req.body)
     
     
     User.create({
       name : req.body.name,
       email : req.body.email,
       password : hashedPassword
     },
     function (err, user) {
       console.log(err)
       if (err) return res.status(500).send("There was a problem registering the user.")
       // create a token
       var token = jwt.sign({ id: user._id }, config.secret, {
         expiresIn: 86400 // expires in 24 hours
       });
       res.status(200).send({ auth: true, token: token });
 
     }); 
     

   });

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

  //refer to server.js stu populate

  // app.post("/submit", ({ body }, res) => {
  //   db.Note.create(body)
  //     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });













  //  module.exports = router;