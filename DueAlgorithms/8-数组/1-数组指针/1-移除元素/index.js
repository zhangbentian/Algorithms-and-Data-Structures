//移除元素
//https://leetcode.cn/problems/remove-element/

// 方法1，单指针，while重复判断新长度下最后一个值是否为val
var removeElement = function(nums, val) {
    let len = nums.length;
    if (len < 1) return nums;
    let i = 0;
    while (i < len) {
        while (nums[len - 1] === val) { // 判断最后一位数是否为val
            nums[len - 1] = -1;
            len--;
        }
        if (nums[i] === val) {
            nums[i] = nums[len - 1]
            nums[len - 1] = -1;
            len--;
        }
        i++;
    }
    nums.length = len;
};
// removeElement([0,4,4,0,4,4,4,0,2],4)

//方法二，单双指针
let deleteElement = (nums,val) =>{
    let len = nums.length;
    if(len < 1) return;
    let r = len -1;
    for (let i = 0; i <= r; i++) {
        if(nums[i]===val) {
            swap(nums,i --,r --) // 重新在原i，检查最后替换过来的值是否是val值
        }
    }
    nums.length = r+1;
}

function swap(nums,l,r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
}