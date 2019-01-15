const fs = require("fs");

//初始化一个变量,用来存储数据
let data = {
    results : [
        {
            "name" : "jack",
            "age" : 28,
            "love" : "music"
        },
        {
            "name" : "jack1",
            "age" : 281,
            "love" : "music1"
        }
    ]
};

//使用异步方法写入文件内容
fs.writeFile("a.json",data,"utf-8",function (error) {
   if(error){
       console.log(error);
   }
   console.log("数据写入成功");
});