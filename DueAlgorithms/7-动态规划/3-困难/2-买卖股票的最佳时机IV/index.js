/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (!prices.length) { // null "" undefined false 0 NaN
        return 0;
    }

    const n = prices.length;
    if(k > Math.floor(n/2)) return maxProfitN(prices);

    const buy = new Array(n).fill(0).map(() => new Array(k + 1).fill(0)); // 创建二维数组
    const sell = new Array(n).fill(0).map(() => new Array(k + 1).fill(0)); 
    buy[0][0] = -prices[0];
    sell[0][0] = 0;
    for (let i = 1; i <= k; ++i) {
        buy[0][i] = sell[0][i] = -Number.MAX_VALUE;
    }

    for (let i = 1; i < n; ++i) {
        buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i]);
        for (let j = 1; j <= k; ++j) {
            buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i]);
            sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i]);
        }
    }
    return Math.max(...sell[n - 1]); // 判断值最大的
};


var maxProfitN = function (prices) {
    const n = prices.length;
    if (n === 1) return 0;
    let dp = new Array(n).fill(2).map(() => new Array(2).fill(0))

    let dp_i_0 = 0;
    let dp_i_1 = -prices[0];
    for (let i = 1; i < n; i++) {
        const temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1,temp - prices[i])
    }
    return dp_i_0

};

let k = 2, prices = [3,2,6,5,0,3]
console.log(maxProfit(k, prices));



