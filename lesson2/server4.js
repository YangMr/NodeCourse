const http = require("http");
const fs = require("fs");
//url解析地址模块
const url = require("url");

function read(request,response,fileName){
    fs.readFile(fileName,"utf-8",function (error,data) {
        if(error){
            console.log(error.message);
        }
        response.end(data);
    })
}

http.createServer(function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*");

    response.writeHead(200,{"Content-type" : "text/plain; charset=utf-8"});

    let data = url.parse(request.url,true).query;
    console.log(data["file"]);
    read(request,response,data["file"])
}).listen("8888");