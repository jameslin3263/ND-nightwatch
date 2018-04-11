const PKG = require('./package.json');
const GLOBALS = './globals.js';
const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const firefox = require('geckodriver');
const edge = require('edgedriver');
const safari = require('selenium-drivers');

const config = {
  "src_folders": [
    "test/e2e"
  ],
  "output_folder": "./reports",
  "page_objects_path": './page_objects',
  "custom_commands_path": './custom_commands',
  "custom_assertions_path": './custom_assertions',
  "globals_path": GLOBALS,
  "selenium": {
    "start_process": true,
    "server_path": seleniumServer.path,
    "log_path": "",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": chromedriver.path,
      "webdriver.edge.driver": edge.path,
      "webdriver.gecko.driver" : firefox.path
    }
  },
  // "live_output": true,
  "test_workers" : {
    "enabled": true,
    "workers": "auto"
  },
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "globals": {
        "waitForConditionTimeout": 10000
        // "retryAssertionTimeout ": 500
      },
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "desiredCapabilities": {
        "browserName": "safari",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "local": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": true,
      "globals": {
        "waitForConditionTimeout": 15000
      },
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "desiredCapabilities": {
        "browserName": "safari",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "safari" : {
      "desiredCapabilities": {
        "browserName": "safari",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}

module.exports = config;
