/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//https://leetcode.cn/problems/search-insert-position/
//二分法左侧边界
var searchInsert = function (nums, target) {
    let l = 0,r = nums.length -1;
    while(l<= r) {
        const mid = parseInt((r+l)/2)
        if(nums[mid]=== target) {
            r = mid -1;
        }else if(nums[mid] < target) {
            l = mid +1
        }else{
            r = mid -1
        }
    }
    return l;
};

let nums = [1,3,5,6], target = 7;

console.log(searchInsert(nums,target));
