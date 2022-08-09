/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-09 10:54:29
 */
// 左右互换二叉树相等
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
c1.right = g1;
b1.left = d1;
b1.right = e1;


let a2 = new Node("A")
let b2 = new Node("B")
let c2 = new Node("C")
let d2 = new Node("D")
let e2 = new Node("E")
let f2 = new Node("F")
let g2 = new Node("G")

// a2.left = c2;
// a2.right =b2;
// c2.left = f2;
// c2.right = g2;
// b2.left = d2;
// b2.right = e2;

//互换后
a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;


function SwapCompareTree(root1,root2) {
    if(root1 === root2 ) return true;
    if(root1 !== null && root2 === null || root2 !== null && root1 === null) return false;
    if(root1.value !== root2.value) return false;
    let leftBool = SwapCompareTree(root1.left,root2.left);
    let rightBool = SwapCompareTree(root1.right,root2.right);
    let leftSwap = SwapCompareTree(root1.left,root2.right);
    let rightSwap = SwapCompareTree(root1.right,root2.left)
    return  (leftBool && rightBool) || (leftSwap && rightSwap)

}
console.log(SwapCompareTree(a1,a2));