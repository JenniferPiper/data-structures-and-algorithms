'use strict';

const product = require('../largest-product/largest-product');

describe('largest-product.js', () => {
  test('should return largest product of adjacent values from a 3 by 2 array', () => {
    expect(product.largestProduct([[1, 2], [3, 4], [5, 6]])).toEqual(30);
  });
  test('should return largest product of adjacent values from a 4 by 2 array', () => {
    expect(product.largestProduct([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
  });
  test('should return largest product of adjacent values from a 3 by 3 array', () => {
    expect(product.largestProduct([[1, 2, 8], [3, 4, 6], [5, 0, 8]])).toEqual(48);
  });
});
