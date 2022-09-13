/**
 * @param {number[]} prices
 * @return {number}
 */
//https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/
 var maxProfit = function(prices) {
    const n = prices.length;
    const dp = Array.from(new Array(n).fill(0),()=>new Array(2).fill(0))
    let dp_i10 = 0;
    let dp_i20 = 0;
    let dp_i11 = -Infinity;
    let dp_i21 = -Infinity;
    for (const price of prices) { // 买入时记录k
        dp_i20 = Math.max(dp_i20, dp_i21 + price);
        dp_i21 = Math.max(dp_i21, dp_i10 - price);
        dp_i10 = Math.max(dp_i10, dp_i11 + price);
        dp_i11 = Math.max(dp_i11, -price);
    }
    return dp_i20;
};
let prices = [3,3,5,0,0,3,1,4];
console.log(maxProfit(prices));