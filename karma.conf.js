// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const path = require('path');


module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],

    plugins: [
      require('karma-remap-istanbul'),
      require('karma-sourcemap-loader'),
      require('karma-remap-coverage'),
      require('karma-webpack'),
      require('karma-coverage'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter')
    ],

    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    // list of files / patterns to load in the browser
    files: [
      {pattern: './config/karma-test-shim.js', watched: false}
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    webpack : require('./config/webpack.test.js'),


    coverageReporter: {

      dir: path.join(__dirname, './coverage/'),
      reporters:[
        {type: 'html'},
        {type: 'text-summary'},
        {type: 'text'},
        {type: 'json', file: 'coverage.json'}
      ],
    },


    angularCli: {
      environment: 'dev'
    },

    reporters: ['progress', 'kjhtml', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
