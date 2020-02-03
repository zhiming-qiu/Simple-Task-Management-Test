#!/bin/sh
curl http://127.0.0.1:8000
ls
cat wspid
kill -9 `cat wspid`