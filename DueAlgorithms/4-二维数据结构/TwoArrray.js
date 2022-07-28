/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-28 11:27:07
 */
//一维数组进化->二维数组
let arr = new Array(4);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(8);
}

// 一维度链表->二维度拓扑结构（图）,由多个链表组成
class NodeT{
    constructor(value) {
        tshi.value = value;
        this.neighbor = [];
    }
}
const a = new NodeT("a");
const b = new NodeT("b");
const c = new NodeT("c");
const d = new NodeT("d");
const e = new NodeT("e");
const f = new NodeT("f");
a.neighbor.push(b)
a.neighbor.push(c)
a.neighbor.push(f)

b.neighbor.push(a)
b.neighbor.push(d)
b.neighbor.push(e)

c.neighbor.push(a);
d.neighbor.push(b);
e.neighbor.push(b);
f.neighbor.push(a);

