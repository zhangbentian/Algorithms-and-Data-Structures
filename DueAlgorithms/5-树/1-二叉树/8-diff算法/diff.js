/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-09 11:25:22
 */
class Node {
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
let e2 = new Node("淦")
let f2 = new Node("F")
let g2 = new Node("G")

a2.left = c2;
a2.right = b2;
// c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;
//diff算法新增了什么，修改了什么，删除了什么
const diffList = [] // {type:"create",origin:null,now:"zhulinhai"},{type:"update",origin:"zhulinhai","淦淦"}{type:"delete",origin:"hh",now:null}

function diffTree(oldRoot, newRoot, diffList) {
    if (oldRoot === newRoot) return diffList;

    if (oldRoot === null && newRoot !== null) { // 新增节点
        diffList.push({ type: "create", origin: null, now: newRoot })

    } else if (newRoot === null && oldRoot !== null) {     // 删除节点
        diffList.push({ type: "delete", origin: null, now: oldRoot })
    } else if (newRoot.value !== oldRoot.value) { // 修改节点
        diffList.push({ type: "update", origin: oldRoot, now: newRoot })
        // 修改也需要接着走diffTree
        diffTree(oldRoot.left, newRoot.left, diffList);
        diffTree(oldRoot.right, newRoot.right, diffList); // 前序遍历
    }else{ // 如果当前的两个节点相等，这继续寻找下一层级
        diffTree(oldRoot.left, newRoot.left, diffList);
        diffTree(oldRoot.right, newRoot.right, diffList); // 前序遍历
    }
    return diffList; // 统一抛出
}

console.log(diffTree(a1, a2, []));