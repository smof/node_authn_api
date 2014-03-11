//Manages file  I/O
//https://github.com/smof/node_authn_api

//Requires
var fs = require('fs');
var passwordHasher = require('password-hash');

//User database
var file = "/users.json"
var usersFile = __dirname + file; //file path

//Reads files
exports.readFile = function() {

	var contents;
	contents = fs.readFileSync(usersFile, "utf8");
	
	//send back JSON of file
	return JSON.parse(contents);	
	 	
};


//Creates hashes for plain text entries
exports.secureFile = function() {
	
	//read in file first
	users = JSON.parse(fs.readFileSync(usersFile, "utf8"));
	
	//check if all password entries are hashed
	for (user in users) {
		
		//password is not hashed
		if (!passwordHasher.isHashed(users[user])) {
			
			//hash the password and update object
			users[user] = passwordHasher.generate(users[user])
				
		}
		
	}
	
	//write file back down
	fs.writeFileSync(usersFile, JSON.stringify(users), "utf8");
	
		
};



