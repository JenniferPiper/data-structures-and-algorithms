'use strict';

const util = require('util');

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
  length() {
    let count = 0;
    if (this.head === null) {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
        count += 1;
      }
    }
    return count;
  }
}
const traversal = module.exports = {};

traversal.findMatches = (rootNode, targetValue) => {
  const matches = new LinkedList();
  let temp = 0;
  const traverseTree = (current) => {
    console.log('current:', util.inspect(current, false, null));

    if (current.value === targetValue) {
      matches.insertAtHead(current);
    }
    if (current.children === []) {
      return undefined;
    }
    for (let x = 0; x < current.children.length; x++) {
      console.log(`current.children[${x}]`, util.inspect(current.children[x], false, null));
      traverseTree(current.children[x]);
    }
    temp += 1;
  };
  traverseTree(rootNode);
  return matches;
};
