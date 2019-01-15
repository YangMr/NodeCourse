const fs = require("fs");
//使用异步方法写入文件内容
fs.writeFile("a.json",'{"name" : "jack"}',"utf-8",function (error) {
   if(error){
       console.log(error);
   }
   console.log("数据写入成功");
});