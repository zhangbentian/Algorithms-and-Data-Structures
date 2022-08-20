/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-01 11:30:57
 */
//中序遍历
class DichotomousTree {
    left = null;
    right = null;
    constructor(val = 0) {
        this.val = val;
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

// 个人写法
function MidErgodic(root) {
    if (root === null) return;
    MidErgodic(root.left);
    console.log(root.val);
    MidErgodic(root.right);
}
MidErgodic(a)

// 力扣上要求 https://leetcode.cn/problems/binary-tree-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];

    const MidErgodic = (root) => {
        if (!root) return;
        MidErgodic(root.left)
        res.push(root.val)
        MidErgodic(root.right)
    }

    MidErgodic(root)
    return res;
};

