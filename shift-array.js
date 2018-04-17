'use strict';

function insertShiftArray (inputArray, newValue) {
  const middle = Math.ceil(inputArray.length / 2);
  const outputArray = [];

  for (let i = 0; i < middle; i += 1) {
    outputArray[i] = inputArray[i];
  }
  outputArray[middle] = newValue;
  let j = middle;
  for (let i = j + 1; i < inputArray.length + 1; i += 1) {
    outputArray[i] = inputArray[j];
    j += 1;
  }
  return outputArray;
}
