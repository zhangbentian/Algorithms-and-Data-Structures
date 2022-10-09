//https://leetcode.cn/problems/binary-tree-paths/
var binaryTreePaths = function(root) {
    const paths = [];
    const getpaths = (root, path) => {
        if(root) {
            path += root.val.toString()
            if (root.left === null && root.right === null) { // 当前节点是叶子节点
                paths.push(path); // 把路径加入到答案中
            } else {
                path += "->"; // 当前节点不是叶子节点，继续递归遍历
                construct_paths(root.left, path);
                construct_paths(root.right, path);
            }
        }
    }
    getpaths(root, "");
    return paths;
};