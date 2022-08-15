/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 */
class Node{
    neighbor = []
    constructor(value){
        this.value = value;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a)
b.neighbor.push(c)
b.neighbor.push(d)
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b)
d.neighbor.push(c)
d.neighbor.push(e)


function dfs(root,target,path) {
    if(root === null) return false;
    if(path.includes(root)) return false; //判断节点是否走过
    if(root.value === target) return true;
    path.push(root) // 已经查探过的路径
    let res;
    for (let i = 0; i < root.neighbor.length; i++) {
        res |= dfs(root.neighbor[i],target,path)
        
    }
    return !!res;
}
console.log(dfs(b,"A",[]));