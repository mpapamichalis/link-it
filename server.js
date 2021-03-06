const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path= require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://ibarrasb2:JK7ulXuskRZVr6Av@cluster0-shard-00-00.9yudd.mongodb.net:27017,cluster0-shard-00-01.9yudd.mongodb.net:27017,cluster0-shard-00-02.9yudd.mongodb.net:27017/upLinkDB?ssl=true&replicaSet=atlas-ma7mzu-shard-0&authSource=admin&retryWrites=true&w=majority");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});