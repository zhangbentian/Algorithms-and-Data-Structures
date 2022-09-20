

var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0); // 前缀和
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};

//未考虑多个中心点问题,已经在中心点位于左端或右端的问题
// var pivotIndex = function(nums) {
//     const n = nums.length;
//     if(n===1) return 0;
//     let lsum = []
//     let rsum = []
//     for(let i = 0; i < n;i ++ ) {
//         lsum[i] = nums[i]+(lsum[i-1] || 0)
//         rsum[i] = nums[n-1-i]+(rsum[i-1] || 0)
//     }
//     for (let i = 0; i < n; i++) {
//         if(lsum[i] === rsum[n-3-i]) { 
//             return i+1;
//         }
        
//     }
//     return -1;

// };

console.log(pivotIndex([2,1,-1]));