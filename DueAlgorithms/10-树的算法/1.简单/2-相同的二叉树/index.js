/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//https://leetcode.cn/problems/same-tree/
 var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    if((p !== null && q === null) || (q !== null && p ===null)) return false;
    if(p.val !== q.val) return false; // 需要判断他们的值是否相等
   return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)

};