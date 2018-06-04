'use strict';

const trees = require('../tree-intersection/tree-intersection');
const Node = require('../tree-intersection/node');
const BinaryTree = require('../tree-intersection/binary-tree');

describe('tree intersection', () => {
  test('Should return array of values found in tree1 and tree2', () => {
    const nodeA = new Node(1);
    const nodeB = new Node(2);
    const nodeC = new Node(3);
    const nodeD = new Node(4);
    const nodeE = new Node(5);

    const nodeF = new Node(5);
    const nodeG = new Node(9);
    const nodeH = new Node(3);
    const nodeI = new Node(2);

    const tree1 = new BinaryTree(nodeA);

    nodeA.left = nodeB;
    nodeA.right = nodeC;

    nodeB.left = nodeD;
    nodeB.right = nodeE;

    const tree2 = new BinaryTree(nodeF);

    nodeF.left = nodeG;
    nodeF.right = nodeH;

    nodeH.right = nodeI;

    expect(trees.intersection(tree1.root, tree2.root)).toEqual([5, 3, 2]);
  });

  test('Should return array of values found in tree3 and tree4', () => {
    const nodeJ = new Node(1);
    const nodeK = new Node(2);
    const nodeL = new Node(3);
    const nodeM = new Node(4);
    const nodeN = new Node(5);
    const nodeO = new Node(5);
    const nodeP = new Node(9);

    const nodeQ = new Node(3);
    const nodeR = new Node(2);

    const tree3 = new BinaryTree(nodeJ);

    nodeJ.left = nodeK;
    nodeJ.right = nodeL;

    nodeK.left = nodeM;
    nodeK.right = nodeN;
    nodeO.left = nodeP;

    const tree4 = new BinaryTree(nodeQ);

    nodeQ.right = nodeR;

    expect(trees.intersection(tree3.root, tree4.root)).toEqual([3, 2]);
  });
  test('Should return an empty array when the two trees have no values in common', () => {
    const nodeS = new Node(1);
    const nodeT = new Node(2);
    const nodeU = new Node(345);
    const nodeV = new Node(4);
    const nodeW = new Node(52);

    const nodeX = new Node(6);
    const nodeZ = new Node(95);
    const nodeAA = new Node(100);

    const tree5 = new BinaryTree(nodeS);

    nodeS.left = nodeT;
    nodeS.right = nodeU;

    nodeU.left = nodeV;
    nodeU.right = nodeW;

    const tree6 = new BinaryTree(nodeX);

    nodeX.left = nodeZ;
    nodeX.right = nodeAA;

    expect(trees.intersection(tree5.root, tree6.root)).toEqual([]);
  });
});
