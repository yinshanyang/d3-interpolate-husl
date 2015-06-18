'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _husl = require('./husl');

var _husl2 = _interopRequireDefault(_husl);

var _huslp = require('./huslp');

var _huslp2 = _interopRequireDefault(_huslp);

if (typeof window !== 'undefined') {
  if (window.d3 !== undefined) {
    window.d3.interpolateHusl = _husl2['default'];
    window.d3.interpolateHuslp = _huslp2['default'];
  }
}

exports.interpolateHusl = _husl2['default'];
exports.interpolateHuslp = _huslp2['default'];