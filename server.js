var express = require('express');
var app = express();
var http = require('http').Server(app);  // 创建 HTTP 服务器
var io = require('socket.io')(http); // 初始化 socket.io

// 配置访问路径
app.get('/chat', function (req, res) {
    // req 代表客户端传给服务器的内容
    // res 代表服务器返回给客户端的内容
    console.log('访问路径：', __dirname + '/chat.html'); // 输出完整路径
    res.sendFile(__dirname + '/chat.html');
});

// 静态文件托管
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/images', express.static(__dirname + '/images'));

// 开启端口，启动服务器
http.listen(10000, function () {
    console.log('服务器启动成功，访问地址：http://localhost:10000/chat');
});

// 对服务器中的 socket 进行处理
io.on('connection', function(socket) {
    console.log('有用户连接');
    
    socket.on('user', function(name) {
        console.log('用户名：', name);
        // 这里可以处理其他的 socket 消息
    });

    socket.on('disconnect', function() {
        console.log('用户断开连接');
    });
});
