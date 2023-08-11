//搜索旋转排序数组
//https://leetcode.cn/problems/search-in-rotated-sorted-array/?show=1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const len = nums.length;
    let res = -1;
    for (let i = 0; i < len; i++) {
        if(nums[i]==target) {
            res =i;
        }
    }
    return res;
};

console.log(search([1],1));

//使用二分法进行查找->断崖方法
var search = function(nums, target) {
    // 左右都闭的搜索区间
    let left = 0, right = nums.length - 1;
    // 因为是闭区间，所以结束条件为 left > right
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        // 首先检查 nums[mid]，是否找到 target
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] >= nums[left]) {
            // mid 落在断崖左边，此时 nums[left..mid] 有序
            if (target >= nums[left] && target < nums[mid]) {
                // target 落在 [left..mid-1] 中
                right = mid - 1;
            } else {
                // target 落在 [mid+1..right] 中
                left = mid + 1;
            }
        } else {
            // mid 落在断崖右边，此时 nums[mid..right] 有序
            if (target <= nums[right] && target > nums[mid]) {
                // target 落在 [mid+1..right] 中
                left = mid + 1;
            } else {
                // target 落在 [left..mid-1] 中
                right = mid - 1;
            }
        }
    }
    // while 结束还没找到，说明 target 不存在
    return -1;
};

