//https://leetcode.cn/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let need = new Map();
    let window = new Map();
    for (let i = 0; i < t.length; i++) {
        if (need.has(t[i])) {
            let temp = need.get(t[i]);
            need.set(t[i], ++temp)
        } else {
            need.set(t[i], 1)
        }

    } // 存储需要的值
    let l = 0, r = 0, valid = 0;
    let start = 0, len = Infinity;
    while (r < s.length) {
        // c 是将移入窗口的字符
        let newS = s[r];
        //扩大窗口
        r++;
        // 对窗口内数据进行更新
        if (need.has(newS)) {
            // 更新window
            if (window.has(newS)) {
                let temp = window.get(newS);
                window.set(newS, ++temp)
            } else {
                window.set(newS, 1)
            }
            if (window.get(newS) === need.get(newS)) valid++;
        }
        //缩小窗口
        while (valid === need.size) {
            // 在这里更新最小覆盖子串
            if (r - l < len) {
                start = l;
                len = r - l;
            }
            // d 是将移出窗口的字符
            let removeS = s[l];
            // 缩小窗口
            l++;
             // 进行窗口内数据的一系列更新
             if (need.has(removeS)) {
                if (window.get(removeS) == need.get(removeS))  valid--;
                let temp = window.get(removeS);
                window.set(removeS, --temp)  
            }          
        }
    }
     // 返回最小覆盖子串
     return len == Infinity ? "" : s.substring(start, start+len);
};
let s = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(s, t));