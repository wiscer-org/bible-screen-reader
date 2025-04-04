const { stepUrl } = require('../src/nav');

describe('stepUrl', () => {
  test('increments the numeric part of the URL', () => {
    expect(stepUrl('/chapter/14', 1)).toBe('/chapter/15');
  });

  test('decrements the numeric part of the URL', () => {
    expect(stepUrl('/chapter/14', -1)).toBe('/chapter/13');
  });

  test('handles URLs without numeric parts gracefully', () => {
    expect(stepUrl('/chapter/', 1)).toBe('/chapter/');
  });

  test('handles multiple numeric parts by adjusting the last one', () => {
    expect(stepUrl('/book/1/chapter/14', 1)).toBe('/book/1/chapter/15');
  });

  test('Maintain the number of digits in the URL', () => {
    expect(stepUrl('/chapter/014', 1)).toBe('/chapter/015');
  });
});
