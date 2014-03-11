//Authentication Engine
//https://github.com/smof/node_authn_api

//import file read
var fileManager = require('./fileManager.js');

//hasher
var passwordHasher = require('password-hash');

//Authentication function ////////////////////////////////////////////////////////////
exports.authenticate = function(req, res) {

	//read in user / password data
	var users = fileManager.readFile();
	
	//set false
	var authenticated = "false";
	
	//set response obj
	var responseObj = {};
	
	//pull in POST request body
        var requestBody = JSON.stringify(req.body);

        //logging
        console.log('Authentication request received: ' + requestBody);
        
        //split out body attributes
        var requestUser = req.body.user;
        var requestPassword = req.body.password;
        
	//check request password against stored hash        
        if (users[requestUser] !== undefined && passwordHasher.verify(requestPassword, users[requestUser])) {
        	
        	authenticated = "true"
        	
        }
        
        //update response object
        responseObj.authenticated = authenticated;
        
        res.send(responseObj);
	//res.send(authenticated);

        console.log('Response sent: ' + JSON.stringify(responseObj));
        
        
};
///////////////////////////////////////////////////////////////////////////////////////

