/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-23 09:43:10
 */
class LinkReverse {
    value:number;
    next:null | LinkReverse;
    constructor(value:number) {
        this.value = value;
        this.next = null;
    }
}

const myLinkReverse1 = new LinkReverse(0);
const myLinkReverse2 = new LinkReverse(2);
const myLinkReverse3 = new LinkReverse(4);
const myLinkReverse4 = new LinkReverse(6);
const myLinkReverse5 = new LinkReverse(8);
myLinkReverse1.next = myLinkReverse2;
myLinkReverse2.next = myLinkReverse3;
myLinkReverse3.next = myLinkReverse4;
myLinkReverse4.next = myLinkReverse5;

function ReverseLink(root:any):any {
    if(root.next == null) return;
    if(root.next.next == null) {
        root.next.next = root; //让最后一个节点指向自己
        return root.next; // 在最后一个节点终止递归
    }else{
        const res:any = ReverseLink(root.next) // 记录未改变节点，进行回调
        root.next.next = root; // 改变子节点的指向
        root.next = null; // 将父节点的指向置为空
        return res;
        
    }
}
const res:any = ReverseLink(myLinkReverse1)

function Recursion(root:any) {
    if(root == null) {
        return;
    }
    console.log(root.value);
    Recursion(root.next)
}
Recursion(res)
