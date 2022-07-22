/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-22 15:27:25
 */
class Node {
   constructor(value) {
    this.value = value;
    this.next = null;
   }
}
let node1 = new Node(0);
let node2 = new Node(1);
let node3 = new Node(2);
let node4 = new Node(3);
let node5 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
function reverse(root) {
    if(root.next == null) return;
    if(root.next.next == null) {
        root.next.next = root; //让最后一个节点指向自己
        return root.next; // 在最后一个节点终止递归
    }else{
        let res = reverse(root.next); // 本次节点已经在修改前传递下去啦
        root.next.next =root; // 下一个节点的下一个指向自己
        root.next = null;
        return res;
    }

}

let newRoot = reverse(node1);
function Ergodic(root) {
    if(root == null) return;
    console.log(root.value);
    Ergodic(root.next)
}
Ergodic(newRoot)

var a = 10;
if(true) {
    a = 10;
    function a() {}
    a = 30;
    console.log('1a',a);
}
console.log('2a',a);