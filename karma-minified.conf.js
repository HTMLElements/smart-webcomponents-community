
// Karma configuration
// Generated on Wed Jun 15 2016 09:05:44 GMT-0500 (CDT)

var module;

module.exports = function (config) {
    'use strict';
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        browserNoActivityTimeout: 100000,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine-jquery', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js',
            'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
            'jasmine-ready.js',
            'source-minified/native-shim.js',
            'source-minified/smart.element-polyfills.js',
            'source-minified/smart.element.js',
            'source-minified/smart.tank.js',
            'source-minified/smart.dropdownlist.js',
            'source-minified/smart.textbox.js',
            'source-minified/smart.tooltip.js',
            'source-minified/smart.menu.js', 
            'source-minified/*.js',
            'source-minified/styles/smart.base.css',
            'test/*/*.test.js',
          
            { pattern: 'test/*/fixtures/*.htm', included: false, served: true, watched: false }
        ],

        // list of files to exclude
        exclude: ['source-minified/smart.elements.js'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        plugins: [
            'karma-jasmine',
            'karma-jasmine-jquery',
            'karma-firefox-launcher'
        ],
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        proxies: { '/test/fixtures/': '/base/test/fixtures/' }
    });
};
