/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode{
    left = null
    right = null
    constructor(val=0) {
        this.val = val;
    }
}

let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)
a.left = b;
// a.right = c;
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
//https://leetcode.cn/problems/path-sum/
var hasPathSum = function(root, targetSum) {
    let res = 0;
    const getPath = (root)=>{
        if(!root) return false;
        res += root.val;
        if(!root.left && !root.right) {
            if(targetSum === res) return true;
            return false;
        }
        const left = getPath(root.left)
        res -= root.left?.val || 0;
        const right = getPath(root.right)
        res -= root.right?.val || 0;
        return left || right;
    }
    return getPath(root)
};

console.log(hasPathSum(a,1));