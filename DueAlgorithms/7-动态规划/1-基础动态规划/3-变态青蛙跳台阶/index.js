/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 */
//这只青蛙，一次可以跳1级台阶、2级台阶，n级台阶

//假设到三级台阶
//  1 2
// 2 1 
//1 1 1
//3 直接跳n级台阶

// 依次从0阶到n的排序
//1 1 2 4 8 

function jump(n) {
    if(n === 0) return 1;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let res = 0;
    for (let i = 1; i <= n; i++) {
       res += jump(n-i);
    }
    return res;
}

console.log(jump(5));