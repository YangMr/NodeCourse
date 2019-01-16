const fs = require("fs");
const sys = require("util");
exports.get = function (fileName,key) {
    let configJson = {};
    try {
        let str = fs.readFileSync(fileName,"utf-8");
        configJson = JSON.parse(str);
    }catch (e) {
        console.log("JSON parse fails");
    }
    return configJson[key];
};