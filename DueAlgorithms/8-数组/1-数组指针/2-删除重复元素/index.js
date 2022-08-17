//26. 删除有序数组中的重复项
//https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

// 思路使用快慢指针，fast，前面探路，slow保存数值
// java语言等不能随意修改数组长度，所以通过快慢指针来进行数据筛选，改变
var removeDuplicates = function (nums) {
    const len = nums.length;
    if (len === 0) {
        return 0;
    }
    let fast = 0, slow = 0;
    while (fast < len) {
        if (nums[fast] !== nums[slow]) { // 快指针不等于慢指针
            ++slow;
            nums[slow] = nums[fast];
        }
        ++fast;
    }
    return slow+1; // 返回新数组长度
};