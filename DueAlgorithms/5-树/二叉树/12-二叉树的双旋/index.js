/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-13 12:10:10
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

let node82 = new Node(8);
let node52 = new Node(5)
let node22 = new Node(2)
let node72 = new Node(7)
let node62 = new Node(6)

node82.left = node52;
node52.left = node22;
node52.right = node72;
node72.left = node62;



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
        return root;
    } else if (leftDeep > rightDeep) { // 不平衡,左边深，需要右旋
        let changeTreeDeep, noChangeTreeDeep;
        if (root.left !== null) {
            changeTreeDeep = getDeep(root.left.right)
            noChangeTreeDeep = getDeep(root.left.left)
        }
        if (changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left)
        }
        // 右右旋
        let newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right); // 判断右旋后，右子树是否平衡,不平衡再次旋转调整
        return newRoot = change(newRoot); //  再次判断新的节点是否平衡
    } else { // 不平衡,右边深，需要左旋
        let changeTreeDeep, noChangeTreeDeep;
        if (root.left !== null) {
            changeTreeDeep = getDeep(root.right.left)
            noChangeTreeDeep = getDeep(root.right.right)
        }
        if (changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right)
        }
           // 左左旋
           let newRoot = leftRotate(root);
           newRoot.left = change(newRoot.left); // 判断左旋后，左子树是否平衡,不平衡再次旋转调整
           return newRoot = change(newRoot); //  再次判断新的节点是否平衡
    }
}

let num = 0;
function addNode(root, num) {
    if (root === null || root.value === num) return;
    if (root.value < num) {
        if (root.right === null) {
            root.right = new Node(num)
        } else {
            addNode(root.right, num)
        }
    } else {
        if (root.left === null) {
            root.left = new Node(num)
        } else {
            addNode(root.left, num)
        }
    }
}
function buildSearchTree(arr) {
    const len = arr.length;
    if (len === 0) return arr;
    let root = new Node(arr[0]);
    for (let i = 1; i < len; i++) {
        addNode(root, arr[i]) // 添加 
    }
    return root;
}
let arr = [];
for (let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000));

}
// 类似前序遍历
function searchByTree(root, target) {
    if (root === null) return false;
    if (root.value === target) return true;
    if (root.value < target) {
        return searchByTree(root.right, target) // 要return
    } else {
        return searchByTree(root.left, target)
    }
}
let root = buildSearchTree(arr);
console.log(getDeep(root));

let newRoot = change(root);
console.log(getDeep(newRoot));
console.log(balanceSearchTree(newRoot));
