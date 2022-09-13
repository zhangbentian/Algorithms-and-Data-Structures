/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
//https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
//  var maxProfit = function(prices, fee) {
//     const n = prices.length;
//     let dp = Array.from(new Array(n),()=>new Array(2));
//     dp[0][0] = 0;
//     dp[0][1] = -prices[0] // -1
//     for (let i = 1; i < n; i++) {
//         dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee)
//         dp[i][1] = Math.max(dp[i-1][0]-prices[i],dp[i-1][1])
//     }
//     return dp[n-1][0];
// };

var maxProfit = function (prices, fee) {
    const n = prices.length;
    let dp_i_0 = 0;
    let dp_i_1 = -prices[0]
    for (let i = 1; i < n; i++) {
        const temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i] - fee)
        dp_i_1 = Math.max(dp_i_0 - prices[i], dp_i_1)
    }
    return dp_i_0;
};

let prices = [1, 3, 2, 8, 4, 9], fee = 2
console.log(maxProfit(prices, fee));