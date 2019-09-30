module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/react/dist/react-with-addons.js',
      'node_modules/react-dom/dist/react-dom.js',
      'node_modules/lodash/lodash.js',
      'node_modules/chai/chai.js',
      'node_modules/sinon/pkg/sinon-server-1.17.3.js',
      'node_modules/sinon/pkg/sinon-1.17.3.js',

      'src/data/*.js',
      'src/lib/*.js',
      'src/components/*.jsx',

      'test/data/*.js',
      'test/lib/*.js',
      'test/components/*.jsx',
    ],
    preprocessors: {
      '**/*.jsx': ['react-jsx']
    },
    frameworks: ['mocha'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
