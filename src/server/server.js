'use strict';

const express = require('express');
const mongoose = require('mongoose');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world!!!!! This works, via nginx proxy_pass.\n');
});

const mongoDB = 'mongodb://mongo:' + process.env.MONGODB_PORT_27017_TCP_PORT
                + '/docker_mongo_db';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Bind connection to error event (to get notification of connection errors)
db.on('connected', console.error.bind(console, 'MongoDB connected:'));



app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
