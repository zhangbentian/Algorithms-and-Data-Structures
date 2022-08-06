/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-06 10:42:36
 */
class Node {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}
let First = ['A', 'C', 'F', 'G', 'B', 'D', 'E'];
let Mid = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];

function FirstMid(First, Mid) {
    if (First === null || Mid === null || First.length === 0 || Mid.length === 0 || First.length !== Mid.length) return null;
    const root = new Node(First[0]) // 获取中序节点的位置
    const index = Mid.indexOf(root.value) // 获取根节点
    const FirstLeft = First.slice(1, 1 + index); // 左闭右开区间
    const FisrtRight = First.slice(index + 1, First.length)
    const MidLeft = Mid.slice(0, index);
    const MidRight = Mid.slice(index + 1, Mid.length)
    root.left = FirstMid(FirstLeft, MidLeft)
    root.right = FirstMid(FisrtRight, MidRight)
    return root;
}

let res = FirstMid(First, Mid);
console.log(res);