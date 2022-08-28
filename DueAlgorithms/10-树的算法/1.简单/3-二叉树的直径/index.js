//https://leetcode.cn/problems/diameter-of-binary-tree/
var diameterOfBinaryTree = function (root) {
    if (root == null || (root.left == null && root.right == null)) return 0
    let res = 0
    function dfs(root) {
        if (root == null) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        res = Math.max(res, left + right + 1)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return res - 1
};

//

function test(root) {
    let res = 0;
    const getDiameter = (root) => {
        if (root === null) return 0;
        let leftDeep = getDeep(root.left);
        let rightDeep = getDeep(root.right);
        res = Math.max(res, leftDeep + rightDeep + 1)
        return Math.max(leftDeep, rightDeep) + 1;
    }
    getDiameter(root)
    return res-1;
}
