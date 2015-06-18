jest.autoMockOff();
let interpolateHusl = require('../husl');

describe('Interpolate HUSL', function() {
  it('should accept 3-character hex and 6-character hex colors', () => {
    var interpolate = interpolateHusl('#f00', '#0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar + sixChar).toBe('#ff0000#0000ff');
  });

  it('should return black if color is errorenous', () => {
    var interpolate = interpolateHusl('f00', '0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar + sixChar).toBe('#000000#000000');
  });
});
