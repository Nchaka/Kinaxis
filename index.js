var http, html, fileSystem, header, djson;

http = require('http');
fileSystem = require('fs')

header = {'Content-Type': 'text/html'};

http.createServer(function(req, res){ 
	fileSystem.readFile('index.htm', function(error, data){
		res.writeHead(200, header);
		res.end(data);
	});
}).listen(8080);