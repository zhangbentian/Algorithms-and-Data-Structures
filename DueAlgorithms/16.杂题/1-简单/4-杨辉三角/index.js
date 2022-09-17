/**
 * @param {number} numRows
 * @return {number[][]}
 */
//https://leetcode.cn/problems/pascals-triangle/
var generate = function (numRows) {
    let res = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length-1; j++) {
           
            row[j] = res[i-1][j-1] + res[i-1][j]
        }
        res[i] = [...row];
    }
    return res;
};
generate(3)