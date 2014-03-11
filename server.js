//Startup engine - nodeJS authentication API
//https://github.com/smof/node_authn_api

//require statgements
var express = require('express');
var app = express();
var fileManager = require('./routes/fileManager.js');

//imports
var authenticator = require('./routes/authenticator.js');

//Express API setup ///////////////////////////////////////////////////////////////////

//for parsing POST payloads
app.use(express.bodyParser());
//authenticates user - url maps to function
app.post('/authenticate', authenticator.authenticate);

//set listener port
var port = 3001;

//start listener on HTTP port
app.listen(port);
console.log('Starting...');

//check that the users file json exists and has hashed passwords in it
console.log('Checking users file is hashed');
//This converts any newly added clear text passwords in to hash
fileManager.secureFile();

//startup log
console.log('Authentication API Listening on port ' + port + '...');
//Express API setup ///////////////////////////////////////////////////////////////////


