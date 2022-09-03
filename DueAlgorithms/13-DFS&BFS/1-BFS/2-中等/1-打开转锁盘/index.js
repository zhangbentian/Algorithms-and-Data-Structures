/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
//https://leetcode.cn/problems/open-the-lock/submissions/
//单bfs
// var openLock = function (deadends, target) {
//     let visited = new Set();
//     let q = new Array();
//     //从起点开始bfs
//     let step = 0;
//     q.push("0000")
//     visited.add("0000")
//     while (q.length) {
//         const size = q.length;
//         for (let i = 0; i < size; i++) {
//             let cur = q.shift();
//             if (deadends.includes(cur)) continue;
//             if (cur === target){
//                 return step;
//             } 
//             for (let j = 0; j < 4; j++) {
//                 let upData = up(cur, j)
//                 if (!visited.has(upData)) {
//                     q.push(upData);
//                     visited.add(upData);
//                 }

//                 let downData = down(cur, j)
//                 if (!visited.has(downData)) {
//                     q.push(downData);
//                     visited.add(downData);
//                 }
//             }
           
//         }
//         step ++;
//     }
//     return -1;
// };

//双bfs
var openLock = function (deadends, target) {
    let visited = new Set();
    let q1 = new Set();
    let q2 = new Set();
    //从起点开始bfs
    let step = 0;
    q1.add("0000")
    q2.add(target)
    visited.add("0000")
    while (q1.size && q2.size) {
        let temp = new Set();
        for (const cur of q1) { 
            if (deadends.includes(cur)) continue;
            if (q2.has(cur)){
                return step;
            } 
            visited.add(cur);
            /* 将一个节点的未遍历相邻节点加入集合 */
            for (let j = 0; j < 4; j++) {
                let upData = up(cur, j)
                if (!visited.has(upData)) {
                    temp.add(upData);
                   
                }

                let downData = down(cur, j)
                if (!visited.has(downData)) {
                    temp.add(downData);
                }
            }
        }
        step ++;
        q1 = q2;
        q2 = temp;
    }
    return -1;
};


function up(nums, i) {
    nums = nums.split('')
    if (nums[i] === '9') {
        nums[i] = '0';
    } else {
        nums[i]++;
    }
    return nums.join('');
}

function down(nums, i) {
    nums = nums.split('')
    if (nums[i] === '0') {
        nums[i] = '9';
    } else {
        nums[i]--;
    }
    return nums.join('');
}
let deadends = ["0201","0101","0102","1212","2002"], target = "0202"
console.log(openLock(deadends, target));