const url = require('url');
let data = {
        protocol: 'http:',
        slashes: true,
        auth: 'Chyingp:HelloWorld',
        host: 'ke.qq.com:8080',
        port: '8080',
        hostname: 'ke.qq.com',
        hash: '#part=1',
        search: '?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
        query: 'nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
        pathname: '/index.html',
        path:
    '/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1',
        href:
    'http://Chyingp:HelloWorld@ke.qq.com:8080/index.html?nick=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%B0%8F%E5%8D%A1#part=1' };

console.log(url.format(data));