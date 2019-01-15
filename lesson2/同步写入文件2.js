const fs = require("fs");
//使用同步方法写入数据
try{
    fs.writeFileSync("c.txt","hello node js","utf-8");
    console.log("写入成功")
}catch (e) {
    throw e.message;
}

