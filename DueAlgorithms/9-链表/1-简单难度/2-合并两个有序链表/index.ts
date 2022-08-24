
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(4)
a.next = b;
b.next = c;

let A = new ListNode(1)
let B = new ListNode(3)
let C = new ListNode(4)
A.next = B;
B.next = C;

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
      let root = new ListNode(-1),p = root;
      while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            p.next = list1;
            list1 = list1.next;
        }else{
            p.next = list2;
            list2 = list2.next;
        }
        p = p.next;
      }
      if(list1 !== null) {
        p.next = list1;
      }
      if(list2 !== null) {
        p.next = list2;
      }
      return root.next
};

export default mergeTwoLists;