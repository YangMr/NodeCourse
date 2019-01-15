const url = require('url');
let data1 = url.resolve('/one/two/three', 'four')         // '/one/two/four'
let data2 = url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
let data3 = url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
console.log(data3)