//https://leetcode.cn/problems/first-unique-character-in-a-string/

// _.countBy()一个Underscore.js的api接口，不建议使用已经很老旧了
var firstUniqChar = function(s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar("leetcode"));
//个人 建议使用map结构进行处理
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const n = s.length;
    const res = new Map()
    for(let i = 0; i < n; i++) {
        res.set(s[i],0)
    }
    for(let i = 0; i < n; i++) {
        let value = res.get(s[i])
        res.set(s[i],++value)
    }
    console.log(res)
    for(let item of res) {
        if(item[1]===1) return s.indexOf(item[0])
    }
    return -1;
};