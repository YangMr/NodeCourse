//引入fs文件系统模块
const fs = require("fs");
//通过文件流读取
let readStream = fs.createReadStream("./笔记.txt","utf-8");
//接收数据
readStream.on("data",function (data) {
    console.log(data);
}).on("error",function (error) {
    console.log(error.message)
}).on("end",function () {
    console.log("读取结束");
}).on("close",function () {
    console.log("关闭读取");
});