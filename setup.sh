#!/bin/sh
git clone https://github.com/zhiming-qiu/Simple-Task-Management-Web-Server.git
cd Simple-Task-Management-Web-Server
python -m SimpleHTTPServer 8000 &
wspid="$!"
echo $wspid > ../wspid
sleep 10