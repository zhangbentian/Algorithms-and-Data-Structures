// 循环ergodic 数组和链表

const arr = [5, 4, 3, 2, 1];
function ergodicArr(arr: Array<number>) {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i]);
    }
}
ergodicArr(arr);

class LinkList {
    value: number;
    next: null | LinkList;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }

}

const Link1 = new LinkList(0);
const Link2 = new LinkList(1);
const Link3 = new LinkList(2);
const Link4 = new LinkList(3);
const Link5 = new LinkList(4);
Link1.next = Link2;
Link2.next = Link3;
Link3.next = Link4;
Link4.next = Link5;

function ergodicLink(root:LinkList) {
    while(true) {
        if(root.next) {
            console.log(root.value);
        }else{
            console.log(root.value);
            break;
        }
        root = root.next;
    }

}
ergodicLink(Link4)