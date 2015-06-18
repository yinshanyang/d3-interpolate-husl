jest.autoMockOff();
let husl = require('husl');
let interpolateHuslp = require('../huslp');

describe('Interpolate HUSL', function() {
  it('should accept hsl string', () => {
    var interpolate = interpolateHuslp('hsl(0, 100%, 50%)', 'hsl(180, 100%, 50%)'),
      aColor = interpolate(0),
      midColor = interpolate(0.5),
      bColor = interpolate(1);
    expect(aColor, midColor, bColor).toEqual(husl.p.toHex(0, 100, 50), husl.p.toHex(90, 100, 50), husl.p.toHex(180, 100, 50));
  });

  it('should accept 3-character hex and 6-character hex colors', () => {
    var interpolate = interpolateHuslp('#f00', '#0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar, sixChar).toEqual('#ac6f6f', '#494969');
  });

  it('should return black if color is errorenous', () => {
    var interpolate = interpolateHuslp('f00', '0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar, sixChar).toEqual('#000000', '#000000');
  });
});
