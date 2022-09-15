/**
 * @param {number[]} nums
 * @return {number}
 */
 //https://leetcode.cn/problems/house-robber/
var rob = function(nums) {
    const n = nums.length;
    if(n ===1) return nums[0]
    let dp_i_0 = 0;
    let dp_i_1 = nums[0];
    let temp
    for (let i = 1; i < n; i++) {
        temp = dp_i_0
        dp_i_0 = Math.max(dp_i_0,dp_i_1)
        dp_i_1 = temp + nums[i] 
      
    }
    return dp_i_0 > dp_i_1 ? dp_i_0:dp_i_1
    
};

let nums = [2,1,1,2];
console.log(rob(nums));