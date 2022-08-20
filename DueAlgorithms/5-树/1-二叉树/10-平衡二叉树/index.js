/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-12 12:30:04
 */
// 1.根节点的左子树和右子树高度差不能超过1
// 2.二叉树的每个子树都符合第一条。
class Node {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}
// let a = new Node("A");
// let b = new Node("B");
// let c = new Node("C");
// let d = new Node("D");
// let e = new Node("E");
// let f = new Node("F");
// let g = new Node("G");
// let y = new Node("Y");
// let k = new Node("K");
// let z = new Node("Z");
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;
// d.right = y;
// e.right = k;
// k.right = z;

//计算最大层级
function getDeep(root) {
    if (root === null) return 0;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right)
    return Math.max(leftDeep, rightDeep) + 1;
}

// 判断平衡二叉树
function balanceSearchTree(root) {
    if (root === null) return true;
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) { // 不平衡
        return false;
    } else {
        return balanceSearchTree(root.left) && balanceSearchTree(root.right);

    }

}

// console.log(balanceSearchTree(d));


//力扣
//https://leetcode.cn/problems/balanced-binary-tree/

class TreeNode{
    left = null;
    right = null;
    constructor(val = 0) {
        this.val = val;
    }
}

let a = new TreeNode(3);
let b = new TreeNode(9);
let c = new TreeNode(20);
let d = new TreeNode(15);
let e = new TreeNode(7);
a.left = b;
a.right = c;
c.left = d;
c.right = e;

var isBalanced = function (root) {
   if(!root) return true;
   let leftD = getDeepH(root.left);
   let rightD = getDeepH(root.right);
    if(Math.abs(leftD-rightD) >1 ) {
        return false;
    }else {
        return isBalanced(root.left) && isBalanced(root.right)
    }
};
function getDeepH(root) {
    if(root === null) return 0;
    let leftDeep = getDeepH(root.left);
    let rightDeep = getDeepH(root.right);
    return Math.max(leftDeep,rightDeep)+1
}

console.log(isBalanced(a));
// console.log(getDeepH(a));