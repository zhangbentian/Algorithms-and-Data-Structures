/**
 * @param {number[]} prices
 * @return {number}
 */
//https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/
var maxProfit = function (prices) {
    const n = prices.length;
    let dp =  Array.from(new Array(n), () => new Array(2))
    dp[0][0] = 0;
    dp[0][1] = -prices[0] // -1
    dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]); // 1
    // i - 2 小于 0 时根据状态转移方程推出对应 base case
    dp[1][1] = Math.max(dp[0][1], dp[0][0]-prices[1]); // -1
    for (let i = 2; i < n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i]);
    }
    return dp[n - 1][0];
};  

// var maxProfit = function (prices) {
//     let n = prices.length; 
//     let dp_i_0 = 0, dp_i_1 = -Infinity;
//     let dp_pre_0 = 0; // 代表 dp[i-2][0]
//     for (let i = 0; i < n; i++) {
//         let temp = dp_i_0;
//         dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
//         dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);
//         dp_pre_0 = temp;
//         console.log(i, dp_i_0, dp_i_1);
//     }
//     return dp_i_0;
// };  


let prices =[1,2,3,0,2];
console.log(maxProfit(prices));


// 2 2 -1
// 3 2 2
// 4 4 2
// 4

// 2 2 -1
// 3 2 1
// 4 3 1
// 3