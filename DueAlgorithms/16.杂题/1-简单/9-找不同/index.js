
//https://leetcode.cn/problems/find-the-difference/
var findTheDifference = function(s, t) {
    let sNum = 0,tNum = 0;
    for(let i= 0; i < s.length; i ++) {
        sNum += s[i].charCodeAt()
        tNum += t[i].charCodeAt()
    }
    tNum +=  t[t.length-1].charCodeAt()
    let res =String.fromCharCode(tNum - sNum);
    return res;
};

