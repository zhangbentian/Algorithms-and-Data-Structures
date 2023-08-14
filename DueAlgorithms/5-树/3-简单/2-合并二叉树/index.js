/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
//合并二叉树
//https://leetcode.cn/problems/merge-two-binary-trees/
var mergeTrees = function (root1, root2) {
    if (root1 == null && root2 == null) return null;
    
    const root = new TreeNode();
    
    if (root1 !== null&& root1 !== undefined) root.val += root1.val;
    if (root2 !== null && root2 !== undefined) root.val += root2.val;
    
    root.left = mergeTrees(root1?.left, root2?.left);
    root.right = mergeTrees(root1?.right, root2?.right);
    
    return root;
};