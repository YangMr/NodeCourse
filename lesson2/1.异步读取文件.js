//引入文件系统模块
const fs = require("fs");
//使用异步方法读取文件
fs.readFile("./笔记.txt",function (error,data) {
    //如果存在错误,则在控制台输出错误
    if(error){
        console.log(error.message);
    }
    //输出读取文件的内容
    console.log(data)
});