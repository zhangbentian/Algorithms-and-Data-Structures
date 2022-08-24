
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
class ListNode {
    next = null;
    constructor(val = 0) {
        this.val = val;
    }
}

let a = new Link(1);
let b = new Link(1);
let c = new Link(2);
a.next = b;
b.next = c;

var deleteDuplicates = function (head) {
    if (head == null) return null; // 校验传入的值
    let fast = head, slow = head; // 定义快慢指针
    while (fast !== null) { // 校验fast是否为空
        if (fast.val !== slow.val) { // fast和slow不相等时，慢指针向右移，接收快指针的值
            slow = slow.next;
            slow.val = fast.val;
        }
        fast = fast.next;
    }
    // 断开与后面重复元素的连接
    slow.next = null;
    return head;
};