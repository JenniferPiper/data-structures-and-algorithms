'use strict';

const BinaryTree = require('../find-maximum-value/binary-tree');
const Node = require('../find-maximum-value/node');
const traversals = require('../find-maximum-value/traversals');
const findMax = require('../find-maximum-value/find-maximum-value');

describe('treeA', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);
  const treeA = new BinaryTree(one);

  one.left = two;
  one.right = three;

  three.left = four;
  three.right = five;

  two.left = six;

  six.right = seven;

  seven.left = eight;
  seven.right = nine;
  test('treeA pre-order', () => {
    expect(traversals.runTraversal(treeA.root, 'pre-order')).toEqual('1,2,6,7,8,9,3,4,5');
  });
  test('treeA findMax', () => {
    expect(findMax.findMaxumumValue(treeA.root)).toEqual(9);
  });
});

describe('treeB', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const eight = new Node(8);

  const treeB = new BinaryTree(one);

  one.left = two;

  two.left = three;
  two.right = four;

  four.left = five;
  four.right = six;

  six.left = seven;
  six.right = eight;

  test('treeB pre-order', () => {
    expect(traversals.runTraversal(treeB.root, 'pre-order')).toEqual('1,2,3,4,5,6,7,8');
  });
  test('treeB findMax', () => {
    expect(findMax.findMaxumumValue(treeB.root)).toEqual(8);
  });
});
describe('treeC', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);

  const treeC = new BinaryTree(one);

  one.left = two;
  one.right = three;

  three.left = four;

  four.left = five;
  four.right = six;

  test('treeC pre-order', () => {
    expect(traversals.runTraversal(treeC.root, 'pre-order')).toEqual('1,2,3,4,5,6');
  });
  test('treeC findMax', () => {
    expect(findMax.findMaxumumValue(treeC.root)).toEqual(6);
  });
});
