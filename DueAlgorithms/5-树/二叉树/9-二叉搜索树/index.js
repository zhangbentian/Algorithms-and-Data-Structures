/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-12 11:06:09
 */

class Node {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}


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

// 类似前序遍历
function searchByTree(root,target) {
    if(root === null) return false;
    if(root.value === target) return true;
    if(root.value< target) {
       return searchByTree(root.right,target) // 要return
    }else{
       return searchByTree(root.left,target)
    }
}

const res = buildSearchTree([3,1,2,8,9,6,5,7]);
console.log(searchByTree(res,10));