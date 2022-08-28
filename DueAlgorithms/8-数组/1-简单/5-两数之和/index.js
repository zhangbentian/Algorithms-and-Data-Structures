//两数之和为双指针相向而行
//https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function (numbers, target) {
    const len = numbers.length;
    let left = 0, right = len - 1;
    let nums;
    while (left < right) {
        nums = numbers[left] + numbers[right];
        if (nums < target && left < right) left++;
        if (nums > target && right > left) right--;
        if (nums === target) return [++left, ++right];
    }
    return []; // 官网不需要这个找不到返回，但是本人建议加一下
    
};

console.log(twoSum([2,3,4], 7));