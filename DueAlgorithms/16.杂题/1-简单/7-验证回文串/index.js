/**
 * @param {string} s
 * @return {boolean}
 */
//https://leetcode.cn/problems/valid-palindrome/
 var isPalindrome = function(s) {
    let str = s.replace(/[^A-Za-z0-9]/g, '')
    str = str.toLocaleLowerCase()
    let str1 = str.split('').reverse().join('')
    if(str === str1) return true;
    return false;
};

let s ="ab_a"
console.log(isPalindrome(s));
