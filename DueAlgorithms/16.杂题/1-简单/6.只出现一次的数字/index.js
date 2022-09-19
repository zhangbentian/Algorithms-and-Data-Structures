

//https://leetcode.cn/problems/single-number/
// var singleNumber = function(nums) {
//     let res = new Map()
//     for (let i = 0; i < nums.length; i++) {
//             if(res.has(nums[i])) {
//                let temp = res.get(nums[i])
//                 res.set(nums[i],++temp)
//             }else{
//                 res.set(nums[i],1)
//             }
//     }
//     for (let i = 0; i < nums.length; i++) {
//        if(res.get(nums[i]) === 1) return i;
//     }
// };

//
var singleNumber = function (nums) {
    let res =0;
    for (const item of nums) {
        res ^= item;
    }
    return res;
};

let nums = [2, 2, 1];
singleNumber(nums)

