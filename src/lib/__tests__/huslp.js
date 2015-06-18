jest.autoMockOff();
let interpolateHuslp = require('../huslp');

describe('Interpolate HUSLp', function() {
  it('should accept 3-character hex and 6-character hex colors', () => {
    var interpolate = interpolateHuslp('#f00', '#0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar + sixChar).toBe('#ac6f6f#494969');
  });

  it('should return black if color is errorenous', () => {
    var interpolate = interpolateHuslp('f00', '0000ff'),
      threeChar = interpolate(0),
      sixChar = interpolate(1);
    expect(threeChar + sixChar).toBe('#000000#000000');
  });
});
