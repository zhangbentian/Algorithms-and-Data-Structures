class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

//自顶而下归并 先分在合
var mergeKLists = function (lists) {
    if(lists.length === 0) return new ListNode().next;
    let res = lists[0];
    
    let count = 1;
    while (count < lists.length) {
        res = mergeTwoLists(res, lists[1])
        count ++
    }
    return res;
};

//法二
// var mergeKLists = function (lists) {
//     if(lists.length <1) return new ListNode().next;
//     let res = lists[0];
//     lists.shift()
//     while (lists.length > 0) {
//         res = mergeTwoLists(res, lists[0])
//         lists.shift()
//     }
//     return res;
// };

var mergeTwoLists = function (l1, l2) {
    let root = new ListNode(-1), p = root; //一定要设置p=root ,不能为next，不然不能定位到root了
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2;
            l2 = l2.next
        }
        p = p.next;
    }
    if (l1 !== null) {
        p.next = l1;
    }
    if (l2 !== null) {
        p.next = l2;
    }
    return root.next;
};