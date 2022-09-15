/**
 * @param {number} x
 * @return {number}
 */
//https://leetcode.cn/problems/sqrtx/
// 暴力二分法
var mySqrt = function (x) {
    if (x <= 1) return x;
    let l = 1, r = Math.floor(x / 2);
    let mid;
    while (l < r) {
        mid = Math.floor(l + (r - l + 1) / 2)
        if (mid ** 2 === x) {
            return mid;
        } else if (mid ** 2 > x) {
            r = mid - 1;
        } else {
            l = mid;
        }
    }
    return l;
};

// 牛顿迭代法
var mySqrt = function (x) {
    if (x <= 1) return x;
    const s =x;
    const sqrts = (x) =>{
        let res = (x + s / x) / 2;
        if (res === x) {
          return x;
        } else {
          return sqrts(res);
        }
    }
    return Math.floor(sqrts(x))
};
let x = 6;
console.log(mySqrt(x));