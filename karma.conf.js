// Karma configuration
// Generated on Fri Dec 25 2015 21:48:13 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],

    plugins: [
        'karma-systemjs', 
        'karma-safari-launcher',
        'karma-firefox-launcher', 
        'karma-opera-launcher', 
        'karma-phantomjs-launcher', 
        'karma-jasmine',
        'karma-nyan-reporter',
        'karma-osx-reporter'
        ],

    // list of files / patterns to load in the browser
    files: [
        'src/js/*.js',
        'src/js/**/*.js'
    ],


    // list of files to exclude
    exclude: [
        'src/js/bootstrap.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan'],


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
    browsers: ['Safari'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    systemjs: {
        includeFiles: [
            'bower_components/webcomponentsjs/webcomponents.js'
        ],

        // Path to your SystemJS configuration file 
        configFile: 'system.conf.js',
     
        // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries. 
        serveFiles: [
        ],
     
    },

    // reporter options 
    nyanReporter: {
      // suppress the error report at the end of the test run 
      suppressErrorReport: false,
 
      // suppress the red background on errors in the error 
      // report at the end of the test run 
      suppressErrorHighlighting: false,
 
      // increase the number of rainbow lines displayed 
      // enforced min = 4, enforced max = terminal height - 1 
      numberOfRainbowLines: 4, // default is 4 
    }

  })
}
