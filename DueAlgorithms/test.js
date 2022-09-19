/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
    const n = s.length;
    let max = -1;
    for (let i = n-1; i > 0; i --) {
        for (let j = 0; j < i; j++) {
            if(s[j]===s[i]) {
                if(i-j-1 > max) {
                    max = i-j-1;
                }
            }
        }
        
    }
    return max;
};
let s = "mgntdygtxrvxjnwksqhxuxtrv"
console.log(maxLengthBetweenEqualCharacters(s));