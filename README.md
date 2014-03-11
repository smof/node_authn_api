<b>Authentication API</b>
<br/>
Basic NodeJS API that takes user and password payload and provides a true/false response.  Note this is just for testing call outs.
<br/>
Install nodeJS.  Run npm install in app directory to install dependencies.  To start run node server.js.  Listens on port 3001 - changeable in server.js
<br/>
<br/>
Edit the routes/users.json file with entries for the username and cleartext password.  Upon startup, the cleartext entries will be SHA1 hashed and stored back in the users.json file.
<br/>
<br/>
<b>Example - true</b>
<br/>
curl -H "Content-Type: application/json" --request POST --data '{"user":"smof","password":"password"}' "http://localhost:3000/authenticate"
<br/>
{
  "authenticated": true
}
<br/>
<br/>
<b>Example - false</b>
<br/>
curl -H "Content-Type: application/json" --request POST --data '{"user":"smof","password":"wrongpw"}' "http://localhost:3000/authenticate"
<br/>
{
  "authenticated": false
}
