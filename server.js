var http = require("http");
var fs = require("fs");
var static = require("./static.js");

http.createServer(function webRequestHandler(request, response){
	debugger;
	console.log(`Incoming request: ${request.url}`);

	if(static.canHandleRequest(request)){
		static.serveStaticAsset(request, response);
		return;	
	} else {
		fs.readFile("static/comptia1.html", (error, data) => {
			if(error) {
				console.log("Error: file not found " + error);
				response.statusCode = 404;
				response.end();
				return;
			}
		
			response.end(data);
		});
	}
	//response.end("Hello World!");
}).listen(3000,"0.0.0.0", () => {
	console.log('Server is listening on localhost port 3000');
});
