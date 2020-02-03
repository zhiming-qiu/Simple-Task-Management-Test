#!/bin/sh
curl http://127.0.0.1:8000 > null # ensure web server is up running
kill -9 `cat wspid` # kill the web server process to terminate test workflow