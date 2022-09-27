/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//https://leetcode.cn/problems/valid-anagram/
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let helpArr = new Array(26).fill(0)
    let pivot = 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        helpArr[s[i].charCodeAt()-pivot] ++;
        helpArr[t[i].charCodeAt()-pivot] --;
    }
    return helpArr.every(i=>i===0)
};