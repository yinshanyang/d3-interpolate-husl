jest.autoMockOff();
let husl = require('husl');
let interpolateHusl = require('../husl');

describe('Interpolate HUSL', function() {
  it('should accept hsl string', () => {
    var interpolate = interpolateHusl('hsl(0, 100%, 50%)', 'hsl(180, 100%, 50%)'),
      aColor = interpolate(0),
      midColor = interpolate(0.5),
      bColor = interpolate(1);
    expect(aColor, midColor, bColor).toEqual(husl.toHex(0, 100, 50), husl.toHex(90, 100, 50), husl.toHex(180, 100, 50));
  });

  it('should accept 3-character hex and 6-character hex colors', () => {
    var interpolate = interpolateHusl('#f00', '#0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar, sixChar).toEqual('#ff0000', '#0000ff');
  });

  it('should return black if color is errorenous', () => {
    var interpolate = interpolateHusl('f00', '0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar, sixChar).toEqual('#000000', '#000000');
  });
});
