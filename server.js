var express = require('express');
var app = express();
var PORT = 3000;

/*
	Express app takes two arguments , the first is the route , the second is a function
	that has request - response parameters 

	the port our server uses must be detirmened in "app.listen()"
	app.listen also takes a function that executes when the server starts

	we can add middleware on app level or route level

	ex :
		http://localhost:3000
		http://localhost:3000/about
*/

var middleware = require('./middleware.js');
app.use(middleware.logger);


// app.get('/',function (req, res) {
// 	res.send('Hello Express!');
// });

app.get('/login' ,middleware.requireAuthentication, function(req, res){
	res.send('Login is for Members only');
});

app.get('/about',function(req, res){
	res.send('About Us Page');
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
	console.log('Server is workin on port '+ PORT);
});