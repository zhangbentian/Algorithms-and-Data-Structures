/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/

//法一，中心向外扩散的写法
//  var searchRange = function(nums, target) {
//     let l = 0,r =nums.length-1,tmep =-1;
//     while(l <= r) {
//         let mid = parseInt((l+r)/2)
//         console.log("🚀 ~ file: index.js ~ line 11 ~ searchRange ~ mid", mid)
//         if (nums[mid] === target) {
//             tmep = mid;
//             break;
//         } else if (nums[mid] < target) {
//             l = mid + 1;
          
//         } else {
//             r = mid - 1;
//         }
//     }
//     if(tmep !== -1) {
//         let left = tmep,right = tmep;
//         while(nums[left-1]=== target) left --;
//         while(nums[right+1]===target) right ++;
//         return [left,right]
//     }
//     return [-1,-1]
// };

// console.log(searchRange([1],1));

// 法二,寻找左侧边界的写法，left=0,right = nums.length

var searchRange = function(nums, target) {
    let l = 0,r =nums.length-1,tmep =-1;
    while(l<=r) {
        const mid = parseInt(l+(r-l)/2);
        if(nums[mid] === target){
            r = mid-1
        }else if(nums[mid] > target) {
            r = mid-1;
        }else if(nums[mid] < target) {
            l = mid+1;
        }
    }
    // if(l === nums.length) return [-1,-1]; // js数组溢出不会报错
    r = l;
    console.log("🚀 ~ file: index.js ~ line 51 ~ searchRange ~ l", l)
    if(nums[l] === target) {
        while(nums[r+1] ===target) r ++;
        return [l,r]
    }else {
        return [-1,-1]
    }
  
};
console.log(searchRange([5,7,7,8,8,10],6));
