/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//https://leetcode.cn/problems/permutations-ii/
var permuteUnique = function (nums) {
    let track = [];
    const res = [];
    let used = new Array(nums.length).fill(false);
    const backtrack = (nums) => {
        if (track.length === nums.length) return res.push([...track])
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            // 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                continue;
            }
            track.push(nums[i]);
            used[i] = true;

            backtrack(nums);

            track.pop();
            used[i] = false;
        }
    }

    backtrack(nums.sort());
    return res;
};

var permuteUnique = function (nums) {
    let track = [];
    const res = [];
    let used = new Array(nums.length).fill(false);
    const backtrack = (nums) => {
        if (track.length === nums.length) return res.push([...track])
        let preNum = -666;
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            if (preNum === nums[i]) continue;

            track.push(nums[i]);
            used[i] = true;
            // 记录这条树枝上的值
            preNum = nums[i];
            backtrack(nums);

            track.pop();
            used[i] = false;
        }
    }

    backtrack(nums.sort());
    return res;
};

let nums = [1, 1, 2]
console.log(permuteUnique(nums));