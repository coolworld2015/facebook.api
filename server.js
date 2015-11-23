//cd Downloads\AJOB\AngularJS\Total
//node server.js
//npm install node-static
//node server.js

var static = require('node-static');
var port = 8080;
var file = new static.Server('.');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response, function (err, result) {
		});
    }).resume();
}).listen(port);

console.log('Server node-static running at port:', port);