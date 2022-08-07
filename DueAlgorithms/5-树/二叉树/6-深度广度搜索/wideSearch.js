/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-07 11:07:32
 */
class Node {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function wideSearch(rootList, target = "G") {
    const len = rootList.length;
    if (rootList === null || len === 0) return false;
    let childList = []; //当前层级所有的子节点都再子数组中
    for (let i = 0; i < len; i++) {
        console.log(rootList[i], target);
        if (rootList[i] !== null && rootList[i].value === target) {
            return true;
        } else {
            childList.push(rootList[i].left, target);
            childList.push(rootList[i].right, target);
        }
    }
    return wideSearch(childList, target)
}
console.log(wideSearch([a], "F"));