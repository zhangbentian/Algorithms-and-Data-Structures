/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//https://leetcode.cn/problems/subsets-ii/
var subsetsWithDup = function (nums) {
    let res = [];
   
    const backtrack = (nums,start,track)=>{
        res.push([...track]);
        for (let i = start; i < nums.length; i++) {
            if(i > start &&nums[i] === nums[i-1]) continue; // 剪枝逻辑，值相同的相邻树枝，只遍历第一条
            track.push(nums[i])
            backtrack(nums,i+1,track)
            track.pop();
        }
    }
    backtrack(nums.sort((a,b)=>a-b),0,[])
    return res;
};
let nums = [1,2,2];
console.log(subsetsWithDup(nums));