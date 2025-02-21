@echo off
::设置编码为utf-8，否则输出会乱码
chcp 65001
:: 检查是否安装 Node.js
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未检测到 Node.js 环境。请先安装 Node.js。
    pause
    exit /b
)
echo 启动服务器...
:: 启动 Node.js 
start "" "node" "server.js"

:: 等待启动
timeout /t 3 /nobreak >nul

:: 打开浏览器并访问聊天页面
start "" "http://localhost:10000/chat"

echo 服务器已启动，浏览器已打开，请访问 http://localhost:10000/chat
pause
