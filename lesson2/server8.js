const http = require("http");
const url = require("url");
const write = require("./writefile");

http.createServer(function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*");
    response.writeHead(200,{"Content-type" : "text/plain; charset=utf-8"});

    //解析前台通过get方式传递过来的数据
    let data = url.parse(request.url,true).query;

    write.write(request,response,data["fileName"],data["fileContent"]);

}).listen(8888);