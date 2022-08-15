/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-07 10:34:21
 */
class Node {
    left = null;
    right = null;
    value = null;
    constructor(value) {
        this.value = value;
    }
}
let a = new Node("A")
let b = new Node("B")
let c = new Node("C")
let d = new Node("D")
let e = new Node("E")
let f = new Node("F")
let g = new Node("G")
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

// 对于二叉树来说深度优先搜索和前序遍历的顺序是一样的
function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value === target) return true;
    let left = deepSearch(root.left,target);
    let right = deepSearch(root.right,target);
    return left || right;
}
console.log(deepSearch(a, "h"));