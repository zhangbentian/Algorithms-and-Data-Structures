/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 */
class Node{
    children = []
    constructor(value) {
        this.value = value;
    }
}
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
a.children.push(c)
a.children.push(f)
a.children.push(b)
b.children.push(d)
b.children.push(e)

function wideSearchTree(roots,target) {
    if(roots === null ||roots.length === 0) return false;
    let childs = [];
    for (let i = 0; i < roots.length; i++) {
        if(roots[i].value === target) {
            return true;
        }else {
            childs = childs.concat(roots[i].children)
        }
    }

    return wideSearchTree(childs,target)
}
console.log(wideSearchTree([a],"d"));


    