
//https://leetcode.cn/problems/continuous-subarray-sum/
//法一，力扣上会产生超时问题
// var checkSubarraySum = function (nums, k) {
//     const len = nums.length;
//     if (len < 2) return false;
//     let d = 1; 
//     while (d < len) {
//         let c = 0;
//         while (c + d < len) {
//             let res = 0;
//             for (let i = c; i <= c + d; i++) {
//                 res += nums[i]
//             }
//             if (res % k === 0) {
//                 return true;
//             };
//             c++;
//         }
//         d++;
//     }
//     return false;
// };
// let nums = [23, 2, 4, 6, 6], k = 7;
// console.log(checkSubarraySum(nums, k));

// 法二
var checkSubarraySum = function(nums, k) {
    const m = nums.length;
    if (m < 2) {
        return false;
    } 
    const map = new Map();
    map.set(0, -1); // 初始化当和余为0时，可以判断距离
    let remainder = 0;
    for (let i = 0; i < m; i++) {
        remainder = (remainder + nums[i]) % k;
        if (map.has(remainder)) {
            const prevIndex = map.get(remainder);
            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }
    return false;
};

let nums =  [23,2,6,4,7], k = 6; // 5 1 1 5 0
console.log(checkSubarraySum(nums,k));

