/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-01 11:32:40
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

function LastErgodic(root) {
    if (root === null) return;
    LastErgodic(root.left);
    LastErgodic(root.right);
    console.log(root.value);
}
LastErgodic(a)

//https://leetcode.cn/problems/binary-tree-postorder-traversal/
var postorderTraversal = function(root) {
    let res = [];
    const LastErgodic = (root)=>{
        if(!root) return;
        LastErgodic(root.left)
        LastErgodic(root.right)
        res.push(root.val)
    }
    LastErgodic(root)
    return res;
};