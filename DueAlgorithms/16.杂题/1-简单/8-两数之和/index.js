/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const n = nums.length;
    let l = 0,r = n-1;
    let sourArr = [...nums]
    nums = nums.sort((a,b)=>a-b)
    let res;
    while(l < r) {
        const sum = nums[l]+nums[r]
        if(sum>target) r --;
        if(sum<target) l ++
        if(sum===target) {
            res = [nums[l],nums[r]]
            break;
        }
    }
    let result = new Array(2)
    if(res) {
        for(let i = 0; i < n;i ++) {
            if(res[0] === sourArr[i]) {
                if(result[0] == null){
                    result[0] = i;
                    continue
                }
            }
            if(res[1] === sourArr[i] ) {
                if(result[1] == null){
                    result[1] = i;
                    continue
                }
            }
        }
        return result;
    }

    return []
};
let nums = [3,3], target = 6
console.log(twoSum(nums,target));