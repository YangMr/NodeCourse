const http = require("http");
//url解析地址模块
const url = require("url");
//引入封装的读取文件模块
const read = require("./readfile");
http.createServer(function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*");
    response.writeHead(200,{"Content-type" : "text/plain; charset=utf-8"});
    let data = url.parse(request.url,true).query;
    read.read(request,response,data["file"])
}).listen("8888");