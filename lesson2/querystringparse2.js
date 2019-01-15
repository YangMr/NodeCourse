const querystring = require("querystring");
var str1 = 'nick=casper&age=24&extra=name-chyingp|country-cn';
var obj1 = querystring.parse(str1);

var obj2 = querystring.parse(obj1.extra, '|', '-');
console.log(obj2)
// console.log(JSON.stringify(obj2, null, 4));