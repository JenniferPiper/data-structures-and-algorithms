'use strict';

class LlNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
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
    if (this.head !== null) {
      let current = this.head;
      count += 1;
      while (current.next != null) {
        current = current.next;
        count += 1;
      }
    }
    return count;
  }
};
