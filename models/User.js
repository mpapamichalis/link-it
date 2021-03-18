var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('upLinkUser', UserSchema);

module.exports = mongoose.model('upLinkUser');
