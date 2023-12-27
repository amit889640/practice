// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

var checkTree = function (root) {
    return root.val == root.left.val + root.right.val;
};