'use strict';

const findMax = module.exports = {};

const traverseTree = (root, max) => {
  if (!root) {
    return undefined;
  }
  if (root.value > max.value) {
   max.value = root.value; // eslint-disable-line
  }
  traverseTree(root.left, max);
  traverseTree(root.right, max);
  return undefined;
};

findMax.findMaxumumValue = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  const maxValue = {};
  maxValue.value = rootNode.value;
  traverseTree(rootNode, maxValue);
  return maxValue.value;
};
