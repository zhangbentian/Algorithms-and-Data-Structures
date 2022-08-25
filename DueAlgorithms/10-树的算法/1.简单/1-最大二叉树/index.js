
// https://leetcode.cn/problems/maximum-binary-tree/
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var constructMaximumBinaryTree = function (nums) {

    return getMaxTree(nums);

};
function getMaxIndex(arr) {
    let max = -1;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}
const getMaxTree = (nums) => {
    if (nums.length === 0) {
        return null;
    }
    let Index = getMaxIndex(nums)
    let root = new TreeNode(nums[Index]);
    root.left = getMaxTree(nums.slice(0, Index))
    root.right = getMaxTree(nums.slice(Index + 1, nums.length))
    return root;

}

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));

// 广度遍历二叉树bfs
getRootArr = (arrTree) => {
    if (arrTree.length === 0) {
        return;
    }
    let childTree = []
    for (let i = 0; i < arrTree.length; i++) {
        if (arrTree[i] !== null) {
            res.push(arrTree[i].val)
            if(arrTree[i].left !== null || arrTree[i].right !== null) {
                childTree.push(arrTree[i].left)
                childTree.push(arrTree[i].right)
            }
        } else {
            res.push(arrTree[i])
        }

    }
    getRootArr(childTree)
}
