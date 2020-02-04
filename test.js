"use strict"; 
var assert = require('assert');
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
// driver.getTitle().then(function(title){
//     console.log("=======");
//     console.log(title);
//     assert(title === 'STMWS');
// });
// driver.wait(until.elementLocated(By.id('list')), 10000).then(function(button) {
//     button.click();
// });
driver.findElement({id: 'list'}).click();
driver.findElements({id: 'tasks'}).then(function(elements) {
    // console.log(elements.length);
    elements[1].getText().then(function(text) {
        console.log(text);
    });
});
// driver.findElements({id: 'tasks'})[1].getText().then(function(s){
//     console.log(s);
// });