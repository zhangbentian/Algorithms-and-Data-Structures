/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-07 11:52:05
 */
class Node{
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}
let a1 = new Node("A")
let b1 = new Node("B")
let c1 = new Node("C")
let d1 = new Node("D")
let e1 = new Node("E")
let f1 = new Node("F")
let g1 = new Node("G")
a1.left = c1;
a1.right = b1;
c1.left = f1;
// c1.right = g1;
b1.left = d1;
b1.right = e1;


let a2 = new Node("A")
let b2 = new Node("B")
let c2 = new Node("C")
let d2 = new Node("D")
let e2 = new Node("E")
let f2 = new Node("F")
let g2 = new Node("G")

a2.left = c2;
a2.right =b2;
c2.left = f2;
// c2.right = g2;
b2.left = d2;
b2.right = e2;
// 二叉树左右不可以互换的情况下，是否相等,两个对象永远不相等
function compareTree(root1,root2) {
    // console.log(root1,root2); 
    if(root1 === root2) return true; // 判断到空后null相等直接返回true
    if((root1 === null && root2 !== null) ||(root2 === null && root1 !== null)) return false; // 左右其中有一个为空的情况下，返回fasle
    if(root1.value !== root2.value) return false; // 相同位置的值不相等
    let leftBool = compareTree(root1.left,root2.left);
    let rightBool = compareTree(root1.right,root2.right);

    return leftBool && rightBool; //必须左右子树相等才算相等

}
console.log(compareTree(a1,a2));
