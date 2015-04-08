module.exports = function(config) {

  config.set({
    frameworks: ['jspm','jasmine'],
    jspm: {
      config: './config.js',
      loadFiles: [
        'test/*.js'
      ],
      serveFiles: ['src/*.js','test/*.fixture.js']
    },
    preprocessors: {
      'src/**/*.js': ['babel'],
      'test/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        stage: 0
      }
    },
    reporters: ['story'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: false

  });
};
