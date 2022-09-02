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
 * @return {number}
 */
//https://leetcode.cn/problems/minimum-depth-of-binary-tree/
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let a = new TreeNode(3)
let b = new TreeNode(9)
let c = new TreeNode(20)
let d = new TreeNode(15)
let e = new TreeNode(7)
a.left = b;
a.right = c;
c.left = d;
c.right = e;



var minDepth = function (root) {
    if(root ===null) return 0;
    let res = 0;
    const bfs = (nums)=>{
        let child = [];
        res ++;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i].left === null && nums[i].right === null) return res;
            if(nums[i].left !== null) child.push(nums[i].left)
            if(nums[i].right !== null) child.push(nums[i].right)
        }
        bfs(child)
    }
    bfs([root])
    return res;
};

console.log(minDepth(a));