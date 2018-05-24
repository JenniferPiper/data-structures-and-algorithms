'use strict';

const KaryTree = require('../find-matches/kary-tree');
const Node = require('../find-matches/node');
const traversal = require('../find-matches/find-matches');

describe('treeA', () => {
  const nodeA = new Node(1);
  const nodeB = new Node(2);
  const nodeC = new Node(3);

  const treeA = new KaryTree(nodeA);

  nodeA.children = [nodeB, nodeC];

  test('treeA', () => {
    expect(traversal.findMatches(treeA.root)).toEqual('1\n23\n');
  });
});
