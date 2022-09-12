/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim()
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            res++;
        }else{
            return res;
        }
    }
    return res;
};

let s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s));