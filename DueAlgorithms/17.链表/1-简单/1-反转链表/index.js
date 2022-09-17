
class ListNode {
    constructor(val = 0, next = null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {//三指针  cur 当前遍历的节点  prev 当前节点的前一个节点  next 下一个节点
    let prev = null;
    let cur = head;
    // 需要链表外设置一个虚拟节点
    while(cur !== null) {
        let next = cur.next; // 记录下一节点位置
        cur.next = prev; // 反转方向
        prev = cur; // 移动上一节点
        cur = next; // 移动当前节点
    }
    return prev;
};
