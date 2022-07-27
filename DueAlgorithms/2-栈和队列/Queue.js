/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-27 12:10:38
 */
class Queue{
    constructor(arr=[]) {
        this.arr = arr;
    }
    push(value) {
        return this.arr.push(value);
    }
    pop() {
        return this.arr.shift();
    }
}

const queue = new Queue([1,2,3]);
console.log(queue.arr);
queue.pop();
console.log(queue.arr);