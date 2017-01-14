require('babel-register')();
require('ignore-styles').default(['.sass', '.scss', '.svg']);
require('./linter');

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.localStorage = {
  getItem: (item) => { return '{}' },
  setItem: (item, value) => {},
  removeItem: (item) => {},
}

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

try {
  require('react-tap-event-plugin')();
} catch(e) {
  // ignore
}

documentRef = document;
