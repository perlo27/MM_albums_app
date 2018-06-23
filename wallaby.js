module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'package.json',
      'src/**/*.snap',
      '!src/**/__tests__/*.test.js',
      '!src/**/*.test.js',
      'jest/*.js',
    ],

    tests: [
      'src/**/__tests__/*.test.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: [
          'react-native',
        ],
        plugins: [
          'transform-decorators-legacy'
        ]
      })
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
