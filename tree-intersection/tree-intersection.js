'use strict';

const trees = module.exports = {};

trees.intersection = (root1, root2) => {
  if (!(root1 && root2)) {
    throw new Error('Requires input of two binary tree root nodes.');
  }
  const map = {};
  let currentNode = null;
  const output = [];
  const mapValues = (rootNode) => {
    currentNode = rootNode;
    if (!currentNode) {
      return undefined;
    }
    map[rootNode.value] = true;
    mapValues(rootNode.left);
    mapValues(rootNode.right);
    return undefined;
  };
  const compareValues = (rootNode) => {
    currentNode = rootNode;
    if (!currentNode) {
      return undefined;
    }
    if (map[rootNode.value]) {
      output.push(rootNode.value);
      map[rootNode.value] = false;
    }
    compareValues(rootNode.left);
    compareValues(rootNode.right);
    return undefined;
  };
  mapValues(root1);
  compareValues(root2);
  return output;
};
