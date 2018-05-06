'use strict';

// Stack data structure based on
// https://gist.github.com/mitrakmt/ceb1aefda6aa97facb104a49a2b9dbc3#file-stack-js
// modified by Jennifer Piper


module.exports = class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(value) {
    this.storage[this.count] = value;
    this.count += 1;
  }
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count -= 1;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
};
