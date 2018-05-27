'use strict';

const KaryTree = require('../print-level-order/kary-tree');
const Node = require('../print-level-order/node');
const traversal = require('../print-level-order/print-level-order');

describe('treeA: 9 number nodes, height 3', () => {
  const nodeA = new Node(1);
  const nodeB = new Node(2);
  const nodeC = new Node(3);
  const nodeD = new Node(4);
  const nodeE = new Node(5);
  const nodeF = new Node(6);
  const nodeG = new Node(7);
  const nodeH = new Node(8);
  const nodeI = new Node(9);

  const treeA = new KaryTree(nodeA);

  nodeA.children = [nodeB, nodeC, nodeD];
  nodeB.children = [nodeE, nodeF, nodeG];
  nodeC.children = [nodeH, nodeI];

  test('Should return string with values in each level separated by line breaks', () => {
    expect(traversal.printLevelOrder(treeA.root)).toEqual('1\n234\n56789\n');
  });
});


describe('treeB: 9 number nodes, height 4', () => {
  const nodeA = new Node(1);
  const nodeB = new Node(2);
  const nodeC = new Node(3);
  const nodeD = new Node(4);
  const nodeE = new Node(5);
  const nodeF = new Node(6);
  const nodeG = new Node(7);
  const nodeH = new Node(8);
  const nodeI = new Node(9);

  const treeB = new KaryTree(nodeA);

  nodeA.children = [nodeB, nodeC];
  nodeB.children = [nodeD, nodeE, nodeF];
  nodeD.children = [nodeG];
  nodeF.children = [nodeH, nodeI];

  test('Should return string with values in each level separated by line breaks', () => {
    expect(traversal.printLevelOrder(treeB.root)).toEqual('1\n23\n456\n789\n');
  });
});

describe('treeC: 17 string nodes, height 4', () => {
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const nodeD = new Node('D');
  const nodeE = new Node('E');
  const nodeF = new Node('F');
  const nodeG = new Node('G');
  const nodeH = new Node('H');
  const nodeI = new Node('I');
  const nodeJ = new Node('J');
  const nodeK = new Node('K');
  const nodeL = new Node('L');
  const nodeM = new Node('M');
  const nodeN = new Node('N');
  const nodeO = new Node('O');
  const nodeP = new Node('P');
  const nodeQ = new Node('Q');

  const treeB = new KaryTree(nodeA);

  nodeA.children = [nodeB, nodeC, nodeD, nodeE, nodeF, nodeG];
  nodeB.children = [nodeH, nodeI, nodeJ];
  nodeE.children = [nodeK, nodeL];
  nodeG.children = [nodeM];
  nodeH.children = [nodeN, nodeO];
  nodeK.children = [nodeP];
  nodeL.children = [nodeQ];

  test('Should return string with values in each level separated by line breaks', () => {
    expect(traversal.printLevelOrder(treeB.root)).toEqual('A\nBCDEFG\nHIJKLM\nNOPQ\n');
  });
});

