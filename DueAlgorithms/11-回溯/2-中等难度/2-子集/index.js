var subsets = function (nums) {
    let track = [];
    let res = [];
    const backtrack = (nums, start = 0) => {
        res.push([...track])
        for (let i = start; i < nums.length; i++) {
            track.push(nums[i]);
            backtrack(nums, i + 1);
            track.pop();
        }
    }
    backtrack(nums)
    return res;
};
let nums = [1,2,3];
console.log(subsets(nums));