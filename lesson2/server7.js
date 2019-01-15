const http = require("http");
const fs = require("fs");
const url = require("url");
//使用异步的方式写入
function write(request,response,fileName,fileContent){
    fs.writeFile(fileName,fileContent,"utf-8",function (error) {
        if(error){
            console.log(error.message);
        }
        response.end("写入成功");
    });
}

http.createServer(function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*");
    response.writeHead(200,{"Content-type" : "text/plain; charset=utf-8"});

    //解析前台通过get方式传递过来的数据
    let data = url.parse(request.url,true).query;


}).listen(8888);