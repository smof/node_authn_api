//require statgements
var express = require('express');
var app = express();

//Authentication function ////////////////////////////////////////////////////////////
authenticate = function(req, res) {

	//set false
	var authenticated = false;
	
	//set response obj
	var responseObj = {};
	
	//pull in POST request body
        //requestBody = JSON.stringify(req.body);

        //logging
        console.log('Authentication request received');
        
        //split out body attributes
        requestUser = req.body.user;
        requestPassword = req.body.password;
        
        //noddy conditional check // switch to mongo or 
        if (requestUser === "smof" && requestPassword === "password") {
        
        	authenticated = true;
        
        }
        
        //update response object
        responseObj.authenticated = authenticated;
        res.send(responseObj);

        console.log('Response sent');
};
///////////////////////////////////////////////////////////////////////////////////////


//Express API setup ///////////////////////////////////////////////////////////////////
//for parsing POST payloads
app.use(express.bodyParser());

//authenticates user - url maps to function
app.post('/authenticate', authenticate);

//set listener port
var port = 3000;

//start listener on HTTP port
app.listen(port);

//startup log
console.log('Authentication API Listening on port ' + port + '...');
//Express API setup ///////////////////////////////////////////////////////////////////


