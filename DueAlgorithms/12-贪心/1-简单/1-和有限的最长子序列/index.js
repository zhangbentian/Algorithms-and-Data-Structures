
//https://leetcode.cn/problems/longest-subsequence-with-limited-sum/
var answerQueries = function (nums, queries) {
    const len = nums.length;
    nums.sort((a, b) => (a - b)) // 排序
    let ans = [] //
    let sum = 0
    for (let i = 0; i < queries.length; i++) {
        sum = 0 
        for (let j = 0; j < len; j++) {
            sum += nums[j]
            if (sum > queries[i]) { // 判断添加的结果集
                ans.push(j)
                break
            }
            if (sum <= queries[i] && j === len - 1) {
                ans.push(len)
                break
            }
        }
    }
    return ans
};