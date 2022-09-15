/**
 * @param {number[]} nums
 * @return {number}
 */
 //https://leetcode.cn/problems/house-robber/
 var rob = function(nums) {
    const n = nums.length;
    if(n ===1) return nums[0]
    if(n===2) return Math.max(nums[0],nums[1])
    const getMax = (start,end)=>{
        let dp_i_0 = 0;
        let dp_i_1 = nums[start-1]; //3
        let temp
        for (let i = start; i < end; i++) { // 1 2
            temp = dp_i_0
            dp_i_0 = Math.max(dp_i_0,dp_i_1)
            dp_i_1 = temp + nums[i] 
        }
        return dp_i_0 > dp_i_1 ? dp_i_0:dp_i_1
    }
    return Math.max(getMax(1,n-1),getMax(2,n))
    
    
};

let nums = [2,3,2]
console.log(rob(nums));