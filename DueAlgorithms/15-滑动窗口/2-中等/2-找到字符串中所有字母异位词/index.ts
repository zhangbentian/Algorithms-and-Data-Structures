function findAnagrams(s: string, p: string): number[] {
    const need:any = {},window:any={};
    const res:any[] = [];
    for (let i = 0; i < p.length; i++) {
        need[p[i]] = 0;
        window[p[i]] = 0;
    }
    for (let i = 0; i < p.length; i++) {
        need[p[i]] ++;
    }
    let left = 0,right = 0;
    let valid = 0;
    while(right < s.length) {
        const rValue = s[right];
        if(need[rValue]) {
            window[rValue] ++;
            if(need[rValue] === window[rValue]) valid ++;
        }
        right ++;
        while(right -left === p.length) {
            if(valid === Object.keys(need).length) res.push(left)
            const lVal = s[left]
            if(need[lVal]) {
                if(need[lVal] === window[lVal]) valid --;
                window[lVal] --;
            }
            left  ++;
        }
        
    }

    return res;
};
let s = "baa", p = "aa"
console.log(findAnagrams(s,p));

export default findAnagrams;