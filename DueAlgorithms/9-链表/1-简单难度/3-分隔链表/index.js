/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
//https://leetcode.cn/problems/partition-list/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
//mark:注意分割后不需要排序，保留链表映射的相对位置就可行了
var partition = function (head, x) {
    let vNode1 = new ListNode(-1),p1 = vNode1;
    let vNode2 = new ListNode(-1),p2 = vNode2;
    while(head !== null) {
        if(head.val < x) {
            p1.next = head;
            p1 = p1.next;
        }else{
            p2.next = head;
            p2 = p2.next;
        }
        // 断开原链表中的每个节点的 next 指针
        let temp = head.next;
        head.next = null;
        head = temp;
    }
    p1.next = vNode2.next;
    return vNode1.next;

};