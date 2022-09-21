function removeDuplicateLetters(s: string): string {
    let stack: Array<string> = [];

    // 数组 seen 记录当前栈中已经存在的字符，如果后续再遇到可以直接跳过
    let seen = new Array(26);

    // last_occurrence 记录字符串中出现过的字符在字符串最后⼀次出现的位置
    let last_occurrence: Array<number> = new Array(26);
    for (let i = 0; i < s.length; i++) {
        last_occurrence[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }

    // 从左到右扫描字符串
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        // 若当前字符已经在栈中，⽆需处理

        // 若当前字符不在栈中
        if (!seen[ch.charCodeAt(0) - 'a'.charCodeAt(0)]) {
            // 如果栈中有元素，且栈顶元素比当前字符大，并且栈顶字符在后续字符串还会出现：
            //    用当前字符替换栈顶字符得到字典序更小的字符串（此处将一直与栈顶元素相比；
            //    直到栈为空或栈顶字符比当前字符小，或栈顶字符在当前位置之后不会再出现）
            while (stack.length > 0 &&
                stack[stack.length - 1] > ch &&
                last_occurrence[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > i) {
                    let i:any = (stack.pop() as string).charCodeAt(0) - 'a'.charCodeAt(0)
                    seen[i] = false;
            }
            seen[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
            stack.push(ch);
        }
    }

    return stack.join('');
};

let s = "bcabc";
console.log(removeDuplicateLetters(s));

