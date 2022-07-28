/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-28 11:14:16
 */
// 简单版，快排，牺牲性能，创建多个数组，进行回调。
function QuickSort(arr:Array<any>):Array<any> {
    let len = arr.length;
    if (len < 2) return arr; // 递归出口
    let lArr:any = [];
    let rArr:any = [];
    let header = arr[0];
    for (let i = 1; i < len; i++) {
        if (header > arr[i]) {
            lArr.push(arr[i])
        } else {
            rArr.push(arr[i])
        }
    }
    lArr = quickSort(lArr);
    rArr = quickSort(rArr); // 使用递归回调的方式
    lArr.push(header);
    return lArr.concat(rArr)
}

// console.log(quickSort([8, 1, 6, 4, 2, 6, 7, 8, 8]));

function swap(arr: { [x: string]: any; }, left: string | number, right: string | number) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
// 标准快排 使用双指针，有问题，哨兵最大,无法排序重复数字
function FastSort(arr: Array<number>, start: number = 0, right = arr.length - 1) {
    if (start > right) return; // 判断回调出口
    let base = arr[start];
    let left = start;
    ++left;
    while (left < right) {
        while (left <= right && arr[left] <= base) left++;
        while (left <= right && arr[right] >= base) right--;

        if (left < right) {
            swap(arr, left, right);
        }
    }
    swap(arr, start, left);
    console.log(arr);
    
    FastSort(arr, start, right);
    FastSort(arr, right + 1)
    return arr;
}
// console.log(FastSort([8, 1, 6, 4, 2, 6, 7, 8, 8]));

function quickSort(arr:Array<number>,left = 0,right = arr.length-1) {
    if(left>right) return;
    const start = left;
    const key = arr[left];
    while(left < right) {
        // 右侧开始遍历
        while(left < right &&  arr[right] >= key) right --; // 必须大于等于，否则遇到key== arr[right]会卡死
        arr[left] = arr[right];

        while(left < right && arr[left] < key) left ++;
        arr[right] = arr[left]
    }
    arr[left] = key;
    quickSort(arr,start,left-1)
    quickSort(arr,left+1)
   
    return arr;
}
console.log(quickSort([8, 1, 6, 4, 2, 6, 7, 8, 8]));
