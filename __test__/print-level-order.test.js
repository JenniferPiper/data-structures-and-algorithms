'use strict';

'use strict';

// const KaryTree = require('../print-level-order/kary-tree');
const Node = require('../print-level-order/node');
// const traversal = require('../print-level-order/print-level-order');

describe('treeA', () => {
  const nodeA = new Node(1);
  const nodeB = new Node(2);
  const nodeC = new Node(3);

  // const treeA = new KaryTree(nodeA);

  nodeA.children = [nodeB, nodeC];

  test('treeA', () => {
    // expect(traversal.printLevelOrder(treeA.root)).toEqual('1\n23\n');
  });
});

