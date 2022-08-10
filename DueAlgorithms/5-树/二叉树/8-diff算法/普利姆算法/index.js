/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-08-10 15:17:35
 */
const max = 1000;
const distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, max, 5],
    [max, 6, max, 0, 7],
    [max, max, 5, 7, 0]
]

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
let pointSet = [a, b, c, d, e];

// 需要传入点的集合，边的集合，当前已经连接进入的集合
function getMinDisNode(pointSet, distance, nowPointSet) {
    let fromNode = null; // 线段起点
    let minDisNode = null; // 线段终点
    let minDis = max;
    for (let i = 0; i < nowPointSet.length; i++) { // 当前已连接点的集合
        let nowPoint = getIndex(pointSet, nowPointSet[i]); // 获取点的下标，index
        for (let j = 0; j < distance[nowPoint].length; j++) {
            if (nowPointSet.indexOf(pointSet[j]) < 0 && distance[nowPoint][j] < minDis && distance[nowPoint][j] !== 0) { // 线的点不是已经连入的点，且目前点的最小的点
                fromNode = nowPointSet[i];
                minDisNode = pointSet[j];
                minDis = distance[nowPoint][j];
            }
        }

    }
    if (fromNode !== null && minDisNode !== null) {
        fromNode.neighbor.push(minDisNode) // 起点邻居
        minDisNode.neighbor.push(fromNode) // 终点邻居
    }
    return minDisNode; // 返回终点

}

// 获取索引
function getIndex(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value === item.value) return i;
    }
    return false;
}
// 主函数
function prim(pointSet, distance, start) {
    let nowPointSet = [];
    nowPointSet.push(start);
    while (true) {
        let minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisNode);
        if (nowPointSet.length === pointSet.length) {
            break;
        }
    }
    return nowPointSet;
}

console.log(prim(pointSet, distance, pointSet[2]));
