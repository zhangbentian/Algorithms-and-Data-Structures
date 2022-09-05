

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//https://leetcode.cn/problems/permutations/
var permute = function (nums) {
    let res = [];
    let used = new Array(nums.length).fill(false);
    const backtrack = (nums, track, used) => { // track->路径，used->选择列表
        if(track.length === nums.length) res.push([...track])
        for (let i = 0; i < nums.length; i++) {
            if(used[i]) continue;
            track.push(nums[i])
            used[i] = true;
            backtrack(nums,track,used);
            used[i] = false;
            track.pop()
        }
    }
    backtrack(nums, [], used)
    return res;
};
let nums = ['a', 'b', 'c']
console.log(permute(nums));

