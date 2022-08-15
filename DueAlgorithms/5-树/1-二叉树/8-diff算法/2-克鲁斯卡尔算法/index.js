/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-11 10:37:04
 */
class Node {
    neighbor = [];
    constructor(value) {
        this.value = value;
    }
}

let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')
const pointSet = [a, b, c, d, e]; // 点的集合，每个点都是一个对象
const max = 1000; // 最大距离
const distance = [ // 距离(边)集合i,j由pointSet内一一对应
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, max, 5],
    [max, 6, max, 0, 7],
    [max, max, 5, 7, 0]
]

function canLink(resList, tempBegin, tempEnd) {
    const len = resList.length;
    if (len === 0) return true; // 两个都是新的点，没有部落可以连接
    for (let i = 0; i < len; i++) {
        if (resList[i].includes(tempBegin) && resList[i].includes(tempEnd)) {
            return false; // 两个村庄在同一个部落，不可以连接
        }
    }
    return true; // 1.tempBegin在部落，tempEnd不在;2.tempEnd在部落，tempBegin不在;3.两个村庄在不同部落
}

function Link(resList, begin, end) {
    let beginIndex = null;
    let endIndex = null;
    for (let i = 0; i < resList.length; i++) {
        if (resList[i].includes(begin)) {
            beginIndex = i;
        }
        if (resList[i].includes(end)) {
            endIndex = i;
        }

    }
    if (beginIndex === null && endIndex === null) {
        resList.push([begin, end])
    }
    if (beginIndex !== null && endIndex === null) { //1.tempBegin在部落，tempEnd不在;
        resList[beginIndex].push(end)
    }
    if (beginIndex === null && endIndex !== null) { //2.tempEnd在部落，tempBegin不在;
        resList[endIndex].push(begin)
    }
    if (beginIndex !== null && endIndex !== null) { // 3.两个村庄在不同部落
        resList[beginIndex] = [...resList[beginIndex], ...resList[endIndex]];
        resList.splice(endIndex,1)
    }
    begin.neighbor.push(end)
    end.neighbor.push(begin)

}

function kruskal(pointSet, distance) {
    let resList = []; // 存储部落
    while (true) {
        let minDis = max;
        let begin = null;
        let end = null;
        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                let tempBegin = pointSet[i];
                let tempEnd = pointSet[j];
                if (i !== j && distance[i][j] < minDis && canLink(resList, tempBegin, tempEnd)) {
                    minDis = distance[i][j];
                    begin = tempBegin;
                    end = tempEnd;
                }
            }
        }
        Link(resList, begin, end) // 连接函数

        if (resList[0].length === pointSet.length) break; // 判断是否全部连接完成
    }
    return resList;
}

const res = kruskal(pointSet, distance).flat(2)
console.log(res);
res.map(item=>{
    console.log(item.neighbor);
})