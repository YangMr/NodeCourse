//引入http模块
const http = require("http");
//通过http模块创建node服务器
http.createServer(function (request,response) {
    //设置字符编码
    response.setHeader("Content-type","text/plain;charset=utf-8");
    let num = parseInt(Math.random() *3);
    if(num == 2){
        console.log("中奖用户" + request.connection.remoteAddress);
        throw new Errow("错误");
    }
    //输出数字
    response.write(num.toString() + "【ip】" + request.connection.remoteAddress);
    response.end();
}).listen(8888);

