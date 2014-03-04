<b>Authentication API testing only</b>
<br/>
Basic nodeJS API that takes user and password payload and provides a true/false response.  Note this is just for testing call outs and is not a real authentication process.  Users stored in hard code.
<br/>
Install nodeJS.  Run npm install in app directory to install dependencies.  To start run node server.js.  Listens on port 3000
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
<b>Example-  false</b>
<br/>
curl -H "Content-Type: application/json" --request POST --data '{"user":"smof","password":"wrongpw"}' "http://localhost:3000/authenticate"
<br/>
{
  "authenticated": false
}
