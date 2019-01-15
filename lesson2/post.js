// 引入http模块
const http = require("http");
// 引入querystring模块
const querystring = require("querystring");
// 创建服务器
http.createServer(function (request,response) {
    //设置跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    let str = "";
    request.on("data",function (data) {
        str += data;
    });
    request.on("end",function () {
       let data = querystring.parse(str);
       if(data["user"] == "jack" && data["pass"] == "123456"){
           response.write("success");
       }else{
           response.write("用户名或者密码错误");
       }
       response.end();
    });
}).listen(8888);