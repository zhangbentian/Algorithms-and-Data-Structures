/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai,
 * 力扣链接:https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/
 */
//0,1,1,2,3,5,8...
//写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

// 使用回调会超出时间限制
function Fibonacci(n) {
    if (n === 0) return 0;
    if (n < 3) return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}
// console.log(Fibonacci(6));

// 使用动态规划
//法一
var fib = function (n) {
    if (n === 0) return 0;
    if (n < 3) return 1;
    let prev = 0, cur = 1, next = 1, temp;
    for (let i = 3; i <= n; i++) {
        temp = (cur + next)%1000000007;
        prev = cur;
        cur = next;
        next = temp;
    }
    return next;
};

//法二

// var fib = function (n) {
//     if (n === 0) return 0;
//     if (n < 3) return 1;
//     let dp = [];
//     dp[0] = 0; dp[1] = 1;
//     for (let i = 2; i <= n; i++) {
//        dp[i] = dp[i-1]+dp[i-2]
//        dp[i] %= 1000000007;
//     }

//     return  dp[n] ;
// };

// console.log(fib(6))
