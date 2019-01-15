//引入fs文件系统模块
const fs = require("fs");
//使用同步方法读取文件
let data = fs.readFileSync("./笔记1.txt","utf-8");
console.log(data)