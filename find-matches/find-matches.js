'use strict';

const LinkedList = require('./linked-list');

const traversal = module.exports = {};

// these will be O(1) time, O(1) space:
// + - / * assignment, ifs, return


// O(n) in time and O(H + M) in space
// where H is the height of the tree and M is the number of Matches
// O(H + M) can be converted to O(N) in the worst case, but you should
// show how you got there.
traversal.findMatches = (rootNode, targetValue) => {
  const matches = new LinkedList(); // O(1) time, O(1) space
  const traverseTree = (current) => {
    if (current.value === targetValue) { // O(1) time, O(1) space
      matches.insertAtHead(current); // O(1) time. How many times will this line happen?
      // O(M) space, where M is the number of matches.
    }
    if (current.children === []) { // O(1) time, O(1) space
      return undefined; // O(1) time, O(1) space
      // THIS LINE IS IMPORTANT BECAUSE IT IMPLIES A POP FROM THE CALL STACK
    }
    for (let x = 0; x < current.children.length; x++) { // O(1) space,
      // O(current.children.length) time.
      // This line is visiting the entire array of subtrees.
      // O(n) Time, where n is the number of nodes.
      traverseTree(current.children[x]); // This line is visiting the entire sub-tree
      // THIS LINE IS IMPORTANT BECAUSE IT IMPLIES A PUSH TO THE CALL STACK
    }
    return undefined; // O(1) time, O(1) space
    // THIS LINE IS IMPORTANT BECAUSE IT IMPLIES A POP FROM THE CALL STACK
  };
  traverseTree(rootNode); // O(n) time because we are visiting all the sub-trees and all its nodes
  return matches; // O(1) time, O(1) space
};
