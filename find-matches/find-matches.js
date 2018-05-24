'use strict';

class LlNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new LlNode(value);

    node.next = this.head;
    this.head = node;
    return this;
  }
}
const traversal = module.exports = {};

traversal.findMatches = (rootNode, targetValue) => {
  const matches = new LinkedList();

  const traverseTree = (current) => {
    if (current.value === targetValue) {
      matches.insertAtHead(current);
      for (let x = 0; x < current.children.length; x++) {
        traverseTree(current.children[x]);
      }
    }
  };
  traverseTree(rootNode);
  return matches;
};
