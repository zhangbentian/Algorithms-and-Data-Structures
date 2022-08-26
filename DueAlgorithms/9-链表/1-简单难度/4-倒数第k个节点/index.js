/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
var getKthFromEnd = function(head, k) {
    let fast = head;
   let slow = head;
   while(k --) {
      fast = fast.next
   }
   while(fast !== null) { //条件原因是倒数的K个节点
       fast = fast.next;
       slow = slow.next;
   }
   return slow;
};