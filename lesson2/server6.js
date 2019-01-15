const http = require("http");
const fs = require("fs");
const url = require("url");
http.createServer(function (request,response) {
    response.setHeader("Access-Control-Allow-Origin","*");
    response.writeHead(200,{"Content-type" : "text/plain; charset=utf-8"});

    //解析前台通过get方式传递过来的数据
    let data = url.parse(request.url,true).query;

    //使用异步的方式写入
    fs.writeFile(data["fileName"],data["fileContent"],"utf-8",function (error) {
        if(error){
            console.log(error.message);
        }
        response.end("写入成功");
    });
}).listen(8888);