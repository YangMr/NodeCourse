//引入http模块
const http = require("http");
//通过引入的http模块来搭建服务器
http.createServer(function (request,response) {
    //设置响应的字符编码
    response.setHeader("Content-type","text/html; charset=utf-8");
    response.writeHead(200,{"Content-type" : "text/html; charset = utf-8"});
    //写入
    response.write("hello");
    //响应结束
    response.end();
}).listen(8080);