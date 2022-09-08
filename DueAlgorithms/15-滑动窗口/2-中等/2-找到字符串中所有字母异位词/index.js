/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//https://leetcode.cn/problems/find-all-anagrams-in-a-string/
var findAnagrams = function (s, p) {
    const need = {}, window = {};
    const res = [];
    for (let i = 0; i < p.length; i++) {
        need[p[i]] = 0;
        window[p[i]] = 0;
    }
    for (let i = 0; i < p.length; i++) {
        need[p[i]]++;
    }
    let left = 0, right = 0;
    let valid = 0;
    while (right < s.length) { // 左闭右开
        const cur = s[right];
        // 进行窗口内数据的一系列更新
        if (need[cur]) {
            window[cur]++;
            if (need[cur] === window[cur]) valid++;
        }
        right++;
        // 判断左侧窗口是否要收缩
        while (right - left >= p.length) {
            console.log("666",valid,Object.keys(need));
            // 当窗口符合条件时，把起始索引加入 res
            if (valid === Object.keys(need).length) {
                res.push(left)
            }
            const leftv = s[left]
            // 进行窗口内数据的一系列更新
            if(need[leftv]) {
                if (window[leftv] == need[leftv])  valid--;
                window[leftv]--;
            }
            left++;
        }
    }
    return res;
};

let s = "baa", p = "aa";

console.log(findAnagrams(s, p));