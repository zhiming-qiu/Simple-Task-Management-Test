#!/bin/sh
git clone https://github.com/zhiming-qiu/Simple-Task-Management-Web-Server.git
cd Simple-Task-Management-Web-Server
python -m SimpleHTTPServer 8000 &
wspid="$!"
sleep 10
curl http://127.0.0.1:8000
kill -9 $wspid