/**
 * @param {number[]} prices
 * @return {number}
 */
//https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
// var maxProfit = function (prices) {
//     const n = prices.length;
//     let dp = new Array(n).fill(new Array(2))
//     dp[0][0] = 0;
//     dp[0][1] = -prices[0];
//     for (let i = 1; i < n; i++) {
//         dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]); // 昨天之前没buy今天rest 或 昨天之前buy今天sell
//         dp[i][1] = Math.max(dp[i-1][1], -prices[i]); // 昨天之前买了,今天rest/昨天之前没buy,今天buy
//     }
//     return dp[n - 1][0];
// };

var maxProfit = function (prices) {
    const n = prices.length;
    let dp_0 = 0,dp_1 = -prices[0];
    for (let i = 1; i < n; i++) {
        dp_0 = Math.max(dp_0,dp_1 + prices[i])
        dp_1 = Math.max(-prices[i],dp_1)
    }
    return dp_0;
};
console.log(maxProfit([7,1,5]));