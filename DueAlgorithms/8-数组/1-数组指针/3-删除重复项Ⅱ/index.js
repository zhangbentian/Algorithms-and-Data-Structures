//https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 1.判断数组长度
// 2. 存储数组每个元素的出现次数
// 报错，没考虑好数组，负数部分
// var removeDuplicates = function (nums) {
//     let len = nums.length -1;
//     if(len < 2) return;
//     let IArr =new Array(10).fill(0);
//     for (let i = 0; i <= len; i++) {
//         IArr[nums[i]]++;
//     }
//     for (let i = 0; i < IArr.length; i++) {
//             for (let j = 0; j <= len; j++) {
//                 if(IArr[i] >2 && i === nums[j]) {
//                     nums.splice(j, 1)
//                     IArr[i] --;
//                 }
//             }
//     }
//     console.log(nums);

// };

// 方法二
//1.使用快慢指针，类似于26题
//2.不同点:需要预留两个数字
/**提示:
 * 1 <= nums.length <= 3 * 104
    -104 <= nums[i] <= 104
    nums 已按升序排列
 */
let removeDuplicates = function (nums) {
    const len = nums.length;
    if (len === 0) return;
    let fast = 0, slow = 0, count = 0;
    while (fast < len-1) {
        if (nums[fast] === nums[slow]) { // 快指针等于慢指针,
            ++fast;
            ++count;
        }
        if (nums[fast] === nums[slow] && count < 2) { // 快慢指针相等，且数字重复次数小于2
            ++slow;
            nums[slow] = nums[fast]
        }
        if (nums[fast] !== nums[slow]) { // 遇到不相等的数
            ++slow;
            nums[slow] = nums[fast]
            count = 0;
        }
    }
    return slow + 1;
}

console.log(removeDuplicates([0, 0, 1, 1,1,1, 2, 3, 3]));
