//引入文件系统
const fs = require("fs");
exports.get = function (fileName,key) {
  let config = {};
  try{
    let str = fs.readFileSync(fileName,"utf-8");
    config = JSON.parse(str);
  }catch (e) {
    console.log(e.message);
  }
  return config[key];
};