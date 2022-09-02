/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//https://leetcode.cn/problems/combination-sum/
var combinationSum = function (candidates, target) {
    const res = [];
    const track = [];
    let trackSum = 0;
    const backtrack = (nums, start) => {
        if (trackSum === target) return res.push([...track])
        if (trackSum > target) return;
        for (let i = start; i < nums.length; i++) {
            trackSum += nums[i];
            track.push(nums[i])
            backtrack(nums, i);
            trackSum -= nums[i];
            track.pop();
        }
    }
    backtrack(candidates, 0)
    return res;
};

let candidates = [2, 3, 5], target = 8;

console.log(combinationSum(candidates, target));