"use strict"; 
var webdriver = require("selenium-webdriver"),
SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;
var chrome = require("selenium-webdriver/chrome");

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities({'browserName' : 'chrome'})
    .build();

driver.get("http://127.0.0.1:8000");
driver.getTitle().then(function(title){
    // console.log(title);
    assert(title === 'STMWS');
});