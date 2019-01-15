const fs = require("fs");
function read(request,response,fileName){
    fs.readFile(fileName,"utf-8",function (error,data) {
        if(error){
            console.log(error.message);
        }
        response.end(data);
    })
};
module.exports = {
    read
};