/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//https://leetcode.cn/problems/symmetric-tree/
  class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
const node4 = new TreeNode(3);
const node5 = new TreeNode(4);
const node6 = new TreeNode(4);
const node7 = new TreeNode(3);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;


var isSymmetric = function (root) {
    if (root === null) return;
    const getTreeSymmetric = (left, right) => {
        if(left === null && right === null) return true;
        if (left === null || right === null) return false;
        if (left.val === right.val) {
            return getTreeSymmetric(left.left, right.right) && getTreeSymmetric(left.right, right.left)
        } else {
            return false;
        }
    }
   return getTreeSymmetric(root.left,root.right)
}; 
console.log(isSymmetric(node1));