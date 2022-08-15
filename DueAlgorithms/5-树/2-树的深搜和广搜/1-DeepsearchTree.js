
/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 */
class Node {
    children = []
    constructor(value) {
        this.value = value;
    }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
a.children.push(c)
a.children.push(f)
a.children.push(b)
b.children.push(d)
b.children.push(e)
// 类似前序遍历
function DeepsearchTree(root) {
    if (root === null) return;
    console.log(root.value);
    const child = root.children;
    for (let i = 0; i < child.length; i++) {
        DeepsearchTree(child[i])
    }
}

function Deepsearch(root, target) {
    if (root === null) return false;
    if (root.value === target) return true;
    const child = root.children;
    let res;
    for (let i = 0; i < child.length; i++) {
       res |= Deepsearch(child[i], target) // 或等于，有真则为真
    }
    return !!res;
}
console.log(Deepsearch(a, "c"));
// console.log(DeepsearchTree(a));