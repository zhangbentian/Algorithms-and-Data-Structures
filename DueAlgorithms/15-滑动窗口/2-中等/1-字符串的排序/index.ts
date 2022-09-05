//https://leetcode.cn/problems/permutation-in-string/
function checkInclusion(s1: string, s2: string): boolean {
    let need = new Map();
    for (let i = 0; i < s1.length; i++) {
        if (need.has(s1[i])) {
            let value = need.get(s1[i])
            need.set(s1[i], ++value)
        } else {
            need.set(s1[i], 1)
        }

    } //初始化need数组

    let window = new Map();
    let l = 0, r = 0;
    let valid = 0;
    while (r < s2.length) {
        let sR = s2[r];
        r++;
        if (need.has(sR)) {
            if (window.has(sR)) {
                let value = window.get(sR);
                value++;
                window.set(sR, value)

            } else {
                window.set(sR, 1)
            }
            if (window.get(sR) === need.get(sR)) {
                valid++
            };
        }

        // 判断左侧窗口是否要收缩
        while (r - l >= s1.length) {

            if (valid === need.size) return true;
            let sL = s2[l];
            l++;
            if (need.has(sL)) {
                if (window.get(sL) === need.get(sL)) {
                    valid--
                }
                let value = window.get(sL);
                value--;
                window.set(sL, value)
            }
        }
    }

    return false;
};

let s1 = "abc", s2 = "bbbca";
console.log(checkInclusion(s1, s2));


export default checkInclusion;