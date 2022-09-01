/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//https://leetcode.cn/problems/combinations/
var combine = function (n, k) {
    let res = []; // 结果数组
    let track = []; // 路径记录数组
    const backtrack = (start, n, k) => {
        if (track.length === k) {
            res.push([...track])
        } // 判断是否符合题目要求
        for (let i = start; i <= n; i++) {
            track.push(i);  // 选择
            backtrack(i + 1, n, k)   // 通过 start 参数控制树枝的遍历，避免产生重复的子集
            track.pop(i)   // 撤销选择
        }
    }
    backtrack(1, n, k)
    return res;
};
let n = 4, k = 2;
console.log(combine(n, k));