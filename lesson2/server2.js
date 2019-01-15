//引入http模块
const http = require("http");
//引入问及那系统模块
const fs = require("fs");
//创建http服务器
http.createServer(function (request,response) {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应的字符编码
    response.writeHead(200,{"Content-type" : "text/html; charset=utf-8"});
    //使用异步的方式读取文件内容
    fs.readFile("./fs.html","utf-8",function (error,data) {
        if(error){
            throw  error.message;
        }
        //数据返回给前台
        response.end(data);
    })
}).listen(8888);
