/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-22 09:54:28
 */
const testArr = [1,2,3,4,5];

function ArrRecursion(arr:Array<number>,i:number) {
    if(arr.length <= i) return;
    console.log(arr[i]);
    ArrRecursion(arr,i+1);
    
}
ArrRecursion(testArr,0);

class LinkTest{
    value: number;
    next: null | LinkTest;
    constructor(value:number) {
        this.value = value;
        this.next = null;
    }
}
const myLink1 = new LinkTest(0);
const myLink2 = new LinkTest(2);
const myLink3 = new LinkTest(4);
const myLink4 = new LinkTest(6);
const myLink5 = new LinkTest(8);
myLink1.next = myLink2;
myLink2.next = myLink3;
myLink3.next = myLink4;
myLink4.next = myLink5;

// 递归遍历必须有出口,递归遍历链表推荐
function RecursionLink(root:any) {
    if(root == null) {
        return;
    }
    console.log(root.value);
    RecursionLink(root.next)
}
RecursionLink(myLink1)