/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//https://leetcode.cn/problems/merge-sorted-array/
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 || j >= 0) {
        if(i < 0) nums1[k--] = nums2[j--];
        else if(j < 0) nums1[k--] = nums1[i--];
        else if(nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
        else nums1[k--] = nums1[i--];
    }
    return nums1;
};

let nums1 = [1, 2, 7, 2, 5, 6], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n));