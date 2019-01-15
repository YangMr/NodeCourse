const fs = require("fs");
//使用异步的方式写入
function write(request,response,fileName,fileContent){
    fs.writeFile(fileName,fileContent,"utf-8",function (error) {
        if(error){
            console.log(error.message);
        }
        response.end("写入成功");
    });
}
module.exports = {
    write
}