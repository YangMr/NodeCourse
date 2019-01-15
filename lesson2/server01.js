//引入http模块
const http = require("http");
//引入url模块
const url = require("url");
//引入querystring模块
const querystring = require("querystring");
//创建服务器
http.createServer(function (request, response) {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    if(request.method == "GET"){
        let data = url.parse(request.url,true).query;
        if(data["user"] == "jack" && data["pass"] == "123456"){
            response.write("用户名和密码正确");
        }else{
            response.write("用户名或密码错误");
        }
        response.end();
    }
    if(request.method == "POST"){
        let userData = "";
        request.on("data",function (data) {
            userData += data;
        })
        request.on("end",function () {
          let data =  querystring.parse(userData);
          if(data["user"] == "jack" && data["pass"] == "123456"){
              response.write("用户名和密码正确");
          }else{
              response.write("用户名或者密码错误");
          }
            response.end();
        })
    }
}).listen(8888);