var http =require("http");
var port = 5000;
http.createServer(function(request,response){
response.end('Hello World\n');

}).listen(port);

console.log('Server running at http://127.0.0.1:5000/');