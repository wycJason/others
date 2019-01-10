var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('p1.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('p2.txt');

// 管道读写操作
// 读取 p1.txt 文件内容，并将内容写入到 p2.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");