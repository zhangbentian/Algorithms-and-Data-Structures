/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//https://leetcode.cn/problems/invert-binary-tree/
var invertTree = function (root) {
    if (!root) return null;
    let tmp = root.right;
    root.right = root.left;
    root.left = tmp;
    //递归交换当前节点的 左子树
    invertTree(root.left);
    //递归交换当前节点的 右子树
    invertTree(root.right);
    //函数返回时就表示当前这个节点，以及它的左右子树
    //都已经交换完了
    return root
};