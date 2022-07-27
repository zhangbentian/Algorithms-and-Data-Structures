/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-27 11:16:49
 */
// 简单版，快排，牺牲性能，创建多个数组，进行回调。
function quickSort(arr:Array<number>):Array<number> {
    let len = arr.length;
    if (len < 2) return arr; // 递归出口
    let lArr:Array<number> = [];
    let rArr:Array<number> = [];
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

function quick_sort(num: Array<number>, l: number = 0, r = num.length) {
    let left = l, right = r - 1, key = num[left];
    while (left < right) {
        // 左为哨兵，从右指针开始判断
        while (left < right && num[right] >= key) {
            --right;
        }
        //如果值小于 key分界值 交换
        num[left] = num[right];
        
        while (left < right && num[left] < key) {
            ++left;
        }
        //如果值大于key分界值 交换
        num[right] = num[left];
    }
    num[right] = key;
    //递归左右部分进行快排
    if (right > l) { // 判断是否到达左边界
        num = quick_sort(num, 0, left);
    }
    if (left + 1 < r) { // 判断是否到达右边界
        num = quick_sort(num, left + 1, r);
    }
    return num;
}


console.log(quick_sort([8, 1, 6, 4, 2, 6, 7, 8, 8]));
