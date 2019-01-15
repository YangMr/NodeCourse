//引入http模块
const http = require("http");
//引入url模块
const url = require("url");
//创建http服务器
http.createServer(function (request,response) {
    //允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    let login_data = url.parse(request.url,true).query;
    if(login_data["user"] == "jack" && login_data["pass"] == "123456"){
        response.write("success");
    }else{
        response.write("用户名或密码错误");
    }
    response.end();
}).listen(8888);