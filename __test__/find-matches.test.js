'use strict';

const util = require('util');
const KaryTree = require('../find-matches/kary-tree');
const Node = require('../find-matches/node');
const traversal = require('../find-matches/find-matches');

describe('treeA', () => {
  const nodeA = new Node(1);
  const nodeB = new Node(2);
  const nodeC = new Node(3);
  const nodeD = new Node(2);
  const nodeE = new Node(2);
  const nodeF = new Node(2);
  const nodeG = new Node(7);

  const treeA = new KaryTree(nodeA);

  nodeA.children = [nodeB, nodeC, nodeD];
  nodeB.children = [nodeF, nodeG];
  nodeD.children = [nodeE];

  console.log('findMatches(treeA.root, 2)', util.inspect(traversal.findMatches(treeA.root, 2), false, null));


  test('treeA', () => {
    expect(traversal.findMatches(treeA.root, 2).head.value.value).toEqual(2);
    expect(traversal.findMatches(treeA.root, 7).head.value.value).toEqual(7);
    expect(traversal.findMatches(treeA.root, 5).head).toEqual(null);
   // expect(traversal.findMatches(treeA.root, 5).length()).toEqual(3);
  });
});
