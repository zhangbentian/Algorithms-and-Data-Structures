var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1 ).fill(Infinity); // 初始化为Infinity->无穷大
    dp[0] = 0;
    for(let i= 1; i <= amount; i++) {
        for(let coin of coins) {
            if(i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
    } 
   
    return dp[amount] == Infinity ? -1 : dp[amount];
};
let coins = [1, 2, 5], amount = 11
coinChange(coins,amount)