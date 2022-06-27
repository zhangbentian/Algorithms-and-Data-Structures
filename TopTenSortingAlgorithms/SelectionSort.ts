// 选择排序，不稳定
function SelectionSort(nums: Array<number>) {
    const len = nums.length;
    let minIndex: number;
    let temp: number;
    for (let i = 0; i < len-1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    return nums;
};

console.log(SelectionSort([6,5,4,3,3,2,1,7]));
