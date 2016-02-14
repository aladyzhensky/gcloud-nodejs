var http = require('http');



var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World!");
}

// use mongodb client to initialize

var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});


var www = http.createServer(handleRequest);
www.listen(8080);
