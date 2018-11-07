var http, html, dom, canvasjs, htmlHeader, jsonHeader, fileSystem, url, dJSONPath, path, kdgraph;

http = require('http');
fileSystem = require('fs');
url = require('url');
kdgraph = require('kinaxis-dynamic-graph');
dom = require('jsdom'); // Node requires, but not the  DOM? Call me a runtimer
canvasjs = require('canvasjs');

dJSONPath = '/getJSON'; // The async path/function to the JSON file

htmlHeader = {'Content-Type': 'text/html'};
jsonHeader = {'Content-Type': 'application/json'};

http.createServer(function(request, response){ 
	path = url.parse(request.url).pathname;

	if(path == dJSONPath){ // Serve the JSON resource via HTTP
		fileSystem.readFile('dataPointsSum.json', 'UTF8', function(error, dJSON){
			response.writeHead(200, jsonHeader);
			response.end(dJSON);			
		});		
	}
	/*
	else{ // Serve index.htm via HTTP
		fileSystem.readFile('index.htm', function(error, data){
			response.writeHead(200, htmlHeader);
			response.end(data);
		});
	}
	*/
	///*
	else{
		response.writeHead(200, htmlHeader);
		var results = kdgraph.run();
		response.end(results.template);
	}
	//*/
}).listen(8080);