"use strict"; 
var webdriver = require("selenium-webdriver"),
SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;
var chrome = require("selenium-webdriver/chrome");

var chromeOptions = new chrome.Options();
chromeOptions.addArguments(['--headless', '--no-sandbox', '--disable-dev-shm-usage']);
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .withCapabilities({
        'browserName' : 'chrome'})
    .build();

driver.get("http://127.0.0.1:8000");
driver.getTitle().then(function(title){
    // console.log(title);
    assert(title === 'STMWS');
});