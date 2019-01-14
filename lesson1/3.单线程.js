//引入http模块
const http = require("http");
//初始化一个变量
let a = 0;
//通过http模块创建node服务器
http.createServer(function (request,response) {
    //让a的值进行自增
    a++;
    //设置字符编码
    response.setHeader("Content-type","text/plain;charset=utf-8");
    //写入
    response.write(a.toString());
    //响应结束
    response.end();
}).listen(8888);

