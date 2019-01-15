const http = require("http");

http.createServer(function (request, response) {
    console.log(request);
}).listen(8888);