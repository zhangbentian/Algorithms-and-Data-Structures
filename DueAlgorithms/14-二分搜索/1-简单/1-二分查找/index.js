/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//https://leetcode.cn/problems/binary-search/
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = parseInt(l + (r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
          
        } else {
            r = mid - 1;
        }
    }
    return -1;
};

let nums =[-1,0,3,5,9,12], target = 0;
console.log(search(nums, target));
