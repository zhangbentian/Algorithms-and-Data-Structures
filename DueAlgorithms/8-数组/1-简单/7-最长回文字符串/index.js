
//https://leetcode.cn/problems/longest-palindromic-substring/
//双指针
/**
 * 
 * @param {*} s 
 * @returns 
 * 提示：1.设两种情况，奇数或偶数->奇数一个点为中心点，偶数则为两个相邻的点为中心点
 *      2.for循环遍历字符串，假设每个点都可以成为中心点
 */
var longestPalindrome = function (s) {
    let res = "";
    for (let i = 0; i < s.length; i++) { // 遍历以每个点都设为中心点
        let sOne = palindrome(s,i,i) // 是奇数串时，l===r
        let sTwo = palindrome(s,i,i+1); // 偶数串时,两个中心点相邻
        res = res.length < sOne.length ? sOne :res;
        res = res.length < sTwo.length ? sTwo :res;
    }
    return res;
};

// 判断一r,l为中心点的字符串是否是回文串
function palindrome(s,l,r) {
    while(l >= 0 && r < s.length&&s.charAt(l) === s.charAt(r)) {
        l --;
        r ++;

    }
    return s.substring(l+1,r)

}

console.log(longestPalindrome("babad"));