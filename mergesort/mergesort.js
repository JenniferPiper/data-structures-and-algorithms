'use strict';

const mergesort = module.exports = {};

mergesort.mergesort = (arr) => {
  console.log('arr.length:', arr.length);
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  console.log('mid:', mid);
  const leftRun = arr.slice(0, mid);
  const rightRun = arr.slice(mid, arr.length);
  console.log('leftRun', leftRun);
  console.log('rightRun', rightRun);
  return mergesort.merge(mergesort.mergesort(leftRun), mergesort.mergesort(rightRun));
};

mergesort.merge = (runA, runB) => {
  console.log('runA', runA);
  console.log('runB', runB);
  let output = [];

  while (runA.length && runB.length) {
    console.log('output', output);
    if (runA[0] <= runB[0]) {
      output.push(runA.shift());
    } else {
      output.push(runB.shift());
    }
    while (runA.length) {
      output.push(runA.shift());
    }
    while (runB.length) {
      output.push(runB.shift());
    }
  }
  return output;
};
