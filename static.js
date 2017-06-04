var fs = require("fs");

function canHandleRequest(request) {
	return request.url.startsWith("/static/")
		|| request.url === "/favicon.ico";
}

exports.canHandleRequest = canHandleRequest;

function serveStaticAsset(request, response) {
	var url = request.url.substr(1);
	if(url === "favicon.ico"){
		url = "static/" + url;
	}
	fs.readFile(url, function callback(error, data) {
		if(error) {
			console.log("Error: file not found " + error);
			response.statusCode = 404;
			response.end();
			return;
		}
	
		response.end(data);
		console.log("end of callback");
	});
	console.log("end of serveStaticContent");
}

exports.serveStaticAsset = serveStaticAsset;
