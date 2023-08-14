//矩阵对角线元素的和
//https://leetcode.cn/problems/matrix-diagonal-sum/
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    const h = mat.length;
    const w = mat[0].length - 1;
    let res = 0;
    for (let i = 0; i < h; i++) {
        res += mat[i][i] + mat[i][h - i - 1];
    }
    if (w % 2 == 0) {
        res -= mat[w / 2][w / 2];
    }
    return res;
};

const mat = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

console.log(diagonalSum(mat));