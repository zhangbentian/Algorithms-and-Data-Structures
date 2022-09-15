
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

let a = new TreeNode(2)
let b = new TreeNode(1)
let c = new TreeNode(3)
let d = new TreeNode(4)
let e = new TreeNode(3)
let f = new TreeNode(1)
a.left = b;
a.right =c;
b.right = d;


/**
 * @param {TreeNode} root
 * @return {number}
 */
//https://leetcode.cn/problems/house-robber-iii/
// 根节点有两种情况，偷还是不偷
// 之前想法是错的应该使用dfs+dp
var rob = function (root) {
    let res = []
    const dp = (root) =>{
        if (root == null) return [0,0]
        let left = dp(root.left);
        let right = dp(root.right);
        // 抢，下家就不能抢了
        let rob = root.val + left[0] + right[0];

        // 不抢，下家可抢可不抢，取决于收益大小
        let not_rob = Math.max(left[0], left[1])
                    + Math.max(right[0], right[1]);
        return [not_rob,rob]
    }
    res = dp(root)
    return Math.max(res[0],res[1])
    
};

console.log(rob(a));