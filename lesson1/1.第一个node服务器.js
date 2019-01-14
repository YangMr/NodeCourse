//引入http模块
const http =require("http");
const http1 = require("http");
// 通过http模块创建服务器
const server = http.createServer(function (request,response) {
    response.write("music");
    response.end();
});
server.listen(9999);

const server1 = http1.createServer(function (request,response) {
    response.write("video");
    response.end();
});
server1.listen(8888);

