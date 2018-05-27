'use strict';

const LinkedList = require('./linked-list');

const traversal = module.exports = {};

traversal.findMatches = (rootNode, targetValue) => {
  const matches = new LinkedList();
  const traverseTree = (current) => {
    if (current.value === targetValue) {
      matches.insertAtHead(current);
    }
    if (current.children === []) {
      return undefined;
    }
    for (let x = 0; x < current.children.length; x++) {
      traverseTree(current.children[x]);
    }
    return undefined;
  };
  traverseTree(rootNode);
  return matches;
};
