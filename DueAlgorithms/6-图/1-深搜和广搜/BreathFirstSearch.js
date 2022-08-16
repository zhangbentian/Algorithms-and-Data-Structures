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

function bfs(nodes,target,path) {
    let childrenNode = new Set([])
    if(nodes.length === 0) return false;
   
    for (let i = 0; i < nodes.length; i++) {
        if(path.includes(nodes[i])) return false
        if(nodes[i].value === target) return true;
        path.push(nodes[i]) 
        childrenNode = [...childrenNode,...nodes[i].neighbor] //添加的太多了
        // for (let j = 0; j < nodes[i].neighbor.length; j++) {
        //     if(!path.includes(nodes[i].neighbor[j])){
        //         childrenNode.push(nodes[i].neighbor[j])
        //     }
        // }
    }
    // console.log(childrenNode);
    return bfs(childrenNode,target,path);
}
console.log(bfs([a],"G",[]));

