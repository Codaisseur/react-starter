// See for more options:
// https://www.npmjs.com/package/mocha-eslint

var lint = require('mocha-eslint');

var paths = [
  'src',
];

var options = {
  // Note: we saw timeouts with the 2000ms mocha timeout setting,
  // thus raised to 5000ms for eslint
  timeout: 5000,  // Defaults to the global mocha `timeout` option
};

// Run the tests
lint(paths, options);
