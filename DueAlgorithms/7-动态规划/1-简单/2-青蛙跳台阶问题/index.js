/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 */
// 0 1 2 3 5 8
//力扣:https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
function numWays(n) {
    if(n === 0) return 1; // 0步距离，0-0不动为一种走法
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] =( dp[i-1]+dp[i-2])%1000000007;
    }
    return dp[n]
}

