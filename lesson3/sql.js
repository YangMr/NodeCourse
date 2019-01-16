//引入mysql模块
const mysql = require("mysql");
//创建连接
const connection = mysql.createConnection({
    //主机地址
    host : "localhost",
    //用户名
    user : "root",
    //密码
    password : "asdqwe123",
    //数据库名
    database : "user"
});

//连接数据库
connection.connect();

//增
connection.query('insert into user_reg (user,pass,notpass,email,ps) values ("jack5","759168442","759168442","17802901987@163.com","I love Node.js")',function (error) {
    if(error){
        console.log(error.message);
    }
    console.log("插入成功");
});

//删
connection.query("delete from user_reg where id =4",function (error) {
    if(error){
        console.log(error.message);
    }
    console.log("删除成功");
});

//改
connection.query('update user_reg set user ="rose" where user="jack"',function (error) {
    if(error){
        console.log(error.message);
    }
    console.log("更新成功");
})

//查
connection.query("select user,pass from user_reg",function (error,rows,fields) {
    if(error){
        console.log(error.message);
    }
    console.log(rows);
    console.log("查询成功")
});

//关闭数据库
connection.end();