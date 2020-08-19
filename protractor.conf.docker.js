var {setDefaultTimeout} = require('cucumber');

exports.config = {
    // Specify the patterns for test files
    // to include in the test run
    specs: [
        'features/**/*.feature'
    ],
    seleniumAddress: "http://localhost:4444/wd/hub",

    // Use this to exclude files from the test run.
    // In this case it's empty since we want all files
    // that are mentioned in the specs.
    exclude: [],

    // Use cucumber for the tests
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: false,

    // Contains additional settings for cucumber-js
    cucumberOpts: {
        require: ['step_definitions/**/*.js'],
        format: ["node_modules/cucumber-pretty", "json:reports/results.json"],
        strict: true,
        tags: '@Web'
    },

    // These capabilities tell protractor about the browser
    // it should use for the tests. In this case chrome.
    capabilities: {
        'browserName': 'chrome',
        'enableVNC': true,
        'chromeOptions': {

        }
    },

    // This setting tells protractor to wait for all apps
    // to load on the page instead of just the first.
    useAllAngular2AppRoots: true,

    onPrepare: () => {
        let globals = require("protractor");
        global.browser = globals.browser;
        var chai = require("chai");
        var chaiAsPromised = require("chai-as-promised");
        chai.use(chaiAsPromised);
        global.chai = chai;
    }
}
