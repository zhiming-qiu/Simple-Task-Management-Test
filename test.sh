#!/bin/sh
echo "========================"
echo "Your UI tests go here!!!"
echo "========================"
npm install selenium-webdriver
curl http://chromedriver.storage.googleapis.com/79.0.3945.16/chromedriver_linux64.zip > chromedriver.zip
unzip chromedriver.zip
export PATH=$PATH:.
which google-chrome
ls -l /usr/bin/google-chrome
#node test.js