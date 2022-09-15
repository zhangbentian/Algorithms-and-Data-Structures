/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//https://leetcode.cn/problems/add-binary/
// var addBinary = function (a, b) {
//     const arrA = a.split('')
//     const arrB = b.split('')
//     let n, res = []
//     if (a.length > b.length) {
//         n = a.length
//     } else {
//         n = b.length
//     }
//     let count = 0, sum;
//     for (let i = 0; i < n; i++) {
//         if(arrA.length === 0) {
//             sum =  arrB.pop() * 1 + count;
//         }else if(arrB.length ===0) {
//             sum = arrA.pop() * 1  + count;
//         }else{
//             sum = arrA.pop() * 1 + arrB.pop() * 1 + count;
//         }
//         if (sum === 2) {
//             res.unshift(0)
//             count = 1;
//         } else if (sum ===3) {
//             res.unshift(1)
//             count = 1;
//         }else {
//             res.unshift(sum)
//             count = 0;
//         }
//     }
//     if (count > 0) {
//         res.unshift(count)
//     }
//     return res.join('');
// };

// 二进制的异或运算 
var addBinary = function(a, b) {
    let add = 0
    let sum = []
    for(let i = a.length -1, j = b.length -1; i >= 0 || j >= 0; i--, j--) {
        let num1 = +a[i] || 0
        let num2 = +b[j] || 0 // 补零操作
        sum.unshift(num1 ^ num2 ^ add) // 异或运算涵盖了 1 2 3 的情况， 1为1，2为0 ，3 为1
        add = num1 + num2 + add > 1 ? 1 : 0
        
    }
    if (add > 0) sum.unshift(1)
    return sum.join('')
};

let a = "11", b = "1"
console.log(addBinary(a, b));

