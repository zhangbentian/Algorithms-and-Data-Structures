/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-06 11:01:17
 */
class Node{
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}

const Mid = ['F', 'C','G','A','D','B','E']
const End = ['F','G','C','D','E','B','A']

function MidEnd(Mid,End) {
    const EndLen = End.length;
    const MidLen = Mid.length;
    if(Mid === null || End === null || MidLen === 0 ||EndLen === 0 || MidLen !== EndLen) return null;
    const root = new Node(End[EndLen-1]);
    const index = Mid.indexOf(root.value);
    const MidLeft = Mid.slice(0,index);
    const MidRight = Mid.slice(index+1,MidLen)
    const EndLfet = End.slice(0,index);
    const EndRight = End.slice(index,EndLen-1) //减一就可以啦
    root.left = MidEnd(MidLeft,EndLfet)
    root.right = MidEnd(MidRight,EndRight)
    return root;
}
console.log(MidEnd(Mid,End))