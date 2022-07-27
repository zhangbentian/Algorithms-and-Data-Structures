/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-27 12:44:59
 */
class DoubleLink{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}
const link1 = new DoubleLink(1);
const link2 = new DoubleLink(2);
const link3 = new DoubleLink(3);
const link4 = new DoubleLink(4);
const link5 = new DoubleLink(5);
link1.next = link2;
link2.pre = link1;
link2.next = link3;
link3.pre = link2;
link3.next = link4;
link4.pre = link3;
link4.next = link5;
link5.pre = link4;
// 双向链表的优点，无论给出那个节点，都能对双向链表进行遍历
// 缺点：多耗费一个引用的空间，而且构建双向链表比较复杂
// console.log(link4.next.value);

function ergodic(link) {
    if(link === null) return;
    console.log(link.value);
    // ergodic(link.next)
    ergodic(link.pre)
    // if(link.pre) {
    //     console.log(link.pre.value);
    //     // ergodic(link.pre.pre)
    // }
    
   
}
ergodic(link4)