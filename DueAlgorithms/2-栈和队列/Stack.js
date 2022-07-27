/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-27 12:06:32
 */
class Stack{
    arr = [1,2,3]
    // constructor(arr=[1,2,3]) {
    //     this.arr = arr;
    // }
    push(value) {
       return this.arr.push(value)
    }
    pop() {
        return this.arr.pop();
    }
}

const zbt = new Stack();
zbt.push(55);
console.log(zbt.arr);