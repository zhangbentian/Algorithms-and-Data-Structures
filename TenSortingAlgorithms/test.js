/*
 * @Description: 有问题,联系qq:2479879758
 * @Author: zhulinhai
 * @LastEditTime: 2022-07-28 10:25:29
 */

// 冒泡排序算法

function Bubblesort(arr,fun=(a,b)=>a-b) {
    let len = arr.length;
    let temp;
    while(len) {
        // 最大放到右侧
        for (let i = 0; i < len; i++) {
            if(fun(arr[i],arr[i+1])>0) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        len --;
    }
    return arr;
}
// console.log(Bubblesort([8, 1, 6, 4, 2, 6, 7, 8, 8]));

// 选择排序

console.log(chooseSort([8, 1, 6, 4, 2, 6, 7, 8, 8]));

// 快速排序

// console.log(quickSort([8, 1, 6, 4, 2, 6, 7, 8, 8]));