//https://leetcode.cn/problems/coin-change/
var coinChange = function(coins, amount) {
    var dp = new Array( amount + 1 ).fill(amount + 1); // 设置默认起始值啊，amount+1
    dp[0] = 0;
    for(let i= 1; i <= amount; i++) {
        for(let coin of coins) {
            if(i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i-coin] + 1) // 状态转移方程
        }
    }   
    return dp[amount] == (amount + 1) ? -1 : dp[amount]; //判断是否存在凑成总金额的组合,有返回dp[amount],否则返回-1
};