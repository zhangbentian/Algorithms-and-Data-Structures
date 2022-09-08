/**
 * @param {string} s
 * @return {number}
 */
//法一
// var lengthOfLongestSubstring = function (s) {
//     if(s.length === 1) return 1;
//     let window = {};
//     for (let i = 0; i < s.length; i++) {
//         window[s[i]] = 0;
//     }
//     let left = 0, right = 0;
//     let valid = 0, res = 0;
//     while (right < s.length) {
//         const rVal = s[right]
//         window[rVal] ++;
//         while (window[rVal] > 1) {
//             if(res < valid) res = valid;
//             window[s[left]] --;
//             left ++;
//             valid --;
//         }
//         valid++;
//         right++;
//     }
//     if(res < valid) res = valid;
//     return res;
// }


var lengthOfLongestSubstring = function (s) {
    if(s.length === 1) return 1;
    let window = {};
    for (let i = 0; i < s.length; i++) {
        window[s[i]] = 0;
    }

    let left = 0, right = 0;
    let res = 0; // 记录结果
    while (right < s.length) {
        let c = s[right];
        right++;
        // 进行窗口内数据的一系列更新
        window[c]++;
        // 判断左侧窗口是否要收缩
        while (window[c] > 1) {
            let d = s[left];
            left++;
            // 进行窗口内数据的一系列更新
            window[d]--;
        }
        // 在这里更新答案
        if(right-left > res) res = right-left;
    }
    return res;
}

let s = " "
console.log(lengthOfLongestSubstring(s));