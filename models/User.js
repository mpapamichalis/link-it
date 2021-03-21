var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  userEvent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "createEvent"
    }
  ]
});
mongoose.model('upLinkUser', UserSchema);

module.exports = mongoose.model('upLinkUser');
