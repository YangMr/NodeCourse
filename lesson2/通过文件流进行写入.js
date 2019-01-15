const fs = require("fs");
let writeStream = fs.createWriteStream("./d.txt","utf-8");
writeStream.write("hello");
writeStream.write("world");
writeStream.end("");
writeStream.close();