//引入http模块
const http =require("http");
//使用http模块搭建node服务器
const server = http.createServer(function (request,response) {
    //设置字符编码
    response.setHeader("Content-type","text/plain;charset=utf-8");
    //写入
    response.write("好高兴啊，我买了一个note\" + (3.5 * 2) + \"，爆炸了！哈哈哈哈");
    //响应结束
    response.end();

    console.log("A");
});

console.log("B");

server.listen(8080);


