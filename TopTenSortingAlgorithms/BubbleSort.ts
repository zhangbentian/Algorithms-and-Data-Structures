// 冒泡排序稳定  https://blog.csdn.net/weixin_44820625/article/details/106737719
function BubbleSort(nums:Array<number>) {
    const len = nums.length;
    let count:number = len;
    let tmp:number;
    while(count) {
        for (let index = 0; index < len; index++) {
            if(nums[index]>nums[index+1]) {
              tmp = nums[index];
              nums[index] = nums[index+1];
              nums[index+1] = tmp;
            }
         }
         --count;
    }
    return nums;
}

console.log(BubbleSort([6,5,4,3,2,1]));
