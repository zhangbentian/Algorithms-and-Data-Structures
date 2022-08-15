/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-01 11:03:53
 */
class DichotomousTree {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;

    }
}

let a = new DichotomousTree("a");
let b = new DichotomousTree("b");
let c = new DichotomousTree("c");
let d = new DichotomousTree("d");
let e = new DichotomousTree("e");
let f = new DichotomousTree("f");
let g = new DichotomousTree("g");
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

// 前序遍历
function ergodic(root) {
    if(root === null) return;
    console.log(root.value);
    ergodic(root.left);
    ergodic(root.right);
}

ergodic(a);