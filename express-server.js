var express = require("express");
var favicon = require("express-favicon");


var app = express();

app.use("/static", express.static("static"));
app.use(favicon(__dirname + '/static/favicon.png'));

app.get("/", function (request, response){
	response.end("Hello World from express!");
});

app.get("/wes", function (request, response){
	response.end("Hello Wes!");
});

app.listen(3000,"0.0.0.0", () => {
	console.log('Server is listening on localhost port 3000');
});
