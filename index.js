var http, html, fileSystem, url, dJSONPath, path;

http = require('http');
fileSystem = require('fs');
url = require('url');
dJSONPath = '/getJSON'; // The async path/function to the JSON file

htmlHeader = {'Content-Type': 'text/html'};
txtHeader = {'Content-Type': 'text/plain'}; 

http.createServer(function(request, response){ 
	path = url.parse(request.url).pathname;
	if(path == dJSONPath){ // Serve the JSON resource via HTTP
		fileSystem.readFile('dataPointsSum.json', 'UTF8', function(error, dJSON){
			response.writeHead(200, txtHeader);
			response.end(dJSON);			
		});		
	}
	else{ // Serve index.htm via HTTP
		fileSystem.readFile('index.htm', function(error, data){
			response.writeHead(200, htmlHeader);
			response.end(data);
		});
	}	
}).listen(8080);