

class Node {
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}
let First = ['A', 'C', 'F', 'G', 'B', 'D', 'E'];
let Mid = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];

function FirstMid(First, Mid) {
    if (First === null || Mid === null || First.length === 0 || Mid.length === 0 || First.length !== Mid.length) return null;
    const root = new Node(First[0]) // 获取中序节点的位置
    const index = Mid.indexOf(root.value) // 获取根节点
    const FirstLeft = First.slice(1, 1 + index); // 左闭右开区间
    const FisrtRight = First.slice(index + 1, First.length)
    const MidLeft = Mid.slice(0, index);
    const MidRight = Mid.slice(index + 1, Mid.length)
    root.left = FirstMid(FirstLeft, MidLeft)
    root.right = FirstMid(FisrtRight, MidRight)
    return root;
}

// let res = FirstMid(First, Mid);
// console.log(res);

//https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var buildTree = function (preorder, inorder) {
    const prelen = preorder.length;
    const inlen = inorder.length;
    if(prelen === 0) return null;
    const index = inorder.indexOf(preorder[0])
    const root = new TreeNode(preorder[0])
    root.left = buildTree(preorder.slice(1, 1 + index), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(1 + index, prelen), inorder.slice(index + 1, inlen))
    return root;

};
let preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder));