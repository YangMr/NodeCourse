//引入http模块
const http = require("http");
//引入mysql模块
const mysql = require("mysql");
//引入querystring模块
const querystring = require("querystring");
//通过http模块创建服务器
http.createServer(function (request, response) {
    //设置cros跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置字符编码
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    //接收前台以post方式传递过来的数据
    let reg_data = "";
    request.on("data",function (data) {
        reg_data += data;
    })
    request.on("end",function () {
        reg_data = querystring.parse(reg_data);
        let user = reg_data["user"];
        let pass = reg_data["pass"];
        //创建数据库连接
        let connection = mysql.createConnection({
            host : "localhost",
            port : 3306,
            user : "root",
            password : "asdqwe123",
            database : "node"
        })
        //连接数据库
        connection.connect();
        //增
        let addSql = "insert into registered (userName,userPass) values (?,?)";
        let data = [user,pass];
        connection.query(addSql,data,function (error) {
            if(error){
                throw  error.message;
            }
            console.log("数据插入成功");
            response.end("success");
        })
    });


}).listen(8888);