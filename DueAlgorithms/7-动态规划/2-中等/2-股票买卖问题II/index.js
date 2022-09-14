/**
 * @param {number[]} prices
 * @return {number}
 */
//https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
var maxProfit = function (prices) {
    const n = prices.length;
    if (n === 1) return 0;
    let dp = new Array(n).fill(2).map(()=>new Array(2).fill(0))
    dp[0][0] = 0;
    dp[0][1] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        console.log(dp[i][0], dp[i][1]);
    }
    return dp[n - 1][0]

};

let prices =  [1,2,3,4,5]
console.log(maxProfit(prices));
