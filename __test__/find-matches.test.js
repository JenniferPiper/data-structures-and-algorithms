'use strict';

const KaryTree = require('../find-matches/kary-tree');
const KaryNode = require('../find-matches/kary-node');
const traversal = require('../find-matches/find-matches');

describe('treeA', () => {
  const nodeA = new KaryNode(1);
  const nodeB = new KaryNode(2);
  const nodeC = new KaryNode(3);
  const nodeD = new KaryNode(2);
  const nodeE = new KaryNode(2);
  const nodeF = new KaryNode(2);
  const nodeG = new KaryNode(1);

  const treeA = new KaryTree(nodeA);

  nodeA.children = [nodeB, nodeC, nodeD];
  nodeB.children = [nodeF, nodeG];
  nodeD.children = [nodeE];

  describe('Find matches tests', () => {
    test('value of returned linked-list head should match target value', () => {
      expect(traversal.findMatches(treeA.root, 2).head.value.value).toEqual(2);
      expect(traversal.findMatches(treeA.root, 3).head.value.value).toEqual(3);
    });
    test('returned linked-list should be null if target value is not found', () => {
      expect(traversal.findMatches(treeA.root, 5).head).toEqual(null);
      expect(traversal.findMatches(treeA.root, 9).head).toEqual(null);
    });
    test('length of returned linked-list should match count of target value in the input tree', () => {
      expect(traversal.findMatches(treeA.root, 5).length()).toEqual(0);
      expect(traversal.findMatches(treeA.root, 2).length()).toEqual(4);
      expect(traversal.findMatches(treeA.root, 1).length()).toEqual(2);
    });
  });
});
