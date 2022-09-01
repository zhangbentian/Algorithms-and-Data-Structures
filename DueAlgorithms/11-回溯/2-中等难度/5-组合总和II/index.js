/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//https://leetcode.cn/problems/combination-sum-ii/
 var combinationSum2 = function(candidates, target) {
    const res = [];
    const track = [];
    let trackSum = 0;
    if(candidates.length === 0 ) return res;
    const backtrack = (nums,start,target)=>{
        if(trackSum > target) return;
        if(trackSum === target) return res.push([...track])
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }
            // 做选择
            track.push(nums[i])
            trackSum += nums[i];
            // 递归遍历下一层回溯树
            backtrack(nums,i+1,target)
            // 撤销选择->记录
            track.pop()
            trackSum -= nums[i];
        }
    }
    backtrack(candidates.sort((a,b)=>a-b),0,target)
    return res;
};
let candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2(candidates,target));