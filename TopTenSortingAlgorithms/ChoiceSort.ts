/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-26 10:08:26
 */
// 排序的本质是比较和交换,十大排序算法没有优劣之分，只有不同的适应场景
// 选择排序
function MyChoiceSort(arr: Array<any>,fun = (a: number,b: number)=>a-b):Array<number> {
    let len = arr.length;
    let temp: any;
    while(len) {
        let max = 0; // 每次都需要重置索引
        for (let i = 1; i < len; i++) {
            if(fun(arr[i],arr[max])>0) {
                max = i;
            }
        }
        temp = arr[len-1];
        arr[len-1] = arr[max];
        arr[max] = temp;
        console.log(arr[len-1],arr[max]);
        --len;
    }
    return arr;
}

console.log(MyChoiceSort([4,1,6,9,3,2,8,7]));

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
