class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
var sortedArrayToBST = function(nums) {
   if(!nums.length) return null;
   const headIndex = Math.floor(nums.length/2)
   const head = new TreeNode(nums[headIndex])
   if(headIndex-1 >= 0) {
        head.left = sortedArrayToBST(nums.slice(0,headIndex))
   }
   if(headIndex+1 <= nums.length) {
    head.right = sortedArrayToBST(nums.slice(headIndex+1))
   }
   return head;

};

let nums =[0,1,2,3,4,5]
console.log(sortedArrayToBST(nums));