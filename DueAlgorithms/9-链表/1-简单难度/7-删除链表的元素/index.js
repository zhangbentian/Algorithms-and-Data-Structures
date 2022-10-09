/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//https://leetcode.cn/problems/remove-linked-list-elements/submissions/
 var removeElements = function(head, val) {
    while(head?.val ===val) {
       head = head.next;     
    }
    let pre = null, res = head, temp;
    while(head) {
        temp = head.next;
        if(head.val ===val) {
            pre.next = head.next
            head.next = null;
        }else{
            pre = head
        }
        head =temp;
    }
    return res;
};