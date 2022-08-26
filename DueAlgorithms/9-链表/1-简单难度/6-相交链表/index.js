/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let lenA = 0,lenB = 0;
    for (let i = headA; i !== null; i = i.next) {
        lenA ++;
    }
    for (let i = headB; i !== null; i = i.next) {
        lenB ++;
    }
    if(lenA > lenB) {
        for (let i = 0; i < lenA-lenB; i ++) {
            headA = headA.next
        }
    }else{
        for (let i = 0; i < lenB-lenA; i ++) {
            headB = headB.next
        }
    }

    while(headA !== headB) {
        headA =  headA.next
        headB = headB.next
     }
    return headA;
};