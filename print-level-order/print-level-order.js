'use strict';

const Queue = require('queue-fifo');

const traversal = module.exports = {};

traversal.printLevelOrder = (rootNode) => {
  const storage = new Queue();
  let outputString = '';

  function traverseTree(current) {
    if (current === '\n') {
      outputString += current;
    } else {
      outputString += current.value;
    }

    while (!storage.isEmpty()) {
      for (let i = 0; i < current.children.length; i++) {
        storage.enqueue(current.children[i]);
      }
    }
    storage.enqueue('\n');
    return null;
  }

  storage.enqueue(rootNode.value);
  traverseTree(rootNode);
  return outputString;
};
