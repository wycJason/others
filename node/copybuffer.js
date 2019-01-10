var buffer1 = new Buffer('王愿超');
// 拷贝一个缓冲区
var buffer2 = new Buffer(9);
buffer1.copy(buffer2);

console.log("buffer2 content: " + buffer2.toString());