'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = interpolateHusl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _husl = require('husl');

var _husl2 = _interopRequireDefault(_husl);

function interpolateHusl(a, b) {
  a = toHusl(a);
  b = toHusl(b);
  var ah = a[0],
      as = a[1],
      al = a[2],
      bh = b[0] - ah,
      bs = b[1] - as,
      bl = b[2] - al;
  if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
  if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;else if (bh > 180) bh -= 360;else if (bh < -180) bh += 360; // shortest path
  return function (t) {
    return _husl2['default'].toHex(ah + bh * t, as + bs * t, al + bl * t);
  };
}

function toHusl(format) {
  var r = 0,
      g = 0,
      b = 0,
      color;
  if (format != null && format.charAt(0) === '#' && !isNaN(color = parseInt(format.slice(1), 16))) {
    if (format.length === 4) {
      r = (color & 3840) >> 4;r = r >> 4 | r;
      g = color & 240;g = g >> 4 | g;
      b = color & 15;b = b << 4 | b;
    } else if (format.length === 7) {
      r = (color & 16711680) >> 16;
      g = (color & 65280) >> 8;
      b = color & 255;
    }
  }

  return _husl2['default'].fromRGB(r / 255, g / 255, b / 255);
}
module.exports = exports['default'];