/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// m朵花束,一朵花束需要k朵连续花
//法一超时
// var minDays = function (bloomDay, m, k) {
//     let n = bloomDay.length;
//     if (n < m * k) return -1;
//     let count = 0;
//     let max = 0, min = Infinity;
//     for (let i = 0; i < n; i++) {
//         if (bloomDay[i] > max) {
//             max = bloomDay[i]
//         }
//         if (min > bloomDay[i]) {
//             min = bloomDay[i]
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         bloomDay[i] -= min;
//     }
//     const len = max - min;
//     let num = 0;
//     while (count <= len) {
//         if(num >= k) {
//             if (getIsTrue(bloomDay, k) >= m) return count+min;
//         }
//         for (let i = 0; i < n; i++) {
//             if (bloomDay[i]) {
//                 bloomDay[i]--;
//             }else{
//                 num ++;
//             }
//         }
//         count++;
      
//     }
//     return -1;
// };
// const getIsTrue = (arr, k) => {
//     let i = 0;
//     let res = 0;
//     while (i <= arr.length - k) {
//         let num = 0;
//         for (let j = i; j < i + k; j++) {
//             num += arr[j]
//         }
//         if (num === 0) {
//             res++;
//             i += k;
//         } else {
//             i++;
//         }
//     }
//     return res
// }


// m朵花束,一朵花束需要k朵连续花
// 二分查找
var minDays = function(bloomDay, m, k) {
    let l = 1;
    let r = 10 ** 9 + 1;
    function helper(value) {
        let ret = 0;
        let now = 0;
        let index = 0;
        while (index < bloomDay.length) {
            if (bloomDay[index] <= value) {
                now ++;
            } else {
                now = 0;
            }
            if (now >= k) {
                now = 0;
                ret += 1;
            }
            index ++;
        }
        return ret >= m;
    }
    while (l < r) {
        let mid = Math.floor(l+(r-l)/2);
        if (!helper(mid)) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return r == (10 ** 9 + 1) ? -1 : r;
};

//官方二分查找
 var minDays = function(bloomDay, m, k) {
    if (m > bloomDay.length / k) {
        return -1;
    }
    let low = Math.min.apply(null, bloomDay), high = Math.max.apply(null, bloomDay);
    while (low < high) {
        const days = Math.floor((high - low) / 2) + low;
        if (canMake(bloomDay, days, m, k)) {
            high = days;
        } else {
            low = days + 1;
        }
    }
    return low;
};

const canMake = (bloomDay, days, m, k) => {
    let bouquets = 0;
    let flowers = 0;
    const length = bloomDay.length;
    for (let i = 0; i < length && bouquets < m; i++) {
        if (bloomDay[i] <= days) {
            flowers++;
            if (flowers == k) {
                bouquets++;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }
    return bouquets >= m;
}


let bloomDay = [1,10,3,10,2], m = 3, k = 1

console.log(minDays(bloomDay, m, k));
// getIsTrue([0, 1, 0, 0, 0,0, 0, 0, 0, 0],2)