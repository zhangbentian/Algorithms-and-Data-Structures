/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-13 10:51:05
 */
class Node {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}

let node2 = new Node(2);
let node5 = new Node(5);
let node3 = new Node(3);
let node6 = new Node(6);
node2.right = node5;
node5.left = node3;
node5.right = node6;

let node6t = new Node(6);
let node3t = new Node(3);
let node2t = new Node(2);
let node5t = new Node(5);
node6t.left = node3t;
node3t.left = node2t;
node3t.right = node5t;




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

function leftRotate(root) {
    let newRoot = root.right;
    root.right = newRoot.left;
    newRoot.left = root;
    return newRoot;
}

function rightRotate(root) {
    let newRoot = root.left;
    root.left = newRoot.right;
    newRoot.right = root;
    return newRoot;
}


function change(root) {
    if (balanceSearchTree(root)) return root;
    // 进行后序遍历
    if (root.left !== null) {
        root.left = change(root.left)
    }
    if (root.right !== null) {
        root.right = change(root.right)
    }
    // 进行后序遍历
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return true;
    } else if (leftDeep > rightDeep) { // 不平衡,左边深，需要右旋
        return rightRotate(root)
    } else { // 不平衡,右边深，需要左旋
        return leftRotate(root);
    }
}
const res = change(node6t);
console.log(res);
console.log(balanceSearchTree(res));