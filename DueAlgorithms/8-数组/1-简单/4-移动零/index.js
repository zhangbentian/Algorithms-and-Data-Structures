//https://leetcode.cn/problems/move-zeroes/

//快慢指针
var moveZeroes = function(nums) {
    let fast = 0,slow = 0;
    while(fast<nums.length) {
        if(nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow ++;
        }
        fast ++;
    }
    while(slow<nums.length) {
        nums[slow] = 0;
        slow ++;
    }
    return nums;
};

// console.log(moveZeroes([0,1,0,3,12]));