const queryString = require("querystring");
const url = require("url");
let data = "user=zhangsan&pass=123456";

// console.log(queryString.parse(data));
console.log(url.parse(data))