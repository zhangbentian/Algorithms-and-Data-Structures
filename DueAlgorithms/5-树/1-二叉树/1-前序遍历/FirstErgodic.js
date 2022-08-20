/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-01 11:03:53
 * 
 */
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

// 前序遍历
function ergodic(root) {
    if (root === null) return;
    console.log(root.val);
    ergodic(root.left);
    ergodic(root.right);
}

// ergodic(a);

// 力扣 https://leetcode.cn/problems/binary-tree-preorder-traversal/

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

class nodeTree{
    left = null;
    right = null;
    constructor(val = 0) {
        this.val = val;
    }
}

let node1 = new nodeTree(1);
let node2 = new nodeTree(2);
let node3 = new nodeTree(3);
node1.right = node2;
node2.left = node3;

var preorderTraversal = function (root) {
    let res = [];
    const FirstErgodic = (root)=>{
        if(!root) return;
        res.push(root.val)
        FirstErgodic(root.left)
        FirstErgodic(root.right)
    }
    FirstErgodic(root)
    return res;
};
console.log(preorderTraversal(node1));