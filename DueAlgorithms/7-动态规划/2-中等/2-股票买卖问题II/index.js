/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    if (len === 1) return 0;
    let dp = new Array(len).fill(new Array(2))
    dp[0][0] = 0;
    dp[0][1] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        console.log(dp[i][0], dp[i][1]);
    }
    return dp[len - 1][0]

};

let prices =  [1,2,3,4,5]
console.log(maxProfit(prices));
