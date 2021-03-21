var mongoose = require("mongoose")

var CreateSchema = new mongoose.Schema({  
    title: String,
    where: String,
    total: Number,
    description: String,
    
  });
  
  mongoose.model('createEvent', CreateSchema);

  module.exports = mongoose.model('createEvent');