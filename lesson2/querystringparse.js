const querystring = require('querystring');
let str = 'nick=casper&age=24';
let obj = querystring.parse(str);
console.log(obj)
// console.log(JSON.stringify(obj, null, 4));