'use strict';

const Queue = require('queue-fifo');

const traversal = module.exports = {};

traversal.printLevelOrder = (rootNode) => {
  const storage = new Queue();
  let outputString = '';
  let current = rootNode;
  let thisLevelCount = 0;
  let nextLevelCount = current.children.length;

  storage.enqueue(current);

  while (!storage.isEmpty()) {
    current = storage.dequeue();
    outputString += current.value;

    for (let i = 0; i < current.children.length; i++) {
      storage.enqueue(current.children[i]);
    }

    if (thisLevelCount !== 0) {
      nextLevelCount += current.children.length;
      thisLevelCount -= 1;
    }

    if (thisLevelCount === 0) {
      outputString += '\n';
      thisLevelCount = nextLevelCount;
      nextLevelCount = 0;
    }
  }
  return outputString;
};
