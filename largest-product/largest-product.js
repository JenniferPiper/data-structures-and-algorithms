'use strict';

const product = module.exports = {};

product.largestProduct = (twoDArr) => {
  let largestNum = 0;
  let currentNum = 0;
  const len1 = twoDArr.length;
  const len2 = twoDArr[0].length;
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if ((j !== 0)) {
        currentNum = twoDArr[i][j] * twoDArr[i][j - 1];
        if (currentNum > largestNum) {
          largestNum = currentNum;
        }
      }
      if ((j < len2 - 1)) {
        currentNum = twoDArr[i][j] * twoDArr[i][j + 1];
        if (currentNum > largestNum) {
          largestNum = currentNum;
        }
      }
      if (i !== 0) {
        currentNum = twoDArr[i][j] * twoDArr[i - 1][j];
        if (currentNum > largestNum) {
          largestNum = currentNum;
        }
      }
      if (i < len1 - 1) {
        currentNum = twoDArr[i][j] * twoDArr[i + 1][j];
        if (currentNum > largestNum) {
          largestNum = currentNum;
        }
      }
    }
  }
  return largestNum;
};
