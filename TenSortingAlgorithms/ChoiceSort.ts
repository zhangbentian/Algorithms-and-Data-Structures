/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-28 10:25:37
 */
// 排序的本质是比较和交换,十大排序算法没有优劣之分，只有不同的适应场景
// 选择排序,选择排序找出最大数，掉换到目前数组最后位置
function chooseSort(arr:Array<any>) {
    let len = arr.length;
    let temp;
    while(len) {
        let max = 0;
        for (let i = 1; i < len; i++) {
           if(arr[i] > arr[max]) {
                max = i;
           }
        }
        temp = arr[max];
        arr[max] = arr[len-1]
        arr[len-1] = temp;
        len --;
    }
    return arr;
}
console.log(chooseSort([4,1,6,9,3,2,8,7]));

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
