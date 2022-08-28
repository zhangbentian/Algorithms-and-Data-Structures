//反转字符串
//https://leetcode.cn/problems/reverse-string/
var reverseString = function (s) {
    let l=0,r=s.length-1,temp;
    while(l<r){
        temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));