

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//https://leetcode.cn/problems/permutations/
var permute = function (nums) {
    let res = [];
    let used = new Array(nums.length).fill(false);
    const backtrack = (nums, track, used) => { // track->路径，used->选择列表
        if (track.length === nums.length) {
            res.push(track)
        }
        for (const num of nums) {
            // 排除不合法的选择
            if (used[num]) {
                // nums[i] 已经在 track 中，跳过
                continue;
            }
            // 做选择
            track.push(num);
            used[num] = true;
            // 进入下一层决策树
            backtrack(nums, track, used);
            // 取消选择
            track.pop();
            used[num] = false;
        }

    }
    backtrack(nums, [], used)
    return res;
};
let nums = [1, 2, 3]
console.log(permute(nums));

const permute = (nums) => {
    const res = [];
    const used = {}; // 选择列表
    function dfs(path) {
        if (path.length == nums.length) { // 个数选够了
            res.push(path.slice()); // 拷贝一份path，加入解集res
            return;                 // 结束当前递归分支
        }
        for (const num of nums) { // for枚举出每个可选的选项
            // if (path.includes(num)) continue; // 别这么写！查找是O(n)，增加时间复杂度
            if (used[num]) continue; // 使用过的，跳过
            path.push(num);         // 选择当前的数，加入path
            used[num] = true;       // 记录一下 使用了
            dfs(path);              // 基于选了当前的数，递归 1
            path.pop();             // 上一句的递归结束，回溯，将最后选的数pop出来
            used[num] = false;      // 撤销这个记录
        }
    }
    dfs([]); // 递归的入口，空path传进去
    return res;
};